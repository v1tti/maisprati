function valorVazioOuIsNan(valor) {
  if (valor === "" || isNaN(valor)) {
    return true;
  } else return false;
}

module.exports = valorVazioOuIsNan;
