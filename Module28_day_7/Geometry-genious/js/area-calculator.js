

// Triangale area
function calculateTriangleArea(){
    const baseInput = document.getElementById('triangle-base');
    const baseInputString = baseInput.value;
    const baseInputElement = parseFloat(baseInputString);
    baseInput.value = '';


    const heightInput = document.getElementById('triangle-height');
    const heightInputString = heightInput.value;
    const heightInputElement = parseFloat(heightInputString);
    heightInput.value = '';


    const resultArea = document.getElementById('triangle-area');
    resultArea.innerText =0.5 * baseInputElement * heightInputElement;  

    // validate input: baseInputElement and heightInputElement
    if(isNaN(baseInputElement) || isNaN(heightInputElement)){
        alert('please insert a number');
        return; 
    }
    
}


// Rectangle-area
function calculateRectangleArea(){
    const ractangleWidth = document.getElementById('rectangle-width');
    const ractangleWidthString = ractangleWidth.value;
    const ractangleWidthElement = parseFloat(ractangleWidthString);


    const ractangleLength = document.getElementById('rectangle-height');
    const ractangleLengthString = ractangleLength.value;
    const ractangleLengthElement = parseFloat(ractangleLengthString);

    const area = ractangleLengthElement * ractangleWidthElement;
     
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}


// parallelogram-area

function parallelogramInputArea(inputId){
    const parallelogramArea = document.getElementById(inputId);
    const parallelogramAreaString = parallelogramArea.value;
    const parallelogramAreaElemeant = parseFloat(parallelogramAreaString);
    return parallelogramAreaElemeant;
}

function setParallelogramElemeant(element, newElement){
    const setElements = document.getElementById(element);
    setElements.innerText = newElement;
}

function calculateParallelogramArea(){
    const parallelogramBachArea = parallelogramInputArea('parallelogram-width');
    const parallelogramHeightArea = parallelogramInputArea('parallelogram-height');

    // validate
    if(isNaN(parallelogramBachArea)|| isNaN(parallelogramHeightArea)){
        alert('please Provied me a number');
        return;
    }

    const area = parallelogramBachArea * parallelogramHeightArea;
    

    setParallelogramElemeant('parallelogram-area', area);
}



function calculateEllipseArea(){
    const ellipseFirstElement = parallelogramInputArea('ellipse-first-radius');
    const ellipseSecondElement = parallelogramInputArea('ellipse-second-radius');
    const area = 3.14 * ellipseFirstElement * ellipseSecondElement;
    setParallelogramElemeant('ellipse-area', area);
}


// Data validation

// 1. set the proper type of the input .(number, data, email)
// 2. check type using typeof
// 3. NaN means: Not a Number. isNaN is checking whether the input is not a number or not.