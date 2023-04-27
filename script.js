function loadPerm(){


    var res = ""

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            res += getIndex(document.getElementsByTagName("input")[i].value, document.getElementsByTagName("input")[j].value).toString()
            res += " "
        }
        res += "<br/>"
    }
    document.getElementById("outp").innerHTML = res
    console.log(res ? null : "null")
}

function getIndex(p1, p2) {
    var ax = getI(p1, p2.charAt(0))
    var bx = getI(p1, p2.charAt(1))
    var cx = getI(p1, p2.charAt(2))
    var f = ax + bx + cx
    for (var i = 0; i < 6; i++) {
        if (document.getElementsByTagName("input")[i].value == f){
            console.log(i+1)
            return i+1;
        }
    }
    return 0
}

function getI(p, i) {
    
    if (i == 1) return p.charAt(0)
    if (i == 2) return p.charAt(1)
    return p.charAt(2)
}

function findInv() {
    var ZuInvertierendeZahl = document.getElementById("inverse").value;
    console.log(ZuInvertierendeZahl)
    var ModuloZahl = document.getElementById("mod").value;
    res = 0;
    for(var i = 0; i<1000; i++) {
        if ((ZuInvertierendeZahl * i) % ModuloZahl == 1) {
            res = i;
            break;
        }
    }
    document.getElementById("modo").innerHTML = res
}