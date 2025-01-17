function validateForm() {
    let isValid = true;

    const nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
    document.getElementById('nombreError').textContent = 'El nombre es obligatorio.';
    isValid = false;
    } else {
    document.getElementById('nombreError').textContent = '';
    }

    const apellido = document.getElementById('apellido');
    if (apellido.value.trim() === '') {
    document.getElementById('apellidoError').textContent = 'El apellido es obligatorio.';
    isValid = false;
    } else {
    document.getElementById('apellidoError').textContent = '';
    }

    const numero = document.getElementById('numero');
    if (numero.value.trim() === '') {
    document.getElementById('numeroError').textContent = 'El número es obligatorio.';
    isValid = false;
    } else {
    document.getElementById('numeroError').textContent = '';
    }

    const comentario = document.getElementById('comentario');
    if (comentario.value.trim() === '') {
    document.getElementById('comentarioError').textContent = 'El comentario es obligatorio.';
    isValid = false;
    } else {
    document.getElementById('comentarioError').textContent = '';
    }

    return isValid;
}