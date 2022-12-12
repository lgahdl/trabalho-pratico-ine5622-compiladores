import lexerTokens from './lexer-tokens'

const lexer = (text) => {
  
  let resultText = text;
  const tableOfSymbols = {}
  //VARIÁVEL DE MATCHES NECESSÁRIA PARA CRIAÇÃO DO RESULTADO COM RELAÇÃO ORDENADA ENTRE O TOKEN E AS PALAVRA IDENTIFICADAS POR ELE
  const matchesByToken = { "ident": [], "DESCONHECIDO": [] }
  
  //INICIA ANÁLISE DE TODOS OS TOKENS, EXCETO OS IDENTIFICADORES
  lexerTokens.forEach(({ name, regex }) => {
    if (name === "ident") {
      return;
    }
    matchesByToken[name] = [...resultText.matchAll(regex)].map(([v]) => v);
    resultText = resultText.replaceAll(regex, ` ${name} `);
    console.log(name);
    console.log(resultText)
  })
  const lexerTokensNames = lexerTokens.map(({ name }) => name)

  const arrayOfTokens = resultText.split(/\s+/).filter((value) => !!value);

  //INICIA ANÁLISE DOS IDENTIFICADORES
  const arrayOfTokensWithIDAndUnknown = arrayOfTokens.map((token, index) => {
    if (lexerTokensNames.includes(token)) {
      return token;
    }
    if (token.match(lexerTokens.find(({ name }) => name === "ident").regex)?.length === 1) {
      matchesByToken["ident"] = [...matchesByToken["ident"], token]
      if (tableOfSymbols[token]) {
        tableOfSymbols[token].numberOfOccurrences += 1;
      } else {
        tableOfSymbols[token] = {
          numberOfOccurrences: 1,
          varType: ["int", "float", "string"].includes(arrayOfTokens[index - 1])
            ? arrayOfTokens[index - 1]
            : arrayOfTokens[index - 1] === "def"
              ? "function"
              : "UNDEFINED"
        }
      }
      return "ident";
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