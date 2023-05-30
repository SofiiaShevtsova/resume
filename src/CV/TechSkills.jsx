import StyledList from './Styled';

const { SiteBarTitleStyle, ListStyle } = StyledList;

const Skills = props => {
  const listTech = [
    'HTML5/CSS3/SASS',
    'Responsive/Adaptive design',
    'GIT',
    'JavaScript',
    'React',
    'Redux',
    'REST API',
  ];
  const listSoft = [
    'Teamwork',
    'Good communication',
    'Time management',
    'Responsible',
    'Stress resistant',
  ];
  const listLang = [
    'Ukrainian - Native',
    'English - Intermediate',
    'Poland - Intermediate',
    'Russian - Advanced',
  ];

  return (
    <>
      <div>
        <SiteBarTitleStyle>Tech skills</SiteBarTitleStyle>
        <ListStyle>
          {listTech.map(elem => (
            <li key={elem}>{elem}</li>
          ))}
        </ListStyle>
      </div>
      <div>
        <SiteBarTitleStyle>Soft skills</SiteBarTitleStyle>
        <ListStyle>
          {listSoft.map(elem => (
            <li key={elem}>{elem}</li>
          ))}
        </ListStyle>
      </div>
      <div>
        <SiteBarTitleStyle>Language</SiteBarTitleStyle>
        <ListStyle>
          {listLang.map(elem => (
            <li key={elem}>{elem}</li>
          ))}
        </ListStyle>
      </div>
    </>
  );
};
export default Skills;
