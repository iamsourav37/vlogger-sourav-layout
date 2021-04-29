import React from "react";

function Content(props) {
  return props.allContents.map((content) => {
    return (
      <div className="row my-3 bg-light rounded shadow" key={content.id}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-5">
          <h1 className="fs-3 text-start text-dark p-2">{content.title}</h1>
          <p
            className="fs-6"
            style={{
              textAlign: "justify",
            }}
          >
            {content.desc}
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  p-4">
          <img src={content.imgSrc} alt="img" className="img-fluid rounded" />
        </div>
      </div>
    );
  });
}

export default Content;
