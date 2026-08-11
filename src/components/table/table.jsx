import "./table.css";

const table = ({ tableConfig, tableContent }) => {
  return (
    <table>
      <caption>{tableConfig.tableTitle}</caption>
      <thead>
        <tr>
          {tableConfig.tableTitleGraph.map((titleGraph) => (
            <th>{titleGraph}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableContent}</tbody>
    </table>
  );
};

export default table;
