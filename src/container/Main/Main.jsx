import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import { imagen1, imagen2, imagen3 } from '../../assets/images/images'
import { motion } from 'framer-motion';

const Main = () => {
    const backgroundRef = useRef(null);

    const handleBoxHover = () => {
        const backgroundElement = ReactDOM.findDOMNode(backgroundRef.current);
        backgroundElement.style.filter = 'blur(5px)';
    };

    const handleBoxLeave = () => {
        const backgroundElement = ReactDOM.findDOMNode(backgroundRef.current);
        backgroundElement.style.filter = 'blur(0)';
    };

    
    return (
        <main>
            <section className='main__work' ref={backgroundRef}>
                <p>WORK</p>
            </section>
            <section className='main__information'>
                <div
                    className='primero'
                    onMouseEnter={handleBoxHover}
                    onMouseLeave={handleBoxLeave}
                >
                    <img src={imagen1} alt="Imagen 1" />
                    <div>
                        <p className='titulo'>NewLimit</p>
                        <p>Envisioning a limitless brand for a not-too-distant future</p>
                    </div>
                </div>
                <div
                    className='segundo'
                    onMouseEnter={handleBoxHover}
                    onMouseLeave={handleBoxLeave}
                >
                    <img src={imagen2} alt="Imagen 1" />
                    <div>
                        <p className='titulo'>Surf Internet </p>
                        <p>Modernizing a legacy telecom brand for a bright future</p>
                    </div>
                </div>
                <div 
                    className='tercero'
                    onMouseEnter={handleBoxHover}
                    onMouseLeave={handleBoxLeave}
                >
                    <img src={imagen3} alt="Imagen 1" />
                    <div>
                        <p className='titulo'>FocusVision</p>
                        <p>Transforming complex technology into meaningful design</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main