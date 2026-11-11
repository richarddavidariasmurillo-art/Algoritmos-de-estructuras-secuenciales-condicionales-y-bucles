function sumar() {
    let n1, n2, suma;
    alert("este algoritmo suma dos numeros ingresados por el usuario");
    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));

    suma = n1 + n2;
    alert("el resultado de la suma es:"+ suma);


}
function operacionesBasicas(){
    
    let n1,n2,s,r,m,d;
    alert("este algoritmo realiza operaciones aritmeticas");
    n1 = alert("este algoritmo realiza operaciones aritmeticas");
    n2 = parseFloat(prompt("ingrese el segundo numero"));
    
    s = n1 + n2;
    r = n1 - n2;
    m = n1 * n2;
    d = n1 / n2;
    alert("el resultado de la suma es:"+ s);
    alert("el resultado de la resta es:"+ r);
    alert("el resultado de la multiplicacion es:"+ m);
    alert("el resultado de la division es:"+ d); 
}    
function conversionUnidadesLongitud(){

    let cm, m, km;
    alert("este algoritmo mostrara el resultado de metros a centimetros y kilometros");
    m =  parseFloat(prompt("ingrese la cantidad reccorida en metros"));

    cm = m * 100;
    km = m /1000;
    alert("el resultado en centimetros es:"+ cm);
    alert("el resultado en kilometros es:"+ km);
}
function conversionUnidadesTemperatura(){
    let t, f, k;
    alert("este algoritmo mostrara el resultado en grados fahrenheit y kelvin");
    t = parseFloat(prompt("ingrese los grados celcius"));

    f = (t * 1,8)+32;
    k = t + 273,15;
    alert("el resultado en grados fahrenheit es:"+ f);
    alert("el resultado en grados kelvin es:"+ k);
}
function areaPerimetroRectangulo(){
    let a, p, b, al;
    alert("este algoritmo mostrara el resultado del area y el primetro de un rectangulo");
    b = parseFloat(prompt("ingrese la base"));
    al = parseFloat(prompt("ingrese la altura"));
    
    a = b * al;
    p = 2 *(b + al);
    alert("el resultado del area es:"+ a);
    alert("el resultado el perimetro es:"+ p);
}
function promedioNumeros(){
    let n1, n2, n3 ,s ; p;
    alert("este algoritmo mostrara el resultado del promedio de 3  numeros ");
    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));
    n3 = parseFloat(prompt("ingrese el tercer numero"));

    s = n1 + n2 + n3;
    p = s / 3;
    alert("el resultado del promedio de las notas es:"+ p);
}
function conversionTiempo(){
    let s, m, h;
    alert("este algoritmo mostrara el resultado de segundos a minutos y horas");
    s = parseFloat(prompt("ingrese los segundos"));

    m = s / 60;
    h = s / 3600;
    alert("el resultado en minutos es:"+ m);
    alert("el resultado en horas:"+ h);
}
function conversionUnidadesPeso(){
    let kg, g, l, t;
    alert("este algoritmo mostrara el resultado de kilogramos a gramos, libras y toneladas");
    kg = parseFloat(prompt("ingrese el peso"));

    g = kg * 1000;
    l = kg * 2,20462;
    t = kg / 1000;
    alert("el resultado en gramos es:"+ g);
    alert("el resultado en libras es:"+ l);
    alert("el resultado en toneladas es:"+ t);
}
function pesodeObjetoPlanetas(){
    let pt, l, m, v, mt, j,  s, u, n;
    alert("este algoritmo mostrara el peso de un obejeto o persona en diferentes planetas y luna");
    pt = parseFloat(prompt("ingrese el peso"));

    l = pt * 1,62;
    m = pt * 3,78;
    v = pt * 8,87;
    mt= pt * 3,71;
    j = pt * 24,79;
    s = pt * 10,44;
    u = pt * 8,69;
    n = pt * 11,15;
    alert("el peso en la luna es:"+ l);
    alert("el peso en mercurio es:"+ m);
    alert("el peso en venus es:"+ v);
    alert("el peso en marte es:"+ mt);
    alert("el peso en jupiter es:"+ j);
    alert("el peso en saturno es:"+ l);
    alert("el peso en urano es:"+ u);
    alert("el peso en neptuno es:"+ n);
}
function calculoCompra(){
    let  p1, c1, p2, c2, p3, c3, s1, s2, s3, t;
    alert("este algoritmo mostrara el carlculo de una compra");
    p1 = parseFloat(prompt("ingrese el precio primer producto"));
    c1 = parseFloat(prompt("ingrese la cantidad del primer producto"));
    p2 = parseFloat(prompt("ingrese el precio segundo producto"));
    c2 = parseFloat(prompt("ingrese la cantidad del segundo producto"));
    p3 = parseFloat(prompt("ingrese el precio tercer producto"));
    c3 = parseFloat(prompt("ingrese la cantidad del trcer producto"));

    s1 = p1 * c1;
    s2 = p2 * c2;
    s3 = p3 * c3;
    t  = p1 + p2 + p3;
    alert("el valor total de primer producto es:"+ s1);
    alert("el valor total del segundo producto es:"+ s2);
    alert("el valor total del tercer producto es:"+ s3);
    alert("el valor total de todo es:"+ t);
}
function calculoSalario(){
    let s, dt , da, sd, pp, t;
    alert("este algoritmo mostrara el calculo de un salario");
    s = parseFloat(prompt("ingrese el salario"));
    dt = parseFloat(prompt("ingrese el numero de dias trabajados"));
    da = parseFloat(prompt("ingrese el dinero adicional"));

    sd = s / 30;
    pp = sd * dt;
    t  = pp  + da;
    alert("el pago total es:"+ t);
}
function facturaServicio(){
    let consumo, valorU, impuesto, subtotal, iva, total;
    alert("este algoritmo mostrara la factura de un servicio");
    consumo =  parseFloat(prompt("ingrese el consumo"));
    valorU = parseFloat(prompt("ingrese el valor por unidad "));
    impuesto = parseFloat(prompt("ingrese el porcentaje del impuesto"));
    
    subtotal = consumo * valorU;
    iva = subtotal * impuesto / 100;
    total = subtotal + iva;

    alert("el subtotal es:"+ subtotal);
    alert("el impuesto es:"+ impuesto);
    alert("el total es:"+ total);
}
function costoViaje(){
    let dt, con, pre, lt, t;
    alert("este algoritmo mostrara el costo de un viaje");
    dt = parseFloat(prompt("ingrese la disancia reccorrida en km"));
    con = parseFloat(prompt("ingrese el consumo cada 100 km"));
    pre = parseFloat(prompt("ingrese el precio de cada litro"));
    
    lt = dt * con / 100;
    t = lt * pre;

    alert("los litros que se nececitan son:"+ lt);
    alert("el costo del combustible es:"+ t);
}
function sistemaNotas(){
    let n1, n2, n3, pc1, pc2, pc3, nf;
    alert("este algoritmo mostrara la nota final de un estiduante");
    n1 = parseFloat(prompt("ingrese la primer nota"));
    pc1= parseFloat(prompt("ingrese el porcentaje la primer nota"));
    n2 = parseFloat(prompt("ingrese la segunda nota"));
    pc2= parseFloat(prompt("ingrese el porcentaje de la segunda nota"));
    n3 = parseFloat(prompt("ingrese la tercer nota"));
    pc3= parseFloat(prompt("ingrese el porcentaje de la tercer nota"));

    nf = n1 * pc1 + n2 * pc2 + n3 * pc3;
    alert("la nota final es:"+ nf);
}
function conversorMonedas(){
    let pesos, dolar, euro;
    alert("este algoritmo mostrara la conversion de pesos a dolar y euro");
    pesos = parseFloat(prompt("ingrese los pesos colombianos"));

    dolar = pesos / 3,349,63;
    euro = pesos / 3,806,62;

    alert("el resultado del dolar es:"+ dolar);
    alert("el resultado de euro es:"+ euro);
}

