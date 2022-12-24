import StyledList from './Styled';

const { SiteBarTitleStyle, ListStyle, SvgStyle, ContactsStyle } = StyledList;

const Contacts = props => {
  return (
    <div>
      <SiteBarTitleStyle> Контакти </SiteBarTitleStyle>
      <ListStyle>
        <li>
          <ContactsStyle href="mailto:sofika2404@mail.com">
            <SvgStyle width="20" height="16" viewBox="0 0 20 15">
              <path d="M15 3H3c-.825 0-1.492.675-1.492 1.5l-.008 9c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5Zm-.3 3.188L9.398 9.502a.759.759 0 0 1-.796 0L3.3 6.188a.637.637 0 1 1 .675-1.08L9 8.25l5.025-3.143a.637.637 0 1 1 .675 1.08Z" />
            </SvgStyle>
            sofika2404@mail.com
          </ContactsStyle>
        </li>

        <li>
          <ContactsStyle href="tel:+48507755251">
            <SvgStyle width="18" height="16" viewBox="0 0 10 16">
              <path d="m11.996 9.123-1.838-.21a1.44 1.44 0 0 0-1.187.412l-1.332 1.332a10.888 10.888 0 0 1-4.769-4.77L4.21 4.55a1.44 1.44 0 0 0 .412-1.187l-.21-1.824a1.448 1.448 0 0 0-1.44-1.28H1.72C.902.257.222.937.272 1.754c.384 6.18 5.327 11.116 11.5 11.5.817.05 1.498-.63 1.498-1.448v-1.252a1.434 1.434 0 0 0-1.274-1.432Z" />
            </SvgStyle>
            +48 507 755 251
          </ContactsStyle>
        </li>
        <li>
          <ContactsStyle href="https://www.linkedin.com/in/sofiiashevtsova/">
            <SvgStyle width="18" height="18" viewBox="0 0 32 32">
              <path d="M31.992 32v-0.001h0.008v-11.736c0-5.741-1.236-10.164-7.948-10.164-3.227 0-5.392 1.771-6.276 3.449h-0.093v-2.913h-6.364v21.364h6.627v-10.579c0-2.785 0.528-5.479 3.977-5.479 3.399 0 3.449 3.179 3.449 5.657v10.401h6.62z"></path>
              <path d="M0.528 10.636h6.635v21.364h-6.635v-21.364z"></path>
              <path d="M3.843 0c-2.121 0-3.843 1.721-3.843 3.843s1.721 3.879 3.843 3.879c2.121 0 3.843-1.757 3.843-3.879-0.001-2.121-1.723-3.843-3.843-3.843v0z"></path>
            </SvgStyle>
            Sofiia Shevtsova
          </ContactsStyle>
        </li>
        <li>
          <ContactsStyle href="https://github.com/SofiiaShevtsova">
            <SvgStyle viewBox="0 0 24 24" width="18" height="18">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
            </SvgStyle>
            Sofiia Shevtsova
          </ContactsStyle>
        </li>
      </ListStyle>
    </div>
  );
};

export default Contacts;
