import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-ravagx-bg">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-2 text-4xl font-extrabold text-white">
          Términos y Condiciones de Uso
        </h1>
        <p className="mb-4 text-sm text-ravagx-gray">
          Última actualización: 08 de febrero de 2026
        </p>
        <p className="mb-12 text-gray-300 leading-relaxed">
          Estos Términos y Condiciones (&quot;Términos&quot;) regulan el acceso
          y uso de la aplicación móvil RavaGx (&quot;la Aplicación&quot;,
          &quot;el Servicio&quot;), desarrollada y operada por RavaGx Team
          (&quot;nosotros&quot;, &quot;nuestro&quot;). Al descargar, instalar,
          registrarse o utilizar RavaGx, usted (&quot;el Usuario&quot;) declara
          que ha leído, comprendido y aceptado estos Términos en su totalidad.
          Si no está de acuerdo con alguno de ellos, le pedimos que no utilice
          la Aplicación.
        </p>

        <article className="space-y-10 text-gray-300 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Descripción del Servicio
            </h2>
            <p className="mb-3">
              RavaGx es una herramienta de gestión y asistencia vehicular que
              ofrece las siguientes funcionalidades:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                <strong className="text-white">Mi Garaje:</strong> Registro y
                administración de vehículos (placa, marca, modelo, año, color).
              </li>
              <li>
                <strong className="text-white">Semáforo Legal:</strong>{" "}
                Seguimiento de fechas de vencimiento de documentos legales
                (SOAT, Revisión Técnica, Licencia de Conducir).
              </li>
              <li>
                <strong className="text-white">Guantera Digital:</strong>{" "}
                Almacenamiento seguro de fotografías de documentos vehiculares.
              </li>
              <li>
                <strong className="text-white">
                  Mantenimiento Predictivo:
                </strong>{" "}
                Estimaciones de mantenimiento basadas en el historial de
                kilometraje del vehículo.
              </li>
              <li>
                <strong className="text-white">Comunidad:</strong> Red de
                alertas viales en tiempo real generadas por los usuarios.
              </li>
              <li>
                <strong className="text-white">
                  Localizador de Servicios:
                </strong>{" "}
                Búsqueda de talleres mecánicos, estaciones de servicio,
                servicios de grúa y otros proveedores cercanos.
              </li>
              <li>
                <strong className="text-white">Seguros:</strong> Registro
                informativo de pólizas de seguros vehiculares.
              </li>
              <li>
                <strong className="text-white">Notificaciones:</strong> Alertas
                de vencimiento de documentos, recordatorios de mantenimiento y
                avisos de seguridad vial.
              </li>
              <li>
                <strong className="text-white">
                  Gamificación (RavaPoints):
                </strong>{" "}
                Sistema de puntos de reputación por el uso activo y responsable
                de la Aplicación.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. Requisitos para el Uso
            </h2>
            <p className="mb-3">Para utilizar RavaGx, usted debe:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Ser mayor de 16 años de edad.</li>
              <li>
                Proporcionar información veraz, precisa y actualizada durante el
                registro y uso de la Aplicación.
              </li>
              <li>
                Contar con un dispositivo móvil compatible y acceso a internet.
              </li>
              <li>Aceptar estos Términos y nuestra Política de Privacidad.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. Cuenta de Usuario
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.1 Registro
            </h3>
            <p className="mb-4">
              Para acceder al Servicio, debe crear una cuenta proporcionando su
              nombre completo, correo electrónico y una contraseña segura. Usted
              es responsable de mantener la confidencialidad de sus
              credenciales.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.2 Seguridad de la Cuenta
            </h3>
            <p className="mb-2">Usted se compromete a:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>No compartir sus credenciales de acceso con terceros.</li>
              <li>
                Notificarnos inmediatamente si sospecha un acceso no autorizado
                a su cuenta.
              </li>
              <li>
                Aceptar la responsabilidad por todas las actividades realizadas
                bajo su cuenta.
              </li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.3 Eliminación de Cuenta
            </h3>
            <p className="mb-2">
              Puede eliminar su cuenta en cualquier momento desde:
            </p>
            <p className="mb-2 rounded-xl bg-ravagx-card px-4 py-2 text-sm text-ravagx-orange font-medium inline-block">
              Perfil → Editar Perfil → Eliminar mi cuenta
            </p>
            <p>
              La eliminación es permanente e irreversible y conlleva la
              supresión de todos sus datos personales, vehículos, documentos y
              contenido generado.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Naturaleza del Servicio y Descargos de Responsabilidad
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.1 RavaGx NO es un taller mecánico
            </h3>
            <p className="mb-4">
              La Aplicación facilita la búsqueda y localización de proveedores
              de servicios vehiculares (talleres, grúas, baterías, etc.), pero
              no presta directamente servicios mecánicos, de reparación ni de
              mantenimiento. RavaGx no garantiza, avala ni se responsabiliza por
              la calidad, puntualidad, seguridad o resultado de los servicios
              prestados por terceros proveedores.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.2 RavaGx NO es una entidad gubernamental
            </h3>
            <p className="mb-4">
              La información sobre documentos legales (SOAT, Revisión Técnica,
              Papeletas, Licencia de Conducir) es referencial e informativa. No
              constituye un registro oficial ni reemplaza la consulta directa en
              plataformas gubernamentales. El Usuario es el único responsable de
              verificar el estado de sus documentos ante las autoridades
              competentes.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.3 Predicciones de Mantenimiento
            </h3>
            <p className="mb-4">
              Las estimaciones se basan en algoritmos que analizan el historial
              de kilometraje registrado por el Usuario. Son aproximaciones
              orientativas y no sustituyen el diagnóstico profesional de un
              mecánico certificado. RavaGx no se responsabiliza por fallas
              mecánicas, averías o daños derivados de la confianza exclusiva en
              estas predicciones.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.4 Modo SOS y Alertas de Emergencia
            </h3>
            <p className="mb-4">
              Las funciones de emergencia son herramientas de asistencia
              complementaria. No sustituyen ni reemplazan a los servicios
              oficiales de emergencia (Policía Nacional del Perú, Bomberos, SAMU
              u otros). En caso de emergencia real, contacte siempre a los
              servicios oficiales.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.5 Seguros
            </h3>
            <p>
              La sección de seguros permite registrar información referencial de
              pólizas. RavaGx no es intermediario, corredor ni agente de seguros
              y no gestiona, vende ni tramita pólizas.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Obligaciones y Responsabilidades del Usuario
            </h2>
            <p className="mb-2">El Usuario se compromete a:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Proporcionar información veraz y actualizada.</li>
              <li>
                Utilizar la Aplicación de manera lícita, ética y conforme a
                estos Términos.
              </li>
              <li>
                No publicar alertas falsas, engañosas, spam o contenido
                ofensivo, violento, sexual o ilegal.
              </li>
              <li>
                No manipular ni abusar del sistema de gamificación (RavaPoints).
              </li>
              <li>No acceder a cuentas o datos de otros usuarios.</li>
              <li>
                No realizar ingeniería inversa ni intentar obtener el código
                fuente.
              </li>
              <li>No utilizar bots, scripts automatizados ni scraping.</li>
              <li>
                Respetar los derechos de otros usuarios y las leyes aplicables.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. Moderación y Sanciones
            </h2>
            <p className="mb-2">RavaGx se reserva el derecho de:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>Eliminar contenido que viole estos Términos.</li>
              <li>
                Suspender temporalmente cuentas por infracciones moderadas.
              </li>
              <li>
                Eliminar permanentemente cuentas por infracciones graves o
                reiteradas, incluyendo:
                <ul className="list-disc pl-6 mt-1.5 space-y-1">
                  <li>Publicación reiterada de alertas falsas.</li>
                  <li>Manipulación del sistema de puntos.</li>
                  <li>Acoso u hostigamiento.</li>
                  <li>Uso de la Aplicación para actividades ilegales.</li>
                </ul>
              </li>
            </ul>
            <p>
              Las decisiones de moderación pueden aplicarse sin previo aviso
              cuando la gravedad lo justifique.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Propiedad Intelectual
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              7.1 Derechos de RavaGx
            </h3>
            <p className="mb-4">
              Todo el contenido, diseño, interfaz, logotipos, marcas, código
              fuente, algoritmos y bases de datos son propiedad exclusiva de
              RavaGx Team y están protegidos por ley.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              7.2 Restricciones
            </h3>
            <p className="mb-2">Queda prohibido:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>Copiar, reproducir o modificar la Aplicación.</li>
              <li>Realizar ingeniería inversa.</li>
              <li>Usar marcas o logotipos sin autorización escrita.</li>
              <li>Crear productos derivados.</li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              7.3 Contenido del Usuario
            </h3>
            <p>
              Al publicar contenido en Comunidad, usted otorga a RavaGx una
              licencia no exclusiva, gratuita y revocable para mostrar dicho
              contenido dentro de la Aplicación. Usted conserva la titularidad
              de su contenido y puede eliminarlo. Al eliminar su cuenta, todo el
              contenido asociado se elimina permanentemente.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              8. Limitación de Responsabilidad
            </h2>
            <p className="mb-3">En la máxima medida permitida por ley:</p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>
                La Aplicación se proporciona &quot;TAL CUAL&quot; y &quot;SEGÚN
                DISPONIBILIDAD&quot;, sin garantías.
              </li>
              <li>
                RavaGx no garantiza ausencia de errores, interrupciones o
                fallas.
              </li>
              <li>
                RavaGx no es responsable por daños derivados de:
                <ul className="list-disc pl-6 mt-1.5 space-y-1">
                  <li>Uso o imposibilidad de uso de la Aplicación.</li>
                  <li>Fallas mecánicas no previstas.</li>
                  <li>Información incorrecta de terceros.</li>
                  <li>Pérdida de datos fuera de su control.</li>
                  <li>Acciones de proveedores de servicios vehiculares.</li>
                  <li>Interrupciones por mantenimiento o fuerza mayor.</li>
                </ul>
              </li>
            </ul>
            <p>
              La responsabilidad total de RavaGx no excederá lo pagado por el
              Usuario en los últimos 12 meses o el equivalente a 1 dólar
              estadounidense, lo que sea mayor.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              9. Indemnización
            </h2>
            <p className="mb-2">
              El Usuario acepta indemnizar y mantener indemne a RavaGx Team
              frente a reclamaciones derivadas de:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Incumplimiento de estos Términos.</li>
              <li>Uso indebido de la Aplicación.</li>
              <li>Violación de derechos de terceros.</li>
              <li>Contenido publicado en Comunidad.</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              10. Disponibilidad y Modificaciones del Servicio
            </h2>
            <p>
              RavaGx puede modificar, suspender o descontinuar funcionalidades
              en cualquier momento. Algunas actualizaciones pueden ser
              obligatorias. No garantizamos disponibilidad permanente.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              11. Servicios Gratuitos y Futuros Servicios de Pago
            </h2>
            <p>
              El uso actual de RavaGx es gratuito. En el futuro, podrán
              ofrecerse servicios premium opcionales, informando previamente
              precios y condiciones.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              12. Privacidad
            </h2>
            <p>
              El tratamiento de datos personales se rige por la Política de
              Privacidad, que forma parte integral de estos Términos.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              13. Resolución de Disputas
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              13.1 Negociación Directa
            </h3>
            <p className="mb-4">
              Las controversias se intentarán resolver mediante negociación
              directa escribiendo a{" "}
              <span className="text-ravagx-orange">ravagx.x@gmail.com</span>.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              13.2 Jurisdicción
            </h3>
            <p>
              Si no se resuelve en 30 días, las partes se someten a los
              tribunales de Lima, Perú.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              14. Modificaciones a estos Términos
            </h2>
            <p className="mb-2">
              Podemos actualizar estos Términos. Le notificaremos mediante:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>Notificación en la Aplicación.</li>
              <li>
                Actualización de la fecha de &quot;Última actualización&quot;.
              </li>
            </ul>
            <p>
              El uso continuado implica aceptación. Si no está de acuerdo, debe
              dejar de usar la Aplicación y eliminar su cuenta.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              15. Divisibilidad
            </h2>
            <p>
              Si alguna disposición es inválida, las restantes continuarán
              vigentes.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              16. Acuerdo Completo
            </h2>
            <p>
              Estos Términos y la Política de Privacidad constituyen el acuerdo
              completo entre el Usuario y RavaGx.
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              17. Ley Aplicable
            </h2>
            <p>
              Se rigen por las leyes de la República del Perú, incluyendo la Ley
              N° 29571 y normativa aplicable.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">18. Contacto</h2>
            <p className="mb-3">Para consultas o reclamos:</p>
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
