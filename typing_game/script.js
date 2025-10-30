let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book';
text = melange(text);
span(text);
const input = document.querySelector("#typing");


document.addEventListener("keydown", function (event) {
    touch = event.key;
    let touch;
    
});

function span (text){
    let p = document.createElement("p");
    for (let i = 0; i < text.length; i++) {
        let span =document.createElement("span");
        span.innerText=text[i];
        span.id=i;
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
