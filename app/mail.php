<?php

if($_POST) {

    /*$recipient = "riga-market@mail.ru";
    $title = "Заказ звонка на корпоративные подарки";
    $message = $_POST['phone'].$_POST['name'];

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers = "Content-Transfer-Encoding: utf-8 \r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: webmaster@riga-market.sector.show <webmaster@riga-market.sector.show>\r\n";
    $headers .= "Reply-To: riga-market@mail.ru\r\n";
     
    mail($recipient, $title, $message, $headers);*/


require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'burdukoaskijvladislav@gmail.com'; // Логин на почте
    $mail->Password   = '89385143014aa'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('burdukoaskijvladislav@gmail.com', 'Эмма Романова'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('burdukoaskijvladislav@gmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

$userId = '-1001751644500'; // Id телеграм аккаунта, куда отправлять сообщения
$token = '5221397681:AAH8-D3AwGW_j-RXK9GfOjPjDnXNchr_TJ0'; // Token бота

if (!empty($name) and !empty($phone)) { // Если поля "контакт" и "текст" не пусты. Дополнительная проверка при обработке формы (если будут боты слать запросы)
	$msg = '*Заявка с сайта рижский-рынок.москва*

'; // Делаем первую строку "жирной". Переводы строки для удобства в телеграме.
	$msg .= $name; // Добавляем в текст поле "контакт" и имя
	$msg .= ' || Корпоративный заказ:

'.$phone; // Добавляем текст сообщения. Перевод строки опять же для удобства

file_get_contents('https://api.telegram.org/bot'. $token .'/sendMessage?chat_id='. $userId .'&text=' . urlencode($msg) . '&parse_mode=markdown'); // Отправляем запрос. Разметка - markdown

	echo "<strong>Спасибо, мы получили Ваше сообщение.</strong><hr>"; // Выводим сообщение что заявка ушла
}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
}
 
?>