import { screen, render } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"


describe('first', () => { 
    
    const title = 'Titulo', 
    url = 'https://media4.giphy.com/media/v1.Y2lkPTkyNTkzNzI4eGo4NWE2bW9hbHh5OWdiZzZubzhxZmU3c251a3lwdm50dHJ2eGtrdSZlcD12MV9naWZzX3JhbmRvbSZjdD1n/xUA7aQxF9qU6xm6j8Q/giphy.gif';
    
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })
    
    test('debe de mostrar la imagen con el URl y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />)
        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);
        
        const { src, alt } = screen.getByRole('img');
        
        expect(src).toBe(url);        
        expect(alt).toBe(title);
        
        
    })
    
    test('debe existir el elemento title', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
    })
    
})