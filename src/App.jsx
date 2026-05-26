import './App.css'

import {
  FaBook,
  FaShieldAlt,
  FaDatabase,
  FaGavel,
  FaUserSecret,
  FaBalanceScale,
  FaLock,
  FaCheckCircle,
} from 'react-icons/fa'

function Section({ icon, title, children }) {
  return (
    <section className="card">

      <div className="card-header">
        <div className="icon">{icon}</div>

        <h2>{title}</h2>
      </div>

      <div className="card-content">
        {children}
      </div>

    </section>
  )
}

function App() {
  return (
    <div className="app">

      <div className="background-glow"></div>

      <header className="hero">

        <p className="tag">
          INFORME JURÍDICO Y FORENSE DIGITAL
        </p>

        <h1>
          Ciberataque al
          <span> Ministerio de Francia</span>
        </h1>

        <p className="subtitle">
          Investigación jurídica, técnica y comparativa
          sobre el ataque a las bases de datos criminales francesas.
        </p>

      </header>

      <main className="grid">

        {/* RESUMEN */}

        <Section
          icon={<FaBook />}
          title="1. Resumen del Caso"
        >

          <p>
            El 12 de diciembre de 2025 el Ministerio de Francia sufrió
            un ciberataque dirigido a sus servidores de correo electrónico.
          </p>

          <p>
            Durante el ataque los atacantes consiguieron acceso a dos
            de las bases de datos más sensibles del Estado:
          </p>

          <ul>
            <li>Sistema de historiales criminales</li>
            <li>Base de datos de personas buscadas</li>
          </ul>

          <p>
            Mientras la investigación se desarrollaba, el gobierno francés
            reforzó sus medidas de seguridad y controles de acceso.
          </p>

          <p>
            Cinco días después, la Oficina de Anticiberdelincuencia
            de Francia (OFAC) detuvo a un joven de 22 años relacionado
            con el incidente.
          </p>

        </Section>


        {/* MARCO LEGAL */}

        <Section
          icon={<FaGavel />}
          title="2. Marco Legal Francés"
        >

          <p>
            Al detenido se le aplicó la Ley N°88-19,
            también conocida como Ley Godfrain,
            junto con los artículos 323-1 al 323-3.
          </p>

          <p>
            Esta ley modifica el código penal francés
            en el ámbito de fraudes informáticos.
          </p>

          <div className="mini-grid">

            <div className="mini-card">
              <h3>Acceso Fraudulento</h3>

              <p>
                Acceso no autorizado a sistemas informáticos.
              </p>
            </div>

            <div className="mini-card">
              <h3>Alteración de Datos</h3>

              <p>
                Destrucción, modificación o sabotaje de información.
              </p>
            </div>

            <div className="mini-card">
              <h3>Falsificación Informática</h3>

              <p>
                Manipulación y falsificación de documentos digitales.
              </p>
            </div>

          </div>

          <div className="quote">
            Artículo 323-1: castiga el acceso fraudulento
            a sistemas automatizados con penas de prisión
            y multas económicas.
          </div>

        </Section>


        {/* LEY CHILENA */}

        <Section
          icon={<FaBalanceScale />}
          title="3. Ley 21.459 de Chile"
        >

          <p>
            La Ley 21.459 fue promulgada en Chile en 2022
            para modernizar la legislación sobre delitos informáticos.
          </p>

          <p>
            Esta normativa reemplazó la antigua Ley 19.223
            y adapta la legislación chilena al Convenio de Budapest.
          </p>

          <h3 className="sub-title">
            Tipificación posible del caso
          </h3>

          <ul>
            <li>Acceso ilícito</li>

            <li>Obtención indebida de información</li>

            <li>Divulgación de datos</li>

            <li>Uso malicioso de sistemas</li>

            <li>Violación de medidas de seguridad</li>
          </ul>

        </Section>


        {/* COMPARACION */}

        <Section
          icon={<FaDatabase />}
          title="4. Comparación Normativa"
        >

          <p>
            El informe compara distintos marcos regulatorios
            aplicables al caso investigado.
          </p>

          <div className="mini-grid">

            <div className="mini-card">
              <h3>RGPD</h3>

              <p>
                Obligación de proteger datos personales
                y notificar brechas de seguridad.
              </p>
            </div>

            <div className="mini-card">
              <h3>NIS 2</h3>

              <p>
                Exige medidas estrictas de ciberseguridad
                en organismos esenciales del Estado.
              </p>
            </div>

            <div className="mini-card">
              <h3>ANSSI</h3>

              <p>
                Agencia francesa encargada de supervisar
                incidentes críticos de seguridad.
              </p>
            </div>

          </div>

          <p>
            El caso demuestra la importancia de la gobernanza,
            auditorías y protección de infraestructura crítica.
          </p>

        </Section>


        {/* RESPONSABILIDADES */}

        <Section
          icon={<FaUserSecret />}
          title="5. Responsabilidades"
        >

          <p>
            El principal sospechoso fue un joven de 22 años
            vinculado a grupos de hackers organizados.
          </p>

          <p>
            Según la investigación, el ataque habría sido
            una represalia por arrestos anteriores
            relacionados con ShinyHunters.
          </p>

          <ul>
            <li>
              Ataque a sistemas automatizados del Estado
            </li>

            <li>
              Participación en grupo organizado
            </li>

            <li>
              Acceso y manipulación de información sensible
            </li>
          </ul>

        </Section>


        {/* DATOS */}

        <Section
          icon={<FaLock />}
          title="6. Tratamiento de Datos y Derechos ARCO"
        >

          <p>
            La Ley 19.628 permite a organismos públicos
            tratar datos penales dentro de sus competencias.
          </p>

          <p>
            Sin embargo, también exige medidas de seguridad
            y protección adecuadas.
          </p>

          <div className="mini-grid">

            <div className="mini-card">
              <h3>Acceso</h3>

              <p>
                Derecho a conocer qué información existe.
              </p>
            </div>

            <div className="mini-card">
              <h3>Rectificación</h3>

              <p>
                Corrección de datos incorrectos.
              </p>
            </div>

            <div className="mini-card">
              <h3>Cancelación</h3>

              <p>
                Solicitud de eliminación de datos.
              </p>
            </div>

            <div className="mini-card">
              <h3>Oposición</h3>

              <p>
                Limitar determinados tratamientos.
              </p>
            </div>

          </div>

        </Section>


        {/* CONCLUSIONES */}

        <Section
          icon={<FaShieldAlt />}
          title="7. Recomendaciones y Conclusiones"
        >

          <ul>
            <li>Autenticación MFA obligatoria</li>

            <li>Arquitectura Zero Trust</li>

            <li>Principio de menor privilegio</li>

            <li>Auditorías constantes</li>

            <li>Monitoreo de credenciales filtradas</li>
          </ul>

          <p>
            El caso demuestra que incluso sistemas críticos
            del Estado pueden verse comprometidos
            por malas prácticas de seguridad.
          </p>

          <div className="quote">
            La ciberseguridad ya no depende solamente
            de leyes, sino también de cultura,
            prevención y gobernanza tecnológica.
          </div>

        </Section>

      </main>

    </div>
  )
}

export default App
