import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Club.css';
const Club = (props) => {
    const {name,image,sallary,country} = props.club;
    return (
        <div className="single-player">
            <img src={image} alt=""/>
           <h4>Name: {name}</h4> 
           <p>Salary: ${sallary}</p>
           <p>Country: {country}</p>
           <Button onClick={()=>props.handleAddPlayer(props.club)}><FontAwesomeIcon icon={faMale} /> Add Player</Button>

        </div>
    );
};

export default Club;