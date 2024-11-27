import React, { useState, useEffect } from 'react';

function TrendingPhotosflight() {
  const [allImage, setAllImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/getimageflight")
      .then(res => res.json())
      .then(data => {
        const sortedImages = data.data.sort((a, b) => b.likes - a.likes);
        setAllImage(sortedImages.slice(0, 2));
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % allImage.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [allImage]);

  return (
    <><div className="trending_location">Flight Laboratory</div><div className="slideshow-container">
      {allImage.length === 0 ?
        <div className="trending_no_img">No images uploaded yet.</div> :
        allImage.map((image, index) => (
          <div className={`slide ${index === currentSlide ? "active" : ""}`} key={image._id}>
            <div className="trending_container">
              <img className="img_trending" width={400} height={400} src={image.img} alt={image.name} />
            </div>
            <div className="trending_caption">Name: {image.name}</div>
            <div className="trending_caption_desc">Description: {image.desc}</div>
            <div className="trending_likes">Likes: {image.likes}</div>
          </div>
        ))}
    </div></>
  );
}

export default TrendingPhotosflight;
