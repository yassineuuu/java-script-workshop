var contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
},
{
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
},
{
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
}
];


function lookUpProfile(name, prop) {
    const contact1=contacts[0]
    const contact2=contacts[1]
    const contact3=contacts[2]
    const contact4=contacts[3]
// Compléter cette fonction
if(contact1.firstName.includes(name)){
    return contact1[prop]
    }
    else if(contact2.firstName.includes(name)){
    return contact2[prop]
    }
    else if(contact3.firstName.includes(name)){
    return contact3[prop]
    }
    else if(contact4.firstName.includes(name)){
    return contact4[prop]
    }

    else{
        return "Aucun contact";
    }
}

lookUpProfile("Akira", "likes");