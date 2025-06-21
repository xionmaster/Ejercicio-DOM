// document.getElementById('nombreTarea').addEventListener('focus', function() {
//     console.log('Input nombreTarea seleccionado');
// });
function logKey(event) {
    const keyPressed = event.key;
    const regex = /^[a-c]+$/;
    if (!regex.test(keyPressed)) {
        if (keyPressed !== 'Backspace') {
            event.preventDefault();
        }
    }
}
function removeListener() {
    input.removeEventListener('keydown', logKey);
    input.removeEventListener('blur', removeListener);
}

function taskInputValidator() {
    const input = document.getElementById('nombreTarea');
    if (!input) return;

    input.addEventListener('keydown', logKey);
    input.addEventListener('blur', removeListener);
}
