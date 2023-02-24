import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './MenuLink.scss';

function MenuLink({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link className={`menuLink ${localizacao.pathname === to ? 'highlighted' : ''}`} to={to}>
            {children}
        </Link>
    )
}
export default MenuLink;