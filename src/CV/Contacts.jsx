import StyledList from './Styled';

const { SiteBarTitleStyle, ListStyle, ContactsStyle } = StyledList;

const Contacts = props => {
  return (
    <div>
      <SiteBarTitleStyle> Contacts </SiteBarTitleStyle>
      <ListStyle>
        <li>
          <ContactsStyle href="mailto:sofika2404@mail.com">
            sofika2404@mail.com
          </ContactsStyle>
        </li>

        <li>
          <ContactsStyle href="tel:+48507755251">
            +48 507 755 251
          </ContactsStyle>
        </li>
        <li>
          <ContactsStyle href="https://www.linkedin.com/in/sofiiashevtsova/">
            Linkedin
          </ContactsStyle>
        </li>
        <li>
          <ContactsStyle href="https://github.com/SofiiaShevtsova">
           GitHub
          </ContactsStyle>
        </li>
        <li>
          <ContactsStyle href="https://t.me/+380680157436">
           Telegram
          </ContactsStyle>
        </li>
      </ListStyle>
    </div>
  );
};

export default Contacts;
