import './Skills.scss';

function Skills({ children, icon }) {
    return (
        <article className='skills'>
            <div className='text-skills'>
                <i>{icon}</i>
                <p>{children}</p>
            </div>
        </article>
    )
}

export default Skills