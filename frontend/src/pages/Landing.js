import "../styles/landstyle.css";
import React from "react";
import NavBar from "../components/NavBar";

const Landing = () => {

  return (
    <React.Fragment>
      <NavBar/>

      <div className="box">
        <div className="top-Heading">We are building your future!</div>
        <div
          class="head-bar"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
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

      <div
        class="line-bar"
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>

      <div className="middle-container">
        <div class='middle-card'>
          <div class='card'>
            <div class='image'>
              <a href="/forms/request-aid/financial"><img src="https://media.istockphoto.com/photos/man-and-woman-hand-consider-on-calculator-picture-id1164273151?b=1&k=20&m=1164273151&s=170667a&w=0&h=dnoEq_4xbRFiZruIDbk3HOJUVdGbhraM3eAIsntmyOE=" /></a>
            </div>
            <div class='content'>
              <p>St. Jude's for Life (SJFL) will support those children who recovered from cancer, as needed.</p>
            </div>
          </div>
        </div>
        <div class='middle-card'>
          <div class='card'>
            <div class='image'>
              <a href="/forms/request-aid/monthly-update"><img src="https://media.istockphoto.com/photos/child-psychologist-talks-with-young-boy-and-his-mom-picture-id1356661528?b=1&k=20&m=1356661528&s=170667a&w=0&h=LcZiP0ySz6453-l1-7whBT7kq6o9aHvGVgZS2mG2NI4=" /></a>
            </div>
            <div class='content'>
              <p>We monitor the health of every child on a monthly basis to ensure they are in good health</p>
            </div>
          </div>
        </div>
        <div class='middle-card'>
          <div class='card'>
            <div class='image'>
              <a href="/forms/request-aid/non-financial"><img src="https://media.istockphoto.com/photos/portrait-of-smiling-black-doctor-making-check-up-for-infant-baby-boy-picture-id1331252840?k=20&m=1331252840&s=612x612&w=0&h=H99rJqhXrPn6S7Xf0H0yg39PvDmt-YGKxjYHzXTyWKc=" /></a>
            </div>
            <div class='content'>
              <p>We provide counseling support for children who need it to ensure their physical and mental health, ultimately leading to a full, healthy, and happy life.</p>
            </div>
          </div>
        </div>
      </div>



      <div className="middle">
        <div className=" middle-heading mb-50">
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
          <div class="container">
            <div class="box">
              <div class="imgBox">
                <a href="/forms/request-aid/financial"><img src="https://media.istockphoto.com/photos/happy-young-family-picture-id1316638351?b=1&k=20&m=1316638351&s=170667a&w=0&h=eICVP7qZCS2CQ7uhynA22BqVtPJ3dMKiONjrFVJYC2g=" alt="" /></a>
              </div>
              <div class="port-text">
                <h2>We are Family Foundation</h2>
              </div>
            </div>
            <div class="box">
              <div class="imgBox">
                <a href="/forms/request-aid/monthly-update"><img src="https://images.unsplash.com/photo-1530031665520-57dab9ab1ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGQlMjBjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></a>
              </div>
              <div class="port-text">
                <h2>Your Child at our Care</h2>
              </div>
            </div>
            <div class="box">
              <div class="imgBox">
                <a href="/forms/request-aid/non-financial"><img src="https://media.istockphoto.com/photos/children-and-parent-holding-hands-and-playing-together-with-unity-and-picture-id966783104?b=1&k=20&m=966783104&s=170667a&w=0&h=esH_6NTwUmOIvWt8mwEnLE0NCDGbuZOG5JkJebmJPEY=" alt="" /></a>
              </div>
              <div class="port-text">
                <h2>Unconditional love and support</h2>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div class="row-left box1">
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
        <div class="blue-bar">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="pull-left text-left">
              <div>
                Our “home away from home” is a hygienic, protective, nurturing environment which gives the children the best chance of beating cancer.
              </div>
            </div>

          </div>
          <div class="pull-right text-center">
            <a class="btn btn--white btn--bordered btn--rounded" href="#">
              Get Started
            </a>
          </div>
        </div>
      </div>



      <div class="address">
        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="address-panel">
            <div class="feature--icon">
              <a href="/forms/request-aid/financial"><img src="https://cdn-icons-png.flaticon.com/512/447/447031.png" class="filter" /></a>
            </div>
            <div class="address--content">
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
              <a href="/forms/request-aid/monthly-update"><img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" class="filter" /></a>
            </div>
            <div class="address--content">
              <div className="address-title">Phone</div>
              <p>
                022-66663152 </p>
            </div>
          </div>
        </div>

        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="address-panel">
            <div class="feature--icon">
              <a href="/forms/request-aid/non-financial"><img src="https://cdn-icons-png.flaticon.com/512/95/95645.png" class="filter" /></a>
            </div>
            <div class="address--content">
              <div className="address-title">Email</div>
              <p>
                contact@stjudechild.org
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="footer-bar">
        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="footer-panel">
            <div class="footer--icon">
              <a href="/forms/request-aid/financial"><img src="https://img.icons8.com/ios-filled/50/undefined/facebook-new.png" class="filter" /></a>
            </div>
          </div>
        </div>

        <div class=" feature col-xs-12 col-sm-6 col-md-3">
          <div class="footer-panel">
            <div class="footer--icon">
              <a href="/forms/request-aid/monthly-update"><img src="https://img.icons8.com/ios-filled/50/undefined/twitter.png" class="filter" /></a>
            </div>
          </div>
        </div>

        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="footer-panel">
            <div class="footer--icon">
              <a href="/forms/request-aid/non-financial"><img src="https://img.icons8.com/glyph-neue/64/undefined/linkedin-circled.png" class="filter" /></a>
            </div>
          </div>
        </div>

        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="footer-panel">
            <div class="footer--icon">
              <a href="/forms/request-aid/non-financial"><img src="https://img.icons8.com/ios-filled/50/undefined/instagram-new--v1.png" class="filter" /></a>
            </div>
          </div>
        </div>

        <div class="feature col-xs-12 col-sm-6 col-md-3">
          <div class="footer-panel">
            <div class="footer--icon">
              <a href="/forms/request-aid/non-financial"><img src="https://img.icons8.com/ios-filled/50/undefined/youtube-play.png" class="filter" /></a>
            </div>
          </div>
        </div>
      </div>



    </React.Fragment>
  );
};

export default Landing;
