// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import NotFound from "./components/NotFound";
// import SingleCoursePage from "./components/SingleCoursePage";
// import AllCoursesPage from "./components/AllCoursesPage";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <div className="container">
//         <Routes>
//           <Route path="/courses/:id" element={<SingleCoursePage />} />
//           <Route exact path="/courses" element={<AllCoursesPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import AllCoursesPage from "./components/AllCoursesPage";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <AllCoursesPage />
        {/* <Routes> */}
        {/* <Route path="/courses/:id" element={<SingleCoursePage />} /> */}
        {/* <Route exact path="/courses" element={<AllCourseskat />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </div>
    </>
  );
};

export default App;
