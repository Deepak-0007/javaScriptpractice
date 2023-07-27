let emp1={
    name : 'Sam',
    dept : 'Tech',
    designation : 'Mangar',
    salary : 40000,
    raise : true
}
 let emp2={
    name :'Mary',
    dept :'finance',
    designation : 'Trainer',
    salary : '18500',
    raise :true
 }

 let emp3={
    name :'Bill',
    dept :'HR',
    designation : 'Excecutive',
    salary : '21200',
    raise :false
 }

//create a company=
const empArray=[emp1,emp2,emp3];
let company={
    companyName : 'Tech stars',
    website : 'www.techstarts.site',
    employees : empArray
}
//update employee
let employee4={
    name : 'Anna',
    dept : 'HR',
    designation: 'executive',
    salary: 3000,
    raise: false
}
company.employees.push(employee4)
console.log(company)