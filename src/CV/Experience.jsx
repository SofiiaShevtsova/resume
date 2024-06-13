import StyledList from './Styled';

const {
  MainTitleStyle,
  WorkListStyle,
  EducationSpecifik,
  EducationTime,
  WorksBox,
  WorkName,
} = StyledList;

const Experience = props => {
  return (
    <WorksBox>
      <div>
        <MainTitleStyle> Experience </MainTitleStyle>
        <div>
          <WorkName>Front-End Developer</WorkName>
          <EducationSpecifik>Big Orange Cat</EducationSpecifik>
          <EducationTime>
            from March 2024<span>|</span>Ukraine
          </EducationTime>
          <WorkListStyle>
            <li>Developing user-facing features using React.js.</li>
            <li>
              Optimizing components for maximum performance across a vast array
              of web-capable devices and browsers.
            </li>
            <li>Translating designs and wireframes into high-quality code.</li>
            <li>Connected to REST API and built basic logic</li>
          </WorkListStyle>
        </div>
      </div>
      <div>
        <WorkName>Full-stack Developer</WorkName>
        <EducationSpecifik>Baza Trainee Ukraine</EducationSpecifik>
        <EducationTime>
          from September 2023 to April 2024<span>|</span>Ukraine
        </EducationTime>
        <WorkListStyle>
          <li>Negotiations with customers.</li>
          <li>Developing user-facing features using Next.js.</li>
          <li>Selection of technologies for the project.</li>
          <li>Creating tasks and distributing them in the team.</li>
        </WorkListStyle>
      </div>
      <div>
        <WorkName>Front-End Developer</WorkName>
        <EducationSpecifik>Freelance</EducationSpecifik>
        <EducationTime>
          from 2022 to 2023<span>|</span>Poland
        </EducationTime>
        <WorkListStyle>
          <li>Negotiations with customers.</li>
          <li>Site creation.</li>
          <li>Formation of project development strategies.</li>
          <li>Determining the actual terms of project implementation.</li>
        </WorkListStyle>
      </div>

      <div>
        <WorkName>Factory worker</WorkName>
        <EducationSpecifik>Seconix</EducationSpecifik>
        <EducationTime>
          from 2020 to 2022 <span>|</span>Poland
        </EducationTime>
        <WorkListStyle>
          <li>Checking boards for optical devices on a test machine.</li>
          <li>Service of the test machine.</li>
        </WorkListStyle>
      </div>
      <div>
        <WorkName>
          Inspector for monitoring the application of adminpractice
        </WorkName>
        <EducationSpecifik>National Police of Ukraine</EducationSpecifik>
        <EducationTime>
          from 2011 to 2020 <span>|</span>Ukraine
        </EducationTime>
        <WorkListStyle>
          <li>Quality control of administrative documentation.</li>
          <li>
            Servicing technical devices, reading data from them and remove data.
          </li>
          <li>Support communication with all sectors of the police.</li>
          <li>Entering and editing information in police databases.</li>
        </WorkListStyle>
      </div>
    </WorksBox>
  );
};

export default Experience;
