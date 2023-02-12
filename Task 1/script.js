let answer = '';

const content = document.querySelectorAll('#item');
content.forEach((div) => {
    div.addEventListener('click', () => {
        const content = div.innerHTML;
        answer += content + "   ";
        alert(answer);
    });
});