// algoritmos de estructura condicional

function numeroPositivo(){
    
    alert("este algoritmo mostrara si un numero es positivo o no");
    let n;
    n = parseInt(prompt("ingrese un numero"));

    if (n > 0) {
        alert("el numero es positivo");
    } else {
        alert("el numeo no es positivo");
    }
}
function numeroParImpar(){

    alert("este algoritmo mostrara si un numero es par o impar");
    let n;
    n = parseInt(prompt("ingrese un numero"));
    
    if (n % 2 === 0) {
        alert("el numero es par");
    } else {
        alert(" el numero es impar")    
    }
}
function mayorDosNumeros(){

    alert("este algoritmo mostrara el numero mayor de dos numeros");
    let n1;
    let n2;
    n1 = parseInt(prompt("ingrese el primer numero"));
    n2 = parseInt(prompt("ingrese el segundo numero"));

    if (n1 > n2) {
        alert("el numero mayor es:"+ n1);
    } else if (n2 > n1) {
        alert("el numero mayor es:"+ n2 );
    } else {
        alert("los numeros son iguales");
    }
}
function Descuento10(){

    alert("este algoritmo mostrara una compra con 10% de descuento");
    let c 
    c = parseFloat(prompt("ingrese el valor de la compra"));

    if (c >= 200000) {
        alert("se le aplica descuento");
    } else {
        alert("no se le aplica descuento");
    }
}
function temperaturaAlta(){

    alert("este algoritmo mostrara si una temperatura esta alta o no");
    let t;
    t = parseInt(prompt("ingrese la temperatura en celsius"));

    if (t > 30){
        alert("la temperatura esta alta");
    } else {
        alert("la temperatura no esta alta");
    }
}
function mayorEdad(){

    alert("este algoritmo mostrara si una persona es mayor de edad o menor de edad ");
    let e = parseInt(prompt("ingrese su edad"));

    if (e >= 18) {
        alert("es mayor de edad");
    } else {
        alert("es menor de edad")
    }
}
function retiroDinero(){
    alert("este algoritmo mostrara el retiro de dinero de una cuenta bancaria");
    let s;
    let r;
    s = parseInt(prompt("saldo disponible "));
    r = parseInt(prompt("valor que desea retirar"));

    if (r <= 0) {
        alert("el retiro debe ser mayor que cero");
    } else if (r <= s) {
        s = s - r;
        alert("retiro autorizado");
        alert("saldo restante:"+ s);
    } else {
        alert("saldo insuficiente");
    }
}
function envioGratuito(){
    alert("este algoritmo mostrara si un envio es gratuito o no");
    let env;
    env = parseInt(prompt("ingrese el valor del envio "));

    if (env >= 150000) {
        alert("el envio es gratis");
    } else {
        alert("el envio tiene un costo de 15,000");
    }
}
function compararDosNumeros(){
    alert("este algoritmo comparara dos numeros , si uno es mayor o menor");
    let n1;
    let n2;
    n1 = parseInt(prompt("ingrese el primer numero "));
    n2 = parseInt(prompt("ingrese el segundo numero "));

    if (n1 > n2) {
        alert("el primer numero es mayor");
    } else if ( n1 < n2) {
        alert("el primer numero es menor");
    } else {
        alert("los numeros son iguales");
    }    
}
function tarifaParqueadero(){
    alert("este algoritmo mostrara la tarifa de un parqueadero");
    let h;
    let t;
    h = parseInt(prompt("ingrese las horas"));

    if (h <= 1) {
        t = 5000;
    } else if (h <= 3) {
        t = 10000;
    } else if (h <= 6) {
        t = 18000;
    } else {
        t = 25000;
    }

    alert("el valor a pagar es:"+ t)
}
function tarifaTransporte(){
    alert("este algoritmo mostrara la tarifa de un transporte");
    let e;
    let t;
    e = parseInt(prompt("ingrese su edad"));

    if (e < 5) {
        t = 0;
    } else if (e <= 17) {
        t = 2000;
    } else if (e <= 59) {
        t = 3500
    } else {
        t = 2500
    }

    alert("el valor del pasaje es:"+ t)
}
function clasificacionVelocidad (){
    alert("este algoritmo clasificara la velocidad");
    let v;
    v = parseFloat(prompt("ingree la velocidad"));

    if (v <= 30) {
        alert("velocidad baja");
    } else if (v <= 60) {
        alert("velocidad moderada");
    } else if (v <= 100) {
        alert("velocidad alta");
    } else {
        alert("velocidad muy alta")
    }  
}
function mesDias(){
    alert("este algoritmo mostrara cuantos dias tiene cada mes");
    let m;
    m = parseInt(prompt("ingrese el numero del mes"));
     
    if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        alert("el mes tiene 31 dias");
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
        alert("el mes tiene 30 dias");
    } else if (m == 2) {
        alert("el mes tiene 28 dias");
    } else {
        alert("numero de mes invalido");
    }
}
function accesoAtraccion(){
    alert("este algoritmo mostrar si una persona puede o no puede subir a una atraccion");
    let ed;
    let et;
    ed = parseInt(prompt("ingrese su edad"));
    et = parseInt(prompt("ingrese su estatura"));

    if (ed >= 12 && et >= 140) {
        alert("puede ingresar");
    } else {
        alert("no puede ingresar");
    }
}
function descuentoCliente(){
    alert("este algoritmo mostrara un descuento segundo el tipo de cliente");
    let t;
    let c;
    let d;
    let t;
    t = prompt("cliente normal o frecuente");
    c = parseFloat(prompt("ingrese el valor de la compra"));
    d = 0;

    if (c >= 200000) {
        if (t == "normal") {
            d = c * 0,05;
        } else if (t == "frecuente") {
            d = c * 0,10;
        }
    }
    t = c - d;
    alert("descuento:"+ d);
    alert("total a pagar:"+ t);
}
function cajeroAutomatico(){
    alert("este algoritmo mostrara el retiro de un cajero automatico");
    let s;
    let R;
    s = parseFloat(prompt("ingrese el saldo"));
    r = parseFloat(prompt("ingrese el retiro"));
    
    if (r <= 0) {
        alert("el retiro debe ser mayor que cero");
    } else if (r % 10000 != 0) {
        alert("debe retirar multiplos de 10000");
    } else if (r > s) {
        alert("saldo insuficiente");
    } else {
        alert("retiro aceptado");
        alert("saldo restatnte:" + (s - r));
    }
}
function validacionContraseña(){
    alert("este algoritmo mostrara la validacion de una contraseña");
    let contraseña;
    contraseña = prompt("ingrese su contraseña");

    if (contraseña.length >= 8 && contraseña ! = "12345678") {
       alert(" contraseña valida");
    } else {
        alert("contraseña no valida");
    }
}
function añoBisiesto(){
    alert("este algoritmo determinara si un año es bisiesto o no");
    let a;
    a = parseInt(prompt("ingrese el año"));

    if ((a % 4 == 0 && a % 100 ! = 0) || a % 400 == 0) {
        alert("el año es bisiesto");
    } else {
        alert("el año no es bisiesto");
    }
}
function clasificacionTriangulos(){
    alert("este algoritmo  determinara la clasificacion de un triangulo");
    let l1;
    let l2;
    let l3;
    l1 = parseFloat(prompt("ingrese el primer lado"));
    l2 = parseFloat(prompt("ingrese el segundo lado"));
    l3 = parseFloat(prompt("ingrese el tercer lado"));
 
    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l2 <= l1) {
        alert("no forman un triangulo");
    } else if (l1 == l2 && l2 == l3) {
        alert("triangulo equilatero");
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        alert("triangulo isoceles");
    } else {
        alert("triangulo escaleno");
    }
}
function calculadora(){
    alert("este algoritmo mostrara una calculadora");
    let n1;
    let n2;
    let opcion;
    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));
    opcion = parseInt(prompt("1 suma, 2 resta, 3 multiplicacion, 4 division"));

    if (opcion == 1) {
        alert("resultado:" + (n1 + n2));
    } else if (opcion == 2) {
        alert("resultado:" + (n1 - n2)) ;
    } else if (opcion == 3) {
        alert("resultado:" + (n1 * n2)) ;
    } else if (opcion == 4) {
        alert("resultado:" + (n1 / n2)) ;
    } else {
        alert("no se puede dividir entre cero");
    } else {
        alert("opcion invalida")
    }
}
function tarifaEquipaje(){
    alert("este algoritmo mostrara la tarifa de un equipaje");
    let p;
    p = parseFloat(prompt("ingrese el peso de la maleta"));

     if (p <= 23) {
        alert("no tiene costo adiciional");
     } else if (p <= 40) {
        alert("debe pagar 100000");
     } else {
        alert("no se permite transportar la maleta");
     }
}
function facturaCompra(){
    alert("este algoritmo mostrara la factura de una compra");
    let c;
    let d;
    let st;
    let iva;
    let tt;
    c = parseFloat(prompt("ingrese el valor de la compra"));
    d = 0;

    if (c >= 500000) {
        d = c * 0.15;
    } else if (c >= 300000) {
        d = c * 0,10;
    } else if (c >= 100000) {
        d = c * 0,05;
    }
    st = c - d;
    iva = st * 0,19;
    tt = st + iva;

    alert("compra:" + c);
    alert("descuento:" + d);
    alert("subtotal con descuento:" + st);
    alert("iva:" + iva);
    alert("total:" + tt);
}
function eligibilidadCredito(){
    alert("este algoritmo determinara si una persona es apta o no para un credito");
    let ed;
    let ig;
    ed = parseInt(prompt("ingrese su edad"));
    ig = parseInt(prompt("ingrese sus ungresos mensuales"));

    if (ed < 18) {
        alert("no es elegible");
    } else if (ed < 25) {
        if (ig >= 2000000) {
            alert("es elegible");
        } else {
            alert("no es elegible")
        }
    } else {
        if (ig >= 1500000) {
            alert("es elegible");
        } else {
            alert("no es elegible");
        }
    }  
}
function mayorMenorTres(){
    alert("este algoritmo mostrara el mayor, menor e igualdad de tres numeros");
    let n1;
    let n2;
    let n3;
    let my;
    let mn;
    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));
    n3 = parseFloat(prompt("ingrese el tercer numero"));
    my = n1;
    mn = n1;

    if (n2 > my) {
        my = n2;
    }

    if (n3 > my) {
        my = n3;
    }

    if (n2 < mn) {
        mn = n2;
    }

    if (n3 < mn) {
        mn = n3;
    }

    alert("el mayor es:"+ my);
    alert("el menor es:"+ mn);

    if (n1 == n2 || n1 == n3 || n2 == n3) {
        alert("existen numeros que son iguales");
    } else {
        alert("no existen numeros iguales");
    }
}
function contarNumeros(){
    alert("este algoritmo contara numeros");
    let inicio;
    let fn;
    let i;
    inicio = parseInt(prompt("ingrese el numero inicial"));
    fn = parseInt(prompt("ingrese el numero inicial"));

    for (i = inicio; i<= fn; i++) {
        alert(i)
    }
}
function cuentaRegresiva(){
    alert("este algoritmo hara una cuenta regresiva");
    let ni;
    let i;
    ni = parseInt(prompt("ingrese el numero inicial"));

    for (i = ni; i>= 0; i--) {
        alert(i);
    }
    alert("la cuenta ha terminado");
}
function numerosPares(){
    alert("este algoritmo mostrara numeros pares");
    let l;
    let i;
    l = parseInt(prompt("ingrese el numero limite"));

    for (i = 2; i<= l; i = i +2) {
        alert(i);
    }
}
function numerosImpares(){
    alert("este algoritmo mostrara numeros impares");
    let l;
    let i;
    l = parseInt(prompt("ingrese el numero limite"));

    for (i = 1; i <= l; i = i + 2) {
        alert(i)
    }
}
function sumaNumeros(){
    alert("este algoritmo mostrara la suma de numeros");
    let nm;
    let i;
    let s;
    n = parseInt(prompt("ingrese el numero limite"));
    s = 0;

    for (i = 1; i <= n; i++ ) {
        s = s + i;
    }

    alert("la suma total es:" + s);
}
function tablaMultiplicar(){
    alert("este algoritmo mostrara una tabla de multiplicar");
    let nm;
    let i;
    nm = parseInt(prompt("ingrese un numero"));

    for (i = 1; i <= 10; i ++) {
        alert(nm + " X " + i + " = " + (nm * i));
    }
}
function contarParesImpares(){
    alert("este algoritmo mostrara numeros pares e impares");
    let l;
    let i;
    let pr;
    let ip;
    pr = 0;
    ip = 0;

    for (i = 1; i <= l; i++) {
        if (i % 2 == 0) {
            pr = ip + 1;
        } else {
            ip = ip + 1;
        }
    }

    alert("cantidad de pares:" + pr);
    alert("cantidad de impares:" + ip);
}
function promedioNumeros(){
    alert("este algoritmo mostrara el promedio de numeros");
    let c;
    let i;
    let nm;
    let s;
    let pr;
    c = parseInt(prompt("cuantos numeros va a ingresar"));
    s = 0;

    for (i = 1; i <= c; i++ ) {
        nm = parseFloat(prompt("ingrese el numero" + i));
        s = s + nm;
    }

    if (c > 0) {
        pr = s / c;
        alert("cantidad:" + c);
        alert("suma:" + s);
        alert("promedio:" + pr);
    } else {
        alert("debe ingresar una cantidad mayor que cero");
    }
}
function numeroMayor(){
    alert("este algoritm mostrara un numero mayor de una cantidad de numeros");
    let c;
    let i;
    let nm;
    let my;
    c = parseInt(prompt("cuantos numeros va a ingresar"));

    if (c > 0) {
        nm = parseFloat(prompt("ingrese el numero 1"));
        my = nm;

        for (i = 2; i <= c; i++) {
            nm = parseFloat(prompt("ingrese otro numero"));

            if (nm > my) {
                my = nm;
            }
        }
        alert("el numero mayor es:" + my);
    } else {
        alert("debe ingresar por lo menos un numero");
    }
} 
function numeroMenor(){
    alert("este algoritm mostrara un numero menor de una cantidad de numeros");
    let c;
    let i;
    let nm;
    let mn;
    c = parseInt(prompt("cuantos numeros va a ingresar"));

    if (c > 0) {
        nm = parseFloat(prompt("ingrese el numero 1"));
        mn = nm;

        for (i = 2; i <= c; i++) {
            nm = parseFloat(prompt("ingrese otro numero"));

            if (nm > mn) {
                mn = nm;
            }
        }
        alert("el numero menor es:" + mn);
    } else {
        alert("debe ingresar por lo menos un numero");
    }
} 
function clasificacionNumeros(){
    alert("este algoritmo mostrara la clasificacion de unos numeros");
    let c;
    let i;
    let nm;
    let po;
    let ne;
    let cr;
    c = parseInt(prompt("cuantos numeros va a ingresar"));
    po = 0;
    ne = 0;
    cr = 0;

    for (i = 1; i <= c; i++) {
        po = po + 1;
    } else if (nm <= 0) {
        ne = ne + 1;
    } else {
        cr = cr + 1;
    }
    alert("positivos:" + po);
    alert("negativos:" + ne);
    alert("ceros:" + cr);
}
function estadisticasVentas(){
    alert("este algoritmo mostrara las estadisticas de unas ventas");
    let c;
    let i;
    let vt;
    let s;
    let my;
    let mn;
    c = parseInt(prompt("cuantas ventas se realizaron"));
    s = 0;

    if (c > 0) {
        vt = parseFloat(prompt("ingrese la primera venta"));
        s = vt;
        my = vt;
        mn = vt;

        for (i = 2; i <= c; i++) {
            vt = parseFloat(prompt("ingrese otra venta"));
            s = s + vt;
        }

        if (vt > my) {
            my = vt;
        }

        if (vt < mn); {
            mn = vt;
        }
    }

    alert("total de ventas:" + s);
    alert("promedio:" + (s / c));
    alert("venta mayor:" + my);
    alert("venta menor:" + mn); {

    } else {
        alert("debe ingresar al menos una venta");
    }
}
function ingresarHastaCero(){
    alert("este algoritmo mostrara numeros hasta cero");
    let nm;
    let s;
    let c;
    s = 0;
    c = 0;
    nm = parseFloat(prompt("ingrese un numero; 0 para terminar"));

    while (nm ! = 0) {
        s = s + nm;
        c = c + 1;

        nm = parseFloat(prompt("ingrese otro numero; 0 para terminar"));
    }

    alert("cantidad de numeros:" + c);
    alert("suma:"+ s);

    if (c > 0) {
        alert("promedio:" + (s / c));
    } else {
        alert("no ingreso numeros")
    }
}
function validacionContraseña(){
    alert("este algoritmo mostrara la validacion de una contraseña");
    let c;
    c = prompt("ingrese la contraseña")

    while (c != "richard123") {
        alert("contraseña incorrecta");
        c = prompt("intente de nuevo");
    }

    alert("contraseña correcta acceso consedido");
}
function menuOpciones(){
    alert("este algoritmo mostrara un menu de opciones");
    let op;
    op = 0;

    while (op != 4) {
        op = parseInt(prompt("1 MENU, 2 MOSTRAR MENSAJE, 3 MOSTRAR INFORMACION, 4 SUMAR DOS NUMEROS, SALIR"));

        if (op == 1) {
            alert("hola bienvenido");
        } else if (op == 2) {
            alert("programa de algoritmia");
        } else if (op == 3) {
            let n1, n2;
            n1 = parseFloat(prompt("ingrese el primer numero"));
            n2 = parseFloat(prompt("ingrese el segundo numero"));
            alert("la suma es:" + (n1 + n2));
        } else if {
            alert("programa finalizado");
        } else {
            alert("opcion invalida")
        }
    }

}
function cajeroAutomatico(){
    alert("este algoritmo mostrara un cajero automatico");
    let sd;
    let op;
    let v;
    sd = 500000;
    op = 0;

    while (op != 4) {
        op = parseInt(prompt("1 CAJERO, 2 CONSULTAR SALDO, 3 RETIRAR, 4 DEPOSITAR, SALIR"));

        if (op == 1) {
            alert("saldo disponible:" + sd);
        } else if (op == 2) {
            v = parseFloat(prompt("ingrese el valor a retirar"));
        } if (v > 0 && v <= sd) {
            sd = sd - v;
            alert("retiro exitoso");
            alert("saldo restante:" + sd);
        } else {
            alert("saldo insuficiente")
        } else if (op == 3) {
            v = parseFloat(prompt("ingrese el valor a depositar"));
        } if (v > 0) {
            sd = sd + v;
            alert("nuevo saldo:" + sd);
        } else {
            alert("el deposito debe ser mayor que cero");
        } else if (op == 4) {
            alert("gracias por utilizar el cajero");
    } else {
        alert("opcion invalida");
    }
  }
}
function notasGrupo(){
    alert("este algoritmo mostrara las notas de una clase de estudio");
    let c;
    let i;
    let n;
    let s;
    let ap;
    let rp;
    let my;
    let mn;
    c = parseInt(prompt("ingrese la cantidad de estudiantes"));
    s = 0;
    ap = 0;
    rp = 0;

    if (c > 0) {
        n = parseInt(prompt("ingrese la nota del primer estudiante"));
        s = n;
        my = n;
        mn = n;
        if (n >= 3) {
            ap = ap + 1;
        } else {
            rp = rp + 1;
        }

        for (i = 2; i <= c; i++) {
            n = parseFloat(prompt("ingrese la nota del estudiante"));
            s = s + n;
            if (n >= 3) {
                ap = ap + 1;
            } else {
                rp = rp + 1;
            }
        } if (n > my) {
            my = n;
        } if (n < mn) {
            mn = n;
        }
    alert("estudiantes:" + c);
    alert("aprobados:" + ap);
    alert("reprobados:" + rp);
    alert("promoedio:" + (s / c));
    alert("nota mayor:" + my);
    alert("nota menor:" + mn);
    } else {
        alert("ingrese por lo menos un estudiante");
    }
}
function adivinarNumero(){
    alert("este algoritmo adivinara un numero secret0");
    let sc;
    let nm;
    let it;
    sc = 10;
    it = 0;
    nm = parseInt(prompt("adivine el numero secreto"));

    while (nm != sc) {
        it = it + 1;
        if (nm < sc) {
            alert("el numero secreto es mayor");
        } else {
            alert("el numero secreto es menor");
        }
        nm = parseInt(prompt("ingrese un numero nuevamente"));
    }
    it = it + 1;
    alert("adivinaste el numero");
    alert("intentos:" + it);
}
function registroProductos(){
    alert("este algoritmo va a registrar productos");
    let c;
    let i;
    let nm;
    let pr;
    let tt;
    c = parseInt(prompt("cuantos productos desea registrar"));
    tt = 0;
    
    for (i = 1; i <= c; i++) {
        nm = prompt("iingrese el nombre del producto");
        pr = parseFloat(prompt("ingrese el precio del producto"));
        tt = tt + pr;
    }
    alert("total de productos:" + c);
    alert("valor total:" + tt);
}
function acumuladorHastaCien(){
    alert("este algoritmo acumulara una suma de numeros hasta llegar a cien");
    let nm;
    let s;
    s = 0;
    
    while (s < 100) {
        n = parseFloat(prompt("ingrese un numero"));
        s = s + nm;
    }
    alert("la suma total es:" + s)
}
function sistemaCompras(){
    alert("este algoritmo realizara un sistema de compras");
    let n;
    let pc;
    let c;
    let st;
    let pd;
    let continuar;
    let dc;
    let iva;
    let tt;
    st = 0;
    pd = 0;
    continuar = "si";
    while ( continuar == "si") {
        n = prompt("ingrese el nombre del producto");
        pc = parseFloat(prompt("ingrese el precio del prodcuto"));
        c = parseInt(prompt("ingrese la cantidad del producto"));
        st = st + pc * c;
        pd = pd + 1;
        alert("producto registrado:" + n);
        continuar = prompt("desea agregar otro producto? escriba si o no");
    }
    dc = 0;
    if (st >= 500000) {
        dc = st * 0,15;
    } else if (st >= 300000) {
        dc = st * 0,10;
    } else if (st >= 100000) {
        dc = st * 0,05;
    }
    st = st - dc;
    iva = st * 0,19;
    tt = st + iva;

    alert("la cantidad de productos es:" + pd);
    alert("el subtotal con descuento es:" + st);
    alert("el descuento es:" + dc);
    alert("el iva es:" + iva);
    alert("el total a pagar es:" + tt);
}