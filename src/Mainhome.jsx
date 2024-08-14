import React from 'react'
import Home from './homeComponenet/Home';
import Fashionview from './homeComponenet/Fashionview';
import Mug from './homeComponenet/Mug';
import Dealshopnow from './homeComponenet/Dealshopnow';
import Clientreview from './homeComponenet/Clientreview';
import Mug2 from './homeComponenet/Mug2';


const Mainhome = () => {
    return (
        <div>
            <Home/>
            <Fashionview/>
            <Mug/>
            <Dealshopnow/>
            <Mug2/>
            <Clientreview/>
        </div>
    )
}

export default Mainhome
