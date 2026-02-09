import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    
    // Configuración del Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let type, businessName, contactPhone, email, name;
    let htmlContent = '';
    let subject = '';
    let recipientEmail = process.env.CONTACT_EMAIL;
    const attachments = [];

    // Manejo de FormData (para archivos y texto)
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      type = formData.get('type') as string;
      
      // Datos comunes
      email = formData.get('email') as string;
      
      if (type === 'RRHH') {
        recipientEmail = process.env.EMAIL_RRHH || 'ya.chipacitos.rrhh@gmail.com';
        
        // Datos específicos de RRHH
        const date = formData.get('date');
        const city = formData.get('city');
        const phone = formData.get('phone');
        const altPhone = formData.get('altPhone');
        const linkedin = formData.get('linkedin');
        const educationLevel = formData.get('educationLevel');
        const title = formData.get('title');
        const institution = formData.get('institution');
        const englishLevel = formData.get('englishLevel');
        const itTools = formData.get('itTools');
        const lastCompany = formData.get('lastCompany');
        const lastPosition = formData.get('lastPosition');
        const experienceYears = formData.get('experienceYears');
        const mainTasks = formData.get('mainTasks');
        const availability = formData.get('availability');
        const mobility = formData.get('mobility');
        const nameField = formData.get('name') as string;

        // Manejo del archivo adjunto
        const cvFile = formData.get('cvFile') as File | null;
        if (cvFile) {
            const arrayBuffer = await cvFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: cvFile.name,
                content: buffer,
                contentType: cvFile.type,
            });
        }

        subject = `Nueva Postulación RRHH: ${nameField}`;
        
        // Plantilla HTML para RRHH
        htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Helvetica', 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 700px; margin: 20px auto; background-color: #ffffff; border: 4px solid #000000; box-shadow: 10px 10px 0px #000000; }
            .header { background-color: #D7320F; padding: 30px; text-align: center; border-bottom: 4px solid #000000; }
            .logo { font-size: 28px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; letter-spacing: 2px; text-shadow: 3px 3px 0px #000000; -webkit-text-stroke: 1px #000; }
            .content { padding: 40px; color: #000000; }
            .title { font-size: 24px; font-weight: 900; margin-bottom: 20px; text-transform: uppercase; color: #000000; border-left: 8px solid #F0C828; padding-left: 15px; }
            .section-title { font-size: 18px; font-weight: 800; color: #D7320F; margin-top: 25px; margin-bottom: 10px; border-bottom: 2px solid #eee; padding-bottom: 5px; text-transform: uppercase; }
            .field { margin-bottom: 15px; display: flex; flex-direction: column; }
            .label { font-weight: 700; color: #555; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
            .value { background-color: #F8F8F8; padding: 10px; border-left: 3px solid #000; font-weight: 600; font-size: 14px; }
            .footer { background-color: #000000; color: #FFFFFF; text-align: center; padding: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Ya! Chipacitos</div>
            </div>
            <div class="content">
              <h2 class="title">Nueva Postulación Recibida</h2>
              <p>Candidato: <strong>${nameField}</strong></p>

              <div class="section-title">Datos Personales</div>
              <div class="field"><span class="label">Email</span><span class="value">${email}</span></div>
              <div class="field"><span class="label">Teléfono</span><span class="value">${phone}</span></div>
              <div class="field"><span class="label">Teléfono Alt.</span><span class="value">${altPhone || '-'}</span></div>
              <div class="field"><span class="label">Ciudad</span><span class="value">${city}</span></div>
              <div class="field"><span class="label">Fecha Carga</span><span class="value">${date}</span></div>
              <div class="field"><span class="label">LinkedIn</span><span class="value">${linkedin || '-'}</span></div>

              <div class="section-title">Formación</div>
              <div class="field"><span class="label">Nivel Estudios</span><span class="value">${educationLevel}</span></div>
              <div class="field"><span class="label">Título</span><span class="value">${title || '-'}</span></div>
              <div class="field"><span class="label">Institución</span><span class="value">${institution || '-'}</span></div>
              <div class="field"><span class="label">Inglés</span><span class="value">${englishLevel}</span></div>
              <div class="field"><span class="label">Herramientas IT</span><span class="value">${itTools || '-'}</span></div>

              <div class="section-title">Experiencia</div>
              <div class="field"><span class="label">Última Empresa</span><span class="value">${lastCompany || '-'}</span></div>
              <div class="field"><span class="label">Último Cargo</span><span class="value">${lastPosition || '-'}</span></div>
              <div class="field"><span class="label">Años Exp.</span><span class="value">${experienceYears}</span></div>
              <div class="field"><span class="label">Tareas</span><span class="value">${mainTasks || '-'}</span></div>

              <div class="section-title">Disponibilidad</div>
              <div class="field"><span class="label">Horaria</span><span class="value">${availability}</span></div>
              <div class="field"><span class="label">Movilidad</span><span class="value">${mobility}</span></div>
              
              <p style="margin-top: 30px; font-style: italic;">* El CV se encuentra adjunto a este correo.</p>
            </div>
            <div class="footer">
              <p>Portal de Empleos - Ya! Chipacitos</p>
            </div>
          </div>
        </body>
        </html>
        `;

      } else {
        // Fallback or generic handling if needed within form-data
      }

    } else {
      // Manejo de JSON (para el formulario de Mayorista/News que sigue enviando JSON)
      const jsonBody = await req.json();
      type = jsonBody.type;
      businessName = jsonBody.businessName;
      contactPhone = jsonBody.contactPhone;
      email = jsonBody.email;
      // name = jsonBody.name; // Eliminado por no usarse en este bloque

      if (type === 'Mayorista') {
        recipientEmail = process.env.EMAIL_MAYORISTA || 'yachipacitosmayorista@gmail.com';
      }

      subject = `Nueva Solicitud Comercial: ${businessName || 'Web'}`;

      // Plantilla HTML para Mayorista
      htmlContent = `
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
              <h2 class="title">Nueva Solicitud Comercial</h2>
              <p style="font-size: 16px; margin-bottom: 30px;">Se ha recibido una nueva consulta de <strong>Mayorista / Franquicia</strong>.</p>
              
              <div class="field">
                <span class="label">Negocio Interesado</span>
                <span class="value highlight">${businessName}</span>
              </div>
              
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
            </div>
          </div>
        </body>
        </html>
      `;
    }

    const mailOptions = {
      from: `"Ya! Chipacitos Web" <${process.env.SMTP_USER}>`,
      to: recipientEmail, 
      subject: subject,
      html: htmlContent,
      attachments: attachments,
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