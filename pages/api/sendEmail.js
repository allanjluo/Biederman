import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASSWORD,
        },
        tls: {
          ciphers: 'SSLv3',
        },
      });

    try {
      // Send email
      await transporter.sendMail({
        from: '"Website" <allanluo@outlook.com>',
        to: 'aluo3@student.ccc.edu',
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      // Email sent successfully
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      // Error sending email
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
