import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => { 
    test('debe hacer match con el snapshot', () => { 
        const title = 'HOLA'
         render( <FirstApp title={title}/>)
    })
})