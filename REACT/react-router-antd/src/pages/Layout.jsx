import React from 'react'
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Badge, Table } from 'antd'
import { Route, Link} from 'react-router-dom'
import { UserOutlined, SmileOutlined } from '@ant-design/icons'


const { Header , Sider, Content, Footer } = Layout

function DropMenu () {
    return(
        <Menu>
            <Menu.Item key='0'>
                <a href="#">me</a>
            </Menu.Item>
            <Menu.Item key='1'>
                <a href="#">us</a>
            </Menu.Item>            
        </Menu>
    )
}

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

function Table1 () {
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}

class PageLayout extends React.Component {
    render () {
        return (
            <Layout>
                <Header style={ {color:'#fff', textAlign:'center', font:'blod'}}>
                    <Row>
                        <Col span={10}>React + Antd 实战</Col>
                        <Col span={8}>
                            <Input placeholder="请输入你想要的"/>
                        </Col>
                        <Col span={6}>
                            <Avatar style={{background:'#666', marginRight: 20}} icon={<UserOutlined/>}/>
                            <Dropdown overlay={DropMenu}>
                                <span>hi</span>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Layout style={{position:'relative'}}>
                    <Sider>
                        <Menu mode='inline' defaultSelectedKeys={['sub2-1']} defaultOpenKeys={['sub1']} style={{width: 256, height: '90vh', overflow:'auto', minWidth:256}}>
                            <Menu.SubMenu key='sub1' title={<span><SmileOutlined/>部分UI组件实践</span>}>
                                <Menu.Item key='sub1-1'><Link to={{pathname:'/table', search:'?id:1'}}>表格展示</Link></Menu.Item>
                                <Menu.Item key='sub1-2'>下拉菜单</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key='sub2' title={<span><SmileOutlined/>部分UI组件实践</span>}>
                                <Menu.Item key='sub2-1'>表格展示2</Menu.Item>
                                <Menu.Item key='sub2-2'>下拉菜单2</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{marginLeft: '5%'}}>
                        <Route exact path='/table' component={Table1}/>
                    </Content>
                    <Footer style={{ boxSizing:'border-box', position:'absolute', bottom:'0', left:256,right:0, textAlign:"center"}}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default PageLayout