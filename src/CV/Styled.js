const { default: styled } = require("@emotion/styled");


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
        background-color: #055017;
        color:#fff;
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

    SvgStyle: styled.svg`
display: inline-flex;
justify-content: center;
align-items: center;
margin-right: 10px;
fill: #fff;
    `,

    ContactsStyle: styled.a`
    color: #fff;
text-decoration: none;

    `,

    AvatarStyle: styled.img`
    width: 85%;
    display: block;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: -8px 8px 24px 10px rgba(79, 212, 85);
    `,
    
    MainStyle: styled.div`
            display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 40px;
    width: 60%;
    color: #05421c;
    `,

    WorkStyle: styled.h2`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;`,

    SpecifikStyle: styled.p`
        font-size: 12px;
    `,
    NameStyle: styled.h1`
    font-weight: 700;
    font-size: 48px;
    `,

    AboutMeStyle: styled.p`
    font-size: 22px;
margin-bottom: 45px;
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
    border-bottom: 5px solid rgb(8, 54, 18);
    `,
    EducationSpecifik: styled.p`
        font-weight: 400;
    font-size: 20px;
text-decoration: underline;
    margin-bottom: 10px;
    `,
        EducationTime: styled.p`
    font-weight: 500;
    font-size: 18px;
    `,
        
    WorksBox: styled.div`
        display: flex;
    flex-direction: column;
    gap: 20px;
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
    gap: 15px;
    list-style-position: inside;
    `,

    LinkProjectStyle: styled.a`
        font-weight: 700;
    font-size: 20px;
        text-decoration: none;
    color: inherit;
    cursor: pointer;
    `,

    TextProjectStyle: styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-top: 5px;`,

}

export default StyledList;