import React from "react";

// reactstrap components
import {Container, Row, Col } from "reactstrap";

// core components

function FooterSection() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container >
        {/* <Row>
            <Col  > */}
            <Row>
            <Col  >
              <center>
                    <p>
                      <span class="aw5Odd">
                      <a class="aw5Odc"  href="https://onestop.umn.edu" >
                      One Stop
                      </a>&nbsp;
                      </span>
                      <span class="aw5Odd">|&nbsp;
                      <a class="aw5Odc" href="http://myu.umn.edu">
                      myU</a>
                      </span> 
                    </p>
                  </center>
                  </Col>
                  </Row>
                  <Row>
                  <Col  >
                  <center>
                      <p>
                        <b class="aw5Odd"> Campuses: </b>
                        <span class="aw5Odd">
                        &#9673;<a class="aw5Odc" href="https://crk.umn.edu">
                        Crookston </a>
                        </span>   
                        <span class="aw5Odd">
                        &#9673;<a class="aw5Odc" href="https://www.d.umn.edu">
                        Duluth </a></span>   
                        <span class="aw5Odd">
                        &#9673;<a class="aw5Odc" href="https://morris.umn.edu">
                        Morris </a></span> 
                        <span class="aw5Odd">
                        &#9673;<a class="aw5Odc" href="https://r.umn.edu">
                        Rochester </a></span> 
                        <span class="aw5Odd">
                        &#9673;<a class="aw5Odc" href="https://twin-cities.umn.edu/about-us#anchor-our-locations">
                        Other Locations
                         </a>
                        </span>
                      </p>
                    </center>
                    </Col>
                  </Row>
              {/* </Col>
          </Row> */}
          <Row>
            <Col  >
              <center>
                    <p class="aw5Odd">?? Regents of the University of Minnesota. All rights reserved. The University of Minnesota is an equal opportunity educator and employer.
                    </p>
                    <p>
                      <b class="aw5Odd">Twin Cities Campus: </b>
                      <span class="aw5Odd">
                      <a class="aw5Odc" href="https://pts.umn.edu" >Parking &amp; Transportation
                      </a>
                      </span>
                      <span class="aw5Odd">&nbsp;|&nbsp;
                      <a class="aw5Odc" href="https://campusmaps.umn.edu/tc/building/index.html">Maps &amp; Directions</a>
                      </span> 
                      <span class="aw5Odd">&nbsp;|&nbsp;
                      <a class="aw5Odc" href="https://usearch.umn.edu" >Directories</a>
                      </span>&nbsp;
                      <span class="aw5Odd">&nbsp;|&nbsp;
                      <a class="aw5Odc" href="https://twin-cities.umn.edu/contact" >Contact U of M</a>
                      </span> 
                      <span class="aw5Odd">&nbsp;|&nbsp;
                      <a class="aw5Odc" href="https://privacy.umn.edu" >Privacy</a>
                      </span>
                    </p>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterSection;
