import React, {useState, useContext} from 'react'
import { Menu, Icon, Button } from 'antd'
import { Link } from "react-router-dom"
import {AuthContext} from '../context/AuthContext'

export const Header = () => {

  const [menu, setMenu] = useState('')

  const auth = useContext(AuthContext)

  const handleClick = e => {
    setMenu( e.key )
  }

  return (
      <Menu onClick={handleClick} selectedKeys={menu.key} mode="horizontal">
        <Menu.Item key="characters">
          <Link to="/" >
          <Icon type="smile" theme="twoTone" />
           LOTR Characters
          </Link>
        </Menu.Item>
        <Menu.Item key="movies">
          <Link to="/movies" >
            <Icon type="video-camera" theme="twoTone" />
            Movies
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact" >
            <Icon type="mail" theme="twoTone" />
            Contact
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Button type="danger" onClick={auth.signOut}>Log Out</Button>
        </Menu.Item>
      </Menu>
  )
}