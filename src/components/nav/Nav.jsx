import styled from 'styled-components';

export const StDivFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const StDivFlexBetween = styled(StDivFlex)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const StDivFlexCenter = styled(StDivFlex)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
`;

const StNavbar = styled(StDivFlexBetween)`
  position: relative;
  top: 0;
  left: 0;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  z-index: 3;

  @media (max-width: 999px) {
    background: #000000;
    position: relative;
    top: 0;
    padding: 0 15px;
    min-height: 70px;
  }
`

const StContainer = styled(StDivFlexBetween)`
  width: 1110px;
  margin: 0 auto;
  padding: 0;
  max-width: 960px;

  @media (max-width: 999px) {
    max-width: 720px;
  }
`

const StMenuButton = styled.button`
  line-height: 1;
  background-color: transparent;
  border-radius: 0.25rem;
  border: none;
  color: rgba(255, 255, 255, 0.5) !important;
  cursor: pointer;
  padding: 0.25rem 0 0.25rem 0.75rem;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: .1em;
`

const StNavCollapse = styled(StDivFlexBetween)`
  flex-basis: auto;
  flex-grow: 1;

  @media (max-width: 999px) {
    display: none;
  }
`

const StNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
`

const StNavLink = styled.a`
  display: block;
  font-size: 16px;
  padding: 0.7rem 20px;
  color: #000000;
  font-weight: 400;
  opacity: 1;
`

export const Nav = () => {
    return <StNavbar>
        <StContainer>
            <StMenuButton>
                <span className="oi oi-menu"></span> Menu
            </StMenuButton>

            <StNavCollapse>
                <StNavList>
                    <li><StNavLink href="src/components/nav/Nav#home-section"
                                   className="nav-link"><span>Home</span></StNavLink>
                    </li>
                    <li><StNavLink href="src/components/nav/Nav#about-section"
                                   className="nav-link"><span>About</span></StNavLink></li>
                    <li><StNavLink href="src/components/nav/Nav#resume-section"
                                   className="nav-link"><span>Resume</span></StNavLink>
                    </li>
                    <li><StNavLink href="src/components/nav/Nav#services-section"
                                   className="nav-link"><span>Services</span></StNavLink></li>
                    <li><StNavLink href="src/components/nav/Nav#projects-section"
                                   className="nav-link"><span>Projects</span></StNavLink></li>
                    <li><StNavLink href="src/components/nav/Nav#blog-section"
                                   className="nav-link"><span>My Blog</span></StNavLink></li>
                    <li><StNavLink href="src/components/nav/Nav#contact-section"
                                   className="nav-link"><span>Contact</span></StNavLink></li>
                </StNavList>
            </StNavCollapse>
        </StContainer>
    </StNavbar>
}