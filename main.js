document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  if (file && file.type === 'application/pdf') {
    // ENVIAR O PDF PRO BACKEND.
    console.log('Arquivo PDF válido selecionado:', file.name);
  } else {
    alert('Por favor, selecione um arquivo PDF válido.');
  }
});
