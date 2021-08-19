const servicios = [ "traducciones",
                    "transcripciones",
                    "correcciones",
                    "asesoría de idiomas",
                    "asistencia técnica de documentos"]

let padre = document.getElementById("services")

for (const servicio of servicios) {
    let li = document.createElement("li");
    li.innerHTML = servicio;
    padre.appendChild(li)
}
