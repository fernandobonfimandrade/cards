
var cards = Array.from(document.getElementsByTagName('li'));

var time = 2000;

for (let index = 0; index < cards.length; index++) {
    let position = index*10;
    let element = cards.shift();
    cards.push(element);
    setTimeout(() => {
        for (let index2 = cards.length-1; index2 > 0; index2--) {
            let element2 = cards[index2];
            if(element2.id != element.id){
                let position2 = (index2-1)*10;
                element2.style.transform = 'rotate(20deg) skew(-20deg)  translate(-'+position2+'px,-'+position2+'px)';
            }
        }
        element.classList.add('moveLemb');
        setTimeout(() => {
            element.style.zIndex = index;
            console.log(position)
            element.style.transform = 'rotate(20deg) skew(-20deg)  translate(-'+position+'px,-'+position+'px)';
        }, 2000);
    }, time);
    time+=2000;
    
}
