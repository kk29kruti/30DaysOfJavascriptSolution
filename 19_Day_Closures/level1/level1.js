//1)Create a closure which has one inner function

function x() {
  let a = 100;
  function y() {
    console.log(a);
  }
  y();
}
x();
