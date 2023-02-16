import { useEffect, useState } from "react";
import { ListProps } from "./ListComponent.types";

export default function ListComponent(props: ListProps) {
  const { listItems } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1500)
  }, []);

  return (
    <div>
      <ul>
        {
          listItems.map((item) => {
            return (
              <li key={item}>
                {item}
              </li>
            )
          })
        }
      </ul>
      <div>
        {
          isLoggedIn ? 
          <button>Start Streaming</button> :
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        }
      </div>
    </div>
  )

}