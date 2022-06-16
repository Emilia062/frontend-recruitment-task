const popup = document.getElementById("Popup");

// const data = []

// const saveClickNumberToLocalStorage = (newObject) => {
//     let dataFromLocalStorage =[];
//     if(localStorage.getItem("clickCount") !== null){
//         dataFromLocalStorage = JSON.parse(localStorage.getItem("clickCount"));
//         dataFromLocalStorage.push(newObject);
//         localStorage.setItem("clickCount", JSON.stringify(dataFromLocalStorage));
//     } else {
//         dataFromLocalStorage.push(newObject);
//         localStorage.setItem("clickCount", JSON.stringify(dataFromLocalStorage));
//     }
//     console.log(dataFromLocalStorage);
//     alert("Added click");
// }



// const getClickNumberFromLocalStorage = () => {
//     if(localStorage.getItem("clickCount") !== null) {
//         const area = document.getElementById("area");
//         area.innerText = `You have clicked ${localStorage.getItem("clickCount")} times to related button.`
//     }
// }

// function for counting clicks and to show the popup
let clickCount = 0;
const toOpen = () => {
    popup.classList.toggle("show");
    const area = document.getElementById("area");
    clickCount +=1;
    area.innerText = `You have clicked ${clickCount} times to related button.`

    saveClickNumberToLocalStorage(clickCount);
}

   

const toClose = () => {
    // popup.classList.toggle("show");
}
