let title = document.querySelector( 'h1' );
title.innerHTML= 'Time for the challenger'

function consoleClick ( params )
{
    console.log('The button was clicked');
}

function alertClick(params) {
    alert( `I love JS` );
}

function promptClick(params) {
    let city = prompt( `Enter a city of de Brazil` );
    alert( `I was in the ${ city } and i thought of you` );
}

function somaClick(params) {
    let number1 = Number(prompt( `Enter a number` ));
    let number2 = Number(prompt( `Enter another number` ));
    let number3 = number1 + number2;
    alert( `${ number1 } + ${ number2 } = ${ number3 }` );
}
