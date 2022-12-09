const a = [1, 3, 5, 2, 9];

const checkArrayHasAnEvenNumber = (arr) => {
  let socheckArrayHasAnEvenNumber = [];
  arr.map((val) => {
    if (val % 2 === 0) {
      socheckArrayHasAnEvenNumber.push(val);
    }
  });
  if (socheckArrayHasAnEvenNumber.length > 0){
    return true;
  }else{
    return false
  }
};

console.log(checkArrayHasAnEvenNumber(a));