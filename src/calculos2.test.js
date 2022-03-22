import calcular_Impuesto from "./calculos2";
import porcentaje_Impuesto from "./calculos";

describe("Porcentaje de Impuesto", () => {
    it("Deberia calcular el impuesto", () => {
       var porcentaje = porcentaje_Impuesto("UT");
       var resp = calcular_Impuesto(10,porcentaje,"UT");
       expect(resp).toEqual(0.665);
    });
    it("Deberia mostrar error al calcular el impuesto", () => {
        var porcentaje = porcentaje_Impuesto("NV");
        var resp = calcular_Impuesto(10,porcentaje,"NV");
        expect(resp).toEqual(0.665);
     });
});


