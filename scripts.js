
//Abrir detalles
function showDetails(id) {
    document.getElementById(id).style.display = "block";
}

//Cerrar detalles
function hideDetails(id) {
    document.getElementById(id).style.display = "none";
}

//carrusel
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    const updateCards = () => {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    });

    updateCards();

});

//formulario
const form = document.getElementById('registroForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');

const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorTelefono = document.getElementById('errorTelefono');

function validarNombre() {
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
    } else {
        errorNombre.textContent = '';
    }
}

function validarEmail() {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email.value)) {
        errorEmail.textContent = 'Ingresa un correo electrónico válido.';
    } else {
        errorEmail.textContent = '';
    }
}

function validarTelefono() {
    const regexTelefono = /^[0-9]{10}$/; 
    if (!regexTelefono.test(telefono.value)) {
        errorTelefono.textContent = 'El teléfono debe contener 10 dígitos.';
    } else {
        errorTelefono.textContent = '';
    }
}

nombre.addEventListener('input', validarNombre);
email.addEventListener('input', validarEmail);
telefono.addEventListener('input', validarTelefono);

form.addEventListener('submit', function(event) {
    validarNombre();
    validarEmail();
    validarTelefono();

    if (errorNombre.textContent || errorEmail.textContent || errorTelefono.textContent) {
        event.preventDefault();
    } else {
        alert('Formulario enviado con éxito.');
    }
});
