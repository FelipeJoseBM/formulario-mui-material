import * as z from 'zod';

export const DadosFormularioSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  casa: z.string().min(2, 'Sua casa dever ter pelo menos 1 característica'),
  nomePet: z.string().min(1, 'Nome do seu pet deve haver no mínimo 1 caracter'),
  cor: z.string().min(4, 'Sua cor deve ter pelo menos 4 caracteres'),
  idade: z.number().min(18, 'Você deve ser maior de idade'),
  data: z.string().nonempty('A data é um campo é obrigatório'),
});

export type DadosFormularioType = z.infer<typeof DadosFormularioSchema>;
