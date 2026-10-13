import { useState } from "react";
import Queue from "./colas";

function randomArrivalDate() {
  const ahora = Date.now();
  const ochoHoras = 8 * 60 * 60 * 1000;
  const restar = Math.floor(Math.random() * ochoHoras);
  return new Date(ahora - restar);
}

function buildInitialQueue() {
  const q = new Queue();
  q.enqueue({ id: 38552765, name: "Ana Criollo", amount: 200000, arrivalDate: randomArrivalDate() });
  q.enqueue({ id: 1107870596, name: "Zoe Victoria Arboleda", amount: 50000, arrivalDate: randomArrivalDate() });
  q.enqueue({ id: 1149192274, name: "Diana Marcela Astudillo", amount: 350000, arrivalDate: randomArrivalDate() });
  q.enqueue({ id: 1107520906, name: "Jhon Brandon Arboleda", amount: 800000, arrivalDate: randomArrivalDate() });
  return q;
}

export default function App() {
  const [queue] = useState(buildInitialQueue);
  const [people, setPeople] = useState(queue.toArray());
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAttend = () => {
    queue.dequeue();
    setPeople(queue.toArray());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || Number(amount) <= 0) return;

    queue.enqueue({
      id: Date.now(),
      name: name.trim(),
      amount: Number(amount),
      arrivalDate: randomArrivalDate(),
    });

    setPeople(queue.toArray());
    setName("");
    setAmount("");
  };

  return (
    <main>
      <h1>Cola del cajero automático</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Monto a retirar"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Agregar a la cola</button>
      </form>

      <button onClick={handleAttend}>Atender al primero</button>

      <ul>
        {people.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.amount} - {p.arrivalDate.toLocaleString("es-CO")}
          </li>
        ))}
      </ul>
    </main>
  );
}


