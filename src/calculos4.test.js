import calcular_Descuento from "./calculos4";

describe("Porcentaje de Descuento", () => {
    it("Deberia calcular el descuento", () => {
       var resp = calcular_Descuento(10,3);
       expect(resp).toEqual(0.3);
    });
});