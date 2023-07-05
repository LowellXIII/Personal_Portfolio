let newName = document.getElementById("Name");
let aboutMe = document.getElementById("aboutMe");

/*const createName = () => {
    let nameLength = newName.innerHTML.length;
    let currentName = newName.innerHTML;
    newName.innerHTML = "J";
    for(let i = 1; i < nameLength; i++){
        setTimeout(() => {newName.innerHTML = newName.innerHTML + currentName[i];}, (500 * i))
    }
    
}*/

const createName = (event) => {
    let nameLength = event.innerHTML.length;
    let currentName = event.innerHTML;
    event.innerHTML = "";
    for(let i = 0; i < nameLength; i++){
        setTimeout(() => {event.innerHTML = event.innerHTML + currentName[i];}, (300 * i))
    }
    
}

//createName(newName);
document.addEventListener('load', createName(newName));
document.addEventListener('load', createName(aboutMe));