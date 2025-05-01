
import { render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGird'

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente ', () => {
        
        render( <GifGrid  /> ) //deberia arrojar error aqui
        //  proque no se le pasa category

    })
    

 })