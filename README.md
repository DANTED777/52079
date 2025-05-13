# Analizador de Metadatos - Legajo 52079 - Ezequiel Pino
Buenos dias, tardes o noches, dejo a continuacion, algunas aclaraciones del proyecto:
**analizador sintáctico de metadatos**, desarrollado como parte de la asignatura **Sintaxis y Semántica de los Lenguajes** de la UTN.
Tuve una crisis de creativad, no sabia como bautizar el proyecto, asi que lo nombre "Analizador Sintactico de Metadatos". Tambien nombre a los archivos como "Convertidor"
Utilizamos la herramienta **ANTLR4** para generar un analizador que reconoce expresiones escritas en un lenguaje específico de metadatos, y está implementado en **JavaScript** ejecutándose sobre **Node.js**.
📌Quiero destacar el hecho del mi uso de asistencia con Chats de inteligencia artificial en la construccion de este analizador; honestamente(y  obviamente), realice la parte del codigo con la ayuda total de la IA, sin embargo, la vida no es tan sencilla, y me genero muchos errores a la hora de ejecutar el analizador, llamados entre archivos, etc, por lo que me vi obligado a aprender el Javascript necesario para poder ejecutar, y lo necesario sobre el funcionamiento de Antlr, por eso notara que los archivos estan muy comentados, pero me ayudo a orientarme y decidi no borrarlos, por que considero que pueden aportar a la lectura del mismo.
---

## 📁 Estructura del proyecto

El proyecto contiene los siguientes archivos y carpetas importantes:

- `Convertidor.g4`: contiene la **gramática** formal del lenguaje de metadatos, escrita en formato ANTLR.
- `index.js`: archivo principal que **lee un archivo de entrada** y lanza el proceso de análisis.
- `CustomConvertidorVisitor.js`: define cómo se **procesan los nodos** del árbol sintáctico generado.
- `generated/`: carpeta donde se encuentran los **archivos generados automáticamente por ANTLR** (`Lexer`, `Parser`, `Visitor`, etc.).
- `tests/`: carpeta con **archivos de entrada de prueba**, tanto correctos como incorrectos.
    📌 Notas importantes en la parte de archivos de prueba:
     No se deben usar tildes ni caracteres especiales como á, é, etc.
     Los campos deben tener el formato exacto que indica la gramática.
     Las fechas siguen el formato YYYY:MM.DD.HH.MM[.SS], con separadores específicos.
- `package.json`: configura el proyecto como un módulo de Node.js con su dependencia a ANTLR4.

### 🚀 Instrucciones para correr el proyecto

##  1.Clonar el repositorio
```bash
git clone https://github.com/<tu_usuario>/52079.git
cd 52079
🧪 Archivos de prueba incluidos
tests/input_correcto_1.txt:  Metadatos correctamente estructurados, con fecha completa.
tests/input_correcto_2.txt:  Otro ejemplo válido, con campos opcionales.
tests/input_error_1.txt:  Ejemplo con errores de formato en fechas y omisión de ;.
tests/input_error_2.txt:  Ejemplo con caracteres inválidos (tildes, espacios mal ubicados).
##  2.Instalar dependencias
  npm install
##  3. Generar los archivos del parser y lexer
Abrir Convertidor.g4 en Visual Studio Code y presionar F5. Esto generará automáticamente los archivos en la carpeta generated/.
##  4. Ejecutar un análisis con un archivo de entrada
Ejecutar el proyecto con un archivo de prueba válido:
bash
Copiar código
node index.js tests/input_correcto_1.txt
#O directamente (si estás probando con input.txt en la raíz):
bash
Copiar código
npm start