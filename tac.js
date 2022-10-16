

/* Made multiple and various types of attempts to achieve functionality for JavaScript to 
recognize one of the arrays below as a winning hand but did not achieve success with any 
of the attempts */


let currentTurn = 'X';

let winningHands = new Map([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 6],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9]
]);

function reset() {
    $('#reset').on('click', () => {
    $('#1').text('-').css('background-color', 'white');
    $('#2').text('-').css('background-color', 'white');
    $('#3').text('-').css('background-color', 'white');
    $('#4').text('-').css('background-color', 'white');
    $('#5').text('-').css('background-color', 'white');
    $('#6').text('-').css('background-color', 'white');
    $('#7').text('-').css('background-color', 'white');
    $('#8').text('-').css('background-color', 'white');
    $('#9').text('-').css('background-color', 'white');
})};
reset();


var c1 = $('#1');
c1.on('click', () => {
    c1.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#1').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#1').css("background-color", "pink");
    }
});

let c2 = $('#2');
c2.on('click', () => {
    c2.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#2').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#2').css("background-color", "pink");
    }
})

let c3 = $('#3');
c3.on('click', () => {
    c3.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#3').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#3').css("background-color", "pink");
    }
})

let c4 = $('#4');
c4.on('click', () => {
    c4.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#4').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#4').css("background-color", "pink");
    }
})

let c5 = $('#5');
c5.on('click', () => {
    c5.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#5').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#5').css("background-color", "pink");
    }
})

let c6 = $('#6');
c6.on('click', () => {
    c6.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#6').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#6').css("background-color", "pink");
    }
})

let c7 = $('#7');
c7.on('click', () => {
    c7.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#7').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#7').css("background-color", "pink");
    }
})

let c8 = $('#8');
c8.on('click', () => {
    c8.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#8').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#8').css("background-color", "pink");
    }
})

let c9 = $('#9');
c9.on('click', () => {
    c9.text(currentTurn);
    currentTurn = currentTurn === 'X' ? 'O' : 'X';
    $('#currentTurn').text(currentTurn);
    if (currentTurn === 'O') {
        $('#9').css("background-color", "yellow");
    } else if (currentTurn === 'X') {
        $('#9').css("background-color", "pink");
    }
})


// selectionOfWinner();

// function selectionOfWinner () {
//     // oWinner.filter(winningHands);
//     // xWinner.filter(winningHands);
//     if (oWinner == winningHands) {
//         alert `O wins!`;
//     } else if (xWinner === winningHands) {
//         alert `X wins!`;
//     } else {
//         return alert `No winner!`;
//     }
// }
 
// let currentTurn = 'X';

// function initializeCell(cellId) {
//     const cellElement = $(`#${cellId}`);
//     cellElement.on('click', () => {
//         cellElement.text(currentTurn);
//         currentTurn = currentTurn === 'X' ? '0' : 'X'
//         $('#currentTurn').text(currentTurn)
//     });
// }

// function intitializeGame() {
// const cells = ['UL', 'UM', 'UR', 'ML', 'MM', 'MR', 'BL', 'BM', 'BM', 'BR'];
// cells.forEach((cellId) => {
//     initializeCell(cellId);
// })
// }

// $('#restart').on('click', () => {
//     $('.gameCell').text('-')
// });

// initializeCell();