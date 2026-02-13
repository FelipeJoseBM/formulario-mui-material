import { useState } from 'react';
import type { DadosFormulario } from '../types/forms.types';
import { useNavigate } from 'react-router-dom';

export function useFormulario() {
  const navigate = useNavigate();

  const [dados, setDados] = useState<DadosFormulario>({
    nome: '',
    casa: '',
    nomePet: '',
    cor: '',
    idade: '',
    data: '',
  });

  // Handler genérico para campos de texto
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDados((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler específico para idade (conversão para number)
  const handleIdadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setDados((prevState) => ({
      ...prevState,
      idade: value === '' ? '' : Number(value),
    }));
  };

  // Handler específico para data (mantém como string, melhor para input type="date")
  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setDados((prevState) => ({
      ...prevState,
      data: value, // A data fica como string "YYYY-MM-DD"
    }));
  };

  const handleEnviar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate('/mensagem', { state: dados });
  };

  const handleVoltar = () => {
    navigate('/', {});
  };
  
  // Função para resetar o formulário
  const resetForm = () => {
    setDados({
      nome: '',
      casa: '',
      nomePet: '',
      cor: '',
      idade: '',
      data: '',
    });
  };

  return {
    dados,
    handleChange,
    handleIdadeChange,
    handleDataChange,
    handleEnviar,
    handleVoltar,
    resetForm,
  };
}
