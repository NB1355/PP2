

document.getElementById("x-test").addEventListener("click", xTest);
document.getElementById("z-test").addEventListener("click", zTest);

function xTest(){

    setInterval(timeNow, 1000);
    console.log ("run xTest")

};

function zTest(){

    console.log ("run zTest")

};