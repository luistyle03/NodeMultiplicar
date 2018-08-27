const fs = require('fs');
const colors = require('colors');
//const fs = require('express');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor de la base: ${base}, No es numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor del limite ${limite}, No es numero`);
            return;
        }



        let data = '';
        let linea = '';

        for (let i = 1; i <= limite; i++) {
            linea = `${ base } * ${ i } = ${ base * i }`
                //console.log(linea);
            data += `${linea} \n`
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla_${base}.txt`);
        });

    });
}

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log('==============================='.green);
        console.log(`=====Tabla de ${ base }========`.green);
        console.log('==============================='.green);

        if (!Number(base)) {
            reject(`El valor de la base: ${base}, No es numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor del limite ${limite}, No es numero`);
            return;
        }


        let data = '';
        let linea = '';

        for (let i = 1; i <= limite; i++) {
            linea = `${ base } * ${ i } = ${ base * i }`
            console.log(linea);
            data += `${linea} \n`
        }
        resolve('Se listo satisfactoriamente');
    });
}


//module se crea de manera automatica y tiene una propiedad exports que guarda un valor que esta disponible de  manera global, esto lo hacermos para que desde el aplicativo app.js podamos llamarlo
module.exports = {
    crearArchivo,
    listarArchivo
}