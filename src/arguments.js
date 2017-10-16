const recast = require("recast")

function pluckPattern (pattern) {
  return ['{',
    pattern.map(({ key }) => key.name).join(', '),
  '}'].join(' ')
}

function pluckParamName (param) {
  if (param.name) return param.name
  if (param.left) return pluckParamName(param.left)
  if (param.properties) return pluckPattern(param.properties)
  if (param.type === 'RestElement') return '...' + pluckParamName(param.argument)
  return
}

module.exports = function (method) {
  const str = method.toString()
  const ast = recast.parse('(' + str + ')')
  const { body } = ast.program
  return body.reduce((args, exp) => {
    if (exp.params) return args.concat(exp.params)
    if (exp.expression.params) return args.concat(exp.expression.params)
    return args
  }, []).map(pluckParamName)
}
