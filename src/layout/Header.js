import React, {useState} from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'


export const Header = () => {

   const [menu, setMenu] = useState(null)

   const handleClick = e => {
      setMenu(e.key)
   }

   return (
         <Menu onClick={handleClick} selectedKeys={[menu]} mode="horizontal">
            <Menu.Item key="home">
               <Icon type="home" />
               <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" >
               <Icon type="about" />
               <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="contact">
               <Icon type="contact" />
               <Link to="/contact">Contact</Link>
            </Menu.Item>
         </Menu>
   )
}