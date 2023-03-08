import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import axios from "axios";

const App = () => {
  const apiKey = "84782a7a-00f9-4ef6-95f6-c179b567af2c";

  async function getVideoListData() {
    try {
      const videoUrl = `https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`;
      const response = await axios.get(videoUrl + apiKey);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getVideoDetailsData(id) {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}/?api_key=` + apiKey
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  // const updateVideo = (id) => {
  //   const clickedVideo = detailsData.find((vid) => vid.id === id);
  //   setSelectedVideo(clickedVideo);
  // };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                getVideoDetailsData={getVideoDetailsData}
                getVideoListData={getVideoListData}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <HomePage
                getVideoDetailsData={getVideoDetailsData}
                getVideoListData={getVideoListData}
              />
            }
          />
          <Route path="/upload" element={<UploadPage />} />
          {/* <Route path="*" element={<ErrorPage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
