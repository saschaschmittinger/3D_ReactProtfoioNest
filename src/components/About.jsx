import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-secondary text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Eine Webseite die aus Ihren Besuchern <br /> zahlende Kunden macht!
        </h2>
        <p className={styles.sectionSubText}>
          <span className="text-[#915eff]">Wie wir das machen?</span>
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Mit React, Three.js und Künstlicher Intelligenz erstellen wir Webseiten,
        die Besucher in zahlende Kunden verwandelt. React sorgt für eine
        schnelle, interaktive Nutzeroberfläche. Three.js fügt beeindruckende
        3D-Elemente hinzu, um die Aufmerksamkeit der User zu gewinnen.
        Künstliche Intelligenz, personalisiert Inhalte intelligent, indem es
        Persönliche Beratungsgespräche, relevante Produkte und Informationen
        vorschlägt,die auf Nutzerbedürfnisse abgestimmt sind, ähnlich wie beim
        Telefonat. Die Einsatzmöglichkeiten sind annähernt Grenzenlos.
        Schulungen, Lead-Management, Personalrekrotierung
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
