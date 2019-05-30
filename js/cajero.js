var Cajero = function(valorBilletes) {
   this.billetes = valorBilletes;
};

Cajero.prototype.calcularTotalDinero = function(){
    
    var valorFinal = this.billetes.reduce(function(element, valorActual){
         return valorActual + element;
    });

    return valorFinal;
};

Cajero.prototype.otorgarDinero = function (monto) {
    if(monto > this.calcularTotalDinero()){
        return false;
    }
    else{
        return true;
    }

}