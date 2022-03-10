function porcentaje_Descuento(a)
{
    var resp = 0;
    /*switch (a) {
        case a >= 1000 || a < 3000:
            resp = 0.03;
            break;
        case a >= 3000 && a < 7000:
            resp = 0.05;
            break;
        case a >= 7000 && a < 10000:
            resp = 0.07;
            break;
        case a >= 10000 && a < 30000:
            resp = 0.10; 
            break;
        case a >= 30000:
            resp = 0.15;
            break;
        default:
            break;
    }*/
    if(a >= 1000 || a < 3000)
    {
        resp = 3;
    }
    
    return resp;
}

export default porcentaje_Descuento;
