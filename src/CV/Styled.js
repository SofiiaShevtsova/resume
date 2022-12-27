const { default: styled } = require('@emotion/styled');

const StyledList = {
  ResumeBox: styled.div`
    display: flex;
    margin: 0 auto;
    width: 1200px;
  `,

  SiteBarStyle: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 30px 30px;
    width: 40%;
    background-color: #1c324b;
    color: #fff;
  `,

  SiteBarTitleStyle: styled.h3`
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 10px;
    margin-left: 20px;
  `,

  ListStyle: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;
    list-style: none;
  `,

  ContactsStyle: styled.a`
    color: #fff;
    text-decoration: underline;
  `,

  AvatarStyle: styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 20px;
    margin-bottom: 15px;
  `,

  MainStyle: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 40px;
    width: 60%;
    color: #052141;
  `,

  WorkStyle: styled.h2`
    font-weight: 700;
    font-size: 24px;
  `,

  NameStyle: styled.h1`
    font-weight: 700;
    font-size: 36px;
  `,

  AboutMeStyle: styled.p`
    font-size: 22px;
    margin-bottom: 25px;
  `,
  SloganStyle: styled.span`
    display: block;
    margin-bottom: 5px;
  `,

  MainTitleStyle: styled.h3`
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 10px;
    margin-left: 20px;
  `,

  EducationItem: styled.li`
    font-weight: 700;
    font-size: 20px;
  `,
  EducationSpecifik: styled.p`
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 5px;
  `,
  EducationTime: styled.p`
    font-weight: 500;
    font-size: 18px;
  `,

  WorksBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  WorkName: styled.h4`
    font-weight: 700;
    font-size: 20px;
  `,

  WorkListStyle: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;
    list-style: disc;
    margin-top: 10px;
    list-style-position: inside;
  `,

  ProjectListStyle: styled.ol`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-position: inside;
  `,

  LinkProjectStyle: styled.a`
    font-weight: 700;
    font-size: 20px;
    color: inherit;
    cursor: pointer;
  `,

  LinkGitStyle: styled.a`
    font-weight: 500;
    font-size: 20px;
    color: inherit;
    cursor: pointer;
    margin-left: 15px;
  `,

  TextProjectStyle: styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-top: 5px;
  `,
};

export default StyledList;
