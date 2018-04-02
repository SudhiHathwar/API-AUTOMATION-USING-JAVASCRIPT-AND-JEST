import { ENOBUFS } from "constants";

// Maintain all your constant files here

let baseUri = 'http://restapi.demoqa.com/'

module.exports = {

    getWhether: baseUri + 'utilities/weather/city/',
    register: baseUri + "customer/register"
}


//let configs = {}

// configs.abc =
//     {
//         a: url,
//         b: url
//     }

// export default configs;