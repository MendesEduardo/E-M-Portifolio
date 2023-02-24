import { useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import Modal from 'react-modal';
import './ModalInfo.scss';

function ModalInfo({ info }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <section className='modalInfo'>
            <AiFillInfoCircle onClick={() => setModalIsOpen(true)} />
            <Modal className='modal' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <p className='descriptionModal'>
                    {info}
                </p>
            </Modal>
        </section>
    )
}

export default ModalInfo;
