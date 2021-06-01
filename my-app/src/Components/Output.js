import React from 'react'
class OutputOftodo extends React.Component{
    constructor(props){
        super(props)
    }
   
    render(){
        return(
            <div>
                <p>
            {this.props.OtputItem.map((item,index)=>{
                return<li><input type="checkbox" checked={item.checked} onChange={()=>{this.handleChecked()}}></input>{`Task ${item.task} Description ${item.Dis} planed ${item.Duedate}`}
                 <button onClick={(index)=>{this.DeleteItem(index)}}>Delet</button>
                
            </li>

            })}</p>
            </div>
        )
    }
}
export default OutputOftodo