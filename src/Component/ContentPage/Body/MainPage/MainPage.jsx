import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import HomePart from './ChangePart/home';
import AboutPart from './ChangePart/about';
import ProductPart from './/ChangePart/product'

function MainPage( props ) {
    useEffect(() => {
        const partContent = document.querySelectorAll('.part');
        const partContentActive = document.querySelector('.part.active');

        partContentActive.classList.remove('active');
        partContent[props.index].classList.add('active');

    }, [props.index])

    return (
        <Container className="content--main">
            <div className="left-col">
                <div className="home part active">
                    <HomePart />
                </div>
                <div className="about part">
                    <AboutPart />
                </div>
                <div className="product part">
                    <ProductPart />
                </div>
            </div>
            <div className="right-col">

            </div>
        </Container>
    )
}

export default MainPage;