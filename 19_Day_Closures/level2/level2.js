//1)Create a closure which has three inner functions

function x() {
  let a = 10;
  function y() {
    let b = 100;
    function z() {
      function c() {
        console.log(a, b);
      }
      c();
    }
    z();
  }
  y();
}
x();
