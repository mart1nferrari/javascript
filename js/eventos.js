let form = document.getElementById("formulario-nombre");

form.addEventListener("submit", validarForm);

//resultado posicion
let resultadoLugar = document.getElementById("resultado");

function validarForm (e)
{
    e.preventDefault();

    let formulario = e.target;

    let number1 = formulario.children[0].value;

    let number2 = formulario.children[1].value;

    //resultado
    let resultado = document.createElement("p");
    resultado.innerHTML = `${number1 * number2}`;
    resultadoLugar.appendChild(resultado);
}