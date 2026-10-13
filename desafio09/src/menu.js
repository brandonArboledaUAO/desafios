import Node from "./Node";
import {
  Inicio, Pacientes, ListaPacientes, NuevoPaciente,
  Citas, CitasHoy, NuevaCita,
  Historia, Odontograma, Evolucion,
} from "./pages";

export default function buildMenu() {
  const root = new Node("Menú", "/", null);

  const inicio = new Node("Inicio", "/inicio", Inicio);

  const pacientes = new Node("Pacientes", "/pacientes", Pacientes);
  pacientes.addChild(new Node("Lista de pacientes", "/pacientes/lista", ListaPacientes));
  pacientes.addChild(new Node("Nuevo paciente", "/pacientes/nuevo", NuevoPaciente));

  const citas = new Node("Agenda de citas", "/citas", Citas);
  citas.addChild(new Node("Citas de hoy", "/citas/hoy", CitasHoy));
  citas.addChild(new Node("Nueva cita", "/citas/nueva", NuevaCita));

  const historia = new Node("Historia clínica", "/historia", Historia);
  historia.addChild(new Node("Odontograma", "/historia/odontograma", Odontograma));
  historia.addChild(new Node("Evolución", "/historia/evolucion", Evolucion));

  root.addChild(inicio);
  root.addChild(pacientes);
  root.addChild(citas);
  root.addChild(historia);

  return root;
}