import fs from 'fs'; // Importamos el módulo 'fs' (file system) para poder leer archivos desde el disco.
import antlr4 from 'antlr4'; // Importamos la librería base de ANTLR para JavaScript.
import ConvertidorLexer from './generated/ConvertidorLexer.js';// Estos dos módulos fueron generados automáticamente por ANTLR
import ConvertidorParser from './generated/ConvertidorParser.js';// El Lexer convierte el texto en tokens. El Parser analiza la estructura según la gramática.
import { CustomConvertidorVisitor } from './CustomConvertidorVisitor.js';// Lo usaremos para recorrer el árbol de análisis y ejecutar acciones (por ejemplo: traducir el código)

const input = fs.readFileSync('input.txt', 'utf8'); // Leemos el contenido del archivo 'input.txt' como una cadena de texto (UTF-8).
const chars = new antlr4.InputStream(input);        // Creamos un flujo de caracteres a partir del texto leído.
const lexer = new ConvertidorLexer(chars);          // Creamos el Lexer (analizador léxico).
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ConvertidorParser(tokens);       // Creamos el Parser (analizador sintáctico).
parser.buildParseTrees = true;                      // Le decimos al parser que construya un árbol de análisis sintáctico (parse tree).

const tree = parser.prog();                         // Comenzamos el análisis a partir de la regla inicial 'prog' (definida en la gramática).

if (parser._syntaxErrors > 0) {
  console.error("Errores de sintaxis detectados."); // Si el parser detectó errores, se muestra un mensaje en la consola.
} else {
  console.log("El archivo de entrada es correcto, respeta la sintaxis.");
  const treeText = tree.toStringTree(parser.ruleNames);//Generar el arbol en formato texto
  console.log("Árbol de derivación:");
  console.log(treeText);

  const visitor = new CustomConvertidorVisitor();
  visitor.visit(tree);
}// Si no hay errores:
 // 1. Mostramos mensaje de éxito.
 // 2. Creamos un Visitor personalizado y lo usamos para recorrer el árbol.
