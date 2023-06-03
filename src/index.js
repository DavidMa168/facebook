import "./index.css";

const btn1 = document.getElementById("btn")
const text1 = document.getElementById("text")
const box1 = document.getElementById("box")
const boxul1 = document.getElementById("boxul")

btn1.addEventListener('click', function(){
    // text1.classList.remove('text-fb');
    text1.classList.add('text-fb');
    box1.innerHTML = "<p>test</p>";

    let str = '';
    const li = '<li class="text-fb">texxt</li>'

    for (let i = 0; i < 5; i++){
        str = str + li;
    }

    boxul1.innerHTML = str;
})