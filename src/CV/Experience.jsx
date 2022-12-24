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

              <WorkName>
                Inspector for monitoring the application of adminpractice
          </WorkName>
          <EducationSpecifik>National Police of Ukraine</EducationSpecifik>
              <EducationTime>
                from 2011 to 2020 <span>|</span>Ukraine
              </EducationTime>
              <WorkListStyle>
                <li>Quality control of administrative documentation</li>
                <li>Keeping records in databases</li>
                <li>Servicing technical devices, reading data from them and remove data</li>
                <li>Support communication with all sectors of the police</li>
          </WorkListStyle>
            </div>
            <div>
              <WorkName>
                Factory worker
          </WorkName>
          <EducationSpecifik>Seconix</EducationSpecifik>
              <EducationTime>
                from 2020 to 2022 <span>|</span>Poland
              </EducationTime>
              <WorkListStyle>
                <li>Checking boards for optical devices on a test machine</li>
                <li>Service of the test machine</li>
              </WorkListStyle>
            </div>
            <div>
              <WorkName>
                Front-End Developer 
          </WorkName>
          <EducationSpecifik>Freelance</EducationSpecifik>
              <EducationTime>
                from 2022 <span>|</span>Poland
              </EducationTime>
              <WorkListStyle>
                <li>Search for customers</li>
                <li>Constant contact with the customer</li>
                <li>Site creation</li>
              </WorkListStyle>
            </div>
          </WorksBox>

    )
}

export default Experience