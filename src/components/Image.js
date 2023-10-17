import React, { useEffect } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../config/api";
import Navbar from "./Navbar";

const Image = () => {
  const { user } = useParams();
  const [imgdata, setImagedata] = useState([]);
  const [t, setT] = useState(false);
  const getSpecificImage = async () => {
    try {
      const res = await api.get(`/photos/${user}`);
      console.log(res.data);
      setImagedata(res.data);
      setT(true);
    } catch (err) {
      console.log(err);
      setT(false);
    }
  };

  useEffect(() => {
    getSpecificImage();
  }, []);
  return (
    <div>
      {t && (
        <>
          <div className="container mx-auto my-5">
            <div className="flex flex-col justify-center items-center">
              <img
                src={imgdata.urls.raw}
                className="h-[800px] w-auto rounded-md"
              />
              <div className="my-3 flex justify-center w-full">
                <div className="flex gap-2">
                  <img
                    src={imgdata.urls.raw}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div>{imgdata.user.name}</div>
                    <div>@{imgdata.user.name}</div>
                  </div>
                </div>
                {/* <div>Hello</div> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Image;
