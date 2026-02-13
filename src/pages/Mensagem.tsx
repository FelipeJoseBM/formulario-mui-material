import { useLocation } from 'react-router-dom';
import type { DadosFormulario } from '../types/forms.types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useFormulario } from '../hooks/useFormulario';

export default function Mensagem() {
  const location = useLocation();
  const dados = location.state as DadosFormulario;
  const { handleVoltar } = useFormulario();

  if (!dados) {
    return (
      <>
        <CssBaseline />
        <Box
          sx={{ bgcolor: 'red', p: 4 }}
          onSubmit={handleVoltar}
          component="form"
        >
          <Typography variant="h4">Dados não encontrados!!!</Typography>
          <Button type="submit">Voltar para o formulário</Button>
        </Box>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{ bgcolor: 'lightyellow', p: 4 }}
        onSubmit={handleVoltar}
        component="form"
      >
        <Typography variant="h4">Sua mensagem:</Typography>
        <Card variant="outlined" sx={{ width: '30%' }}>
          <Typography>Nome: {dados.nome}</Typography>
          <Typography>Casa: {dados.casa}</Typography>
          <Typography>Pet: {dados.nomePet}</Typography>
          <Typography>Cor: {dados.cor}</Typography>
          <Typography>Idade: {dados.idade}</Typography>
          <Typography>Data: {dados.data}</Typography>
          <Button type="submit">Voltar para o formulário</Button>
        </Card>
      </Box>
    </>
  );
}
