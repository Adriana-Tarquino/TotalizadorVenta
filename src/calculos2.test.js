import calcular_Impuesto from "./calculos2";

describe("Porcentaje de Impuesto", () => {
    it("Deberia calcular el impuesto", () => {
       var resp = calcular_Impuesto(10,6.65,"UT");
       expect(resp).toEqual(0.665);
        //except(calcular_Impuesto(10,6.65,"UT")).toEqual(0.665);
    });
});