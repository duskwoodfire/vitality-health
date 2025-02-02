import { NextApiRequest,NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default async function handler(req:NextApiRequest,res:NextApiResponse){  
    if(req.method !== 'POST'){
        return res.status(405).json({message:"Method not Allowed"})
    }
    const {name,email,date,time,reason}=req.body;
    if(!name||!email||!date||!time||!reason){
        return res.status(400).json({message:'All fields  are required'})
    }

    // Configure Nodemailer Transporter

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        },
    })

    try {
        const mailOptions={
            from:`"${name}"<${process.env.EMAIL_USER}>`,
            replyTo:email,
            to:'doctor@example.com',
            subject:'New Appointment Request',
            text:`You have an appointment request from ${name}.
            📅 Date: ${date}
            ⏰ Time: ${time}
            📧 User Email: ${email}
            📝 Reason: ${reason}
            
            Please confirm the appointment.`
        }

        await transporter.sendMail(mailOptions)
        res.status(200).json({message:"Email sent successfully"})
    } catch (error) {
        console.error("Error sending email:",error)
    }
}

