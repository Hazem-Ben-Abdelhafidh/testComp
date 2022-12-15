import { Button } from '@mui/material'
import React from 'react'
import MyTypo from './MyTypo'

type Props = {
  text: string
}

const MyButton = (props: Props) => {

  return (<>
    <Button>
        <MyTypo text2='Pain'/> 
        {props.text}
    </Button>
  </>)
}

export default MyButton
