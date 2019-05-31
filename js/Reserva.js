var Reserva = function(horario, cantidad, precio, descuento) {
  this.horario = horario;
  this.cantidadPersonas = cantidad;
  this.precioIndividual = precio;
  this.codigoDescuento = descuento;
};

//Calcula el precio base
Reserva.prototype.calcularPrecioBase = function() {
  var precioBase = this.cantidadPersonas * this.precioIndividual;
  return precioBase;
};

//Calcula el precio final
Reserva.prototype.calcularPrecioFinal = function() {
  var precioFinal =
    this.calcularPrecioBase() + this.calcularAdicionales() - this.realizarDescuento();
  return precioFinal;
};


//Aqui se calculan la suma de los descuentos
Reserva.prototype.realizarDescuento = function() {
  debugger;
  //Descuentos posibles
  var descuentos = 0;
  if (this.cantidadPersonas > 4 && this.cantidadPersonas <= 6) {
    descuentos = descuentos + this.calcularPrecioBase() * 0.05;
  };
  if (this.cantidadPersonas > 6 && this.cantidadPersonas < 8) {
    descuentos = descuentos + this.calcularPrecioBase() * 0.1;
  };
  if (this.cantidadPersonas >= 8) {
    descuentos = descuentos + this.calcularPrecioBase() * 0.15;
  };
  if (this.codigoDescuento === "DES15") {
    descuentos = descuentos + this.calcularPrecioBase() * 0.15;
  };
  if (this.codigoDescuento === "DES200") {
    descuentos = descuentos + 200;
  };
  if (this.codigoDescuento === "DES1") {
    descuentos = descuentos + this.precioIndividual;
  };

  return descuentos;
};

//Calcula los adicionales
Reserva.prototype.calcularAdicionales = function() {
  //Adicionales posibles
  var adicionales = 0;

  //Adicional por hora pico
  if (
    (this.horario >= 13 && this.horario <= 14) ||
    (this.horario >= 20 && this.horario <= 21)
  ) {
    adicionales = adicionales + this.calcularPrecioBase() * 0.05;
  };

  //Adicional por fin de semana
  if (
    this.horario.getDay() === 0 ||
    this.horario.getDay() === 5 ||
    this.horario.getDay() === 6
  ) {
    adicionales = adicionales + this.calcularPrecioBase() * 0.1;
  };

  return adicionales;
};
