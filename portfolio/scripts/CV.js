const toggleSwitch = document.getElementById('toggleMode');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        // Se o checkbox estiver marcado (modo escuro)
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        // Adicione aqui a lógica para mudar para o tema escuro
        document.body.classList.add('dark-mode'); // Adicione uma classe para mudar o tema para escuro
    } else {
        // Se o checkbox não estiver marcado (modo claro)
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        // Adicione aqui a lógica para mudar para o tema claro
        document.body.classList.remove('dark-mode'); // Remova a classe para mudar o tema para claro
    }
});

const cabecalho = document.querySelector(".cabecalho");
const alturaCabecalho = cabecalho.offsetHeight;
        let prevScrollPos = window.scrollY;

        const conteudoPrincipal = document.querySelector(".texto");
conteudoPrincipal.style.paddingTop = alturaCabecalho + "px";

        window.addEventListener("scroll", function () {
            let currScrollPos = window.scrollY;

            if (currScrollPos > prevScrollPos) {
                cabecalho.style.transform = `translateY(-105%)`;
            } else {
                cabecalho.style.transform = `translateY(0%)`;
            }

            prevScrollPos = currScrollPos;
        });



// Verifica se o usuário já tem um modo preferido
const userMode = localStorage.getItem('mode');

if (userMode === 'dark') {
    body.classList.add('dark-mode');
}

// Função para alternar e salvar a preferência do usuário
function toggleDarkMode() {
    body.classList.toggle('dark-mode');

    // Salva a preferência do usuário
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
}

// Verifica se o sistema operacional tem o tema escuro configurado
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}