import { fireEvent, render, screen } from "@testing-library/react"
import { useState } from "react";
import GifExpertApp from "../src/GifExpertApp";


describe('Tests in GifExpertApp', () => { 
    
    test('should prevent add category if exists in the current categories list', () => {
      
        render(<GifExpertApp />)
/*
        const button = screen.getByText('Agregar');

        fireEvent.click(button);
*/
        //const { result } = renderHook( () => useState(['One Punch']));
        //const { images, isLoading } = result.current;

        expect( screen.getAllByRole('h3').length ).toBe(1)


    })
    

 })