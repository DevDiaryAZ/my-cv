import {StContainer, StSection} from "../header/Header";
import styled from 'styled-components';

export const StDivRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const StDivRow50 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;

  .progress-wrap {
    width: 100%;
    margin-bottom: 30px;
  }

  .progress-wrap h3 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.5;
    color: black;
    text-align: left;
  }

  .progress-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #007bff;
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
    background: #3e64ff;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 12px;
    line-height: 1.2;
    color: #000000;
    font-weight: 600;
    position: relative;
    overflow: visible;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
    width: 90%;
  }

  .progress {
    border-radius: 0.25rem;
    font-size: 0.75rem;
    display: flex;
    height: 10px;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #e6e6e6;
    overflow: visible;
  }
  .progress-bar span {
    position: absolute;
    top: -32px;
    right: 0;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }
`

const StDivFlexCol3 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 25%;
  max-width: 25%;

  nav {
    top: 180px;
    position: -webkit-sticky;
    position: sticky;
    margin: 0;
  }

  nav li {
    font-weight: 700;
    list-style: none;
    margin-bottom: 10px;
    text-align: left;

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
    display: flex;
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
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .resume-wrap .icon span {
    color: #fff;
    font-size: 28px;
  }

  .resume-wrap .text {
    width: calc(100% - 50px);
    padding-left: 1rem;
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

const StProgressCircle = styled.div`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  margin-bottom: 1.5rem;

  .bg-white {
    background-color: #fff;
  }

  .rounded-lg {
    border-radius: 0.3rem;
  }

  .shadow {
    -webkit-box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  }

  .p-4 {
    padding: 1.5rem;
  }

  .font-weight-bold {
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .progress {
    display: flex;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #e6e6e6;
    overflow: visible;
    width: 150px;
    height: 150px;
    background: none;
    position: relative;
  }

  .progress > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .progress .progress-left {
    left: 0;
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
    background: #3e64ff;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 12px;
    line-height: 1.2;
    color: #000000;
    font-weight: 600;
    overflow: visible;
    width: 100%;
    height: 100%;
    background: none;
    border-width: 6px;
    border-style: solid;
    position: absolute;
    top: 0;
  }

  .progress .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-left: 0;
    transform-origin: center left;
    transform: rotate(144deg);
  }

  .border-primary {
    border-color: #007bff;
  }

  .progress .progress-right {
    right: 0;
  }

  .progress .progress-right .progress-bar {
    left: -100%;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    border-right: 0;
    transform-origin: center right;
    transform: rotate(180deg);
  }

  .progress .progress-value {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    color: black;
    margin-bottom: 0.5rem;
  }

  .small {
    font-size: 80%;
    font-weight: 400;
  }

  sup {
    top: -0.5em;
  }

  .border-right {
    border-right: 1px solid #dee2e6 !important;
  }

  .col-6 {
    margin-top: 1.5rem !important;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .h4 {
    line-height: 1.5;
    color: black;
    font-weight: 400;
    font-weight: 700 !important;
    font-size: 1.5rem;
    margin-bottom: 0;

  }

`

const StCurrentSection = styled(StSection)`
  height: 100%;
`

export const Resume = () => {
    return <StCurrentSection id="resume-section">
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
                    <div id="skills" className="page">
                        <h2 className="heading">Skills</h2>
                        <StDivRow>
                            <StProgressCircle className=" col-lg-4 mb-4">
                                <div className=" bg-white rounded-lg shadow p-4">
                                    <h2 className=" h5 font-weight-bold text-center mb-4">CSS</h2>


                                    <div className=" progress mx-auto" data-value='90'>
						          <span className=" progress-left">
                                    <span className=" progress-bar border-primary"></span>
						          </span>
                                        <span className=" progress-right">
                                    <span className=" progress-bar border-primary"></span>
						          </span>
                                        <div
                                            className=" progress-value w-100 h-100 rounded-circle d-flex
                                             align-items-center justify-content-center">
                                            <div className=" h2 font-weight-bold">90<sup
                                                className=" small">%</sup></div>
                                        </div>
                                    </div>


                                    <StDivRow className=" row text-center mt-4">
                                        <div className=" col-6 border-right">
                                            <div className=" h4 font-weight-bold mb-0">28%</div>
                                            <span className=" small text-gray">Last week</span>
                                        </div>
                                        <div className=" col-6">
                                            <div className=" h4 font-weight-bold mb-0">60%</div>
                                            <span className=" small text-gray">Last month</span>
                                        </div>
                                    </StDivRow>

                                </div>
                            </StProgressCircle>

                        </StDivRow>
                        <StDivRow className="row">
                            <StDivRow50 className=" col-md-6 animate-box">
                                <div className=" progress-wrap ftco-animate">
                                    <h3>Photoshop</h3>
                                    <div className=" progress">
                                        <div className=" progress-bar color-1"
                                             aria-valuenow="90"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </StDivRow50>
                            <StDivRow50 className="col-md-6 animate-box">
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
                            </StDivRow50>
                            <StDivRow50 className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>HTML5</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar"
                                             aria-valuenow="95"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span>95%</span>
                                        </div>
                                    </div>
                                </div>
                            </StDivRow50>
                            <StDivRow50 className="col-md-6 animate-box">
                                <div className="progress-wrap ftco-animate">
                                    <h3>CSS3</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar"
                                             aria-valuenow="90"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </StDivRow50>
                        </StDivRow>
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
