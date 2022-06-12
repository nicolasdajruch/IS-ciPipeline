const element = document.getElementById("btn");

element.addEventListener("click", showRainProbability);

function roundNumber2Digits(numberParam) {
    return Math.round((numberParam + Number.EPSILON) * 100) / 100;
}

function showRainProbability() {
    const rainProbabilityNumber = roundNumber2Digits(Math.random());
    let response = document.getElementById("response");
    let text = document.createElement("p");
    let probText = "";

    if (rainProbabilityNumber >= 0.75) {
        probText = "ALTA";
        text.style.color = "Red";
    } else if (rainProbabilityNumber >= 0.50) {
        probText = "MEDIA";
        text.style.color = "Gold";
    } else if (rainProbabilityNumber >= 0.25) {
        probText = "BAJA";
        text.style.color = "Green";
    } else {
        probText = "MUY BAJA";
        text.style.color = "LightSkyBlue";
    }
    
    response.firstElementChild.hidden = false;
    text.textContent = `${probText} - ${roundNumber2Digits(rainProbabilityNumber * 100)}%`;
    if (response.childElementCount > 1) {
        response.replaceChild(text, response.lastElementChild);
    } else {
        response.appendChild(text);
    }
    
}