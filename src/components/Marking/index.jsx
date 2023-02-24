import './Marking.scss';

function Marking({ children }) {
    return (
        <div className='marking'>
            <p>{children}</p>
            <div className='bar-marking'></div>
        </div>
    )
}

export default Marking