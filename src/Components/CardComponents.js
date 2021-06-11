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
import React from "react";
import ButtonComponents from "./Buttoncomponents";
import CardImageMap from "./CardImageMap";
import Logo from "./../assets/Images/mandir.jpg";
import mandir from "./../assets/Images/shame.webp";
import { FaPhoneAlt, FaUser, FaEnvelope, FaCartPlus } from "react-icons/fa";
class CardComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      Card: [
        {
          title: "Temple",
          description: " Carving Temple",
          price: 100,
        },
        {
          title: "Temple",
          description: "Carving Temple",
          price: 100,
        },
        {
          title: "Temple",
          description: "Carving Temple",
          price: 100,
        },
      ],
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="carddiv">
        <section className="sectioncard">
          {this.state.Card.map((item) => {
            return (
              <div>
                <div className="sectionimgdiv">
                  <img src={Logo} />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <ButtonComponents />
                </div>

                <div className="sectionimgdiv">
                  <img src={Logo} />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <ButtonComponents />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default CardComponents;
