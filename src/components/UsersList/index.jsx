import { connect } from 'react-redux';

function UsersList ({ users, isFetching, error }) {
  return (
    <>
      {isFetching && <div>Loading!!!!!</div>}
      {error && <div>Error!!!!!!</div>}
      {!isFetching && !error && (
        <ul>
          {users.results.map(u => (
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
export default connect(mapStateToProps)(UsersList);
