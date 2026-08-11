import User from "../../components/user/user";
import Table from "../../components/table/table";
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

const usersTableConfig = {
  tableTitle: "Сотрудники",
  tableTitleGraph: [
    "ФИО",
    "Отдел",
    "Помещение",
    "Мобильный телефон",
    "E-mail",
    "Стационарный телефон",
    "Дата рождения",
    "Статус",
  ],
};

const usersPage = () => {
  return (
    <Table
      tableConfig={usersTableConfig}
      tableContent={<User users={users} />}
    />
  );
};

export default usersPage;
