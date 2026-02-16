import type { DadosFormulario } from '../Fomulario/Formulario.types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router';
import useMensagem from './Mensagem.hook';

export default function Mensagem() {
  const localizacao = useLocation();
  const dados = localizacao.state as DadosFormulario;
  const { onVoltar } = useMensagem();

  return (
    <>
      <Box sx={{ bgcolor: 'lightyellow', p: 4 }}>
        <Typography variant="h4">Sua mensagem:</Typography>
        <Card variant="outlined" sx={{ width: '30%' }}>
          <Typography>Nome: {dados?.nome}</Typography>
          <Typography>Casa: {dados?.casa}</Typography>
          <Typography>Pet: {dados?.nomePet}</Typography>
          <Typography>Cor: {dados?.cor}</Typography>
          <Typography>Idade: {dados?.idade}</Typography>
          <Typography>Data: {dados?.data}</Typography>
          <Button onClick={onVoltar}>Voltar para o formulário</Button>
        </Card>
      </Box>
    </>
  );
}
