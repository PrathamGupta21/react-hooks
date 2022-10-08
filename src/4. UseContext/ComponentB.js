import React, { useContext } from "react";
import { IdContext, UserContext } from "../App";

function ComponentB() {
  const user = useContext(UserContext);
  const Id = useContext(IdContext);

  return (
    <div>
      {user}-{Id}
    </div>
  );
}

export default ComponentB;
