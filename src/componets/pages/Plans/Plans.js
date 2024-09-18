import React from 'react';
import './Plans.css';
import { FaStar } from 'react-icons/fa'; // Star icon

// Array of course data
const courses = [
  {
    id: 1,
    title: 'Regular Member $0/month',
    description: 'Learn the basics of React JS, including components, state, and props.',
    reviews: 4.5,
    reviewCount: 123
  },
  {
    id: 2,
    title: 'Premium Member $100/month',
    description: 'Deep dive into JavaScript concepts like closures, promises, async/await, and more.',
    reviews: 4.0,
    reviewCount: 98
  },
  {
    id: 3,
    title: 'Standard Member &10/month',
    description: 'Level up your JavaScript skills by learning TypeScript and static typing.',
    reviews: 4.9,
    reviewCount: 200
  }
];

// Helper function to render star ratings
const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);
  
  return (
    <>
      {[...Array(totalStars)].map((star, index) => (
        <FaStar
          key={index}
          className="star-icon"
          color={index < filledStars ? '#ffc107' : '#e4e5e9'} // Filled vs Empty star
        />
      ))}
    </>
  );
};

// CourseCard component
const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-reviews">
        <div className="star-rating">
          {renderStars(course.reviews)}
        </div>
        <span>{course.reviews} ({course.reviewCount} reviews)</span>
      </div>
    </div>
  );
};

// Main App Component
const Plans= () => {
  return (
    <div className="app">
      <h1>Trending Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
