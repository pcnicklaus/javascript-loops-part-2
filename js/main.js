// add scripts

var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

console.log("sanity check!");

// //Problem 1 - WORKING
// for (var i = 0; i < students.length; i++) {
//   if (students[i] !== "lily") {
//     console.log(students[i]);
//   }
// }

//Problem 2 - WORKING
// joe
// rachel
// lily

for (var i = 0; i < students.length; i++) {
  if (students.indexOf(students[i]) % 2 === 0) {
    console.log(students[i]);
  }
}

//Problem 3 - WORKING
// lily
// derek
// rachel
// carl
// joe

var reversedArray = [];
for (var i = 0; i < students.length; i++) {
  reversedArray.unshift(students[i]);
  console.log(reversedArray);
}

// Problem 4 - Working - but kinda ugly....
//  a) tried doubling all names whose length isn't 3 but that doesn't work for lily.
//  b) joe and lily are the first and last indexes but not sure how to use that.
// joe
// carl
// carl
// rachel
// rachel
// derek
// derek
// lily

for (var i = 0; i < students.length; i++) {
  if (students.indexOf(students[i]) === 0) {
    console.log(students[i]);
  } else if (students.indexOf(students[i]) === 4) {
    console.log(students[i]);
  } else {
    console.log(students[i]);
    console.log(students[i]);
  }
}

// why doesn't it like this???
for (var i = 0; i < students.length; i++) {
  if (students.indexOf(students[i]) === (1 || 2 || 3)) {
    console.log(students[i]);
    console.log(students[i]);
  } else {
    console.log(students[i]);
  }
}

// Or this
for (var i = 0; i < students.length; i++) {
  if (students.indexOf(students[i]) === 0 || 4) {
    console.log(students[i]);
    console.log(students[i]);
  } else {
    console.log(students[i]);
  }
}
