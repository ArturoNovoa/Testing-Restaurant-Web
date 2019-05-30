// Requerimientos de la aplicación:

// ● Poder modelar un cajero que tenga un arreglo con los
// billetes disponibles en la caja​.
// ● El cajero debe ser capaz de calcular el total de dinero en
// caja​, sumando todos los billetes que posee.
// ● El cajero debe ser capaz de responder si puede otorgar
// un determinado monto de dinero.

var expect = chai.expect;

describe("Prueba de Cajero", function() {

  it("Suma el dinero", function() {
    var cajero = new Cajero ([20,20,20,20,20]);
    expect(cajero.calcularTotalDinero()).to.be.equal(100);
  });

  it("Responde a entregar un monto", function() {
    var cajero = new Cajero ([20,20,20,20,20]);
	expect(cajero.otorgarDinero(200)).to.be.false;

  });
});

