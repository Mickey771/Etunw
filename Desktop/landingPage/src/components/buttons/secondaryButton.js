import React from 'react'
import {Button} from "reactstrap"
import "../../custom-css/componentStyle.css"
const SecondaryButton = (props) => {
  return (
    <>
        <Button className='btn_bg mbl_btn_bg'>{props.value}</Button>
    </>
  )
}

export default SecondaryButton