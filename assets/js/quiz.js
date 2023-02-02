let queryCount = 7; // number of the selected questions
let quizTime = 45; // munits to calculate 
var select = [];
var list = [];
var record = "";
let s = 0;

let testMode;



document.getElementById("x1-button").addEventListener("click", runTest);
document.getElementById("x2-button").addEventListener("click", questionSubmit);
document.getElementById("x3-button").addEventListener("click", showAnswers);
document.getElementById("x4-button").addEventListener("click", showResult);


function runTest() {

    let testStatus = 1;


    document.querySelector(".x-checkbox").style.display = "block";

    questionsLoad();
    // document.querySelector(".x-answers").style.display ="none";

    //     while (testStatus =1){
    //         questionShow();
    //     } 
    // }

}


function getMode() {

    testMode = document.getElementById("x1-radio").checked;
    
}

function questionsLoad() {
    fetch("assets/data/000TestDataSet.json")
        .then(response => {
            return response.json();
        })
        .then(data => {

            randomSelect(data);
            list = data; //Creates Global Variable OPT: use local possible?
            getMode();

            questionShow();

            console.log(" test mode:" + testMode) + "/n";
            if (testMode == true) {
                document.getElementById("x1-button").disabled = true;
                document.getElementById("x2-button").disabled = false;
                document.getElementById("x3-button").disabled = true;

            } else {
                document.getElementById("x1-button").disabled = true;
                document.getElementById("x2-button").disabled = false;
                document.getElementById("x3-button").disabled = false;

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
        document.getElementById("x2-button").disabled = true;
        document.getElementById("x3-button").disabled = true;
        document.getElementById("x4-button").disabled = false;

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
                document.getElementById("checkbox1").checked = true;
                break;
            case "2":
                document.getElementById("checkbox2").checked = true;
                break;
            case "3":
                document.getElementById("checkbox3").checked = true;
                break;
            case "4":
                document.getElementById("checkbox4").checked = true;
                break;
        }
    }
}


function showAnswers() {

    let xShow = document.getElementById("x3-button").value;

    if (xShow == "Show Answers") {
        opacity = 0.5;
        document.getElementById("x3-button").value = "Hide Answers";
    } else {
        opacity = 0.01;
        document.getElementById("x3-button").value = "Show Answers";
    }

    document.getElementById("checkbox1").style.opacity = opacity;
    document.getElementById("checkbox2").style.opacity = opacity;
    document.getElementById("checkbox3").style.opacity = opacity;
    document.getElementById("checkbox4").style.opacity = opacity;
    // document.querySelector(".x-answers").style.opacity = "0.5";  TEMP ? not working


}

function questionSubmit() {

    checkAnswers();
    recordText();

    optionsClear();
    questionShow();
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

    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;

    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;
    document.getElementById("option4").checked = false;
}
