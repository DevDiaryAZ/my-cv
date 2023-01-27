import styled from 'styled-components';
import {StContainer} from "../header/Header";
import img from '../../img/about.jpg';

const StSection = styled.section`
  position: relative;
  margin-bottom: 200px;
`

const StContainerFlex = styled.div`
  display: flex;
  margin-right: 0;
  margin-left: 0;
  flex-wrap: wrap;
`

const StDivFlexCol2 = styled.div`
  display: flex;
  flex: 0 0 50%;
  max-width: 50%;
`

const StImageAboutContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  z-index: 0;
  position: relative;

  .img {
    display: flex;
    align-self: stretch;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    position: relative;
    z-index: 1;
    background-image: url(${img});
    min-height: 682px;
  }
`
const StDivFlexCol2Right = styled(StDivFlexCol2)`
  padding: 3rem 0 3rem 3rem;
  flex-direction: column;

  .heading-section {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: flex-start;
    padding-bottom: 1rem;
    padding-right: 15px;
    padding-left: 15px;
  }

  h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    text-align: left;
  }

  ul {
    display: inline-block;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    display: flex;
  }

  li span {
    width: calc(100% - 130px);
    text-align: left;
  }

  li span:first-child {
    font-weight: 600;
    color: #000000;
    width: 130px;
  }
`

const StCounterWrap = styled.div`
  margin-top: 1rem;
  display: flex;

  p {
    font-size: 20px;
    margin-bottom: 1.5rem;
  }

  p span.number {
    font-weight: 600;
    color: #3e64ff;
    margin-right: 8px;
  }

  p a {
    cursor: pointer;
    border-radius: 40px;
    box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    background: #3e64ff;
    border: 1px solid #3e64ff;
    color: #fff;
    padding: 1rem;

  }
`

export const About = () => {
    return <StSection id="about-section">
        <StContainer>
            <StContainerFlex>
                <StDivFlexCol2>
                    <StImageAboutContainer>
                        <div className="overlay"></div>
                        <div className="img">
                        </div>
                    </StImageAboutContainer>
                </StDivFlexCol2>
                <StDivFlexCol2Right>
                    <div className="heading-section">
                        <h2>About Me</h2>
                        <p>A small river named Duden flows by their place and supplies it with the
                            necessary
                            regelialia.</p>
                        <ul className="about-info">
                            <li><span>Name:</span> <span>Ronaldo Fredrickson</span>
                            </li>
                            <li><span>Date of birth:</span>
                                <span>November 28, 1989</span></li>
                            <li><span>Address:</span>
                                <span>San Francisco CA 97987 USA</span></li>
                            <li><span>Zip code:</span> <span>1000</span></li>
                            <li><span>Email:</span> <span>ronaldo@gmail.com</span>
                            </li>
                            <li><span>Phone: </span> <span>+1-2234-5678-9-0</span>
                            </li>
                        </ul>
                    </div>
                    <StCounterWrap>
                        <div className="text">
                            <p>
                                <span className="number">120</span>
                                <span>Project complete</span>
                            </p>
                            <p><a href="#" className="btn">Download CV</a></p>
                        </div>
                    </StCounterWrap>
                </StDivFlexCol2Right>
            </StContainerFlex>
        </StContainer>
    </StSection>
}