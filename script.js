const button = document.querySelector("button");
const resultArea = document.querySelector(".result-area");
const resultPerimeter = document.querySelector(".result-perimeter");
const resultTeorema = document.querySelector("#result-TP")
/* Círculo */
const inputRatio = document.querySelector("#value-radio");
const inputDiameter = document.querySelector("#value-diameter");
/* Triángulo rectángulo */
const inputLadoTrianguloA = document.querySelector("#value-Ta");
const inputLadoTrianguloB = document.querySelector("#value-Tb");
const inputLadoTrianguloC = document.querySelector("#value-Tc");
/* Cuadrado */
const inputLadoCuadradoA = document.querySelector("#value-Ca");
/* Rectángulo */
const inputLadoRectanguloA = document.querySelector("#value-Ra");
const inputLadoRectanguloB = document.querySelector("#value-Rb");
/* Rombo */
const inputLadoRomboA = document.querySelector("#value-ROa");
const inputAlturaRombo = document.querySelector("#value-ROh");
/* Trapecio */
const inputLadoTrapecioA = document.querySelector("#value-TRa");
const inputLadoTrapecioB = document.querySelector("#value-TRb");
const inputLadoTrapecioC = document.querySelector("#value-TRc");
const inputLadoTrapecioD = document.querySelector("#value-TRd");
const inputAlturaTrapecio = document.querySelector("#value-TRh");
/* Pentagono */
const inputLadoPentagonoA = document.querySelector("#value-Pa");
/* Hexagono */
const inputLadoHexagonoA = document.querySelector("#value-Ha");
/* Teorema de pitagoras */
const inputLadoTeoremaA = document.querySelector("#value-TPa");
const inputLadoTeoremaB = document.querySelector("#value-TPb");

button.addEventListener("click", calcularAreaPerimeterCirculo);
button.addEventListener("click", calcularAreaPerimetroTriangulo);
button.addEventListener("click", calcularAreaPerimetroCuadrado);
button.addEventListener("click", calcularAreaPerimetroRectangulo);
button.addEventListener("click", calcularAreaPerimetroRombo);
button.addEventListener("click", calcularAreaPerimetroTrapecio);
button.addEventListener("click", calcularAreaPerimetroPentagono);
button.addEventListener("click", calcularAreaPerimetroHexagono);
button.addEventListener("click", calcularTeoremaDePitagoras);

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
    const ladoA = parseFloat(inputLadoTrianguloA.value);
    const ladoB = parseFloat(inputLadoTrianguloB.value);
    const ladoC = parseFloat(inputLadoTrianguloC.value);
    
    if (!ladoA || !ladoB || !ladoC) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }
    
    const area =  (((ladoA)*(ladoB)) / 2).toFixed(2);
    const perimetro = (ladoA + ladoB + ladoC).toFixed(2);

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroCuadrado() {
    const ladoA = parseFloat(inputLadoCuadradoA.value);

    if (!ladoA) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = ((ladoA)*(ladoA)).toFixed(2);
    const perimetro = (4*ladoA.toFixed(2));

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroRectangulo() {
    const ladoA = parseFloat(inputLadoRectanguloA.value);
    const ladoB = parseFloat(inputLadoRectanguloB.value);

    if (!ladoA || !ladoB) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = ((ladoA)*(ladoB)).toFixed(2);
    const perimetro = (2*ladoA + 2*ladoB).toFixed(2);

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroRombo() {
    const ladoA = parseFloat(inputLadoRomboA.value);
    const altura = parseFloat(inputAlturaRombo.value);

    if (!ladoA || !altura) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = ((ladoA)*(altura)).toFixed(2);
    const perimetro = (4*ladoA).toFixed(2);

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroTrapecio() {
    const ladoA = parseFloat(inputLadoTrapecioA.value);
    const ladoB = parseFloat(inputLadoTrapecioB.value);
    const ladoC = parseFloat(inputLadoTrapecioC.value);
    const ladoD = parseFloat(inputLadoTrapecioD.value);
    const altura = parseFloat(inputAlturaTrapecio.value);

    if (!ladoA || !ladoB || !ladoC || !ladoD || !altura) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = (((ladoA + ladoC) * altura) / 2).toFixed(2);
    const perimetro = (ladoA + ladoB + ladoC + ladoD).toFixed(2);

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroPentagono() {
    const ladoA = parseFloat(inputLadoPentagonoA.value);

    if (!ladoA) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = ((((Math.sqrt(25 + 10 * Math.sqrt(5))) / 4) ) * Math.pow(ladoA, 2)).toFixed(2);
    const perimetro = (5*ladoA).toFixed(2);

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularAreaPerimetroHexagono() {
    const ladoA = parseFloat(inputLadoHexagonoA.value);

    if (!ladoA) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const area = (((3 * Math.sqrt(3)) / 2) * Math.pow(ladoA, 2)).toFixed(2);
    const perimetro = (6*ladoA).toFixed(2);

    resultArea.innerHTML = "El área es: " + area + " cm<sup>2</sup>";
    resultPerimeter.innerHTML = "El perímetro es: " + perimetro + " cm<sup>2</sup>";
}

function calcularTeoremaDePitagoras() {
    const ladoA = parseFloat(inputLadoTeoremaA.value);
    const ladoB = parseFloat(inputLadoTeoremaB.value);

    if (!ladoA || !ladoB) {
        alert("Por favor, pon las dimensiones en centimetros.");
        return;
    }

    const ladoC = (Math.sqrt(Math.pow(ladoA, 2) + Math.pow(ladoB, 2))).toFixed(2);

    resultTeorema.innerHTML = "La hipotenusa (c) del triangulo es: " + ladoC + " cm";
}