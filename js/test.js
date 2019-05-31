var expect = chai.expect;

// Testeá la función reservarHorario(horario). Las pruebas que realices tienen que verificar que:

// --Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.
// --Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.
// --Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.
// Podes hacer uno o más tests para cada caso. Por ejemplo, podes probar que:

// la cantidad de elementos del arreglo disminuya o no según corresponda.
// el arreglo se mantenga igual, exactamente con los mismos elementos.
// el arreglo cambie y contenga exactamente los elementos que corresponden.

describe("Test reservarHorario()", function() {
  var restaurant = new Restaurant(
    1,
    "TAO Uptown",
    "Asiática",
    "Nueva York",
    ["13:00", "15:30", "18:00"],
    "../img/asiatica1.jpg",
    [6, 7, 9, 10, 5]
  );



  it("The date booked it is deleted from the array", function() {
    restaurant.reservarHorario("13:00");

    expect(restaurant.horarios).that.does.not.include("13:00");
  });


  it("A failed booking doesn't afect the array", function() {
    var initialTimes = restaurant.horarios.lenght;
    restaurant.reservarHorario("13:30");
    expect(restaurant.horarios.lenght).to.be.equal(initialTimes);
  });


  it("Call the method without parameter doesn't afect the array", function() {
    var initialTimes = restaurant.horarios.lenght;
    restaurant.reservarHorario();
    expect(restaurant.horarios.lenght).to.be.equal(initialTimes);
  });
});

//-- Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.
// --Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.

describe("Test obtenerPuntuacion()", function() {
 
  it("It plus the qualifications correctly", function() {
    var restaurant = new Restaurant(1,"TAO Uptown", "Asiática", "Nueva York",["13:00", "15:30", "18:00"],"../img/asiatica1.jpg", [1, 1, 1, 1, 1]);

    restaurant.obtenerPuntuacion();
    expect(restaurant.obtenerPuntuacion()).to.equal(1);
  });


  it("with none qualification the result is 0", function() {
    var restaurant = new Restaurant(1,"TAO Uptown", "Asiática", "Nueva York",["13:00", "15:30", "18:00"],"../img/asiatica1.jpg", []);

        restaurant.obtenerPuntuacion();
        expect(restaurant.obtenerPuntuacion()).to.equal(0);
  });
});


// Testeá la función calificar(). En este paso, podés elegir vos las pruebas que quieras hacer.

describe('Test method calificar()', function(){

    var restaurant = new Restaurant(1,"TAO Uptown", "Asiática", "Nueva York",["13:00", "15:30", "18:00"],"../img/asiatica1.jpg", [1, 1, 1, 1, 1]);

    it('An upper qualification than 10 does not modify the array', function(){
        var calificacionOriginal = restaurant.calificaciones;
        restaurant.calificar(12);

        expect(restaurant.calificaciones).to.equal(calificacionOriginal);
    });


    it('An qualification above 10 does not modify the array', function(){
        var calificacionOriginal = restaurant.calificaciones;
        restaurant.calificar(-3);

        expect(restaurant.calificaciones).to.equal(calificacionOriginal);
    });

});

// Testeá la función buscarRestaurante(id). En este paso, podés elegir vos las pruebas que quieras hacer.

describe('Testing buscarRestaurant(id)', function(){
    
    var restaurant = new Restaurant(4,"TAO Uptown", "Asiática", "Nueva York",["13:00", "15:30", "18:00"],"../img/asiatica1.jpg", [1, 1, 1, 1, 1]);
    var listado = new Listado([restaurant]);

    it('It should find a Restaurant with id 4', function(){
  
      expect(listado.buscarRestaurante(4)).to.deep.equal(restaurant);
    });

    
    it('It should not find a Restaurant with id undefined', function(){
      
        expect(listado.buscarRestaurante()).to.deep.not.equal(restaurant);
    });

});

// Testeá la función obtenerRestaurantes() para comprobar su funcionamiento. 
// En este paso, podés elegir vos la pruebas que quieras hacer.

describe('Testing obtenerRestaurant(Rubro)', function(){
    
    var restaurant = new Restaurant(1,"TAO Uptown", "Asiática", "Nueva York",["13:00", "15:30", "18:00"],"../img/asiatica1.jpg", [1, 1, 1, 1, 1]);
    var listado = new Listado([restaurant]);

    it('It should find a Restaurant by type', function(){

        var resultado = listado.obtenerRestaurantes('Asiática', null, null);
        expect(resultado).to.deep.equal(listado.restaurantes);
    });

    it('It should find a Restaurant by location', function(){

        var resultado = listado.obtenerRestaurantes(null, "Nueva York", null);
        expect(resultado).to.deep.equal(listado.restaurantes);
    });
    
    it('It should find a Restaurant by time', function(){

        var resultado = listado.obtenerRestaurantes(null, null, "13:00");
        expect(resultado).to.deep.equal(listado.restaurantes);
    });

    it('It should not find a Restaurant by a time which is not on the array', function(){

        var resultado = listado.obtenerRestaurantes(null, null, "13:30");
        expect(resultado).to.deep.not.equal(listado.restaurantes);
    });

});


describe('Testing Reservar() test 1', function(){

  var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

  it('Calculate correctly the base price', function(){
    expect(reserva1.calcularPrecioBase()).to.equal(2800);
  });

  it('Calculate correctly the final price', function(){
    expect(reserva1.calcularPrecioFinal()).to.equal(2310);
})

})

describe('Testing Reservar() test 2', function(){

  var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");

  it('Calculate correctly the base price', function(){
    expect(reserva2.calcularPrecioBase()).to.equal(300);
  });

  it('Calculate correctly the final price', function(){
    expect(reserva2.calcularPrecioFinal()).to.equal(100);
})

})