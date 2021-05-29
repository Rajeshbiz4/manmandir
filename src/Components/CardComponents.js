
import React from 'react'
//import logo from './../assets/Images/mandir.jpg';
import CardImageMap from './CardImageMap'

class CardComponent extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
          //  Mob:["../../../assets/Images/mandir."]
          images :[{src:'./../assets/Images/man.png'}]
            // { id: 1, src: './assets/Images/mandir.jpg', title: 'foo', description: 'bar' },
            // { id: 2, src: './assets/Images/mandir.jpg', title: 'foo', description: 'bar' },
            // { id: 3, src: './assets/Images/mandir.jpg', title: 'foo', description: 'bar' },
            // { id: 4, src: './assets/Images/mandir.jpg', title: 'foo', description: 'bar' },
            // { id: 5, src: './assets/Images/mandir.jpg', title: 'foo', description: 'bar' },
        // ]
        }
    }
    
    render()
    {
      console.log(this.state);
        return(<div>
                {/* <CardImageMap data={this.state.images} /> */}
                {this.state.images.map((index,item)=>
                {
                  return(<img key={index} src={item.src} style={{height:'100%',width:'100%'}}></img>)
                })}
              </div>)
    }
}
export default CardComponent;