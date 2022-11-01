const categories = [...document.querySelectorAll(".category ul li")];
const position = document.querySelector(".positions ul");
const activeCategory = () => categories.findIndex(category => category.classList.contains("active"));
const deleteElements = (positions) => {
    for(var i=0; li=positions[i]; i++) {
        li.parentNode.removeChild(li);
    }
}
let ajax = (index, positions) => {
    xml = new XMLHttpRequest();
    xml.onload = () => {
        if(xml.status === 200){
            const res = JSON.parse(xml.responseText);
            deleteElements(positions);
            for (let i = 0; i < res[0].length; i++) {
                    var li = document.createElement("li");
                    li.textContent = res[0][i]["Name"];
                    position.appendChild(li);
            }
        }
        else{
            alert("Błąd połączenia z bazą danych");
        }
    };
    xml.open("POST","get-positions.php", true);
    xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xml.getResponseHeader("Content-Type","application/json");
    xml.send(`catNumber=${index+1}`);
};
let positions = document.querySelectorAll(".positions ul li");
ajax(0, positions);
categories.forEach((category, index) => {
    category.addEventListener("click", () => {
        categories[activeCategory()].classList.remove("active");
        category.classList.add("active");
        let positions = document.querySelectorAll(".positions ul li");
        ajax(index, positions);
    })
});