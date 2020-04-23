const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir);
    //console.log(encodedURL);

    const instance = axios.create({
        baseURL: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=" + encodedURL,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '495991a5c2mshbd14c80fa20e5c2p158776jsn1af80bef6652'
        }
    })

    const resp = await instance.get();
    // console.log(resp.data.Results);

    if (resp.data.Results.length === 0) {
        throw new Error("no hay datos para esta direccion");
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lon = data.lon;
    const lat = data.lat;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}