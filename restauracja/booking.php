<?php
$data = trim(file_get_contents("php://input"));
$tab = json_decode($data, true);
$name = $tab["name"];
$phone = $tab["phone"];
$date = $tab["date"];
$additional_info = $tab["additionalInfo"];
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
        $arr = array(
            "name"=>$name,
            "date"=>$date,
            "err"=>"false"
        );
        echo json_encode(array($arr));
    }
    else{
        $arr = array(
            "name"=>"",
            "date"=>"",
            "err"=>"true"
        );
        echo json_encode(array($arr));
    }
    exit();
}
?>
