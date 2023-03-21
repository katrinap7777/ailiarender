import React, { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API_URL;

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/courses`);
      const course = await response.json();
      setCourses(course);
      console.log(course);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => {
          return (
            <li key={course.id}>
              <div>
                <div>
                  <div>
                    <div>
                      <img
                        src={course.image}
                        alt={course.description}
                        className=""
                      />
                    </div>
                  </div>
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <p>{course.price}</p>
                </div>
                <br />
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        */
        <a
          href="https://buy.stripe.com/test_28o16A5I06Zzbyo5ko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button> Enrol in courses now</button>
        </a>
      </div>
    </>
  );
};

export default AllCoursesPage;
