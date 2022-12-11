import './App.css';
import { Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import SymbolTable from "./components/SymbolTable";
import TextAfterLexer from "./components/TextAfterLexer";
import lexer from "./lexer";
import parser from './parser'

function App() {

  const [rawText, setRawText] = useState("");

  const [lexerResult, setLexerResult] = useState([]);

  const [symbolTable, setSymbolTable] = useState({});

  const [parserSteps, setParserSteps] = useState([]);

  const [parserTokenSteps, setParserTokenSteps] = useState([]);

  const [parserValidTokenCounter, setParserValidTokenCounter] = useState(0);

  const [parserError, setParserError] = useState(false);

  const executeLexer = () => {
    const { result, tableOfSymbols } = lexer(rawText);
    setLexerResult(result);
    setSymbolTable(tableOfSymbols)
  }

  const executeParser = () => {
    const { steps, tokenSteps, validTokenCounter, error } = parser(lexerResult);
    setParserSteps(steps);
    setParserTokenSteps(tokenSteps)
    setParserValidTokenCounter(validTokenCounter)
    setParserError(error);
  }

  const clean = () => {
    setRawText("");
    setLexerResult([]);
    setSymbolTable({});
  }

  return (
    <div className="App pb-5" style={{ overflowX: "hidden" }}>
      <Row className={"px-5"}>
        <Col xs={12}>
          <TextareaAutosize className="mt-5" value={rawText} onChange={({ target: { value } }) => setRawText(value)}
                            style={{ height: "200px", width: "100%", overflowY: "scroll" }}>
          </TextareaAutosize>
        </Col>
        <Col xs={12}>
          <Button className="m-2" style={{ color: "white", backgroundColor: "#1688EE" }} onClick={executeLexer}>
            Executar Análise Léxica
          </Button>
          <Button className="m-2"
                  style={{ color: "white", backgroundColor: lexerResult.length === 0 ? "#54C873" : "#34A853" }}
                  onClick={executeParser}
                  disabled={lexerResult.length === 0}>
            Executar Análise Sintática
          </Button>
          <Button className="m-2" style={{ color: "white", backgroundColor: "#FE0B0B" }} onClick={clean}>
            Limpar
          </Button>
        </Col>
        <Col xs={12}>
          <h1>Analisador Léxico</h1>
        </Col>
        <Col xs={8}>
          <div className={"d-flex pb-0 my-0"}>
            <b>Tokens</b>
          </div>
          <TextAfterLexer lexerResult={lexerResult} mode={"token"}/>
        </Col>
        <Col xs={4}>
          <div className={"d-flex pb-0 my-0"}>
            <b>Código</b>
          </div>
          <TextAfterLexer lexerResult={lexerResult} mode={"raw"}/>
        </Col>
        <Col xs={12}>
          <div className={"d-flex pb-0 mb-0 mt-2"}>
            <b>Tabela de Símbolos</b>
          </div>
          <SymbolTable symbolTable={symbolTable}>
          </SymbolTable>
        </Col>
        <Col xs={12}>
          <h1 className={"py-3"}>Analisador Sintático</h1>
        </Col>
        <Col xs={12}>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Passos do Analisador Sintático</th>
              <th>Tokens Lidos</th>
            </tr>
            </thead>
            <tbody>
            {
              parserSteps.map((step, index) =>
                (
                  <tr>
                    <td>{step}</td>
                    <td>{parserTokenSteps[index]}</td>
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </Col>
        <Col xs={6}>
          <div><b>Erro na análise?</b> {parserError ? "Sim" : "Não"}</div>
        </Col>
        <Col xs={6}>
          <div>
            <b>Quantos tokens foram lidos
              corretamente?</b> {parserError ? parserValidTokenCounter - 1 : parserValidTokenCounter}</div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
