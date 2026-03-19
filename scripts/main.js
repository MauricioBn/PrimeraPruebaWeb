const hora = new Date().getHours(); // Para obtener la hora actual de 0 - 23 

if (hora >= 0 && hora <=5) {
    document.title = "Trasnochando! - Carbajal Services";    
} else if (hora > 5 && hora <= 12) {
    document.title = "¡Buenos dias! - Carbajal Services";
} else if (hora > 12 && hora <= 17) {
    document.title = "¡Buenas tardes! - Carbajal Services";
} else {
    document.title = "¡Buenas noches! - Carbajal Services";
}



