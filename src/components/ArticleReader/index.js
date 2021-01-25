import React from 'react'
import Iframe from 'react-iframe'
export default function ArticleReader(props){
    console.log('LOging', props);
    const {myUrl} = props.location.state
    return(
        <div>
        <Iframe url={myUrl}
          position="absolute"
          width="100%"
          id="myId"
          className="myClassname"
          height="100%"
          styles={{height: "25px"}}/>
        </div>
    )
}