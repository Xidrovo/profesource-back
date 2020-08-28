var nodemailer = require("nodemailer");

async function send(req, res, next) {
  var transport = {
    host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone = req.body.cell_phone;
  var email = req.body.email;
  var detail = req.body.detail;
  var zone = req.body.zone;
  var content = `
<!DOCTYPE html>
<html>
<head>
<style>
#contactForm {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#contactForm td, #contactForm th {
  border: 1px solid #ddd;
  padding: 8px;
}

#contactForm tr:nth-child(even){background-color: #f2f2f2;}

#contactForm tr:hover {background-color: #ddd;}

#contactForm th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2E3648;
  color: white;
}
</style>
</head>
<body>
<h1 style="color: #333356;">Hola Admin! <span style="color: #2b2301;">${first_name} ${last_name}</span> desea ponerse en contacto con Profesource!</h1>
<h2 style="color: #333356;">Los datos del formulario que envió son:</h2>

<table id="contactForm">
  <tr>
    <th>Phone</th>
    <th>Email</th>
    <th>Detalle Del Form</th>
    <th>Zona en la que vivie</th>
  </tr>
  <tr>
    <td>${phone}</td>
    <td> ${email}</td>
    <td>${detail}</td>
    <td>${zone}</td>
  </tr>
</table>
</body>
</html>
`;

  var mail = {
    from: email,
    to: "profesource@gmail.com", // Change to email address that you want to receive messages on (profesource)
    subject: "New Message from Contact Form",
    html: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
}

module.exports = {
  send,
};
