import Container from '../../components/Container';
import Marking from '../../components/Marking';
import LinkContact from '../../components/LinkContact';
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "./Contact.scss";

function Contact() {
  return (
    <Container>
      <footer className='contact'>
        <Marking>
          Contato
        </Marking>
        <section className='contactLink'>
          <LinkContact icon={<FaGithub />} linkContact='https://github.com/MendesEduardo'>
            GitHub
          </LinkContact>
          <LinkContact icon={<AiFillLinkedin />} linkContact='https://www.linkedin.com/in/carlos-eduardo-mendes-developer/'>
            Linkedin
          </LinkContact>
          <LinkContact icon={<AiOutlineMail />}>
            e-mail
            <p className='dadosContact'>eduardomn2018@gmail.com</p>
          </LinkContact>
          <LinkContact icon={<AiOutlinePhone />}>
            celular
            <p className='dadosContact'>11 9 9912-3845</p>
          </LinkContact>
        </section>
      </footer>
    </Container>
  )
}

export default Contact;