let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book';
text = melange(text);
span(text);
const spans = document.querySelectorAll("#words span");
let position = 0;
let correct = 0;
let faux = 0;
let timer = 60;
let result = 0;
console.log(text.length)
document.querySelector("#reset").onclick= function(){
    location.reload();
}
document.addEventListener("keydown", function startC() {
    let time = setInterval(() => {
        timer--;
        console.log(timer);
        document.querySelector("#timer").innerText =`Timer : ${timer}`;
        if (timer == 0 || position == text.length) {
            clearInterval(time);
            document.removeEventListener("keydown",play);
            result= Math.floor((correct/text.length)*100);
            document.querySelector("#win").innerText=`you got ${result} %`;
        }
    }, 1000)
    document.removeEventListener("keydown", startC);
})




function play(event) {
    const touch = event.key;


    if (touch !== "") {
        if (touch.length !== 1) return;
        if (touch === text[position]) {
            spans[position].style.background = "green";
            correct++;
        }
        else {
            spans[position].style.background = "tomato";
            faux++;
        }
        position++;
        document.querySelector("#correct").innerText = `Correct : ${correct}`;
        document.querySelector("#mistake").innerText = `mistake : ${faux}`;

        if (position < spans.length) {
            spans[position].style.background = "#7d7d7d82";
        }

    }
}

document.addEventListener("keydown", play);

function span(text) {
    let p = document.createElement("p");
    for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        span.innerText = text[i];
        span.id = i;
        p.appendChild(span);
    }
    document.querySelector("#words").appendChild(p);
}

function melange(string) {
    let tableau = string.split(' ');
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    let newText = tableau.join(" ");

    return newText;
}
