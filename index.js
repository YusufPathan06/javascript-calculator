let result = '';
let buttons = document.querySelectorAll('.number');
console.log(buttons);
const handleNumber = (e) => {
    const clickedNumber = e.target.textContent;
    result += clickedNumber
    document.getElementById('result').value = result;
}
document.addEventListener('click', handleNumber)