import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import { Table, Button } from "antd";

  const columns = [
  {
    title: "Birth",
    dataIndex: "birth",
    key: "birth",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.birth - b.birth,
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: "Death",
    dataIndex: "death",
    key: "death"
  },

  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender"
  },

  {
    title: "Hair",
    dataIndex: "hair",
    key: "hair"
  },

  {
    title: "Height",
    dataIndex: "height",
    key: "height"
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Race",
    dataIndex: "race",
    key: "race",
    filters: [
      { text: "Human", value: "Human" },
      { text: "Elf", value: "Elf" },
      { text: "Dwarf", value: "Dwarf" },
      { text: "Hobbit", value: "Hobbit" },
      { text: "Maiar", value: "Maiar" },
      { text: "Ent", value: "Ent" },
      { text: "Orcs", value: "Orcs" }
    ],
    onFilter: (value, record) => record.race === value,
  },

  {
    title: "Realm",
    dataIndex: "realm",
    key: "realm"
  },

  {
    title: "Spouse",
    dataIndex: "spouse",
    key: "spouse"
  },

  {
    title: "WikiUrl",
    dataIndex: "wikiUrl",
    key: "wikiUrl"
  }
];

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://the-one-api.herokuapp.com/v1/character",
        { headers: { Authorization: "Bearer LfbRLQWWIRQ1Gbi755js" } }
      );

      setCharacters(response.data);
    }
    fetchData();
  }, []);

  const onChange=(filters, sorter) => {
    console.log(filters,sorter);
  }

  return (
    <Fragment>
      <div>
        <Button>Clear filters</Button>
      </div>
      <div>
        <Table
          dataSource={characters.docs}
          columns={columns}
          onChange={onChange}
          rowKey={x => x._id}
        />
      </div>
    </Fragment>
  );
};
