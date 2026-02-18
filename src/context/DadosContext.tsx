import { createContext, useContext, useState } from 'react';
import type { DadosFormularioType } from '../pages/Fomulario/Formulario.schema';

type DadosContextType = {
  lista: DadosFormularioType[];
  adicionar: (dado: DadosFormularioType) => void;
};

const DadosContext = createContext<DadosContextType | null>(null);

export function DadosProvider({ children }: { children: React.ReactNode }) {
  const [lista, setLista] = useState<DadosFormularioType[]>([]);

  const adicionar = (novo: DadosFormularioType) => {
    setLista((prev) => [...prev, novo]);
  };

  return (
    <DadosContext.Provider value={{ lista, adicionar }}>
      {children}
    </DadosContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDados() {
  const context = useContext(DadosContext);
  if (!context) {
    throw new Error('useDados precisa estar dentro do Provider');
  }
  return context;
}
