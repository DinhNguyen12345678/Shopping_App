import React, { useState } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';

export function ContentPage() {
    const [ indexTab, setIndexTab ] = useState(0);

    const handleSetIndexTab = (id) => {
        setIndexTab(id)
    }

    return (
        <div>
            <Header handleSetIndexTab={handleSetIndexTab}/>
            <Body indexTab={indexTab}/>
        </div>
    )
}