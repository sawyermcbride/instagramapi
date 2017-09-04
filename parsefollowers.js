/**
 * Sawyer McBride
 * 8/10/17
 */
(function() {
    const fs = require('fs');
    const request = require('./request.js');

    const options = {
		hostname:'www.instagram.com',
		path:'',
		headers: {'Cookie': "sessionid=IGSC34abb732c40ee90c7e6d239dd16b7b1f519adad2575f1d246f293a02dfb61ae2%3AZd0nF5plkyc3Tkceq10SfP4iahPN3Gk9%3A%7B%22_auth_user_id%22%3A5669850849%2C%22_auth_user_backend%22%3A%22accounts.backends.CaseInsensitiveModelBackend%22%2C%22_auth_user_hash%22%3A%22%22%2C%22_token_ver%22%3A2%2C%22_token%22%3A%225669850849%3ALcEUTt79iJO1sOBsFIORdddgN3mv440h%3Ae701be51500916dc86f2120291972bd732304bfd299d75a0fb37c95bcc739125%22%2C%22_platform%22%3A4%2C%22last_refreshed%22%3A1502247940.1877083778%2C%22asns%22%3A%7B%22time%22%3A1502247992%2C%222602%3A30a%3A2eaf%3Ac7f0%3A751a%3Ad8d2%3A7c8d%3A5b43%22%3A7018%7D%7D;mid=WCkJFwAEAAGyt7gr87zT1tGkrBLl; csrftoken=lHTkZ1VrzHdM7uJcFQgK0SyFJvxNevw7; fbm_124024574287414=base_domain=.instagram.com; ig_vw=1102; ig_pr=1.25; fbsr_124024574287414=2Kc4nkf6R5h76Cp97oS8dVNIYbMwlcVpiuTF3x5DknA.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUM2bHA3MTZuQzJ0bHZfcEJpOGl6WkU0OHRWakt4alJSTE5kNnp0dFozbktOY1JzTlVhVWt6RHNDVWt2VmJTd21zWG03MHFtbGp2ZzAzc2gyeC1wVjJqNTFEcGNoX0V5WWxWdU9rQWFybEZfVjBZYjR5dlZHN1BfZER6aTJEbzBVMGFJR0puclRYdUs2OE8tUFdMOFNhazh0Q2R6YmM0TkpWOGpnWlAxbUJnMVNqYWNyLXk1N0pxN0Y2NWZvbWpEVFJEZjcwaFVQUGVuNGliYkhVdU9iMVFTWkxLRzNWSXA1dVBTdHFpeWNvQkZJcWFEcFRKa3V1aGRhRFBNcm1jZGN0UlJfX2JPdy1GUjZabmw0dTVRNEJIc2ZYR0Jua01MS2UxR3Jsa2ttZ0V3NjdEMzlaNmI0MDZVa2pMdzdFZVF5NXgwYUdLWHhSSmRha1pOUUl1TTBmN3hLUHo2em9jSUVObjlxTUh3YTFmZ3RwY0liaThGMmZYR25tcTNYanE1QU0iLCJpc3N1ZWRfYXQiOjE1MDIyNjEzNDIsInVzZXJfaWQiOiIxMDAwMDQzNzgyOTU0MjEifQ; rur=ASH; csrftoken=dSK4Xl5XQ8vl86mjFi6nvfIU5N7aEzzs; ds_user_id=5669850849"
	 }
	}

    const loadNames = new Promise( (resolve, reject) => {
        fs.readFile('names.txt', 'utf8', (err, data) => {
            if(err) throw err;
            resolve(data);
        });
    })

    const loadJson =  new Promise( (resolve, reject) => {
        fs.readFile('output.txt', 'utf8', (err, data) => {
            if(err) reject(err);
            resolve(data);
        });

    });


    Promise.all([loadNames, loadJson]).then( (values) => {
        let approved = [];
        let obj = JSON.parse(values[1]);
        let namesArr = values[0].split(' ');


        let i = 0;
        obj.users.forEach( (val) => {
            i++;
            options.path = `/${val.username}/?__a=1`;
    
            request(options).then( (user) => {
                // console.log(user)
                let object = JSON.parse(user);
                let followers = object.user.followed_by.count;
                let following = object.user.follows.count;
                let name = object.user.full_name ? object.user.full_name: " ";
                let alreadyFollowing = object.user.followed_by_viewer;
                // console.log((followers/following));
                let rx = /^[A-Za-z0-9\s_+-.,!@#$%^&*();\/|<>"':?=]$/;

                if(following < 2000 && following > 30 && (followers/following) > 0.7 && !alreadyFollowing) {
                    let clear = true;
                    for(let i = 0; i < name.length; i++) {
                        if(!rx.test(name.charAt(i))) {
                            clear = false;
                            break;
                        }
                    }
                    if(clear)
                        approved.push(val);
                }
                fs.writeFile('./approved.txt', JSON.stringify(approved), (err) => {
                    if (err) throw err;
                    console.log("file written");
                })
            });
        });      
    });



})();