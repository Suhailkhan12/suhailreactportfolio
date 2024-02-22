import Header from "./features/Header/Header";
import resumeData from "../Projectdata";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header headerdata={resumeData.header} />
      <Home resumeData={resumeData} />
    </>
  );
}

export default App;
