import { useMemo, useState } from "react";
import { DoublyLinkedList } from "../dataStructures/DoublyLinkedList.js";

const SEED_PAGES = [
  { url: "inicio.dev", title: "Inicio" },
  { url: "inicio.dev/blog", title: "Blog" },
  { url: "inicio.dev/blog/listas-enlazadas", title: "Listas enlazadas" },
];

const NEW_PAGES = [
  { url: "inicio.dev/cursos", title: "Cursos" },
  { url: "inicio.dev/perfil", title: "Perfil" },
  { url: "inicio.dev/ajustes", title: "Ajustes" },
];

export default function Navegador() {
  const [list] = useState(() => {
    const l = new DoublyLinkedList();
    SEED_PAGES.forEach((page) => l.append(page));
    l.current = l.tail; 
    return l;
  });

  const [nextPageIndex, setNextPageIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const rerender = () => setTick((t) => t + 1);

  const pages = useMemo(() => list.toArray(), [list, tick]);
  const current = list.current ? list.current.value : null;

  const canGoBack = !!(list.current && list.current.prev);
  const canGoForward = !!(list.current && list.current.next);

  const handleBack = () => {
    list.goBack();
    rerender();
  };

  const handleForward = () => {
    list.goForward();
    rerender();
  };

  const handleVisit = () => {
    const page = NEW_PAGES[nextPageIndex % NEW_PAGES.length];
    list.visit(page);
    setNextPageIndex((i) => i + 1);
    rerender();
  };

  return (
    <section>
      <h1>Historial de navegación</h1>
      <p>Lista doblemente enlazada: se puede ir atrás y adelante.</p>

      <button onClick={handleBack} disabled={!canGoBack}>← Atrás</button>
      <button onClick={handleForward} disabled={!canGoForward}>Adelante →</button>

      <h2>{current ? current.title : "—"}</h2>
      <p>{current ? current.url : ""}</p>

      <button onClick={handleVisit}>
        Visitar "{NEW_PAGES[nextPageIndex % NEW_PAGES.length].title}"
      </button>

      <ol>
        {pages.map((page, i) => (
          <li key={i} style={{ fontWeight: current === page ? "bold" : "normal" }}>
            {page.title} — {page.url}
          </li>
        ))}
      </ol>
    </section>
  );
}