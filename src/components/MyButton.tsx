import { Button } from '@mui/material'
import React from 'react'

type Props = {
  text: string
}

const MyButton = (props: Props) => {
  return <Button variant='contained'>{props.text}</Button>
}

export default MyButton
