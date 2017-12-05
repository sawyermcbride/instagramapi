/**
 * API Tests
 * 
 **/
 
const expect = require('chai').expect;
const request = require('request');
describe('Authentication', () => {
    describe('Register', () => {
        request.post(
            {url:'http:localhost:3000/register', 
        form: {username:'sawyermcbride', name:'Sawyer Mcbride', password:'Mariner166$!', email:'samcbride11@gmail.com'}},
        function(err, httpResponse, body){ 
            console.log(httpResponse);
            console.log(body);
            expect(httpResponse).to.equal(10);
            
        });
    });
    describe('Login', () => {
        
    })
});
        