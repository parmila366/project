interface IHome {
  name: string;
  address: string;
}



const Home = (props: IHome)=>{
  return(
    <div>
      <h1>hello {props.name}</h1>
      <h2>from{props.name}</h2>
    </div>
     
 );
}
//we can also use this 
// const Home = ({name, address}: IHome) =>{
    // return(
    //    <div>
    //      <h1>hello {name}</h1>
    //      <h2>from{address}</h2>
    //    </div>
        
    // );
// };
export default Home;