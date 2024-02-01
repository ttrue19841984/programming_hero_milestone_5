function getInputFieldValue(inputFieldId){
    const depositField = document.getElementById(inputFieldId);
    const depositFieldString = depositField.value;
    const depositFIeldElement = parseFloat(depositFieldString);
    depositField.value = ''; 
    return depositFIeldElement;
}

function getElementId(elementId){
    const depositTotal = document.getElementById(elementId);
    const depositTotalString = depositTotal.innerText;
    const depositTotalElement = parseFloat(depositTotalString);
    return depositTotalElement;
}
function setTextElement(element, newValue){
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}


