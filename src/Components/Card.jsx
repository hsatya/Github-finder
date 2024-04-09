/* eslint-disable react/prop-types */
const Card = ({ user }) => {
  return (
    <>
      <div className='col-md-4'>
        <div className='card' style={{ width: "18rem" }}>
          <img
            src={user.avatar_url}
            className='card-img-top'
            alt={user.login}
          />
          <div className='card-body'>
            <h5 className='card-title'>{user.login}</h5>
            <button className='btn btn-primary'>Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
