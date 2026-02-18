import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import {
  DadosFormularioSchema,
  type DadosFormularioType,
} from './Formulario.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDados } from '../../context/DadosContext';

export function useFormulario() {
  const navigate = useNavigate();
  const { adicionar } = useDados();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DadosFormularioType>({
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

  const onEnviar = (dado: DadosFormularioType) => {
    adicionar(dado);
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
