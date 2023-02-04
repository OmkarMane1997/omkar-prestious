import React, { memo } from 'react'
function Child({count1,setCount1}) {
    console.log('childe component render')
 console.log(count1,)
  return (
    <div>Child</div>
    
  )
}

export default memo(Child)