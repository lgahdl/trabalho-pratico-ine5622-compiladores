import { Tooltip } from "@mui/material";
import { getAllIndexes, splitArrayOnIndexes } from "../utils";

const TextAfterLexer = ({ lexerResult, mode }) => {
  const indexesOfPontoEVirgula = getAllIndexes(lexerResult.map(({ token }) => token), ";");
  const indexesOfAbreChave = getAllIndexes(lexerResult.map(({ token }) => token), "{");
  const indexesOfFechaChave = getAllIndexes(lexerResult.map(({ token }) => token), "}");
  const allIndexes = [...indexesOfPontoEVirgula, ...indexesOfAbreChave, ...indexesOfFechaChave].sort((v1, v2) => v1 - v2);
  const lexerResultLines = splitArrayOnIndexes(lexerResult, allIndexes);
  return (
    <div style={{ border: "1px solid black", overflowY: "scroll", maxHeight: "400px", minHeight: "200px" }}>
      {lexerResultLines.map((line, lineIndex) => {
        return (<div className={"d-flex"}>
          {mode === "raw" ?
            line.map(({ token, match }, tokenIndex) => {
              return (
                <div className={"d-flex flex-column text-center p-1"}>
                  <Tooltip title={token}>
                    <div style={{ color: token === "DESCONHECIDO" ? "red" : "black" }}>{match}</div>
                  </Tooltip>
                </div>
              )
            }) :
            line.map(({ token, match }, tokenIndex) => {
              return (
                <div className={"d-flex flex-column text-center p-1"}>
                  <Tooltip title={match}>
                    <div style={{ color: token === "DESCONHECIDO" ? "red" : "black" }}>{token}</div>
                  </Tooltip>
                </div>
              )
            })
          }
        </div>)
      })}
    </div>
  )
}

export default TextAfterLexer;