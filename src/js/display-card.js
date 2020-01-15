import React from 'react';

const DisplayCards = (props) => (
  <div  key={props.item.name} className="item">
    <img src={props.item.image}/>
    <p>
      {props.item.name}
      <p>
      <span>Id :<span>{props.item.id}</span> -  created <span>{props.item.created}</span></span>
      </p>
    </p>
    <ul className="list-style">
    <li><span>STATUS</span>
    <span className="fr">{props.item.status}</span>
      </li>
    <li><span>SPECIES</span>
    <span className="fr">{props.item.species}</span></li>
    <li><span>GENDER</span>
    <span className="fr">{props.item.gender}</span></li>
    <li><span>ORIGIN</span>
    <span className="fr">{props.item.origin.name}</span></li>

    <li><span>LAST LOCATION</span>
    <span className="fr">{props.item.origin.name}</span></li>

    </ul>

    </div>)



    export default DisplayCards;
