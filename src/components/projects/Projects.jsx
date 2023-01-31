import styled from 'styled-components';
import {StSection} from "../header/Header";
import {StDivRow} from "../resume/Resume";
import {ProjectItem} from "./ProjectItem";

const CurrentSection = styled(StSection)`
  padding: 7em 0;
  position: relative;

  .container-fluid {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
  }

  .pb-5 {
    padding-bottom: 3rem;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
  }

  .col-md-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  h2 {
    font-size: 50px;
    font-weight: 700;
    line-height: 1.5;
    color: black;
  }
`

export const Projects = () => {
    return <CurrentSection className="ftco-section ftco-project" id="projects-section">
        <div className="container-fluid px-md-0">
            <div className="row no-gutters justify-content-center pb-5">
                <div className="col-md-12 heading-section text-center ftco-animate">
                    <h2 className="mb-4">My Projects</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia</p>
                </div>
            </div>
            <StDivRow className="row no-gutters">
                <ProjectItem currentUrl={"work-1.jpg"}/>
                <ProjectItem  currentUrl={"work-2.jpg"}/>
                <ProjectItem  currentUrl={"work-3.jpg"}/>
                <ProjectItem  currentUrl={"work-4.jpg"}/>
                <ProjectItem currentUrl={"work-5.jpg"}/>
                <ProjectItem currentUrl={"work-6.jpg"}/>
            </StDivRow>
        </div>
    </CurrentSection>
}

