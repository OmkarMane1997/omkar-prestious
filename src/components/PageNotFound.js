import React from "react";

function PageNotFound() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="error-template">
            <h1>Oops!</h1>
            <h2 className="text-danger">404 Not Found</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
