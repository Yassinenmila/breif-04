document.addEventListener("DOMContentLoaded", () => {

    const cards = ["😁", "😁", "🤪", "🤪", "🤓", "🤓", "😍", "😍", "🥳", "🥳", "😭", "😭", "😡", "😡", "🫣", "🫣"];
    let melange_card = melange(cards);
    const message = document.querySelector("h2");
    const score_message = document.querySelector("h3");
    let cpt = 0;
    let opencard = [];
    let score=0;
    for (let i = 0; i < cards.length; i++) {
        let box = document.createElement('div');
        box.className = "card";
        box.innerText = melange_card[i];
        box.addEventListener('click', choice)
        document.querySelector('.cards').appendChild(box);
    }

    function melange(tableau) {
        for (let i = tableau.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
        }
        return tableau;
    }

    function choice() {

        this.classList.add('boxopen');
        opencard.push(this);

        if (opencard.length === 2) {
            
            if (opencard[0].innerText === opencard[1].innerText) {
                opencard[0].classList.add('matched');
                opencard[1].classList.add('matched');
                cpt++;
                score++;
                opencard = [];
            } else {
                setTimeout(() => {
                    opencard[0].classList.remove('boxopen');
                    opencard[1].classList.remove('boxopen');
                    opencard = [];
                }, 400);
            }
        }
        document.querySelectorAll(".matched").forEach(matched => {
            matched.style.pointerEvents = 'none';

        });
        if (cpt == 8) {
            message.innerText = `You win !!!`;
        }
        score_message.innerText=`Score : ${score}`;
    }
    document.querySelector("#Reset").onclick = function () {
        location.reload();
    }
});