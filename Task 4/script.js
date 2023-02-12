const List = document.querySelectorAll("#nam1");

for (let i = 0; i < List.length; i++) {
    List[i].addEventListener("click", function () {
        const firstLetter = List[i].textContent[0].toLowerCase();
        const color = (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") ? "#FF5C5C" : "#98BF64";
        List[i].style.backgroundColor = color;
    });
}