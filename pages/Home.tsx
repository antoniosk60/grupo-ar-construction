
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Grupo AR | Electricidad, Telecomunicaciones y Construcción Premium</title>
        <meta name="description" content="Grupo AR ofrece servicios líderes en proyectos de electricidad de alta densidad, telecomunicaciones, remodelación de espacios e impermeabilización industrial y residencial. Cotiza tu obra hoy." />
        <meta property="og:title" content="Grupo AR | Electricidad, Telecomunicaciones y Construcción Premium" />
        <meta property="og:description" content="Servicios especializados en electricidad, telecomunicaciones, impermeabilización y remodelación residencial e industrial." />
      </Helmet>

      <section id="inicio">
        <Hero />
      </section>

      <section id="servicios" className="py-16 sm:py-24 bg-white">
        <Services />
      </section>

      <section id="proyectos" className="py-16 sm:py-24 bg-slate-50">
        <Portfolio />
      </section>

      <section id="testimonios" className="py-16 sm:py-24 bg-white">
        <Testimonials />
      </section>

      <Stats />

      <section id="contacto" className="py-16 sm:py-24 bg-white overflow-hidden">
        <Contact />
      </section>
    </>
  );
};

export default Home;
