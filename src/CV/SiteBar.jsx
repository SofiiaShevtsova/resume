import Contacts from './Contacts';
import Skills from './TechSkills';
import StyledList from './Styled';
import avatar from '../images/user.jpg';

const { SiteBarStyle, AvatarStyle } = StyledList;

const SiteBar = props => {
  return (
    <SiteBarStyle>
      <AvatarStyle src={avatar} alt="user" />
      <Contacts />
      <Skills />
    </SiteBarStyle>
  );
};

export default SiteBar;
