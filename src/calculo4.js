function porcentaje_Descuento1(e){
    var resp =0;
    switch (e) {
        case 1000:
            resp = 0.03;
            break;
        case 3000:
            resp = 0.05;
            break;
        case 7000:
            resp = 0.07;
            break;
        case 10000:
            resp = 4.00;
            break;
        case 30000:
            resp = 8.25;
            break;
        default:
            break;
    }
    return resp;
}

export default porcentaje_Descuento1;


