const data = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "John",
    lastName: "L.",
    country: "Tokio",
    continent: "Asia",
    age: 49,
    language: "Java",
  },
];

// Необходимо вернуть массив, содержащий самого старшего человека в списке. Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

const getMostSenior = () => {
  // let res = [];
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].age > i) {
  //     res.push(data[i].age);
  //   }
  //   return res;
  // }
  return data.sort((a, b) => b.age - a.age).filter((el) => el.age === data[0].age);
};

const result = getMostSenior(data);

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
//     { firstName: 'John', lastName: 'L.', country: 'Tokio', continent: 'Asia', age: 49, language: 'Java' },
// ]
