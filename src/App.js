import './App.css';
import { Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SymbolTable from "./components/SymbolTable";
import TextAfterLexer from "./components/TextAfterLexer";
import lexer from "./lexer";

function App() {
  const [rawText, setRawText] = useState("");

  const [lexerResult, setLexerResult] = useState([]);

  const [symbolTable, setSymbolTable] = useState({});


  const executeLexer = () => {
    const { result, tableOfSymbols } = lexer(rawText);
    setLexerResult(result);
    setSymbolTable(tableOfSymbols)
  }

  return (
    <div className="App">
      <Row className={"px-5"}>
        <Col xs={12}>
          <TextareaAutosize className="mt-5" value={rawText} onChange={({ target: { value } }) => setRawText(value)}
                            style={{ height: "200px", width: "100%", overflowY: "scroll" }}>
          </TextareaAutosize>
        </Col>
        <Col xs={12}>
          <Button style={{ color: "white", backgroundColor: "blue" }} onClick={executeLexer}>
            Executar Análise Léxica
          </Button>
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
          <SymbolTable className="mt-5" symbolTable={symbolTable}>
          </SymbolTable>
        </Col>
      </Row>
    </div>
  );
}

export default App;
