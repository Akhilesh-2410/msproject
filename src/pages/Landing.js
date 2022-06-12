import React from "react";
import NavBar from "../components/NavBar";
import '../styles/landstyle.css'


const Landing = () => {
    return (
        <>
            <NavBar />


            <div className="box" >
                <div className="top-Heading">We are building your future!</div>
                <div className="top-subtitle">Once a St. Judes child is always a St. Judes child</div>

            </div>


            <div style={{ height: "100px" }}></div>

            <div className=" heading mb-70">
                <h2 className="heading--title">Our Services</h2>
            </div>
            <div className="heading--subtitle">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div class="row">

                <div class="feature col-xs-12 col-sm-6 col-md-3">
                    <div class="feature-panel">
                        <div class="feature--icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png" />
                        </div>
                        <div class="feature--content">
                            <h3>Fast Operations</h3>
                            <p>Cobuild impresses you with fully responsiveness and highly customization. </p>
                        </div>
                    </div>

                </div>


                <div class=" feature col-xs-12 col-sm-6 col-md-3">
                    <div class="feature-panel">
                        <div class="feature--icon">
                            <img src="https://cdn-icons.flaticon.com/png/512/2902/premium/2902055.png?token=exp=1655025212~hmac=833c9d906bca08b6747279a0f77ffc4b" />
                        </div>
                        <div class="feature--content">
                            <h3>Renovation</h3>
                            <p>Cobuild impresses you with fully responsiveness and highly customization. </p>
                        </div>
                    </div>

                </div>


                <div class="feature col-xs-12 col-sm-6 col-md-3">
                    <div class="feature-panel">
                        <div class="feature--icon">
                            <img src="https://cdn-icons.flaticon.com/png/512/3104/premium/3104373.png?token=exp=1655025334~hmac=552eb730158e5bff4db8fc883fef158a" />
                        </div>
                        <div class="feature--content">
                            <h3>Consultation</h3>
                            <p>Cobuild impresses you with fully responsiveness and highly customization. </p>
                        </div>
                    </div>

                </div>


                <div class="feature col-xs-12 col-sm-6 col-md-3">
                    <div class="feature-panel">
                        <div class="feature--icon">
                            <img src="https://cdn-icons.flaticon.com/png/512/3053/premium/3053790.png?token=exp=1655025408~hmac=1962edf36ec2dbc53c0eafc777ca2a11" />

                        </div>
                        <div class="feature--content">
                            <h3>Architecture</h3>
                            <p>Cobuild impresses you with fully responsiveness and highly customization. </p>
                        </div>
                    </div>

                </div>

            </div>


            <div className="middle">

                <div className=" middle-heading mb-70">
                    <h2 className="middle-title">What we do</h2>
                </div>

                <div className="middle-content">
                    <p>St. Jude India ChildCare Centres (St. Judes or SJICC) provides a home away from home for children undergoing cancer treatment. These children, accompanied by their parents, come from small villages and distant towns where medical treatment for cancer is not available.We currently operate in eight cities across India, providing more than 400 families with a peaceful night’s sleep.Each one of our family units is a space where the child has a bed to sleep on and the parents can sleep alongside the child. </p>
                </div>



                <div class="portfolio">
                    <div class="column">
                        <img src="https://img.freepik.com/free-photo/cutout-paper-chain-family-with-protection-cupped-hands-concept-security-care-hands-with-cut-out-paper-silhouette-table-family-care-concept_494741-46837.jpg?w=826" alt="Snow" />
                    </div>
                    <div class="column">
                        <img src="https://img.freepik.com/free-photo/cutout-paper-chain-family-with-protection-cupped-hands-concept-security-care-hands-with-cut-out-paper-silhouette-table-family-care-concept_494741-46837.jpg?w=826" alt="Forest" />
                    </div>
                    <div class="column">
                        <img src="https://img.freepik.com/free-photo/cutout-paper-chain-family-with-protection-cupped-hands-concept-security-care-hands-with-cut-out-paper-silhouette-table-family-care-concept_494741-46837.jpg?w=826" alt="Mountains" />
                    </div>
                </div>

            </div>

            <div class="row-left">
                <div class="column-left">
                    <div class="left-heading ">
                        <h2 class="left-title">We are expert in this field since almost 20 years.</h2>
                        <p class="left-desc ">Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit cuat ipsum, nec sagittis sem nibh id elit duis sed odio sit nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                    </div>
                </div>
                <div class="column-left">
                    <div class="progressbar">
                        <div class="progress-title">
                            <span class="title">Safe and Hygienic Housing</span>

                        </div>
                        <div class="progress">
                            <div class="accent-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >
                            </div>
                        </div>
                    </div>

                    <div class="progressbar">
                        <div class="progress-title">
                            <span class="title">Transport To and From Treatment</span>
                        </div>
                        <div class="progress">
                            <div class="accent-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                            </div>
                        </div>
                    </div>

                    <div class="progressbar">
                        <div class="progress-title">
                            <span class="title">Value Based Education</span>
                        </div>
                        <div class="progress">
                            <div class="accent-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                            </div>
                        </div>
                    </div>

                    <div class="progressbar">
                        <div class="progress-title">
                            <span class="title">Recreation</span>
                        </div>
                        <div class="progress">
                            <div class="accent-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="bluequote">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="pull-left text-left">
                            <div>An innovative company working with the latest technologies</div>
                        </div>
                        <div class="pull-right text-right">
                            <a class="btn btn--white btn--bordered btn--rounded" href="#">Get A Quote</a>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Address">
                <div class="feature col-xs-12 col-sm-6 col-md-3">
                    <div class="address-panel">
                        <div class="feature--icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png" />
                        </div>
                        <div class="feature--content">
                            <div className="address-title">Address</div>
                            <p>St. Jude India ChildCare Centres
                                Cotton Green Campus,
                                Ground Floor, Mumbai Port Trust Colony,
                                ABC Colony (Rajas Nagar),
                                Zakaria Bunder Road,
                                Sewri, Mumbai 400015. </p>
                        </div>
                    </div>

                </div>


                <div class=" feature col-xs-12 col-sm-6 col-md-3">
                    <div class="address-panel">
                        <div class="feature--icon">
                            <img src="https://cdn-icons.flaticon.com/png/512/2902/premium/2902055.png?token=exp=1655025212~hmac=833c9d906bca08b6747279a0f77ffc4b" />
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
                            <img src="https://cdn-icons.flaticon.com/png/512/3104/premium/3104373.png?token=exp=1655025334~hmac=552eb730158e5bff4db8fc883fef158a" />
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
                    <a class="facebook" href="#">
                        <img src="https://img.icons8.com/ios-filled/50/undefined/facebook-new.png" />
                    </a>
                    <a class="twitter" href="#">
                        <img src="https://img.icons8.com/ios-filled/50/undefined/twitter.png" />

                    </a>
                    <a class="linkedin" href="#">
                        <img src="https://img.icons8.com/glyph-neue/64/undefined/linkedin-circled.png" />
                    </a>
                    <a class="instagram" href="#">
                        <img src="https://img.icons8.com/ios-filled/50/undefined/instagram-new--v1.png" />
                    </a>


                </div>
                </div>
              

           

           







        </>
    )

}


export default Landing;
