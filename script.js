document.addEventListener('DOMContentLoaded', (event) => {
    ubahOrdo();
});

function ubahOrdo() {
    const order = document.getElementById('order').value;
    const matrixA = document.getElementById('matrixA');
    const matrixB = document.getElementById('matrixB');

    let size = 2;
    if (order === '3x3') {
        size = 3;
    }

    matrixA.innerHTML = generateMatrixInputs('a', size);
    matrixB.innerHTML = generateMatrixInputs('b', size);

    matrixA.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    matrixB.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function generateMatrixInputs(prefix, size) {
    let inputs = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            inputs += `<input type="number" id="${prefix}${i}${j}" placeholder="${prefix}${i}${j}">`;
        }
    }
    return inputs;
}

function hitungJumlah() {
    const order = document.getElementById('order').value;
    let size = 2;
    if (order === '3x3') {
        size = 3;
    }

    let result = '<p>Hasil penjumlahan matriks adalah:</p><div class="matrix" style="grid-template-columns: repeat(' + size + ', 1fr);">';

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const a = parseFloat(document.getElementById('a' + i + j).value) || 0;
            const b = parseFloat(document.getElementById('b' + i + j).value) || 0;
            result += `<input type="text" value="${(a + b).toFixed(2)}" readonly>`;
        }
    }

    result += '</div>';
    document.getElementById('result').innerHTML = result;
}
