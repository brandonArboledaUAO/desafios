import { useState, useRef } from "react";
import { pilaLibro, librosSimulados } from "./pilas";

const camposVacios = { nombre: "", autor: "", genero: "" };

export default function PantallaPilaLibros() {
  const pilaRef = useRef(
    (() => {
      const p = new pilaLibro();
      librosSimulados.forEach((libro) => p.push(libro));
      return p;
    })()
  );

  const [libros, setLibros] = useState(pilaRef.current.toArray());
  const [form, setForm] = useState(camposVacios);
  const [error, setError] = useState("");

  const sincronizar = () => setLibros(pilaRef.current.toArray());

  const manejarCambio = (campo) => (e) =>
    setForm((prev) => ({ ...prev, [campo]: e.target.value }));

  const agregarLibro = (e) => {
    e.preventDefault();
    const { nombre, autor, genero } = form;
    if (!nombre.trim() || !autor.trim() || !genero.trim()) {
      setError("Completa los tres campos antes de apilar el libro.");
      return;
    }
    pilaRef.current.push({ nombre, autor, genero });
    sincronizar();
    setForm(camposVacios);
    setError("");
  };

  const quitarUltimo = () => {
    pilaRef.current.pop();
    sincronizar();
  };

  return (
    <div className="min-h-screen bg-[#EFEAE0] text-[#1F1B16] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <p className="text-sm tracking-wide text-[#5B5347]">Desafío 04</p>
          <h1 className="text-4xl mt-1" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Pila de libros
          </h1>
          <p className="text-sm text-[#5B5347] mt-2 max-w-md">
            Estructura LIFO: el último libro que agregas es el primero que aparece arriba de la pila.
          </p>
        </header>

        <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-10">
          <form onSubmit={agregarLibro} className="bg-white border border-[#D9D2C2] rounded-md p-6 h-fit">
            <h2 className="text-lg mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Nuevo libro
            </h2>

            <div className="flex flex-col gap-3">
              <Campo label="Nombre" value={form.nombre} onChange={manejarCambio("nombre")} placeholder="El Alquimista" />
              <Campo label="Autor" value={form.autor} onChange={manejarCambio("autor")} placeholder="Paulo Coelho" />
              <Campo label="Género" value={form.genero} onChange={manejarCambio("genero")} placeholder="Ficción espiritual" />
            </div>

            {error && <p className="text-sm text-[#993C1D] mt-3">{error}</p>}

            <button
              type="submit"
              className="w-full mt-5 bg-[#2F5233] text-white py-2 rounded-md text-sm hover:bg-[#25401F] transition-colors"
            >
              Apilar libro
            </button>

            <button
              type="button"
              onClick={quitarUltimo}
              disabled={libros.length === 0}
              className="w-full mt-2 border border-[#D9D2C2] py-2 rounded-md text-sm text-[#5B5347] hover:bg-[#F5F1E8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Quitar el último (pop)
            </button>

            <p className="text-xs text-[#8A8272] mt-4">
              Tamaño de la pila: {libros.length}
            </p>
          </form>

          <div>
            <h2 className="text-lg mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Pila en pantalla
            </h2>

            {libros.length === 0 ? (
              <p className="text-sm text-[#8A8272] border border-dashed border-[#D9D2C2] rounded-md p-8 text-center">
                La pila está vacía. Agrega un libro para empezar.
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {libros.map((libro, i) => (
                  <li
                    key={`${libro.nombre}-${i}`}
                    className={`border rounded-md px-4 py-3 bg-white ${
                      i === 0 ? "border-[#2F5233] border-2" : "border-[#D9D2C2]"
                    }`}
                    style={{ marginLeft: i * 6 }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{libro.nombre}</p>
                      {i === 0 && (
                        <span className="text-[10px] uppercase tracking-wide text-[#2F5233] bg-[#EAF3DE] px-2 py-0.5 rounded">
                          tope
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#5B5347] mt-1">
                      {libro.autor} · {libro.genero}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Campo({ label, value, onChange, placeholder }) {
  return (
    <label className="flex flex-col gap-1 text-sm text-[#5B5347]">
      {label}
      <input
        className="border border-[#D9D2C2] rounded-md px-3 py-2 text-[#1F1B16] outline-none focus:border-[#2F5233]"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
