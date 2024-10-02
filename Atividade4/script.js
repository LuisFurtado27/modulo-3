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
  fetch("https://api.example.com/services")
    .then((response) => response.json())
    .then((data) => {
      const servicesContainer = document.querySelector(".services-container");
      data.forEach((service) => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
        servicesContainer.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar serviços:", error);
    });

  // Carregar depoimentos da API
  fetch("https://api.example.com/testimonials")
    .then((response) => response.json())
    .then((data) => {
      const testimonialsContainer = document.querySelector(".testimonials-container");
      data.forEach((testimonial) => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${testimonial.photo}" alt="${testimonial.name}"><h4>${testimonial.name}</h4><p>${testimonial.text}</p>`;
        testimonialsContainer.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar depoimentos:", error);
    });

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
