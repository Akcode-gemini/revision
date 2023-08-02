const nodemailer=require('nodemailer')

const signup=async(req,res)=>{
    let testAccount=await nodemailer.createTestAccount()
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
       // send mail with defined transport object
  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }
  transporter.sendMail(message).then(()=>{
    return res.status(201)
    .json({
    msg:"you should recieve an email",
    info:info.messageId,
    preview:nodemailer.getTestMessageUrl(info)
  }) 
  })
  .catch(error=>{
    return res.status(500).json({error})
  })
    //res.status(201).json("Signup Successfully...!")
}
const getbill=(req,res)=>{
    res.status(201).json("getBill Successfully...!")
}
module.exports={signup,getbill}
