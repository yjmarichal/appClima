const axios = require('axios');

const getClima = async(latitud, longitud) => {
    //const encodedURL = encodeURI(dir);
    //console.log(encodedURL);

    //const instance = axios.create(`api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=3f6221d76bd246d024756bc3121f1ef7&units=metric`)
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=3f6221d76bd246d024756bc3121f1ef7&units=metric`);
    // console.log(resp.data.Results);

    // if (resp.data.Results.length === 0) {
    //     throw new Error("no hay datos para esta direccion");
    // }


    return resp.data.main.temp;
}

module.exports = {
    getClima
}