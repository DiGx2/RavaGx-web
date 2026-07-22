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
          Última actualización: 22 de julio de 2026 (v5.3.0)
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
                <strong className="text-white">RavaCore Analytics:</strong>{" "}
                Motor de análisis que genera el Score de salud del vehículo,
                reportes financieros, proyecciones e insights predictivos a
                partir de los datos ingresados por el Usuario.
              </li>
              <li>
                <strong className="text-white">Copiloto Inteligente (IA):</strong>{" "}
                Asistente basado en modelos matemáticos que analiza evidencia
                histórica, calcula el Score del vehículo, proyecta
                mantenimientos, estima kilometraje futuro y genera
                recomendaciones y proyecciones financieras de carácter
                referencial.
              </li>
              <li>
                <strong className="text-white">Centro de Costos:</strong>{" "}
                Registro de gastos vehiculares (combustible, peajes,
                estacionamiento, lavado, multas, trámites y otros).
              </li>
              <li>
                <strong className="text-white">
                  Exportación de Reportes (PDF / Excel):
                </strong>{" "}
                Generación de archivos exportables con los datos propios del
                Usuario.
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
                Panel operativo y financiero con Score del vehículo, alertas
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
                <strong className="text-white">Mapa de Navegación 3D:</strong>{" "}
                Motor de navegación con mapa 3D, seguimiento GPS de alta
                precisión, guía calle a calle y modo apaisado inteligente que
                opera junto con las alertas de seguridad en tiempo real.
              </li>
              <li>
                <strong className="text-white">
                  Radar de Fotopapeletas y Alertas:
                </strong>{" "}
                Sistema de alertas referenciales de ubicación de cámaras de
                velocidad y reportes comunitarios.
              </li>
              <li>
                <strong className="text-white">
                  Economía RavaGx (RavaCoins):
                </strong>{" "}
                Moneda virtual interna, donaciones P2P y retiros de ganancias.
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

          {/* 3.5 — Economía RavaGx (Donaciones P2P) */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3.5 Economía RavaGx, Donaciones y Retiros
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.1 Naturaleza de los RavaCoins (RC)
            </h3>
            <p className="mb-4">
              Los RavaCoins (&quot;RC&quot;) son una{" "}
              <strong className="text-white">moneda virtual interna</strong> de
              uso exclusivo dentro del ecosistema RavaGx. Los RC{" "}
              <strong className="text-white">NO constituyen</strong> dinero
              electrónico (Ley N° 29985), moneda de curso legal, criptoactivos,
              valores mobiliarios ni instrumentos financieros de naturaleza
              alguna. RavaGx no es una empresa de servicios de pago, emisora de
              dinero electrónico ni intermediario financiero. El modelo de los
              RC se rige por una{" "}
              <strong className="text-white">
                Economía de Donaciones Peer-to-Peer (P2P)
              </strong>
              : RavaGx no paga de forma automática por generar reportes; las
              ganancias provienen exclusivamente de los aportes voluntarios que
              otros usuarios deciden enviar.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.2 Flujo de la Billetera (3 pasos)
            </h3>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                <strong className="text-white">Recargar (Buy):</strong> El
                Usuario compra paquetes de RC con dinero real (Soles) para
                apoyar a la comunidad. Los RC adquiridos son bienes digitales
                consumibles de uso interno.
              </li>
              <li>
                <strong className="text-white">Donar (Donate):</strong> El
                Usuario gasta sus RC enviando aportes voluntarios (propinas) a
                otros conductores en agradecimiento por sus alertas y reportes
                en el mapa.
              </li>
              <li>
                <strong className="text-white">Retirar (Cash Out):</strong> Los
                conductores que reciben donaciones acumulan RC convertibles en
                ganancias reales. Al alcanzar el monto mínimo de{" "}
                <strong className="text-white">S/ 10.00</strong>, pueden
                solicitar el retiro directo a su billetera digital (Yape).
              </li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.3 Política de No Reembolso
            </h3>
            <p className="mb-4">
              La compra de paquetes de RC es{" "}
              <strong className="text-white">final y definitiva</strong>. Los RC
              adquiridos con dinero real{" "}
              <strong className="text-white">
                no son reembolsables ni están sujetos a devoluciones
              </strong>{" "}
              bajo ninguna circunstancia, salvo en los supuestos en que la ley
              aplicable lo exija de manera imperativa. Al confirmar una recarga,
              el Usuario reconoce y acepta expresamente la naturaleza no
              reembolsable de los RC.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.4 Valor Asimétrico (Compra vs. Retiro)
            </h3>
            <p className="mb-4">
              El Usuario reconoce y acepta expresamente que el ecosistema RavaGx
              opera bajo un modelo de{" "}
              <strong className="text-white">valor asimétrico</strong>, en los
              siguientes términos:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                <strong className="text-white">
                  Transferencias entre usuarios (1:1):
                </strong>{" "}
                Las donaciones de RC entre usuarios{" "}
                <strong className="text-white">
                  no están sujetas a comisiones ni deducciones
                </strong>{" "}
                de transacción. Se transfiere el 100% de los RC donados.
              </li>
              <li>
                <strong className="text-white">
                  Valor de compra distinto del valor de retiro:
                </strong>{" "}
                El precio pagado por los paquetes de RC mediante compras
                integradas (IAP) está fijado por las tiendas de aplicaciones
                (Google Play / App Store) y{" "}
                <strong className="text-white">
                  no representa ni equivale al valor de canje
                </strong>{" "}
                al momento de solicitar un retiro de ganancias a dinero
                fiduciario.
              </li>
              <li>
                <strong className="text-white">
                  Valor de Canje / Tasa de Retiro:
                </strong>{" "}
                El &quot;Valor de Canje&quot; o &quot;Tasa de Retiro&quot; es
                una métrica promocional fija determinada por RavaGx (actualmente{" "}
                <strong className="text-white">1,000 RC = S/ 1.00</strong>),
                estrictamente menor al precio de compra, y puede ser modificada
                en cualquier momento{" "}
                <strong className="text-white">sin previo aviso</strong>.
              </li>
            </ul>
            <p className="mb-4">
              Al adquirir RavaCoins, el Usuario{" "}
              <strong className="text-white">
                acepta expresamente esta asimetría de valor
              </strong>{" "}
              entre el precio de compra y el valor de retiro, y renuncia a
              cualquier reclamo derivado de dicha diferencia (spread).
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.5 Cláusula Antifraude
            </h3>
            <p className="mb-4">
              Queda{" "}
              <strong className="text-white">estrictamente prohibido</strong> el
              uso de cuentas múltiples (multi-accounting) para realizar
              autodonaciones, el lavado de RC, la colusión entre cuentas y
              cualquier mecanismo destinado a simular donaciones reales con el
              fin de generar retiros ilegítimos. RavaGx se reserva el derecho de{" "}
              <strong className="text-white">
                auditar, retener, congelar o cancelar
              </strong>{" "}
              retiros y saldos de RC sospechosos, así como de suspender las
              cuentas involucradas, sin necesidad de aviso previo y sin que ello
              genere derecho a compensación alguna a favor del infractor.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              3.5.6 Procesamiento, Tributación y Modificaciones
            </h3>
            <p>
              Los retiros están sujetos a tiempos de procesamiento, verificación
              de identidad (KYC ligero) cuando corresponda y a las políticas
              antifraude vigentes. El Usuario es el único responsable de
              proporcionar datos de billetera correctos y de cumplir las
              obligaciones tributarias derivadas de las ganancias recibidas.
              RavaGx podrá modificar los mínimos de retiro, comisiones, paquetes
              de recarga y demás condiciones del programa en cualquier momento,
              informando a través de los canales oficiales.
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
              4.3 Limitación de Responsabilidad sobre Sugerencias y RavaCore
              Analytics
            </h3>
            <p className="mb-4 font-semibold text-white">
              ESTA SECCIÓN ES DE ACEPTACIÓN OBLIGATORIA Y CONSTITUYE UN ELEMENTO
              ESENCIAL DEL ACUERDO ENTRE EL USUARIO Y RAVAGX. LÉALA CON
              ATENCIÓN.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.3.1 Naturaleza estrictamente sugerente de los outputs
              automatizados
            </h3>
            <p className="mb-4">
              El Usuario reconoce, declara y acepta de forma expresa, informada
              e irrevocable que{" "}
              <strong className="text-white">la totalidad</strong> de los
              resultados, cálculos, visualizaciones y contenidos generados por
              el motor RavaCore Analytics y por cualquier otro módulo
              automatizado de la Aplicación — incluyendo, sin carácter
              limitativo: (i) el{" "}
              <strong className="text-white">Score de salud del vehículo</strong>
              ; (ii) las{" "}
              <strong className="text-white">
                proyecciones de mantenimiento predictivo
              </strong>
              ; (iii) los{" "}
              <strong className="text-white">
                reportes financieros, resúmenes de gastos y análisis de costos
              </strong>
              ; (iv) los{" "}
              <strong className="text-white">
                insights predictivos, recomendaciones, alertas tempranas y
                sugerencias
              </strong>{" "}
              de cualquier naturaleza; y (v) los archivos exportados en
              PDF/Excel derivados de dichos datos — constituyen{" "}
              <strong className="text-white">
                estrictamente sugerencias automatizadas de carácter
                referencial, orientativo y no vinculante
              </strong>
              , generadas mediante algoritmos que procesan{" "}
              <strong className="text-white">
                única y exclusivamente la información ingresada voluntariamente
                por el propio Usuario
              </strong>{" "}
              (kilometrajes, gastos, fechas, características del vehículo y
              demás datos declarados).
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.3.2 Dependencia del input del Usuario (principio &quot;garbage
              in, garbage out&quot;)
            </h3>
            <p className="mb-4">
              La exactitud, utilidad y pertinencia de cualquier output de
              RavaCore Analytics depende íntegramente de la veracidad,
              completitud y actualidad de los datos ingresados por el Usuario.
              RavaGx no verifica, audita ni valida de forma independiente dichos
              datos. Cualquier dato incorrecto, incompleto, desactualizado u
              omitido por el Usuario invalidará total o parcialmente los
              resultados generados, sin que ello genere responsabilidad alguna
              para RavaGx.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.3.3 RavaGx NO sustituye el criterio profesional
            </h3>
            <p className="mb-4">
              RavaGx{" "}
              <strong className="text-white">
                no reemplaza, sustituye ni equivale
              </strong>{" "}
              en ningún caso: (i) al diagnóstico, inspección o mantenimiento
              realizado por un{" "}
              <strong className="text-white">
                mecánico profesional certificado
              </strong>
              ; (ii) al asesoramiento de un{" "}
              <strong className="text-white">
                contador, asesor financiero o profesional tributario
              </strong>
              ; (iii) a la consulta oficial ante entidades gubernamentales o
              aseguradoras; ni (iv) al juicio prudente y diligente del propio
              conductor. El Score de salud del vehículo es un indicador
              sintético referencial y{" "}
              <strong className="text-white">
                no constituye una certificación técnica del estado real del
                vehículo
              </strong>{" "}
              ni garantía alguna de su operatividad, seguridad o aptitud para
              circular.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.3.4 Exclusión total de responsabilidad
            </h3>
            <p className="mb-3">
              En la máxima medida permitida por la legislación aplicable,
              RavaGx Team, sus fundadores, desarrolladores, colaboradores y
              cualquier persona natural o jurídica vinculada al proyecto{" "}
              <strong className="text-white">
                NO asumen responsabilidad alguna — civil, penal,
                administrativa, contractual ni extracontractual — por daños
                directos, indirectos, incidentales, consecuentes o punitivos
              </strong>{" "}
              derivados de, o relacionados con, la confianza total o parcial
              del Usuario en los outputs de RavaCore Analytics o en cualquier
              otra sugerencia automatizada de la Aplicación, incluyendo, sin
              carácter limitativo:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-4">
              <li>
                <strong className="text-white">
                  Averías, fallas mecánicas, desperfectos o siniestros
                </strong>{" "}
                del vehículo, aun cuando el Score de salud, las proyecciones o
                las alertas no los hubieran anticipado, los hubieran minimizado
                o hubieran sugerido lo contrario.
              </li>
              <li>
                <strong className="text-white">
                  Accidentes de tránsito, lesiones personales, pérdida de vidas
                  o daños materiales
                </strong>{" "}
                de cualquier índole.
              </li>
              <li>
                <strong className="text-white">
                  Multas, papeletas, sanciones administrativas o
                  inmovilizaciones
                </strong>{" "}
                derivadas de documentos vencidos, información desactualizada o
                alertas no recibidas o no atendidas.
              </li>
              <li>
                <strong className="text-white">
                  Decisiones financieras, de compra, venta, reparación,
                  inversión o presupuesto
                </strong>{" "}
                tomadas por el Usuario en base a los reportes financieros,
                proyecciones o insights de la Aplicación.
              </li>
              <li>
                <strong className="text-white">
                  Pérdidas económicas, lucro cesante o daño emergente
                </strong>{" "}
                de cualquier naturaleza vinculados al uso o a la imposibilidad
                de uso de estas funcionalidades.
              </li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.3.5 Responsabilidad exclusiva del conductor
            </h3>
            <p className="mb-4">
              <strong className="text-white">
                La responsabilidad total, única y exclusiva por el estado
                mecánico del vehículo, su mantenimiento oportuno, la vigencia
                de su documentación legal, la conducción segura y toda decisión
                financiera u operativa recae en el conductor / Usuario.
              </strong>{" "}
              El uso de RavaGx presupone y exige que el Usuario continúe
              realizando inspecciones mecánicas profesionales periódicas,
              verificaciones documentales ante las autoridades competentes y
              una gestión financiera diligente, con total independencia de lo
              que la Aplicación muestre, sugiera o proyecte. Si el Usuario no
              está dispuesto a aceptar esta asignación de responsabilidad, debe
              abstenerse de utilizar la Aplicación.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.3.6 Copiloto Inteligente (IA)
            </h3>
            <p className="mb-4">
              Desde la versión 5.3.0, RavaGx incorpora un{" "}
              <strong className="text-white">
                Copiloto Inteligente basado en modelos matemáticos
              </strong>
              . El Copiloto: (i) analiza la evidencia histórica declarada por el
              Usuario; (ii) calcula el Score del vehículo; (iii) proyecta
              mantenimientos; (iv) estima kilometraje futuro; y (v) genera
              recomendaciones y proyecciones financieras.{" "}
              <strong className="text-white">
                Estos outputs son asistencia al usuario y no constituyen
                diagnóstico mecánico, inspección profesional, asesoramiento
                financiero ni certificación técnica.
              </strong>{" "}
              El usuario sigue siendo el único responsable del mantenimiento,
              la operatividad y la toma de decisiones sobre su vehículo.
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
              fechas de vencimiento de documentos, Score del vehículo,
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
              obligación de compensación alguna al Usuario.{" "}
              <strong className="text-white">
                RavaGx no garantiza la exactitud, vigencia ni completitud
              </strong>{" "}
              de los radares creados, mapeados o editados por la comunidad y no
              será responsable por papeletas, multas, accidentes ni perjuicios
              derivados de la confianza en dicha información. La publicación
              dolosa de radares falsos, inexistentes o maliciosamente mal
              ubicados constituye una infracción grave a estos Términos y dará
              lugar al baneo permanente de la cuenta, sin perjuicio de las
              acciones legales que correspondan.
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
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.7 Uso de la Navegación GPS
            </h3>
            <p className="mb-4">
              El servicio de navegación y mapas de RavaGx se proporciona
              únicamente como una herramienta de asistencia. Las condiciones
              reales del tráfico, la calzada y las señales de tránsito siempre
              prevalecerán sobre las indicaciones de la aplicación. El usuario
              asume toda la responsabilidad de conducir de forma segura.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.8 Alertas de Radares y Fotopapeletas
            </h3>
            <p className="mb-4">
              Las alertas de radares, controles y peligros se basan en datos
              comunitarios y bases de datos dinámicas. RavaGx no garantiza la
              exactitud, actualización o disponibilidad del 100% de los radares.
              RavaGx no se hace responsable en ningún caso por multas,
              fotopapeletas, sanciones de tránsito o accidentes que el usuario
              pueda sufrir mientras utiliza la aplicación.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              4.9 Exportación de Archivos (PDF / Excel)
            </h3>
            <p>
              Los reportes exportados en PDF y Excel son una representación de
              los datos ingresados por el propio Usuario y de los cálculos
              referenciales de la Aplicación al momento de la generación. Dichos
              archivos{" "}
              <strong className="text-white">
                no constituyen documentos contables, tributarios, periciales ni
                oficiales
              </strong>{" "}
              de ninguna naturaleza, y no son válidos como sustento ante
              autoridades, aseguradoras o terceros. La custodia, uso y difusión
              de los archivos exportados es responsabilidad exclusiva del
              Usuario.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4.10 Integridad del Historial y Ledger Declarativo
            </h2>
            <p className="mb-4">
              RavaGx utiliza un{" "}
              <strong className="text-white">historial append-only</strong>{" "}
              para proteger la trazabilidad de los datos vehiculares. Las lecturas
              del odómetro, los viajes confirmados, las correcciones y los
              reinicios de tablero forman parte de un registro auditable. Cuando
              el Usuario corrige un kilometraje, el registro anterior no se
              elimina físicamente: queda marcado como supersedido y el
              historial permanece íntegro. Este funcionamiento es normal del
              sistema, no implica una mayor exposición pública del Usuario y
              ayuda a prevenir fraudes o pérdida de información.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4.11 Predicciones y Estimaciones
            </h2>
            <p className="mb-4">
              Las proyecciones, estimaciones de kilometraje futuro,
              recomendaciones de mantenimiento y cálculos financieros generados
              por RavaGx pueden{" "}
              <strong className="text-white">
                cambiar cuando se disponga de nueva evidencia
              </strong>
              . Su precisión depende de la calidad, veracidad y actualidad de
              los datos ingresados por el Usuario. RavaGx{" "}
              <strong className="text-white">
                nunca garantiza resultados futuros
              </strong>
              ; los outputs son referenciales y deben contrastarse con el
              criterio profesional del conductor.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4.12 Actualizaciones del Algoritmo
            </h2>
            <p className="mb-4">
              Las futuras versiones de RavaGx podrán{" "}
              <strong className="text-white">
                mejorar los algoritmos de análisis
              </strong>{" "}
              sin modificar el historial declarado por el Usuario. En
              consecuencia, las recomendaciones, proyecciones y Score del
              vehículo pueden variar entre versiones como resultado de mejoras
              del sistema. El historial del Usuario seguirá siendo el mismo; lo
              que evoluciona es la forma en que se interpreta y presenta.
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
            <h3 className="mb-2 mt-6 text-lg font-semibold text-white/90">
              5.1 Veracidad de los datos declarados
            </h3>
            <p>
              El Usuario es responsable de la veracidad, completitud y
              actualidad de toda la información registrada en RavaGx. Ingresar
              datos falsos, incompletos o incorrectos puede afectar la
              precisión del Score, las recomendaciones, las proyecciones
              financieras y cualquier otro output del Copiloto Inteligente y
              RavaCore Analytics. RavaGx no verifica independientemente los
              datos ingresados ni asume responsabilidad por las consecuencias
              de datos erróneos.
            </p>
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
              fuente, algoritmos — incluyendo el motor RavaCore Analytics — y
              bases de datos son propiedad exclusiva de RavaGx Team y están
              protegidos por ley.
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
                  <li>
                    Información incorrecta de terceros o de proveedores de
                    infraestructura (Supabase, Google, Expo, RevenueCat,
                    Mapbox).
                  </li>
                  <li>Pérdida de datos fuera de su control.</li>
                  <li>Acciones de proveedores de servicios vehiculares.</li>
                  <li>Interrupciones por mantenimiento o fuerza mayor.</li>
                </ul>
              </li>
            </ul>
            <h3 className="mb-2 text-lg font-semibold text-white/90">
              8.1 Riesgos excluidos de responsabilidad
            </h3>
            <p className="mb-3">
              RavaGx no será responsable por:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>
                <strong className="text-white">Averías mecánicas</strong> o
                fallas del vehículo.
              </li>
              <li>
                <strong className="text-white">Accidentes</strong> de tránsito,
                lesiones o daños materiales.
              </li>
              <li>
                <strong className="text-white">
                  Pérdida de valor comercial
                </strong>{" "}
                del vehículo.
              </li>
              <li>
                <strong className="text-white">Decisiones económicas</strong>,
                de inversión, compra, venta o reparación.
              </li>
              <li>
                <strong className="text-white">Multas</strong>, papeletas o
                sanciones administrativas.
              </li>
              <li>
                <strong className="text-white">
                  Incumplimientos de mantenimiento
                </strong>{" "}
                por no seguir recomendaciones o alertas.
              </li>
              <li>
                <strong className="text-white">
                  Daños derivados de información incorrecta
                </strong>{" "}
                proporcionada por el Usuario o por terceros.
              </li>
            </ul>
            <p>
              La responsabilidad total de RavaGx no excederá lo pagado por el
              Usuario en los últimos 12 meses o el equivalente a 1 dólar
              estadounidense, lo que sea mayor. Esta limitación es
              complementaria y no restringe la exclusión específica establecida
              en la Sección 4.3 (Limitación de Responsabilidad sobre
              Sugerencias y RavaCore Analytics).
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
              11. Suscripciones PRO y Servicios Premium
            </h2>
            <p className="mb-4">
              RavaGx ofrece funciones básicas de forma gratuita y funciones
              Premium opcionales bajo un modelo de suscripción (PRO).
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                Las funciones Premium (ej. alertas por voz en segundo plano,
                radares nacionales, RavaCore Analytics avanzado) están sujetas
                a una suscripción de pago.
              </li>
              <li>
                Los pagos se procesan a través de las tiendas oficiales (Google
                Play / App Store). La gestión de derechos de acceso
                (entitlements) se realiza mediante la plataforma RevenueCat.
              </li>
              <li>
                Las renovaciones son automáticas salvo que se cancelen al menos
                24 horas antes del fin del ciclo de facturación vigente, desde
                la configuración de suscripciones de su tienda de aplicaciones.
              </li>
              <li>
                Los precios pueden variar según región y pueden ser modificados
                con notificación previa a través de la tienda correspondiente.
              </li>
            </ul>
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
