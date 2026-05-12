import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {

  try {

    const body = await request.json();

    const {
      name,
      email,
      phone,
      vehicle,
      service,
      message,
    } = body;

    /*
    |--------------------------------------------------------------------------
    | EMAIL INTERNO (PARA VOS)
    |--------------------------------------------------------------------------
    */

    await resend.emails.send({
      from:
        "detailingg.lm <onboarding@resend.dev>",

      to: "santygaliano6@gmail.com",

      subject:
        `Nueva Reserva Premium - ${name}`,

      html: `
        <div style="background:#050505;padding:40px;font-family:Arial,sans-serif;color:#ffffff;">

          <div style="max-width:600px;margin:0 auto;background:#0b0b0b;border:1px solid rgba(255,255,255,0.08);padding:40px;">

            <img
              src="http://localhost:3000/logo/logo.png"
              alt="detailingg.lm"
              style="height:50px;margin-bottom:30px;"
            />

            <p style="color:#ef4444;letter-spacing:4px;font-size:11px;text-transform:uppercase;margin-bottom:10px;">
              Nueva Reserva Premium
            </p>

            <h1 style="font-size:32px;margin:0 0 30px 0;">
              Nueva Solicitud Recibida
            </h1>

            <div style="margin-bottom:30px;">

              <p>
                <strong>Nombre:</strong> ${name}
              </p>

              <p>
                <strong>Email:</strong> ${email}
              </p>

              <p>
                <strong>Teléfono:</strong> ${phone}
              </p>

              <p>
                <strong>Vehículo:</strong> ${vehicle}
              </p>

              <p>
                <strong>Servicio:</strong> ${
                  service || "No especificado"
                }
              </p>

            </div>

            <div style="padding:20px;background:#111111;border-left:3px solid #ef4444;">

              <p style="margin:0;color:#d1d5db;">
                ${message}
              </p>

            </div>

            <p style="margin-top:40px;color:#6b7280;font-size:13px;">
              Enviado automáticamente desde detailingg.lm
            </p>

          </div>

        </div>
      `,
    });

    /*
    |--------------------------------------------------------------------------
    | EMAIL AUTOMÁTICO PARA EL CLIENTE
    |--------------------------------------------------------------------------
    */

    await resend.emails.send({
      from:
        "detailingg.lm <onboarding@resend.dev>",

      to: email,

      subject:
        "Recibimos tu solicitud - detailingg.lm",

      html: `
        <div style="background:#050505;padding:40px;font-family:Arial,sans-serif;color:#ffffff;">

          <div style="max-width:600px;margin:0 auto;background:#0b0b0b;border:1px solid rgba(255,255,255,0.08);padding:40px;">

            <img
              src="http://localhost:3000/logo/logo.png"
              alt="detailingg.lm"
              style="height:50px;margin-bottom:30px;"
            />

            <p style="color:#ef4444;letter-spacing:4px;font-size:11px;text-transform:uppercase;margin-bottom:10px;">
              Solicitud Recibida
            </p>

            <h1 style="font-size:32px;margin:0 0 30px 0;">
              Gracias por contactarnos
            </h1>

            <p style="color:#d1d5db;line-height:1.8;">
              Hola ${name},
            </p>

            <p style="color:#d1d5db;line-height:1.8;">
              Recibimos correctamente tu solicitud de reserva.
            </p>

            <p style="color:#d1d5db;line-height:1.8;">
              Nuestro equipo revisará la información enviada
              y se pondrá en contacto con vos lo antes posible
              para coordinar el servicio.
            </p>

            <div style="margin-top:30px;padding:20px;background:#111111;border-left:3px solid #ef4444;">

              <p style="margin:0;color:#ffffff;">
                <strong>Vehículo:</strong> ${vehicle}
              </p>

              <p style="margin-top:10px;color:#ffffff;">
                <strong>Servicio:</strong> ${
                  service || "A definir"
                }
              </p>

            </div>

            <p style="margin-top:40px;color:#6b7280;font-size:13px;">
              detailingg.lm - Premium Car Detailing
            </p>

          </div>

        </div>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        error: "Error al enviar email",
      },
      {
        status: 500,
      }
    );

  }

}