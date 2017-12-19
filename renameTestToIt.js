module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const testOnly = (path) => path.value.expression.callee && path.value.expression.callee.name === 'test';

  const convertToIt = (path) => (
    j.expressionStatement(
      j.callExpression(
        j.identifier('it'),
        path.value.expression.arguments,
      ),
    )
  );

  return j(file.source)
    .find(j.ExpressionStatement)
    .filter(testOnly)
    .replaceWith(convertToIt)
    .toSource();
};
