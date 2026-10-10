import { useMemo, useState } from "react";
import { LinkedList } from "../dataStructures/LinkedList.js";

const SEED_SONGS = [
  { title: "Pure Negga", artist: "Skillz Beatz", duration: "3:14" },
  { title: "El anciano y El niño", artist: "Cheo Gallego", duration: "3:28" },
  { title: "Jeremias 17.5", artist: "Canserbero", duration: "5:27" },
  { title: "LLegamos a la Disco", artist: "Daddy Yankee ", duration: "8:00" },
  { title: "Latinoamerica", artist: "Calle 13", duration: "4:56" },
];

export default function Reprodutor() {
  const [list] = useState(() => {
    const l = new LinkedList();
    SEED_SONGS.forEach((song) => l.append(song));
    return l;
  });

  const [tick, setTick] = useState(0);
  const rerender = () => setTick((t) => t + 1);

  const songs = useMemo(() => list.toArray(), [list, tick]);
  const currentSong = list.current ? list.current.value : null;

  const handleNext = () => {
    list.playNext();
    rerender();
  };

  return (
    <section>
      <h1>Reproducción de Música</h1>
      <p>Lista enlazada simple: solo se puede avanzar.</p>

      <h2>{currentSong ? currentSong.title : "Presiona Siguiente"}</h2>
      <p>{currentSong ? `${currentSong.artist} · ${currentSong.duration}` : ""}</p>
      <button onClick={handleNext}>Siguiente ▶</button>

      <ol>
        {songs.map((song, i) => (
          <li key={i} style={{ fontWeight: currentSong === song ? "bold" : "normal" }}>
            {song.title} — {song.artist}
          </li>
        ))}
      </ol>
    </section>
  );
} 