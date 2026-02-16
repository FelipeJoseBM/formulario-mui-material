import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import {
  DadosFormularioSchema,
  type DadosFormulario,
} from './Formulario.types';
import { zodResolver } from '@hookform/resolvers/zod';

export function useFormulario() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DadosFormulario>({
    resolver: zodResolver(DadosFormularioSchema),
    defaultValues: {
      nome: '',
      cor: '',
      casa: '',
      data: '',
      idade: undefined,
      nomePet: '',
    },
  });

  const onEnviar = (dado: DadosFormulario) => {
    navigate('msg', { state: dado });
  };
  
  return {
    register,
    handleSubmit,
    reset,
    errors,
    onEnviar,
  };
}
