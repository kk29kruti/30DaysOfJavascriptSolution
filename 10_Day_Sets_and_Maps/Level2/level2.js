const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// 1.Find a union b

const c = [...a,...b];

const union_of_a_b = new Set(c);
console.log("union_of_a_b",union_of_a_b)

// 2.Find a intersection b

const A = new Set(a);
const B = new Set(b);

const filterd = a.filter((aa) => B.has(aa));
console.log("Intersection of a and b",filterd);

// 3.Find a with b

const filter1 = a.filter((a_b) => !B.has(a_b));
console.log("diffrence of a and b",filter1)