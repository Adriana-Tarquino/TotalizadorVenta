import calcular_Descuento from "./calculos4";
import porcentaje_Descuento from "./calculos3";

describe("Porcentaje de Descuento", () => {
    it("Deberia calcular el descuento", () => {
       var desc = porcentaje_Descuento(1000);
       var resp = calcular_Descuento(1000,desc);
       expect(resp).toEqual(30);
    });
    it("deberia mostrar error al calcular el descuento ", () => {
        var desc = porcentaje_Descuento(1000);
        var resp = calcular_Descuento(1000,desc);
        expect(resp).toEqual(0.3);
     });
});