import React from 'react'
import Typical from 'react-typical';
import {Container } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Container fluid className='image' >
        <h1 className='heading'>I am Arslan Akmal</h1>
        <p className='Heading__para' style={{color: '#fff'}}>
            <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
                'WebSite Developer', 4000,
                'Reactjs Developer', 4000,
                'WebSite Designer',  4000,
                'MERN STACK DEVELOPER',4000,
            ]}/>
        </p>
    </Container>
        </>
    )
}

export default Header
