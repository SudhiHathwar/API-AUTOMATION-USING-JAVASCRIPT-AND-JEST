
import services from '../Services/BaseService'
import configs from '../configuration/config'

let getWhether = {
    get(cityName) {
        let params = {}
        params['url'] = configs.getWhether + cityName
        return services.doGet(params)
    }
}

module.exports = getWhether