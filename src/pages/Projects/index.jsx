import CardProjects from '../../components/CardProjects';
import Container from '../../components/Container';
import Marking from '../../components/Marking';
import datas from '../../json/data.json';
import "./Projects.scss";

function Projects() {
  return (
    <Container>
      <main className="projects">
        <Marking>
          Projetos
        </Marking>
        <h2>Meus trabalhos</h2>
        <ul className='cardsProject'>
          {datas.map((data) =>
            <CardProjects
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              link={data.link}
              info={data.info}
            />
          )}
        </ul>
      </main>
    </Container>
  )
}

export default Projects;