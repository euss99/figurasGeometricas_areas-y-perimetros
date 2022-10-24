const button = document.querySelector("button");
const resultArea = document.querySelector(".result-area");
const resultPerimeter = document.querySelector(".result-perimeter");

/* Circulo */
const inputRatio = document.querySelector("#value-radio");
const inputDiameter = document.querySelector("#value-diameter");

/* Triángulo rectángulo, cuadrado, rectangulo */
const inputLadoA = document.querySelector("#value-a");
const inputLadoB = document.querySelector("#value-b");
const inputLadoC = document.querySelector("#value-c");

button.addEventListener("click", calcularAreaPerimeterCirculo);
button.addEventListener("click", calcularAreaPerimetroTriangulo);
button.addEventListener("click", calcularAreaPerimetroCuadrado);
button.addEventListener("click", calcularAreaPerimetroRectangulo);

function calcularAreaPerimeterCirculo() {
    const radio = inputRatio.value;
    const diametro = inputDiameter.value;

    if (!radio || !diametro) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area =  (Math.PI * Math.pow(radio, 2)).toFixed(2);
    const perimetro = (Math.PI *diametro).toFixed(2);

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroTriangulo() {
    const ladoA = inputLadoA.value;
    const ladoB = inputLadoB.value;
    const ladoC = inputLadoC.value;

    if (!ladoA || !ladoB || !ladoC) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area =  ((ladoA)*(ladoB)) / 2;
    const perimetro = ladoA + ladoB + ladoC;

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroCuadrado() {
    const ladoA = inputLadoA.value;

    if (!ladoA) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = (ladoA)*(ladoA);
    const perimetro = 4*ladoA;

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroRectangulo() {
    const ladoA = inputLadoA.value;
    const ladoB = inputLadoB.value;

    if (!ladoA || !ladoB) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = (ladoA)*(ladoB);
    const perimetro = 2*ladoA + 2*ladoB;

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}