const select = document.querySelector("select");
let getCategory = () => {
    let url = "http://localhost/restauracja/get-category.php";
    fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    }).then(Response => {
        if(Response.status === 200){
            Response.json().then(data=>{
                getPositions(data[0][0]["Category"]);
                const select = document.querySelector("select");
                for (let i = 0; i < data[0].length; i++) {
                    let option = document.createElement('option');
                    let value = "Category ";
                    value+=data[0][i]["Category"];
                    option.value=value;
                    option.innerHTML=value;
                    select.appendChild(option);
                }
            })
        }
        else{
            throw Error;
        }
    })
    .catch(err=>{
        alert("Błąd połączenia z bazą");
        console.log(err);
    })
}
let getPositions = (catNumber) => {
    let url = "http://localhost/restauracja/menu.php";
    let data = {catNumber: catNumber};
    fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        body: JSON.stringify(data)
    }).then(Response => {
        if(Response.status === 200){
            Response.json().then(data=>{
                const main = document.querySelector("main");
                main.innerHTML = "";
                for (let i = 0; i < data[0].length; i++) {
                    let container = document.createElement("div");
                    container.classList.add("position-container");
                    let divImg = document.createElement("div");
                    let divTxt = document.createElement("div");
                    divImg.classList.add("position-img");
                    divTxt.classList.add("category-text");
                    let img = document.createElement("img");
                    img.src = data[0][i]["Img"];
                    let p = document.createElement("p");
                    p.textContent = data[0][i]["Name"];
                    divImg.appendChild(img);
                    divTxt.appendChild(p);
                    divTxt.innerHTML+=data[0][i]["Description"];
                    container.appendChild(divImg);
                    container.appendChild(divTxt);
                    main.appendChild(container);
                }
            })
        }
        else{
            throw Error;
        }
    })
    .catch(err=>{
        alert("Błąd połączenia z bazą");
        console.log(err);
    })
}
getCategory();
select.addEventListener("change",() => {
    const main = document.querySelector("main");
    getPositions(select.value[select.value.length-1]);
})