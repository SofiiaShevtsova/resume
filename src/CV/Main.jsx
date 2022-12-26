import AboutMe from './AboutMe';
import MeProject from './MeProjects';
import Experience from './Experience';
import Education from './Education';
import StyledList from './Styled';

const { MainStyle, WorkStyle, NameStyle } = StyledList;

const Main = props => {
  return (
    <MainStyle>
      <div>
        <WorkStyle>Front-end DEVELOPER</WorkStyle>
      </div>
      <NameStyle>Sofiia Shevtsova</NameStyle>
      <AboutMe />
      <MeProject />
      <Experience />
      <Education />
    </MainStyle>
  );
};

export default Main;
