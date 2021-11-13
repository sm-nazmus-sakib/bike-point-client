import React from "react";
import contactImg from "../../images/Contact.jpg";
import faq from "../../images/FAQ.jpg";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-Section">
      <div>
        <img src={contactImg} alt="" className="img-fluid w-100" />
      </div>

      {/* Contact Information Start    */}

      <div className="row row-cols-1 row-cols-md-4  container mx-auto mb-5  mt-5 justify-content-center">
        <div className="card  h-60 shadow p-3  me-5  contact border border-light rounded">
          <h4>
        
          <i className="fas fa-envelope"></i>  Email Here <hr />
            saikat@gmail.com
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
          <i className="fas  fa-map-marker-alt"></i>  Location Here <hr />
            Dhanmondi , Dhaka-1630
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4><i className="fas fa-phone-alt"></i> 
             Call Here <hr />
            +880196-12644444
          </h4>
        </div>
      </div>

      {/* Contact Information End    */}

      {/*Tips Start    */}

      <div className="container">
        <h2 className=" my-5 contact-header p-3 m-3 mx-auto">
        Quick Tips
        </h2>

        <div className="container d-lg-flex">
          <div className="mb-3 col-md-6">
            <img src={faq} width="100%" height="90%" alt="" />
          </div>

          <div className="my-auto col-md-6 ms-4 ">
          <div className="accordion" id="accordionExample">
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  What are the most important things I should
                  know about riding a bike?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p> Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in
                    the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused
                    and legally compliant bike rider. </p>
                </div>
              </div>
            </div>
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How can I tell if my helmet is old and I need a
                  new one?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Bear in mind that if the helmet did its job most people would tell you that they did not even hit
                    their head, or did not hit their head that hard. And the thin shells on most helmets now tend to
                    hide any dents in the foam. But if you can see marks on the shell or measure any foam crush at all,
                    replace the helmet.</p>
                </div>
              </div>
            </div>
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  My bike has been in storage is it safe to ride?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                    The bottom line: Leaving your bike outside for a day or two won't do major damage. You may see signs
                    of rust after a week of neglect. After one month in bad conditions, your beloved bike parts will
                    start to degrade.</p>
                </div>
              </div>
            </div>
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What rules should I follow when riding my bike?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                    When riding, always:
                    Go With the Traffic Flow. Ride on the right in the same direction as other vehicles. ...
                    Obey All Traffic Laws. A bicycle is a vehicle and you're a driver. ...
                    Yield to Traffic When Appropriate. ...
                    Be Predictable. ...
                    Stay Alert at All Times. ...
                    Look Before Turning. ...
                    Watch for Parked Cars.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*tips End    */}
    </div>
  );
};

export default Contact;
