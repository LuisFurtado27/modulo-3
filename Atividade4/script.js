document.addEventListener("DOMContentLoaded", function () {
  // Inicialização do Swiper
  const swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Carregar serviços da API

  function carregarServicos() {
    const servicos = [
      {
        title: "Serviço 1",
        description: "Descrição do serviço 1.",
      },
      {
        title: "Serviço 2",
        description: "Descrição do serviço 2.",
      },
      {
        title: "Serviço 3",
        description: "Descrição do serviço 3.",
      },

      {
        title: "Serviço 1",
        description: "Descrição do serviço 4.",
      },
      {
        title: "Serviço 2",
        description: "Descrição do serviço 5.",
      },
      {
        title: "Serviço 3",
        description: "Descrição do serviço 6.",
      },
    ];
    const container = document.querySelector(".services-container");
    servicos.forEach((servico) => {
      const div = document.createElement("div");
      div.className = "servico";
      div.setAttribute("data-aos", "fade-up");
      div.innerHTML = `
              <h3>${servico.title}</h3>
              <p>${servico.description}</p>
          `;
      container.appendChild(div);
    });
  }

  // Função para carregar depoimentos
  const depoimentosFicticios = [
    "O serviço foi excelente! Fiquei muito satisfeito.",
    "A experiência superou minhas expectativas. Recomendo a todos!",
    "Atendimento incrível, com certeza voltarei a usar os serviços.",
    "Fiquei impressionado com a qualidade e eficiência.",
    "Um serviço de primeira, estou muito contente com o resultado.",
  ];

  function carregarTestemunhos() {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na rede");
        }
        return response.json();
      })
      .then((data) => {
        const container = document.querySelector(".testimonials-container");
        data.results.forEach((user) => {
          const depoimentoAleatorio = depoimentosFicticios[Math.floor(Math.random() * depoimentosFicticios.length)];
          const div = document.createElement("div");
          div.className = "testemunho";
          div.setAttribute("data-aos", "fade-up");
          div.innerHTML = `
                    <img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}" class="foto-cliente">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>${depoimentoAleatorio}</p>
                    <small>Por: ${user.email}</small>
                `;
          container.appendChild(div);
        });
      })
      .catch((error) => console.error("Erro ao carregar depoimentos:", error));
  }

  // Validação e envio do formulário
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      // Envio via EmailJS
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          name,
          email,
          phone,
          message,
        })
        .then(() => {
          alert("Mensagem enviada com sucesso!");
        })
        .catch(() => {
          alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
        });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });

  // Inicialização do AOS.js

  carregarServicos();
  carregarTestemunhos();
  AOS.init();
});

const swiper = new Swiper(".swiper-container", {
  // Opções do Swiper
  loop: true, // Permite que o slider volte ao primeiro slide
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Tempo entre as transições (em milissegundos)
    disableOnInteraction: false, // Não desabilitar após interação do usuário
  },
});
