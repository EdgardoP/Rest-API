const Pacientes = require('../../dao/pacientes/pacientes.model');

describe('Testing Pacientes Model', () => {
    let pacientesModel = undefined;
    beforeAll(() => {
        return pacientesModel = new Pacientes()
    })

    it('pacientesModel Esta Definido', () => {
        return expect(pacientesModel).toBeDefined()
    })

    it('getAll Devuelve un array', async() => {
        const arrPacientes = await pacientesModel.getAll();
        return expect(arrPacientes.length).toBeGreaterThanOrEqual(0);
    })

    it('new guarde un dato', async() => {
        const resultado = await pacientesModel.new(
            'Test Prueba',
            'Fulano',
            '0000001',
            'telefono',
            'correo@gmial.com'
        );
        console.log(resultado);
        return expect(resultado).toBeDefined()
    });
})