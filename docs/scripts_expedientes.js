require('dotenv').config();
const getDb = require('../dao/mongodb');
console.log(process.env.MONGOURI);
const names = [
    'FULANITO',
    'MENGANITO',
    'SUSANITO',
    'LULU',
    'PACO',
    'HUGO',
    'LUIS',
    'DONALD'
];

const surnames = [
    'MKQUACK',
    'RICO',
    'DE LA SANTA CRUZ',
    'MELGAR',
    'CABILDO',
    'CADILLO',
    'CHE'
];

const pacientes = 30;
const pacientesArr = []

for (let index = 0; index < pacientes; index++) {
    const anio = ((new Date().getTime() % 2) === 0) ? 1980 + Math.floor(Math.random * 20) : 2000 + Math.floor(Math.random * 23)
    const nombres = names[Math.floor(Math.random() * 8)]
    const apellidos = surnames[Math.floor(Math.random() * 8)]
    const secuencia = ('00000' + Math.ceil(Math.random() * 99999)).substring(0, -5);
    const correo = (`${nombres}.${apellidos}@unmail.com`).toLocaleLowerCase();
    const telefono = `${(20000000 + Math.floor(Math.random()*100000000))}`
    const doc = {
        nombres,
        apellidos,
        identidad: `0801${anio}${secuencia}`,
        telefono,
        correo
    }
    pacientesArr.push(doc);
}

getDb().then(
    (db) => {
        const pacientes = db.collection('Pacientes');
        pacientes.insertMany(pacientesArr, (err, rslt) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(rslt);
            return
        });
    }
);