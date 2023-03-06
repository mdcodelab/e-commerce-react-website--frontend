import React from 'react';

function ProductImages({images=[{url:""}]}) {
    const[main, setMain]=React.useState(images[0])
    

      React.useEffect(() => {
        console.log(main);
      }, [images])
       
  return (
    <div className="gallery-container">
    <img src={main.url} alt="main image" className="main-gallery-image"></img>
    <div className="gallery">
        {images.map((image, index) => {
            return <img src={image.url} key={index} alt={image.filename} 
            onClick={()=> setMain(images[index])} 

            className={image.url === main.url ? "active gallery-image" : "gallery-image"}></img>
        })}
    </div>
      
    </div>
  );
}

export default ProductImages;
