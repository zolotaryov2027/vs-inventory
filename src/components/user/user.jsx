import "./user.css";

const user = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <tr className="user-item">
          <td className="cell-bold">
            {user.surname} {user.name} {user.patronymic}
          </td>
          <td>{user.interpreter}</td>
          <td>{user.room}</td>
          <td>{user.mobilePhone}</td>
          <td>{user.email}</td>
          <td>{user.landlinePhone}</td>
          <td className="cell-bold">{user.dateOfBirth}</td>
          <td>{user.status}</td>
        </tr>
      ))}
    </>
  );
};

export default user;
