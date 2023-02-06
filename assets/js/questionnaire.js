let queryCount = 7; // number of the selected questions
let quizTime = 45; // munits to calculate 
var select = [];
var list = [];
var record = "";
let s = 0;

let testMode;

// function getTestSettings(){

//     let testMode = document.getElementById('mode').checked;
//     let answerTimeLimit = document.getElementById('x1-radio');
//     let queryCount = 7

//   }


document.getElementById("load-question").addEventListener("click", runTest);
document.getElementById("submit-question").addEventListener("click", questionSubmit);
document.getElementById("show-corrects").addEventListener("click", showAnswers);
document.getElementById("show-result").addEventListener("click", showResult);


function runTest() {

    document.querySelector(".question-sheet").style.display = "block";
    questionsLoad();
}


function getMode() {

    testMode = document.getElementById("test-mode").checked;
}




function questionsLoad() {

    fetch("assets/data/000TestDataSet.json") // link later to select and upload process -----------#check
        .then(response => {
            return response.json();
        })
        .then(data => {

            randomSelect(data);
            list = data; //Creates Global Variable OPT: use local possible?

            getMode();
            questionShow();

            if (testMode == true) {
                document.getElementById("load-question").disabled = true;
                document.getElementById("submit-question").disabled = false;
                document.getElementById("show-corrects").disabled = true;
                startTimer();

            } else {
                document.getElementById("load-question").disabled = true;
                document.getElementById("submit-question").disabled = false;
                document.getElementById("show-corrects").disabled = false;

            }
        });

}


function randomSelect(data) {

    const maxNum = data.questions.length;
    while (select.length < queryCount) {

        var num = Math.floor(Math.random() * maxNum) + 1;
        if (num <= maxNum && select.includes(num) == false) {
            select.push(num);
        }
    }
    info1.innerHTML = queryCount + "/" + maxNum + " random selection: " + select;

}


function questionShow() {


    if (s < select.length) {

        let q = select[s] - 1;
        qID.innerHTML = list.questions[q].qRefID;
        qText.innerHTML = list.questions[q].qRefText;
        A.innerHTML = list.questions[q].checkbox1;
        B.innerHTML = list.questions[q].checkbox2;
        C.innerHTML = list.questions[q].checkbox3;
        D.innerHTML = list.questions[q].checkbox4;
        s++

        optionesTrue(q);

    } else {
        document.getElementById("submit-question").disabled = true;
        document.getElementById("show-corrects").disabled = true;
        document.getElementById("show-result").disabled = false;

    }

    if (testMode == true) {

        startTimer();

    }
}


// setup correct options

function optionesTrue(q) {

    optionsClear();

    let xCorrects = list.questions[q].corrects

    console.log(xCorrects);

    for (i = 0; i < xCorrects.length; i++) {
        let correct = xCorrects.charAt(i);
        switch (correct) {
            case "1":
                document.getElementById("load-question").checked = true;
                break;
            case "2":
                document.getElementById("submit-question").checked = true;
                break;
            case "3":
                document.getElementById("show-corrects").checked = true;
                break;
            case "4":
                document.getElementById("show-result").checked = true;
                break;
        }
    }
}


function showAnswers() {

    let xShow = document.getElementById("show-corrects").value;

    if (xShow == "Show Answers") {
        opacity = 0.5;
        document.getElementById("show-corrects").value = "Hide Answers";
    } else {
        opacity = 0.01;
        document.getElementById("show-corrects").value = "Show Answers";
    }

    document.getElementById("load-question").style.opacity = opacity;
    document.getElementById("submit-question").style.opacity = opacity;
    document.getElementById("show-corrects").style.opacity = opacity;
    document.getElementById("show-result").style.opacity = opacity;
    // document.querySelector(".x-answers").style.opacity = "0.5";  TEMP ? not working


}

function questionSubmit() {

    checkAnswers();
    recordText();

    optionsClear();
    questionShow();

    timePassed = -1;
    clearInterval(timerInterval);
}

function showResult() {

    document.getElementById("xQuiz").style.display = "none";

    document.getElementById("x-result").style.display = "block";
    document.getElementById("SP").innerText = document.getElementById("scorePlus").innerHTML;
    document.getElementById("SM").innerText = document.getElementById("scoreMinus").innerHTML;

    document.getElementById("x-record").innerText = record;

}

function checkAnswers() {

    if (option1.checked == checkbox1.checked &&
        option2.checked == checkbox2.checked &&
        option3.checked == checkbox3.checked &&
        option4.checked == checkbox4.checked
    ) {
        scorePlus();
        pass = "Y";

    } else {
        scoreMinus();
        pass = "N";
    }
}
// record==============================
function recordText() {

    record = record + "\n" + document.getElementById("qID").innerHTML + " Pass: " + pass;
}

function scorePlus() {

    let oldScore = parseInt(document.getElementById("scorePlus").innerText);
    document.getElementById("scorePlus").innerText = ++oldScore;
}

function scoreMinus() {

    let oldScore = parseInt(document.getElementById("scoreMinus").innerText);
    document.getElementById("scoreMinus").innerText = ++oldScore;
}




function optionsClear() {
    // TBD comennted out => why not working ? =================================================#Check
    // document.querySelectorAll("#my-test input").checked = false;
    // document.getElementsByName("pro-event").checked = false;

    let checkboxes = document.getElementsByName("options");
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}