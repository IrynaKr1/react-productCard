import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getUsersThunk } from '../../store/slices/usersSlice';

function UsersList ({ users, isFetching, error, getUsers }) {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {isFetching && <div>Loading!!!!!</div>}
      {error && <div>Error!!!!!!</div>}
      {!isFetching && !error && (
        <ul>
          {users.map(u => (
            <li key={u.login.uuid}>
              <img src={u.picture.thumbnail} alt='' />
              <h3>{`${u.name.first} ${u.name.last}`}</h3>
              <p>{u.email}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
const mapStateToProps = ({ usersList }) => usersList;
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersThunk()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
