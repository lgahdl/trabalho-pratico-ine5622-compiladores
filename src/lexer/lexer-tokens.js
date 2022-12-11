const lexerTokens = [
  {
    "name": "string_constant",
    "regex": /"[^"]*"/g
  },
  {
    "name": "[",
    "regex": /\[/g
  },
  {
    "name": "]",
    "regex": /]/g
  },
  {
    "name": "(",
    "regex": /\(/g
  },
  {
    "name": ")",
    "regex": /\)/g
  },
  {
    "name": "{",
    "regex": /{/g
  },
  {
    "name": "}",
    "regex": /}/g
  },
  {
    "name": ",",
    "regex": /,/g
  },
  {
    "name": ";",
    "regex": /;/g
  },
  {
    "name": ">=",
    "regex": />=/g
  },
  {
    "name": "<=",
    "regex": /<=/g
  },
  {
    "name": "<",
    "regex": /</g
  },
  {
    "name": ">",
    "regex": />/g
  },
  {
    "name": "==",
    "regex": /==/g
  },
  {
    "name": "!=",
    "regex": /!=/g
  },
  {
    "name": "=",
    "regex": /=/g
  },
  {
    "name": "+",
    "regex": /\+/g
  },
  {
    "name": "-",
    "regex": /-/g
  },
  {
    "name": "*",
    "regex": /\*/g
  },
  {
    "name": "/",
    "regex": /\//g
  },
  {
    "name": "%",
    "regex": /%/g
  },
  {
    "name": "def",
    "regex": /\bdef\b/g
  },
  {
    "name": "int",
    "regex": /\bint\b/g
  },
  {
    "name": "float",
    "regex": /\bfloat\b/g
  },
  {
    "name": "string",
    "regex": /\bstring\b/g
  },
  {
    "name": "if",
    "regex": /\bif\b/g
  },
  {
    "name": "else",
    "regex": /\belse\b/g
  },
  {
    "name": "for",
    "regex": /\bfor\b/g
  },
  {
    "name": "print",
    "regex": /\bprint\b/g
  },
  {
    "name": "read",
    "regex": /\bread\b/g
  },
  {
    "name": "break",
    "regex": /\bbreak\b/g
  },
  {
    "name": "return",
    "regex": /\breturn\b/g
  },
  {
    "name": "null",
    "regex": /\bnull\b/g
  },
  {
    "name": "new",
    "regex": /\bnew\b/g
  },
  {
    "name": "float_constant",
    "regex": /\b[0-9]*\.[0-9]+\b/g
  },
  {
    "name": "int_constant",
    "regex": /\b[0-9]+\b/g
  },
  {
    "name": "ident",
    "regex": /^\b[A-Za-z]+\b$/g
  }
]

export default lexerTokens;