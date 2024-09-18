import React from 'react'
import  "./App.css"
import SingleTab from './SingleTab';

  function RandomComponent() {
    return <h1>Some random content</h1>;
    }
  

function Tabs() {

    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <RandomComponent />,
        },
      ];

  return (
   <SingleTab tabs={tabs}  />
  )
}

export default Tabs