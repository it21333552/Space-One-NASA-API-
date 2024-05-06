import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import NavBar from "./Navbar";

const apiKey = import.meta.env.VITE_NASA_API_KEY;

const Mars = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const cameras = ["CHEMCAM", "FHAZ", "MAST", "NAVCAM"];
  const fetchData = async () => {
    setLoading(true);
    try {
      const cameraData = await Promise.all(
        cameras.map(async (camera) => {
          const response = await axios.get(
           
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-5-30&camera=${camera}&api_key=${apiKey}`
          );
          return response.data.photos[0]; // Assuming each camera has at least one photo
        })
      );
      console.log(cameraData); // Log the cameraData array
      setPhotos(cameraData);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


 
  return (
    <div>
      <NavBar />
      <div
        className="pt-[72px] overflow-hidden bg-cover bg-center bg"
        style={{ backgroundColor: "black" }}
      >
        <div
          className={`container px-4 mx-auto py-0.0006 ${
            loading && "flex flex-col items-center"
          }`}
        >
          <h1 className="news__heading text-4xl mb-12 text-white font-semibold text-center">
            Mars Rover Images
          </h1>
          {loading && (
            <div className="rays flex items-center after:w-40 after:h-40 justify-center"></div>
          )}
          {!loading && (
            <div className="news flex flex-col gap-6">
              <NewsCard
                img={photos[0]?.img_src}
                earthDate={photos[0]?.earth_date}
                description={`Taken by ${photos[0]?.rover.name}`}
                name={photos[0]?.camera.full_name}
                launchDate={`Launch Date: ${photos[0]?.rover.launch_date}`}
                landingDate={`Landing Date: ${photos[0]?.rover.landing_date}`}
                missionStatus={`Mission Status: ${photos[0]?.rover.status}`}
              />
              <NewsCard
                img={photos[1]?.img_src}
                earthDate={photos[1]?.earth_date}
                description={`Taken by ${photos[1]?.rover.name}`}
                name={photos[1]?.camera.full_name}
                launchDate={`Launch Date: ${photos[1]?.rover.launch_date}`}
                landingDate={`Landing Date: ${photos[1]?.rover.landing_date}`}
                missionStatus={`Mission Status: ${photos[1]?.rover.status}`}
              />
              <NewsCard
                img={photos[2]?.img_src}
                earthDate={photos[2]?.earth_date}
                description={`Taken by ${photos[2]?.rover.name}`}
                name={photos[2]?.camera.full_name}
                launchDate={`Launch Date: ${photos[2]?.rover.launch_date}`}
                landingDate={`Landing Date: ${photos[2]?.rover.landing_date}`}
                missionStatus={`Mission Status: ${photos[2]?.rover.status}`}
              />
              <NewsCard
                img={photos[3]?.img_src}
                earthDate={photos[3]?.earth_date}
                description={`Taken by ${photos[3]?.rover.name}`}
                name={photos[3]?.camera.full_name}
                launchDate={`Launch Date: ${photos[3]?.rover.launch_date}`}
                landingDate={`Landing Date: ${photos[3]?.rover.landing_date}`}
                missionStatus={`Mission Status: ${photos[3]?.rover.status}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mars;