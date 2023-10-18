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
    <div className="dark:bg-gray-800">
      {t && (
        <div className="container mx-auto px-4">
          <div className="">
            <div className="flex items-center justify-center">
              <div className="flex flex-col">
                <img src={imgdata.urls.full} className="w-auto h-[800px]" />
                <div className="flex justify-between my-5">
                  <div className="flex gap-3">
                    <img
                      src={imgdata.urls.full}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="dark:text-white">{imgdata.user.name}</div>
                      <div className="dark:text-white">
                        @{imgdata.user.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="dark:text-white">
                        {imgdata.downloads} downloads
                      </div>
                    </div>
                    <div className="flex gap-2 items-center dark:text-white">
                      <i class="fa-regular fa-thumbs-up text-3xl"></i>
                      <div className="dark:text-white">{imgdata.likes}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="dark:text-white">Related Tags</div>
                  <div className="flex flex-wrap gap-3 my-3">
                    {imgdata.tags.map((tags) => (
                      <div className="dark:text-white dark:bg-gray-700 bg-gray-300 p-2 rounded-md">
                        {tags.type}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Image;
// <div>
//   <div className="container mx-auto py-5">
//     <div className="flex flex-col justify-center items-center">
//       <img
//         src={imgdata.urls.raw}
//         className="h-[800px] w-auto rounded-md"
//       />
//       <div className="my-3 flex justify-center w-full">
//         <div className="flex gap-2">
//           <img
//             src={imgdata.urls.raw}
//             className="w-10 h-10 rounded-full"
//           />

//         </div>
//         {/* <div>Hello</div> */}
//       </div>
//     </div>
//   </div>
// </div>
