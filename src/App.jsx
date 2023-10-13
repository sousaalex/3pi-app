import React, { useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import image_1 from './image/1.png';
import image_2 from './image/2.png';
import image_3 from './image/3.png';
import image_4 from './image/4.gif';

export default function App() {
  const [dark, setDark] = useState(false);

  const tema = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  const mudarTema = () => {
    setDark(!dark);
  };

  return (
    <div>
      <div className="bg-slate-950 fixed inset-x-0 top-0 h-16 flex justify-between items-center p-4">
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white text-center md:text-left'>
          Segurança no desenvolvimento de softwares
        </h2>
        <a onClick={mudarTema} className='text-gray-50'>
          {dark ? <BsFillSunFill size={24} /> : <BsFillMoonFill size={24} />}
        </a>
      </div>

      <div style={tema} className='container grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl mx-auto p-8'>
   
{/* --------------- */}



        <div >
          <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
          <h3 className='text-2xl font-bold text-gray-800 my-4 md:my-10'>
            Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
          </h3>
          <p className='text-gray-600 my-4 md:my-10'>
            A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
          </p>
        </div>

        
{/* ----------- */}

        <div >
          <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
          <h3 className='text-2xl font-bold text-gray-800 my-4 md:my-10'>
            Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
          </h3>
          <p className='text-gray-600 my-4 md:my-10'>
            A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
          </p>
        </div>


{/* --------------- */}



<div >
          <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
          <h3 className='text-2xl font-bold text-gray-800 my-4 md:my-10'>
            Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
          </h3>
          <p className='text-gray-600 my-4 md:my-10'>
            A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
          </p>
        </div>

        
{/* ----------- */}

        <div >
          <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
          <h3 className='text-2xl font-bold text-gray-800 my-4 md:my-10'>
            Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
          </h3>
          <p className='text-gray-600 my-4 md:my-10'>
            A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
          </p>
        </div>


{/* --------------- */}



<div >
          <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
          <h3 className='text-2xl font-bold text-gray-800 my-4 md:my-10'>
            Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
          </h3>
          <p className='text-gray-600 my-4 md:my-10'>
            A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
          </p>
        </div>

        
{/* ----------- */}

        <div >
          <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
          <h3 className='text-2xl font-bold text-gray-800 my-4 md:my-10'>
            Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
          </h3>
          <p className='text-gray-600 my-4 md:my-10'>
            A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
          </p>
        </div>

        {/* ----------- */}

        <div className="flex justify-center items-center min-h-screen">
  <div className='text-center'>
    <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
    <h3 className='text-2xl font-bold text-gray-800 my-4 md:my-10'>
      Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
    </h3>
    <p className='text-gray-600 my-4 md:my-10'>
      A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
    </p>
  </div>
</div>



        
      </div>
    </div>
  );
}
