const displayResposta = (resposta) =>
  (document.getElementById('resposta').textContent = resposta);

const getForm = (id) => Number(document.getElementById(id).value);

const giveForm = (id, valor) => (document.getElementById(id).value = valor);

const funcaoCalcular = function () {
  // reais / km/litro = quantos reais custa 1 km
  // etanol
  const reaisKmEtanol = (
    getForm('preco_etanol') / getForm('km_etanol')
  ).toFixed(2);

  // gasolina
  const reaisKmGasolina = (
    getForm('preco_gasolina') / getForm('km_gasolina')
  ).toFixed(2);
  let texto = ' ';
  if (reaisKmEtanol > reaisKmGasolina) {
    texto = `O seu carro gasta R$${reaisKmEtanol} por quilometro rodado com Etanol e R$${reaisKmGasolina} por quilometro rodado com Gasolina.

     Neste caso compensa abastecer com GASOLINA `;
  } else if (reaisKmEtanol < reaisKmGasolina) {
    texto = `O seu carro gasta R$${reaisKmEtanol} por quilometro rodado com Etanol e R$${reaisKmGasolina} por quilometro rodado com Gasolina.

    Neste caso compensa abastecer com ETANOL `;
  } else if (reaisKmGasolina === reaisKmEtanol) {
    texto = `O seu carro gasta R$${reaisKmEtanol} por quilometro rodado com Etanol e R$${reaisKmGasolina} por quilometro rodado com Gasolina.

  O preço por quilometro radado é o mesmo `;
  }
  displayResposta(texto);
};

const funcaoLimpar = function () {
  giveForm('km_etanol', ' ');
  giveForm('preco_etanol', ' ');
  giveForm('km_gasolina', ' ');
  giveForm('preco_gasolina', ' ');
  displayResposta(' ');
};

document
  .getElementById('botaocalcular')
  .addEventListener('click', funcaoCalcular);

document.getElementById('botaolimpar').addEventListener('click', funcaoLimpar);
