import AboutMe from './AboutMe';
import MeProject from './MeProjects';
import Experience from './Experience';
import Education from './Education';
import StyledList from './Styled';

const { MainStyle, WorkStyle, SpecifikStyle, NameStyle } = StyledList;

const Main = props => {
  return (
    <MainStyle>
      <div>
        <WorkStyle>Front-end DEVELOPER</WorkStyle>
        <SpecifikStyle>HTML5, CSS, SASS, JS, REACT.JS</SpecifikStyle>
      </div>
      <NameStyle>Sofiia Shevtsova</NameStyle>
      <AboutMe />
      <MeProject />
      <Education />
      <Experience />
    </MainStyle>
  );
};

export default Main;
