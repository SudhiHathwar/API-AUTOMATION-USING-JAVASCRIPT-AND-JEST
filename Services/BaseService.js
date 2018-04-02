import Superagent from 'superagent'
import { resolve } from 'path';
import config from '../configuration/config'

let Api = {
    doGet(params) {
        let headers = {}
        // Add headers if required

        // if (params['']) {
        //     headers[''] = params['']
        // } else {
        //     headers[''] = ''
        // }
        // if (params['token']) {
        //     headers['Authorization'] = params['token']
        // }
        return new Promise((resolve, reject) => {
            Superagent.get(params['url'])
                .type('application/json')
                // .set(headers)
                .query(params['data'])
                .then(res => { resolve(res)}).catch(err => {
                    if (err.response && err.response.error && err.response.error.text) {
                        console.log(err.response)
                        reject({ message: err.response.error.text, statusCode: err.response.statusCode })
                    } else {
                        console.log(err.response)                        
                        reject({ statusCode: err.response.statusCode })
                    }
                })
        })
    },
    doPost(params) {
        let headers = {}

        // Add headers if required

        // if (params['tocIdentifier']) {
        //     headers['TocIdentifier'] = params['tocIdentifier']
        // } else {
        //     headers[''] = ''
        // }
        // if (params['token']) {
        //     headers['Authorization'] = params['token']
        // }
        return new Promise((resolve, reject) => {
            Superagent.post(params['url'])
                .send(params['data'])
                .type('application/json')
                .set(headers)
                .then(res => { resolve(res) })
                .catch(err => {
                    if (err.response && err.response.error && err.response.error.text) {
                        console.log(err)
                        reject({ message: err.response.error.text, statusCode: err.response.statusCode })
                    } else {
                        console.log(err)
                        reject({ statusCode: err.response.statusCode })
                    }
                })
        })
    }
}

module.exports = Api;
