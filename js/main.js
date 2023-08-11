//*1
let num = 1;

while (num <= 10) {
  console.log("num: ", num);
  num += 1;
};

//*2
for (let i = 2; i <= 20; i += 1) {
 if (i % 2 === 0) {
  
console.log('парні числа>>',i);
}};

//*3
const numb = 7;

for (let increase = 1; increase <= 10; increase +=1) {
    const res = numb * increase;
    console.log(`${numb} * ${increase} = ${res}`);
}

//*4

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log('array:>>', array.length);
// console.log('array:>>', array[0]);
// console.log('array:>>', array[7]);
// console.log('array:>>', array[array.length -1]);

let index = 0;

// while (0 < 10) {}
while (index < array.length) {
  index += 1;
  console.log('el:>>', array[index]);
};

//*5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (let ind = 0; numbers.length > ind; ind += 1) {
  if (ind === 7) {
    break;
}
    console.log("ind: ",numbers[ind]);
};

//*6
let n = 10;
for (let indexs = 0; indexs < n; indexs += 1) {
    console.log(indexs);
    if (indexs >= n) {
        break
    }
};

//*7

const multipleThree = 20;
for (let thre = 0; thre <= multipleThree; thre += 1) {
  if (thre % 3 === 0) {
    continue;
  }
  console.log("thre: ", thre);
};