import React from 'react'
import WithUseCallback from '../components/WithUseCallback'
import WithoutUseCallback from '../components/WithoutUseCallback'

const UseCallback = () => {

  return (
    <div className='page'>
        <div className="col-header">
        Change Theme to see Difference in console
      </div>

          <WithUseCallback/>
            <WithoutUseCallback/>
    </div>
  )
}

export default UseCallback