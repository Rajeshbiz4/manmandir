import React from 'react'
import img from "./../assets/Images/mandir.jpg";
import CardImageMap from './CardImageMap';

const Image = [{
    photo:{img}
   
}];

class CardComponents extends React.Component {
    constructor() {
        super()
        this.state =
        {

        }
    }

    render() {
        return (<div className="text-center" style={{height:'100px', width:'200px'}}>
            {Image.map((item)=>
                <CardImageMap image={item.photo}></CardImageMap>
                
            )}
        </div>)

            }
    }

export default CardComponents;