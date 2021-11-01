import { Button, Card } from "react-bootstrap";


// const Card = (props) => {
//   return (
//       <div className="card">
//           <div className="card-body">
//               <img src={props.img} />
//               <h3 className="card-title">{props.title}</h3>
//               <p className="card-description">{props.description}</p>
//           </div>
//           <button className="card-btn">Learn More</button>

//       </div>
//   );
// };

const Card1 = (props) => {
  return (
  <>
  <div className="card">
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  </>
  )
};

export default Card1;
