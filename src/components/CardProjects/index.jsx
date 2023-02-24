import { BiLink } from 'react-icons/bi';
import ModalInfo from '../Modal';
import './CardProjects.scss';

function CardProjects({ id, image, title, link, info }) {
    const imageFundo = { backgroundImage: `url(${image})` }
    return (
        <li key={id} className='cardProjects' style={imageFundo}>
            <div className='innerCardProjects'>
                <p>{title}</p>
                <div className='options'>
                    <a href={link}><BiLink /></a>
                    <ModalInfo info={info} image={image} />
                    <div className='lowerCornerEdge'></div>
                </div>
            </div>
        </li>
    )
};

export default CardProjects;