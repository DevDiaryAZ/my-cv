import styled from 'styled-components';
import {StSection} from "../header/Header";
import {StContainer} from "../header/Header";
import {StDivFlexCenter} from "../nav/Nav";

const CurrentSection = styled(StSection)`
  padding: 7em 0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${`url(${(require('../../img/bg_1.jpg'))})`};
  text-align: center;

  .container {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: #3e64ff;
    opacity: .7;
  }

  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 900;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  h2 span {
    color: #a0f669;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
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
`

export const Freelancing = () => {
    return <CurrentSection className="ftco-section ftco-hireme img">
        <div className="overlay"></div>
        <StContainer className="container">
            <StDivFlexCenter>
                <div className="col-md-7 ftco-animate text-center">
                    <h2>I'm <span>Available</span> for freelancing</h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary
                        regelialia.</p>
                    <p className="mb-0"><a href="#" className="btn btn-primary py-3 px-5">Hire me</a></p>
                </div>
            </StDivFlexCenter>
        </StContainer>
    </CurrentSection>
}