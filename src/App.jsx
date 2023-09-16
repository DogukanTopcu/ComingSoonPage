
import React, { useState, useEffect } from "react";
import imgData from "./imgData";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';



function App() {
  const images = imgData;
  const [img, setImg] = useState(0);

  useEffect(() => {
    const lastImg = images.length - 1
    if (img < 0) {
      setImg(lastImg);
    }
    if (img > lastImg) {
      setImg(0);
    }
  }, [img, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setImg(img + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [img]);


  return (
    <div className="App">
      <div className="images">
        {
          images.map((image) => {
            let imageClass = "hidden";
            if (img === image.id) imageClass = "image";
            if (image.id === img - 1 || (img === 0 && img.id === images.length - 1)) imageClass = "imageNext";
            return (
              <img alt={image.img} src={image.img} key={image.id} className={imageClass} />
            )
          })
        }
      </div>

      <div className="content">
        <h1>Hello There</h1>
        <h2>I am Doğukan</h2>
        <p>The site will be at your service soon...</p>

        <div className="links">
          <a href="https://github.com/DogukanTopcu" target="_blank" ><GitHubIcon /></a>
          <a href="linkedin.com/in/doğukan-topçu-367b24220" target="_blank" ><LinkedInIcon /></a>
          <a href="https://www.instagram.com/dogukantopcu35/" target="_blank" ><InstagramIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
