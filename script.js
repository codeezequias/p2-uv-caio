// **Formulário de Contato**

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário para validar os dados
    event.preventDefault();
    
    // Obtém os valores inseridos pelo usuário nos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Elementos para exibição das mensagens de erro e sucesso
    const errorMessageElement = document.getElementById('errorMessage');
    const successMessageElement = document.getElementById('successMessage');
    const submitButton = document.getElementById('submitButton');  // Referência ao botão de envio

    // Inicializa as mensagens de erro e sucesso como invisíveis
    errorMessageElement.style.display = 'none';
    successMessageElement.style.display = 'none';

    // Valida se algum campo está vazio
    if (name === '' || email === '' || message === '') {
        errorMessageElement.textContent = 'Todos os campos são obrigatórios.';
        errorMessageElement.style.display = 'block';  // Exibe a mensagem de erro
    } 
    // Valida o formato do email
    else if (!validateEmail(email)) {
        errorMessageElement.textContent = 'Por favor, insira um e-mail válido.';
        errorMessageElement.style.display = 'block';  // Exibe a mensagem de erro
    } 
    // Se tudo estiver correto, exibe a mensagem de sucesso e desabilita o botão
    else {
        successMessageElement.style.display = 'block';  // Exibe a mensagem de sucesso
        submitButton.textContent = 'Mensagem Enviada';  // Altera o texto do botão
        submitButton.disabled = true;  // Desabilita o botão após envio
        document.getElementById('contactForm').reset();  // Reseta os campos do formulário
    }
});

// Função para validar o formato de um email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

// **Alternância de Tema (Modo Claro / Escuro)**

// Seleciona o botão de alternância de tema
const toggleButton = document.getElementById('theme-toggle');

// Verifica se o tema já foi salvo no LocalStorage (para manter o tema após o usuário sair da página)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');  // Aplica o tema escuro
    toggleButton.checked = true;  // Marca a caixa de alternância
} else {
    document.body.classList.add('light-theme');  // Aplica o tema claro
}

// Função para alternar entre temas claro e escuro
toggleButton.addEventListener('change', () => {
    // Verifica o estado do botão de alternância
    if (toggleButton.checked) {
        // Se estiver marcado, aplica o tema escuro
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');  // Salva a preferência no LocalStorage
    } else {
        // Se não estiver marcado, aplica o tema claro
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');  // Salva a preferência no LocalStorage
    }
});
