<?php
if($_SERVER['REQUEST_METHOD']=="POST"){
	extract ($_POST);
	if ($mail){
	$ok = mail('a0n0n0a@ukr.net', "Покупка тура", "Пользователь $name отправил заявку на тур\nНомер телефона :$phone\nСообщение:$message\nИмя : $name\nМейл :$mail");
	 mail('icemdukraine@gmail.com', "Покупка тура", "Пользователь $name отправил заявку на тур\nНомер телефона :$phone\nСообщение:$message\nИмя : $name\nМейл :$mail");
	}
	if ($ok)
		echo '{"result":1}';
	else 
		echo '{"result":0}';
	}