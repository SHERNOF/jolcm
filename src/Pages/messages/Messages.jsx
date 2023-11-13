
import React from 'react'
import Container from '../../UI/container/Container'
import Title from '../../UI/title/Title'
import classes from './messages.module.css'

export default function Messages() {
  return (
    <Container>
    <div className={classes.messagesContainer}>
      <div style={{width:'100%'}}><Title>Messages</Title></div>
      <div className={classes.messagesContent}>
        <table style={{width:'100%', fontSize:'.6em', borderCollapse:'collapse'}}>
          <tr>
            <th>Received</th>
            <th>From</th>
            <th>Messages</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </table>
      </div>
    </div>
    </Container>
  )
}
