<?php
/* $user = 'root';
$pass = ''; */
$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$additional_info = $_POST["additional-info"];
$dbc = mysqli_connect("localhost", "root", "", "restaurant_booking");
if(mysqli_connect_errno()){
    echo "Błąd łączenia z bazą" . mysqli_connect_error();
    exit();
}
else{
    $check = $dbc->prepare("SELECT * FROM booking_info WHERE date LIKE ?");
    $check->bind_param('s', $date);
    $check->execute();
    $check->store_result();
    if($check->num_rows === 0){
        $add_entry = $dbc->prepare("INSERT INTO `booking_info` (`name`, `phone_number`, `date`, `additional_info`) 
        VALUES (?, ?, ?, ?)");
        $add_entry->bind_param('sdss', $name, $phone, $date, $additional_info);
        $add_entry->execute();
    }
    else{
        echo "<script type=\"text/javascript\">
        function goBack() {
            window.history.back();
        }
        alert('This date is not avaivable');
        goBack();
        </script>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="booking.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap" rel="stylesheet">
</head>
<body>
    <div>
        <p>Confirmation of reservation for <?php echo $name?>.</p>
        <p>On the day <?php echo $date?>.</p>
        <p>Thank you for using our services.</p>
    </div>
    <button class="home"><a href="index.html">Home</a></button>
</body>
</html>