'use strict';

// var user = {};

// Object.defineProperty(user, 'name', {
//     value: 'Pitter',
// });
// console.log(user.name);


// var user = {
//     property: 'Text'
// };

// Object.defineProperty(user, 'name', {
//     value: 'Pitter',
//     configurable: true
// });

// delete user.name;

// console.log(user.property);

// var obj = {
//     method: function() {
//         return 'method';
//     }
// };

// Object.defineProperty(obj, 'method', {
//         enumerable: false
//     });

// var n = 0;

// for(var key in obj) {
//     n= 1;
// }

// console.log(n);

// var user = {
//     firstName: null,
//     lastName: null,

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set fullName(value) {
//         var split = value.split(' ');
//         this.firstName = split[0];
//         this.lastName = split[1];
//     }
// }
//     user.fullName = 'fvf fvfv';

// console.log(user.lastName);

'use strict';

var person = {
    name: 'pittr'
};

Object.freeze(person);
console.log(Object.isFreeze(person));
        