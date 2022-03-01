import React from "react";
import glryPic1 from "../../Images/Gallery/gallery (1).jpg";
import glryPic2 from "../../Images/Gallery/gallery (2).jpg";
import glryPic3 from "../../Images/Gallery/gallery (3).jpg";
import glryPic4 from "../../Images/Gallery/gallery (4).jpg";
import glryPic5 from "../../Images/Gallery/gallery (5).jpg";
import glryPic6 from "../../Images/Gallery/gallery (6).jpg";

const Gallery = () => {
  return (
    <div className="container">
      <div className="text-center p-5 my-4 w-50 mx-auto">
        <h1 className="my-4"> Gallery of Our Clinic</h1>
        <p>
          Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo non habent claritatem insitamconsequat duis autem facilisis at
          vero eros
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-4">
          <img style={{ width: "100%" }} src={glryPic1} alt="Gallery" />
        </div>
        <div className="col-4">
          <img style={{ width: "100%" }} src={glryPic2} alt="Gallery" />
        </div>
        <div className="col-4">
          <img style={{ width: "100%" }} src={glryPic3} alt="Gallery" />
        </div>
        <div className="col-4">
          <img style={{ width: "100%" }} src={glryPic4} alt="Gallery" />
        </div>
        <div className="col-4">
          <img style={{ width: "100%" }} src={glryPic5} alt="Gallery" />
        </div>
        <div className="col-4">
          <img style={{ width: "100%" }} src={glryPic6} alt="Gallery" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
