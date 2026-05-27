import './App.css'

import {
  FaBook,
  FaGavel,
  FaShieldAlt,
  FaDatabase,
  FaUserSecret,
  FaBalanceScale,
  FaLock,
} from 'react-icons/fa'

function DocSection({ id, icon, title, children }) {
  return (
    <section id={id} className="doc-section">

      <div className="section-title">
        <span className="section-icon">
          {icon}
        </span>

        <h2>{title}</h2>
      </div>

      <div className="section-content">
        {children}
      </div>

    </section>
  )
}

function App() {

  return (

    <div className="layout">

      <aside className="sidebar">

        <h1>RodVic</h1>

        <nav>

          <a href="#resumen">
            Resumen
          </a>

          <a href="#legal">
            Marco Legal
          </a>

          <a href="#leychilena">
            Ley 21.459
          </a>

          <a href="#comparacion">
            Comparación
          </a>

          <a href="#responsabilidades">
            Responsabilidades
          </a>

          <a href="#datos">
            Protección de Datos
          </a>

          <a href="#conclusiones">
            Conclusiones
          </a>

        </nav>

      </aside>

      <main className="content">

        <header className="hero">

          <p className="tag">
            INFORME FORENSE DIGITAL
          </p>

          <h1>
            Ciberataque al
            <span> Ministerio de Francia</span>
          </h1>

          <p className="subtitle">
            Investigación jurídica, técnica y comparativa
            sobre el ataque a bases de datos criminales.
          </p>

        </header>

        {/* RESUMEN */}

        <DocSection
          id="resumen"
          icon={<FaBook />}
          title="1. Resumen del Caso"
        >

          <p>
        El dia 12 de Diciembre del 2025, el ministerio de francia sufrio un ciberataque a sus servidores de correo electronico. 
        El ministro del interior Laurent Nuñez confirmo que durante el ataque los atacantes tuvieron acceso al a dos bases de datos 
        mas sensibles del estado los cuales fueron la base de datos de los historiales criminales (es el sistema de procesamiento 
        penal del pais) y la base de datos de la lista de personas en busca y captura. Mientras duraba la investigacion el gobierno 
        anuncio que reforzó sus medidas de seguridad y sus controles de acceso informatico hacia su personal como respuesta al 
        incidente. 5 dias despues del ataque, la oficina de Anticiberdelincuencia de Francia (OFAC) detuvieron a un joven de 22 años 
        que tenia antecedentes similares al ciberataque al ministerio.
          </p>


        </DocSection>

        {/* MARCO LEGAL */}

        <DocSection
          id="legal"
          icon={<FaGavel />}
          title="2. Marco Legal Francés"
        >

          <p>
            En el caso del Ciberataque a las bases de datos de los historiales criminales y la base de datos de la lista de personas en busca y captura, al detenbido se le aplico la Ley "N° 88-19" tambien denominada como la "Ley Godfrain" junto con sus articulos 323-1 al 323-3 
            Que hace la ley N° 88-19?
            Esta ley realiza modificaciones al codigo penal frances en el ambito de fraudes informaticos del cual se integraron a sus articulos 323-1 al 323-7 donde esta ley penaliza principalmente a 3 tipos de fraude informatico:
1. Acceso Fraudulento (acceso no autorizado).
2. Alteracion o destruccion de datos.
3. Flasificacion de documentos informaticos

En este caso la ley N° 88-19 es aplicada por el factor de acceso fraudulento.



Que hace cada articulo de la ley aplicada en el caso?
Articulo 323-1: consiste en castigar con 3 años de prision y 100.000 euros al responsable de acceso o mantenimiento en parte o en su totalidad de un sistema automatizado de tratamiento de datos de manera fraudulenta.
Y cuando se haya dado a la supresion y modificacion de los datos en el sistema o se altera el funcionamiento del sistema, la pena es de 5 años de prision y una multa 150.000 euros.

Articulo 323-2: Este Articlo castiga a los responsables de obstaculizar o distorsionar el funcionamiento de un sistema automatizado de datos personales con 5 años de carcel y 150.000 euros de multa. Pero si el delito se cometio hacia un sistema automatizado de datos personales del estado la pena aumenta a 7 años de prision y 300.000 euros en multa.

Articulo 323-3: El articulo condena la introduccion, extraccion, retencion, reproduccion, transmision, eliminacion o modificacion de los datos contenidos de un sistema de procesamiento automatizado con 5 años de prision y una multa de 150.000 euros. Se agrava la condena a 7 años y 300.000 de multa si el delito haya implicado a un sistema de tratamiento de datos personales aplicados por el estado.

Justificacion:
Se justifica el uso de estos 3 articulos dado a que el factor principal fue el ataque a dos bases de datos sensibles del gobierno las cuales son la base de datos de los historiales criminales y la base de datos de la lista de personas en busca y captura para el primer articulo, aunque no aplica la agravante dado a que no se supresiono ni se modifico los datos.
Para el segundo fue por la infiltracion fraudulenta que seria la distorsion del funcionamiento y al ser un sistema automatizado del estado de francia se aplica la agravante.
Y en el tercer articulo tambien se justifica por la introduccion y por reproducir datos sensibles del estado y esto aplica tambien la agravante.
          </p>

        </DocSection>

        {/* LEY CHILENA */}

        <DocSection
          id="leychilena"
          icon={<FaBalanceScale />}
          title="3. Ley 21.459 de Chile"
        >

          <p>
            Tipificación de los delitos según la Ley 21.459.

Que es la ley 21.459?
Es una ley en chile que fue promulgada en junio del 2022 con el fin de establecer normas ante los delitos informaticos para reemplazar la ley N°19.223 que corresponde a la antigua ley de delitos informaticos con el fin de adaptarse a los estandares del convenio de Budapest.

Tipificacion de los delitos segun la ley 21.459 de Chile.
En este caso se va tificar los delitos que fue juzgado el detenido con la ley 21.459 de chile, por lo tanto estos serian los delitos que habria cometido el imputado si fuera en chile en base a los siguientes articulos:

1. Articulo 2 de la Ley 21.459: Acceso ilicito
Cita del articulo: El que, sin autorización o excediendo la autorización que posea y superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema informático será castigado con la pena de presidio menor en su grado mínimo o multa de once a veinte unidades tributarias mensuales.
    Si el acceso fuere realizado con el ánimo de apoderarse o usar la información contenida en el sistema informático, se aplicará la pena de presidio menor en sus grados mínimo a medio. Igual pena se aplicará a quien divulgue la información a la cual se accedió de manera ilícita, si no fuese obtenida por éste.
    En caso de ser una misma persona la que hubiere obtenido y divulgado la información, se aplicará la pena de presidio menor en sus grados medio a máximo.
    No será objeto de sanción penal por haber incurrido en los hechos tipificados en el inciso primero, el que habiendo accedido a un sistema informático cuyo responsable tenga domicilio en Chile, lo hiciera cumpliendo con las siguientes condiciones:

     4. Que el acceso no haya sido realizado con el ánimo de apoderarse o de usar la información contenida en el sistema informático, ni con intención fraudulenta. Tampoco podrá haber actuado más allá de lo que era necesario para comprobar la existencia de una vulnerabilidad, ni habrá utilizado métodos que pudieran conducir a denegación de servicio, a pruebas físicas, utilización de código malicioso, ingeniería social y alteración, eliminación, exfiltración o destrucción de datos.

      6. Que se trate de un acceso a un sistema informático de los organismos de la Administración del Estado. En el resto de los casos, requerirá del consentimiento del responsable del sistema informático.

2.  Artículo 8º.- Abuso de los dispositivos. El que para la perpetración de los delitos previstos en los artículos 1° a 4° de esta ley o de las conductas señaladas en el artículo 7° de la ley N° 20.009, entregare u obtuviere para su utilización, importare, difundiera o realizare otra forma de puesta a disposición uno o más dispositivos, programas computacionales, contraseñas, códigos de seguridad o de acceso u otros datos similares, creados o adaptados principalmente para la perpetración de dichos delitos, será sancionado con la pena de presidio menor en su grado mínimo y multa de cinco a diez unidades tributarias mensuales.

Mapeo de las acciones del imputado.

1. Obtención de Credenciales: Consiguió las contraseñas y accesos de los correos profesionales de los funcionarios públicos (mediante filtraciones previas o ingeniería social).
tipificacion precisa: Artículo 8° (Abuso de los dispositivos)

2. Intrusión Inicial: Inició sesión sin autorización en las cuentas de correo electrónico del Ministerio.
tipificacion precisa: Artículo 2° (Acceso ilícito)

3. Salto a Bases de Datos del Estado: Usó esos correos para burlar las barreras de seguridad e ingresar a las aplicaciones internas de la policía (las bases de datos TAJ y FPR).
tipificacion precisa: Agrabante del articulo 2°

4. Exfiltración de Información: Consultó y descargó (robó) 72 fichas criminales del TAJ y las 23 órdenes de captura del FPR.
tipificacion precisa: Artículo 2° y Artículo 6° (Acceso ilícito con obtención + Receptación)

5. Exposición en la Dark Web: Subió la evidencia del hackeo a BreachForums, publicitando el ataque y coordinándose con un grupo cibercriminal.
tipificacion precisa: Artículo 6° (Receptación de datos informáticos)
          </p>

        </DocSection>

        {/* COMPARACIÓN */}

        <DocSection
          id="comparacion"
          icon={<FaDatabase />}
          title="4. Comparación Normativa"
        >

          <p>En este caso se va a realizar una tabla en donde se encuentran 3 marcos comparativos con 3 ejes y aplicidad al caso que se ha investigado



Marco Normativo	1
RGPD (Reglamento General de Protección de Datos de la UE)

Eje 1: Sujeto Regulado	
El Ministerio del Interior, actuando como responsable del tratamiento de los datos de los ciudadanos

Eje 2: Jurisdicción y/o Alcance	
Toda la Unión Europea (aplica a cualquier entidad que maneje datos de residentes de la UE).

Eje 3: Sanciones y/o Consecuencias	
Amonestaciones públicas, auditorías vinculantes y multas (aunque en organismos públicos de Francia se priorizan las llamadas de atención y planes de subsanación urgentes).

Aplicabilidad al Caso
Plena. Las bases de datos afectadas (TAJ y FPR) contienen datos personales masivos. El Ministerio tuvo la obligación legal de notificar la brecha a la CNIL (regulador francés) en un plazo máximo de 72 horas.



Marco Normativo	2
Normativa de Ciberseguridad de la UE

Eje 1: Sujeto Regulado	
Entidades esenciales, lo que incluye explícitamente a los ministerios y la administración pública central.

Eje 2: Jurisdicción y/o Alcance	
Toda la Unión Europea, implementada a través de las agencias nacionales de seguridad (como la ANSSI en Francia).

Eje 3: Sanciones y/o Consecuencias	
Sanciones de supervisión, auditorías obligatorias y responsabilidades directas a los directivos/jefes de servicio por falta de gobernanza en seguridad.

Aplicabilidad al Caso
Directa. NIS 2 exige niveles estrictos de gestión de riesgos y "limpieza" técnica. El hecho de que el ataque tuviera éxito por fallas de "higiene digital" implica que el Ministerio no cumplió con los estándares exigidos por esta directiva, forzando la intervención de la ANSSI.



Marco Normativo	3
Código Penal Francés (Sección de delitos informáticos)

Eje 1: Sujeto Regulado	
Los ciberdelincuentes (en este caso, los actores detrás de BreachForums) que perpetraron el ataque.

Eje 2: Jurisdicción y/o Alcance	
Territorio de la República Francesa (delitos cometidos dentro del país o contra sistemas del Estado francés).

Eje 3: Sanciones y/o Consecuencias	
Penas de prisión (de 3 a 7 años si el ataque afecta a sistemas estatales críticos) y multas económicas individuales severas.

Aplicabilidad al Caso
Base de la persecución penal. Este es el marco que permite a la Fiscalía de París abrir la investigación judicial. No regula al Ministerio por su descuido, sino que persigue criminalmente a los atacantes por el acceso ilícito y la extracción de datos.
</p>
        </DocSection>

        {/* RESPONSABILIDADES */}

        <DocSection
          id="responsabilidades"
          icon={<FaUserSecret />}
          title="5. Responsabilidades"
        >

          <p>
            En esta parte se va a tratar la investigacion de los actores que fueron identificados y cuales fueron sus responsabilidades en el caso.

Actor Identificado: joven de 22 años ( no se entrega mucha informacion dado a la actividad del caso y su relevancia) pero se sabe que el ataque fue en grupo y dicho joven ya estaba en el radar de la policia.
Responsabilidades penales: El joven fue detenido y explico que el ataque era una venganza por el arresto de unos 5 compañeros que pertenecian al grupo de hackers ShinyHunters, el detenido fue condenado por los siguientes delitos:
1. Ataque a un sistema automatizado de procesamiento de datos personales propiedad del Estado (atteinte à un système de traitement automatisé de données à caractère personnel de l'État.). 

2. Cometido por un grupo organizado (commise en bande organisée) 
          </p>


        </DocSection>

        {/* DATOS */}

        <DocSection
          id="datos"
          icon={<FaLock />}
          title="6. Protección de Datos"
        >

          <p>
            En este apartado se tratara el Tratamiento de datos segun la ley N°19.628 la distincion y los derechos ARCO

Tratamiento de datos Segun la Ley:
1. Tratamiento sin consentimiento (Art. 20°): Los organismos públicos (como las policías o ministerios de seguridad) no necesitan el permiso de los ciudadanos para recolectar y tratar sus datos penales, siempre que lo hagan exclusivamente dentro de las materias de su competencia legal (la prevención y persecución de delitos).

2. El Deber de Seguridad (Art. 11°): Tener permiso legal para manejar datos no exime al Estado de cuidarlos. La ley chilena obliga a los responsables a actuar con "debida diligencia". Como el hackeo en Francia ocurrió por la falta de medidas de seguridad básicas (no tener doble factor de autenticación en los correos), bajo la ley chilena el Estado habría infringido este artículo, arriesgando demandas por indemnización de perjuicios por daño moral y patrimonial a los afectados.

Aplicamiento de los derechos ARCO:
1. Acceso (o Información) 

Cualquier persona tiene derecho a exigir que el organismo le informe si sus datos específicos estaban en el lote de fichas exfiltradas por el hacker, qué información exacta tienen de ella y con qué propósito judicial se está almacenando.

    El límite: El Estado puede denegar el acceso si revelar esa información entorpece una investigación criminal vigente o afecta la seguridad del país.


2. Rectificación (o Modificación)

Si a raíz de la filtración el ciudadano nota que su ficha judicial contiene errores (por ejemplo, si aparece como "buscado" en el FPR pero la orden de detención ya fue revocada por un juez), tiene derecho a exigir que los datos sean corregidos o actualizados inmediatamente para cumplir con el principio de veracidad.    


3. Cancelación (o Eliminación)

Es el derecho a solicitar que se borren los datos de los registros públicos si su almacenamiento ya no cuenta con respaldo legal o si el plazo legal de conservación ya expiró (datos caducos).

    El límite: El titular no puede exigir la eliminación de sus antecedentes si estos siguen siendo necesarios por mandato legal para un proceso judicial en curso o el cumplimiento de una condena activa.
          </p>


        </DocSection>

        {/* CONCLUSIONES */}

        <DocSection
          id="conclusiones"
          icon={<FaShieldAlt />}
          title="7. Conclusiones"
        >

          <p>
            Para finalizar este informe se hara unas recomendaciones de seguridad y una reflexion sobre el caso

Recomendaciones de seguridad:
    1. Autenticación de Doble Factor (2FA/MFA) Obligatoria: Este ataque se habría detenido en seco si las cuentas de correo hubieran tenido 2FA. Una contraseña filtrada o débil no sirve de nada si el sistema exige un token físico o una app de autenticación para dar el acceso.

    2. Implementación de Arquitectura "Zero Trust" (Confianza Cero): Ningún usuario ni dispositivo debe ser de confianza por defecto, aunque esté "dentro" de la red del Ministerio. Cada acceso a bases de datos sensibles como el TAJ o FPR debe requerir una verificación de identidad estricta y constante.

    3. Principio de Menor Privilegio: Un funcionario de rango medio o administrativo no debería tener credenciales que abran las puertas de las bases de datos criminales de todo el país. El acceso debe ser quirúrgico, limitado y justificado por las funciones del puesto.

    4. Auditorías Continuas de Credenciales Filtradas: Las organizaciones deben monitorear constantemente la dark web en busca de correos corporativos expuestos en filtraciones de otros sitios web. Si un correo institucional aparece en una lista negra, su contraseña debe ser revocada de inmediato de manera automatizada o iniciar un procedimiento para inhabilitar el correo y a la vez crear un correo de reemplazo al correo comprometido.

Reflexion:
Podemos darnos cuenta que este ataque hacia dos bases de datos sensibles del propio gobierno de francia por solo "venganza" de un grupo de jovenes que quisieron tomar represarias por el arresto de sus compañeros que la tecnologia avanza tan rapido que en varios paises aun no se han adaptado al avance tecnologico de la actualidad tales como un mejor sistema de seguridad informatico pero sobre todo tener leyes que protegan los datos informaticos y actualizadas con el fin de proteger la integridad y la privacidad de los datos, aun asi chile siempre intenta mantenerse al corriente con el avance de la tecnologia ya que un caso asi es catastrofico, considerando que esto no fue con fines de vender los datos si no que fue por solo venganza. Para finalizar hay que darnos cuenta que si la tecnologia avanza muy rapido y las personas no se adaptan a tiempo, situaciones similares o peores podrian ocasionar un daño aun mas grande.
          </p>


        </DocSection>

      </main>

    </div>
  )
}

export default App