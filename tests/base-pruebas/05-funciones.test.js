import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);

        });

        test('getUsuarioActivo debe retornar un objeto', () => { 
            const name = 'Juan';

            const user = getUsuarioActivo(name);

            expect( user ).toEqual({
                uid:'ABC567',
                username:name
            });
         });
});