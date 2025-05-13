// Generated from c:/UTN/Segundo Año/SINTAXIS Y SEMANTICA DE LOS LENGUAJES/ANALIZADOR/Analizador/52079_Convertidor/Convertidor.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ConvertidorListener from './ConvertidorListener.js';
import ConvertidorVisitor from './ConvertidorVisitor.js';

const serializedATN = [4,1,17,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,44,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,
1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,
1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,4,10,89,8,10,11,10,12,10,90,
1,11,1,11,1,11,5,11,96,8,11,10,11,12,11,99,9,11,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,3,12,112,8,12,3,12,114,8,12,1,13,1,13,1,13,
0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,1,1,0,15,16,115,0,29,1,0,0,
0,2,43,1,0,0,0,4,45,1,0,0,0,6,50,1,0,0,0,8,55,1,0,0,0,10,60,1,0,0,0,12,65,
1,0,0,0,14,70,1,0,0,0,16,75,1,0,0,0,18,80,1,0,0,0,20,88,1,0,0,0,22,92,1,
0,0,0,24,100,1,0,0,0,26,115,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,
0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,0,0,1,34,1,1,0,0,
0,35,44,3,4,2,0,36,44,3,6,3,0,37,44,3,8,4,0,38,44,3,10,5,0,39,44,3,12,6,
0,40,44,3,14,7,0,41,44,3,16,8,0,42,44,3,18,9,0,43,35,1,0,0,0,43,36,1,0,0,
0,43,37,1,0,0,0,43,38,1,0,0,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,
43,42,1,0,0,0,44,3,1,0,0,0,45,46,5,1,0,0,46,47,5,14,0,0,47,48,3,20,10,0,
48,49,5,2,0,0,49,5,1,0,0,0,50,51,5,3,0,0,51,52,5,14,0,0,52,53,3,20,10,0,
53,54,5,2,0,0,54,7,1,0,0,0,55,56,5,4,0,0,56,57,5,14,0,0,57,58,3,26,13,0,
58,59,5,2,0,0,59,9,1,0,0,0,60,61,5,5,0,0,61,62,5,14,0,0,62,63,3,24,12,0,
63,64,5,2,0,0,64,11,1,0,0,0,65,66,5,6,0,0,66,67,5,14,0,0,67,68,3,24,12,0,
68,69,5,2,0,0,69,13,1,0,0,0,70,71,5,7,0,0,71,72,5,14,0,0,72,73,3,20,10,0,
73,74,5,2,0,0,74,15,1,0,0,0,75,76,5,8,0,0,76,77,5,14,0,0,77,78,3,20,10,0,
78,79,5,2,0,0,79,17,1,0,0,0,80,81,5,9,0,0,81,82,5,14,0,0,82,83,5,10,0,0,
83,84,3,22,11,0,84,85,5,11,0,0,85,86,5,2,0,0,86,19,1,0,0,0,87,89,7,0,0,0,
88,87,1,0,0,0,89,90,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,21,1,0,0,0,92,
97,3,20,10,0,93,94,5,12,0,0,94,96,3,20,10,0,95,93,1,0,0,0,96,99,1,0,0,0,
97,95,1,0,0,0,97,98,1,0,0,0,98,23,1,0,0,0,99,97,1,0,0,0,100,101,5,13,0,0,
101,102,5,14,0,0,102,103,5,13,0,0,103,104,5,15,0,0,104,113,5,13,0,0,105,
106,5,15,0,0,106,107,5,13,0,0,107,108,5,15,0,0,108,111,5,13,0,0,109,110,
5,15,0,0,110,112,5,13,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,114,1,0,0,
0,113,105,1,0,0,0,113,114,1,0,0,0,114,25,1,0,0,0,115,116,5,13,0,0,116,27,
1,0,0,0,6,31,43,90,97,111,113];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ConvertidorParser extends antlr4.Parser {

    static grammarFileName = "Convertidor.g4";
    static literalNames = [ null, "'nombre'", "';'", "'tipo'", "'tama\\u00F1o'", 
                            "'creado'", "'modificado'", "'autor'", "'descripcion'", 
                            "'etiquetas'", "'['", "']'", "','", null, "':'", 
                            "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NUMERO", "PUNTOS", 
                             "PUNTO", "TEXTO", "WS" ];
    static ruleNames = [ "prog", "campo", "nombreCampo", "tipoCampo", "tamanoCampo", 
                         "creadoCampo", "modificadoCampo", "autorCampo", 
                         "descripcionCampo", "etiquetasCampo", "texto", 
                         "listaTextos", "fecha", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ConvertidorParser.ruleNames;
        this.literalNames = ConvertidorParser.literalNames;
        this.symbolicNames = ConvertidorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ConvertidorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.campo();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1018) !== 0));
	        this.state = 33;
	        this.match(ConvertidorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ConvertidorParser.RULE_campo);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.nombreCampo();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.tipoCampo();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.tamanoCampo();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            this.creadoCampo();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 39;
	            this.modificadoCampo();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 40;
	            this.autorCampo();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 41;
	            this.descripcionCampo();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 42;
	            this.etiquetasCampo();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ConvertidorParser.RULE_nombreCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ConvertidorParser.T__0);
	        this.state = 46;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 47;
	        this.texto();
	        this.state = 48;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipoCampo() {
	    let localctx = new TipoCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ConvertidorParser.RULE_tipoCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(ConvertidorParser.T__2);
	        this.state = 51;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 52;
	        this.texto();
	        this.state = 53;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tamanoCampo() {
	    let localctx = new TamanoCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ConvertidorParser.RULE_tamanoCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(ConvertidorParser.T__3);
	        this.state = 56;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 57;
	        this.numero();
	        this.state = 58;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	creadoCampo() {
	    let localctx = new CreadoCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ConvertidorParser.RULE_creadoCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(ConvertidorParser.T__4);
	        this.state = 61;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 62;
	        this.fecha();
	        this.state = 63;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modificadoCampo() {
	    let localctx = new ModificadoCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ConvertidorParser.RULE_modificadoCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(ConvertidorParser.T__5);
	        this.state = 66;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 67;
	        this.fecha();
	        this.state = 68;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	autorCampo() {
	    let localctx = new AutorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ConvertidorParser.RULE_autorCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(ConvertidorParser.T__6);
	        this.state = 71;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 72;
	        this.texto();
	        this.state = 73;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	descripcionCampo() {
	    let localctx = new DescripcionCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ConvertidorParser.RULE_descripcionCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(ConvertidorParser.T__7);
	        this.state = 76;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 77;
	        this.texto();
	        this.state = 78;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	etiquetasCampo() {
	    let localctx = new EtiquetasCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ConvertidorParser.RULE_etiquetasCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(ConvertidorParser.T__8);
	        this.state = 81;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 82;
	        this.match(ConvertidorParser.T__9);
	        this.state = 83;
	        this.listaTextos();
	        this.state = 84;
	        this.match(ConvertidorParser.T__10);
	        this.state = 85;
	        this.match(ConvertidorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ConvertidorParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 87;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15 || _la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaTextos() {
	    let localctx = new ListaTextosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ConvertidorParser.RULE_listaTextos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.texto();
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 93;
	            this.match(ConvertidorParser.T__11);
	            this.state = 94;
	            this.texto();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ConvertidorParser.RULE_fecha);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(ConvertidorParser.NUMERO);
	        this.state = 101;
	        this.match(ConvertidorParser.PUNTOS);
	        this.state = 102;
	        this.match(ConvertidorParser.NUMERO);
	        this.state = 103;
	        this.match(ConvertidorParser.PUNTO);
	        this.state = 104;
	        this.match(ConvertidorParser.NUMERO);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 105;
	            this.match(ConvertidorParser.PUNTO);
	            this.state = 106;
	            this.match(ConvertidorParser.NUMERO);
	            this.state = 107;
	            this.match(ConvertidorParser.PUNTO);
	            this.state = 108;
	            this.match(ConvertidorParser.NUMERO);
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 109;
	                this.match(ConvertidorParser.PUNTO);
	                this.state = 110;
	                this.match(ConvertidorParser.NUMERO);
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ConvertidorParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(ConvertidorParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ConvertidorParser.EOF = antlr4.Token.EOF;
ConvertidorParser.T__0 = 1;
ConvertidorParser.T__1 = 2;
ConvertidorParser.T__2 = 3;
ConvertidorParser.T__3 = 4;
ConvertidorParser.T__4 = 5;
ConvertidorParser.T__5 = 6;
ConvertidorParser.T__6 = 7;
ConvertidorParser.T__7 = 8;
ConvertidorParser.T__8 = 9;
ConvertidorParser.T__9 = 10;
ConvertidorParser.T__10 = 11;
ConvertidorParser.T__11 = 12;
ConvertidorParser.NUMERO = 13;
ConvertidorParser.PUNTOS = 14;
ConvertidorParser.PUNTO = 15;
ConvertidorParser.TEXTO = 16;
ConvertidorParser.WS = 17;

ConvertidorParser.RULE_prog = 0;
ConvertidorParser.RULE_campo = 1;
ConvertidorParser.RULE_nombreCampo = 2;
ConvertidorParser.RULE_tipoCampo = 3;
ConvertidorParser.RULE_tamanoCampo = 4;
ConvertidorParser.RULE_creadoCampo = 5;
ConvertidorParser.RULE_modificadoCampo = 6;
ConvertidorParser.RULE_autorCampo = 7;
ConvertidorParser.RULE_descripcionCampo = 8;
ConvertidorParser.RULE_etiquetasCampo = 9;
ConvertidorParser.RULE_texto = 10;
ConvertidorParser.RULE_listaTextos = 11;
ConvertidorParser.RULE_fecha = 12;
ConvertidorParser.RULE_numero = 13;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(ConvertidorParser.EOF, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	tipoCampo() {
	    return this.getTypedRuleContext(TipoCampoContext,0);
	};

	tamanoCampo() {
	    return this.getTypedRuleContext(TamanoCampoContext,0);
	};

	creadoCampo() {
	    return this.getTypedRuleContext(CreadoCampoContext,0);
	};

	modificadoCampo() {
	    return this.getTypedRuleContext(ModificadoCampoContext,0);
	};

	autorCampo() {
	    return this.getTypedRuleContext(AutorCampoContext,0);
	};

	descripcionCampo() {
	    return this.getTypedRuleContext(DescripcionCampoContext,0);
	};

	etiquetasCampo() {
	    return this.getTypedRuleContext(EtiquetasCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_nombreCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitNombreCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitNombreCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_tipoCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterTipoCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitTipoCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitTipoCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TamanoCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_tamanoCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterTamanoCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitTamanoCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitTamanoCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreadoCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_creadoCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterCreadoCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitCreadoCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitCreadoCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModificadoCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_modificadoCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterModificadoCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitModificadoCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitModificadoCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AutorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_autorCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterAutorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitAutorCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitAutorCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DescripcionCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_descripcionCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterDescripcionCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitDescripcionCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitDescripcionCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EtiquetasCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_etiquetasCampo;
    }

	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	listaTextos() {
	    return this.getTypedRuleContext(ListaTextosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterEtiquetasCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitEtiquetasCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitEtiquetasCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_texto;
    }

	TEXTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConvertidorParser.TEXTO);
	    } else {
	        return this.getToken(ConvertidorParser.TEXTO, i);
	    }
	};


	PUNTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConvertidorParser.PUNTO);
	    } else {
	        return this.getToken(ConvertidorParser.PUNTO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaTextosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_listaTextos;
    }

	texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextoContext);
	    } else {
	        return this.getTypedRuleContext(TextoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterListaTextos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitListaTextos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitListaTextos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_fecha;
    }

	NUMERO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConvertidorParser.NUMERO);
	    } else {
	        return this.getToken(ConvertidorParser.NUMERO, i);
	    }
	};


	PUNTOS() {
	    return this.getToken(ConvertidorParser.PUNTOS, 0);
	};

	PUNTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConvertidorParser.PUNTO);
	    } else {
	        return this.getToken(ConvertidorParser.PUNTO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConvertidorParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(ConvertidorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConvertidorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConvertidorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ConvertidorParser.ProgContext = ProgContext; 
ConvertidorParser.CampoContext = CampoContext; 
ConvertidorParser.NombreCampoContext = NombreCampoContext; 
ConvertidorParser.TipoCampoContext = TipoCampoContext; 
ConvertidorParser.TamanoCampoContext = TamanoCampoContext; 
ConvertidorParser.CreadoCampoContext = CreadoCampoContext; 
ConvertidorParser.ModificadoCampoContext = ModificadoCampoContext; 
ConvertidorParser.AutorCampoContext = AutorCampoContext; 
ConvertidorParser.DescripcionCampoContext = DescripcionCampoContext; 
ConvertidorParser.EtiquetasCampoContext = EtiquetasCampoContext; 
ConvertidorParser.TextoContext = TextoContext; 
ConvertidorParser.ListaTextosContext = ListaTextosContext; 
ConvertidorParser.FechaContext = FechaContext; 
ConvertidorParser.NumeroContext = NumeroContext; 
