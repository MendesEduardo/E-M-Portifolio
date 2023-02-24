import { Link } from 'react-router-dom';
import './LinkContact.scss';

function LinkContact({ children, icon, linkContact }) {
    return (
        <Link className='linkContact' to={linkContact}>
            <i>{icon}</i>
            <p>{children}</p>
        </Link>
    )
};

export default LinkContact;