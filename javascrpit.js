const fileInput = document.getElementById("file");
const output = document.getElementById("json-output");
const statusMsg = document.getElementById("status"); // <- nuevo nombre
const btnLimpiar = document.getElementById("btn-limpiar");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      // Validar que sea JSON
      const json = JSON.parse(e.target.result);
      output.textContent = JSON.stringify(json, null, 2);
      output.hidden = false;
      statusMsg.textContent = `Archivo cargado: ${file.name}`;
    } catch (err) {
      statusMsg.textContent = "Error: el archivo no es un JSON válido.";
      output.hidden = true;
    }
  };
  reader.readAsText(file);
});

btnLimpiar.addEventListener("click", () => {
  output.hidden = true;
  output.textContent = "";
  statusMsg.textContent = "Sin datos cargados.";
  fileInput.value = "";
});