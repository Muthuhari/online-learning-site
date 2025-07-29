import React, { useState, useRef } from 'react';
import Nav from '../Nav/Nav';
import Contacts from "../Contacts/Contacts";
import { useNavigate } from "react-router-dom";

function AllCourses() {
const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Frontend Development');
  const carouselRef = useRef(null);

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
      content: 'Deep dive into advanced concepts of web development.',
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
      content: 'Master React.js for modern web applications.',
      rating: 4.7,
      category: 'Frontend Development',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      image: '/img/img4.jpg',
      title: 'Bootstrap Framework',
      content: 'Learn responsive design with Bootstrap.',
      rating: 4.7,
      category: 'Frontend Development',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 5,
      image: '/img/img5.jpg', 
      title: 'React Unit Testing',
      content: 'Master testing in React applications.',
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

  //const filteredCourses = courses.filter(course => course.category === activeFilter);

  //const scrollLeft = () => {
  //  if (carouselRef.current) {
  //    carouselRef.current.scrollBy({
  //      left: -320, // Scroll by one card width + gap
  //      behavior: 'smooth'
  //    });
  //  }
  //};

  //const scrollRight = () => {
  //  if (carouselRef.current) {
  //    carouselRef.current.scrollBy({
  //      left: 320, // Scroll by one card width + gap
  //      behavior: 'smooth'
  //    });
  //  }
  //};

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

const [searchQuery, setSearchQuery] = useState('');
const filteredCourses = courses
  .filter(course => course.category === activeFilter)
  .filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
  <Nav />
  <section className="courses-section">
    {/* Search Box */}
  <div className="search-bar-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
  <input
    type="text"
    placeholder="Search courses..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    style={{
      padding: '10px',
      width: '300px',
      borderRadius: '15px',
      border: '1px solid #ccc',
      marginRight: '10px'
    }}
  />
  <button
    onClick={() => {}} // Optional: You can keep this button if you want form-based search
    style={{
      padding: '10px 20px',
      borderRadius: '15px',
      border: 'none',
      backgroundColor: '#0ba2a2ff',
      color: 'white',
      cursor: 'pointer'
    }}
  >
    Search
  </button>
</div>

    <div className="courses-container">
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

      {/* Courses in Grid (No Carousel) */}
      <div className="grid-container">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="course-items-card"
            onClick={() => navigate(`/courseh/${course.id}`)}
            style={{ background: course.color }}
          >
            <div className="course-content">
              <div className="course-image-container">
                <img src={course.image} alt={course.title} className="course-image" />
              </div>
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.content}</p>
                <div className="course-rating">
                  <span className="rating-text">Rating: {course.rating}</span>
                  <span className="star">★</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
  );





}

export default AllCourses;
