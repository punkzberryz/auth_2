const bcrypt = require('bcryptjs');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10,(err,salt)=>{
//     if(err) return next(err);
    
//     bcrypt.hash('password123',salt,(err,hash)=>{
//         if(err) return next(err);
//         console.log(hash)
//     })
// })

// const secretPassword = 'mysecretpassword';
// const secretSalt = 'dfgsergadrfgasdfdahbdafhbadsg4w3e';


// const user = {
//     id:1,
//     token: MD5('AWEFASE').toString() + secretSalt
// }

// const receivedToken = 'ab6cabccbd044491ec7655d4a27c3131dfgsergadrfgasdfdahbdafhbadsg4w3e';
// if(receivedToken===user.token){
//     console.log('move forward !')
// }

// console.log(user)

const id = '1000';
const secret = 'supersecret'

const receivedToken = '1eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';


const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(receivedToken,secret);

console.log(decodeToken)
// console.log(token)