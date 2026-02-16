import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-ravagx-bg">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-2 text-4xl font-extrabold text-white">
          Política de Privacidad
        </h1>
        <p className="mb-4 text-sm text-ravagx-gray">
          Última actualización: 08 de febrero de 2026
        </p>
        <p className="mb-12 text-gray-300 leading-relaxed">
          RavaGx (&quot;nosotros&quot;, &quot;nuestro&quot;, &quot;la
          aplicación&quot;) opera la aplicación móvil RavaGx, disponible en
          Google Play Store (el &quot;Servicio&quot;). Esta Política de
          Privacidad describe cómo recopilamos, usamos, almacenamos, protegemos
          y compartimos su información personal cuando utiliza nuestro Servicio.
          Al descargar, instalar o utilizar RavaGx, usted acepta las prácticas
          descritas en esta Política de Privacidad. Si no está de acuerdo, le
          pedimos que no utilice el Servicio.
        </p>

        <article className="space-y-10 text-gray-300 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Datos que Recopilamos
            </h2>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.1 Información de cuenta
            </h3>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                <strong className="text-white">Nombre completo:</strong> Para
                personalizar su experiencia y perfil público.
              </li>
              <li>
                <strong className="text-white">Correo electrónico:</strong> Para
                autenticación, recuperación de cuenta y comunicaciones del
                servicio.
              </li>
              <li>
                <strong className="text-white">
                  Número de teléfono (opcional):
                </strong>{" "}
                Para contacto de emergencia y recuperación de cuenta.
              </li>
              <li>
                <strong className="text-white">Contraseña:</strong> Almacenada
                de forma cifrada mediante hash seguro. Nunca almacenamos
                contraseñas en texto plano.
              </li>
            </ul>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.2 Datos del vehículo
            </h3>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>Marca, modelo, año, placa y color del vehículo.</li>
              <li>
                Fechas de vencimiento de documentos legales (SOAT, Revisión
                Técnica, Licencia de Conducir).
              </li>
              <li>Historial de kilometraje y registros de mantenimiento.</li>
            </ul>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.3 Documentos (Guantera Digital)
            </h3>
            <p className="mb-4">
              Fotografías de documentos vehiculares (SOAT, tarjeta de propiedad,
              licencia, seguros) que usted sube voluntariamente. Estas imágenes
              se almacenan de forma segura en servidores cifrados y solo usted
              tiene acceso a ellas.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.4 Ubicación (GPS)
            </h3>
            <ul className="list-disc space-y-1.5 pl-6 mb-2">
              <li>
                <strong className="text-white">Tipo:</strong> Ubicación precisa
                del dispositivo (GPS).
              </li>
              <li>
                <strong className="text-white">Momento de recopilación:</strong>{" "}
                Únicamente mientras la aplicación está abierta y en uso (primer
                plano). No recopilamos ubicación en segundo plano.
              </li>
            </ul>
            <p className="mb-2">Propósito:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-2">
              <li>
                Mostrar talleres mecánicos, estaciones de servicio y servicios
                de emergencia cercanos.
              </li>
              <li>
                Verificar la ubicación de reportes viales en la comunidad.
              </li>
              <li>Enviar alertas de seguridad vial relevantes para su zona.</li>
            </ul>
            <p className="mb-4">
              <strong className="text-white">Permiso:</strong> La aplicación
              solicita su autorización explícita antes de acceder a su
              ubicación. Puede revocar este permiso en cualquier momento desde
              la configuración de su dispositivo.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.5 Cámara y galería de fotos
            </h3>
            <ul className="list-disc space-y-1.5 pl-6 mb-2">
              <li>
                <strong className="text-white">Cámara:</strong> Se solicita
                acceso para fotografiar documentos vehiculares dentro de la
                Guantera Digital.
              </li>
              <li>
                <strong className="text-white">Galería:</strong> Se solicita
                acceso para seleccionar fotos existentes de documentos o para
                reportar alertas viales en la comunidad.
              </li>
            </ul>
            <p className="mb-4">
              <strong className="text-white">Propósito exclusivo:</strong> Subir
              documentos vehiculares y fotografías de alertas comunitarias. No
              accedemos a la cámara ni galería sin su acción explícita.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.6 Notificaciones push
            </h3>
            <p className="mb-2">
              <strong className="text-white">Token del dispositivo:</strong> Al
              aceptar notificaciones, se genera un identificador único (Expo
              Push Token) que permite enviar notificaciones a su dispositivo.
            </p>
            <p className="mb-2">
              <strong className="text-white">Funcionamiento:</strong> Las
              notificaciones push se entregan a través de Firebase Cloud
              Messaging (FCM), un servicio del sistema operativo Android
              proporcionado por Google. RavaGx no ejecuta procesos en segundo
              plano. La entrega de notificaciones cuando la aplicación está
              cerrada es gestionada nativamente por el servicio FCM de Android.
            </p>
            <p className="mb-2">Tipos de notificaciones:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-2">
              <li>Alertas de vencimiento de documentos legales.</li>
              <li>Recordatorios de mantenimiento.</li>
              <li>Alertas de seguridad vial.</li>
              <li>Novedades del servicio.</li>
            </ul>
            <p className="mb-4">
              <strong className="text-white">Control del usuario:</strong> Puede
              desactivar las notificaciones desde la configuración de su
              dispositivo o desde Perfil → Notificaciones dentro de la
              aplicación.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.7 Contenido generado por el usuario
            </h3>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                Alertas de tráfico y seguridad vial publicadas en la sección
                Comunidad.
              </li>
              <li>Comentarios y votos en alertas de otros usuarios.</li>
              <li>Fotografías opcionales adjuntas a reportes viales.</li>
            </ul>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.8 Datos de uso (recopilación automática)
            </h3>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                Tipo de dispositivo, versión del sistema operativo y versión de
                la aplicación.
              </li>
              <li>
                Registros de errores anónimos para mejorar la estabilidad del
                servicio.
              </li>
            </ul>
            <p className="mt-2 font-medium text-white">
              No utilizamos cookies, rastreadores de publicidad ni herramientas
              de analítica de terceros.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. Uso de los Datos
            </h2>
            <p className="mb-2">Utilizamos sus datos exclusivamente para:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>Proveer, operar y mantener el Servicio.</li>
              <li>Autenticar su identidad y proteger su cuenta.</li>
              <li>
                Notificarle sobre vencimientos de documentos legales (SOAT,
                Revisión Técnica, Licencia).
              </li>
              <li>
                Enviar recordatorios de mantenimiento vehicular predictivo.
              </li>
              <li>
                Mostrar servicios mecánicos y de emergencia cercanos a su
                ubicación.
              </li>
              <li>
                Facilitar la comunicación entre usuarios en la sección
                Comunidad.
              </li>
              <li>Mejorar y personalizar la experiencia del usuario.</li>
              <li>Responder a solicitudes de soporte técnico.</li>
              <li>Cumplir con obligaciones legales aplicables.</li>
            </ul>
            <p className="font-medium text-white">
              No vendemos, alquilamos ni comercializamos sus datos personales a
              terceros con fines publicitarios o de marketing.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. Compartición de Datos
            </h2>
            <p className="mb-3">
              Sus datos personales no se comparten con terceros excepto en los
              siguientes casos limitados:
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.1 Proveedores de infraestructura
            </h3>
            <p className="mb-3">
              RavaGx utiliza proveedores externos esenciales para el
              funcionamiento del Servicio:
            </p>
            <div className="space-y-3 mb-4">
              <div className="rounded-xl bg-ravagx-card p-4">
                <p className="font-semibold text-white">Supabase</p>
                <p className="text-sm">
                  Función: Autenticación y base de datos. Datos compartidos:
                  Credenciales cifradas, datos de perfil y vehículos.
                </p>
              </div>
              <div className="rounded-xl bg-ravagx-card p-4">
                <p className="font-semibold text-white">Expo (EAS)</p>
                <p className="text-sm">
                  Función: Entrega de notificaciones push. Datos compartidos:
                  Token del dispositivo (identificador anónimo).
                </p>
              </div>
              <div className="rounded-xl bg-ravagx-card p-4">
                <p className="font-semibold text-white">
                  Google Firebase (FCM)
                </p>
                <p className="text-sm">
                  Función: Canal de entrega de notificaciones push. Datos
                  compartidos: Token del dispositivo.
                </p>
              </div>
              <div className="rounded-xl bg-ravagx-card p-4">
                <p className="font-semibold text-white">Google Maps</p>
                <p className="text-sm">
                  Función: Visualización de mapas y geolocalización de
                  servicios. Datos compartidos: Coordenadas de ubicación (en
                  uso).
                </p>
              </div>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.2 Obligación legal
            </h3>
            <p className="mb-4">
              Podemos divulgar datos personales si es requerido por ley, proceso
              judicial, solicitud gubernamental o para proteger los derechos,
              seguridad o propiedad de RavaGx y sus usuarios.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.3 Contenido público
            </h3>
            <p>
              Las alertas viales publicadas en la sección Comunidad (tipo de
              alerta, descripción, foto opcional y ubicación aproximada) son
              visibles para otros usuarios de RavaGx en la zona. Su nombre o
              datos de contacto no se muestran públicamente en las alertas.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Almacenamiento y Seguridad de los Datos
            </h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                <strong className="text-white">Cifrado en tránsito:</strong>{" "}
                Todas las comunicaciones se realizan mediante HTTPS/TLS.
              </li>
              <li>
                <strong className="text-white">Cifrado en reposo:</strong> Los
                datos almacenados están cifrados.
              </li>
              <li>
                <strong className="text-white">Contraseñas:</strong> Hash
                criptográfico unidireccional (bcrypt).
              </li>
              <li>
                <strong className="text-white">Documentos fotográficos:</strong>{" "}
                Buckets privados con políticas de seguridad a nivel de fila (Row
                Level Security).
              </li>
              <li>
                <strong className="text-white">Aislamiento de datos:</strong>{" "}
                Cada usuario solo puede acceder a sus propios datos.
              </li>
              <li>
                <strong className="text-white">Infraestructura:</strong> Centros
                de datos con estándares de seguridad industriales.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Retención y Eliminación de Datos
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              5.1 Retención
            </h3>
            <p className="mb-4">
              Conservamos sus datos personales mientras su cuenta esté activa y
              sea necesario para proveer el Servicio.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              5.2 Eliminación de cuenta
            </h3>
            <p className="mb-2">
              Puede solicitar la eliminación total e irreversible de su cuenta
              desde la aplicación:
            </p>
            <p className="mb-3 rounded-xl bg-ravagx-card px-4 py-2 text-sm text-ravagx-orange font-medium inline-block">
              Perfil → Editar Perfil → Eliminar mi cuenta
            </p>
            <p className="mb-2">Al eliminar su cuenta:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                Se borran permanentemente todos sus datos personales, vehículos,
                documentos, historial y contenido generado.
              </li>
              <li>
                Los datos son eliminados de nuestros servidores y bases de
                datos.
              </li>
              <li>Esta acción es irreversible y no se puede deshacer.</li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              5.3 Solicitud por email
            </h3>
            <p>
              También puede solicitar la eliminación enviando un correo a{" "}
              <span className="text-ravagx-orange">ravagx.x@gmail.com</span> con
              el asunto &quot;Solicitud de eliminación de datos&quot;.
              Procesaremos su solicitud en un plazo máximo de 30 días.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. Derechos del Usuario
            </h2>
            <p className="mb-2">Usted tiene derecho a:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>Acceso.</li>
              <li>Rectificación.</li>
              <li>Eliminación.</li>
              <li>Portabilidad.</li>
              <li>Revocación de consentimiento.</li>
              <li>Oposición.</li>
            </ul>
            <p>
              Para ejercer estos derechos, contáctenos en{" "}
              <span className="text-ravagx-orange">ravagx.x@gmail.com</span>.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Privacidad de Menores
            </h2>
            <p>
              RavaGx no está dirigida a menores de 16 años. No recopilamos
              intencionalmente información personal de menores de 16 años. Si
              descubrimos que hemos recopilado datos de un menor sin
              consentimiento, eliminaremos dicha información.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              8. Permisos de la Aplicación
            </h2>
            <p className="mb-3">
              RavaGx solicita los siguientes permisos, cada uno con un propósito
              específico:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ravagx-border text-left">
                    <th className="py-2 pr-4 font-semibold text-white">
                      Permiso
                    </th>
                    <th className="py-2 pr-4 font-semibold text-white">
                      Propósito
                    </th>
                    <th className="py-2 font-semibold text-white">
                      Obligatorio
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ravagx-border">
                  <tr>
                    <td className="py-2 pr-4">Internet</td>
                    <td className="py-2 pr-4">
                      Comunicación con servidores para sincronizar datos
                    </td>
                    <td className="py-2">Sí</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Ubicación (GPS)</td>
                    <td className="py-2 pr-4">
                      Mostrar servicios cercanos y verificar reportes viales
                    </td>
                    <td className="py-2">No</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Cámara</td>
                    <td className="py-2 pr-4">
                      Fotografiar documentos vehiculares
                    </td>
                    <td className="py-2">No</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Almacenamiento / Galería</td>
                    <td className="py-2 pr-4">
                      Seleccionar fotos de documentos existentes
                    </td>
                    <td className="py-2">No</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Notificaciones</td>
                    <td className="py-2 pr-4">
                      Alertas de vencimiento y seguridad vial
                    </td>
                    <td className="py-2">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-medium text-white">
              Ningún permiso se activa sin su autorización explícita previa.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              9. Transferencias Internacionales de Datos
            </h2>
            <p>
              Nuestros servidores pueden estar ubicados fuera de su país de
              residencia. Al utilizar RavaGx, usted consiente la transferencia
              de sus datos a servidores donde operan nuestros proveedores de
              infraestructura (Supabase, Google, Expo), los cuales cumplen
              estándares internacionales de protección de datos.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              10. Cambios a esta Política
            </h2>
            <p className="mb-2">
              Podemos actualizar esta Política de Privacidad periódicamente. Le
              notificaremos cambios significativos mediante:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Una notificación dentro de la aplicación.</li>
              <li>
                La actualización de la fecha de &quot;Última
                actualización&quot;.
              </li>
            </ul>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              11. Legislación Aplicable
            </h2>
            <p>
              Esta Política de Privacidad se rige por las leyes de la República
              del Perú, incluyendo la Ley N° 29733 – Ley de Protección de Datos
              Personales y su reglamento.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">12. Contacto</h2>
            <p className="mb-3">
              Si tiene preguntas o desea ejercer sus derechos:
            </p>
            <ul className="list-none space-y-1.5">
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <span className="text-ravagx-orange">ravagx.x@gmail.com</span>
              </li>
              <li>
                <strong className="text-white">Soporte en la app:</strong>{" "}
                Perfil → Ayuda y Soporte → Contactar Soporte
              </li>
              <li>
                <strong className="text-white">Tiempo de respuesta:</strong>{" "}
                24–48 horas hábiles
              </li>
            </ul>
            <p className="mt-6 text-center text-sm font-semibold text-ravagx-orange">
              RavaGx — Tu asistente vehicular inteligente.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
