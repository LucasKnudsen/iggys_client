import React from 'react'
import { Item, Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import avatar from '../assets/avatar.jpg'

const MyProfile = () => {
  const { user } = useSelector(state => state)

  return (
    <Item.Group>
      <Item>
        <Item.Image as={Image} size="small" circular src={avatar} style={{height: 200, width: 200, objectPosition: '70% 70%'}}/>
        <Item.Content verticalAlign="middle">
          <Item.Header>{user.name}</Item.Header>
          <Item.Meta>{user.dog_name ? user.dog_name : 'Add your best friend here'}</Item.Meta>
          <Item.Extra>{user.email}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default MyProfile
