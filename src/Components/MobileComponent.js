import React from 'react'
class MobileComponent extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {

        }
    }
    componentDidMount()
    {
        console.log(this.props);
    }
    // componentWillReceiveProps(nextprops)
    // {
    //     console.log(nextprops);
    // }
    render()
    {
        return(<div>
            <tr>
                  {this.props.data.map((item,index)=>
                 {
                 return(<div key={index}>{item}</div>)
                 })}
                 </tr> 
             </div>)
    }
}
export default MobileComponent;