import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"

const initialValue = 10;

describe('Pruebas en CounterApp', () => {
     test('debe incrementar con el boton +1', () => {

        render(
            <CounterApp 
                value = { initialValue } 
            />
        );
        console.log(`initial value: ${screen.getByRole('heading', {level: 2}).innerHTML}`);
        fireEvent.click( screen.getByText('+1') );
        console.log(`+1 postClick value: ${screen.getByRole('heading', {level: 2}).innerHTML}`);
        expect(screen.getByText( initialValue + 1)).toBeTruthy();

        fireEvent.click( screen.getByText('-1') );
        console.log(`-1 postClick value: ${screen.getByRole('heading', {level: 2}).innerHTML}`);
        expect(screen.getByText( initialValue )).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(initialValue.toString());

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    })
    })