// app/components/Services.tsx
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2>Nuestros Servicios</h2>
      <div>
        <h3>Entrenamiento Personalizado</h3>
        <p>Diseñado para alcanzar tus objetivos específicos.</p>
      </div>
      <div>
        <h3>Clases Grupales</h3>
        <p>Motivación y apoyo en un ambiente grupal.</p>
      </div>
      <div>
        <h3>Plan Nutricional</h3>
        <p>Asesoramiento para mejorar tu alimentación.</p>
      </div>
    </section>
  );
}
