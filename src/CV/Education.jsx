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
          Binary Studio Academy
          <EducationSpecifik>Full Stack Development</EducationSpecifik>
          <EducationTime>
            from June 2023 to August 2023 <span>|</span>Ukraine
          </EducationTime>
        </EducationItem>

        <EducationItem>
          Brainnest
          <EducationSpecifik>Frontend Development</EducationSpecifik>
          <EducationTime>
            from April 2023 to May 2023 <span>|</span>Germany
          </EducationTime>
        </EducationItem>

        <EducationItem>
          Academy GO IT
          <EducationSpecifik>Full Stack Developer</EducationSpecifik>
          <EducationTime>
            from August 2022 to April 2023<span>|</span>Ukraine
          </EducationTime>
        </EducationItem>
        <EducationItem>
          Kherson Law Institute of KhNUVS
          <EducationSpecifik>Science of Law</EducationSpecifik>
          <EducationTime>
            from 2007 to 2011 <span>|</span>Ukraine
          </EducationTime>
        </EducationItem>
      </ListStyle>
    </div>
  );
};

export default Education;
