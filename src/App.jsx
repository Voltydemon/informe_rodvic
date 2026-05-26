import './App.css'

import {
  FaShieldAlt,
  FaGavel,
  FaUserSecret,
  FaDatabase,
  FaExclamationTriangle,
  FaLock,
  FaUserCheck,
  FaBalanceScale,
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
          INFORME FORENSE DIGITAL
        </p>

        <h1>
          Ciberataque al
          <span> Ministerio de Francia</span>
        </h1>

        <p className="subtitle">
          Análisis jurídico, técnico y de protección de datos
          sobre el ataque a las bases de datos criminales francesas.
        </p>

      </header>

      <main className="grid">

        {/* RESUMEN */}

        <Section
          icon={<FaExclamationTriangle />}
          title="Resumen del Caso"
        >

          <p>
            El 12 de diciembre de 2025 el Ministerio de Francia
            sufrió un ciberataque dirigido a sus servidores de correo.
          </p>

          <p>
            Los atacantes lograron acceder a dos de las bases de datos
            más sensibles del Estado:
          </p>

          <ul>
            <li>Historiales criminales</li>
            <li>Lista de personas buscadas</li>
          </ul>

          <p>
            El gobierno reforzó medidas de seguridad mientras la
            OFAC arrestó a un sospechoso de 22 años relacionado
            con el ataque.
          </p>

        </Section>


        {/* MARCO LEGAL */}

        <Section
          icon={<FaGavel />}
          title="Ley Francesa N°88-19"
        >

          <p>
            También conocida como Ley Godfrain,
            esta normativa castiga delitos informáticos
            relacionados con accesos no autorizados,
            sabotaje y manipulación de datos.
          </p>

          <div className="mini-grid">

            <div className="mini-card">
              <h3>Artículo 323-1</h3>

              <p>
                Acceso fraudulento a sistemas automatizados.
              </p>
            </div>

            <div className="mini-card">
              <h3>Artículo 323-2</h3>

              <p>
                Obstaculización y alteración del sistema.
              </p>
            </div>

            <div className="mini-card">
              <h3>Artículo 323-3</h3>

              <p>
                Extracción y modificación ilegal de datos.
              </p>
            </div>

          </div>

        </Section>


        {/* LEY CHILENA */}

        <Section
          icon={<FaBalanceScale />}
          title="Ley 21.459 de Chile"
        >

          <p>
            Si este caso hubiera ocurrido en Chile,
            los delitos podrían tipificarse bajo
            la Ley 21.459.
          </p>

          <ul>
            <li>Acceso ilícito</li>
            <li>Exfiltración de información</li>
            <li>Obtención de credenciales</li>
            <li>Difusión de datos</li>
            <li>Uso indebido de sistemas</li>
          </ul>

          <p>
            Esta ley adapta la legislación chilena
            a estándares internacionales como el
            Convenio de Budapest.
          </p>

        </Section>


        {/* RESPONSABILIDADES */}

        <Section
          icon={<FaUserSecret />}
          title="Responsabilidades Penales"
        >

          <p>
            El principal sospechoso fue un joven
            de 22 años vinculado a grupos hackers.
          </p>

          <p>
            Según la investigación,
            el ataque fue una represalia
            por arrestos anteriores
            relacionados con ShinyHunters.
          </p>

          <div className="quote">
            “Ataque organizado contra sistemas estatales”
          </div>

        </Section>


        {/* DATOS */}

        <Section
          icon={<FaDatabase />}
          title="Protección de Datos"
        >

          <p>
            Según la Ley 19.628 de Chile,
            el Estado puede tratar datos penales,
            pero debe garantizar su seguridad.
          </p>

          <div className="mini-grid">

            <div className="mini-card">
              <h3>Acceso</h3>

              <p>
                Saber qué información posee el Estado.
              </p>
            </div>

            <div className="mini-card">
              <h3>Rectificación</h3>

              <p>
                Corregir datos incorrectos.
              </p>
            </div>

            <div className="mini-card">
              <h3>Cancelación</h3>

              <p>
                Solicitar eliminación de datos.
              </p>
            </div>

            <div className="mini-card">
              <h3>Oposición</h3>

              <p>
                Limitar ciertos tratamientos de datos.
              </p>
            </div>

          </div>

        </Section>


        {/* SEGURIDAD */}

        <Section
          icon={<FaShieldAlt />}
          title="Recomendaciones de Seguridad"
        >

          <ul>
            <li>Autenticación MFA obligatoria</li>
            <li>Arquitectura Zero Trust</li>
            <li>Principio de menor privilegio</li>
            <li>Auditorías constantes</li>
            <li>Monitoreo de credenciales filtradas</li>
          </ul>

        </Section>


        {/* REFLEXION */}

        <Section
          icon={<FaUserCheck />}
          title="Reflexión Final"
        >

          <p>
            El caso demuestra que incluso
            infraestructuras estatales críticas
            pueden verse comprometidas por
            malas prácticas de seguridad.
          </p>

          <p>
            La protección de datos ya no depende
            solo de leyes, sino también de una
            cultura sólida de ciberseguridad.
          </p>

        </Section>

      </main>
    </div>
  )
}

export default App
