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
            El 12 de diciembre de 2025 el Ministerio de Francia
            sufrió un ciberataque dirigido a sus servidores de correo.
          </p>

          <p>
            Los atacantes consiguieron acceso a sistemas críticos
            relacionados con historiales criminales y personas buscadas.
          </p>

          <ul>
            <li>Acceso a bases de datos sensibles</li>
            <li>Compromiso de credenciales</li>
            <li>Filtración de información</li>
          </ul>

        </DocSection>

        {/* MARCO LEGAL */}

        <DocSection
          id="legal"
          icon={<FaGavel />}
          title="2. Marco Legal Francés"
        >

          <p>
            Francia aplica la Ley Godfrain y los artículos
            323-1 al 323-3 del código penal.
          </p>

          <div className="info-box">
            Artículo 323-1:
            acceso fraudulento a sistemas automatizados.
          </div>

          <div className="info-box">
            Artículo 323-2:
            sabotaje o alteración de sistemas.
          </div>

          <div className="info-box">
            Artículo 323-3:
            extracción o modificación ilegal de datos.
          </div>

        </DocSection>

        {/* LEY CHILENA */}

        <DocSection
          id="leychilena"
          icon={<FaBalanceScale />}
          title="3. Ley 21.459 de Chile"
        >

          <p>
            La Ley 21.459 moderniza la legislación chilena
            sobre delitos informáticos.
          </p>

          <ul>
            <li>Acceso ilícito</li>
            <li>Obtención indebida de datos</li>
            <li>Difusión de información</li>
            <li>Interferencia de sistemas</li>
          </ul>

        </DocSection>

        {/* COMPARACIÓN */}

        <DocSection
          id="comparacion"
          icon={<FaDatabase />}
          title="4. Comparación Normativa"
        >

          <div className="info-box">
            RGPD:
            protección de datos personales.
          </div>

          <div className="info-box">
            NIS2:
            medidas obligatorias de ciberseguridad.
          </div>

          <div className="info-box">
            ANSSI:
            respuesta frente a incidentes críticos.
          </div>

        </DocSection>

        {/* RESPONSABILIDADES */}

        <DocSection
          id="responsabilidades"
          icon={<FaUserSecret />}
          title="5. Responsabilidades"
        >

          <p>
            El principal sospechoso fue un joven de 22 años
            relacionado con grupos organizados de hackers.
          </p>

          <p>
            El ataque habría sido una represalia
            por arrestos anteriores.
          </p>

        </DocSection>

        {/* DATOS */}

        <DocSection
          id="datos"
          icon={<FaLock />}
          title="6. Protección de Datos"
        >

          <p>
            La Ley 19.628 regula el tratamiento de datos personales.
          </p>

          <ul>
            <li>Derecho de acceso</li>
            <li>Derecho de rectificación</li>
            <li>Derecho de cancelación</li>
            <li>Derecho de oposición</li>
          </ul>

        </DocSection>

        {/* CONCLUSIONES */}

        <DocSection
          id="conclusiones"
          icon={<FaShieldAlt />}
          title="7. Conclusiones"
        >

          <p>
            El caso demuestra la importancia
            de implementar medidas avanzadas
            de ciberseguridad.
          </p>

          <div className="quote-box">
            “La ciberseguridad depende tanto
            de tecnología como de gobernanza.”
          </div>

        </DocSection>

      </main>

    </div>
  )
}

export default App