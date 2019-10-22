import React from 'react'
import { Layout } from './layout/Layout'
import 'antd/dist/antd.css'
import { Auth } from './auth/Auth';


export default function App() {
  return (
    <Auth>
      <Layout />
    </Auth>
  );
}