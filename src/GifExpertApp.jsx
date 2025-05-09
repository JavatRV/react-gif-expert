import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifExpertApp = () => {

    const [ categories, setCategories ] =  useState([ 'Dragon Ball' ])


    const onAddCategory = ( newcategory ) => {

        if( categories.includes(newcategory) ) return;

        setCategories([ ...categories, newcategory ])

    }

  return (
    <>
        <h1>GifExpert App</h1>

        <AddCategory 
            onNewcategory={( value ) => onAddCategory(value)}
        />
        
        <button onClick={onAddCategory} >Agregar</button>

        {
            categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={category}
                />
            ))
        }

    </>
  )
}

export default GifExpertApp
