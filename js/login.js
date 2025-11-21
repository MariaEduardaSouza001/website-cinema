document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('formularioLogin');

    // Verifica se já existem dados de usuário no localStorage
    const emailSalvo = localStorage.getItem('usuarioEmail');
    const senhaSalva = localStorage.getItem('usuarioSenha');

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailDigitado = document.getElementById('loginEmail').value;
        const senhaDigitada = document.getElementById('loginSenha').value;

        // Validação básica com os dados do localStorage
        if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {
            window.location.href = 'index.html'; // Redireciona para a tela inicial
        } else if (emailSalvo && senhaSalva) {
            alert('Email ou senha incorretos.');
        } else {
            alert('Nenhum usuário cadastrado encontrado. Por favor, cadastre-se.');
            // Opcional: Redirecionar para a página de cadastro
            // window.location.href = 'cadastro.html';
        }
    });

    // Remove o redirecionamento automático ao carregar a página de login
});