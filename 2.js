function esPalindromo(numero) {
    // Convertir el número a string
    let texto = numero.toString();
    
    // Invertir el string
    let invertido = texto.split('').reverse().join('');
    
    // Comparar
    if (texto === invertido) {
        return true;
    } else {
        return false;
    }
}

// Ejemplos de uso
console.log(esPalindromo(121));   // true
console.log(esPalindromo(123));   // false
console.log(esPalindromo(1221));  // true
