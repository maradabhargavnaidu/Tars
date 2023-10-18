import { useState, useEffect } from "react";
import api from "../config/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const Navigate = useNavigate();

  const getImages = async () => {
    try {
      const res = await api.get(`/photos/`);
      setImages(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getImages();
  }, []);

  const searchPhoto = async (q) => {
    if (q.length === 0) return getImages();

    try {
      const res = await api.get("search/photos", {
        params: {
          query: q,
        },
      });
      setImages(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const openImage = (id) => {
    Navigate(`${id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPhoto(query);
    }
  };

  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="header flex flex-col justify-center items-center gap-5 dark:bg-gray-800">
        <h1 className="font-bold sm:text-3xl md:text-4xl">
          Download High Quality Images by creators
        </h1>
        <input
          type="text"
          placeholder="Search High Resolution Images,categories,wallpapers"
          className="search_box sm:m-10 md:m-0"
          required
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="container mx-auto">
        <div className="image-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex flex-col"
              onClick={() => openImage(image.id)}
            >
              <img
                src={image.urls.small}
                className="h-[400px]"
                alt={image.alt_description}
              />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4 mt-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={image.user.profile_image.medium}
                    alt=""
                  />
                  <div className="font-medium">
                    <div className="dark:text-white">
                      {image.user.first_name} {image.user.last_name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      @{image.user.username}
                    </div>
                  </div>
                </div>
                <div className="mr-6 text-gray-500 flex flex-row space-x-2">
                  <i class="fa-regular fa-thumbs-up text-xl dark:text-white"></i>
                  <p className="dark:text-white">{image.likes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
