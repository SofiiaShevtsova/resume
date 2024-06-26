import StyledList from './Styled';

const {
  MainTitleStyle,
  ProjectListStyle,
  TextProjectStyle,
  LinkProjectStyle,
  LinkGitStyle,
} = StyledList;

const MeProject = props => {
  return (
    <div>
      <MainTitleStyle>My projects</MainTitleStyle>
      <ProjectListStyle>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://loki99911.github.io/Node.JS_Project_Front/">
            So Yummy
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/Loki99911/Node.JS_Project_Front.git">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            A cooking website built with React by a team of six developers. I
            personally worked on the start, registration, login and shopingList
            page.
            <span className="sps-spr3">[</span> HTML5, CSS3, React, Redux
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://sofiiashevtsova.github.io/project4/">
            Ice cream made with passion
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/project4">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            An ice cream shop website built with Parcel by a team of five
            developers. I personally worked on the header and the section-hero.
            Created animations and transitions during events.{' '}
            <span className="sps-spr3">[</span> HTML5, CSS3
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://sofiiashevtsova.github.io/films_list/">
            Filmoteka
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/films_list.git">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            A site for finding movies. Developed by a team of 8 members. I was
            personally involved in storing the selected films in LocalStorage
            and displaying them on the library page. I also worked with requests
            for movie genres and processing the response to this request.
            <span className="sps-spr3">[</span> HTML5, CSS3, JS, REST API
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://dulcet-dodol-f6ff6a.netlify.app/">
            Travel App
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/travel-app">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            A site for searching and booking trips with a convenient interface.
            Was developed by me personally.
            <span className="sps-spr3">[</span> React, Redux, TS, API
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://first-next-js-project-1xey.vercel.app/">
            Promptopia
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/first-next-js-project">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            My firs project with Next.js and NextAuth. The site where you can share your prompt.
            Was developed by me personally.
            <span className="sps-spr3">[</span> Next.js, Node.js, TS, API
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://sofiiashevtsova.github.io/goit-js-hw-11/">
            Image search
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/goit-js-hw-11">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            Image search site. Developed by me on the Parcel assembly. The
            functions of infinite scrolling are implemented, there is also
            smooth scrolling. Working with API requests.{' '}
            <span className="sps-spr3">[</span> HTML5, CSS3, JS, API
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://sofiiashevtsova.github.io/goit-react-hw-08-phonebook/">
            Phonebook
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/goit-react-hw-08-phonebook.git">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            Application for user authorization. The user's private collection of
            contacts. Developed independently. Shows working with Chakra ui.
            Adding elements to the DOM using React.
            <span className="sps-spr3">[</span> HTML5, CSS3, React, JS, Chakra
            ui
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://sofiiashevtsova.github.io/Bobrus-cake/">
            Bobrus-cake
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/Bobrus-cake.git">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            A one-page website designed for a sole proprietor who makes custom
            cakes. Developed using React and Chakra. Adaptive layout for three
            types of devices (desktop, tablet, mobile phone)
            <span className="sps-spr3">[</span> HTML5, CSS3, React, JS, Chakra
            ui
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://sofiiashevtsova.github.io/brainnest_JS/index.html">
            Game
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/brainnest_JS.git">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            A site that contains two games and a calculator. Written in pure
            JavaScript without the use of libraries.
            <span className="sps-spr3">[</span> HTML5, CSS3, JS
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>

        <li className="sps-spr">
          <LinkProjectStyle target='-blank' href="https://sofiiashevtsova.github.io/my-project-js/">
            My notes and list-buy
          </LinkProjectStyle>
          <LinkGitStyle target='-blank' href="https://github.com/SofiiaShevtsova/my-project-js">
            Link to GitHub
          </LinkGitStyle>
          <TextProjectStyle>
            A site for organizing your classes. Developed independently. Shows
            working with local storage. Adding elements to the DOM using JS.
            <span className="sps-spr3">[</span> HTML5, CSS3, JS
            <span className="sps-spr3">]</span>
          </TextProjectStyle>
        </li>
      </ProjectListStyle>
    </div>
  );
};
export default MeProject;
