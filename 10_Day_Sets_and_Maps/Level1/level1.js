// 1.create an empty set

// const empty_set = new Set();
// console.log("empty_set",empty_set);

// 2.Create a set containing 0 to 10 using loop

// const loop_arr = [0,1,2,3,4,5,6,7,8,9,10];
// const set1 = new Set(loop_arr);
// console.log("set1",set1);
// for(const l of loop_arr){
//     console.log(l);
// }

// 3.Remove an element from a set

// const remove_set = set1.delete(0);
// console.log("remove_set",remove_set);

// 4.Clear a set

// const all_clear = set1.clear();
// console.log("all_clear",all_clear);

// 5.Create a set of 5 string elements from array

const countries = ["Finland", "Sweden", "Norway","NorthEast","WestSouth"];
const ss = new Set(countries);
console.log("set of countries array",ss);

// 6.Create a map of countries and number of characters of a country
const country = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(country)
  console.log("map of countries",map)
  console.log("number of chracters of countries",map.size)