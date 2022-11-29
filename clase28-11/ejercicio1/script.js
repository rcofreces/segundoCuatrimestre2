var fs = require('fs');

try {
    let texto = fs.readFileSync("./texto.txt", 'utf-8');
    console.log(texto);
} catch (e) {
    console.log('El texto no esta funcionando');
}

