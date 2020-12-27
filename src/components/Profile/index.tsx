import React from 'react';
import { MdUpdate } from 'react-icons/md';
import { Container, Main, Image, Info, About } from './styles';
import profileImg from '../../assets/profile_1.jpg';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <Image
          style={{
            backgroundImage: `url(${profileImg})`,
          }}
        />
        <Info>
          <h1>Katiele Rezer Menger</h1>
          <span>Doutoranda e Mestre em Ciência Política</span>

          <div>
            <MdUpdate />
            <p>Última atualização do currículo em 19/11/2020</p>
          </div>
        </Info>
      </Main>
      <About>
        <h2>Sobre</h2>
        <p>
          Doutoranda e mestra em Ciência Política pelo Instituto de Estudos
          Sociais e Políticos (IESP / UERJ). Bacharela em Relações
          Internacionais pela Universidade Federal do Rio Grande do Sul (UFRGS).
          Pesquisadora do Observatório Político Sul-Americano (OPSA) e do Núcleo
          de Estudos de Teoria Social e América Latina (NETSAL), no qual é
          coordenadora adjunta e compõe o subgrupo de Movimentos Sociais. Foi
          pesquisadora de iniciação científica entre 2012 e 2015. Realizou
          intercâmbio acadêmico na Facultad de Ciencias Políticas y Sociales da
          Universidad Nacional Autónoma de México (UNAM) no período de 2015/1,
          no curso de Relaciones Internacionales. Suas principais áreas de
          interesse são estudos latino-americanos e estudos africanos, tráfico
          de drogas e violência. Contato: mariliacloss@gmail.com (Texto
          informado pelo autor)
        </p>
      </About>
    </Container>
  );
};

export default Profile;
