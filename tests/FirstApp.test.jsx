import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => { 
    test('debe hacer match con el snapshot', () => { 

        const title = 'HOLA';
        const {container} = render( <FirstApp title={ title }/> );

        expect( container ).toMatchSnapshot();

    })

    test('debe de mostrar el titulo en un h1', () => { 

        const title = 'HOLA';
        const {container, getByText} = render( <FirstApp title={ title }/> );
        
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');

        console.log(h1.innerHTML);

        expect( h1.innerHTML ).toContain( title );
          
    })
})