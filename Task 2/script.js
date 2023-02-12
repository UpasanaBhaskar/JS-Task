const input = document.getElementById('input-text');

input.addEventListener('input', () => {
    const answer = input.value;
    document.getElementById('output-div').innerText = answer;

});
