const card = document.querySelector(".card");
const formButton = document.querySelector("#formColor");
const colorButton = document.querySelector("#randomButton");
const resetButton = document.querySelector("#reset");

const asignColor = (event) => {
    event.preventDefault();
    let userSelection = document.querySelector("#color").value;
    card.style.backgroundColor = userSelection;
}

const colorRandom = () => {
    const numerosLetras = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
    let colorCode = "#";
    for (let i=0; i<6;i++){
        let digitPosition = Math.floor(Math.random()*(numerosLetras.length-1));
        colorCode += numerosLetras[digitPosition];
    }
    card.style.backgroundColor = colorCode;
};

const resetStyle = () => {
    card.style.backgroundColor = "rgb(89, 213, 235)";
};

formButton.addEventListener('click', asignColor);
colorButton.addEventListener("click", colorRandom);
resetButton.addEventListener("click", resetStyle);

