const nombre = document.querySelector('#name');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const password = document.querySelector('#key');
const formulario = document.querySelector('.formulario');
const expressMail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
ejecutarEvento();

function ejecutarEvento() {
    formulario.addEventListener('submit', validForm);
}

/**Funciones */
function validForm(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    inputs.forEach(valor => {
        validarInput(valor);

    })
}

function validarInput(e) {

    if (!e.value) {
        showError(e);
    } else {
        showCorrect(e);
    }
}

function showError(e) {
    e.style.border = '2px solid hsl(0, 100%, 74%)';
    e.classList.add('active');
    e.color = 'hsl(0, 100%, 74%)'
    const msj = e.parentElement;
    const p = msj.querySelector('.error');
    p.style.display = 'block';
}

function showCorrect(e) {
    if (e.type === 'email') {
        if (!expressMail.test(e.value)) {
            showError(e);
            return;
        }
    }
    e.style.border = '2px solid hsl(248, 32%, 49%)'
    const msj = e.parentElement;
    const p = msj.querySelector('.error');
    e.classList.remove('active');
    p.style.display = 'none';

}