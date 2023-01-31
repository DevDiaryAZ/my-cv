import styled from 'styled-components';

const StProjectContainer = styled.div`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;

  .project {
    width: 100%;
    height: 350px;
    margin-bottom: 0;
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: ${(props) => `url(${require('../../img/' + props.currentUrl)})`};
  }
  .project .text {
    max-width: 80%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s ease;
    text-align: center;
    padding: 1.5rem;
  }
  h3 {
    font-size: 20px;
    line-height: 1.5;
    color: black;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  h3 a {
    color: #fff;
  }
  .text span {
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 600;
  }
  .project .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: 0;
    background: #3e64ff;
    z-index: -1;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .project:hover .text {
    opacity: 1;
  }
  .project:hover .overlay, .project:focus .overlay {
    opacity: .9;
  }
`
export const ProjectItem = (props) => {
    return <StProjectContainer currentUrl={props.currentUrl}>
        <div className="project">
            <div className="overlay"></div>
            <div className="text text-center p-4">
                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                <span>Web Design</span>
            </div>
        </div>
    </StProjectContainer>
}