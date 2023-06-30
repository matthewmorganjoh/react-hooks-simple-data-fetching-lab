// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching dog image:", error);
        setIsLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
