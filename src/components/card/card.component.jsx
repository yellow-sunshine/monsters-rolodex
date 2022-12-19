import { Component } from 'react';
import './card.style.css';

class Card extends Component{
    render(){
        const {name, email, id} = this.props.monster;
        return(
            <div className='card-container' key={id}>
                <img 
                    className='card-monster' 
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set3&size=180x180`}
                />
                <h2>{name}</h2>
                <h2>{email}</h2>   
            </div>
        )
    }
}

export default Card;