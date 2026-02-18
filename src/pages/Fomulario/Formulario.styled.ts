import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const BotaoEnviar = styled(Button)({
  backgroundColor: '#FFD32C',
  color: 'white',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#E0BC00',
  },
});

export const BotaoZerar = styled(Button)({
  backgroundColor: '#C04000',
  color: 'white',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#9C3200',
  },
});
