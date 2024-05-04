import React from 'react';
import { useModal } from '../ModalContext/ModalContext';
import ModalWindow from '../ModalWindow/ModalWindow';

const About = () => {
    const { isOpen, closeModal } = useModal();

    return (
        <div>
            <h1>About Page</h1>
            {isOpen && <ModalWindow onClose={closeModal} />}
        </div>
    );
};

export default About;
