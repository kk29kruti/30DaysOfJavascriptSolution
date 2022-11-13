//clouser :-)
//inner functions e outer function na variable ne access kari sake ene j clouser kevay

//example:-1
// function x() {
//   let a = 2;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

//example:-2
// function x() {
//   let a = function y() {
//     console.log(a);
//   };

//   a();
// }
// x();

//example:-3
// function x() {
//   let a = 2;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z);
// z();

//example:-4
//same thing as above
// function x() {
//   let a = 2;
//   return function y() {
//     console.log(a);
//   };
// }

// var z = x();
// console.log(z);
// z();

//example:-5
// function x() {
//   let a = 2;
//   function y() {
//     console.log(a); //a ni reference value get kare nd a=2 mathi a=100 thay toh final o/p 100 j rahe
//   }
//   a = 100;
//   return y;
// }

// var z = x();
// console.log(z);
// z();

//example:-6
//y forms a clouser along with the scope of X and scope of Z
// function z() {
//   let b = 10;
//   function x() {
//     let a = 100;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

//example:-7
// function outerFun() {
//   let count = 0;
//   function innerFun() {
//     count++;
//     return count;
//   }
//   return innerFun;
// }
// const innerFun1 = outerFun();
// console.log(innerFun1());
// console.log(innerFun1());
// console.log(innerFun1());

//example:-8
function outerFun() {
  let count = 0;
  function plusone() {
    count++;
    return count;
  }

  function minusone() {
    count--;
    return count;
  }
  return {
    plusone,
    minusone,
  };
}
const innerFun1 = outerFun();
console.log(innerFun1.plusone());
console.log(innerFun1.minusone());
console.log(innerFun1.plusone());
console.log(innerFun1.plusone());
