function calcular_Impuesto(precio,estadoImpuesto,nombreEstado)
{
    var resp;
    if(nombreEstado = "CA")
    {
        resp = precio * (estadoImpuesto/100);
    }
    if(nombreEstado = "TX")
    {
        resp = precio * (estadoImpuesto/100);
    }
   
    return resp;
}

export default calcular_Impuesto;