import { start } from 'repl';

export default class RegisterRequestBuilder {
    constructor() {
        this.registerRequest = {}
    }

    withFirstName(firstName) {
        this.registerRequest.firstName = firstName
        return this
    }

    withLastName(lastName) {
        this.registerRequest.lastName = lastName
        return this
    }

    withUserName(userName) {
        this.registerRequest.userName = userName
        return this
    }

    withPassword(password) {
        this.registerRequest.password = password
        return this
    }

    withEmail(email){
        this.registerRequest.email = email
        return this
    }

    getRequest(){
        return {
                 "FirstName" : this.registerRequest.firstName,
                 "LastName" : this.registerRequest.lastName,
                 "UserName" : this.registerRequest.userName,
                 "Password" : this.registerRequest.password,
                 "Email" : this.registerRequest.email
        }
    }
}