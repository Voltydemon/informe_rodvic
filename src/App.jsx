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
        <span className="section-icon">{icon}</span>
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

        <h1>
          RodVic
        </h1>

        <nav>

          <a href="#resumen">Resumen</a>

          <a href="#legal">Marco Legal</a>

          <a href="#leychilena">Ley 21.459</a>

          <a href="#comparacion">Comparación</a>

          <a href="#responsabilidades">Responsabilidades</a>

          <a href="#datos">Protección de Datos</a>

          <a href="#conclusiones">Conclusiones</a>

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

          <p>
            El incidente provocó investigaciones por parte
            de organismos especializados en ciberdelincuencia.
          </p>

          <ul>
            <li>Acceso a bases de datos sensibles</li>
            <li>Compromiso de credenciales</li>
            <li>Riesgo de filtración de información</li>
            <li>Posible difusión en la dark web</li>
          </ul>

        </DocSection>


        <DocSection
          id="legal"
          icon={<FaGavel />}
          title="2. Marco Legal Francés"
        >

        <p>
  En el caso del ciberataque a las bases de datos de historiales
  criminales y personas en busca y captura, al detenido se le aplicó
  la Ley N° 88-19, también denominada “Ley Godfrain”, junto con
  los artículos 323-1 al 323-3.
</p>

<h3 className="sub-title">
  ¿Qué hace la Ley N° 88-19?
</h3>

<p>
  Esta ley realiza modificaciones al código penal francés en el ámbito
  de fraudes informáticos.
</p>

<p>
  La normativa integró los artículos 323-1 al 323-7 y penaliza
  principalmente tres tipos de fraude informático:
</p>

<ul>
  <li>Acceso fraudulento o acceso no autorizado.</li>

  <li>Alteración o destrucción de datos.</li>

  <li>Falsificación de documentos informáticos.</li>
</ul>

<p>
  En este caso, la ley es aplicada principalmente por el factor
  de acceso fraudulento a sistemas automatizados.
</p>

<h3 className="sub-title">
  Artículos aplicados en el caso
</h3>

<div className="info-box">
  <strong>Artículo 323-1:</strong>
  castiga con hasta 3 años de prisión y multas económicas
  el acceso o mantenimiento fraudulento en sistemas automatizados.
</div>

<div className="info-box">
  <strong>Artículo 323-2:</strong>
  sanciona la obstaculización o alteración del funcionamiento
  del sistema informático.
</div>

<div className="info-box">
  <strong>Artículo 323-3:</strong>
  penaliza la modificación, extracción o eliminación ilegal
  de datos dentro del sistema.
</div>

        </DocSection>


        <DocSection
          id="leychilena"
          icon={<FaBalanceScale />}
          title="3. Ley 21.459 de Chile"
        >

          <p>
            La Ley 21.459 moderniza la legislación chilena
            sobre delitos informáticos.
          </p>

          <p>
            Esta normativa adapta el marco jurídico nacional
            a estándares internacionales como el Convenio de Budapest.
          </p>

          <ul>
            <li>Acceso ilícito</li>
            <li>Obtención indebida de datos</li>
            <li>Difusión de información</li>
            <li>Interferencia de sistemas</li>
            <li>Uso indebido de dispositivos</li>
          </ul>

        </DocSection>


        <DocSection
          id="comparacion"
          icon={<FaDatabase />}
          title="4. Comparación Normativa"
        >

          <p>
            El informe compara regulaciones relacionadas
            con protección de datos y ciberseguridad.
          </p>

          <div className="info-box">
            RGPD:
            protección de datos personales y notificación de brechas.
          </div>

          <div className="info-box">
            NIS2:
            medidas obligatorias para infraestructura crítica.
          </div>

          <div className="info-box">
            ANSSI:
            supervisión y respuesta frente a incidentes.
          </div>

        </DocSection>


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
            El ataque habría sido una represalia por arrestos
            vinculados a actividades anteriores.
          </p>

        </DocSection>


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


        <DocSection
          id="conclusiones"
          icon={<FaShieldAlt />}
          title="7. Conclusiones"
        >

          <p>
            El caso demuestra la importancia de implementar
            medidas avanzadas de ciberseguridad.
          </p>

          <p>
            También evidencia que las organizaciones estatales
            continúan siendo objetivos prioritarios para atacantes.
          </p>

          <div className="quote-box">
            “La ciberseguridad depende tanto de tecnología
            como de gobernanza y cultura organizacional.”
          </div>

        </DocSection>

      </main>

    </div>
  )
}

export default App