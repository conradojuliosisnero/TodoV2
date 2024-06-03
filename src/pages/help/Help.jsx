export default function Help() {
  return (
    <div className="relative flex place-content-center w-full">
      <section className="mx-auto w-[650px] mt-6">
        <div className="flex w-full place-content-center">
          <h1 className="text-2xl font-bold">About App</h1>
        </div>
        <div className="flex mx-8 p-6 flex-wrap">
          <ol className="list-decimal">
            <li>
              <strong>Registro y Configuración Inicial:</strong> Descarga Todo
              App y crea una cuenta. Personaliza tu perfil y ajusta las
              configuraciones iniciales.
            </li>
            <li>
              <strong>Creación de Tareas:</strong> Añade nuevas tareas con
              descripciones detalladas, fechas límite y etiquetas.
            </li>
            <li>
              <strong>Organización de Listas: </strong>Organiza tus tareas en
              listas y proyectos para una mejor gestión
            </li>
            <li>
              <strong>Configuración de Recordatorios:</strong> Añade
              recordatorios y recibe notificaciones para no olvidar nada
              importante.
            </li>
            <li>
              <strong>Colaboración:</strong> Invita a compañeros de equipo o
              familiares para colaborar en listas y proyectos compartidos.
            </li>
            <li>
              <strong>Seguimiento y Cumplimiento:</strong> Marca las tareas como
              completadas y sigue tu progreso a través de informes y
              estadísticas.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
