import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBBadge,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  Testimonial,
  MDBAvatar,
  MDBStepper,
  MDBStep,
  MDBView,
  MDBProgress,
  MDBMask,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBCard,
  MDBCardImage,
} from "mdbreact";

const Productcontent = (props) => {
  return (
    <div className="container-fluid product-content">
      <div className="product-sect1 container-fluid">
        <MDBCard className="product-card1">
          <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol className="stable-pic">
              <video
                class="video-fluid z-depth-1 "
                id="background-video"
                // height="600"
                autoPlay
                loop
                muted
              >
                <source src="images/vid2.mp4" type="video/mp4" />
              </video>{" "}
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
      <div className="product-sect2">
        <h1 className="text-center">Our Products</h1>
        <p className="text-center">
          100% ORGANIC - CHEMICAL FREE - PREMIUM QUALITY
        </p>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="product-cards z-depth-2">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="6">
                    <h3>Shelby Noni Liquor</h3>
                    <p>Feel the power of the Natural Noni Spirit - 100% Noni</p>
                    <div className="p2">
                      <p>
                        <b>NGREDIENTS</b> : Noni
                      </p>
                      <p>
                        <b>BOTTLE</b> : 1Litre
                      </p>
                      <p>
                        <b>ALCOHOL</b> : 37%
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="6" className="drinks-sect">
                    <img
                      src="./images/ginn.png"
                      className="img-fluid biggin"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="product-cards z-depth-2">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="6">
                    <h3>Shelby Noni Liquor(Pocket Gin)</h3>
                    <p>
                      Carry your strength with you everywhere with the Mobile
                      Bottle
                    </p>
                    <div className="p2">
                      <p>
                        <b>INGREDIENTS</b> : Noni
                      </p>
                      <p>
                        <b>BOTTLE</b> : 180ml
                      </p>
                      <p>
                        <b>ALCOHOL</b> : 37%
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="6" className="drinks-sect">
                    <img
                      src="./images/smallgin.png"
                      className="img-fluid smallgin"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="product-cards z-depth-2">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="6">
                    <h3>Shelby Noni Wine</h3>
                    <p>
                      Enjoy the smooth natural taste of fine organic noni wine
                      blended other nutritional crops aimed at helping you enjoy
                      pleasure with good health.
                    </p>
                    <div className="p2">
                      <p>
                        <b>INGREDIENTS</b> : Noni(fermented) , Hibiscus , Aidan
                        fruit , Samanea{" "}
                      </p>
                      <p>
                        <b>BOTTLE</b> : 1Litre
                      </p>
                      <p>
                        <b>ALCOHOL</b> : 18%
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="6" className="drinks-sect">
                    <img
                      src="./images/bigwine.png"
                      className="img-fluid bigwine"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="product-cards z-depth-2">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="6">
                    <h3>Shelby Non-Alcoholic Wine</h3>
                    <p>
                      Feel the organic and natural sensation of a good wine
                      focused on adding great value to human health and
                      satisfaction{" "}
                    </p>
                    <div className="p2">
                      <p>
                        <b>INGREDIENTS</b> : Noni juice , Hibiscus , Aidan fruit
                      </p>
                      <p>
                        <b>BOTTLE</b> : 500ml
                      </p>
                      <p>
                        <b>ALCOHOL</b> : None
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="6" className="drinks-sect">
                    <img
                      src="./images/smallwine.png"
                      className="img-fluid smallwine"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default Productcontent;
