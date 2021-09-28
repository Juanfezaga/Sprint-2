//Comienzo del Archivo

function checkNumDocumento(valor, tipo){
  return false
}


function checkContrasena(valor) {
  const regexPassword = /^(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z]).{8,}$/;
  return regexPassword.test(valor);
}

function checkCorreo(valor){
  return false
}

module.exports = {checkContrasena, checkCorreo, checkNumDocumento}