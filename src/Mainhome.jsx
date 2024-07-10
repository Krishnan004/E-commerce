import React from 'react'
import Home from './homeComponenet/Home';
import Fashionview from './homeComponenet/Fashionview';
import Mug from './homeComponenet/Mug';
import Dealshopnow from './homeComponenet/Dealshopnow';
import Clientreview from './homeComponenet/Clientreview';


const Mainhome = () => {
    return (
        <div>
            <Home/>
            <Fashionview/>
            <Mug/>
            <Dealshopnow/>
            <Mug/>
            <Clientreview/>
        </div>
    )
}

export default Mainhome
