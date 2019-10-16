function typeHandler(tokens, walk, current, currentToken) {
  console.log(current);
  const node = {
    type: 'DeclarationExpression',
    name: currentToken.value,
    params: []
  };
  currentToken = tokens[++current];
  while (currentToken.class !== 'end') {
    node.params.push(walk(current));
    currentToken = tokens[current];
  }
  current++;
  return [node, current];
}

module.exports = {
  typeHandler
};
