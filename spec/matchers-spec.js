// toBe

describe("Suíte de testes do toBe", function(){

    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = {'valor': valorBooleano};
    var obj2 = {'valor': valorBooleano};
    // ===(toBe) valor e o tipo e == compara apenas valores(toEqual)
    it("deve validar o uso do matcher 'toBe'", function(){
        expect(valorBooleano).toBe(true);
        expect(valorBooleanoCopia).toBe(valorBooleano);
        expect(valorBooleano).not.toBe(valorBooleanoTexto);
        expect(valorBooleanoTexto).toBe("true");
        expect(obj1).not.toBe(obj2);
    });
});
describe("Suíte de teste do toEqual", function(){
    var valorBooleano = true;
    var valorBooleano2 = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = {'valor': valorBooleano};
    var obj2 = {'valor': valorBooleano};

    it("Deve validar p uso do matcher 'toEqual'", function(){
        expect(valorBooleano).toEqual(true);
        expect(valorBooleano).toEqual(valorBooleano2);
        expect(valorBooleanoCopia).toEqual(valorBooleano);
        expect(valorBooleano).not.toEqual(valorBooleanoTexto);
        expect(valorBooleanoTexto).toEqual("true");
        expect(obj1).toEqual(obj2);
    })
})

//toMatch
describe("Suíte de testes do toMatch", function(){
    var textoComparar = "Curso de testes com Jasmine";
    it("Deve validar o uso do matcher 'toMatch'", function(){
        expect(textoComparar).toMatch(/Jasmine/);
        expect(textoComparar).toMatch("Jasmine");
        expect(textoComparar).toMatch(/jasmine/i);
        expect(textoComparar).not.toMatch(/Javascript/);
            expect("14/12/2016").toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });
});

//toBeDefined
describe("Suíte de teste do toBeDefined", function(){
    var numero = 10;
    var texto;
    var obj = {'valor':10};
    it("Deve validar o uso do matcher 'toBeDefined'",function(){
        expect(numero).toBeDefined();
        expect(texto).not.toBeDefined();
        expect(obj.valor).toBeDefined();
        expect(obj.mensagem).not.toBeDefined();
    });
});

//toBeUndefined
describe("Suíte de testes do toBeUndefined", function(){
    var numero = 10;
    var texto;
    var obj = {'valor':10};
    it("Deve validar o uso do macther 'toBeUndefines'", function(){
        expect(texto).toBeUndefined();
        expect(numero).not.toBeUndefined();
        expect(obj.mensagem).toBeUndefined();
        expect(obj.valor).not.toBeUndefined();
    });
});

//toBeNull
describe("Suít de testes do toBeNull", function(){
    var objeto = null;
    var texto;
    var numero = 10;

    it("Deve validar o uso de matcher 'toBeNull'", function(){
        expect(objeto).toBeNull();
        expect(numero).not.toBeNull();
        expect(texto).not.toBeNull();
        expect(objeto).not.toEqual(texto);
    });
});

//toBeTruthy
describe("Suíte de testes do toBeTruthy", function(){
    var objeto = {'valor': 123};
    var texto;
    var numero = 10;

    it("deve validar o uso do matcher 'toBeTruthy'", function(){
        expect(objeto).toBeTruthy();
        expect(numero).toBeTruthy();
        expect(texto).not.toBeTruthy();
    });
});

//toBeFalsy
describe("Suíte de testes do toBeFalsy", function(){
    var numero = 10;

    it("Deve validar o uso do matcher 'toBeFalsy'", function(){
        expect(false).toBeFalsy();
        expect("").toBeFalsy();
        expect(0).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect("false").not.toBeFalsy();
    });
});

// toContain
describe("Suíte de testes do toContain", function(){
    var nomes = ["Fulano", "Ciclano", "Beltrano"];
    var nomesTexto = "Fulano Ciclano Beltrano";
    it("Deve validar o uso de matcher 'toContain'", function(){
        expect(nomes).toContain("Ciclano");
        expect(nomesTexto).toContain("Fulano");
        expect(nomesTexto).toContain("Bel");
        expect(nomes).not.toContain("Maria");
        expect(nomes).not.toContain("ciclano");
    });
});
