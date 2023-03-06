import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import videosData from "./data/videos.json";
import detailsData from "./data/video-details.json";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(detailsData[0]);

  const updateVideo = (id) => {
    const clickedVideo = detailsData.find((vid) => vid.id === id);
    setSelectedVideo(clickedVideo);
  };
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                selectedVideo={selectedVideo}
                updateVideo={updateVideo}
                videosData={videosData}
              />
            }
          />
          <Route path="/:id" element={<HomePage />} />
          {/* <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
