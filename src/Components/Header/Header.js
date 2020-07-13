import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const Header = ({src}) => {
  const useStyles = makeStyles({
    header: {
      width: '100%',
      padding: 0,
      margin: 0,
    }
  })
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <img width='100%' src={src} alt="Header Img"/>
    </div>
  )
}

export default Header
