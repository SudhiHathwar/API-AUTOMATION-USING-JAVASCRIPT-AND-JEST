
import services from '../Services/BaseService'
import configs from '../configuration/config'

let register = {
    post(queryString) {
        let params = {}
        params['data'] = queryString
        params['url'] = configs.register

        return services.doPost(params)
    }
}

module.exports = register