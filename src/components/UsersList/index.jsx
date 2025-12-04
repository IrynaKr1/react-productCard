import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getUsersThunk } from '../../store/slices/usersSlice';
import styles from './UsersList.module.scss';

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
            <li key={u.login.uuid} className={styles.listElement}>
              <div className={styles.imgContainer}>
                <img src={u.picture.thumbnail} alt='' />
              </div>
              <div>
                <h3>{`${u.name.first} ${u.name.last}`}</h3>
                <p>{u.email}</p>
              </div>
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
