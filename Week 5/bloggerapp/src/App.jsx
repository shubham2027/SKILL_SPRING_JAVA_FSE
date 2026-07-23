import React, { useState } from 'react';
import './App.css';

// Mock datasets matching the screenshot details
const courseData = [
  { id: 1, cname: 'Angular', startdate: '4/5/2021' },
  { id: 2, cname: 'React', startdate: '6/3/20201' },
];

const bookData = [
  { id: 1, bname: 'Master React', price: 670 },
  { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 3, bname: 'Mongo Essentials', price: 450 },
];

const blogData = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', desc: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', desc: 'You can install React from npm.' },
];

// Component 1: Course Details
function CourseDetails(props) {
  // Method: Conditional Rendering using Element Variables
  const coursedet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {props.courses.map((course) => (
        <div key={course.id} style={{ marginBottom: '20px' }}>
          <h3>{course.cname}</h3>
          <p>{course.startdate}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="details-column">
      <h2>Course Details</h2>
      <br />
      {coursedet}
    </div>
  );
}

// Component 2: Book Details
function BookDetails(props) {
  // Method: Conditional Rendering using Element Variables (from the hint image)
  const bookdet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {props.books.map((book) => (
        <div key={book.id} style={{ marginBottom: '20px' }}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="details-column">
      <h2>Book Details</h2>
      <br />
      {bookdet}
    </div>
  );
}

// Component 3: Blog Details
function BlogDetails(props) {
  // Method: Conditional Rendering using Element Variables
  const blogdet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {props.blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: '20px' }}>
          <h3>{blog.title}</h3>
          <br />
          <h4>{blog.author}</h4>
          <br />
          <p>{blog.desc}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="details-column">
      <h2>Blog Details</h2>
      <br />
      {blogdet}
    </div>
  );
}

function App() {
  // State variables for different Conditional Rendering demonstrations
  const [renderMode, setRenderMode] = useState('all'); // switch-case/if-else mode
  const [showAllTernary, setShowAllTernary] = useState(true); // Ternary mode
  const [showCoursesAnd, setShowCoursesAnd] = useState(true); // Logical AND mode
  const [showBooksAnd, setShowBooksAnd] = useState(true); // Logical AND mode
  const [showBlogsAnd, setShowBlogsAnd] = useState(true); // Logical AND mode

  // 1. If-Else / Switch Conditional Rendering method
  const renderSelectedSection = () => {
    if (renderMode === 'courses') {
      return <CourseDetails courses={courseData} />;
    } else if (renderMode === 'books') {
      return <BookDetails books={bookData} />;
    } else if (renderMode === 'blogs') {
      return <BlogDetails blogs={blogData} />;
    } else {
      // Default: render all three in columns separated by borders
      return (
        <div className="details-container">
          <CourseDetails courses={courseData} />
          <BookDetails books={bookData} />
          <BlogDetails blogs={blogData} />
        </div>
      );
    }
  };

  // 2. Element Variable Conditional Rendering method
  let andModeContent = (
    <div className="details-container">
      {showCoursesAnd && <CourseDetails courses={courseData} />}
      {showBooksAnd && <BookDetails books={bookData} />}
      {showBlogsAnd && <BlogDetails blogs={blogData} />}
    </div>
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blogger App (Conditional Rendering Demo)</h1>
      <hr />
      
      {/* Configuration panel to switch rendering modes */}
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>Conditional Rendering Controls:</h3>
        <br />
        
        {/* Control for If-Else / Switch method */}
        <div style={{ marginBottom: '10px' }}>
          <label><strong>1. If-Else / Dropdown Select: </strong></label>
          <select value={renderMode} onChange={(e) => setRenderMode(e.target.value)}>
            <option value="all">Show All Columns (with Green Borders)</option>
            <option value="courses">Show Courses Only</option>
            <option value="books">Show Books Only</option>
            <option value="blogs">Show Blogs Only</option>
          </select>
        </div>

        {/* Control for Ternary Operator method */}
        <div style={{ marginBottom: '10px' }}>
          <label><strong>2. Ternary Operator: </strong></label>
          <button onClick={() => setShowAllTernary(!showAllTernary)}>
            {showAllTernary ? 'Hide Columns' : 'Show Columns'} (Ternary Toggle)
          </button>
        </div>

        {/* Control for Logical AND method */}
        <div>
          <label><strong>3. Logical AND (&&) Checkboxes: </strong></label>
          <input 
            type="checkbox" 
            checked={showCoursesAnd} 
            onChange={(e) => setShowCoursesAnd(e.target.checked)} 
          /> Courses &nbsp;
          <input 
            type="checkbox" 
            checked={showBooksAnd} 
            onChange={(e) => setShowBooksAnd(e.target.checked)} 
          /> Books &nbsp;
          <input 
            type="checkbox" 
            checked={showBlogsAnd} 
            onChange={(e) => setShowBlogsAnd(e.target.checked)} 
          /> Blogs
        </div>
      </div>

      <hr />
      <br />

      {/* Main Display area leveraging different conditional rendering styles */}
      
      {/* Using Ternary Operator to show/hide content */}
      {!showAllTernary ? (
        <div style={{ color: 'gray', textAlign: 'center', padding: '20px' }}>
          <h3>All Details are currently hidden (Ternary Operator example).</h3>
        </div>
      ) : (
        /* If Dropdown is set to "all", we can also demonstrate Logical AND view, otherwise show selected */
        renderMode === 'all' ? (
          <div>
            <h4 style={{ color: 'blue' }}>Displaying via Logical AND / Element Variables method:</h4>
            {andModeContent}
          </div>
        ) : (
          <div>
            <h4 style={{ color: 'blue' }}>Displaying via If-Else / Dropdown method:</h4>
            {renderSelectedSection()}
          </div>
        )
      )}
    </div>
  );
}

export default App;
