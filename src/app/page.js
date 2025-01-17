"use client"
import React, { useState } from 'react';
import './style.css';
import Layout from './layout.js';
import Card from './components/CardAnimal';

const Home = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (animal) => {
    setExpanded(prevState => ({
      ...prevState,
      [animal]: !prevState[animal]
    }));
  };

  return (
    <Layout>
      <section className="container">
        <div>
          <p></p>
          <img src=''></img>
        </div>
        <div className="cards">
          <Card
            bgColor="#f8d09d"
            bgColorLight="#fffff"
            textColorHover="#4C5656"
            boxShadowColor="rgba(255, 215, 97, 0.48)"
            title="Perros"
            svg={
              <svg width="71px" height="76px" viewBox="29 14 71 76" version="1.1" xmlns="https://ibb.co/5nS1kmW">
                <g fill="#D98A19">
                  <path d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"></path>
                </g>
                <g transform="translate(0.000000, 14.114286)" stroke="#FFFFFF" strokeLinecap="square">
                  <path d="M0.419998734,54.9642857 L4.70316223,54.9642857"></path>
                  <path d="M0.419998734,50.4404762 L4.70316223,50.4404762"></path>
                </g>
              </svg>
            }
            description="Los perros son leales y cariñosos, perfectos para cualquier hogar."
            imageSrc="https://i.ibb.co/DrgWLRs/perro.jpg"
          />
          <Card
            bgColor="#f8d09d"
            bgColorLight="#fffff"
            textColorHover="#4C5656"
            boxShadowColor="rgba(255, 215, 97, 0.48)"
            title="Peces"
            svg={
              <svg width="71px" height="76px" viewBox="29 14 71 76" version="1.1" xmlns="https://ibb.co/DYthXxK">
                <g fill="#D98A19">
                  <path d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"></path>
                </g>
                <g transform="translate(0.000000, 14.114286)" stroke="#FFFFFF" strokeLinecap="square">
                  <path d="M0.419998734,54.9642857 L4.70316223,54.9642857"></path>
                  <path d="M0.419998734,50.4404762 L4.70316223,50.4404762"></path>
                </g>
              </svg>
            }
            description="Los peces son mascotas tranquilas y requieren poco mantenimiento."
            imageSrc="https://i.ibb.co/mCwRF1n/pez.jpg"
          />
          <Card
            bgColor="#f8d09d"
            bgColorLight="#fffff"
            textColorHover="#4C5656"
            boxShadowColor="rgba(255, 215, 97, 0.48)"
            title="Gatos"
            svg={
              <svg width="71px" height="76px" viewBox="29 14 71 76" version="1.1" xmlns="https://ibb.co/26YNF2K">
                <g fill="#D98A19">
                  <path d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"></path>
                </g>
                <g transform="translate(0.000000, 14.114286)" stroke="#FFFFFF" strokeLinecap="square">
                  <path d="M0.419998734,54.9642857 L4.70316223,54.9642857"></path>
                  <path d="M0.419998734,50.4404762 L4.70316223,50.4404762"></path>
                </g>
              </svg>
            }
            description="Los gatos son independientes y elegantes, perfectos para la vida moderna."
            imageSrc="https://i.ibb.co/HKn7JgL/gato.jpg"
          />
          <Card
            bgColor="#f8d09d"
            bgColorLight="#fffff"
            textColorHover="#4C5656"
            boxShadowColor="rgba(255, 215, 97, 0.48)"
            title="Conejos"
            svg={
              <svg width="71px" height="76px" viewBox="29 14 71 76" version="1.1" xmlns="https://ibb.co/mJP0mkD">
                <g fill="#D98A19">
                  <path d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"></path>
                </g>
                <g transform="translate(0.000000, 14.114286)" stroke="#FFFFFF" strokeLinecap="square">
                  <path d="M0.419998734,54.9642857 L4.70316223,54.9642857"></path>
                  <path d="M0.419998734,50.4404762 L4.70316223,50.4404762"></path>
                </g>
              </svg>
            }
            description="Los conejos son adorables y juguetones, ideales para niños."
            imageSrc="https://i.ibb.co/MMgtJGR/conejo.jpg"
          />
          <Card
            bgColor="#f8d09d"
            bgColorLight="#fffff"
            textColorHover="#4C5656"
            boxShadowColor="rgba(255, 215, 97, 0.48)"
            title="Hamsters"
            svg={
              <svg width="71px" height="76px" viewBox="29 14 71 76" version="1.1" xmlns="https://ibb.co/89yymYf">
                <g fill="#D98A19">
                  <path d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"></path>
                </g>
                <g transform="translate(0.000000, 14.114286)" stroke="#FFFFFF" strokeLinecap="square">
                  <path d="M0.419998734,54.9642857 L4.70316223,54.9642857"></path>
                  <path d="M0.419998734,50.4404762 L4.70316223,50.4404762"></path>
                </g>
              </svg>
            }
            description="Los hamsters son pequeños y activos, perfectos para espacios reducidos."
            imageSrc="https://i.ibb.co/HpwwWwf/hamster.jpg"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;