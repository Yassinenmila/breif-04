let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book';
text = melange(text);
span(text);
const spans=document.querySelectorAll("#words span");
let position=0;

document.addEventListener("keydown", function (event) {
    const touch = event.key;
    
    if(touch.length!==1)return;
    if(touch===text[position]){
        spans[position].style.background="green";
    }
    else{
        spans[position].style.background="tomato";
    }
    position++;
});
spans[position].style.background="yellow";
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
