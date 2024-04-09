import { useState, useEffect } from "react";

import DisplayUsers from "./Components/DisplayUsers";

function App() {
  const usersUrl = "https://api.github.com/users";
  const [users, setUsers] = useState();
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch(usersUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <DisplayUsers
        users={users}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
}

export default App;
