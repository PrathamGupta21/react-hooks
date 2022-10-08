import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(event) =>
            setName({ ...name, firstname: event.target.value })
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <h2>Your First Name is {name.firstname}</h2>
        <h2>Your Last Name is {name.lastName}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
