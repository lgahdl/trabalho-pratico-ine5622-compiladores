const lexerTokens = [
  {
    "name": "VARSTRING",
    "regex": /"[^"]*"/g
  },
  {
    "name": "ABRECOLCHETE",
    "regex": /\[/g
  },
  {
    "name": "FECHACOLCHETE",
    "regex": /]/g
  },
  {
    "name": "ABREPARENTESES",
    "regex": /\(/g
  },
  {
    "name": "FECHAPARENTESES",
    "regex": /\)/g
  },
  {
    "name": "ABRECHAVE",
    "regex": /{/g
  },
  {
    "name": "FECHACHAVE",
    "regex": /}/g
  },
  {
    "name": "VIRGULA",
    "regex": /,/g
  },
  {
    "name": "PONTOEVIRGULA",
    "regex": /;/g
  },
  {
    "name": "MAIOROUIGUAL",
    "regex": />=/g
  },
  {
    "name": "MENOROUIGUAL",
    "regex": /<=/g
  },
  {
    "name": "MENOR",
    "regex": /</g
  },
  {
    "name": "MAIOR",
    "regex": />/g
  },
  {
    "name": "IGUAL",
    "regex": /==/g
  },
  {
    "name": "DIFERENTE",
    "regex": /!=/g
  },
  {
    "name": "ATRIBUICAO",
    "regex": /=/g
  },
  {
    "name": "MAIS",
    "regex": /\+/g
  },
  {
    "name": "MENOS",
    "regex": /-/g
  },
  {
    "name": "MULTIPLICACAO",
    "regex": /\*/g
  },
  {
    "name": "DIVISAO",
    "regex": /\//g
  },
  {
    "name": "RESTO",
    "regex": /%/g
  },
  {
    "name": "DEF",
    "regex": /\bdef\b/g
  },
  {
    "name": "INT",
    "regex": /\bint\b/g
  },
  {
    "name": "FLOAT",
    "regex": /\bfloat\b/g
  },
  {
    "name": "STRING",
    "regex": /\bstring\b/g
  },
  {
    "name": "IF",
    "regex": /\bif\b/g
  },
  {
    "name": "ELSE",
    "regex": /\belse\b/g
  },
  {
    "name": "FOR",
    "regex": /\bfor\b/g
  },
  {
    "name": "PRINT",
    "regex": /\bprint\b/g
  },
  {
    "name": "READ",
    "regex": /\bread\b/g
  },
  {
    "name": "BREAK",
    "regex": /\bbreak\b/g
  },
  {
    "name": "RETURN",
    "regex": /\breturn\b/g
  },
  {
    "name": "NULL",
    "regex": /\bnull\b/g
  },
  {
    "name": "NEW",
    "regex": /\bnew\b/g
  },
  {
    "name": "VARFLOAT",
    "regex": /[0-9]*\.[0-9]+/g
  },
  {
    "name": "VARINT",
    "regex": /[0-9]+/g
  },
  {
    "name": "ID",
    "regex": /\b[A-Za-z]+\b/g
  }
]

export default lexerTokens;