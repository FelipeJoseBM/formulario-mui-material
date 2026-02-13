import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useFormulario } from '../hooks/useFormulario';

export default function Forms() {
  const {
    dados,
    handleChange,
    handleIdadeChange,
    handleDataChange,
    handleEnviar,
    resetForm,
  } = useFormulario();
  return (
    <>
      <CssBaseline />
      <Box
        sx={{ bgcolor: 'lightyellow', p: 4 }}
        component="form"
        onSubmit={handleEnviar}
      >
        <Typography variant="h4" sx={{ p: 2 }}>
          Formulário de Cadastro - Mui Material
        </Typography>
        <Stack spacing={2} direction={'column'} margin={10}>
          <Stack spacing={2} direction={'row'}>
            <TextField
              id="nome"
              color="primary"
              helperText={'Digite seu nome completo'}
              label="Nome"
              name="nome"
              placeholder="Seu nome aqui!"
              variant="filled"
              value={dados.nome}
              onChange={handleChange}
              sx={{ width: '50%' }}
            />
            <TextField
              id="casa"
              color="secondary"
              helperText="Digite a cor que vc queria que sua casa fosse"
              label="Casa"
              name="casa"
              placeholder="Cor da sua casa aqui!"
              variant="filled"
              value={dados.casa}
              onChange={handleChange}
              sx={{ width: '25%' }}
            />
            <TextField
              color="success"
              id="nomePet"
              helperText="Digite o nome do seu pet"
              label="Nome do pet"
              name="nomePet"
              placeholder="Nome do seu pet aqui!"
              variant="filled"
              value={dados.nomePet}
              onChange={handleChange}
              sx={{ width: '25%' }}
            />
          </Stack>
          <Stack spacing={2} direction={'row'}>
            <TextField
              color="warning"
              id="cor"
              helperText="Escolha sua cor favorita"
              label="Cor favorita"
              name="cor"
              placeholder="Ex: Azul, Verde..."
              variant="filled"
              value={dados.cor}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              color="primary"
              id="idade"
              helperText="Digite sua idade"
              label="Idade"
              name="idade"
              placeholder="Sua idade"
              variant="filled"
              value={dados.idade}
              onChange={handleIdadeChange}
              type="number"
              fullWidth
            />
            <TextField
              color="error"
              id="data"
              helperText="Digite sua data de nascimento"
              name="data"
              placeholder="Sua data de nascimento"
              variant="filled"
              type="date"
              value={dados.data}
              onChange={handleDataChange}
              fullWidth
            />
          </Stack>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant="contained" color="error" onClick={resetForm}>
            Zerar formulário
          </Button>
          <Button variant="contained" color="success" type="submit">
            Enviar Formulário
          </Button>
        </Stack>
      </Box>
    </>
  );
}
