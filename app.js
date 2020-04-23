const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección o nombre de la ciudad',
        demand: true
    }
}).argv;
const lugar = require("./lugar/lugar")
const clima = require("./clima/clima")



//let coordenadas = await lugar.getLugarLatLng(argv.direccion).then(console.log)

//clima.getClima(coordenadas.lat, coordenadas.lon).then(console.log)

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `El clima de la ciudad ${coordenadas.direccion} es de ${temp}`;

    } catch (err) {
        return "no se pudo determinar el clima de " + direccion;

    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);

//console.log(argv.direccion);