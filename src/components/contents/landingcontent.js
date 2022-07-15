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
  MDBTestimonial,
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

const LandingContent = (props) => {
  return (
    <div className="app-content container-fluid">
      <div className="landingImg ">
        <MDBRow>
          {/* <MDBCol md='3'> <img src='/images/nonni.png' width='' height='' className='img-fluid nonni' ></img></MDBCol> */}
          <MDBCol md="6" text-color="white" className="static-img">
            <div className="text-center motto-div">
              <h1 className="motto">JOIN</h1>
              <h1 className="mottos">The Noni Family</h1>
              <h6>Enjoy Pleasure With Good Health</h6>
              <img src="/images/bagde.png" width="250"></img>
              {/* <a href="#!" className="green-text font-weight-light seewhy"> */}

              {/* <MDBIcon fas icon="arrow-down" className="pr-2 ml-2 " /> */}
              {/* SEE WHY? */}
              {/* </a> */}
            </div>
          </MDBCol>
          <MDBCol md="6" text-color="white" className="motion-img">
            {/* <MDBContainer fluid> */}
            <MDBCarousel
              activeItem={1}
              length={4}
              showControls={true}
              showIndicators={true}
              className="z-depth-1 carousel"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="img-fluid d-block w-100 "
                      src="/images/seedlings.jpg"
                      alt="First slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <mark className="markk">
                      <h3
                        className="h3-responsive animated bounceInRight"
                        // style={"animation-delay: 1s"}
                      >
                        ORGANIC MEANS FROM SEEDS
                      </h3>
                      <p>Organic Seedlings Assures Us Of Healthy Plants</p>
                    </mark>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100 img-fluid rasta"
                      src="/images/nonifarm.jpg"
                      alt="Second slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <mark className="markk">
                      <h3 className="h3-responsive animated bounceInRight">
                        ORGANIC FARMING
                      </h3>
                      <p className="animated slideInRight">
                        Healthy Noni Plants Comes As A Result Of Good Farming
                        Measures
                      </p>
                    </mark>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100 img-fluid noniwoman"
                      src="/images/nonid.jpg"
                      alt="Third slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <mark className="markk">
                      <h3 className="h3-responsive animated bounceInLeft">
                        HEALTHY ORGANIC FRUITS
                      </h3>
                      <p>Ready For Production - Chemical Free</p>
                    </mark>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <img
                      className="d-block w-100 img-fluid"
                      src="/images/rastas.png"
                      alt="Second slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <mark className="markk">
                      <h3 className="h3-responsive">
                        HEALTH-FOCUSED CONSUMERS
                      </h3>
                      <p className="animated bounceInRight">
                        Noni Is Our Life . Organic Is The Way
                      </p>
                    </mark>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
            {/* </MDBContainer> */}
          </MDBCol>
          {/* <MDBCol md='3'> <img src='/images/nonni.png'  width='' height='' className='img-fluid nonni2' ></img></MDBCol> */}
        </MDBRow>
      </div>

      <div className="container section2">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="whynoni z-depth-3 " style={{ width: "34rem" }}>
              <MDBCardImage
                className="img-fluid"
                src="images/noniwoman.png"
              ></MDBCardImage>
              <MDBCardBody className="noni-card"></MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6">
            <div className="whynoni-text text-center">
              <h1 className="text-center">WHY NONI?</h1>
              <p>
                Derived from the fruit of the tropical evergreen plant, noni can
                be a wonder food for your health. Noni fruit, popularly known as
                Indian Mulberry, the shrub of which is native to South-East and
                Southern Asia and Pacific Islands. The noni fruit has been used
                since ancient times for its medicinal properties which boost the
                immune system and helps in detoxification. Noni fruit is rich in
                antioxidants, Vitamin C, Vitamin B3, Vitamin A and Iron. Noni
                juice is said to be a magical drink as it affects so many bodily
                systems
              </p>

              <a href="/whynoni">
                <MDBBtn color="" rounded className="butt">
                  See Why
                </MDBBtn>{" "}
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>

      <div className="container section3 ">
        <MDBRow>
          <MDBCol md="6" sm="12">
            <h1>About Nakwa Arms</h1>
            <h3>The Noni Family</h3>
            <p>
              {" "}
              After 6years of consistent research and experiments on organic
              crops and their impact on human lives , The Birth of Nakwa Arms
              Company Limited was inspired As a result of long-term focus,
              persistent belief and faith invested in how human health can be
              transformed through the organic and natural way.
            </p>

            <MDBBtn color="" rounded className="butt">
              About Us{" "}
            </MDBBtn>
          </MDBCol>
          <MDBCol md="6" sm="12" className="text-center nakwa-logo ">
            <img src="images/logo.png"></img>
          </MDBCol>
        </MDBRow>
      </div>

      <div className="section4">
        <MDBCard className="card-image z-depth-3">
          <MDBRow>
            <MDBCol md="6" sm="12">
              <MDBView>
                <MDBCardImage
                  src="images/nonfam4.jpg"
                  class="img-fluid nonilaugh"
                  alt="sample image"
                  height="408"
                />
                <MDBMask
                  className="flex-center"
                  overlay="green-light"
                ></MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol md="6" sm="12">
              <div className="text-center head-badge">
                <p className="p1">HEALTH-FOCUSED CONSUMERS</p>
                <img src="/images/bagde.png" width="100"></img>
              </div>

              <p className="text-left">
                <hr />
                <MDBIcon className="quotes" icon="quote-left" />
                {""}
                We believe that nothing , should stand in our way or deprive us
                from being able to enjoy the pleasure we desire and connect with
                the people we love,whether we are old or sick especially in this
                era where spending good quality time alone or with loved ones is
                very essential. What We Take In Must Benefit Us ! {""}
                <MDBIcon className="quotes" icon="quote-right" />
                <hr />
              </p>
              <p className="text-center p2">THE NONI FAMILY</p>
              {/* <img src='/images/bagde.png' width='150' className='text-center' ></img> */}
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>

      <div className="container section5">
        <MDBRow>
          <MDBCol md="6">
            <h1>
              {" "}
              Dont Just Drink !<br /> Enjoy Pleasure With <br /> Good Health
            </h1>
            <p>
              Our products are focused mainly not only on consumer satisfaction
              but also to maintain good health status , that way you can enjoy
              pleasure as you desire without having to worry what will come of
              it next.{" "}
            </p>
            <a href="/product">
              <MDBBtn color="" rounded className="butt">
                {" "}
                Products{" "}
              </MDBBtn>
            </a>
          </MDBCol>
          <MDBCol md="6">
            <video class="video-fluid z-depth-1" autoPlay loop muted>
              <source src="images/noniad.mp4" type="video/mp4" />
              <source src="images/nonadd.mp4" type="video/mp4" />
            </video>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="container-fluid section6">
        <h1 className="text-center"> LATEST BLOGS</h1>
        <h3 className="text-center">What You Need To Know</h3>
        <MDBRow>
          <MDBCol>
            <MDBCard className="cards z-depth-2">
              <MDBCardImage
                className="img-fluid"
                src="images/smoker.jpg"
                width="350"
                height="200"
              ></MDBCardImage>
              <MDBCardBody className="text-center">
                <h3>Heart Health</h3>
                <p>
                  Noni supports heart health by lowering cholesterol levels and
                  reducing inflammation. Cholesterol has many important
                  functions in your body, but certain types in excess may
                  increase your risk of heart disease....
                  <a href="">Read more</a>{" "}
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="cards mt-5 z-depth-2">
              <MDBCardImage
                className="img-fluid "
                src="images/sunshine.jpg"
                width="350"
                height="300"
              ></MDBCardImage>
              <MDBCardBody className="text-center">
                <h3>Magical Fruit</h3>
                <p>
                  Noni juice is known for its high levels of antioxidants.
                  Antioxidants prevent cellular damage caused by molecules
                  called free radicals. Your body requires a healthy balance of
                  antioxidants and free radicals to maintain optimal health....
                  <a href="">Read more</a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="cards z-depth-2">
              <MDBCardImage
                className="img-fluid"
                src="images/strongman.jpg"
                width="350"
                height="300"
              ></MDBCardImage>
              <MDBCardBody className="text-center">
                <h3>Physical Endurance</h3>
                <p>
                  Noni improves physical endurance. In fact, Pacific Islanders
                  believed that eating noni fruit strengthened the body during
                  long fishing trips and voyages. A few studies show positive
                  effects of drinking noni juice during exercise......
                  <a href="">Read more</a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="section7">
        <MDBCard className="cardy">
          <MDBCardBody className="text-left">
            <h3>HEALTH-FOCUSED CONSUMERS </h3>
            <p>
              Alcohol generated from the Noni fruit is a medicinal and special{" "}
              type of alcohol
              <br /> that affects the human system uniquely and spares consumers
              the <br />
              stress of having to worry over the common disadvantages <br />
              they have to deal with while enjoying pleasure .{" "}
            </p>
            <ul className="benefits">
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Detoxification
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Anti-Aging
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Cholestrol
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Weight Management
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                HeartBurns
              </li>
              <li>
                {" "}
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                No Hangovers
              </li>
            </ul>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="container section8">
        <MDBRow className="">
          <MDBCol md="6" sm="12">
            <img src="./images/deaaaf.jpg" className="img-fluid"></img>
          </MDBCol>
          <MDBCol md="6">
            <div className="deaf-text text-left">
              <h1 className="text-left">WE ARE ACCESSIBLE & DEAF INCLUSIVE</h1>
              <p>
                We support the SiGn-Afrika Campaign to promote Sign Language and
                Deaf Employemnt . Our sign language services helps us to give
                reliable and equal services to our Deaf and Hard-Hearing
                Consumers . We encourage all brands to join the SiGn-Afrika
                Campaign to break the barrier between the hearing and deaf, and
                become more accessible{" "}
              </p>
              <a href="/about">
                <MDBBtn color="" rounded className="butt">
                  {" "}
                  Our policies{" "}
                </MDBBtn>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="section9">
        <MDBContainer className="testimony">
          <section className="test-section text-center my-5">
            <h1 className="h1-responsive  ">TESTIMONIALS</h1>

            <MDBRow className="text-center">
              <MDBCol md="4" className="mb-md-0 mb-5">
                {/* <MDBTestimonial> */}
                {/* <MDBAvatar className="mx-auto"> */}
                <img
                  src="smile.jpg"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                />
                {/* </MDBAvatar> */}
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 className="font-weight-bold green-text my-3">
                  Kumasi, Ghana
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
                <div className="green-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star-half" />
                </div>
                {/* </MDBTestimonial> */}
              </MDBCol>

              <MDBCol md="4" className="mb-md-0 mb-5">
                {/* <MDBTestimonial> */}
                {/* <MDBAvatar className="mx-auto"> */}
                <img
                  src="/is.jpg"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                />
                {/* </MDBAvatar> */}
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  John Doe
                </h4>
                <h6 className="font-weight-bold green-text my-3">
                  Virginia, USA
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
                <div className="green-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                </div>
                {/* </MDBTestimonial> */}
              </MDBCol>
              <MDBCol md="4">
                {/* <MDBTestimonial> */}
                {/* <MDBAvatar className="mx-auto"> */}
                <img
                  src="down.jpg"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                />
                {/* </MDBAvatar> */}
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Maria Kate
                </h4>
                <h6 className="font-weight-bold green-text my-3">
                  Port-Harcourt, Nigeria
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <div className="green-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star" />
                </div>
                {/* </MDBTestimonial> */}
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
      </div>
    </div>
  );
};

export default LandingContent;
