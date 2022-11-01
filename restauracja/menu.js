const select = document.querySelector("select");
let ajax = (catNumber) => {
    xml = new XMLHttpRequest();
    xml.onload = () => {
        if(xml.status === 200){
            const res = JSON.parse(xml.responseText);
            const main = document.querySelector("main");
            main.innerHTML = "";
            for (let i = 0; i < res[0].length; i++) {
                let container = document.createElement("div");
                container.classList.add("position-container");
                let divImg = document.createElement("div");
                let divTxt = document.createElement("div");
                divImg.classList.add("position-img");
                divTxt.classList.add("category-text");
                let img = document.createElement("img");
                img.src = res[0][i]["Img"];
                let p = document.createElement("p");
                p.textContent = res[0][i]["Name"];
                divImg.appendChild(img);
                divTxt.appendChild(p);
                divTxt.innerHTML+=res[0][i]["Description"];
                container.appendChild(divImg);
                container.appendChild(divTxt);
                main.appendChild(container);
            }
        }
        else{
            alert("Błąd połączenia z bazą danych");
        }
    };
    xml.open("POST","menu.php", true);
    xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xml.getResponseHeader("Content-Type","application/json");
    xml.send(`catNumber=${catNumber}`);
};
ajax(1);
select.addEventListener("change",() => {
    const main = document.querySelector("main");
    ajax(select.value[select.value.length-1]);
})