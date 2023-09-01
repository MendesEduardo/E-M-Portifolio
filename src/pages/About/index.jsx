import dev from "../../assets/Ao.gif";
import AllSkills from "../../components/AllSkills";
import Container from "../../components/Container";
import Marking from "../../components/Marking";
import "./About.scss";

function About() {
  return (
    <Container>
      <section className="about">
        <Marking>Sobre</Marking>
        <h2>Um pouco sobre mim</h2>
        <article className="info-about">
          <img src={dev} alt="Perfil" />
          <div className="resume">
            <h3>Eduardo Mendes o Desenvolvedor Web</h3>
            <p>
              É com grande entusiasmo que me apresento como um estudante de
              análise e desenvolvimento de sistemas com o sonho de me tornar um
              Desenvolvedor Web apaixonado e comprometido em criar experiências
              digitais excepcionais.
            </p>
            <p>
              O que me diferencia é a minha dedicação em compreender as
              necessidades do usuário e traduzi-las em soluções que superam suas
              expectativas. Cada linha de código que escrevo é impulsionada pela
              busca incessante da excelência. Além disso, acredito na
              importância de uma colaboração transparente e eficaz. Minha
              capacidade de comunicar ideias complexas de maneira clara e
              trabalhar harmoniosamente em equipes multidisciplinares resultou
              em projetos bem-sucedidos e clientes satisfeitos.
            </p>
            <p>
              Meu compromisso com o aprendizado contínuo é evidenciado por meu
              histórico de participação em cursos e workshops relevantes, sempre
              buscando me manter atualizado com as últimas tendências e melhores
              práticas. Acredito que a inovação vem da fusão do conhecimento
              tradicional com a visão do futuro.
            </p>{" "}
          </div>
        </article>
        <Marking>Habilidades</Marking>
        <AllSkills />
      </section>
    </Container>
  );
}

export default About;
