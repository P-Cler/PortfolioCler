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

        const idiomaIcon = document.getElementById('idioma');
        const dropdown = document.querySelector('.dropdown');
        const idiomaSelecionado = localStorage.getItem('idiomaSelecionado');
        
        
        idiomaIcon.addEventListener('click', function (e) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        });
        
        
        document.addEventListener('click', function (e) {
            if (!idiomaIcon.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });






function setTheme(theme) {
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        toggleSwitch.checked = true; 
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        toggleSwitch.checked = false; 
    }
}

const toggleSwitch = document.getElementById('toggleMode');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
const body = document.body;

function setTheme(theme) {
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        toggleSwitch.checked = true; 
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        toggleSwitch.checked = false; 
    }
}

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        body.classList.add('dark-mode'); 
        localStorage.setItem('mode', 'dark');
    } else {
        
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        body.classList.remove('dark-mode'); 
        localStorage.setItem('mode', 'light');
    }
});


const userMode = localStorage.getItem('mode');
const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userMode === 'dark' || systemDarkMode || body.classList.contains('dark-mode')) {
    setTheme('dark');
} else {
    setTheme('light');
}

if (userMode === 'dark') {
    body.classList.add('dark-mode');
}


function toggleDarkMode() {
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

if (userMode === 'dark' || systemDarkMode || body.classList.contains('dark-mode')) {
    setTheme('dark');
} else {
    setTheme('light');
}

if (userMode === 'dark') {
    body.classList.add('dark-mode');
}


function toggleDarkMode() {
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}


function mudarIdioma(idioma) {
    const textos = {
        'pt': {
            'navinc':'Página Inicial',
            'navProj':'Projetos',
            'navCV':'Curriculum Vitae',
            'roda':'Contato',
            'localizacao': 'Endereço: Petropólis - RJ',
            'telefone': 'Telefone: (24) 998281120',
            'idade': 'Idade: 17 anos',
            'titleobje': 'Objetivo',
            'WEBobj': 'Desenvolvedor WEB',
            'TitleformA': 'Formação Acadêmica',
            'a1data': '2022-2024',
            'a1grau':'Ensino Médio',
            'TitleformC': 'Formação Complementar',
            'a2data': '2023-2024',
            'a2grau':'Técnico em Informática (Tecnico).',
            'a3grau':'Programação com Arduino em FABLAB (Aprendizagem).',
            'a4grau':'Manutenção Eletromecânica (Aprendizagem pela empresa Origem Ferramentaria LTDA).',
            'a5grau':'Inglês',
            'a6grau':'Infórmatica',
            'TitleatvC': 'Atividades Complementares',
            'a7grau':'II Mostra SENAI de Projetos integradores 2023. Apresentação de Trabalho',
            'a8grau':'Grand Prix Senai de Inovação. Participação: Competidor',
            'a9grau':'Petropólis Business 2023. Apresentação de Trabalho',
            'a10grau':'Aniversário 80 Anos SENAI Petropólis.',
            'a11grau':'Petropólis Innovation. Participação: Competidor - 2° colocação',
            'a12grau':'I Mostra SENAI de Projetos integradores 2023. Apresentação de Trabalho',
            'a13grau':'Desafio Inova SENAI. Participação: Competidor',
            'Titleexp': 'PExperiência Profissional',
            'a1local': 'Jovem Aprendiz',
        },
        'en': {
            'navinc':'Home page',
            'navProj':'Projects',
            'navCV':'Working Curriculum',
            'roda':'Contact',
            'localizacao': 'Address: Petropólis - RJ -BR',
            'telefone': 'Phone: +55 (24) 998281120',
            'idade': 'Age: 17 years',
            'titleobje': 'Objective',
            'WEBobj': 'WEB Developer',
            'TitleformA': 'Academic Education',
            'a1data': '2022-2024',
            'a1grau':'High School',
            'TitleformC': 'Complementary Training',
            'a2data': '2023-2024',
            'a2grau':'IT Technician (Technician).',
            'a3grau':'Programming with Arduino in FABLAB (Learning).',
            'a4grau':'Electromechanical Maintenance (Learning by the company Origem Ferramentaria LTDA).',
            'a5grau':'English',
            'a6grau':'Computing',
            'TitleatvC': 'Extra-curricular Activities',
            'a7grau':'II SENAI Integrative Projects Exhibition 2023. Presentation of Work',
            'a8grau':'Grand Prix Senai de Inovação. Participation: Competitor',
            'a9grau':'Petropolis Business 2023. Presentation of Work',
            'a10grau':'80th Anniversary of SENAI Petropolis',
            'a11grau':'Petropolis Innovation. Participation: Competitor - 2nd place',
            'a12grau':'I SENAI Integrative Projects Exhibition 2023. Presentation of Work',
            'a13grau':'Desafio Inova SENAI. Participation: Competitor',
            'Titleexp': 'Professional Experience',
            'a1local': 'Apprentice',
        }
    };



    document.querySelector('.inic-nav a').innerText = textos[idioma]['navinc'];
    document.querySelector('.projet-nav a').innerText = textos[idioma]['navProj'];
    document.querySelector('.CV-nav a').innerText = textos[idioma]['navCV'];
    document.querySelector('#rodape_contatos h2').innerText = textos[idioma]['roda'];
    document.querySelector('.ende i').innerText = textos[idioma]['localizacao'];
    document.querySelector('.phone i').innerText = textos[idioma]['telefone'];
    document.querySelector('.age i').innerText = textos[idioma]['idade'];
    document.querySelector('.objetitle').innerText = textos[idioma]['titleobje'];
    document.querySelector('.objeWEB a').innerText = textos[idioma]['WEBobj'];
    document.querySelector('.formATitle h3').innerText = textos[idioma]['TitleformA'];
    document.querySelector('.data a1').innerText = textos[idioma]['a1data'];
    document.querySelector('.grau a1').innerText = textos[idioma]['a1grau'];
    document.querySelector('.formCTitle h3').innerText = textos[idioma]['TitleformC'];
    document.querySelector('.data a2').innerText = textos[idioma]['a2data'];
    document.querySelector('.grau a2').innerText = textos[idioma]['a2grau'];
    document.querySelector('.grau-A a3').innerText = textos[idioma]['a3grau'];
    document.querySelector('.grau-A a4').innerText = textos[idioma]['a4grau'];
    document.querySelector('.grau a5').innerText = textos[idioma]['a5grau'];
    document.querySelector('.grau a6').innerText = textos[idioma]['a6grau'];
    document.querySelector('.atvCTitle h3').innerText = textos[idioma]['TitleatvC'];
    document.querySelector('.grau a7').innerText = textos[idioma]['a7grau'];
    document.querySelector('.grau a8').innerText = textos[idioma]['a8grau'];
    document.querySelector('.grau a9').innerText = textos[idioma]['a9grau'];
    document.querySelector('.grau a10').innerText = textos[idioma]['a10grau'];
    document.querySelector('.grau a11').innerText = textos[idioma]['a11grau'];
    document.querySelector('.grau a12').innerText = textos[idioma]['a12grau'];
    document.querySelector('.grau a13').innerText = textos[idioma]['a13grau'];
    document.querySelector('.expTitle h3').innerText = textos[idioma]['Titleexp'];
    document.querySelector('.local a1').innerText = textos[idioma]['a1local'];

    localStorage.setItem('idiomaSelecionado', idioma);
}