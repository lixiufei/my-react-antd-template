/**
 * @name Home
 * @desc 首页
 * @author
 * @version
 */

import React, { Component } from 'react'
import {Button} from 'antd'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>msg: aa</p>
                <div className="App">
                <Button type="primary">Button</Button>
                </div>
            </div>
            
        )
    }
}

export default Home