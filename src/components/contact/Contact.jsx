import styled from 'styled-components';
import {StContainer, StSection} from "../header/Header";
import {StDivFlexCenter} from "../nav/Nav";
import {StContainerFlex,StDivFlexCol2, StImageAboutContainer} from "../about/About";

const StCurrentSection = styled(StSection)`
  padding: 7em 0;
  position: relative;

  h2 {
    font-size: 50px;
    font-weight: 700;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #999999;

  }
  
  .img {
    background-position: top;
    min-height:  552px;
  } 
  .contact-form {
    width: 100%;
    background: #f8f9fa !important;
    padding: 3rem !important;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-control {
    margin: 0;
    font-family: inherit;
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    height: 52px !important;
    background: #fff !important;
    color: #000000 !important;
    border-radius: 5px;
    outline: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    font-size: 15px;
  }
  
  .col{
    width: 50%;
    height: 100%;
    min-height: 552px;
  }

  .btn {
    cursor: pointer;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    -ms-border-radius: 40px;
    border-radius: 40px;
    -webkit-box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
    -moz-box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    background: #3e64ff;
    border: 1px solid #3e64ff;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    padding: 1rem 3rem;
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;

  }

  .btn.btn-primary:hover {
    border: 1px solid #3e64ff;
    background: #3e64ff;
    color: #000000;
  }

  textarea.form-control {
    height: inherit !important;
  }
`

const StCurrentDivFlexCenter = styled(StDivFlexCenter)`
  margin-bottom: 3rem;
`

export const Contact = () => {
    return <StCurrentSection className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <StContainer className="container">
            <StCurrentDivFlexCenter className="row justify-content-center mb-5 pb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                    <h2 className="mb-4">Contact Me</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia</p>
                </div>
            </StCurrentDivFlexCenter>

            <StContainerFlex>
                <StDivFlexCol2 className="col">
                    <form className="bg-light p-4 p-md-5 contact-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="7" className="form-control"
                                                  placeholder="Message"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                        </div>
                    </form>

                </StDivFlexCol2>

                <StDivFlexCol2 className="col">
                    <StImageAboutContainer>
                        <div className="img">
                        </div>
                    </StImageAboutContainer>
                </StDivFlexCol2>
            </StContainerFlex>
        </StContainer>
    </StCurrentSection>
}