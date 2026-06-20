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
          Última actualización: 20 de junio de 2026 (v5.0.0)
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
              1.2 Datos del vehículo (Mi Cabina y Mi Garaje)
            </h3>
            <p className="mb-2">
              Los datos ingresados por el Usuario en "Mi Cabina" y "Mi Garaje"
              se almacenan de forma segura para proveer recordatorios
              personalizados, alertas tempranas y el funcionamiento del score
              del vehículo. Estos incluyen:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                Placa, marca, modelo, año, color y características técnicas del
                vehículo.
              </li>
              <li>
                Fechas de vencimiento de documentos legales (SOAT, Revisión
                Técnica, Licencia de Conducir, seguros).
              </li>
              <li>
                Historial de kilometraje, recordatorios de mantenimiento y
                eventos asociados al vehículo.
              </li>
            </ul>
            <p className="mb-4">
              <strong className="text-white">Finalidad:</strong> Generar
              alertas, recordatorios, el score del vehículo y métricas
              referenciales dentro de Mi Cabina. Estos datos no se comparten
              públicamente ni se venden a terceros.
            </p>

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
              1.4 Datos de Ubicación (Location Data)
            </h3>
            <p className="mb-3">
              Para el correcto funcionamiento del{" "}
              <strong className="text-white">
                Motor de Navegación 3D y del Radar de Fotopapeletas
              </strong>
              , la Aplicación recopila datos de{" "}
              <strong className="text-white">
                ubicación precisa en tiempo real
              </strong>{" "}
              mediante el GPS del dispositivo. Para las funciones PRO de alertas
              por voz, la Aplicación requiere acceso a la{" "}
              <strong className="text-white">
                Ubicación en Segundo Plano (Background Location)
              </strong>
              , permiso indispensable para que el motor de alertas por voz siga
              funcionando y te avise de radares y peligros{" "}
              <strong className="text-white">
                incluso con la pantalla del dispositivo apagada
              </strong>{" "}
              o con la aplicación en segundo plano. Mientras este servicio está
              activo se muestra una notificación persistente que informa al
              usuario que la ubicación está siendo utilizada.
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>
                <strong className="text-white">Tipo:</strong> Ubicación precisa
                del dispositivo (GPS).
              </li>
              <li>
                <strong className="text-white">Momento de recopilación:</strong>{" "}
                Mientras la aplicación está en uso (primer plano) y, para las
                funciones PRO, también en segundo plano (Background Location)
                cuando el motor de alertas por voz o el Radar de Fotopapeletas
                están activos.
              </li>
              <li>
                <strong className="text-white">Cálculo efímero:</strong> La
                distancia entre su posición y las cámaras de velocidad o
                peligros se calcula de forma efímera exclusivamente para
                disparar las alertas en tiempo real. No almacenamos ni
                registramos historiales de rutas, trayectos ni recorridos del
                usuario.
              </li>
              <li>
                <strong className="text-white">
                  No vendemos datos de ubicación:
                </strong>{" "}
                No vendemos, comercializamos ni compartimos historiales de rutas
                o datos de ubicación con terceros con fines publicitarios, de
                perfilamiento ni de ninguna otra índole comercial.
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
              <li>
                <strong className="text-white">Radar de Fotopapeletas:</strong>{" "}
                Calcular la proximidad a cámaras de velocidad registradas y
                emitir alertas sonoras y visuales preventivas.
              </li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              1.4.1 Reportes Comunitarios del Radar
            </h3>
            <p className="mb-4">
              Cuando un usuario envía un reporte comunitario (por ejemplo,
              señalar una cámara de velocidad o un evento vial), la Aplicación
              procesa la ubicación del reporte de{" "}
              <strong className="text-white">forma anónima</strong> para
              compartirla con otros conductores en la zona. No se asocia
              públicamente ninguna información personal del reportante (nombre,
              correo, placa) al reporte compartido con la comunidad.
            </p>
            <p className="mb-4">
              <strong className="text-white">Permiso:</strong> La aplicación
              solicita su autorización explícita antes de acceder a su
              ubicación. El permiso de{" "}
              <strong className="text-white">
                Ubicación en Segundo Plano (Background Location)
              </strong>{" "}
              se solicita por separado y es indispensable para que el motor de
              alertas por voz y el Radar de Fotopapeletas (función PRO) funcionen
              con la pantalla apagada o con la aplicación en segundo plano. Puede
              revocar estos permisos en cualquier momento desde la configuración
              de su dispositivo.
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
              1.7.1 Datos Financieros y Retiros (Economía RavaGx)
            </h3>
            <p className="mb-3">
              Dentro del modelo de Economía de Donaciones P2P, los usuarios
              pueden retirar a dinero real las ganancias acumuladas por las
              donaciones en RavaCoins (RC) recibidas de otros conductores.
              Exclusivamente para procesar estos retiros solicitados por el
              usuario, RavaGx recopila y almacena:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>
                <strong className="text-white">
                  Número de celular asociado a Yape
                </strong>{" "}
                (u otra billetera digital habilitada), proporcionado por el
                usuario como destino del retiro.
              </li>
              <li>
                <strong className="text-white">
                  Registro de transacciones:
                </strong>{" "}
                historial de recargas, donaciones enviadas y recibidas, retiros
                solicitados, montos liquidados y fechas.
              </li>
            </ul>
            <p className="mb-4">
              <strong className="text-white">Finalidad estricta:</strong> Esta
              información se utiliza{" "}
              <strong className="text-white">
                únicamente para procesar los retiros de ganancias
              </strong>
              , prevenir el fraude financiero y cumplir obligaciones legales y
              tributarias aplicables. No se utiliza con fines publicitarios ni se
              cede a terceros ajenos al proceso de liquidación. Estos datos se
              manejan bajo{" "}
              <strong className="text-white">
                estrictos estándares de seguridad
              </strong>{" "}
              (cifrado en tránsito y en reposo) para prevenir el fraude
              financiero. RavaGx no almacena claves, PINs ni credenciales de
              acceso a billeteras digitales.
            </p>

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
                      Mostrar servicios cercanos, verificar reportes viales y
                      Radar de Fotopapeletas
                    </td>
                    <td className="py-2">No</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      Ubicación en segundo plano (Background Location)
                    </td>
                    <td className="py-2 pr-4">
                      Indispensable para el motor de alertas por voz y el Radar
                      de Fotopapeletas (función PRO) con la pantalla apagada o la
                      app en segundo plano
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
                  <tr>
                    <td className="py-2 pr-4">
                      Superponer pantalla (Draw over other apps / Mostrar sobre
                      otras apps)
                    </td>
                    <td className="py-2 pr-4">
                      Permitir el uso del botón flotante de reporte rápido y
                      visualizar alertas del radar de fotopapeletas mientras el
                      usuario utiliza otras aplicaciones de navegación en primer
                      plano.
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
