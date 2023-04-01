import React, { Component } from 'react';			
import LeftContent from '../content/LeftContent';			
import RightContent from '../content/RightContent';			
class Content extends Component {			
render() {			
return (			
<div>			
<div id="content">			
{/* this is the content for menu */}			
<LeftContent/>			
{/* this is a content for item */}			
<RightContent/>			
</div>			
</div>			
);			
}			
}			
			
export default Content;			