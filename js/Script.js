// Seu código JavaScript existente no js/Script.js (mantenha as outras funções)

function buscarEndereco(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('CEP inválido.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                alert(`Endereço encontrado:\nRua: ${data.logradouro}\nBairro: ${data.bairro}\nCidade: ${data.localidade}\nEstado: ${data.uf}`);
                // Para um formulário real, você adicionaria mais campos (rua, bairro, cidade, estado)
                // ao HTML e preencheria seus valores aqui.
            } else {
                alert('CEP não encontrado.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert('Ocorreu um erro ao buscar o CEP.');
        });
}

function gerarCaptcha(tamanho = 6) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < tamanho; i++) {
        captcha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return captcha;
}

let captchaGerado = '';
const captchaTextoElemento = document.getElementById('captchaTexto');
const captchaInput = document.getElementById('captchaInput');
const formularioCadastro = document.getElementById('formularioCadastro');
const mensagemErroCaptcha = document.getElementById('erroCaptcha');

function carregarCaptcha() {
    captchaGerado = gerarCaptcha();
    captchaTextoElemento.textContent = captchaGerado;
    mensagemErroCaptcha.textContent = '';
    captchaInput.value = '';
}

function verificarCaptcha(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value; // **ADICIONEI ESTA LINHA**
    const senha = document.getElementById('senha').value;
    const textoDigitado = document.getElementById('captchaInput').value;

    if (textoDigitado === captchaGerado) {
        // Salva os dados no localStorage
        localStorage.setItem('usuarioNome', nome);
        localStorage.setItem('usuarioEmail', email); // **MODIFIQUEI ESTA LINHA**
        localStorage.setItem('usuarioSenha', senha);

        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html';
    } else {
        document.getElementById('erroCaptcha').textContent = 'Texto do CAPTCHA incorreto. Tente novamente.';
        carregarCaptcha();
    }
}

document.addEventListener('DOMContentLoaded', carregarCaptcha);
formularioCadastro.addEventListener('submit', verificarCaptcha);


document.getElementById('form-compra').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário (simulação)

    const dataSelecionada = document.getElementById('data').value;
    const horarioSelecionado = document.getElementById('horario').value;
    const numeroIngressos = document.getElementById('ingressos').value;

    alert(`Compra simulada!\nData: ${dataSelecionada}\nHorário: ${horarioSelecionado}\nIngressos: ${numeroIngressos}\n\n(Esta é apenas uma simulação)`);

    // Aqui você poderia redirecionar para uma página de "pagamento" simulada
    // window.location.href = 'pagina-de-pagamento-simulada.html';
});