const getDb = require('../mongodb')
let db = null;
class Pacientes {
    constructor() {
        getDb()
            .then((database) => {
                db = database;
                if (process.env.MIGRATE === 'true') {
                    //Por si se ocupa algo
                }
            })
            .catch((err) => { console.error(err) });
    }
    new(nombre, apellido, identidad, telefono, correo) {
        return new Promise((accept, reject) => {

        })
    }
    getAll() {
        return new Promise((accept, reject) => {

        });
    }
    getById(id) {
        return new Promise((accept, reject) => {

        });
    }
    updateOne(id, nombre, apellidos, identidad, telefono, correo) {
        return new Promise((accept, reject) => {

        })
    }
    deleteOne(id) {
        return new Promise((accept, reject) => {

        })
    }
}

module.exports = Pacientes