const categories = [...document.querySelectorAll(".category ul li")];
const position = document.querySelector(".positions ul");
const cat1 = ["Position 1", "Position 1","Position 1","Position 1"];
const cat2 = ["Position 2", "Position 2","Position 2","Position 2","Position 2"];
const cat3 = ["Position 3", "Position 3","Position 3","Position 3","Position 3","Position 3"];
const cat4 = ["Position 4", "Position 4"];
const activeCategory = () => categories.findIndex(category => category.classList.contains("active"));
const deleteElements = (positions) => {
    for(var i=0; li=positions[i]; i++) {
        li.parentNode.removeChild(li);
    }
}
categories.forEach((category, index) => {
    category.addEventListener("click", () => {
        categories[activeCategory()].classList.remove("active");
        category.classList.add("active");
        let positions = document.querySelectorAll(".positions ul li");
        switch(index){
            case 0:
                deleteElements(positions);
                cat1.forEach(element => {
                    var li = document.createElement("li");
                    li.textContent = element;
                    position.appendChild(li);
                });
                break;
            case 1:
                deleteElements(positions);
                cat2.forEach(element => {
                    var li = document.createElement("li");
                    li.textContent = element;
                    position.appendChild(li);
                });
                    break;
            case 2:
                deleteElements(positions);
                cat3.forEach(element => {
                    var li = document.createElement("li");
                    li.textContent = element;
                    position.appendChild(li);
                });
                break;
            case 3:
                deleteElements(positions);
                cat4.forEach(element => {
                    var li = document.createElement("li");
                    li.textContent = element;
                    position.appendChild(li);
                });
                break;
        }
    })
});