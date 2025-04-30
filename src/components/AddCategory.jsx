import PropTypes from 'prop-types';
import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        console.log('Hola mundo desde onSubmit');
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if ( newInputValue.length <= 1 ) return;

        //setCategories( c => [...c, inputValue] )
        setInputValue('');
        onNewCategory(newInputValue);
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue} 
                onChange={ (event) => onInputChange(event) }    
                
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory   :   PropTypes.func.isRequired,
}
