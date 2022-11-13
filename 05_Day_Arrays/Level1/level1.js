//1.Declare an empty array.
const arr = [];
console.log(arr);

//2.Declare an array with more than 5 number of elements
const num = [1,2,3,4,5,6];
console.log("num",num);

//3.Find the length of your array
console.log("Num array length:-",num.length);

//4.Get the first item, the middle item and the last item of the array
const first_item = num[0];
console.log("first_item",first_item);
//even number mate n/2
const middle_item_length = num.length/2;
console.log("middle_item_length",num[middle_item_length]);
const last_item = num.length -1 ;
console.log("last_item",last_item);

//5.Declare an array called mixedDataTypes, put different data types in 
//the array and find the length of the array. The array 
//size should be greater than 5

const mixedDataTypes = [1,'kk',2,3,'patel',true,4];
const mixedDataTypes_length = mixedDataTypes.length;
console.log("mixedDataTypes_length",mixedDataTypes_length);


//6.Declare an array variable name itCompanies and assign initial
//values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
//7.Print the array using console.log()
console.log("itCompanies",itCompanies);

//8.Print the number of companies in the array
console.log("itCompanies_length",itCompanies.length);

//9.Print the first company, middle and last company
const first_company = itCompanies[0];
console.log("first_company",first_company);
//odd number mate (n+1)/2
const middle_company_length = (itCompanies.length + 1)/2 ;
console.log("middle_company_length",itCompanies[middle_company_length]);
const last_company = itCompanies.length - 1;
console.log("last_company",last_company);

//10.Print out each company
console.log("Print out each company",itCompanies.toString());

//11.Change each company name to uppercase one by one and print them out
console.log("Company name to uppercase",itCompanies.toString().toUpperCase());

//12.Print the array like as a sentence: Facebook, Google, Microsoft,
//Apple, IBM,Oracle and Amazon are big IT companies.

const str_arr = "Facebook, Google, Microsoft,Apple,IBM,Oracle and Amazon are big IT companies."
const arr1 = new Array(str_arr);
console.log("string to array",arr1);

//13.Check if a certain company exists in the itCompanies array. 
//If it exist return the company else return a company is not found

if(itCompanies[0]=="Facebook")
{
    console.log('company exists',itCompanies[0]);
}else{
    console.log('company is not exists',itCompanies[0]);
}

//14.Filter out companies which have more than one 'o' without the filter method

//const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

const verif=(itCompanies)=>{
  var count=0
  var leng=itCompanies.length

  for(let i=0 ; i<=leng;i++) {
    if (itCompanies[i]=="o") {
      count++
    }
  }
  if (count>=2) {
    return true
  } else {
    return false
  }
}

console.log(verif(itCompanies[0]));
console.log(verif(itCompanies[1]));
console.log(verif(itCompanies[2]));
console.log(verif(itCompanies[3]));
console.log(verif(itCompanies[4]));
console.log(verif(itCompanies[5]));
console.log(verif(itCompanies[6]));

//15.Sort the array using sort() method
const sort_itCompanies = itCompanies.sort();
console.log("sort it companies name",sort_itCompanies);

//16.Reverse the array using reverse() method
const reverse_itCompanies = itCompanies.reverse();
console.log("reverse_itCompanies",reverse_itCompanies);

//17.Slice out the first 3 companies from the array
const slice_first_itCompanies = itCompanies.slice(0,3);
console.log('first three companies',slice_first_itCompanies);

//18.Slice out the last 3 companies from the array
const slice_last_itCompanies = itCompanies.slice(itCompanies.length-3);
console.log("last three companies",slice_last_itCompanies);

//19.Slice out the middle IT company or companies from the array
const length_middle_it_company = (itCompanies.length + 1) /2 ;
console.log("length_middle_it_company",length_middle_it_company);

const slice_middle_it_company = itCompanies.slice(3,4);
console.log("slice_middle_it_company",slice_middle_it_company);

//20.Remove the first IT company from the array
const remove_first_it_company = itCompanies.shift();
console.log("remove_first_it_company",remove_first_it_company);


//21.Remove the middle IT company or companies from the array
const remove_middle_it_company = itCompanies.splice(3,1);
console.log("remove_middle_it_company",remove_middle_it_company.toString());
console.log("itCompanies",itCompanies);

//22.Remove the last IT company from the array
const remove_last_it_company = itCompanies.pop();
console.log("remove_last_it_company",remove_last_it_company);

//23.Remove all IT companies
const remove_all = itCompanies.splice(0);
console.log("remove_all",remove_all.toString());

console.log("itCompanies",itCompanies);


//note :- Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.








