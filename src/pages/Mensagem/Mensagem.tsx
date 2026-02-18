import type { DadosFormularioType } from '../Fomulario/Formulario.schema';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useLocation } from 'react-router';
import useMensagem from './Mensagem.hook';
import Stack from '@mui/material/Stack';
import { BotaoVoltar } from './Mensagem.styled';
import ListaDados from '../../components/ListaDados/ListaDados';

export default function Mensagem() {
  const localizacao = useLocation();
  const dados = localizacao.state as DadosFormularioType;
  const { onVoltar } = useMensagem();

  return (
    <>
      <Stack
        direction={'row'}
        sx={{ bgcolor: 'lightyellow', p: 4, height: '80vh' }}
      >
        <Stack>
          <Typography variant="h4">Sua mensagem:</Typography>
          <Card variant="outlined" sx={{ width: '80%' }}>
            <Typography>Nome: {dados?.nome}</Typography>
            <Typography>Casa: {dados?.casa}</Typography>
            <Typography>Pet: {dados?.nomePet}</Typography>
            <Typography>Cor: {dados?.cor}</Typography>
            <Typography>Idade: {dados?.idade}</Typography>
            <Typography>Data: {dados?.data}</Typography>
          </Card>
          <Stack sx={{ width: 237, paddingTop: 2 }}>
            <BotaoVoltar onClick={onVoltar}>
              Voltar para o formulário
            </BotaoVoltar>
          </Stack>{' '}
        </Stack>
        <Stack sx={{ paddingLeft: 5 }}>
          <ListaDados></ListaDados>
        </Stack>
      </Stack>
    </>
  );
}
