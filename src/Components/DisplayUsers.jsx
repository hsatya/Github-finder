/* eslint-disable react/prop-types */

import NavBar from "./NavBar";
import Card from "./Card";

const DisplayUsers = ({ users = [], searchTerm, setSearchTerm }) => {
  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <NavBar users={users} setSearchTerm={setSearchTerm} />
      <div className='row mt-4'>
        {filteredUsers?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default DisplayUsers;
