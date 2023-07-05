let newName = document.getElementById("Name");
let aboutMe = document.getElementById("aboutMe");
let history = document.getElementById("historySub");
let skills = document.getElementById("skillsSub");

const createName = (event) => {
    let nameLength = event.innerHTML.length;
    let currentName = event.innerHTML;
    event.innerHTML = " ";
    for(let i = 0; i < nameLength; i++){
        setTimeout(() => {event.innerHTML = event.innerHTML + currentName[i];}, (300 * i))
    }
    
}

console.log(location.pathname.split("/").slice(-1));

//createName(newName);
if(location.pathname.split("/").slice(-1)[0] === "index.html"){
    document.addEventListener('load', createName(newName));
    document.addEventListener('load', createName(aboutMe));
    document.addEventListener('load', createName(history));
    document.addEventListener('load', createName(skills));
}

if(location.pathname.split("/").slice(-1)[0] === "contacts.html"){
    document.addEventListener('load', createName(newName));
}
