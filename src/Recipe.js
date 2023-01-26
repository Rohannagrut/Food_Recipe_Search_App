import React from 'react';
import Style from './recipe.module.css'

const Recipie=({title,calories,image,ingredients})=>
{
    return(
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients=>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
        <p>{calories}</p>
            <img 
            className={Style.image}
            src={image} alt=''/>
        </div>
    )
};
export default Recipie;