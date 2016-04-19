import React,{ Component }from 'react'
import ReactDom from 'react-dom'
import { Calendar,DatePicker,Button } from 'antd'
import { Router,Route,browserHistory,Link } from 'react-router'
import { Foo } from './components/Base.js'
//引入css #css-loader
import 'antd/lib/index.css'
import '../dist/build/main.css'

ReactDom.render(<Foo />,document.querySelector('#container'))
