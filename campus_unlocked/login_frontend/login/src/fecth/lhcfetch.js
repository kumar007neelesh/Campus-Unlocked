import React, { useState, useEffect } from 'react';
//import LogoutButton from './logout';
import "./fetch.css"

function LHCSlideShow() {
  const [allImage, setAllImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    getImage()
  }, [])

  function likeImage(imageId) {
    const email = localStorage.getItem("email");
    const imageIndex = allImage.findIndex(image => image._id === imageId);
    const alreadyLiked = allImage[imageIndex].likedBy.includes(email);
    if (alreadyLiked) {
      alert("You have already liked this image.");
      return;
    }
    const updatedImage = {
      ...allImage[imageIndex],
      likes: allImage[imageIndex].likes + 1,
      likedBy: [...allImage[imageIndex].likedBy, email],
    };
    const updatedImages = [
      ...allImage.slice(0, imageIndex),
      updatedImage,
      ...allImage.slice(imageIndex + 1),
    ];
    setAllImage(updatedImages);
    fetch(`http://localhost:3000/likeimagelhc/${imageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${email}`,
      },
      body: JSON.stringify({
        likedBy: updatedImage.likedBy,
        likes: updatedImage.likes,
      }),
    }).then(res => res.json()).then(data => {
      console.log(data);
    }).catch(err => console.error(err));
  }
  

  function getImage() {
    fetch("http://localhost:3000/getimagelhc", {
      method: "GET",
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      setAllImage(data.data)
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % allImage.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [allImage]);

  return (
    <>
      <div className="slideshow-container">
        {allImage.length === 0 ?
          <div className="no_img">No images uploaded yet.</div> :
          allImage.map((image, index) => (
            <div className={`slide ${index === currentSlide ? "active" : ""}`} key={image._id}>
              <div className="fetch_container">
                <img className="img_fetch" width={400} height={400} src={image.img} alt={image.name} />
              </div>
              <div className="caption">Name: {image.name}</div>
              <div className="caption_desc">Description: {image.desc}</div>
              <div className="likes">Likes: {image.likes}</div>
              {token !== null && (
                <button
                  className="like_button"
                  onClick={() => likeImage(image._id)}
                >
                  <figure>
                <img src="heart.png" className="heart"/>
                <figcaption>Like</figcaption>
                </figure>
                </button>
              )}

            </div>
          ))
        }

      </div>
    </>
  );
}

export default LHCSlideShow;
