import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 15 }}>
      <Menu pointing secondary compact style={{ justifyContent: 'space-evenly', listStyle: 'none'}}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={(event, { name }) => setActiveItem(name)}
        />
        <Menu.Item
          name='stories'
          active={activeItem === 'stories'}
          onClick={(event, { name }) => setActiveItem(name)}
        />
        <Menu.Item
          name='shop'
          active={activeItem === 'shop'}
          onClick={(event, { name }) => setActiveItem(name)}
        />
      </Menu>
    </div>
  )
}

export default Navbar
