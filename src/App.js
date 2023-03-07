import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import videosData from "./data/videos.json";
import detailsData from "./data/video-details.json";
import axios from "axios";
const apiKey = "84782a7a-00f9-4ef6-95f6-c179b567af2c";
const url = `https://project-2-api.herokuapp.com/videos:/id/?api_key=${apiKey}`;
const App = () => {
  const { id } = useParams();
  const updateVideo = (id) => {
    const clickedVideo = detailsData.find((vid) => vid.id === id);
    setSelectedVideo(clickedVideo);
  };
  axios
    .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
    .then((response) => {
      const [selectedVideo, setSelectedVideo] = useState(detailsData[0]);
    });

  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos:/${id}/?api_key=${apiKey}`
      )
      .then((response) => {
        setSelectedVideo(response.data);
      });
  }, [id]);
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
