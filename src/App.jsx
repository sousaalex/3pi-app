import React, { useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

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
    <>
      <div className="navbar">
        <h2 className='title-navbar'>Segurança no desenvolvimento de softwares</h2>
        <a onClick={mudarTema}>
          {dark ? <BsFillSunFill size={34} /> : <BsFillMoonFill size={34} />}
        </a>
      </div>

      <div style={tema}>
        <div className='container'>
          <h3 className='header'>
            Segurança no desenvolvimento de softwares – Melhorando a criação de soluções digitais
          </h3>
          <p className='text'>
            A segurança digital é cada vez mais importante para quem trabalha com a criação de sistemas. Das primeiras etapas de desenvolvimento à implementação e distribuição de uma ferramenta, as práticas de segurança desempenham um papel importante para garantir que o usuário final possa ter acesso a uma ferramenta confiável. Entre as principais rotinas de desenvolvimento de uma ferramenta segura podemos destacar:
          </p>

          <h3 className='header'>
            Utilize métodos seguros de transferência e armazenamento de dados
          </h3>
          <p className='text'>
            A política de segurança é a base de qualquer rotina que busca mais confiabilidade para os serviços digitais. Parte delas envolve o uso de práticas como o PCI-DSS, que aumentam a confiabilidade das trocas de informações. A confidencialidade de uma operação de comunicação, por exemplo, é feita com o uso de métodos de criptografia modernos.

            Já o aumento da integridade e autenticidade dos dados é feito com rotinas de verificação de pacotes de dados. Dessa forma, seja no armazenamento, processamento ou troca de arquivos e informações, tanto o remetente quanto o destinatário terão a certeza de que a conexão utilizada é 100% segura. Assim, a captura e o roubo de dados sensíveis são evitados.
          </p>

          <h3 className='header'>
            Tenha um ambiente de desenvolvimento seguro
          </h3>
          <p className='text'>
            Uma companhia que lida com o desenvolvimento de ferramentas de TI não deve trabalhar apenas em busca de mais segurança digital. Ter ambientes físicos livres de vulnerabilidades também é necessário. O acesso aos setores relacionados à criação de um sistema deve ser controlado. Além disso, os servidores devem estar isolados para evitar o seu uso por pessoal não autorizado.
          </p>

          <h3 className='header'>
            Use métodos de desenvolvimento seguros
          </h3>
          <p className='text'>
            Todo programador tem um método de desenvolvimento preferido. Independentemente de um time escolher trabalhar com um método ágil ou mais tradicional, ele deve ser adaptado em busca de práticas mais seguras. Assim, sempre que for verificar um código, o engenheiro de software deve rastrear possíveis falhas e brechas que possam comprometer a segurança digital do usuário.

            A mesma atenção deve ser dada para o tamanho dos buffers e os arrays de software, que não devem comprometer a experiência de uso. Além disso, os códigos de erro durante a compilação devem ser rastreados e solucionados rapidamente.
          </p>

          <h3 className='header'>
            Sempre revise o código em busca de brechas
          </h3>
          <p className='text'>
            O desenvolvimento de sistemas que precisam resistir a ataques mal-intencionados deve englobar uma série de atividades preventivas concentradas na resistência às tentativas de roubo de informações. Entre elas, podemos incluir a realização constante de revisões no código, que podem ser feitas com softwares automatizados ou pela equipe de segurança digital da companhia.
          </p>
            <h3 className='header'>
              Use KPIs para avaliar o seu time
            </h3>
            <p className='text'>
              Os KPIs são métricas utilizadas para avaliar o desempenho de um setor ou equipe durante um projeto. Por meio dele, os colaboradores podem conhecer melhor a sua evolução no aprendizado de novas técnicas de trabalho. Para o gestor, o KPI representa uma maneira simples de mensurar com mais precisão o conhecimento e o desempenho do seu time.

              Quando falamos de segurança digital, os KPIs podem ser utilizados para atribuir padrões de segurança no projeto. Assim, os times podem trabalhar em busca de novos métodos de segurança no desenvolvimento de softwares que o protejam das ameaças mais comuns do mundo digital, como vírus e SQL injections.
            </p>

            <h3 className='header'>
              Adote o SDL
            </h3>
            <p className='text'>
              O SDL (Security Development Lifecycle, ou Ciclo de Desenvolvimento Seguro, em português) é um processo de desenvolvimento adotado pela Microsoft que envolve o uso de diversos produtos e atividades visando a criação de um sistema seguro. Por meio da integração de medidas e a verificação de processos de uma organização, o método procura auxiliar companhias a criarem aplicações mais seguras.
            </p>

            <h3 className='header'>
              Criando ferramentas confiáveis
            </h3>
            <p className='text'>
              A qualidade de um programa pode ser mensurada de diversas maneiras. Estabilidade, confiabilidade, baixo número de falhas e atualizações constantes são algumas das características que definem um bom programa. E a segurança de uma aplicação pode definir o seu sucesso em mercados cada vez mais competitivos.

              Na era da informação, os ataques a computadores, tablets e celulares são cada vez mais frequentes. Nesse cenário, o desenvolvedor é obrigado a oferecer aplicativos mais seguros para os seus usuários. E quando falamos do Brasil, um dos países mais vulneráveis do mundo, a implementação de processos de segurança e as boas práticas de desenvolvimento tornam-se ainda mais importantes. Assim, ao criar ferramentas confiáveis, o nosso bem mais importante no mundo digital, a informação, será protegido.

              O gerenciamento dos times na busca de processos de segurança no desenvolvimento de softwares mais seguros tem feito parte da rotina de diversas empresas. É o caso da sua? Compartilhe conosco!  </p>
          
          </div>
        </div>
      </>
    );
}
