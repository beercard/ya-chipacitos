import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { businessName, contactPhone, type } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Ya! Chipacitos Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // Email donde se recibirán las consultas
      subject: `Nueva consulta: ${type} - ${businessName}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Helvetica', 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border: 3px solid #000000; box-shadow: 8px 8px 0px #000000; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #000000; padding-bottom: 20px; }
            .logo { font-size: 24px; font-weight: bold; color: #D7320F; text-transform: uppercase; letter-spacing: 2px; }
            .title { color: #000000; font-size: 22px; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; }
            .content { font-size: 16px; color: #333333; line-height: 1.6; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #D7320F; display: block; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
            .value { background-color: #F0C828; padding: 10px; border: 2px solid #000000; font-weight: bold; display: block; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #eeeeee; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Ya! Chipacitos</div>
            </div>
            <div class="content">
              <h2 class="title">Nueva Solicitud de Información</h2>
              <p>Has recibido una nueva consulta desde el sitio web.</p>
              
              <div class="field">
                <span class="label">Tipo de Consulta</span>
                <span class="value">${type}</span>
              </div>
              
              <div class="field">
                <span class="label">Nombre del Negocio / Interesado</span>
                <span class="value">${businessName}</span>
              </div>
              
              <div class="field">
                <span class="label">Teléfono / Contacto</span>
                <span class="value">${contactPhone}</span>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado automáticamente desde el formulario de contacto de yachipacitos.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email enviado con éxito' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error enviando email:', error);
    return new Response(JSON.stringify({ message: 'Error al enviar el email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
