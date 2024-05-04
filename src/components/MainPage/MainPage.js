
import React, { useRef } from 'react';
import { useModal } from '../ModalContext/ModalContext';

const MainPage = () => {
    const { openModal } = useModal();
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);

    const handleClick = () => {
        const newUser = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
        };
        console.log(newUser);
    };

    return (
        <div>
            <h1>Main Page</h1>
            <input type="text" ref={nameRef} placeholder="Name" />
            <input type="text" ref={usernameRef} placeholder="Username" />
            <input type="text" ref={emailRef} placeholder="Email" />
            <button onClick={handleClick}>Create</button>
            <button onClick={openModal}>Open Modal</button>
        </div>
    );
};

export default MainPage;
