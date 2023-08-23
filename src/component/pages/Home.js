import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Table,
  Radio,
  Checkbox,
  Select,
  Space,
} from "antd";
import "./home.css";
const { Option } = Select;

const Home = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");
  let [age, setAge] = useState(20);
  let [address, setAddress] = useState("");
  let [hobbies, setHobbies] = useState([""]);
  let [gender, setGender] = useState("Female");
  let [country, setCountry] = useState("Việt Nam");
  let [check, setCheck] = useState(false);
  let [list, setList] = useState([
    {
      id: 1,
      name: "Lý Thị Thu Hương",
      age: 20,
      address: "Bắc Giang",
      hobbies: ["Reading"],
      gender: "Female",
      country: "Việt Nam",
    },
    {
      id: 2,
      name: "Trần Thị Mỹ Dung",
      age: 20,
      address: "Hưng Yên",
      hobbies: ["Cooking"],
      gender: "Female",
      country: "Việt Nam",
    },
    {
      id: 3,
      name: "Nguyễn Văn A",
      age: 25,
      address: "Hà Nội",
      hobbies: ["Reading", "Swimming"],
      gender: "Male",
      country: "Canada",
    },
  ]);
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const clickCount = () => {
    setCount(count + 1);
  };

  const add = () => {
    let newData = {
      id: list.length + 1,
      name: name,
      age: age,
      address: address,
      hobbies: hobbies,
      gender: gender,
      country: country,
    };
    list.unshift(newData);
    setList([...list]);
  };

  const findRecordById = (id) => {
    return list.find((item) => item.id === id);
  };

  const handleDetail = (id) => {
    let obj = findRecordById(id);
    setName(obj.name);
    setAge(obj.age);
    setAddress(obj.address);
    setHobbies(obj.hobbies);
    setGender(obj.gender);
    setCountry(obj.country);
    setCheck(true);
  };

  const handleUpdate = (id) => {
    if (check === false) {
      alert("Hãy chọn bản ghi cần update");
      return;
    }
    let newData = {
      name: name,
      age: age,
      address: address,
      hobbies: hobbies,
      gender: gender,
      country: country,
    };

    let updateList = list.map((record) => {
      if (record.id === id) {
        return { ...record, ...newData };
      }
      return record;
    });
    setList(updateList);
  };

  const handleDelete = (id) => {
    let deleteList = list.filter((record) => record.id !== id);
    setList(deleteList);
  };

  const onFinish = (values) => {
    const newData = {
      key: Date.now(),
      ...values,
    };
    setData([...data, newData]);
    form.resetFields();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Hobbies",
      dataIndex: "hobbies",
      key: "hobbies",
      render: (hobbies) => hobbies.join(", "),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => handleDetail(record.id)}
          >
            Detail
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => handleUpdate(record.id)}
          >
            Update
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="test">
      <span>{count}</span>
      <button onClick={clickCount}>Increase</button>
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Name" rules={[{ required: true }]}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Age" rules={[{ required: true }]}>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Address" rules={[{ required: true }]}>
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Item>
        <Form.Item label="Hobbies" rules={[{ required: true }]}>
          <Checkbox.Group
            value={hobbies}
            onChange={(value) => setHobbies(value)}
          >
            <Checkbox value="Reading">Reading</Checkbox>
            <Checkbox value="Swimming">Swimming</Checkbox>
            <Checkbox value="Cooking">Cooking</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Gender" rules={[{ required: true }]}>
          <Radio.Group
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Country" rules={[{ required: true }]}>
          <Select value={country} onChange={(value) => setCountry(value)}>
            <Option value="Việt Nam">Việt Nam</Option>
            <Option value="UK">UK</Option>
            <Option value="Canada">Canada</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={add}>
            Add
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} rowKey="id" dataSource={list} />
    </div>
  );
};

export default Home;
