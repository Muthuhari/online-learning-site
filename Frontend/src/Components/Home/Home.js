import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Contacts from "../Contacts/Contacts";
import './Home.css'; 
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Frontend Development');

  const filters = [
    'Frontend Development',
    'Backend Development', 
    'Cloud Computing',
    'Business Analytics',
    'DevOps Technologies',
    'Data Science',
    'Artificial Intelligence'
  ];
    const courses = [
    {
      id: 1,
      image: '/img/img1.jpg', 
      title: 'HTML & CSS Course',
      content: 'Deep dive into advanced concepts of Cyber Security.',
      rating: 4.7,
      category: 'Frontend Development',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      image: '/img/img2.jpg',
      title: 'JavaScript Advanced',
      content: 'Deep dive into advanced concepts of JavaScript.',
      rating: 4.7,
      category: 'Frontend Development',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      image: '/img/img3.png',
      title: 'React JS FastTrack',
      content: 'Deep dive into advanced concepts of Cyber Security.',
      rating: 4.7,
      category: 'Frontend Development',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
     {
      id: 4,
      image: '/img/img4.jpg',
      title: 'Bootstrap Framework',
      content: 'Deep dive into advanced concepts of Cyber Security.',
      rating: 4.7,
      category: 'Frontend Development',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 5,
      image: '/img/img5.jpg', 
      title: 'React Unit Testing',
      content: 'Deep dive into advanced concepts of Cyber Security.',
      rating: 4.7,
      category: 'Frontend Development',
      color: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)'
    },
    {
      id: 6,
      image: '/img/img6.jpg',
      title: 'Node.js Fundamentals',
      content: 'Deep dive into advanced concepts of Node.js.',
      rating: 4.8,
      category: 'Backend Development',
      color: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)'
    },
     {
      id: 7,
      image: '/img/img7.jpg',
      title: 'Python Django',
      content: 'Master Python web development with Django.',
      rating: 4.6,
      category: 'Backend Development',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 8,
      image: '/img/img8.jpg',
      title: 'AWS Cloud Essentials',
      content: 'Learn cloud computing with AWS.',
      rating: 4.9,
      category: 'Cloud Computing',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 9,
      image: '/img/img9.jpg',
      title: 'Data Analytics with Python',
      content: 'Analyze data using Python libraries.',
      rating: 4.5,
      category: 'Data Science',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
      {
      id: 10,
      image: '/img/img10.jpg',
      title: 'Machine Learning Basics',
      content: 'Introduction to ML algorithms.',
      rating: 4.8,
      category: 'Artificial Intelligence',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
  ];
   const filteredCourses = courses.filter(course => course.category === activeFilter);
// Feedback Carousel Functionality
class FeedbackCarousel {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 3; // Total number of testimonials
        this.feedbackCards = [];
        this.dots = [];
        
        this.init();
    }
    
    init() {
        // Get all feedback cards and dots
        this.feedbackCards = document.querySelectorAll('.feedback-card');
        this.dots = document.querySelectorAll('.feedback-dot');
        
        // Add click event listeners to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Initialize the carousel
        this.updateCarousel();
        
        // Auto-play carousel (optional)
        this.startAutoPlay();
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateCarousel();
        this.updateDots();
    }
    
    updateCarousel() {
        // Hide all cards first
        this.feedbackCards.forEach(card => {
            card.classList.remove('feedback-active', 'feedback-left', 'feedback-right');
            card.classList.add('feedback-hidden');
        });
        
        // Calculate which cards to show
        const leftIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        const centerIndex = this.currentSlide;
        const rightIndex = this.currentSlide === this.totalSlides - 1 ? 0 : this.currentSlide + 1;
        
        // Show and position the three visible cards
        if (this.feedbackCards[leftIndex]) {
            this.feedbackCards[leftIndex].classList.remove('feedback-hidden');
            this.feedbackCards[leftIndex].classList.add('feedback-left');
        }
        
        if (this.feedbackCards[centerIndex]) {
            this.feedbackCards[centerIndex].classList.remove('feedback-hidden');
            this.feedbackCards[centerIndex].classList.add('feedback-center', 'feedback-active');
        }
        
        if (this.feedbackCards[rightIndex]) {
            this.feedbackCards[rightIndex].classList.remove('feedback-hidden');
            this.feedbackCards[rightIndex].classList.add('feedback-right');
        }
    }
    
    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('feedback-dot-active');
            } else {
                dot.classList.remove('feedback-dot-active');
            }
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
        this.updateDots();
    }
    
    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.updateCarousel();
        this.updateDots();
    }
    
    startAutoPlay() {
        // Auto-advance carousel every 5 seconds
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new FeedbackCarousel();
});
  return (
    <div>
      <Nav />
      <header className="home-header">
      <div className="container-home-fluid">
        <div className="row align-items-center min-vh-100">
          <div >
            <h1 className="hero-title"> Unlock Your Potential Learn
                <span className="text-teal"> Anytime</span>
                <br />
                Achieve <span className="text-yellow">Anywhere</span>
              </h1>
          </div>
          {/* Left Content Section */}
          <div className="col-lg-5 col-md-12">
            <div className="hero-content">
              {/*<p className="hero-description">
                Unlock your potential with expert-led courses, hands-on projects, and real-time mentorship. 
                Gain in-demand skills and industry-recognized certifications to advance your career.
              </p>
              */}
              
              <p className="hero-description">
                Unlock your potential with expert-led courses, hands-on projects, and real-time mentorship. 
                Gain in-demand skills and industry-recognized certifications to advance your career.
              </p>
              
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary primary-btn"
                  onClick={() => navigate(`/coursedetails`)}
                >
                  Get Started
                  <i className="fas fa-arrow-right ms-2"></i>
                </button>
                <button className="btn btn-outline-secondary secondary-btn">
                  As a Student
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-7 col-md-12">
            <div className="hero-image-container">
              <img 
                src="/img/elearning.png" 
                alt="Student learning online with laptop and headphones" 
                className="hero-image img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
      <section className="home-features">
      {/* Statistics Section */}
      <div className="stats-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-6 mb-3">
              <div className="stat-card">
                <span className="stat-text">Courses 800+</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3">
              <div className="stat-card">
                <span className="stat-text">Instructors 80+</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3">
              <div className="stat-card">
                <span className="stat-text">Students 450K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="feature-card">
                <h3 className="feature-title">Expert Instructors</h3>
                <p className="feature-description">
                  Learn from industry professionals with years of experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="feature-card">
                <h3 className="feature-title">Interactive Learning</h3>
                <p className="feature-description">
                  Engage with multimedia-rich content, quizzes, and live sessions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="feature-card">
                <h3 className="feature-title">Flexible Schedule</h3>
                <p className="feature-description">
                  Study at your own pace with on-demand courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses by Category Title */}
      <div className="courses-section">
        <div className="container">
          <h2 className="section-title">Explore Our Courses by Category</h2>
        </div>
      </div>
    </section>
      <section className="course-section">
      <div className="container-course-fluid">
        
        {/* Filter Tabs */}
        <div className="filter-container">
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        {/* Course Cards Container */}
        <div className="course-scroll-container">
          <div className="course-container">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="course-card" 
                onClick={() => navigate(`/courseh/${course.id}`)}
                style={{ background: course.color }}
              >
                <div className="course-content">
                  {/*<img src={course.image} alt={course.title} className="course-image" />*/}
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.content}</p>
                  <div className="course-rating">
                    <span className="rating-text">Rating: {course.rating}</span>
                    <span className="star">★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
     <section>
      <div class="advantage-section">
        <div class="container-advantage-fluid">
            <h2 class="section-advantage-title">The Learning Hub Advantage</h2>
            
            <div class="image-advantage-container">
    <img src="/img/adavntage.png" alt="Student learning online with laptop and headphones" class="hero-advantageimage img-fluid" />
