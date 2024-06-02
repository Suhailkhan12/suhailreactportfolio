import { Routes, Route } from "react-router-dom";
import Header from "./features/Header/Header";
import Spinner from "./features/spinner/spinner.component";
// import resumeData from "../Projectdata";
import Home from "./Pages/Home";
import useResumeData from "./useResumeData";

// import { useEffect } from "react";
// import { getDataAndDocuments } from "./services/firebase/firebase.utils";

// import { addDataAndDocuments } from "./services/firebase/firebase.utils";

function App() {
  const { isLoading, Resume, errors } = useResumeData();

  console.log("Resume Data", Resume);

  if (isLoading) return <Spinner />;

  const resumeData = Resume.resume;

  // useEffect(() => {
  //   addDataAndDocuments("Resume", resumeData);
  // }, []);

  // useEffect(() => {
  //   const getReumeData = async () => {
  //     const DataMap = await getDataAndDocuments();
  //     console.log(DataMap);
  //   };

  //   getReumeData();
  // });
  return (
    <>
      <Header headerdata={resumeData.header} />
      <Routes>
        <Route path="/" element={<Home resumeData={resumeData} />} />
      </Routes>
    </>
  );
}

export default App;
