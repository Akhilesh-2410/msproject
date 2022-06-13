import React from "react";
import NavBar from "../components/NavBar";
import "../styles/landstyle.css";

const Landing = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="box">
        <div className="top-Heading">We are building your future!</div>
        <div className="top-subtitle">
          Once a St. Judes child is always a St. Judes child
        </div>
      </div>

      <div style={{ height: "100px" }}></div>

      <div className=" heading mb-70">
        <h2 className="heading--title">Our Services</h2>
      </div>
      <div className="heading--subtitle">
        <p>
          To ensure that timely and appropriate assistance is available to St. Judes alumni to complete their education, maintain good health and lead successful lives. From the time of their enrolment on completing five years since diagnosis of cancer, till they are independent and self-sufficient, St. Judes for Life will be available to provide appropriate intervention, directly or through experienced partners, to support, mentor and enable them to become upright contributing members of society.
        </p>
      </div>

      <div class="row">
        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="feature-panel">
            <div class="feature--icon">
              <a href="/forms/request-aid/financial"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png" /></a>
            </div>
            <div class="feature--content">
              <h3>Fundings</h3>
              <p>
                Financially support the child and their families at our best.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class=" feature col-xs-12 col-sm-6 col-md-3">
          <div class="feature-panel">
            <div class="feature--icon">
            <a href="/forms/request-aid/monthly-update"><img src="https://cdn-icons-png.flaticon.com/512/2300/2300414.png" /></a>
            </div>
            <div class="feature--content">
              <h3>Health Tracking</h3>
              <p>
                We monitor health of each and every child and provide a physical environment that a child undergoing treatment requires.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="feature-panel">
            <div class="feature--icon">
            <a href="/forms/request-aid/non-financial"><img src="https://cdn-icons-png.flaticon.com/512/1651/1651707.png" /></a>
            </div>
            <div class="feature--content">
              <h3>Counselling</h3>
              <p>
                High quality medical care and Counselling provided by the treating hospital.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="feature-panel">
            <div class="feature--icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2913/2913092.png" />
            </div>
            <div class="feature--content">
              <h3>Donating</h3>
              <p>
                To rescue and assist children in distress.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="middle">
        <div className=" middle-heading mb-70">
          <h2 className="middle-title">What we do</h2>
        </div>

        <div className="middle-content">
          <p>
            St. Jude India ChildCare Centres (St. Judes or SJICC) provides a
            home away from home for children undergoing cancer treatment. These
            children, accompanied by their parents, come from small villages and
            distant towns where medical treatment for cancer is not available.We
            currently operate in eight cities across India, providing more than
            400 families with a peaceful night’s sleep.Each one of our family
            units is a space where the child has a bed to sleep on and the
            parents can sleep alongside the child.{" "}
          </p>
        </div>

        <div class="portfolio">
          <div class="column">
            <img
              src="https://img.freepik.com/free-photo/cutout-paper-chain-family-with-protection-cupped-hands-concept-security-care-hands-with-cut-out-paper-silhouette-table-family-care-concept_494741-46837.jpg?w=826"
              alt="Snow"
            />
          </div>
          <div class="column">
            <img
              src="https://img.freepik.com/free-photo/i-show-you-how-it-work_329181-7679.jpg?t=st=1655059720~exp=1655060320~hmac=ea0f565579061906dcd374259e051522eef27caea0b2406a1345e915f4ed2714&w=826"
              alt="Forest"
            />
          </div>
          <div class="column">
            <img
              src="https://img.freepik.com/free-photo/she-always-explain-difficult-homework_329181-10517.jpg?t=st=1655059849~exp=1655060449~hmac=d8af5f42cd5507ac246bdd6e2089a47fdd6e7c6d22e7ecc350fa9d63f5cb5c0d&w=826"
              alt="Mountains"
            />
          </div>
        </div>
      </div>

      <div class="row-left">
        <div class="column-left">
          <div class="left-heading ">
            <h2 class="left-title">
              We are 15!
            </h2>
            <p class="left-desc ">
              When we began in 2006, eight children and their families lived at our first Centre in Mumbai. Today, more than 460 children and their families across nine cities in India and 37 Centres live under our care. Your generosity, support and good wishes over the years have given over 4,000 children a chance for a new life.

              Our core mission of ensuring that no child is denied a safe, hygienic place to stay while undergoing treatment for cancer has expanded in vision. Over the next five years, we aim to double our capacity to support at least 1,000 children and their families every day.

              To do this, we continue to build deep and meaningful relationships with our partner hospitals, relying on their expertise to help us fulfil our promise that until ‘cancer doesn’t stop, neither will we’.

              Thank you for being an essential part of our St. Judes family.
            </p>
          </div>
        </div>
        <div class="column-left">
          <div class="progressbar">
            <div class="progress-title">
              <span class="title">Safe and Hygienic Housing</span>
            </div>
            <div class="progress">
              <div
                class="accent-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progressbar">
            <div class="progress-title">
              <span class="title">Transport To and From Treatment</span>
            </div>
            <div class="progress">
              <div
                class="accent-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progressbar">
            <div class="progress-title">
              <span class="title">Value Based Education</span>
            </div>
            <div class="progress">
              <div
                class="accent-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progressbar">
            <div class="progress-title">
              <span class="title">Recreation</span>
            </div>
            <div class="progress">
              <div
                class="accent-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progressbar">
            <div class="progress-title">
              <span class="title">Counselling For Children and Parents</span>
            </div>
            <div class="progress">
              <div
                class="accent-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progressbar">
            <div class="progress-title">
              <span class="title">Cooking Facilities and Nutritious Rations</span>
            </div>
            <div class="progress">
              <div
                class="accent-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="bluequote">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="pull-left text-left">
              <div>
              Our “home away from home” is a hygienic, protective, nurturing environment which gives the children the best chance of beating cancer.
              </div>
            </div>
            <div class="pull-right text-right">
              <a class="btn btn--white btn--bordered btn--rounded" href="#">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Address">
        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="address-panel">
            <div class="feature--icon">
              <img src="https://cdn-icons-png.flaticon.com/512/447/447031.png" />
            </div>
            <div class="feature--content">
              <div className="address-title">Address</div>
              <p>
                St. Jude India ChildCare Centres Cotton Green Campus, Ground
                Floor, Mumbai Port Trust Colony, ABC Colony (Rajas Nagar),
                Zakaria Bunder Road, Sewri, Mumbai 400015.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class=" feature col-xs-12 col-sm-6 col-md-3">
          <div class="address-panel">
            <div class="feature--icon">
              <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" />
            </div>
            <div class="feature--content">
              <div className="address-title">Phone</div>
              <p>022-66663152 </p>
            </div>
          </div>
        </div>

        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="address-panel">
            <div class="feature--icon">
              <img src="https://cdn-icons-png.flaticon.com/512/95/95645.png" />
            </div>
            <div class="feature--content">
              <div className="address-title">Email</div>
            <p>contact@stjudechild.org </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div class="column-widget">
          <a class="facebook" href="https://www.facebook.com/StJudeIndia">
            <img src="https://img.icons8.com/ios-filled/50/undefined/facebook-new.png" />
          </a>
          <a class="twitter" href="https://twitter.com/StJudeChildCare">
            <img src="https://img.icons8.com/ios-filled/50/undefined/twitter.png" />
          </a>
          <a class="linkedin" href="https://www.linkedin.com/company/st--jude-india">
            <img src="https://img.icons8.com/glyph-neue/64/undefined/linkedin-circled.png" />
          </a>
          <a class="instagram" href="https://www.instagram.com/stjudeindia/">
            <img src="https://img.icons8.com/ios-filled/50/undefined/instagram-new--v1.png" />
          </a>
          <a class="youtube" href="https://www.youtube.com/user/StJudechildcare">
            <img src="https://img.icons8.com/ios-filled/50/undefined/youtube-play.png"/>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
