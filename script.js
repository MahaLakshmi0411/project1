var list = document.querySelectorAll('img');

const first = Math.floor(Math.random()* 6) + 1;
const firstImage = 'assets/dice' + first + ".png";
list[0].setAttribute('src',firstImage);

/*
0.1 * 6 = 0.6 = 0 +1 = 1
0.9 * 6 = 5.4 = 5 +1 = 6

0.5 * 6 = 3.0 = 3 +1 = 4

*/
const second = Math.floor(Math.random()* 6) + 1;
const secondImage = 'assets/dice' + second + ".png";
list[1].setAttribute('src',secondImage);

if (first > second) {
    document.querySelector('h1').innerHTML = "The Winner is User 1";
}
else if (first < second) {
    document.querySelector('h1').innerHTML = "The Winner is User 2";
}
else {
    document.querySelector('h1').innerHTML = "It is a tie/draw";

}




