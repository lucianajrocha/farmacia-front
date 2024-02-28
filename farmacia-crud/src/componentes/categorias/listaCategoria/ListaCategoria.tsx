import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../model/categoria/Categoria'
import { buscar, deletar } from '../../../services/Services'
import CardCategoria from '../cardCategoria/CardCategoria';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function buscarCategoria() {
    try {
      await buscar('/categoria', setCategoria);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        
      }
    }
  }

  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);
  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;