import User from "../../components/user/user";
import "./usersPage.css";
const users = [
  {
    surname: "Золотарёв",
    name: "Антон",
    patronymic: "Евгеньевич",
    interpreter:
      "Судебной статистики и правовой информатизации кодификации и систематизации законодательства",
    room: "310",
    mobilePhone: "+79591520343",
    email: "anton.zolotaryov27@yandex.ru",
    landlinePhone: "50-16-35",
    dateOfBirth: "27.10.1993",
    status: "online",
  },
  {
    surname: "Золотарёв",
    name: "Антон",
    patronymic: "Евгеньевич",
    interpreter:
      "Судебной статистики и правовой информатизации кодификации и систематизации законодательства",
    room: "310",
    mobilePhone: "+79591520343",
    email: "anton.zolotaryov27@yandex.ru",
    landlinePhone: "50-16-35",
    dateOfBirth: "27.10.1993",
    status: "online",
  },
];

const usersPage = () => {
  return (
    <table className="user-table">
      <caption>Сотрудники</caption>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Отдел</th>
          <th>Помещение</th>
          <th>Мобильный телефон</th>
          <th>E-mail</th>
          <th>Стационарный телефон</th>
          <th>Дата рождения</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <User users={users} />
      </tbody>
    </table>
  );
};

export default usersPage;
