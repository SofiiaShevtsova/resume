import StyledList from './Styled';

const { AboutMeStyle, SloganStyle } = StyledList;

const AboutMe = props => {
  return (
    <AboutMeStyle>
      <SloganStyle>"Self-development is the way to self-knowledge"</SloganStyle>
      I am a junior front-end developer, looking for a full-time position at a company
      that is actively developing and helping people to develop their business
      and interests with the help of IT. I want to become a good developer, so I
      study hard and am interested in all the new things in the IT field. So far
      I have nice knowledge of HTML, CSS, JavaScript, and React. I like to
      communicate with people and I working in a big team. I never stop at on my
      way and move on. I am Ukrainian. I currently live in Poland, but I am
      ready to change my country of residence if necessary.
    </AboutMeStyle>
  );
};

export default AboutMe;
