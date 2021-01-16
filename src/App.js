import './App.css';
import '@ant-design/pro-layout/dist/layout.css';
import React, { useState } from 'react';
import { BrowserRouter  as Router, Link, Route } from 'react-router-dom';
import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd';

import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import { ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';

const Home = () => (
  <Result
    status="500"
    style={{
      height: '100%',
      background: '#fff',
    }}
    title="aaaa"
    subTitle="aaaaa"
    extra={<Link to="/dashboard/anyParams"><Button type="primary">hahaha</Button></Link>}
  />
)
export default () => {
  const [settings, setSetting] = useState(undefined);
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <Router>
        <ProLayout
          {...defaultProps}
          location={{
            pathname,
          }}
          fixSiderbar

          onMenuHeaderClick={(e) => console.log(e)}
          menuItemRender={(item, dom) => (
            <a
              onClick={() => {
                setPathname(item.path || '/welcome');
              }}
            >
              <Link to={item.path}>{dom}</Link>
            </a>
          )}
          rightContentRender={() => (
            <div>
              <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </div>
          )}
          {...settings}
        >
          <PageContainer
            fixedHeader
            header={{
              title: '页面标题',
            }}
            tabList={[
              {
                tab: '已选择',
                key: '1',
              },
              {
                tab: '可点击',
                key: '2',
              },
              {
                tab: '禁用',
                key: '3',
                disabled: true,
              },
            ]}
            extra={[
              <Button key="3">操作</Button>,
              <Button key="2">操作</Button>,
              <Button key="1" type="primary">
                主操作
            </Button>,
            ]}
            footer={[
              <Button key="rest">重置</Button>,
              <Button key="submit" type="primary">
                提交
            </Button>,
            ]}
          >
            <div
              style={{
                height: '120vh',
              }}
            >
              <Route path="/admin/test" exact component={Home}></Route>
              <Result
                status="404"
                style={{
                  height: '100%',
                  background: '#fff',
                }}
                title="Hello World"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Link to="/admin/test"><Button type="primary">Back Home</Button></Link>}
              />
            </div>
          </PageContainer>
        </ProLayout>
        <SettingDrawer
          getContainer={() => document.getElementById('test-pro-layout')}
          settings={settings}
          onSettingChange={(changeSetting) => setSetting(changeSetting)}
        />
      </Router>
    </div>
  );
};
