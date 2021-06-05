// import React from 'react';
// import ButtonComponents from './Buttoncomponents';
// import CardImageMap from './CardImageMap';
// import Logo from "./../assets/Images/man.png";
// class CardComponents extends React.Component
// {
//     constructor()
//     {
//       super()
//       this.state = {
//         Card: [{
//         title:'shital',
//         description:'hii shital',
//         price:100,
//        },{
//         title:'shital',
//         description:'hii shital',
//         price:100,
//        },
//        {
//         title:'shital',
//         description:'hii shital',
//         price:100,
//        },
//        {
//         title:'shital',
//         description:'hii shital',
//         price:100,
//        }]
//     }
//     }
    
   
//     render()
//     {

//       console.log(this.state)
//       return(
//         <div>
//           <img src={Logo} ></img>
//           <ButtonComponents className="addbtnlogo"></ButtonComponents>
//          <CardImageMap data={this.state.Card}></CardImageMap>
//         </div>)
//     }
// }

// export default CardComponents; 
import React from 'react';
import ButtonComponents from './Buttoncomponents';
import CardImageMap from './CardImageMap';
import { FaPhoneAlt, FaUser, FaEnvelope, FaCartPlus } from "react-icons/fa";
class CardComponents extends React.Component
{
    constructor()
    {
      super()
      this.state = {
        Card: [{
        img:<FaUser/>,
        title:'Temple',
        description:'Burma Teakwood Carving Temple',
        price:100,
       },{
        img:<FaCartPlus/>,
        title:'Temple',
        description:'Burma Teakwood Carving Temple',
        price:100,
       },
       {
        img:<FaEnvelope/>,
        title:'Temple',
        description:'Burma Teakwood Carving Temple',
        price:100,
       },
       {
        img:<FaPhoneAlt/>,
        title:'Temple',
        description:'Burma Teakwood Carving Temple',
        price:100,
       }]
    }
    }
    
   
    render()
    {

      console.log(this.state)
      return(
        <div>
          <section>
            <title title="services"> </title>
            <div>
              {this.state.Card.map(item=>{
                return(
                  <article key={`item- ${item.title}`}>
                    <span>{item.img}</span>
                    <h6>{item.title}</h6>
                    <h6>{item.description}</h6>
                    <p>{item.price}</p>
                    <ButtonComponents/>
                  </article>
                )
              })}
            </div>
          </section>
        </div>)
    }
}

export default CardComponents; 





