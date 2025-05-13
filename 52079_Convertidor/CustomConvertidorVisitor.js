import ConvertidorVisitor from './generated/ConvertidorVisitor.js';

export class CustomConvertidorVisitor extends ConvertidorVisitor {
  constructor() {
    super();
    this.metadata = {};
  }

  visitProg(ctx) {
    for (let campo of ctx.campo()) {
      this.visit(campo);
    }

    console.log("Traducción a JavaScript:");
    console.log("const archivoMetadata = ", JSON.stringify(this.metadata, null, 2) + ";");
    return this.metadata;
  }

  visitNombreCampo(ctx) {
    this.metadata["nombre"] = ctx.texto().getText();
  }

  visitTipoCampo(ctx) {
    this.metadata["tipo"] = ctx.texto().getText();
  }

  visitTamanoCampo(ctx) {
    this.metadata["tamaño"] = parseInt(ctx.numero().getText());
  }

  visitCreadoCampo(ctx) {
    this.metadata["creado"] = ctx.fecha().getText();
  }

  visitModificadoCampo(ctx) {
    this.metadata["modificado"] = ctx.fecha().getText();
  }

  visitAutorCampo(ctx) {
    this.metadata["autor"] = ctx.texto().getText();
  }

  visitDescripcionCampo(ctx) {
    this.metadata["descripcion"] = ctx.texto().getText();
  }

  visitEtiquetasCampo(ctx) {
    const textos = ctx.listaTextos().texto().map(t => t.getText());
    this.metadata["etiquetas"] = textos;
  }
}

