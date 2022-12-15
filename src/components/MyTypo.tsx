import { Typography } from "@mui/material"
import React from "react"
type Props ={
    text2: string
}
const MyTypo = (props:Props) => {
  return (
    <Typography color="red">Hazem test {props.text2}</Typography>
  )
}

export default MyTypo