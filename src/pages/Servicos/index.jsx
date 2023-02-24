import Container from '../../components/Container';
import Marking from '../../components/Marking';
import ServicesCard from '../../components/ServicesCard';
import { FaCode } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import './Services.scss';

function Servicos() {
    return (
        <Container>
            <section className='services'>
                <Marking>
                    Serviços
                </Marking>
                <h2>MEUS SERVIÇOS</h2>
                <article className='services-show'>
                    <ServicesCard icon={<FaCode />} title="Desenvolvimento">
                        Construção de páginas web, interfaces, aplicativo ou software
                    </ServicesCard>
                    <ServicesCard icon={<MdOutlineSettingsSuggest />} title="Aprimoramento">
                        Aprimoramento e Manuntenção de páginas web, interfaces, aplicativo ou software
                    </ServicesCard>
                </article>
            </section>
        </Container>
    )
};

export default Servicos;