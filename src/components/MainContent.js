import React from "react";
import Content from "./Content";
import myContents from "./myContents.jsx";

function MainContent() {
  return (
    <div className="container-fluid my-5 ">
      <div className="container text-center">
        <div>
          <h1 className="display-5 mt-5">
            My Top <span className="text-primary">Experience</span>
          </h1>
          <hr className="w-50 m-auto" />
        </div>

        {<Content allContents={myContents} />}
      </div>
    </div>
  );
}

export default MainContent;
