import React from 'react'

function List() {
    let tempData =["Apple","Banana","Mango","Grapes"]
  return (
    <div>
      {
      (tempData.length ==0 ? (
        <h1>No Data</h1>
       ) : (
        tempData.map((item, i) => {
          if (i == 1) {
            return <i>{item}</i>;
          } else {
            return <h1>{item}</h1>;
          }

        })
      ))
    }
    </div>
  
  );
}

export default List
