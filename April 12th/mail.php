<?php
$message = "Здравствуйте, вас приветствует администрация SprintX";
$to = "mavagan90@gmail.com";
$from = "mavagan90@gmail.com";
$subject = "Сообщение от администрации";
$subject = "=?utf-8?B?".base64_encode($subject)."?=";
mail($to, $subject, $message);
?>