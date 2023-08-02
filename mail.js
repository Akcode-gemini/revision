const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aaliyakhanam158@gmail.com',
        pass:"xbebpziqaylfdsbo"
    }
})
let mailOptions={
    from:"aaliyakhanam158@gmail.com",
    to:"aaliyakhanam158@gmail.com",
    subject:"Testing Nodemailer",
    text:"Working on nodemailer"
}
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log("Error Occurred"+error)
    }
    else{
        console.log("Email Sent To:"+mailOptions.to,info.response)
    }
})