</div>
            
            <div class="advantages-content">
                <ul class="advantages-list">
                    <li class="advantage-item">
                        <div class="advantage-icon"></div>
                        <span class="advantage-text">Learn from top industry professionals.</span>
                    </li>
                    <li class="advantage-item">
                        <div class="advantage-icon"></div>
                        <span class="advantage-text">Apply knowledge with real-world practice.</span>
                    </li>
                    <li class="advantage-item">
                        <div class="advantage-icon"></div>
                        <span class="advantage-text">Study anytime, anywhere, at your pace.</span>
                    </li>
                    <li class="advantage-item">
                        <div class="advantage-icon"></div>
                        <span class="advantage-text">Get direct guidance from experts.</span>
                    </li>
                    <li class="advantage-item">
                        <div class="advantage-icon"></div>
                        <span class="advantage-text">Boost your career with verified credentials.</span>
                    </li>
                    <li class="advantage-item">
                        <div class="advantage-icon"></div>
                        <span class="advantage-text">Connect, collaborate, and grow with peers.</span>
                    </li>
                </ul>
                <a href="#" class="cta-button">Start Learning</a>
            </div>
        </div>
    </div>
     </section>
      <section>
    <div class="feedback-section">
        <div class="container-feedback-fluid">
            <h2 class="section-feedback-title">What Our Clients Say About Us</h2>
            
            <div class="feedback-carousel-container">
                {/*Left testimonial */}
                <div class="feedback-card feedback-left">
                    <div class="feedback-profile">
                        <img src="/img/client1.jpg" alt="John Doe" class="feedback-avatar"/>
                        <div class="feedback-info">
                            <h4 class="feedback-name">John Doe</h4>
                            <p class="feedback-role">Product Manager</p>
                        </div>
                    </div>
                    <div class="feedback-quote-icon">"</div>
                    <p class="feedback-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                </div>

                {/*<!-- Center testimonial (active) -->*/}
                <div class="feedback-card feedback-center feedback-active">
                    <div class="feedback-profile">
                        <img src="/img/client2.jpg" alt="Hannah Schmitt" class="feedback-avatar"/>
                        <div class="feedback-info">
                            <h4 class="feedback-name">Hannah Schmitt</h4>
                            <p class="feedback-role">Lead designer</p>
                        </div>
                    </div>
                    <div class="feedback-quote-icon">"</div>
                    <p class="feedback-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                </div>

                {/*<!-- Right testimonial -->*/}
                <div class="feedback-card feedback-right">
                    <div class="feedback-profile">
                       <img src="/img/client3.jpg" alt="Hannah Schmitt" className="feedback-avatar" />
                        <div class="feedback-info">
                            <h4 class="feedback-name">Sarah Wilson</h4>
                            <p class="feedback-role">Marketing Director</p>
                        </div>
                    </div>
                    <div class="feedback-quote-icon">"</div>
                    <p class="feedback-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                </div>

                {/*<!-- Hidden testimonials for carousel -->*/}
              
            </div>

            {/*<!-- Navigation dots -->*/}
            <div class="feedback-dots-container">
                <button class="feedback-dot feedback-dot-active" data-slide="0"></button>
                <button class="feedback-dot" data-slide="1"></button>
                <button class="feedback-dot" data-slide="2"></button>
            </div>
        </div>
    </div>
</section>


      <Contacts />
    </div>
  );





}

export default Home;
