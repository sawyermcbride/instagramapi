(function() {
    const request = require('./request.js');
    const fs = require('fs');

     const options = {
		hostname:'www.instagram.com',
		path:'',
        method:'POST',
		headers: {'Cookie': "sessionid=IGSC34abb732c40ee90c7e6d239dd16b7b1f519adad2575f1d246f293a02dfb61ae2%3AZd0nF5plkyc3Tkceq10SfP4iahPN3Gk9%3A%7B%22_auth_user_id%22%3A5669850849%2C%22_auth_user_backend%22%3A%22accounts.backends.CaseInsensitiveModelBackend%22%2C%22_auth_user_hash%22%3A%22%22%2C%22_token_ver%22%3A2%2C%22_token%22%3A%225669850849%3ALcEUTt79iJO1sOBsFIORdddgN3mv440h%3Ae701be51500916dc86f2120291972bd732304bfd299d75a0fb37c95bcc739125%22%2C%22_platform%22%3A4%2C%22last_refreshed%22%3A1502247940.1877083778%2C%22asns%22%3A%7B%22time%22%3A1502247992%2C%222602%3A30a%3A2eaf%3Ac7f0%3A751a%3Ad8d2%3A7c8d%3A5b43%22%3A7018%7D%7D;mid=WCkJFwAEAAGyt7gr87zT1tGkrBLl; csrftoken=lHTkZ1VrzHdM7uJcFQgK0SyFJvxNevw7; fbm_124024574287414=base_domain=.instagram.com; ig_vw=1102; ig_pr=1.25; fbsr_124024574287414=2Kc4nkf6R5h76Cp97oS8dVNIYbMwlcVpiuTF3x5DknA.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUM2bHA3MTZuQzJ0bHZfcEJpOGl6WkU0OHRWakt4alJSTE5kNnp0dFozbktOY1JzTlVhVWt6RHNDVWt2VmJTd21zWG03MHFtbGp2ZzAzc2gyeC1wVjJqNTFEcGNoX0V5WWxWdU9rQWFybEZfVjBZYjR5dlZHN1BfZER6aTJEbzBVMGFJR0puclRYdUs2OE8tUFdMOFNhazh0Q2R6YmM0TkpWOGpnWlAxbUJnMVNqYWNyLXk1N0pxN0Y2NWZvbWpEVFJEZjcwaFVQUGVuNGliYkhVdU9iMVFTWkxLRzNWSXA1dVBTdHFpeWNvQkZJcWFEcFRKa3V1aGRhRFBNcm1jZGN0UlJfX2JPdy1GUjZabmw0dTVRNEJIc2ZYR0Jua01MS2UxR3Jsa2ttZ0V3NjdEMzlaNmI0MDZVa2pMdzdFZVF5NXgwYUdLWHhSSmRha1pOUUl1TTBmN3hLUHo2em9jSUVObjlxTUh3YTFmZ3RwY0liaThGMmZYR25tcTNYanE1QU0iLCJpc3N1ZWRfYXQiOjE1MDIyNjEzNDIsInVzZXJfaWQiOiIxMDAwMDQzNzgyOTU0MjEifQ; rur=ASH; csrftoken=dSK4Xl5XQ8vl86mjFi6nvfIU5N7aEzzs; ds_user_id=5669850849"
	 }
	}

    const loadApproved = new Promise( (resolve, reject) => {
        fs.readFile('./approved.txt', 'utf8', (err, data) => {
            resolve(JSON.parse(data));
        });
    });

    loadApproved.then( (users) => {
        let timer = 0;
        users.forEach( (val) => {

            setTimeout( (u)=> {
                options.path = `/web/friendships/${u.id}/follow/`;
                request(options).then((res)=> {
                    console.log(res);
                    console.log(u.username + " FOLLOWED");
                });
            }, ((timer+=3000)+Math.round(Math.random()*500)), val);
        });
    });


})();