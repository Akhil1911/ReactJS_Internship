let Employees = [
    {
        id: 101,
        name: "Sarthak",
        age: 19,
        salary: 50000
    },
    {
        id: 102,
        name: "Sakshi",
        age: 20,
        salary: 45000
    },
    {
        id: 202,
        name: "Kevish",
        age: 20,
        salary: 200000
    },
    {
        id: 104,
        name: "Nikhil",
        age: 70,
        salary: 80000
    },
    {
        id: 105,
        name: "John",
        age: 60,
        salary: 10
    },
]

//Task 1 => Name starting with S
// let newArr = Employees.filter((item) =>  item.name.charAt(0) == "S")
// console.log(newArr);

//Task 2 => Age > 50
// let newArr = Employees.filter((item) => item.age > 50);
// console.log(newArr);

//Task 3 => Find Employee with id 101
// let newArr = Employees.find((item) => item.id == 101);
// console.log(newArr);

//Task 4 => Increase all salary to 10000
// for (let val of Employees) {
//     val.salary += 10000;
// }
// console.log(Employees);

//Task 5 => Add New Emp At Pos 3
// let newEmployee =
//     {
//         id: 106,
//         name: "new employee",
//         age: 100,
//         salary: 1
// }
// Employees.splice(2, 0, newEmployee)
// console.log(Employees);

//Task 6 => Delete employee at position 2
// Employees.splice(1, 1);
// console.log(Employees);

//Task 7 ==> Index  of emp with id 202
// let getIndex;
// let newEmp = Employees.filter((item, index) => {
//     if (item.id == 202) {
//         getIndex = index;
//     }
// })
// document.write(getIndex);

//Task 8 ==> If someone has salary less than 100
// let newEmp = Employees.filter((item) => {
//     return item.salary < 100;
// })
// if (newEmp) {
//     console.log(newEmp);
// } else {
//     console.log("Noone has salary < 100");
// }

//Task 9 => New array with additional property uppernam having name in uppercase
// let newEmp = Employees;
// newEmp.map((val) => {
//     return val['upperName'] = val.name.toUpperCase();
// })
// console.log(newEmp);