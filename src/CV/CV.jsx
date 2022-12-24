import SiteBar from './SiteBar';
import Main from './Main';
import StyledList from './Styled'

const { ResumeBox} = StyledList

const { Component } = require('react');

class Resume extends Component {
  state = {};
  render() {
    return (
      <ResumeBox>
      <SiteBar/>  
       <Main/> 
      </ResumeBox>
    );
  }
}

export default Resume;
