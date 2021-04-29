import React from "react";
import { Switch, Route } from "react-router-dom";

import LeftSidebar from "./LeftSidebar";
import BlogContent from "./BlogContent";

function Blog() {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div
          className="col-12 col-sm-4 col-md-4 col-lg-4 bg-light bg-light p-5"
          id="leftSidebar"
        >
          <LeftSidebar />
        </div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-8 bg-warning p-5">
          <Switch>
            <Route path="/blogs/sikkim">
              <BlogContent title="Sikkim Blog" desc="Sikkim is heaven" />
            </Route>

            <Route path="/blogs/rajasthan">
              <BlogContent title="Rajasthan Blog" desc="Dal Bati Churma" />
            </Route>
            <Route path="/blogs/kerala">
              <BlogContent title="Kerala Blog" desc="GODs Own Country" />
            </Route>
            <Route path="/blogs/puri">
              <BlogContent
                title="My Puri Experience, Jai Jagannath"
                desc="Jagannath Dham"
              />
            </Route>
            <Route path="/blogs/darjeeling">
              <BlogContent title="My darjeeling vlogs" desc="Queens of Hill" />
            </Route>
            <Route path="/blogs/deegha">
              <BlogContent title="My Deegha Experience" desc="Sea Beach" />
            </Route>
            <Route path="/blogs/mumbai">
              <BlogContent
                title="Mumbai: City of Ganpati Bappa"
                desc="Ganpati Bapp Moria"
              />
            </Route>
            <Route path="/blogs/hyderabaad">
              <BlogContent
                title="My Hyderabaad Experience"
                desc="Famous Hyderabaadi Biryani"
              />
            </Route>
            <Route path="/blogs/">
              <BlogContent title="Vlogger Sourav travel experience" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Blog;
