import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';


// 导入ant-design-mobile的样式的方式一
import 'antd-mobile/dist/antd-mobile.css'; // or 'antd-mobile/dist/antd-mobile.less'
// import 'antd-mobile/dist/antd-mobile.less'

// 导入ant-design-mobile的样式的方式二   按需加载
// 使用 babel-plugin-import     下载npm install babel-plugin-import --save-dev
import { Button } from 'antd-mobile'


function MyCom(){
  return(
    <div>
      <Button type="ghost" size="small" inline>按钮</Button>
    </div>
  )
} 

ReactDOM.render(
    <MyCom />,
  document.getElementById('root')
);

