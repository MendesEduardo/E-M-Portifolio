import { useLocation } from "react-router-dom";
import Container from "../Container";
import MenuLink from "../MenuLink";
import "./Header.scss";

function Header() {
    const localizacao = useLocation();

    return (
        <header className={`header ${localizacao.pathname === '/' ? '' : 'top'}`}>
            <Container>
                <section className="innerHeader">
                    <h1>Edüardo Mendës</h1>
                    <p>Sou um desenvolvedor de <span>software front-end</span></p>
                    <nav>
                        <MenuLink to="/">
                            Home
                        </MenuLink>
                        <MenuLink to="/sobre">
                            Sobre
                        </MenuLink>
                        <MenuLink to="/servicos">
                            Serviços
                        </MenuLink>
                        <MenuLink to="/projetos">
                            Projetos
                        </MenuLink>
                        <MenuLink to="/contato">
                            Contato
                        </MenuLink>
                    </nav>
                </section>
            </Container>
        </header>
    )
}

export default Header;