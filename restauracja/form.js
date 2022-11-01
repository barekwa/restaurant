var today = new Date().toISOString().split('T')[0];
document.getElementsByName('date')[0].setAttribute('min', today);
document.querySelector("form").addEventListener("submit", (event) => {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let phone = document.getElementById("phone").value;
    let additionalInfo = document.getElementById("additional-info").value;
    let data = JSON.stringify({
        name: name,
        date: date,
        phone: phone,
        additionalInfo: additionalInfo
    })
    event.preventDefault();
    xml = new XMLHttpRequest();
    xml.onload = () => {
        if(xml.status === 200){
            if(xml.responseText==="err"){
                alert("Wybrany termin jest zajęty");
            }
            else{
                const res = JSON.parse(xml.responseText);
                document.querySelector(".wrapper").innerHTML = `
                    <p>Confirmation of reservation for ${res[0]['name']}<br> for the day ${res[0]['date']}</p>
                `;
            }
        }
        else{
            alert("Błąd połączenia z bazą danych");
        }
    };
    xml.open("POST","booking.php", true);
    xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xml.getResponseHeader("Content-Type","application/json");
    xml.send(`data=${data}`);
});