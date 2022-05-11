import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import HomePart from './ChangePart/home';
import AboutPart from './ChangePart/about';
import ProductPart from './/ChangePart/product';
import Cart from './CartPart/cart';

function MainPage( props ) {
    useEffect(() => {
        const partContent = document.querySelectorAll('.part');
        const partContentActive = document.querySelector('.part.active');


        setTimeout(() => {
            partContentActive.classList.remove('active');
            partContent[props.index].classList.add('active');
        }, 500)

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
                <Cart />
            </div>
        </Container>
    )
}

export default MainPage;