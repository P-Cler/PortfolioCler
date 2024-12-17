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


idiomaIcon.addEventListener('click', function (e) {
    e.preventDefault();
    dropdown.classList.toggle('open');
});


document.addEventListener('click', function (e) {
    if (!idiomaIcon.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});



function mudarIdioma(idioma) {
    const textos = {
        'pt': {
            'navinc':'Página Inicial',
            'navProj':'Projetos',
            'navCV':'Curriculum Vitae',
            'titleProj': 'Seção de Projetos:',
            'infoProj': 'Esta seção apresenta um catálogo dos projetos nos quais estive envolvido, cada um representando um marco em minha jornada profissional. Cada projeto teve um proposito diferente, desde projetos de conclusão de curso a projetos premiados em competições. Os 7 projetos a seguir representam a evolução que o estudo me proporcionou, cada imagem conta um pouco da historia do que foi o projeto , como surgiu sua ideia e como foi seu desenvolvimento.',
            'descSaep': 'No SENAI os alunos são submetidos a uma avaliação, tanto do seu conhecimento quanto da unidade que ele frequenta, O Sistema de Avaliação Profissional e Tecnológica (SAEP) é um método eficaz e reconhecido para avaliar o ensino profissionalizante do SENAI. O SAEPflix é uma plataforma virtual que busca armazenar de forma simples, catalogar intuitivamente e disponibilizar vídeos para os alunos da rede FIRJAN SENAI. A plataforma permitirá que todos os alunos da Rede FIRJAN SENAI acessem conteúdos sobre as competências de Tl do SAEP.',
            'descAmb':'O Ambiente Petrópolis é um projeto idealizado para a competição "Petrópolis Innovation", sendo vencendor da segunda colocação. O Ambiente Petrópolis é uma plataforma online que visa educar as pessoas sobre o meio ambiente, já que só assim conseguiremos fazer uma mudança real. Além do "Petrópolis Innovation" o projeto também participou de diversos eventos, sendo apresentado no Petrópolis Business, nos 80 anos do SENAI Petrópolis e na II Mostra SENAI de Projetos integradores 2023.',
            'descBib':'No ano de 2024, todas as unidades FIRJAN SENAI do estado do Rio de Janeiro ficaram sem rede de internet e sem acesso aos sistemas oficiais do SENAI, entre eles o Pergamun, que é utilizado pelas bibliotecas da rede SENAI e SESI para gerenciar os empréstimos de livros. Com esse problema, criei um sistema simples que usa um servidor local do XAMPP e o phpMyAdmin para gerenciar esses empréstimos. O sistema conta com uma página de cadastro e uma página para listar os empréstimos. O sistema também possui uma ferramenta para finalizar e estender os empréstimos. Além disso, empréstimos perto de expirar recebem uma coloração diferente para deixar claro para os funcionários quais alunos devem ser cobrados. O sistema foi primeiramente executado na unidade do SENAI Petrópolis, mas está disponível e sendo utilizado por unidades em todo o estado.',
            'descEns':'O Ensinai é um projeto idealizado para a competição "Grand Prix SENAI de Inovação", onde a empresa AWS apresentou um problema refente a como integrar a Inteligencia Artificial na educação. Para isso desenvolvemos o EnsinAI, uma plataforma onde alunos e professores teriam acesso a uma IA Generativa integrada para retirar suas duvidas. Além disso usariamos de tecnologias de captação e transcrição de audio para criar resumos por meio de IA permitindo o professor avançar no conteudo sem precisar se preoucupar com retomar assuntos já lecionados, já que os alunos que não entenderam a materia de primeira teriam esse resumo para estudar. Vimos no EnsinAI uma aplicação necessaria na educação já que retomando os assuntos, o planejamento de aula do professor é afetado, assim diminuindo o tempo que estudos futuros terão.',
            'descReb':'O Projeto Renova é um projeto participante do Desafio Inova SENAI. Esse projeto visava utilizar da agua da chuva para gerar energia eletrica, e tudo isso seria controlado, medido e gerenciado por meio do nosso aplicativo. O projeto utilizava além de TI conhecimentos de mecanica e eletrica, para assim proporcionar a maior quantidade de energia para os possuidores do produto. Além disso ele foi apresentado na primeira Mostra SENAI de projetos integradores 2023',
            'descQuiz':'Esse projeto consiste em um quiz de personalidade, nele as pessoas tem 14 respostas possiveis entre as categorias "Analitico, Criativo, Empatico e Organizado", onde cada um desses resultados entrega ao realizador 10 profissões do futuro ligadas a esse tipo de personalidade. Além disso como o resultado é feito comparando quais respostas foram escolhidas ainda havia a possibilidade de ocorrer "empates" entre as personalidades, para isso respostas combinadas foram criadas, permitindo uma resposta certeira para cada tipo de pessoa. Esse projeto foi um pedido da equipe do SENAI Petrópolis para que o quiz ficasse disponivel durante os 80 Anos do SENAI Petrópolis. Toda a logica do quiz foi desenvolvida na lingaguem JavaScript, utilizando arrays, sweetAlert e swtich case, além de diversas funções para entregar o melhor resultado para quem realizou o quiz.',
            'descPort':'Esse próprio site é um projeto desenvolvido totalmente por mim com tecnologias WEB. Desde que comecei a estudar programação, compreendi a importância de ter um portfólio online. Afinal, ele serve como uma porta de entrada para os empregadores visualizarem seu trabalho e, principalmente, para demonstrar sua capacidade. Ao construir um site com esse propósito, você está efetivamente exibindo suas habilidades.',
            'descAjd':'O Ajuda SENAI foi um projeto idealizado no começo do curso de TI, onde o objetivo era criar um ambiente para os alunos da área de todos os SENAI do Brasil teriam um meio para se comunicar e trocar vivencias e experiencias. Por ser nos primeiros meses de curso ele foi desenvolvido em low code, mas nesse prototipo já conseguimos passar a visão do que desejavamos entregar. O projeto funcionava por meio de um site, onde por cada aba um pouco do objetivo do projeto era contado, como a galeria e blog, areas destinadas especificamente ao alunos, onde as conversas e fotos sobre o seu dia a dia e projetos poderiam ser compartilhadas com outras pessoas na mesma situação Além disso com a participação de docentes teriamos um grande forum de duvidas, onde um projeto do Rio Grande do Sul podia ter participação importante de alguem do Rio Grande do Norte. Essa troca entre os estudantes é algo que visualizamos como essencial, já que esse trabalho em equipe é muito importante no mercado de trabalho, e trabalhar isso desde o ensino é primordial para um ambiente de trabalho mais adaptado e funcional.',
            'descSM':'Esse foi o primeiro projeto que eu realizei no SENAI, ele foi o projeto integrador final do meu curso de Manutenção Eletromecanica. Nele idealizamos uma ideia de uma placa solar com sensor de luminosidade e um sistema de movimentação, para sempre ficar na direção do sol e recolher o maximo de energia possivel. Nele a nossa empresa Solar Machines realizaria todo serviço de instalação e manutenção das placas, este projeto foi aprovado pela banca do SENAI e foi baseado no desafio de sustentabilidade e tecnologia presente na SAGA SENAI de Inovação.',
            'roda':'Contact'
        },
        'en': {
            'navinc':'Home page',
            'navProj':'Projects',
            'navCV':'Working Curriculum',
            'titleProj': 'Projects Section',
            'infoProj': 'This section showcases a catalog of the projects I\'ve been involved in, each representing a milestone in my professional journey. Each project served a different purpose, ranging from course completion projects to award-winning ventures in competitions. The following 7 projects represent the evolution that studying has provided me. Each image tells a bit of the story behind the project, how its idea emerged, and how its development unfolded.',
            'descSaep': 'At SENAI, students are evaluated on both their knowledge and the unit they attend. The Professional and Technological Assessment System (SAEP) is an effective and recognized method for evaluating SENAIs vocational education.SAEPflix is a virtual platform designed to store videos in a simple way, intuitively catalog them, and make them available to students of the FIRJAN SENAI network. The platform will enable all students in the FIRJAN SENAI network to access content related to SAEPs IT competencies.',
            'descAmb':'The Ambiente Petrópolis is a project conceived for the \'Petrópolis Innovation\' competition, winning second place. Ambiente Petrópolis is an online platform aimed at educating people about the environment, as only through this can we achieve real change. In addition to \'Petrópolis Innovation,\' the project also participated in various events, being showcased at Petrópolis Business, the 80th anniversary of SENAI Petrópolis, and the second SENAI Integrative Projects Showcase in 2023.',
            'descBib': 'In 2024, all FIRJAN SENAI units in the state of Rio de Janeiro were without internet access and access to the official SENAI systems, among them Pergamun, which is used by the SENAI and SESI network libraries to manage book loans. With this problem, I created a simple system that uses a local XAMPP server and phpMyAdmin to manage these loans. The system has a registration page and a page to list the loans. The system also has a tool to finalize and extend the loans. Additionally, loans that are near expiration receive a different color to make it clear to the staff which students need to be notified. The system was initially implemented at the SENAI Petrópolis unit but is available and being used by units throughout the state.',
            'descEns':'EnsinAI is a project conceived for the \'SENAI Grand Prix of Innovation\' competition, where the company AWS presented an issue regarding integrating Artificial Intelligence into education. To address this, we developed EnsinAI, a platform where students and teachers would have access to an integrated Generative AI to address their queries. Additionally, we utilized audio capture and transcription technologies to create summaries through AI, allowing the teacher to progress through the content without worrying about revisiting previously taught subjects. This summary served as a study aid for students who didn\'t grasp the material initially. We saw EnsinAI as a necessary application in education since revisiting topics affects the teacher\'s lesson planning, consequently reducing the time for future studies.',
            'descReb':'The Renova Project is a participant in the INOVA SENAI Challenge. This project aimed to utilize rainwater to generate electrical energy, all controlled, measured, and managed through our application. In addition to IT, the project utilized mechanical and electrical knowledge to maximize energy output for product users. Furthermore, it was showcased at the first SENAI Show of Integrative Projects in 2023.',
            'descQuiz':'This project consists of a personality quiz where individuals have 14 possible answers across the categories of \'Analytical, Creative, Empathetic, and Organized.\' Each of these results provides the participant with a list of 10 future professions associated with that type of personality. Moreover, as the result is determined by comparing the chosen answers, there was a possibility of \'ties\' between personalities. To address this, combined responses were created, enabling accurate results for each personality type. The SENAI Petropolis team requested this project to have the quiz available during the 80th Anniversary of SENAI Petropolis. The entire quiz logic was developed using JavaScript, employing arrays, SweetAlert, switch cases, and various functions to deliver the best outcome for quiz-takers.',
            'descPort':'This website itself is a project entirely developed by me using web technologies. Ever since I started studying programming, I understood the importance of having an online portfolio. After all, it serves as a gateway for employers to view your work and, most importantly, to showcase your capabilities. By building a website for this purpose, you\'re effectively displaying your skills.',
            'descAjd':'The \'Ajuda SENAI\' was a project conceptualized at the beginning of the IT course with the aim of creating a platform where students from all SENAI institutes in Brazil could communicate and exchange experiences. As it was in the initial months of the course, it was developed using low-code methods, but even in this prototype, we were able to convey the vision of what we aimed to deliver. The project operated through a website where each tab represented a part of the project\'s objective, such as the gallery and blog, specifically designated areas for students. These sections allowed sharing conversations, photos about their daily life, and projects with others in similar situations. Additionally, with the participation of educators, there would be a significant Q&A forum where a project from Rio Grande do Sul could have valuable input from someone in Rio Grande do Norte. We considered this exchange among students as essential, as teamwork is highly valuable in the job market. Fostering this from an educational level is crucial for a more adaptive and functional work environment.',
            'descSM':'This was the first project I undertook at SENAI. It served as the final integrative project for my Electromechanical Maintenance course. Me conceptualized a solar panel idea with a light sensor and a movement system, ensuring it always faced the sun to maximize energy collection. Our company, Solar Machines, would handle all installation and maintenance services for these panels. The project was approved by the SENAI board and was based on the sustainability and technology challenge at the SENAI Innovation SAGA.',
            'roda':'Contact'
        }
        
    };


    document.querySelector('.inic-nav a').innerText = textos[idioma]['navinc'];
    document.querySelector('.projet-nav a').innerText = textos[idioma]['navProj'];
    document.querySelector('.CV-nav a').innerText = textos[idioma]['navCV'];
    document.querySelector('.proj-title h2').innerText = textos[idioma]['titleProj'];
    document.querySelector('.proj-info p').innerText = textos[idioma]['infoProj'];
    document.querySelector('#saep p').innerText = textos[idioma]['descSaep'];
    document.querySelector('#ambiente p').innerText = textos[idioma]['descAmb'];
    document.querySelector('#biblioteca p').innerText = textos[idioma]['descBib'];
    document.querySelector('#ensinAI p').innerText = textos[idioma]['descEns'];
    document.querySelector('#renova p').innerText = textos[idioma]['descReb'];
    document.querySelector('#quiz p').innerText = textos[idioma]['descQuiz'];
    document.querySelector('#portfolio p').innerText = textos[idioma]['descPort'];
    document.querySelector('#ajudaSENAI p').innerText = textos[idioma]['descAjd'];
    document.querySelector('#solarmachine p').innerText = textos[idioma]['descSM'];
    document.querySelector('#rodape_contatos h2').innerText = textos[idioma]['roda'];
    
    
    const tabs = document.querySelectorAll('.tab-text');
    tabs.forEach(tab => {
        const textoOriginal = tab.textContent.trim();
        if (textos[idioma][textoOriginal]) {
            tab.textContent = textos[idioma][textoOriginal];
        }
    });

    const tabstitle1 = document.querySelectorAll('.tab-title1');
    tabs.forEach(tab => {
        const textoOriginal = tab.textContent.trim();
        if (textos[idioma][textoOriginal]) {
            tab.textContent = textos[idioma][textoOriginal];
        }
    });

}

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