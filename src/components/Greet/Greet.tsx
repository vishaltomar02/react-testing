import { GreetProps  } from "./Greet.types";

function Greet(props: GreetProps){
  return (
    <div>
      Hello {props.name ? props.name : 'Vishal'}
    </div>
  )
}

export default Greet;