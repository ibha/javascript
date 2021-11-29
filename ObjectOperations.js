

let school = {
    name: 2,
    location : 4,
    established : 1,
    displayInfo : 3
}

const newSchool = Object.keys(school).map((key)=>[key,value=school[key]*2]);
const newSchoolEntries = Object.entries(school).map((entry)=>console.log("Entry ",entry));

const schoolSpread = {...school,lastname:"gandhi"};
console.log("schoolSpread ",schoolSpread);

console.log(Object.fromEntries(newSchool))
