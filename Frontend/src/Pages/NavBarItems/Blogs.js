import React, { useState, useRef } from 'react';
import Nav from '../Nav/Nav';

function Blogs() {
  return (
    <div >
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
         <div className="page-title">Blog</div>

        {/* Web Service for Enterprise Section */}
        <div className="blog-container">
           <h3 >Web Service for Enterprise</h3>
          
          <div className="row">
           <div className="col-lg-6 mb-6">
          <img src="/img/blog1.png" className="blog-image" />
        </div>

            
            <div className="col-lg-6 mb-6">
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                In the modern digital era, enterprises rely heavily on interconnected systems and applications to operate efficiently, adapt to market demands, and stay competitive. One of the core enablers of this interconnectedness is the concept of web services. When scaled and customized for enterprise environments, these become enterprise web services, acting as a backbone for communication, data exchange, and business automation across large-scale organizations.
              </p>

              <ul class="list-disc pl-5 text-gray-700">
                <li>Improved system interoperability across departments</li>
                <li>Scalable and secure communication framework</li>
                <li>Automation of business workflows and processes</li>
                <li>Real-time data synchronization between systems</li>
                <li>Standardized integration with third-party services</li>
              </ul>
                      

            <div className="mt-8">
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
                  view more 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
                </button>
            </div>
              </div>
          </div>
        </div>

        {/* Digital Marketing and Transformation Section */}
        <div className="blog-container">
           <h3 >Digital marketing and transformation</h3>
          
          <div className="row">
           <div className="col-lg-6 mb-6">
          <img src="/img/blog2.png" className="blog-image" />
          </div>


            <div className="col-lg-6 mb-6">
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Reach your target audience and elevate your brand with our comprehensive digital marketing strategies and expertise. We help you navigate the ever-evolving digital landscape and achieve measurable results.
            </p> 

              <ul class="list-disc pl-5 text-gray-700">
                <li>Better targeting and segmentation</li>
                <li>Scalable marketing campaigns</li>
                <li>Enhanced tracking and analytics</li>
                <li>Faster time-to-market</li>
                <li>Competitive edge in your industry</li>
              </ul>
                      

            <div className="mt-8">
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
                  view more 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
                </button>
            </div>
              </div>
            
          
          </div>
        </div>



        {/* Digital Marketing and Transformation Section */}
        <div className="blog-container">
         <h3 >Digital marketing and transformation</h3>
          
          <div className="row">
           <div className="col-lg-6 mb-6">
          <img src="/img/blog3.png" className="blog-image" />
        </div>

            
            <div className="col-lg-6 mb-6">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Reach your target audience and elevate your brand with our comprehensive digital marketing strategies and expertise. We help you navigate the ever-evolving digital landscape and achieve measurable results.
              </p> 
           

            <div className="mt-8">
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
                  view more 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
                </button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;