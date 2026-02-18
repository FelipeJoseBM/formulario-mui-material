import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDados } from '../../context/DadosContext';

export default function ListaDados() {
  const { lista } = useDados();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Casa</TableCell>
            <TableCell align="right">Nome do pet</TableCell>
            <TableCell align="right">Cor</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.nome}
              </TableCell>
              <TableCell align="right">{item.casa}</TableCell>
              <TableCell align="right">{item.nomePet}</TableCell>
              <TableCell align="right">{item.cor}</TableCell>
              <TableCell align="right">{item.idade}</TableCell>
              <TableCell align="right">{item.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
