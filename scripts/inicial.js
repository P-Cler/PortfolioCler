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

const cardsContainer = document.querySelector(".Card-Container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  if (window.innerWidth <= 768) {
    const isActive = target.classList.contains("active");
    
    cardsContainer.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
    });

    if (!isActive) {
      target.classList.add("active");
    }
  } else {
    cardsContainer.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
    });

    target.classList.add("active");
  }
});



const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");
const tabContentWrapper = document.querySelector(".tab-content-wrapper");

const shiftTabs = (linkId) => {
  allTabs.forEach((tab, i) => {
    if (tab.id.includes(linkId)) {
      allTabs.forEach((tabItem) => {
        tabItem.style = `transform: translateY(-${i * 540}px);`;
      });
    }
  });
};

const hasActiveTab = () => {
  return Array.from(allLinks).some((link) => link.classList.contains("active"));
};

const showTabContent = (tabId) => {
  
  const hasActive = hasActiveTab();

  allTabs.forEach((tab) => {
    if (hasActive) {
      
      tab.style.display = tab.id === tabId ? "block" : "none";
    } else {
      
      tab.style.display = tab.id === "tab1-content" ? "block" : "none";
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const tab1Link = document.querySelector("#tab1");

  if (tab1Link) {
    tab1Link.classList.add("active");
    if (window.innerWidth >= 765) {
      tab1Link.style.borderRight = "3px solid var(--primary)";
    } else {
      tab1Link.style.borderBottom = "3px solid var(--primary)";
    }
  }

  
  showTabContent("tab1-content");
});



const handleTabClick = (event) => {
  event.preventDefault();

  const linkId = event.target.id;

  allLinks.forEach((link, i) => {
    if (link.id === linkId) {
      link.classList.add("active");

      
      if (window.innerWidth >= 768) {
        link.style.borderRight = "3px solid var(--primary)";
      } else {
        link.style.borderBottom = "3px solid var(--primary)";
      }
    } else {
      link.classList.remove("active");
      
      link.style.borderRight = "";
      link.style.borderBottom = "";
    }
  });

  if (window.innerWidth >= 768) {
    shiftTabs(linkId);
  } else {
    showTabContent(`tab${linkId.slice(-1)}-content`);
  }
};

allLinks.forEach((elem) => {
  elem.addEventListener("click", handleTabClick);
});








function mudarIdioma(idioma) {
    const textos = {
        'pt': {
            'My Vision': 'Minha Visão',
            'tab-title': 'Minha Visão',
            'tabe-text':'Minha Visão',
            'tab-resumo': 'Eu enxergo as tecnologias web e o frontend como partes fundamentais da tecnologia. É claro que todas as áreas têm sua importância, e sem o backend, a experiência não seria a mesma. No entanto, o frontend é a porta de entrada, a conexão entre pessoas de diferentes idades e a sua marca. Ele une todas essas pessoas à sua história, tornando o trabalho nessa área crucial e preciso. Uma tecnologia funcional e eficiente mantém os clientes, mas a estética e a intuitividade atraem novos clientes. Por isso, listei aqui algumas das principais tecnologias e linguagens que dominei.',
            'tab-resumo1':'HTML, sigla para HyperText Markup Language (Linguagem de Marcação de Hipertexto), é a espinha dorsal da web.  É uma linguagem de marcação usada para criar a estrutura e o conteúdo básico de páginas da web. Usando uma série de elementos e tags,  o HTML define a hierarquia, o layout e os componentes básicos de um site, permitindo a inclusão de textos, imagens, links e outros  elementos interativos. É a base sobre a qual o conteúdo da web é construído, fornecendo a estrutura que os navegadores interpretam para  exibir informações na internet.',
            'tab-resumo2':' O CSS (Cascading Style Sheets) é a linguagem responsável pela apresentação visual de uma página da web. Ele trabalha em conjunto com o HTML para estilizar e formatar elementos HTML, permitindo controlar o layout, as cores, as fontes, o espaçamento e outros aspectos visuais de um site. Com o CSS, é possível criar um design atraente e responsivo, garantindo uma experiência agradável ao usuário ao definir como os elementos HTML devem ser exibidos em diferentes dispositivos e tamanhos de tela. É uma ferramenta poderosa para aprimorar a estética e a usabilidade de uma página da web.',
            'tab-resumo3':'O JavaScript é uma linguagem de programação fundamental para o desenvolvimento web.  Ela permite tornar as páginas interativas e dinâmicas, oferecendo funcionalidades avançadas, como manipulação de elementos HTML,  interações com o usuário, validação de formulários, animações, requisições assíncronas (AJAX) e muitas outras possibilidades.  Com o JavaScript, é viável criar experiências mais ricas e responsivas para os usuários, adicionando comportamentos dinâmicos  e adaptativos às páginas da web. É uma linguagem versátil e amplamente utilizada no desenvolvimento frontend e também no backend com o Node.js.',
            'tab-resumo4':'O Java é uma linguagem de programação versátil e robusta, conhecida por sua portabilidade, segurança e desempenho. Amplamente utilizada no desenvolvimento de aplicativos empresariais, sistemas embarcados, aplicativos móveis (Android) e no desenvolvimento web com frameworks como Spring e Hibernate. Sua arquitetura permite a criação de sistemas escaláveis e confiáveis, sendo especialmente valorizada em ambientes corporativos devido à sua capacidade de lidar com grandes volumes de dadose processos complexos. Com uma sintaxe orientada a objetos e uma ampla comunidade de desenvolvedores, o Java continua sendo uma das linguagens mais populares e amplamente adotadas na indústria de software.',
            'tab-resumo5':'O MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado. Conhecido por sua confiabilidade, desempenho e escalabilidade, é uma escolha frequente para aplicativos da web e sistemas empresariais. Sua estrutura permite uma gestão eficiente de dados, oferecendo recursos avançados para consultas complexas e transações seguras. Com licenciamento flexível e uma comunidade ativa, o MySQL continua sendo uma opção popular para organizações de todos os tamanhos.',
            'texth1':'Um breve resumo sobre mim e os meus projetos',
            'textp1':'Desde os primeiros anos, a fascinação pela tecnologia e programação moldou meu caminho. Se na infância imaginava códigos se desdobrando como nos filmes, foi o contato com a verdadeira programação que acendeu a paixão pela área. Entre projetos desafiadores e vitoriosos, aprendi sobre as dificuldades que podem surgir no caminho e, principalmente, como enfrentá-las. Descobri a área em que mais gosto de atuar e compreendi sua importância na hora de criar uma marca e contar uma história. Por isso, criei este portfólio para mostrar ao mundo o que já fiz, onde me destaquei e tudo que ainda posso alcançar. E em breve uma nova versão em Next.js estará disponível',
            'textbt0':'Saiba Mais',
            'navinc':'Página Inicial',
            'navProj':'Projetos',
            'navCV':'Curriculum Vitae',
            'infoamb':'Projeto vencedor do segundo lugar do Petropólis Innovation',
            'infoEnsi':'Projeto participante do Grand Prix SENAI de Inovação 2023',
            'info80':'Projeto idealizado para ser exposto durante os 80 Anos do SENAI Petropólis',
            'infoRen':'Projeto participante do Desafio INOVA SENAI',
            'infoInn':'Competição entre todas as escolas municipais de Petropólis',
            'infoPB':'Maior feira de exposição de projetos de Petropólis',
            'roda':'Contact'
        },
        'en': {
            'Minha Visão': 'My Vision',
            'tab-title':'My Vision',
            'tabe-text':'My Vision',
            'tab-resumo':'I see web technologies and frontend as fundamental parts of technology. Of course, all areas are important, and without the backend, the experience wouldn\'t be the same. However, the frontend is the gateway, the connection between people of different ages and your brand. It brings all these people to your story, making work in this area crucial and precise. A functional and efficient technology retains clients, but aesthetics and intuitiveness attract new ones. That\'s why I listed some of the main technologies and languages that I have mastered here.',
            'tab-resumo1':'HTML, which stands for HyperText Markup Language, is the backbone of the web. It\'s a markup language used to create the basic structure and content of web pages. Through a series of elements and tags, HTML defines the hierarchy, layout, and fundamental components of a website, enabling the inclusion of text, images, links, and other interactive elements. It serves as the foundation upon which web content is built, providing the structure that browsers interpret to display information on the internet.',
            'tab-resumo2':'CSS (Cascading Style Sheets) is the language responsible for the visual presentation of a web page. It works in conjunction with HTML to style and format HTML elements, allowing control over layout, colors, fonts, spacing, and other visual aspects of a website. With CSS, it\'s possible to create an attractive and responsive design, ensuring a pleasant user experience by defining how HTML elements should be displayed on different devices and screen sizes. It\'s a powerful tool for enhancing the aesthetics and usability of a web page.',
            'tab-resumo3':'JavaScript is a fundamental programming language for web development. It enables the creation of interactive and dynamic pages, offering advanced functionalities such as manipulation of HTML elements, user interactions, form validation, animations, asynchronous requests (AJAX), and many other possibilities. With JavaScript, it\'s possible to create richer and more responsive user experiences by adding dynamic and adaptive behaviors to web pages. It\'s a versatile language widely used in frontend development and also in backend with Node.js.',
            'tab-resumo4':'Java is a versatile and robust programming language, known for its portability, security, and performance. Widely used in the development of enterprise applications, embedded systems, mobile applications (Android), and web development with frameworks like Spring and Hibernate. Its architecture allows the creation of scalable and reliable systems, particularly valued in corporate environments for its ability to handle large volumes of data and complex processes. With an object-oriented syntax and a vast developer community, Java remains one of the most popular and widely adopted languages in the software industry.',
            'tab-resumo5':'MySQL is a widely used relational database management system. Known for its reliability, performance, and scalability, it\'s a common choice for web applications and enterprise systems. Its structure allows efficient data management, offering advanced features for complex queries and secure transactions. With flexible licensing and an active community, MySQL remains a popular choice for organizations of all sizes.',
            'texth1':'A brief summary about me and my projects.',
            'textp1':'From my early years, my fascination with technology and programming has shaped my path. While in childhood I imagined codes unfolding like in the movies, it was the real contact with programming that ignited my passion for the field. Amid challenging and victorious projects, I\'ve learned about the difficulties that can arise along the way, and most importantly, how to face them. I discovered the area in which I most enjoy working and understood its significance in building a brand and telling a story. That\'s why I\'ve created this portfolio—to showcase to the world what I\'ve accomplished, where I\'ve excelled, and all that I can still achieve. And soon a new version in Next.js will be available.',
            'textbt0':'Know More',
            'navinc':'Home page',
            'navProj':'Projects',
            'navCV':'Working Curriculum',
            'infoamb':'Project winner of the second place in Petrópolis Innovation.',
            'infoEnsi':'Participant Project at Grand Prix SENAI de Inovação',
            'info80':'Project designed to be exhibited during SENAI Petropólis’ 80th Anniversary',
            'infoRen':'Participant Project at Desafio INOVA SENAI',
            'infoInn':'Competition among all municipal schools of Petrópolis.',
            'infoPB':'Largest project exhibition fair in Petropolis',
            'roda':'Contact'
        }
    };

    document.querySelector('.tab-title1 h2').innerText = textos[idioma]['tab-title'];
    document.querySelector('.tab-text span').innerText = textos[idioma]['tabe-text'];
    document.querySelector('.tab-resumo1 p').innerText = textos[idioma]['tab-resumo'];
    document.querySelector('.tab-resumo2 p').innerText = textos[idioma]['tab-resumo1'];
    document.querySelector('.tab-resumo3 p').innerText = textos[idioma]['tab-resumo2'];
    document.querySelector('.tab-resumo4 p').innerText = textos[idioma]['tab-resumo3'];
    document.querySelector('.tab-resumo5 p').innerText = textos[idioma]['tab-resumo4'];
    document.querySelector('.tab-resumo6 p').innerText = textos[idioma]['tab-resumo5'];
    document.querySelector('.texto h1').innerText = textos[idioma]['texth1'];
    document.querySelector('.texto p').innerText = textos[idioma]['textp1'];
    document.querySelector('.textbt span').innerText = textos[idioma]['textbt0'];
    document.querySelector('.inic-nav a').innerText = textos[idioma]['navinc'];
    document.querySelector('.projet-nav a').innerText = textos[idioma]['navProj'];
    document.querySelector('.CV-nav a').innerText = textos[idioma]['navCV'];
    document.querySelector('.ambieinfo a').innerText = textos[idioma]['infoamb'];
    document.querySelector('.Graninfo').innerText = textos[idioma]['infoEnsi'];
    document.querySelector('.Quizinfo').innerText = textos[idioma]['info80'];
    document.querySelector('.Reninfo').innerText = textos[idioma]['infoRen'];
    document.querySelector('.Inninfo').innerText = textos[idioma]['infoInn'];
    document.querySelector('.PBinfo').innerText = textos[idioma]['infoPB'];
    document.querySelector('#rodape_contatos h2').innerText = textos[idioma]['roda'];
    

    localStorage.setItem('idiomaSelecionado', idioma);
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