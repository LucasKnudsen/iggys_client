import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import franky from '../assets/mainbox1image.jpg'

const MainBox1 = () => {
  return (
    <Segment raised style={{ padding: 0, margin: 50 }}>
      <Grid columns={2} >
        <Grid.Column>
          <Image alt="F" src={franky} style={{ height: 350 }} />
        </Grid.Column>
        <Grid.Column verticalAlign='middle' textAlign="left">
          <h2>Little Miss Franky</h2>
          <p>The absolutely most cutest dog you have seen!</p>
        </Grid.Column>

      </Grid>
    </Segment>
  )
}

export default MainBox1
