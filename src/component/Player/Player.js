import React from 'react';
import './Player.css';
import {useEffect, useState} from 'react';
import FakeData from '../../FakeData/FakeData.json';
import Club from '../Club/Club';
import Cart from '../Cart/Cart';
const Player = () => {
    const [players,setPlayers] = useState([]);
    const [count , setCount]  = useState([]);
    useEffect(()=>{
         setPlayers(FakeData);
    },[])
    
    const handleAddPlayer = ( play)=>{
        const newCount = [...count , play];
        setCount(newCount);
    }
    return (
        <div div className = "player">
           <div className="player-info">
                {
                    players.map(player => <Club
                        handleAddPlayer = {handleAddPlayer}
                         club ={player}>

                         </Club>)
                }
           </div>
           <div className="cart-container">
            
            <Cart count={count}></Cart>
            
           </div>
        </div>
    );
};

export default Player;