import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const SymbolTable = ({ symbolTable, className }) => {
  return (
    <div className={`${className}`} style={{ height: "400px", width: "100%", overflowY: "scroll" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome da variável</TableCell>
              <TableCell align="right">Ocorrências</TableCell>
              <TableCell align="right">Tipo da variável</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(symbolTable).map(([varName, {numberOfOccurrences, varType}]) => { 

              return (
                <TableRow
                  key={varName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {varName}
                  </TableCell>
                  <TableCell align="right">{numberOfOccurrences}</TableCell>
                  <TableCell align="right">{varType}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SymbolTable