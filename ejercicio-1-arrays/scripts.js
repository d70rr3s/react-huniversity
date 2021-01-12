const fichas = [
    {
        paciente: {
            nombre: 'Manuel',
            edad: 16,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Marta',
            edad: 4,
            sexo: 'M'
        },
        diasIngresado: 5,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Julia',
            edad: 38,
            sexo: 'M'
        },
        diasIngresado: 1,
        dieta: 'Sin sal'
    },
    {
        paciente: {
            nombre: 'Esteban',
            edad: 40,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Arturo',
            edad: 19,
            sexo: 'H'
        },
        diasIngresado: 2,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Isabel',
            edad: 63,
            sexo: 'M'
        },
        diasIngresado: 6,
        dieta: 'Sin sal'
    }
];

const result = ((fichas) => ({
    nPacientes: fichas.length,
    nMayoresEdad: fichas
        .filter(ficha => ficha.paciente.edad > 18)
        .length,
    nHombresDiabeticos: fichas
        .filter(ficha => ficha.paciente.sexo === 'H' && ficha.dieta === 'Diabetes')
        .length,
    totalDiasIngreso: fichas.reduce((acc, ficha) => acc + ficha.diasIngresado, 0),
    mediaEdadMujeres: fichas
        .filter(ficha => ficha.paciente.sexo === 'M')
        .reduce((acc, ficha) => acc + (ficha.paciente.edad / fichas.filter(ficha => ficha.paciente.sexo === 'M').length), 0),
}))(fichas)

console.log(result);
