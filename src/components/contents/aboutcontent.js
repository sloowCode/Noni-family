import React from "react";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";

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

const AboutContent = (props) => {
  return (
    <div className=" About-content">
      <div className="row1">
        <MDBCard className="row1-image">
          <MDBCardBody className="text-center card-text">
            {/* <MDBCardImage
              className="img-fluid"
              src="images/Picture2.png"
            ></MDBCardImage> */}
            <Roll top>
              <h1>
                {" "}
                JOIN <br /> THE NONI FAMILY{" "}
              </h1>
            </Roll>
            <Fade left>
              <h5> ENJOY PLEASURE WITH GOOD HEALTH</h5>
            </Fade>
            <img src="/images/organicbadge.png" width="280"></img>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="row2">
        <Reveal effect="fadeInUp">
          <div className="row2-quote text-center ">
            <blockquote>
              Bothered by Alcohol's contribution to the Global burden of
              diseases,
              <br />
              the birth of NAKWA ARMS was inspired when founder Eric Nana
              Ntiamoah <br /> a Natural Medicine Reseacher and Co-founder Kwaku
              Adu Baah another organic freak <br /> dicovered a new way humans
              can improve their health with pleasure , <br />
              through the exploitation of the Noni plant and other medicinal
              crops, Supported by
              <br />
              Evidence-based, High-impact Policy measures that promotes
              Well-being and Social progress.
            </blockquote>
            <hr className="hr-1" />
          </div>
        </Reveal>
      </div>
      <div className="row3">
        <div className="row3-content container">
          <MDBRow>
            <MDBCol md="6">
              <img
                className="row3-img img-fluid z-depth-3"
                src="./images/lab2.jpg"
              ></img>
            </MDBCol>
            <MDBCol md="6">
              <div className="row3-text">
                <Reveal effect="fadeInUp">
                  <h2 className="text-left">The Mission </h2>
                </Reveal>

                <Reveal effect="fadeInRight">
                  <p>
                    After years of persistent research and experiments, a
                    special type of alcohol generated from Noni fruit was
                    discovered. This medicinal alcohol together with other
                    discoveries like natural honey-jell produced by a plant
                    called 'Samanea' and other medicinal flavours like
                    'hibiscus' and ‘Aidan fruit ’ which substitutes high
                    chemical flavours and sweeteners used by most producers,
                    that has negative effect on human health.
                    <br />
                    <br />
                    All these medicinal ingredients have been brought together
                    to form 100% Organic and Chimical-free products which is
                    focused on allowing consumers to not only Enjoy Pleasure but
                    improve and maintain Good Health. We want to build a
                    community of Health-focused Consumers through Noni. Hence
                    our value proposition is to sell the benefit of Pleasure and
                    Good health to Consumers.
                  </p>
                </Reveal>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      <div className="row4 text-center">
        <Reveal effect="fadeInUp">
          <div className="row4-content">
            <MDBIcon className="fa fa-quote-left pr-2 icon" />
            <blockquote className="text-center quote">
              There are about 2.3billion alcohol consumers in the world, <br />{" "}
              over 900 million in Africa and 7.6million in Ghana recorded by
              (WHO)
              <br /> You can’t stop people from drinking,
              <br /> but you can add value to what they drink and how it impacts
              their lives.
            </blockquote>
            <hr />
            <p className="text-center p2">THE NONI FAMILY</p>
            <video class="video-fluid z-depth-3 newvid" autoPlay loop muted>
              <source src="images/newvid.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>
      <hr />
      <div className="row5 container">
        <div className="row5-content text-center">
          <Reveal effect="fadeInUp">
            <h1>
              {" "}
              Nothing Matters More Than You , <br /> <b></b>Health First !
            </h1>
            <p className="p1">
              We want every penny spent on our products to be well spent Thus we
              are extremely particular <br /> about the value our products offer
              to consumers. So all our decision are guided by strong core
              values.
            </p>
          </Reveal>

          <MDBRow className="first-row ">
            <MDBCol md="6" className="text-left">
              <Reveal effect="fadeInLeft">
                <h2 className="col1-h2">Strictly Organic</h2>
                <p>
                  We are sensitive to the customer health as well as the taste,
                  look and feel of good wine and liquor. We pride ourselves as
                  Health-Focused, Thus our products are strictly 100% Organic
                  from farming, processing and production to make sure it is
                  Chemical-Free with extremely high quality to ensure customer
                  satisfaction, supported by impeccable service to our customers
                  aimed at promoting healthy living.{" "}
                </p>
                <img
                  className="img-fluid col2-img z-depth-3"
                  src="./images/nonib.jpg"
                ></img>
                <div>
                  <a href="/whynoni">
                    <MDBBtn color="" rounded className="sign-butt">
                      Learn more about Organic way
                    </MDBBtn>{" "}
                  </a>
                </div>
              </Reveal>
            </MDBCol>
            <MDBCol md="6" className="text-right">
              <Reveal effect="fadeInRight">
                <h2 className="col2-h2">Accessibility And Equality </h2>
                <p>
                  We believe nothing should stand in our way to provide quality
                  services to our clients. Thus our Sign Language services makes
                  us accessible by the Deaf Community and allows us to give them
                  equal and unlimited services. 1% of each product bought is
                  used to support the SignAfrika Project to promote Sign
                  Language and Deaf Employment in Ghana aimed at breaking the
                  barrier between the Deaf and hearing to promote Accessibility
                  and Equality at work, homes and social gatherings in Africa.{" "}
                </p>
                <img
                  className="img-fluid col2-img z-depth-3 "
                  src="./images/sign1.jpg"
                ></img>
                <div>
                  <a href="/whynoni">
                    <MDBBtn color="" rounded className="sign-butt">
                      Learn more about SignAfrika
                    </MDBBtn>{" "}
                  </a>
                </div>
              </Reveal>
            </MDBCol>

            <MDBCol md="1"></MDBCol>
            <MDBCol md="10" className="text-center">
              <Reveal effect="fadeInUp">
                <h2 className="col2-h2"> Time Consiousness</h2>
                <p>
                  We ensure safe and timely delivery to our clients worldwide to
                  enable them serve all their Health-focused consumers who care
                  about not only satisfaction but maintaining good health.{" "}
                </p>
              </Reveal>

              <video
                class="video-fluid z-depth-1 col2-vid "
                autoPlay
                loop
                muted
              >
                <source src="images/portvid2.mp4" type="video/mp4" />
              </video>
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </div>
      </div>
      <div className="row6 ">
        <div className="container">
          <MDBRow className="team">
            {/* <div className="team"> */}
            <MDBCol md="6">
              <Reveal effect="fadeInDown">
                <div className="row6-text ">
                  <p>
                    We Are The No.1 Producer Of Organic Noni Products In Ghana.{" "}
                    <br />
                    Noni Is Our Life ! <br />
                    Organic Is Our Way! <br />
                    Tradition We Dont By-pass !<br />
                    {/* <b> */}
                    {/* </b> */}
                    <br />
                  </p>
                </div>
              </Reveal>
            </MDBCol>
            <MDBCol md="6">
              <Rotate bottom left>
                <img className="img-fluid " src="./images/staff.png"></img>
              </Rotate>
            </MDBCol>
            {/* </div> */}
          </MDBRow>
        </div>
      </div>
      <div className="row7 text-center">
        <div className="row7-content">
          <Reveal effect="fadeInUp">
            <h1> Meet The Team</h1>
            <p>
              We are led by highly motivated Team Players, who have consumers at
              heart{" "}
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
