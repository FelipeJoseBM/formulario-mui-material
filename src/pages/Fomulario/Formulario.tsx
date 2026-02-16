import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useFormulario } from './Formulario.hook';

export default function Formulario() {
  const { register, handleSubmit, reset, errors, onEnviar } = useFormulario();
  return (
    <>
      <Box
        sx={{ bgcolor: 'lightyellow', p: 4 }}
        component="form"
        onSubmit={handleSubmit(onEnviar)}
      >
        <Typography variant="h4" sx={{ p: 2 }}>
          Formulário de Cadastro - Mui Material
        </Typography>
        <Stack spacing={2} direction={'column'} margin={10}>
          <Stack spacing={2} direction={'row'}>
            <TextField
              id="nome"
              color="primary"
              label="Nome"
              placeholder="Seu nome aqui!"
              variant="filled"
              sx={{ width: '50%' }}
              {...register('nome')}
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />
            <TextField
              id="casa"
              color="secondary"
              label="Casa"
              placeholder="Cor da sua casa aqui!"
              variant="filled"
              sx={{ width: '25%' }}
              {...register('casa')}
              error={!!errors.casa}
              helperText={errors.casa?.message}
            />
            <TextField
              color="success"
              id="nomePet"
              label="Nome do pet"
              placeholder="Nome do seu pet aqui!"
              variant="filled"
              sx={{ width: '25%' }}
              {...register('nomePet')}
              error={!!errors.nomePet}
              helperText={errors.nomePet?.message}
            />
          </Stack>
          <Stack spacing={2} direction={'row'}>
            <TextField
              color="warning"
              id="cor"
              label="Cor favorita"
              placeholder="Ex: Azul, Verde..."
              variant="filled"
              fullWidth
              {...register('cor')}
              error={!!errors.cor}
              helperText={errors.cor?.message}
            />
            <TextField
              color="primary"
              id="idade"
              label="Idade"
              placeholder="Sua idade"
              variant="filled"
              fullWidth
              {...register('idade', { valueAsNumber: true })}
              error={!!errors.idade}
              helperText={errors.idade?.message}
            />
            <TextField
              color="error"
              id="data"
              placeholder="Sua data de nascimento"
              variant="filled"
              type="date"
              fullWidth
              {...register('data')}
              error={!!errors.data}
              helperText={errors.data?.message}
            />
          </Stack>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant="contained" color="error" onClick={() => reset()}>
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
