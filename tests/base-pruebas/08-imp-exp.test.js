import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas de 08-imp-exp', () => {
     test('getHeroeById debe de retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById( id );
        expect(hero).toEqual(    {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     });

     test('getHeroeById debe de retornar undefined si no existe el id', () => { 
        const id = 100;
        const hero = getHeroeById( id );
        expect(hero).toBeFalsy();
     }) 
    })