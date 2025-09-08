import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

// Pages
import Home from "pages/EmployeeApp/Home/Home";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import About from "pages/EmployeeApp/About/About";

// Components
import Layout from "components/Layout/Layout";

// Lessons
// import Lesson_06 from 'lessons/Lesson_06_React_Typescript/Lesson_06';
// import Lesson_07 from 'lessons/Lesson_07_Typescript, Parent_Child components/Lesson_07';
// import Lesson_08 from "lessons/Lesson_08_React_Emotion/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09_Controlled-Uncontrolled_components,_useEffect/Lesson_09";
// import Lesson_10_my from "lessons/Lesson_10_React_useEffect Practise/my/Lesson_10";
// import Lesson_10_group from "lessons/Lesson_10_React_useEffect Practise/group/Lesson_10";
// import Lesson_11 from "lessons/Lesson_11_React_Formik,_yup/Lesson_11";

// Homeworks
// import Homework_06 from 'homeworks/Homework_06_React_Typescript/Homework_06';
// import Homework_07 from "homeworks/Homework_07_Typescript, Parent_Child components/Homework_07";
// import Homework_08 from "homeworks/Homework_08_React_Emotion/Homework_08";
// import Homework_09 from "homeworks/Homework_09_Controlled-Uncontrolled_components,_useEffect/Homework_09";
// import Homework_11 from "homeworks/Homework_11_React_Formik,_yup/Homework_11";

// Consultations
// import Consultation_03 from 'consultations/Consultation_03_map_jsx/Consultation_03';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>

      {/* lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10_my /> */}
      {/* <Lesson_10_group /> */}
      {/* <Lesson_11 /> */}

      {/* Homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_11 /> */}

      {/* Consultations */}
      {/* <Consultation_03 /> */}
    </BrowserRouter>
  );
}

export default App;
