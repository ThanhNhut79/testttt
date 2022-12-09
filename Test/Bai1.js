var ajoinBrandNames = [
  { id: 1, name: "Toyota" },
  { id: 2, name: "Suzuki" },
  { id: 3, name: "Ford" },
  
];
let user = ajoinBrandNames.find((item) => item.id ===1);
let user2 = ajoinBrandNames.find((item) => item.id ===2);
let user3 = ajoinBrandNames.find((item) => item.id ===3);

console.log(user.name + ", " + user2.name + ", " + user3.name);
