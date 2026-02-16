import { useNavigate } from 'react-router';

export default function useMensagem() {
  const navigate = useNavigate();

  const onVoltar = () => {
    navigate('/');
  };
  
  return { onVoltar };
}
