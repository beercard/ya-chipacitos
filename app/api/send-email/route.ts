import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { businessName, contactPhone, email, type, name } = await req.json();

    // Determinar destinatario según el tipo de formulario
    let recipientEmail = process.env.CONTACT_EMAIL;
    if (type === 'Mayorista') {
      recipientEmail = process.env.EMAIL_MAYORISTA || 'yachipacitosmayorista@gmail.com';
    } else if (type === 'RRHH' || type === 'Trabajar con nosotros') {
      recipientEmail = process.env.EMAIL_RRHH || 'ya.chipacitos.rrhh@gmail.com';
    }

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
      to: recipientEmail, 
      subject: `Nueva Solicitud: ${type} - ${businessName || name || 'Web'}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Helvetica', 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 4px solid #000000; box-shadow: 10px 10px 0px #000000; }
            .header { background-color: #D7320F; padding: 30px; text-align: center; border-bottom: 4px solid #000000; }
            .logo { font-size: 28px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; letter-spacing: 2px; text-shadow: 3px 3px 0px #000000; -webkit-text-stroke: 1px #000; }
            .content { padding: 40px; color: #000000; }
            .title { font-size: 24px; font-weight: 900; margin-bottom: 20px; text-transform: uppercase; color: #000000; border-left: 8px solid #F0C828; padding-left: 15px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 900; color: #D7320F; display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px; }
            .value { background-color: #F8F8F8; padding: 15px; border: 2px solid #000000; font-weight: 600; display: block; font-size: 16px; }
            .highlight { background-color: #F0C828; }
            .footer { background-color: #000000; color: #FFFFFF; text-align: center; padding: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Ya! Chipacitos</div>
            </div>
            <div class="content">
              <h2 class="title">Nueva Solicitud Recibida</h2>
              <p style="font-size: 16px; margin-bottom: 30px;">Se ha recibido una nueva consulta desde el sitio web.</p>
              
              <div class="field">
                <span class="label">Tipo de Formulario</span>
                <span class="value highlight">${type}</span>
              </div>
              
              ${businessName ? `
              <div class="field">
                <span class="label">Nombre del Negocio</span>
                <span class="value">${businessName}</span>
              </div>` : ''}

              ${name ? `
              <div class="field">
                <span class="label">Nombre del Postulante</span>
                <span class="value">${name}</span>
              </div>` : ''}
              
              <div class="field">
                <span class="label">Email de Contacto</span>
                <span class="value"><a href="mailto:${email}" style="color: #000; text-decoration: none;">${email}</a></span>
              </div>

              <div class="field">
                <span class="label">Teléfono / Celular</span>
                <span class="value">${contactPhone}</span>
              </div>
            </div>
            <div class="footer">
              <p>Mensaje automático del sistema web</p>
              <p>YA! CHIPACITOS &copy; ${new Date().getFullYear()}</p>
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
