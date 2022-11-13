//there are two web storage objects:-
//1)sessionStorage
//2)localStorage

//localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration
//time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

//The keys and the values are always strings (note that, as with objects, integer keys will be automatically
//converted to strings).

//sessionStorage and localStorage ma etalo j diffrence 6 ne ke browser close thai jay ya reopen thay still
//localStorage ma data stored rahe nd sessionStorage ma ek var browser close thyu toh data gayab thai jay

//Web Storage data is, in both cases, not available between different browsers.
//For example, storage objects created in Firefox cannot be accessed in Internet Explorer,
//exactly like cookies.
//web storage data e local and session bane case ma diffrenet browsers ma avaiable na rahe
//je browser ma store karvelu hoy tya j exists rahe.

//there are 5 methods to work on local storage :- 1)removeItem(),setItem(),getItem(),clear(),key()

//use cases of web storages:-
//user login hoy tyare ena id and password local storage ma store karvi devna nd user jya sudhi login hase
//tya sudhi data localStorage ma rehse nd jyare logout thase tyare e id and password remove thai
//jase localStorage mathi

//1)store data temporarily
//2)can be used offline completely using localStorage
//3)saving products that the user places in his shopping carts
//4)data can be made available between page requests, multiple browser tabs, and also between browser session using localstorage
//5)can be used for user authentication method

//Web storage Objects:-

// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

//storing item to the localStorage
//When we set data to be stored in a localStorage, it will be stored as a string.
//If we are storing an array or an object, we should stringify it first to keep the format
//unless otherwise we lose the array structure or the object structure of the original data.

const skills = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
console.log(localStorage);

//Storage Storage {skills: '["HTML","CSS","JS","React"]' length:1}
//and without stringify the o/p is := {skill: "HTML,CSS,JS,React,Node,Python"}
//that's why object ya array ne string ma convert kariya pachi j storage ma store karvnu
