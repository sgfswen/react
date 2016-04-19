import React,{ Component }from 'react'
import ReactDom from 'react-dom'
import { Calendar,DatePicker,Button } from 'antd'
import { Router,Route,browserHistory,Link } from 'react-router'
//引入css #css-loader
import 'antd/lib/index.css'

ReactDom.render(<Calendar />,document.querySelector('#container'))
