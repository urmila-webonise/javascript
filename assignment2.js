 // Assignment No 2

// object sort in ascending descending
// get data from obj which have more then 20 age
// get only name from object
// [{age:1 name:""A""},{age:2,name:""B""},{age:13,name:""C""}{age:42:name:""D""}{age:42:name:""E""}]"

// 1. object sort in ascending descending 

let persons = [{ age: 1, name: "A" },
    { age: 2, name: "B" },
    { age: 13, name: "C" },
    { age: 42, name: "D" },
    { age: 42, name: "E" }];

// ascending(by age)

persons.sort(function (a, b) {
    return a.age - b.age;
});
console.log(persons);

//descending(by age)

persons.sort(function (a, b) {
    return b.age - a.age;
});
console.log(persons);

//ascending order

let persons = [{ age: 1, name: "A" },
    { age: 2, name: "B" },
    { age: 13, name: "C" },
    { age: 42, name: "D" },
    { age: 42, name: "E" }];

for (let i = 1; i < persons.length; i++){
    for (let j = 0; j < i; j++){
        if (persons[i].age < persons[j].age) {
            let temp = persons[i].age;
            persons[i].age = persons[j].age;
            persons[j].age = temp;
        }
    }
}
console.log(persons);

//descending order

let persons = [{ age: 1, name: "A" },
    { age: 2, name: "B" },
    { age: 13, name: "C" },
    { age: 42, name: "D" },
    { age: 42, name: "E" }];

for (let i = 1; i < persons.length; i++){
    for (let j = 0; j < i; j++){
        if (persons[j].age < persons[i].age) {
            let temp = persons[j].age;
            persons[j].age = persons[i].age;
            persons[i].age = temp;
        }
    }
}
console.log(persons);

//2. get data from obj which have more then 20 age

let persons = [{ age: 1, name: "A" },
    { age: 2, name: "B" },
    { age: 13, name: "C" },
    { age: 42, name: "D" },
    { age: 42, name: "E" }];

let newPersons = persons.filter((p) => {
    if(p.age>20) return persons;
});
console.log(newPersons);

//3. get only name from object

let persons = [{ age: 1, name: "A" },
    { age: 2, name: "B" },
    { age: 13, name: "C" },
    { age: 42, name: "D" },
    { age: 42, name: "E" }];

const newPersons = persons.map((a) => {
    return {name:a.name};
});
console.log(newPersons);