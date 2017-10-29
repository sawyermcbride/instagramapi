/**
 * API Tests
 * 
 **/
 
const expect = require('chai').expect;
const request = require('request');
describe('Authentication', () => {
    describe('Register', () => {
        request.post({url:'http:localhost:3000/register', 
        form: {username:'sawyermcbride', name:'Sawyer Mcbride', password:'Mariner166$!', email:'samcbride11@gmail.com'}},
        function(err, httpResponse, body){ 
            console.log(httpResponse);
        });
    });
});
        