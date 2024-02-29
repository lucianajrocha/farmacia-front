import Categoria from '../categoria/Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  preco: number;
  foto: string
  categoria: Categoria | null;
}