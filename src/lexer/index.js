import lexerTokens from './lexer-tokens'

const lexer = (text) => {
  let resultText = text;
  const tableOfSymbols = {}
  const matchesByToken = { "ID": [], "DESCONHECIDO": [] }

  lexerTokens.forEach(({ name, regex }) => {
    if (name === "ID") {
      return;
    }
    matchesByToken[name] = [...resultText.matchAll(regex)].map(([v]) => v);
    resultText = resultText.replaceAll(regex, ` ${name} `);
  })
  const lexerTokensNames = lexerTokens.map(({ name }) => name)

  const arrayOfTokens = resultText.split(/\s+/).filter((value) => !!value);

  const arrayOfTokensWithIDAndUnknown = arrayOfTokens.map((token, index) => {
    if (lexerTokensNames.includes(token)) {
      return token;
    }
    if (token.match(lexerTokens.find(({ name }) => name === "ID").regex)) {
      matchesByToken["ID"] = [...matchesByToken["ID"], token]
      if (tableOfSymbols[token]) {
        tableOfSymbols[token].numberOfOccurrences += 1;
      } else {
        tableOfSymbols[token] = { numberOfOccurrences: 1, varType: arrayOfTokens[index - 1] }
      }
      return "ID";
    }
    matchesByToken["DESCONHECIDO"] = [...matchesByToken["DESCONHECIDO"], token];
    return `DESCONHECIDO`;
  })
  const result = arrayOfTokensWithIDAndUnknown.map((token) => {
    return { token, match: matchesByToken[token].shift() }
  })
  return { result, tableOfSymbols }
}

export default lexer;