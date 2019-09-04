// var title_name = document.querySelector("h1");

var title_name = document.querySelector(".title_class");
// console.log(title_name.textContent);
title_name.textContent = "Aparecida Nutricionista";

// var patient = document.querySelector("#primeiro-paciente");
var patients = document.querySelectorAll(".paciente");

for(var i = 0; i < patients.length; i++) {
    // console.log(patients[i])
    var patient = patients[i];

    var tdPeso = patient.querySelector(".info-peso");
    var tdAltura = patient.querySelector(".info-altura");
    var tdImc = patient.querySelector(".info-imc");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        //console.log("Peso Inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        patient.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        //console.log("Altura Inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        patient.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var tdImc = patient.querySelector(".info-imc");
        var imc = peso / (altura * altura);
        
        tdImc.textContent = imc.toFixed(2);
    }
}

var addButton = document.querySelector("#adicionar-paciente");
addButton.addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão (recarregar toda página)
    
    var form = document.querySelector("#form-add");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var patientTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    patientTr.appendChild(nomeTd);
    patientTr.appendChild(pesoTd);
    patientTr.appendChild(alturaTd);
    patientTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(patientTr);
});

/*title_name.addEventListener("click", mostraMensagem);
function mostraMensagem() {
    console.log("Olá, eu fui clicado!");
}*/

// Anonymous function
title_name.addEventListener("click", function() {
    console.log("Olá, eu fui clicado através de função anônima!");
});