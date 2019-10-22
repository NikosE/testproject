import React, {useState} from 'react'
import { Menu } from 'antd'
import { Link } from "react-router-dom"

export const Header = () => {

  const [menu, setMenu] = useState('')

  const handleClick = e => {
    setMenu( e.key )
  }

  return (
      <Menu onClick={handleClick} selectedKeys={menu.key} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/" >Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about" >About</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact" >Contact</Link>
        </Menu.Item>
      </Menu>
  )
}