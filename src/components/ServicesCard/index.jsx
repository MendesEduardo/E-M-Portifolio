import './ServicesCard.scss';

function ServicesCard({ icon, title, children }) {
    return (
        <article className='servicesCard'>
            <i>{icon}</i>
            <h3>{title}</h3>
            <p>{children}</p>
        </article>
    )
};

export default ServicesCard;