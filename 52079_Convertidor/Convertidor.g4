grammar Convertidor;

// PARSER RULES

prog: campo+ EOF;// La regla principal (axioma). Indica que un "programa" está formado por uno o más "campos".

campo // Esta regla define que un campo puede ser cualquiera de los subcampos definidos más abajo.
  : nombreCampo
  | tipoCampo
  | tamanoCampo
  | creadoCampo
  | modificadoCampo
  | autorCampo
  | descripcionCampo
  | etiquetasCampo
  ;

// Cada tipo de campo se reconoce por su nombre literal ('nombre', 'tipo', etc.).
nombreCampo      : 'nombre' ':' texto ';' ;
tipoCampo        : 'tipo' ':' texto ';' ;
tamanoCampo      : 'tamaño' ':' numero ';' ;
creadoCampo      : 'creado' ':' fecha ';' ;
modificadoCampo  : 'modificado' ':' fecha ';' ;
autorCampo       : 'autor' ':' texto ';' ;
descripcionCampo : 'descripcion' ':' texto ';' ;
etiquetasCampo   : 'etiquetas' ':' '[' listaTextos ']' ';' ;//Usa una lista de textos entre corchetes.
// Cada línea representa una estructura específica de metadato.
// Todos los campos terminan con punto y coma (‘;’) y tienen un valor asociado (texto, número o fecha).

texto
  : (TEXTO | PUNTO)+        // acepta secuencias de palabras y puntos
  ;
// Un texto puede contener palabras (letras, números, guiones, espacios) y puntos.
// Por eso se permite TEXTO o PUNTO repetido una o más veces.
listaTextos // Una lista de textos separados por coma. Por ejemplo: documento, prueba, ejemplo
  : texto (',' texto)*
  ;

fecha
  : NUMERO PUNTOS NUMERO PUNTO NUMERO //Formato de fecha extendido: permite año:mes.día.hora.minuto.segundo
    ( PUNTO NUMERO PUNTO NUMERO
      ( PUNTO NUMERO )?// Los valores después del día son opcionales (hora, minuto, segundo)           
    )?
  ;

numero
  : NUMERO// Solo un número entero. Usado por ejemplo en 'tamaño'.
  ;


// LEXER RULES

NUMERO : [0-9]+ ;// Coincide con uno o más dígitos. Por ejemplo: 2025, 10, 30
PUNTOS : ':' ;// El carácter de dos puntos, usado por ejemplo en fechas
PUNTO  : '.' ;// El punto (.), usado para separar partes de fechas o incluirse en textos
TEXTO  : [a-zA-Z0-9_\- ]+ ;// Letras mayúsculas o minúsculas, números, guiones, guiones bajos y espacios
WS     : [ \t\r\n]+ -> skip ;
