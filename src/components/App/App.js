// tạo commponent
import React,{Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftContent from '../content/LeftContent';
import RightContent from '../content/RightContent';
// arrow fuction (khuyến khích dung)
var Three = ()=>(
  <div>
    <i>Tôi là PNV 24A</i>
  </div>
);

// anonymous fuction 
var Tow = function () {
  return(
    <div>
      <u>Tôi là Đi PNV 24B</u>
    </div>
  );
  
}


// fuction thông thương
function Di() {
  return <div> Chào bạn</div>  
}


// tạo fuction bằng class gọi tắt rcjc (reactjs code snippes tiện ích)
class Four extends Component {   // nhớ thêm import React,{Component} from 'react';
  render() {
    return (
      <div> happy </div>
    );
  }
}



function App() {
  return (
      <div id="container">
      <Header></Header>
      {/* this is content area */}
      <div id="content">
      {/* this is the content for menu */}

      <LeftContent></LeftContent>
      {/* this is a content for item  */}
      <RightContent></RightContent>
            <div style={{clear: 'both'}} />
         </div>
         {/* footer content */}
      <Footer></Footer>
      </div>
      );
      }


export default App;
