import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import "./Services.css"; // Import the custom CSS file

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-[#0A0025] text-white py-8 px-5">
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-10">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Development Card */}
        <div
          className={`max-w-sm mx-auto bg-white text-gray-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-transform duration-1000 ease-in-out ${
            isVisible ? 'slide-in' : ''
          }`}
        >
          <div className="p-5 text-center">
            <FontAwesomeIcon icon={faDesktop} size="3x" className="text-blue-700 mb-4" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Frontend Development</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We create beautiful and responsive user interfaces with modern technologies like React, Vue, and Angular, ensuring a smooth and interactive user experience.
            </p>
          </div>
        </div>

        {/* Backend Development Card */}
        <div
          className={`max-w-sm mx-auto bg-white text-gray-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-transform duration-1000 ease-in-out ${
            isVisible ? 'slide-in' : ''
          }`}
        >
          <div className="p-5 text-center">
            <FontAwesomeIcon icon={faServer} size="3x" className="text-blue-700 mb-4" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Backend Development</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our backend services provide powerful, secure, and scalable architectures using Node.js, Express, and databases like MongoDB and SQL, ensuring efficient data management and API integration.
            </p>
          </div>
        </div>

        {/* Mobile Development Card */}
        <div
          className={`max-w-sm mx-auto bg-white text-gray-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-transform duration-1000 ease-in-out ${
            isVisible ? 'slide-in' : ''
          }`}
        >
          <div className="p-5 text-center">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-blue-700 mb-4" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Mobile Development</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We build high-performance mobile apps for iOS and Android platforms using Flutter and React Native, delivering seamless experiences across all devices.
            </p>
          </div>
        </div>
      </div>

      {/* Explore My Skills Button */}
      <div className="text-center mt-10">
        <a
          href="/skills"
          className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-blue-600 transition duration-300"
        >
          Explore My Skills
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Services;
