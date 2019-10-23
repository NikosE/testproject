import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import {Table, Button} from 'antd'

const columns = [
    
  {
    title: 'Birth',
    dataIndex: 'birth',
    key: 'birth',
  },

  {
    title: 'Death',
    dataIndex: 'death',
    key: 'death',
  },

  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },

  {
    title: 'Hair',
    dataIndex: 'hair',
    key: 'hair',
  },

  {
    title: 'Height',
    dataIndex: 'height',
    key: 'height',
  },
  
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Race',
    dataIndex: 'race',
    key: 'race',
    filters: [
      { text: 'Human', value: 'Human'}, 
      { text: 'Elf', value: 'elf'}, 
      { text: 'Dwarf', value: 'dwarf'}, 
      { text: 'Hobbit', value: 'hobbit'}, 
      { text: 'Maiar', value: 'maiar'},
      { text: 'Ent', value: 'ent'},
      { text: 'Orcs', value: 'orcs'},
    ],
    onFilter: (value, record) => record.name.indexOf(value),
  },

  {
    title: 'Realm',
    dataIndex: 'realm',
    key: 'realm',
  },

  {
    title: 'Spouse',
    dataIndex: 'spouse',
    key: 'spouse',
  },

  {
    title: 'WikiUrl',
    dataIndex: 'wikiUrl',
    key: 'wikiUrl',
  },
]

export const Home = () => {

  const [characters, setCharacters] = useState([])

  const [ filteredInfo, setFilteredInfo] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://the-one-api.herokuapp.com/v1/character",{headers: {'Authorization': 'Bearer LfbRLQWWIRQ1Gbi755js'}})
    
      setCharacters(response.data)
    }
    fetchData() 

  }, [])

  const handleChange = filters =>{
    setFilteredInfo(filters)
  }

  const clearFilters = () => {
    setFilteredInfo(null)
  }
  
return(
  <Fragment>
  <div>
    <Button onClick={clearFilters}>Clear filters</Button>
  </div>
  <div>
    <Table dataSource={characters.docs} columns={columns} onChange={handleChange} rowKey={x=>x._id}/>
  </div>
  </Fragment>
)
}