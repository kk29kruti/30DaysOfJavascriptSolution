//1.Destructure and assign the elements of constants array 
//to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37, 100]

const [e,pi,gravity, humanBodyTemp,waterBoilingTemp] = constants 
console.log("destructre of constnts array:-",e,pi,gravity, humanBodyTemp,waterBoilingTemp);

//2.Destructure and assign the elements of countries array 
//to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin,est,sw,den,nor] = countries 
console.log("destructre of countries array:-",fin,est,sw,den,nor);

//3.Destructure the rectangle object by its properties or keys.

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

let {width,height,area,perimeter} = rectangle;
console.log("width,height,area,perimeter",width,height,area,perimeter);
