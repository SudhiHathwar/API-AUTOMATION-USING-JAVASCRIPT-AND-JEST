import Whether from '../Services/GetWhether'
import Register from '../Services/Register'
import RegisterRequestBuilder from '../RequestBuilder/RegisterRequestBuilder'

describe('Sample Api test', () => {

    let registerRequestBuilder

    it.only('Verify get api', async (done) => {
        await Whether.get('Bangalore').then((res) => {
            // console.log(res.body)
            expect(res.statusCode).toEqual(200)
            done();
        })
    })

    beforeEach(() => {

        registerRequestBuilder = new RegisterRequestBuilder()
            .withFirstName("Virender")
            .withLastName("Singh")
            .withUserName("simpleuser001")
            .withPassword("password1")
            .withEmail("kjdz3jhjz2@gmail.com")
    })

    it.only('Verify post api', async (done) => {

        let queryString = registerRequestBuilder.getRequest()

        await Register.post(queryString).then((res) => {
            expect(res.statusCode).toEqual(200)
            done();
        });
    })
})