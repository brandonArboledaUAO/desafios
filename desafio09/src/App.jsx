import { useState } from "react";
import "./App.css";
import buildMenu from "./menu";
import MenuItem from "./MenuItem";

export default function App() {
  const [menu] = useState(buildMenu);
  const [selected, setSelected] = useState(menu.children[0]);

  const Page = selected.component;

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">🦷 OdontoSoft</div>
        <nav>
          <ul>
            {menu.children.map((item) => (
              <MenuItem
                key={item.link}
                node={item}
                selected={selected}
                onSelect={setSelected}
              />
            ))}
          </ul>
        </nav>
      </aside>

      <main className="content">
        <Page />
      </main>
    </div>
  );
}