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

const Whynonicontent = (props) => {
  return (
    <div className="container-fluid whynoni-content">
      <div className="sect1">
        <MDBCard className="sect1-card">
          <MDBCardBody className="text-center card-text">
            <h2>
              THE <b>WONDER</b> FRUIT
            </h2>
            <p>
              Have Been Used For Traditional Folk Medicine For Over 2000 years
              <br />
              <i>(Morinda Citrifolia)</i>
            </p>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="container sect2">
        <h1 className="text-center">WHY NONI ?</h1>

        <MDBRow>
          <MDBCol md="6" className="text-left">
            <p>
              This Tropical Evergreen plant,has been used for over 2000 years in
              Traditional folk Medicine for Boosting Immune system ,
              detoxification and many more.Noni fruit is highly rich
              antioxidants, Vitamin C,Biotin, Folate , Vitamin A, Beta
              Carotene,Potassium and Iron. Antioxidants prevent cellular damage
              caused by molecules called free radicals. Your body requires a
              healthy balance of antioxidants and free radicals to maintain
              optimal health . Researchers suspect that the potential health
              benefits of noni juice are likely related to its powerful
              antioxidant properties. The main antioxidants in noni juice
              include beta carotene, iridoids, and vitamins C and E. Noni juice
              is said to be a magical drink as it affects the body organs in a
              very unique way. This is few of the many reasons why{" "}
              <b>NAKWA ARMS </b>
              Chose Noni as the main fruit for production. See More{" "}
            </p>
            <ul className="noni-benefits">
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Anti-Aging
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Cholesterol
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Cancer Prevention
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Protects Heart Health
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Sugar Reduction
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Weight Management
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Reduce cellular damage from Tobacco Smoke
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Physical Endurance
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Improves Skin an Hair quality
              </li>
              <li>
                <MDBIcon fas icon="check-double" className="pr-2  icons" />
                Best Pain Reliever
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <img src="./images/treenoni.jpg" className="nonitree"></img>
          </MDBCol>
        </MDBRow>
      </div>

      <div className="container sect3">
        <p>
          An in-depth study of Noni juice and it's medicinal health benefits was
          conducted by Johns Hopkins trained Physician Dr. Neil Solomon who
          gathered from more than 1,227 health professionals representing over
          25,314 noni juice drinkers from over 80 countries who received
          positive results by drinking Noni juice. We present this research and
          findings for educational purposes.
        </p>

        <h1 className="text-center">25,314</h1>
        <h3 className="text-center">
          People Surveyed For The Helpful Benefits of Noni{" "}
        </h3>
        {/* <embed src="./images/nonisurvey.pdf " width="1000" height="700" /> */}
        <table class="table table-striped table-hover table-sm">
          <thead className="table-head">
            <tr className="th-row">
              <th scope="col">#</th>
              <th scope="col">Conditions, Decreased Sympthoms</th>
              <th scope="col">Total#</th>
              <th scope="col">%Helped</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th scope="row">1</th>
              <td>Allergy</td>
              <td>3,198</td>
              <td>86%</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Arthritis</td>
              <td>1,675</td>
              <td>78%</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Atshma</td>
              <td>8077</td>
              <td>71%</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Cancer</td>
              <td>2,188</td>
              <td>69%</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>CFIDS, Fibromyalgia</td>
              <td>352</td>
              <td>77%</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Depression</td>
              <td>1,512</td>
              <td>80%</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Diebetics Type 1&2</td>
              <td>5,575</td>
              <td>82%</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Digestion</td>
              <td>3,171</td>
              <td>90%</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>increased Ernergy</td>
              <td>16,056</td>
              <td>90%</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Heart Disease</td>
              <td>2,158</td>
              <td>76%</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>High Blood Pressure , Decreased</td>
              <td>1,869</td>
              <td>84%</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>HIV</td>
              <td>150</td>
              <td>55%</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Immune System</td>
              <td>3,707</td>
              <td>77%</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Kidney Disease</td>
              <td>3764</td>
              <td>67%</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>Menstruation</td>
              <td>3,798</td>
              <td>79%</td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Mental Acquity, Alertness increased</td>
              <td>5,543</td>
              <td>73%</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>Multiple Sclerosis</td>
              <td>25</td>
              <td>52%</td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>Muscle ,Increased Body Building</td>
              <td>1,216</td>
              <td>70%</td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td>Obesity , Weight loss</td>
              <td>5,526</td>
              <td>72%</td>
            </tr>
            <tr>
              <th scope="row">20</th>
              <td>Pain, including headaches</td>
              <td> 6,828</td>
              <td>86%</td>
            </tr>
            <tr>
              <th scope="row">21</th>
              <td>Parkinson's Disease</td>
              <td>25</td>
              <td>52%</td>
            </tr>
            <tr>
              <th scope="row">22</th>
              <td>Respiratory Problems</td>
              <td>3,857</td>
              <td>72%</td>
            </tr>
            <tr>
              <th scope="row">23</th>
              <td> Skin and Hair Problems</td>
              <td>877</td>
              <td>78%</td>
            </tr>
            <tr>
              <th scope="row">24</th>
              <td>Sexual Enhancement increased</td>
              <td>2,984</td>
              <td>84%</td>
            </tr>
            <tr>
              <th scope="row">25</th>
              <td>Sleep, improved</td>
              <td>2,025</td>
              <td>75%</td>
            </tr>
            <tr>
              <th scope="row">26</th>
              <td>Smoking, stopped</td>
              <td>876</td>
              <td>56%</td>
            </tr>
            <tr>
              <th scope="row">27</th>
              <td>Stress, coped better</td>
              <td>6,743</td>
              <td>74%</td>
            </tr>
            <tr>
              <th scope="row">28</th>
              <td>Stroke</td>
              <td>1,806</td>
              <td>53%</td>
            </tr>
            <tr>
              <th scope="row">25</th>
              <td>Well-being, felt better</td>
              <td>7,879</td>
              <td>80%</td>
            </tr>
          </tbody>
          <thead className="table-head">
            <tr className="th-row">
              <th scope="col">#</th>
              <th scope="col">Conditions, Decreased Sympthoms</th>
              <th scope="col">Total#</th>
              <th scope="col">%Helped</th>
            </tr>
          </thead>
          {/* <tr>
              You can read more about Dr. Solomon’s work in his book “NONI , How
              Much, How Often, For What” published by Direct Source Publishing
              and can be purchased on Amazon.com.
            </tr> */}
        </table>
        <div className="  sect3-last">
          <MDBRow>
            <MDBCol md="1">
              <MDBIcon
                fas
                icon="grip-lines-vertical"
                className="vertical-line"
              />
            </MDBCol>
            <MDBCol md="11">
              <p className="text-left">
                A lot of people who joined The Noni Family in becoming
                health-focused Consumers have enjoyed and reported so many
                health benefits from drinking Shelby Noni . Our products are
                100% Organic . Going Organic means , from seeds, farming ,
                cultivation, production all goes through the required Organic
                procedures. This assures us of healthy chemical free Organic
                products for our consumers.We strive of giving our consumers the
                best quality and most importantly maintaining good health.
                Organic Is Our Way . Tradition We Dont By Pass!
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      <div className="sect3-card">
        <MDBCard className=" text-center card">
          <MDBCardBody>
            <h3 className="text-center">
              Become A Health-Focused Consumer Today
            </h3>
            <p className="text-center">
              Call <b>(+233 506 088 001)</b> in Ghana and{" "}
              <b>(+1 989 005 001) </b> in USA to place your Order
            </p>
          </MDBCardBody>
          <img src="/images/bagde.png" width="190" className=""></img>
        </MDBCard>
      </div>
    </div>
  );
};
export default Whynonicontent;
