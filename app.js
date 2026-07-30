const button = document.getElementById('btn');
const color = document.querySelector('.color');

const numAndWord = [
    "1", "2", "3", "4", "5", "6","7","8","9","A","B","C","D","E","F",

];

button.addEventListener('click', () => {
    let hexColor = genHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

})


function genHex(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += numAndWord[buttonClickChange()];
    }
    return hexColor;
}

function buttonClickChange() {
return Math.floor(Math.random() * numAndWord.length);
}
