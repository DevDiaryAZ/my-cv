import styled from 'styled-components';
import {StDivFlexCenter} from "../nav/Nav";

export const StDivContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const StSection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 800px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .1;
    width: 50%;
    background: #3e64ff;
  }

  .mouse-wheel {
    height: 70px;
    margin: 2px auto 0;
    display: block;
    width: 30px;
    background: transparent;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: 1.6s ease infinite wheel-up-down;
    -moz-animation: 1.6s ease infinite wheel-up-down;
    animation: 1.6s ease infinite wheel-up-down;
    color: #3e64ff;
    font-size: 30px;
  }

  .mouse-icon:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: #edf0ff;
    z-index: -1;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
export const StContainer = styled(StDivContainer)`
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 999px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

`

const StContainerAnimate = styled(StDivFlexCenter)`
  padding-right: 0;
  padding-left: 0;
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
`

const StCenterContainer = styled(StDivFlexCenter)`
  height: 100%;
`
const StTextBlock = styled.div`
  width: 100%;
  text-align: center !important;

  .subheading {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 800;
    color: #3e64ff;
    letter-spacing: 4px;
  }

  h1 {
    font-size: 60px;
    font-weight: 800;
  }

  h2 {
    line-height: 1.5;
    color: black;
    font-weight: 800;
  }

  h2 span {
    color: #3e64ff;
    text-decoration: underline;
    margin-left: 8px;
  }
`

const StMouseBtnContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 120px;
  z-index: 2;

  .mouse-icon {
    width: 70px;
    height: 70px;
    border: 1px solid transparent;
    cursor: pointer;
    position: relative;
    text-align: center;
    margin: 0 auto;
    display: block;
  }

`

export const Header = () => {
    return <StSection>
        <div className="overlay"></div>
        <StContainer>
            <StCenterContainer>
                <StContainerAnimate>
                    <StTextBlock>
                        <span className="subheading">Hey! I am</span>
                        <h1>Alena Zarubina</h1>
                        <h2>I'm a
                            <span className="txt-rotate">Web Developer</span>
                        </h2>
                    </StTextBlock>
                </StContainerAnimate>
            </StCenterContainer>
        </StContainer>
        <StMouseBtnContainer>
            <a href="#" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
            </a>
        </StMouseBtnContainer>
    </StSection>
}