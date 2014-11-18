<?php
    print_r($_FILES);
    $name = $_FILES['file']['name'];
    $new_image_name = "namethisimage.jpg";
    move_uploaded_file($_FILES["file"]["tmp_name"], "upload/".$name.'.jpg');
?>