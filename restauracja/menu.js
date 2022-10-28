const select = document.querySelector("select");
const cat1 = [
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]]
];
const cat2 = [
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]]

];
const cat3 = [
    ["positionimg.jpg",["Lorem Ipsum"],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]],
    ["positionimg.jpg",["Lorem Ipsum"],["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet fugit accusamus repellat nostrum! Dolore consectetur animi harum id perferendis fugiat iusto delectus, deserunt dolorum voluptatum, velit minus non eiuslaboriosam earum incidunt, sequi dicta sunt aliquam culpa illo! Officiis perspiciatis tempora error laboriosam libero omnis eius dolor sit. Ex."]]
];

select.addEventListener("change",() => {
    const main = document.querySelector("main");
    switch(select.value){
        case "Category1": 
            main.innerHTML = "";
            cat1.forEach((position,index) => {
                let container = document.createElement("div");
                container.classList.add("position-container");
                let divImg = document.createElement("div");
                let divTxt = document.createElement("div");
                divImg.classList.add("position-img");
                divTxt.classList.add("category-text");
                let img = document.createElement("img");
                img.src = cat1[index][0];
                let p = document.createElement("p");
                p.textContent = cat1[index][1];
                divImg.appendChild(img);
                divTxt.appendChild(p);
                divTxt.innerHTML+=cat1[index][2];
                container.appendChild(divImg);
                container.appendChild(divTxt);
                main.appendChild(container);
            });
            break;
        case "Category2": 
            main.innerHTML = "";
            cat2.forEach((position,index) => {
                let container = document.createElement("div");
                container.classList.add("position-container");
                let divImg = document.createElement("div");
                let divTxt = document.createElement("div");
                divImg.classList.add("position-img");
                divTxt.classList.add("category-text");
                let img = document.createElement("img");
                img.src = cat2[index][0];
                let p = document.createElement("p");
                p.textContent = cat2[index][1];
                divImg.appendChild(img);
                divTxt.appendChild(p);
                divTxt.innerHTML+=cat2[index][2];
                container.appendChild(divImg);
                container.appendChild(divTxt);
                main.appendChild(container);
            });
            break;
        case "Category3": 
        main.innerHTML = "";
            cat3.forEach((position,index) => {
                let container = document.createElement("div");
                container.classList.add("position-container");
                let divImg = document.createElement("div");
                let divTxt = document.createElement("div");
                divImg.classList.add("position-img");
                divTxt.classList.add("category-text");
                let img = document.createElement("img");
                img.src = cat3[index][0];
                let p = document.createElement("p");
                p.textContent = cat3[index][1];
                divImg.appendChild(img);
                divTxt.appendChild(p);
                divTxt.innerHTML+=cat3[index][2];
                container.appendChild(divImg);
                container.appendChild(divTxt);
                main.appendChild(container);
            });
            break;
    }
})