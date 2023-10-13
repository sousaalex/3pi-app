import React, { useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import image_1 from './image/1.png';
import image_2 from './image/2.png';
import image_3 from './image/3.png';
import image_4 from './image/4.gif';
import image_5 from './image/5.jpg';
import image_6 from './image/6.jpg';
import image_7 from './image/7.webp';


export default function App() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  const tema = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (


    <div style={tema} className='container grid grid-cols-1 md:grid-cols-2 gap-4  mx-auto p-16'>

      <div className="bg-slate-950 fixed inset-x-0 top-0 h-16 flex justify-between items-center p-4">
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white text-center md:text-left'>
          Segurança no desenvolvimento de softwares
        </h2>
        <a onClick={toggleDarkMode} className='text-gray-50'>
          {dark ? <BsFillSunFill size={24} /> : <BsFillMoonFill size={24} />}
        </a>
      </div>

      <div >
        <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_1} alt="Imagem 1" />
        <h3 className='text-2xl font-bold text-black-800 my-4 md:my-10'>
          Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
        </h3>
        <p className='text-black-600 my-4 md:my-10'>
          A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
        </p>
      </div>


      {/* ----------- */}

      <div >
        <img className='imagem mb-4 md:mb-12 mt-20 rounded-md p-16 shadow-lg' src={image_2} alt="Imagem 1" />
        <h3 className='text-2xl font-bold text-black-800 my-4 md:my-10'>
          Adote o SDL
        </h3>
        <p className='text-black-600 my-4 md:my-10'>
          O SDL (Security Development Lifecycle, ou Ciclo de Desenvolvimento Seguro, em português) é um processo de desenvolvimento adotado pela Microsoft que envolve o uso de diversos produtos e atividades visando a criação de um sistema seguro. Por meio da integração de medidas e a verificação de processos de uma organização, o método procura auxiliar companhias a criarem aplicações mais seguras.          </p>
      </div>


      {/* --------------- */}



      <div >
        <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_3} alt="Imagem 1" />
        <h3 className='text-2xl font-bold text-black-800 my-4 md:my-10'>
          Use KPIs para avaliar o seu time
        </h3>
        <p className='text-black-600 my-4 md:my-10'>
          Os KPIs são métricas utilizadas para avaliar o desempenho de um setor ou equipe durante um projeto. Por meio dele, os colaboradores podem conhecer melhor a sua evolução no aprendizado de novas técnicas de trabalho. Para o gestor, o KPI representa uma maneira simples de mensurar com mais precisão o conhecimento e o desempenho do seu time.          </p>
      </div>


      {/* ----------- */}

      <div >
        <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_4} alt="Imagem 1" />
        <h3 className='text-2xl font-bold text-black-800 my-4 md:my-10'>
          Sempre revise o código em busca de brechas
        </h3>
        <p className='text-black-600 my-4 md:my-10'>
          O desenvolvimento de sistemas que precisem resistir a ataques mal-intencionados deve englobar uma série de atividades preventivas concentradas na resistência às tentativas de roubo de informações. Entre elas, podemos incluir a realização constante de revisões no código, que podem ser feitas com softwares automatizados ou pela equipe de segurança digital da companhia.          </p>
      </div>


      {/* --------------- */}



      <div >
        <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_5} alt="Imagem 1" />
        <h3 className='text-2xl font-bold text-black-800 my-4 md:my-10'>
          Utilize métodos seguros de transferência e armazenamento de dados
        </h3>
        <p className='text-black-600 my-4 md:my-10'>
          A política de segurança é a base de qualquer rotina que busque mais confiabilidade para os seus serviços digitais. Parte delas envolve o uso de práticas como o PCI-DSS, que aumentam a confiabilidade das trocas de informações. A confidencialidade de uma operação de comunicação, por exemplo, é feita com o uso de métodos de criptografia modernos.          </p>
      </div>


      {/* ----------- */}

      <div >
        <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_6} alt="Imagem 1" />
        <h3 className='text-2xl font-bold text-black-800 my-4 md:my-10'>
          Criando ferramentas confiáveis
        </h3>
        <p className='text-black-600 my-4 md:my-10'>
          A qualidade de um programa pode ser mensurada de diversas maneiras. Estabilidade, confiabilidade, baixo número de falhas e atualizações constantes são algumas das caraterísticas que definem um bom programa. E a segurança de uma aplicação pode definir o seu sucesso em mercados cada vez mais competitivos.          </p>
      </div>

      {/* ----------- */}

      <div className="flex   m-auto">
        <div className='text-center'>
          <img className='imagem mb-4 md:mb-0 mt-10 rounded-md p-12 shadow-lg' src={image_7} alt="Imagem 1" />
          <h3 className='text-2xl font-bold text-black-800 my-4 md:my-10'>
            Use métodos de desenvolvimento seguros
          </h3>
          <p className='text-black-600 my-4 md:my-10 text-center'>
            Todo programador tem um método de desenvolvimento preferido. Independentemente de um time escolher trabalhar com um método ágil ou mais tradicional, ele deve ser adaptado em busca de práticas mais seguras. Assim, sempre que for verificar um código, o engenheiro de software deve rastrear possíveis falhas e brechas que possam comprometer a segurança digital do usuário.            </p>
        </div>
      </div>


    </div>

  );
}
