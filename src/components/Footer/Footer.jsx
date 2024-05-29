import { FOOTERDATA } from "../../data/inputs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="">
      <div>
        <ul className="">
          {FOOTERDATA.map(({ id, name, path }) => {
            <li className="" key={id}>
              <Link to={path}>{name}</Link>
            </li>;
          })}
        </ul>
      </div>
    </footer>
  );
}
