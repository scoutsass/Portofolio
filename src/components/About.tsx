import React from 'react';
import { Code, Server, Smartphone, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="w-full md:w-2/5">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-900 dark:text-white">
                About <span className="text-primary-600 dark:text-primary-400">Me</span>
              </h2>
              
              <div className="bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Professional portrait" 
                  className="w-full h-auto aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">John Doe</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4">
                    Full-stack Developer with 5 years of experience building web and mobile applications.
                  </p>
                  <div className="flex justify-between border-t border-dark-200 dark:border-dark-600 pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">30+</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Projects</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">15+</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="bg-white dark:bg-dark-700 rounded-lg p-6 md:p-8 shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-dark-900 dark:text-white">My Journey</h3>
              <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                I'm a passionate full-stack developer with a focus on creating beautiful, functional, and user-friendly applications. 
                My journey in tech began when I wrote my first line of code at 15, and I've been hooked ever since.
              </p>
              <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                After completing my Computer Science degree, I worked with several startups and established companies, 
                helping them build scalable applications and implement efficient development workflows.
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I'm driven by the challenge of solving complex problems and creating digital experiences that make a positive impact.
                When I'm not coding, you'll find me hiking, reading science fiction, or experimenting with new technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Frontend</h3>
                </div>
                <p className="text-dark-600 dark:text-dark-300">
                  I love creating responsive, intuitive interfaces that provide exceptional user experiences using modern frameworks and libraries.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400 mr-4">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Backend</h3>
                </div>
                <p className="text-dark-600 dark:text-dark-300">
                  I build robust, scalable backend systems and APIs that power applications and handle complex business logic effectively.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg text-accent-600 dark:text-accent-400 mr-4">
                    <Smartphone size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Mobile</h3>
                </div>
                <p className="text-dark-600 dark:text-dark-300">
                  I develop cross-platform mobile apps that provide native-like experiences while maintaining a single codebase for efficiency.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Web Services</h3>
                </div>
                <p className="text-dark-600 dark:text-dark-300">
                  I integrate and configure cloud services, databases, and third-party APIs to create complete, interconnected systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;