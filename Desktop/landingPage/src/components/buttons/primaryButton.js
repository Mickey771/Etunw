import React from 'react'
import "../../custom-css/componentStyle.css"
import {Button} from "reactstrap"

const PrimaryButton = (props) => {
  return (
    <>
        <div>
            <Button className='btn_primary_bg'>{props.value}</Button>
        </div>
    </>
  )
}

export default PrimaryButton