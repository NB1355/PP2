
const start = document.getElementById("x1-button");
// const next 

const lastQuestion = questions.length - 1;

let currentQuestion = 1;
let count = 0;
let score = 0;

function showQuestion() {
    let rq = questions[currentQuestion];

    qID.innerHTML = rq.qRefID
    qText.innerHTML = rq.qRefText;
    A.innerHTML = rq.checkbox1;
    B.innerHTML = rq.checkbox2;
    C.innerHTML = rq.checkbox3;
    D.innerHTML = rq.checkbox4;

    xCorrects = rq.corrects;
    i = xCorrects.length;

    for (i = 0; i < xCorrects.length; i++) {
        let correct = correct.charAt(i);
        switch (correct) {
            case "1":
                console.log(correct);
                break;
            case "2":
                console.log(correct);
                break;
            case "3":
                console.log(correct);
                break;
            case "4":
                console.log(correct);
                break;
        }


        // console.log(correct);
    }
}


// start.addEventListener("click", runQuiz);
// next.addEventListener("click", runQuiz);

function runQuiz() {

    showQuestion();
    i++
}


function check() {
    document.getElementById().checked = check;
}

function uncheck() {
    document.getElementById().checked = uncheck;
}

// test output
// console.log(lastQuestion);
// console.log(option1, option2);

// function showStatus() {
//     for (let rqIndex = 0; rqIndex <= lastQuestion; rqIndex++) {
//         console.log("zzzz");


//     }
// }

// function checkAnswer(answer) {
//     if (answer == questions[currentQuestion].correct) {
//         // answer is correct
//         score++;
//         // change progress color to green
//         answerIsCorrect();
//     } else {
//         // answer is wrong
//         // change progress color to red
//         answerIsWrong();
//     }
//     count = 0;
//     if (currentQuestion < lastQuestion) {
//         runningQuestion++;
//         showQuestion();
//     } else {
//         // end the quiz and show the score
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }