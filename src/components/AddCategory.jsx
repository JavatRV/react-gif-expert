import { useState } from "react"


export const AddCategory = ({ onNewcategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if ( newInputValue.length <= 1 ) return;

        //setCategories( c => [...c, inputValue] )
        setInputValue('')
        onNewcategory(newInputValue)
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue} 
                onChange={ (event) => onInputChange(event) }    
            />
        </form>

    )
    1
}