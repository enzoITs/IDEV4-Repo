document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.querySelector('input[name="remember"]').checked;
        
        // Validação simples
        if (!username || !password) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Simulação de login (substitua por sua lógica real)
        console.log('Tentativa de login:', { username, password, remember });
        
        // Aqui você normalmente faria uma requisição AJAX para o servidor
        // Exemplo com fetch:
        /*
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, remember }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/dashboard';
            } else {
                alert(data.message || 'Login falhou!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocorreu um erro durante o login.');
        });
        */
        
        // Simulando login bem-sucedido (remova isso em produção)
        alert(`Bem-vindo, ${username}! (Esta é uma simulação)`);
        // window.location.href = 'dashboard.html'; // Redireciona após login
    });
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}