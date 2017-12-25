import React from 'react'
import { NavBar, InputItem, TextareaItem } from 'antd-mobile'
import AvatarSelector from '../../container/avatar-selector/avatar-selector'

class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'' 
        }
    }
    onChange(key, val){
        this.setState({
            [key]:val
        })
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">Boss Infomation Page</NavBar>
                <AvatarSelector></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange('title', v)}>
                    Position
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('company', v)}>
                    Company
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('money', v)}>
                    Salory
                </InputItem>
                <TextareaItem onChange={(v)=>this.onChange('desc', v)}>
                    Description
                </TextareaItem>
            </div>
        )
    }
}

export default BossInfo