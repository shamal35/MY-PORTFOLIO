import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Main description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi, I'm Shamal Theekshana
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a driven final year BIT (Hons) undergraduate at ESOFT Metro Campus, 
                specializing in Information Systems Security. My academic journey has been 
                defined by a deep fascination with the intricacies of digital defense.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I focus on areas like <span className="text-accent font-semibold">Malware Research</span> and 
                the operational dynamics of a <span className="text-accent font-semibold">Security Operations Center (SOC)</span>. 
                I am passionate about transforming complex security challenges into smart, 
                resilient solutions that protect digital assets.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Based in Colombo, Sri Lanka, I'm actively seeking internship opportunities 
                to apply my skills in real-world cybersecurity environments.
              </p>
            </motion.div>

            {/* Right column - Key points */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                What Drives Me
              </h3>
              
              <div className="space-y-4">
                {/* Education */}
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Education</h4>
                    <p className="text-gray-400 text-sm">
                      BIT (Hons) Final Year at ESOFT Metro Campus - Specializing in 
                      Information Systems Security with focus on cybersecurity R&D
                    </p>
                  </div>
                </div>

                {/* Security Interest */}
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">SOC & Malware Research</h4>
                    <p className="text-gray-400 text-sm">
                      Aspiring SOC Analyst with hands-on experience in malware analysis, 
                      threat detection, and AI-powered security solutions
                    </p>
                  </div>
                </div>

                {/* Development Passion */}
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💻</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Full Stack Development</h4>
                    <p className="text-gray-400 text-sm">
                      Building modern web applications with React, Node.js, and 
                      security-first development practices
                    </p>
                  </div>
                </div>

                {/* Career Mindset */}
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Seeking Opportunities</h4>
                    <p className="text-gray-400 text-sm">
                      Open to internships and collaborations in cybersecurity, 
                      SOC operations, and security tool development
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-8 border-t border-slate-700"
          >
            <p className="text-center text-gray-300 italic">
              "Transforming complex security challenges into smart, resilient solutions 
              that protect digital assets in an ever-evolving threat landscape."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
