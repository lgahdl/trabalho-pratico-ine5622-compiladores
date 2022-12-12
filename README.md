# Analisador Léxico
&nbsp; O Analisador léxico é uma ferramenta para verificar se as palavras e símbolos escritos são reconhecidos pela gramática.
<br/>
## Execução
&nbsp; A execução da análise léxica é feita digitando o código fonte na primeira caixa de texto, e após o código estar escrito, 
apertar no botão "Executar análise léxica". O programa irá preencher dois campos de texto, à esquerda estão os tokens 
identificados pelo analisador, e à direita está o código escrito, ambos elementos dos campos de texto referenciam seus 
tokens ou palavras.

# Analisador Sintático
&nbsp; O Analisador Sintático é uma ferramenta para verificar se o trecho de código interpretado segue corretamente a gramática
proposta, os fragmentos de programa contemplam algo que faz sentido e nessa análise já é esclarecido sobre as funcionalidades
individuais de cada fragmento de código, o sentido total do programa ainda não é possível, já que o sentido semântico foi analisado.
<br/>
## Execução
&nbsp; Para analisar sintaticamente, você precisa antes ter feito uma Análise léxica sobre seu programa, uma vez que o botão
"Executar Análise Sintática" esteja habilitado, é só clicar e ele formará uma tabela com todas as etapas da análise semântica, 
à esquerda estão as etapas dos símbolos terminais sendo decompostos, e à direita estão as etapas dos tokens(símbolos não-terminais) 
sendo um a um interpretado pelo analisador e removido da pilha de tokens.

# Desenvolvedor
Para rodar o programa em sua máquina, você precisará de node(v14.20.1), abra a pasta do programa no terminal e digite:
```
npm install
```
```
npm run start
```
O programa deverá rodar na url ```localhost:3000```.