import "./navigation-item.css";
export default function navigationItem({ textLink, icon }) {
  return (
    <>
      <li className="navigation-item">
        <span className="navigation-item__icon">{icon}</span>
        <a className="navigation-item__link">{textLink}</a>
      </li>
    </>
  );
}
