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
    let url = "http://localhost/restauracja/booking.php";
    fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        body: data
    }).then(Response => {
        if(Response.status === 200){
            Response.json().then(data=>{
                console.log(data);
                if(data[0]["err"]=="true")
                    alert("Wybrany termin jest zajęty");
                else{
                document.querySelector(".wrapper").innerHTML = `
                    <p>Confirmation of reservation for ${data[0]['name']}<br> for the day ${data[0]['date']}</p>
                    <p>You will be redirected to a home page in a moment</p>
                `;
                setTimeout(()=>{
                    window.location.href = 'index.html';
                }, 3000)
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
});