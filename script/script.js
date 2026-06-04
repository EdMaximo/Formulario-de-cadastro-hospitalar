// 1. Dados Pessoais

let estaSalvo = false;

function salvarCadastro(event) {
    if (event) event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let data = document.getElementById("date").value;
    let sexo = document.getElementById("sexo").value;
    let cpf = document.getElementById("cpf").value.trim();
    let rg = document.getElementById("rg").value.trim();
    let civil = document.getElementById("civil").value;

    if (nome === "" || data === "" || sexo === "" || cpf === "" || rg === "" || civil === "") {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    alert("Informações salvas!");
    estaSalvo = true;
}

function validarCadastro(event) {
    if (event) event.preventDefault();

    if (estaSalvo === false) {
        alert("Por favor, clique no botão Salvar antes de prosseguir!");
        return;
    }
    window.location.href = "contato2.html"; //Acessa a aba contato
}
// Fim dos Dados Pessoais

// 2. Contato
function salvarCadastroContato(event) {
    if (event) event.preventDefault();

    let telefone = document.getElementById("telefone").value.trim();
    let email = document.getElementById("email").value.trim();
    let cep = document.getElementById("cep").value.trim();
    let rua = document.getElementById("rua").value.trim();
    let bairro = document.getElementById("bairro").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("uf").value.trim();
    let ibge = document.getElementById("ibge").value.trim();

    if (telefone === "" || email === "" || cep === "" || rua === "" || bairro === "" || ibge === "" || cidade === ""){
        alert("Preencha todos os campos obrigatórios!");
        return;
    }
    alert("Informações salvas!");
    estaSalvo = true;
}

function validarCadastroContato(event) {
    if (event) event.preventDefault();

    if (estaSalvo === false) {
        alert("Por favor, clique no botão Salvar antes de prosseguir!");
        return;
    }

    //Vai pra aba informacoesMédicas3.html
    window.location.href = "informacoesMédicas3.html";
}
// Fim da aba contato

// 3. Informações Médicas

function salvarCadastroInfoMed(event) {
    if (event) event.preventDefault();

    let Convêniomedico = document.getElementById("Convenio").value;
    let Nmrconvenio = document.getElementById("Nmrconvenio").value.trim();
    let Doc = document.getElementById("DocName").value;

    if (Convêniomedico === "" || Nmrconvenio === "" || Doc === ""){
        alert("Preencha todos os campos obrigatórios!");
        return;
    }
    alert("Informações salvas!");
    estaSalvo = true;
}

function validarCadastroInfoMed(event) {
    if (event) event.preventDefault();

    if (estaSalvo === false) {
        alert("Por favor, clique no botão Salvar antes de prosseguir!");
        return;
    }

    //Vai pra aba Documentos4.html
    window.location.href = "Documentos4.html";
}

// Fim da aba Informações médicas

function salvarCadastroDocuments(event) {
    if (event) event.preventDefault();

    let inputFile = document.getElementById("inputFile");
    // let arquivos = inputFile.files;

    if (inputFile.files.length === 0){
        alert("Preencha todos os campos obrigatórios!");
        return;
    }
    alert("Documento validado!");
    estaSalvo = true;
}

function validarCadastroDocuments(event) {
    if (event) event.preventDefault();

    if (estaSalvo === false) {
        alert("Por favor, clique no botão Salvar antes de prosseguir!");
        return;
    }

    //Vai pra aba cadrastoEnd5.html
    window.location.href = "cadastroEnd5.html";
}