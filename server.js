const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e6e794f6fd5d70",
    pass: "3b6b48016c6466"
  }
});

transport.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.nome + ' ' + req.body.sobrenome;
  const email = req.body.email;
  const message = req.body.mensagem;
  const phone = req.body.telefone;
  const mail = {
    from: "henriquefrancoaraujo@gmail.com",
    to: "henriquefrancoaraujo@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
    <html lang="pt-BR">
      <div style="padding:10px;background-color:#000000;width:100%;height:100px;display:flex;align-items:center;justify-content:center;">
        <h1 style="color:#ffffff">Contato feito através do portifólio</h1>
      </div>
      <div style="padding:10px;background-color:#f7f7f7;width:100%;padding:16px;">
        <p><strong>Contato feito por:</strong> ${name}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Telefone: </strong>${phone}</p>
        <p>${message}</p>
      </div>  
      <div style="width:100%;height:100px;padding:10px;color:#ffffff;background-color:#19176c;align-items:center;display:flex;">
        <img style="width:50px;height:50px;margin:10px;border-radius:40px" src="https://avatars.githubusercontent.com/u/70860655?v=4" alt="Avatar"/>
        <p>Henrique Franco</p>
      </div>
    </html>`,
  };
  transport.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Mensagem enviada" });
    }
  });
});
