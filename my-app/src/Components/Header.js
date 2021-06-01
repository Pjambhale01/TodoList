import React from 'react'
import Input from './Input'
class Header extends React.Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        return (
            <div>
                {/* <h1 style={{marginLeft:'500px'}}>Todo list</h1> */}
                <Input/>
            </div>
        )
    }
}    
export default Header