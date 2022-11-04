let categories;
const category = document.querySelector(".category ul");
const position = document.querySelector(".positions ul");
const activeCategory = () => categories.findIndex(category => category.classList.contains("active"));
const deleteElements = (positions) => {
    for(var i=0; li=positions[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

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
            getPositions(data[0][0]["Category"], positions);
                for (let i = 0; i < data[0].length; i++) {
                        var li = document.createElement("li");
                        li.textContent = "Category ";
                        li.textContent+= data[0][i]["Category"]
                        category.appendChild(li);
                }
                categories = [...document.querySelectorAll(".category ul li")];
                categories[0].classList.add("active");
                categories.forEach((category, index) => {
                    category.addEventListener("click", () => {
                        categories[activeCategory()].classList.remove("active");
                        category.classList.add("active");
                        let positions = document.querySelectorAll(".positions ul li");
                        getPositions(index+1, positions);
                    })
                });
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
let getPositions = (index, positions) => {
    let url = "http://localhost/restauracja/get-positions.php";
    let data = {catNumber: index};
    fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        body: JSON.stringify(data)
    }).then(Response => {
        if(Response.status === 200){
            Response.json().then(data=>{
                deleteElements(positions);
                for (let i = 0; i < data[0].length; i++) {
                        var li = document.createElement("li");
                        li.textContent = data[0][i]["Name"];
                        position.appendChild(li);
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
};
getCategory();
let positions = document.querySelectorAll(".positions ul li");