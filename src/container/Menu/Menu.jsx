import React, { useState } from 'react'
import './menu.scss'
import { BsArrowRightCircle, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import Spinner from '../../componentes/Spinner/Spinner';
import { video1, video2, video3 } from '../../assets/video/videos';

import { motion } from 'framer-motion';

const Menu = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredDivId, setHoveredDivId] = useState(null);

    const handleMouseEnter = (divId) => {
        setIsHovered(true);
        setHoveredDivId(divId);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredDivId(null);
    };

    return (
        <nav className='menu'>
            {/* <video playsinline="" autoplay="" loop="" muted="" class="home-orbital-3d">
                    <source src="https://www.dropbox.com/s/t7hz8zhzqlr0cpx/Orbital-3d_home.mp4?raw=1"/>
                </video> */}
            <ul>
                <li
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div>
                        <h3>Brand </h3>
                        <p className='opcional'>Unique brand identities that make a mark.</p>
                        {isHovered && hoveredDivId == 1
                            && (
                                <motion.p
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: '100%', opacity: 0 }}
                                    className='frase'
                                >
                                    Unique brand identities that make a mark.
                                </motion.p>
                            )}
                    </div>
                    {isHovered && hoveredDivId == 1 ?
                        (
                            <motion.p
                                className='flecha-secundaria'
                                style={{
                                    justifySelf: 'flex-end',
                                    fontSize: '3vw',
                                    textAlign: 'end',
                                }}
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: '100%', opacity: 0 }}
                            >
                                <BsFillArrowUpRightCircleFill className='segundaria' />

                            </motion.p>
                        ) : (
                            <p
                                className='flecha'
                                style={{
                                    justifySelf: 'flex-end',
                                    fontSize: '5rem',
                                    textAlign: 'end',
                                }}
                            >

                                <BsArrowRightCircle className='main' />
                            </p>
                        )
                    }
                </li>
                <li
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div>
                        <h3>Producto</h3>
                        <p className='opcional'>Intuitive digital products that people get.</p>
                        {isHovered && hoveredDivId == 2
                            && (
                                <motion.p
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: '100%', opacity: 0 }}
                                    className='frase'
                                >
                                    Intuitive digital products that people get.
                                </motion.p>
                            )}
                    </div>
                    {isHovered && hoveredDivId == 2 ?
                        (
                            <motion.p
                            className='flecha-secundaria'
                                style={{
                                    justifySelf: 'flex-end',
                                    fontSize: '3vw',
                                    textAlign: 'end',
                                }}
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: '100%', opacity: 0 }}
                            >
                                <BsFillArrowUpRightCircleFill className='segundaria' />

                            </motion.p>
                        ) : (
                            <p
                            className='flecha'
                                style={{
                                    justifySelf: 'flex-end',
                                    fontSize: '5rem',
                                    textAlign: 'end',
                                }}
                            >

                                <BsArrowRightCircle className='main' />
                            </p>
                        )
                    }


                </li>
                <li
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div>
                        <h3>Motion </h3>
                        <p className='opcional'>Compelling animation that inspires action.</p>
                        {isHovered && hoveredDivId == 3
                            && (
                                <motion.p
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: '100%', opacity: 0 }}
                                    className='frase'
                                >
                                    Compelling animation that inspires action.
                                </motion.p>
                            )}
                    </div>
                    {isHovered && hoveredDivId == 3 ?
                        (
                            <motion.p
                            className='flecha-secundaria'
                                style={{
                                    justifySelf: 'flex-end',
                                    fontSize: '3vw',
                                    textAlign: 'end',
                                }}
                                initial={{ y: '20%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: '100%', opacity: 0 }}
                            >
                                <BsFillArrowUpRightCircleFill className='segundaria' />

                            </motion.p>
                        ) : (
                            <p
                                className='flecha'
                                style={{
                                    justifySelf: 'flex-end',
                                    fontSize: '5rem',
                                    textAlign: 'end',
                                }}
                            >

                                <BsArrowRightCircle className='main' />
                            </p>
                        )
                    }

                </li>
                <li className='video'>
                    {isHovered
                        ? (
                            <div className="target">
                                {isHovered && hoveredDivId === 1 && (

                                    <video
                                        controls
                                        autoPlay
                                        loop
                                        width="100%"
                                        height="100%"
                                        src={video1}
                                    />
                                )}
                                {isHovered && hoveredDivId === 2 && (
                                    <video
                                        controls
                                        autoPlay
                                        loop
                                        width="100%"
                                        height="100%"
                                        src={video2}
                                    />
                                )}
                                {isHovered && hoveredDivId === 3 && (
                                    <video
                                        controls
                                        autoPlay
                                        loop
                                        width="100%"
                                        height="100%"
                                        src={video3}
                                    />
                                )}
                            </div>
                        )
                        : (
                            <div>
                                <Spinner />
                            </div>
                        )
                    }

                </li>

            </ul>
        </nav>
    )
}

export default Menu