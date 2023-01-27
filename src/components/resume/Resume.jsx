import {StContainer, StSection} from "../header/Header";
import styled from 'styled-components';

const StDivRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const StDivFlexCol3 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 25%;
  max-width: 25%;

  nav{
    top: 180px;
    position: -webkit-sticky;
    position: sticky;
    margin: 0;  }
  nav li {
    font-weight: 700;
    list-style: none;
    margin-bottom: 10px;    text-align: left;
    
  }
  nav li a {
    color: #3e64ff;
    margin-left: 20px;
    position: relative;
  }
  nav li a.current:after {
    position: absolute;
    top: 50%;
    left: -24px;
    width: 20px;
    height: 2px;
    content: '';
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #3e64ff;
  }
`

const StDivFlexCol3Right = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 75%;
  max-width: 75%;

  .page {
    width: 100%;
    margin-bottom: 7em;
  }
  .page .heading {
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 30px;
    color: #3e64ff;
    text-align: left;
  }
  .resume-wrap {
    display: flex !important;
    width: 100%;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    text-align: left;
  }
  .resume-wrap .icon {
    width: 50px;
    height: 50px;
    background: #3e64ff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    align-items: center !important;
    justify-content: center !important;
    display: flex !important;
  }
  .resume-wrap .icon span {
    color: #fff;
    font-size: 28px;
  }
  .resume-wrap .text {
    width: calc(100% - 50px);
    padding-left: 1rem !important;
  }
  .resume-wrap .date {
    font-weight: 700;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    color: #3e64ff;
  }
  .resume-wrap h2 {
    font-size: 24px;
    font-weight: 700;
  }
  .resume-wrap .position {
    font-size: 18px;
    font-weight: 700;
    color: #000000;
  }
`

const StCurrentSection = styled(StSection)`
  height: 100%;
`

export const Resume = () => {
    return  <StCurrentSection id="resume-section">
        <StContainer>
            <StDivRow>
                <StDivFlexCol3>
                    <nav id="navi">
                        <ul>
                            <li><a href="#page-1" className={"current"}>Education</a></li>
                            <li><a href="#page-2">Experience</a></li>
                            <li><a href="#page-3">Skills</a></li>
                            <li><a href="#page-4">Awards</a></li>
                        </ul>
                    </nav>
                </StDivFlexCol3>
                <StDivFlexCol3Right>
                    <div id="page-1" className="page one">
                        <h2 className="heading">Education</h2>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Bachelor of Science in Computer Science</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Computer Processing Systems/Computer Software</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Diploma in Computer</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Art &amp; Creative Director</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                    </div>

                    <div id="page-2" className="page two">
                        <h2 className="heading">Experience</h2>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Software Developer</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Web Designer</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Web Marketing</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Art &amp; Creative Director</h2>
                                <span className="position">Side Tech</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Wordpress Developer</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2017-2018</span>
                                <h2>UI/UX Designer</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                    </div>
                    <div id="page-3" className="page three">
                        <h2 className="heading">Skills</h2>
                        <div className="row progress-circle mb-5">
                            <div className="col-lg-4 mb-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="h5 font-weight-bold text-center mb-4">CSS</h2>


                                    <div className="progress mx-auto" data-value='90'>
						          <span className="progress-left">
                        <span className="progress-bar border-primary"></span>
						          </span>
                                        <span className="progress-right">
                        <span className="progress-bar border-primary"></span>
						          </span>
                                        <div
                                            className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                            <div className="h2 font-weight-bold">90<sup
                                                className="small">%</sup></div>
                                        </div>
                                    </div>



                                    <div className="row text-center mt-4">
                                        <div className="col-6 border-right">
                                            <div className="h4 font-weight-bold mb-0">28%</div>
                                            <span className="small text-gray">Last week</span>
                                        </div>
                                        <div className="col-6">
                                            <div className="h4 font-weight-bold mb-0">60%</div>
                                            <span className="small text-gray">Last month</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 mb-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="h5 font-weight-bold text-center mb-4">HTML</h2>


                                    <div className="progress mx-auto" data-value='80'>
						          <span className="progress-left">
                        <span className="progress-bar border-primary"></span>
						          </span>
                                        <span className="progress-right">
                        <span className="progress-bar border-primary"></span>
						          </span>
                                        <div
                                            className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                            <div className="h2 font-weight-bold">80<sup
                                                className="small">%</sup></div>
                                        </div>
                                    </div>

                                    <div className="row text-center mt-4">
                                        <div className="col-6 border-right">
                                            <div className="h4 font-weight-bold mb-0">28%</div>
                                            <span className="small text-gray">Last week</span>
                                        </div>
                                        <div className="col-6">
                                            <div className="h4 font-weight-bold mb-0">60%</div>
                                            <span className="small text-gray">Last month</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 mb-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="h5 font-weight-bold text-center mb-4">jQuery</h2>


                                    <div className="progress mx-auto" data-value='75'>
						          <span className="progress-left">
                        <span className="progress-bar border-primary"></span>
						          </span>
                                        <span className="progress-right">
                        <span className="progress-bar border-primary"></span>
						          </span>
                                        <div
                                            className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                            <div className="h2 font-weight-bold">75<sup
                                                className="small">%</sup></div>
                                        </div>
                                    </div>



                                    <div className="row text-center mt-4">
                                        <div className="col-6 border-right">
                                            <div className="h4 font-weight-bold mb-0">28%</div>
                                            <span className="small text-gray">Last week</span>
                                        </div>
                                        <div className="col-6">
                                            <div className="h4 font-weight-bold mb-0">60%</div>
                                            <span className="small text-gray">Last month</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>Photoshop</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar"
                                             aria-valuenow="90"
                                             aria-valuemin="0" aria-valuemax="100" >
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>jQuery</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar"
                                             aria-valuenow="85"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>HTML5</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar"
                                             aria-valuenow="95"
                                             aria-valuemin="0" aria-valuemax="100" >
                                            <span>95%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>CSS3</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar"
                                             aria-valuenow="90"
                                             aria-valuemin="0" aria-valuemax="100" >
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>WordPress</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-5" role="progressbar"
                                             aria-valuenow="70"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>SEO</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-6" role="progressbar"
                                             aria-valuenow="80"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="page-4" className="page four">
                        <h2 className="heading">Awards</h2>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Top 10 Web Developer</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Top 5 LeaderShip Exellence Winner</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Top 4 Web Tester</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas"></span>
                            </div>
                            <div className="text pl-3">
                                <span className="date">2014-2015</span>
                                <h2>Art &amp; Creative Director</h2>
                                <span className="position">Cambridge University</span>
                                <p>A small river named Duden flows by their place and supplies it with the
                                    necessary regelialia. It is a paradisematic country, in which roasted
                                    parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                    </div>
                </StDivFlexCol3Right>
            </StDivRow>
        </StContainer>
    </StCurrentSection>
}
