import StyledList from './Styled';

const {
  MainTitleStyle,
  ListStyle,
  EducationItem,
  EducationSpecifik,
  EducationTime,
} = StyledList;

const Education = props => {
  return (
    <div className="four">
      <MainTitleStyle>Education</MainTitleStyle>
      <ListStyle>
        <EducationItem>
          Kherson Law Institute of KhNUVS
          <EducationSpecifik>Science of Law</EducationSpecifik>
          <EducationTime>
            from 2007 to 2011 <span>|</span>Ukraine
          </EducationTime>
        </EducationItem>
        <EducationItem>
          Academy GO IT
          <EducationSpecifik>Full Stack Developer</EducationSpecifik>
          <EducationTime>
            from 2022 <span>|</span>Ukraine
          </EducationTime>
        </EducationItem>
      </ListStyle>
    </div>
  );
};

export default Education;
