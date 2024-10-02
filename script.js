// what is for each element in the array

const Aname = ["Alice", "Bod", "Charlie", "David", "Emma"];

Aname.forEach(function(value) {
    if(value === "Charlie") {

    }else {
        console.log(value);
    }


    // not allow in the foreach function


   if(value === "Charlie") {
        // break;
        // continue;
   }


});

// using map method to copy array values 

let nwarr = Aname.map(function(value){
    return value;
});



let newarr = Aname.filter(function(value){
    return false;
});




Desturing

const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "Jhon.doe@gmail.com",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        ZipCode: "12345",
    },

    phoneNumbers: [
        {
            type: "home",
            number: "555-1234"
        },
        {
            type: "work",
            number: "555-5678"
        }
    ],
    isActive: true,
    roles: ["user", "admin"],
    perferneces: {
        theme: "dark",
        notification: {
            email: true,
            sms: false
        }
    },
    lastLogin: new Date("2024-05-01T10:30L00Z")
};

let { ZipCode } = user.address;

console.log(ZipCode);


let [ firstName, lastName ] = user.roles;

console.log(firstName, lastName);



// spread and rest ...


const copyNames = [...Aname];


object

const smallObject = {
    name: 'John',
    age: 30,
    city: "New York",
};


const newobj = {...smallObject};


// rest operater 

function abcd(a,b,c,...rest) {
    console.log(rest);
};

abcd(1,2,3,4,5,6,7,8);




const aname = ["John", "Jane", "Doe", "Smith"];
const bname = ["wwww","ddd","ggg","hhh"];

const fullname = [...aname,...bname];


const array = [
    { id: 1, name: "Alice", age: 25  },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 32 },
    { id: 5, name: "Emma", age: 27 },
];
 
let newarra = array.filter(function(arr){
    return array.type === "Alice";
})