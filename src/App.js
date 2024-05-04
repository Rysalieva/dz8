
import React from 'react';
import {ModalProvider} from "./components/ModalContext/ModalContext";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";

function App() {
    return (
        <ModalProvider>
            <div className="App">
                <MainPage />
                <About />
            </div>
        </ModalProvider>
    );
}

export default App;
