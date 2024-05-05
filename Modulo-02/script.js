const calcularTempoVidaFumante = require("./Atividades/atividade-001");
const calcularMulta = require("./Atividades/atividade-002");
const calcularPrecoPassagem = require("./Atividades/atividade-003");
const calcularTriangulo = require("./Atividades/atividade-004");
const erroValorInformadoNaoEhNumero = require("./utils/valorInformadoNaoEhNumero.js");
const pedirValorInteiroParaUsuario = require("./utils/pedirValorInteiroParaUsuario.js");
const joKenPo = require("./Atividades/atividade-005");
const jogoValorSorteado = require("./Atividades/atividade-006");
const calculaAluguelCarro = require("./Atividades/atividade-007");
const calculaVidaSaudavel = require("./Atividades/atividade-008");
const mostrarSalarioESexo = require("./Atividades/atividade-009.js");
const receberVariosNumeros = require("./Atividades/atividade-010");
const mostrarPA = require("./Atividades/atividade-011");
const fibonacciDezPrimeiros = require("./Atividades/atividade-012");
const fibonacciQuinzePrimeiros = require("./Atividades/atividade-013");
const inverterSeteNomes = require("./Atividades/atividade-014");
const dezInteirosVetor = require("./Atividades/atividade-015");
const preencherVintePosicoesVetor = require("./Atividades/atividade-016");
const lerNoveIdadesMostrarMenores = require("./Atividades/atividade-017");
const registroFuncionarios = require("./Atividades/atividade-018");
const horarios = require("./Atividades/atividade-019");
const folhaMensal = require("./Atividades/atividade-020.js");
const pesoIdeal = require("./Atividades/atividade-021");
const coletaDadosPrefeitura = require("./Atividades/atividade-022");
const matrizIdentidade = require("./Atividades/atividade-023");
const matrizVetorC = require("./Atividades/atividade-024");
const matrizSomaColunas = require("./Atividades/atividade-025");
const matrizProduto = require("./Atividades/atividade-026");
const matrizComValorMultiplicando = require("./Atividades/atividade-027");
const matrizDezPorDez = require("./Atividades/atividade-028");
const matrizQuatroSomas = require("./Atividades/atividade-029");
const matrizCincoPorCinco = require("./Atividades/atividade-030");
const matrizTrintaPorTrinta = require("./Atividades/atividade-031");
const matrizDividirLinhasMaiorModulo = require("./Atividades/atividade-032.js");
const matrizDiagonalPrincipalVezesSecundaria = require("./Atividades/atividade-033");
const matrizCinquentaCinquenta = require("./Atividades/atividade-034");
const separarParesImparesEmCinco = require("./Atividades/atividade-035");
const loteriaEsportiva = require("./Atividades/atividade-036");
const provaAlunos = require("./Atividades/atividade-037");
const operacoesVetor = require("./Atividades/atividade-038");
const retirarNulosENegativos = require("./Atividades/atividade-039.js");
const resultadoLoto = require("./Atividades/atividade-040.js");
const pessoaNomeIdade = require("./Atividades/atividade-041");
const dadosVariasPropriedades = require("./Atividades/atividade-042");
const mesclarObjetos = require("./Atividades/atividade-043");
const stringsNoObjeto = require("./Atividades/atividade-044");
const chavesNoArray = require("./Atividades/atividade-045");
const objetoVendaValor = require("./Atividades/atividade-046");
const receberCheats = require("./Atividades/atividade-047");
const lojasDiferentes = require("./Atividades/atividade-048");
const transacoesFinanceiras = require("./Atividades/atividade-049");
const prompt = require("prompt-sync")();
const SOLICITAR_EXERCICIO = "Informe o exercicio desejado: (0 para sair): ";

function selecionarExercicio() {
  let exercicioEscolhido = parseInt(prompt(SOLICITAR_EXERCICIO));
  while (exercicioEscolhido !== 0) {
    while (isNaN(exercicioEscolhido) || exercicioEscolhido === "") {
      erroValorInformadoNaoEhNumero();
      exercicioEscolhido = pedirValorInteiroParaUsuario();
    }
    switch (exercicioEscolhido) {
      case 1:
        calcularTempoVidaFumante();
        break;
      case 2:
        calcularMulta();
        break;
      case 3:
        calcularPrecoPassagem();
        break;
      case 4:
        calcularTriangulo();
        break;
      default:
        break;
      case 5:
        joKenPo();
        break;
      case 6:
        jogoValorSorteado();
        break;
      case 7:
        calculaAluguelCarro();
        break;
      case 8:
        calculaVidaSaudavel();
        break;
      case 9:
        mostrarSalarioESexo();
        break;
      case 10:
        receberVariosNumeros();
        break;
      case 11:
        mostrarPA();
        break;
      case 12:
        fibonacciDezPrimeiros();
        break;
      case 13:
        fibonacciQuinzePrimeiros();
        break;
      case 14:
        inverterSeteNomes();
        break;
      case 15:
        dezInteirosVetor();
        break;
      case 16:
        preencherVintePosicoesVetor();
        break;
      case 17:
        lerNoveIdadesMostrarMenores();
        break;
      case 18:
        registroFuncionarios();
        break;
      case 19:
        horarios();
        break;
      case 20:
        folhaMensal();
        break;
      case 21:
        pesoIdeal();
        break;
      case 22:
        coletaDadosPrefeitura();
        break;
      case 23:
        matrizIdentidade();
        break;
      case 24:
        matrizVetorC();
        break;
      case 25:
        matrizSomaColunas();
        break;
      case 26:
        matrizProduto();
        break;
      case 27:
        matrizComValorMultiplicando();
        break;
      case 28:
        matrizDezPorDez();
        break;
      case 29:
        matrizQuatroSomas();
        break;
      case 30:
        matrizCincoPorCinco();
        break;
      case 31:
        matrizTrintaPorTrinta();
        break;
      case 32:
        matrizDividirLinhasMaiorModulo();
        break;
      case 33:
        matrizDiagonalPrincipalVezesSecundaria();
        break;
      case 34:
        matrizCinquentaCinquenta();
        break;
      case 35:
        separarParesImparesEmCinco();
        break;
      case 36:
        loteriaEsportiva();
        break;
      case 37:
        provaAlunos();
        break;
      case 38:
        operacoesVetor();
        break;
      case 39:
        retirarNulosENegativos();
        break;
      case 40:
        resultadoLoto();
        break;
      case 41:
        pessoaNomeIdade();
        break;
      case 42:
        dadosVariasPropriedades();
        break;
      case 43:
        mesclarObjetos();
        break;
      case 44:
        stringsNoObjeto();
        break;
      case 45:
        chavesNoArray();
        break;
      case 46:
        objetoVendaValor();
        break;
      case 47:
        receberCheats();
        break;
      case 48:
        lojasDiferentes();
        break;
      case 49:
        transacoesFinanceiras();
        break;
    }

    exercicioEscolhido = parseInt(prompt(SOLICITAR_EXERCICIO));
  }
}

selecionarExercicio();
