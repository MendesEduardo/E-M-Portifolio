import dev from '../../assets/desenho.png';
import AllSkills from '../../components/AllSkills';
import Container from '../../components/Container';
import Marking from '../../components/Marking';
import "./About.scss";

function About() {
  return (
    <Container>
      <section className='about'>
        <Marking>
          Sobre
        </Marking>
        <h2>Um pouco sobre mim</h2>
        <article className='info-about'>
          <div className='image-about'>
            <img src={dev} alt="Perfil" />
          </div>
          <div className='resume'>
            <h3>Desenvolvedor de Software Front-end</h3>
            <p>
              Olá, eu sou o Eduardo, cursando análise e desenvolvimento de sistemas na Unip e aluno Alura.
            </p>
            <p>
              Minha paixão por desenvolvimento de software começou quando criei meu primeiro projeto e percebi as coisas incríveis que você pode fazer com lógica, programação e uma forte ajuda da tecnologia. Desde então, tenho trabalhado incansavelmente para aprimorar minhas habilidades em JavaScript, React, NodeJs e TypeScript.
            </p>
            <p>
              Gosto de me desenvolver em projetos pessoais, como criar sites, acompanhar projetos open source e ler livros. Acredito que é importante estar atualizado com as tendências e tecnologias, e regularmente reservo tempo para aprender coisas novas.
            </p>
          </div>
        </article>
        <Marking>
          Habilidades
        </Marking>
        <AllSkills />
      </section>
    </Container>
  )
}

export default About;