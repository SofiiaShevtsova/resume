import StyledList from './Styled';

const {
  MainTitleStyle,
  ProjectListStyle,
  TextProjectStyle,
  LinkProjectStyle,
} = StyledList;

const MeProject = props => {
  return (
    <div>
      <MainTitleStyle>My projects</MainTitleStyle>
      <ProjectListStyle>
        <li className="sps-spr">
          <LinkProjectStyle
            href="https://sofiiashevtsova.github.io/project4/"
          >
            "Ice cream made with passion".....................
          </LinkProjectStyle>
          <span className="sps-spr3">[</span> HTML5, CSS3
          <span className="sps-spr3">]</span>
          <TextProjectStyle>An ice cream shop website built with Parcel by a team of five
          developers. I personally worked on the header and the section-hero.
          Created animations and transitions during events.</TextProjectStyle>
        </li>
        <li className="sps-spr">
            <LinkProjectStyle
              href="sofiiashevtsova.github.io/goit-js-hw-11/"
            >
              "Image search".......................................
            </LinkProjectStyle>
            <span className="sps-spr3">[</span> HTML5, CSS3, JS, API
            <span className="sps-spr3">]</span>
            <TextProjectStyle>Image search site. Developed by me on the Parcel assembly. The
            functions of infinite scrolling are implemented, there is also
            smooth scrolling. Working with API requests.</TextProjectStyle>
        </li>
        <li className="sps-spr">
            <LinkProjectStyle
              href="sofiiashevtsova.github.io/my-project-js/"
            >
              "My notes and list-buy"..............................
            </LinkProjectStyle>
            <span className="sps-spr3">[</span> HTML5, CSS3, JS
          <span className="sps-spr3">]</span>
            <TextProjectStyle>A site for organizing your classes. Developed independently. Shows
            working with local storage. Adding elements to the DOM using JS.</TextProjectStyle>
        </li>
      </ProjectListStyle>
    </div>
  );
};
export default MeProject;
