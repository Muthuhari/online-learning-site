import React from 'react';
import Nav from '../Nav/Nav';

function About() {
  return (
    <div>
      <Nav />

        {/* Page Title */}
          <div className="page-title">About Us</div>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Empowering learners around the world with accessible, high-quality education.
          </p>
       

        {/* Intro Section */}
       
           <div className="logo-about-container">
                <img src="/img/logo-regi.png" alt="Logo" />  
            
            </div>
          <div>
           <div  className="abot-topic text-center">Who We Are</div>
            <p className="abot-content">
              Our platform is designed to bridge the gap between passion and knowledge. Whether you're a student, a working professional, or a lifelong learner, we provide tools and courses that help you upskill and grow in your journey.
            </p>
          <p className="abot-content">
              With expert-led content and a community-first approach, we’re redefining how modern education is delivered.
            </p>
          </div>
      

        {/* Mission and Values */}
        <div className="mb-16">
          <div className="abot-topic text-center">Our Mission</div>
          <p className="abot-content">
            To make quality education accessible to everyone, everywhere—transforming lives through learning.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
               <div className="abot-topic text-center">Accessibility</div>
              <p className="abot-content">Courses for all skill levels and backgrounds.</p>
            </div>
            <div>
               <div className="abot-topic text-center">Community</div>
              <p className="abot-content">Learn together with peers and mentors globally.</p>
            </div>
            <div>
               <div className="abot-topic text-center">Excellence</div>
              <p className="abot-content">Top instructors. Trusted content. Measurable results.</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Join Us on the Learning Journey</h2>
          <p className="text-gray-700 mb-6">
            Start your first course today and unlock new possibilities.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Explore Courses
          </button>
        </div>
      </div>
   
  );
}

export default About;
