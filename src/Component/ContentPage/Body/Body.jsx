import React from 'react';
import MainPage from './MainPage/MainPage';

export default function Body( props) {
    return(
        <div className="content">
            <MainPage index={props.indexTab}/>
        </div>
    )
}