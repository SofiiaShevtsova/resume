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
      <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
        <MainTitleStyle> Experience </MainTitleStyle>
        <div>
          <EducationSpecifik>Front-End Developer</EducationSpecifik>
          <WorkName>Factory Wise</WorkName>
          <EducationTime>
            from July 2024 <span>|</span> Ukraine
          </EducationTime>
          <WorkListStyle>
            <li>
              Developed user interfaces and front-end functionalities utilizing
              React.js.
            </li>
            <li>
              Optimized component performance to ensure responsiveness across
              various web platforms and browsers.
            </li>
            <li>
              Translated design specifications and wireframes into high-fidelity
              code implementations.
            </li>
            <li>
              Integrated with RESTful APIs to implement core application logic
              and data exchange.
            </li>
          </WorkListStyle>
        </div>

        <div>
          <EducationSpecifik>Front-End Developer</EducationSpecifik>
          <WorkName>Big Orange Cat</WorkName>
          <EducationTime>
            March 2024 - July 2024 <span>|</span> Ukraine
          </EducationTime>
          <WorkListStyle>
            <li>
              Contributed to the development of user-centric features employing
              React.js framework.
            </li>
            <li>
              Enhanced component efficiency and ensured cross-platform
              compatibility for optimal user experience.
            </li>
            <li>
              Implemented user interface designs and wireframes with precision
              and adherence to specifications.
            </li>
            <li>
              Established connectivity with backend systems via REST APIs to
              facilitate application functionalities.
            </li>
          </WorkListStyle>
        </div>

        <div>
          <EducationSpecifik>Full-stack Developer</EducationSpecifik>
          <WorkName>Baza Trainee Ukraine</WorkName>
          <EducationTime>
            September 2023 - April 2024 <span>|</span> Ukraine
          </EducationTime>
          <WorkListStyle>
            <li>
              Conducted client consultations to ascertain project requirements
              and objectives.
            </li>
            <li>
              Developed front-end applications utilizing Next.js framework.
            </li>
            <li>
              Participated in the evaluation and selection of appropriate
              technological solutions for project execution.
            </li>
            <li>
              Contributed to task allocation and team coordination for efficient
              project management.
            </li>
          </WorkListStyle>
        </div>

        <div>
          <EducationSpecifik>Freelance Developer</EducationSpecifik>
          <WorkName>Freelance</WorkName>
          <EducationTime>
            2022 - 2023 <span>|</span> Poland
          </EducationTime>
          <WorkListStyle>
            <li>
              Engaged with clients to define project scope and deliverables.
            </li>
            <li>
              Developed and deployed websites based on client specifications.
            </li>
            <li>Formulated project development strategies and timelines.</li>
            <li>
              Determined and communicated realistic project completion
              schedules.
            </li>
          </WorkListStyle>
        </div>

        <div>
          <EducationSpecifik>Production Technician</EducationSpecifik>
          <WorkName>Seconix</WorkName>
          <EducationTime>
            2020 - 2022 <span>|</span> Poland
          </EducationTime>
          <WorkListStyle>
            <li>
              Performed quality assurance inspections on optical device circuit
              boards using automated testing equipment.
            </li>
            <li>
              Maintained and operated testing machinery in accordance with
              established protocols.
            </li>
          </WorkListStyle>
        </div>

        <div>
          <EducationSpecifik>Inspector, Administrative Practice Monitoring</EducationSpecifik>
          <WorkName>National Police of Ukraine</WorkName>
          <EducationTime>
            2011 - 2020 <span>|</span> Ukraine
          </EducationTime>
          <WorkListStyle>
            <li>
              Conducted quality control reviews of administrative documentation
              to ensure compliance.
            </li>
            <li>
              Operated technical devices to access, extract, and manage data in
              accordance with regulations.
            </li>
            <li>
              Facilitated interdepartmental communication and coordination
              within the police force.
            </li>
            <li>
              Managed and updated information within police databases, ensuring
              data accuracy and integrity.
            </li>
          </WorkListStyle>
        </div>
      </div>
    </WorksBox>
  );
};

export default Experience;
