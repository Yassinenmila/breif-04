const cards = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
var shuf_card=cards.sort(()=>(Math.random()>.5)?2:-1);
for(var i=0;i<cards.length;i++){
    let box = document.getElementsByClassName("card");
    box.innerHTML=shuf_card[i];
}