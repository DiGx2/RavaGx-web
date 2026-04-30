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
          Última actualización: 30 de abril de 2026 (v4.0.0)
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
              <li>
                <strong className="text-white">Mi Cabina Inteligente:</strong>{" "}
                Panel operativo y financiero con score del vehículo, alertas
                tempranas de documentos y Tótem referencial de precios de
                combustible.
              </li>
              <li>
                <strong className="text-white">
                  Editor de Radares Comunitario:
                </strong>{" "}
                Herramienta freemium para que los usuarios mapeen, publiquen y
                modifiquen radares fijos dentro de la Aplicación.
              </li>
              <li>
                <strong className="text-white">
                  Programa de Recompensas RavaCoins (RC):
                </strong>{" "}
                Economía virtual interna basada en puntos de lealtad
                promocionales canjeables por recompensas dentro y fuera de la
                plataforma conforme a las reglas establecidas en estos Términos.
              </li>
              <li>
                <strong className="text-white">
                  Radar de Fotopapeletas y Alertas:
                </strong>{" "}
                Sistema de alertas referenciales de ubicación de cámaras de
                velocidad y reportes comunitarios.
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

          {/* 3.5 — RavaCoins (Virtual Economy) */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3.5 Programa de Recompensas RavaCoins (RC)
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.1 Naturaleza Jurídica de los RavaCoins
            </h3>
            <p className="mb-4">
              Los RavaCoins (en adelante, "RC") son{" "}
              <strong className="text-white">
                licencias de software virtuales y puntos de lealtad
                promocionales
              </strong>{" "}
              exclusivos del ecosistema RavaGx. Los RC{" "}
              <strong className="text-white">NO constituyen</strong> dinero
              electrónico, moneda de curso legal, criptoactivos, valores
              negociables ni instrumentos financieros de ninguna naturaleza.
              RavaGx{" "}
              <strong className="text-white">
                no es una empresa de servicios de pago, emisora de dinero
                electrónico, banco, agente de remesas ni intermediario
                financiero
              </strong>{" "}
              y no se encuentra sujeta a la supervisión de la Superintendencia
              de Banca, Seguros y AFP (SBS) ni de la Superintendencia del
              Mercado de Valores (SMV) del Perú. Los RC{" "}
              <strong className="text-white">
                no tienen valor en moneda fiduciaria fuera de la plataforma
              </strong>
              , no devengan intereses, no son transferibles entre usuarios salvo
              dentro de los mecanismos habilitados por la propia Aplicación, no
              son reembolsables en efectivo y no representan propiedad,
              participación, deuda ni derecho de crédito alguno frente a RavaGx
              Team.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.2 Obtención y Uso
            </h3>
            <p className="mb-4">
              El Usuario puede obtener RC mediante la interacción legítima con
              la Aplicación, la generación de contenido (UGC), reportes
              comunitarios verificados y otras actividades habilitadas por
              RavaGx. Los RC pueden ser utilizados para apoyar a creadores de la
              comunidad, desbloquear funciones, acceder a beneficios
              promocionales y, eventualmente, ser canjeados por recompensas
              conforme a la sección 3.5.3.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.3 Canje de Recompensas (Retiros)
            </h3>
            <p className="mb-3">
              El canje de RC por recompensas monetarias (por ejemplo, vía Yape u
              otra billetera digital habilitada) está sujeto a las siguientes
              condiciones obligatorias:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                <strong className="text-white">Mínimo de canje:</strong> Se
                requiere un saldo mínimo de{" "}
                <strong className="text-white">10,000 RC</strong> para iniciar
                cualquier proceso de canje monetario.
              </li>
              <li>
                Las recompensas constituyen una contraprestación por
                <strong className="text-white">
                  {" "}
                  servicios de moderación, curaduría y generación de contenido
                  (UGC){" "}
                </strong>
                prestados por el Usuario a favor del ecosistema RavaGx.
              </li>
              <li>
                RavaGx se reserva el derecho{" "}
                <strong className="text-white">unilateral</strong> de modificar
                el tipo de canje, los mínimos, los topes mensuales, los
                requisitos de verificación y las recompensas disponibles en
                cualquier momento, sin que ello genere derecho a indemnización
                alguna a favor del Usuario.
              </li>
              <li>
                RavaGx podrá{" "}
                <strong className="text-white">
                  suspender, retener, auditar, revertir o cancelar
                </strong>{" "}
                canjes y saldos de RC ante sospechas razonables de fraude,
                granjas de cuentas, uso de bots, multicuenta, lavado de activos,
                suplantación de identidad o cualquier otro abuso del sistema,
                sin necesidad de aviso previo.
              </li>
              <li>
                El Usuario es el único responsable de proporcionar datos de
                billetera correctos. RavaGx no se responsabiliza por canjes
                enviados a números de Yape u otras billeteras incorrectamente
                proporcionados por el Usuario.
              </li>
              <li>
                RavaGx podrá solicitar verificación de identidad (KYC ligero)
                como condición previa para procesar canjes, conforme a la
                normativa aplicable de prevención de fraude.
              </li>
              <li>
                Las recompensas pueden estar sujetas a las retenciones
                tributarias que correspondan conforme a la legislación peruana.
                El Usuario es el único responsable del cumplimiento de sus
                obligaciones tributarias derivadas de la recepción de
                recompensas.
              </li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.4 Suspensión, Modificación o Terminación del Programa
            </h3>
            <p>
              RavaGx se reserva el derecho de modificar, suspender o dar por
              terminado el Programa de Recompensas RavaCoins en cualquier
              momento. Los RC acumulados que no hayan sido canjeados al momento
              de una eventual terminación del programa, o de la eliminación de
              la cuenta por causa imputable al Usuario, caducarán sin derecho a
              compensación.
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
            <p className="mb-4">
              La sección de seguros permite registrar información referencial de
              pólizas. RavaGx no es intermediario, corredor ni agente de seguros
              y no gestiona, vende ni tramita pólizas.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.5.1 Mi Cabina Inteligente
            </h3>
            <p className="mb-4">
              Los datos provistos en "Mi Cabina" — incluyendo, sin limitarse a,
              fechas de vencimiento de documentos, score del vehículo,
              recordatorios y precios de combustible mostrados en el Tótem — son{" "}
              <strong className="text-white">
                meramente referenciales y de carácter informativo
              </strong>
              . Los precios de combustible pueden provenir de fuentes públicas o
              aportes comunitarios y pueden no coincidir con el precio real en
              el grifo. Es{" "}
              <strong className="text-white">
                responsabilidad única y exclusiva del conductor
              </strong>{" "}
              mantener sus documentos vehiculares vigentes conforme a ley,
              verificar las fechas oficiales en las plataformas gubernamentales
              correspondientes y confirmar precios al momento de adquirir
              combustible. RavaGx no asume responsabilidad por papeletas,
              multas, sanciones, sobrecostos ni perjuicios derivados de la
              confianza exclusiva en los datos mostrados en Mi Cabina.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.5.2 Editor de Radares Comunitario (UGC)
            </h3>
            <p className="mb-4">
              Al publicar, mapear o editar un radar mediante el Editor de
              Radares Comunitario, el Usuario declara que la información es
              veraz y que cuenta con el derecho de aportarla. El Usuario concede
              a RavaGx Team una{" "}
              <strong className="text-white">
                licencia mundial, perpetua, irrevocable, sublicenciable, libre
                de regalías y transferible
              </strong>{" "}
              para usar, copiar, almacenar, reproducir, modificar, adaptar,
              traducir, distribuir, publicar, comunicar públicamente, monetizar
              y explotar comercialmente — por cualquier medio conocido o por
              conocerse — la información del radar aportado, incluyendo
              coordenadas, tipología, descripciones y metadatos asociados, sin
              obligación de compensación adicional al Usuario más allá, en su
              caso, de los RavaCoins acreditados conforme al programa vigente.{" "}
              <strong className="text-white">
                RavaGx no garantiza la exactitud, vigencia ni completitud
              </strong>{" "}
              de los radares creados, mapeados o editados por la comunidad y no
              será responsable por papeletas, multas, accidentes ni perjuicios
              derivados de la confianza en dicha información. La publicación
              dolosa de radares falsos, inexistentes o maliciosamente mal
              ubicados constituye una infracción grave a estos Términos y dará
              lugar al baneo permanente de la cuenta y a la pérdida de los RC
              acumulados, sin perjuicio de las acciones legales que
              correspondan.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.6 Exención de Responsabilidad sobre Multas e Infracciones
            </h3>
            <p>
              El &quot;Radar de Fotopapeletas&quot; de RavaGx es{" "}
              <strong className="text-white">
                estrictamente una herramienta de asistencia referencial
              </strong>
              . Las ubicaciones de cámaras de velocidad y los reportes
              comunitarios mostrados en la Aplicación son aproximados y pueden
              contener inexactitudes, omisiones o información desactualizada. El
              Usuario es el único y exclusivo responsable de respetar en todo
              momento los límites de velocidad, las señales de tránsito y las
              leyes de tránsito vigentes en la República del Perú. RavaGx Team,
              sus fundadores, desarrolladores, colaboradores y cualquier persona
              vinculada al proyecto{" "}
              <strong className="text-white">
                NO asumen responsabilidad alguna — financiera, civil, penal ni
                administrativa —
              </strong>{" "}
              por fotopapeletas, multas, sanciones, accidentes de tránsito,
              daños materiales, lesiones personales o cualquier otro perjuicio
              que el Usuario pudiera sufrir o causar mientras utiliza o se basa
              en la información proporcionada por la Aplicación. El uso del
              Radar de Fotopapeletas no exime al conductor del cumplimiento
              íntegro de la normativa vial peruana.
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
            <p className="mb-4">
              Las decisiones de moderación pueden aplicarse sin previo aviso
              cuando la gravedad lo justifique.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              Contenido Generado por el Usuario (Reportes Comunitarios)
            </h3>
            <p>
              El sistema de reportes comunitarios del Radar de Fotopapeletas
              permite a los usuarios señalar eventos viales en tiempo real. El
              uso indebido de esta funcionalidad — incluyendo, sin limitarse a,
              la publicación de reportes falsos, spam repetitivo o información
              deliberadamente engañosa — constituye una infracción grave a estos
              Términos y resultará en la{" "}
              <strong className="text-white">
                suspensión temporal o eliminación permanente (baneo)
              </strong>{" "}
              de la cuenta del infractor, sin derecho a reembolso ni
              compensación. RavaGx se reserva el derecho de implementar sistemas
              automatizados y manuales de detección de abuso para preservar la
              integridad y confiabilidad de los reportes comunitarios.
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
