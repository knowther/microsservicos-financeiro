// faz as associacoes entre dois select (incluir todos, incluir selecionado, excluir todos, excluir selecionados)
//INCUIR TODOS
function Incluir_Pertence_All(Doador, Recepitor) {
  var Forn_Part;
  for (var i = 0; i < Doador.options.length; i++) {
    Forn_Part = new Option(
      Doador.options[i].text,
      Doador.options[i].value,
      false,
      false
    );
    Recepitor.options[Recepitor.length] = Forn_Part;
    Doador.options[i] = null;
    i = i - 1;
  }
}

//EXCLUIR TODOS
function Excluir_Pertence_All(Doador, Recepitor) {
  var Forn_Part_apaga;
  for (var i = 0; i < Doador.options.length; i++) {
    Forn_Part_apaga = new Option(
      Doador.options[i].text,
      Doador.options[i].value,
      false,
      false
    );
    Recepitor.options[Recepitor.length] = Forn_Part_apaga;
    Doador.options[i] = null;
    i = i - 1;
  }
}

//INCLUIR OS SELECIONADOS
function Incluir_Pertence(Doador, Recepitor) {
  var Forn_Part;
  for (var i = 0; i < Doador.options.length; i++) {
    if (Doador.options[i].selected) {
      Forn_Part = new Option(
        Doador.options[i].text,
        Doador.options[i].value,
        false,
        false
      );
      Recepitor.options[Recepitor.length] = Forn_Part;
      Doador.options[i] = null;
      i = i - 1;
    }
  }
}

//EXCLUIR OS SELECIONADOS
function Excluir_Pertence(Doador, Recepitor) {
  var Forn_Part_apaga;
  for (var i = 0; i < Doador.options.length; i++) {
    if (Doador.options[i].selected) {
      Forn_Part_apaga = new Option(
        Doador.options[i].text,
        Doador.options[i].value,
        false,
        false
      );
      Recepitor.options[Recepitor.length] = Forn_Part_apaga;
      Doador.options[i] = null;
      i = i - 1;
    }
  }
}

//******************************************************************************************************
//Criada por Edson
function replace(texto, antigo, novo) {
  var t_resto = texto;
  var t_retorno = "";
  var pos_ini = 0;
  var pos = t_resto.indexOf(antigo);
  while (pos > -1) {
    pos_ini = pos + novo.length;
    if (navigator.appName != "Netscape")
      t_resto = t_resto.replace(antigo, novo);
    else
      t_resto =
        t_resto.substr(0, pos) + novo + t_resto.substr(pos + antigo.length);
    t_retorno = t_retorno + t_resto.substr(0, pos_ini);
    t_resto = t_resto.substr(pos_ini);
    pos = t_resto.indexOf(antigo);
  } //while
  t_retorno = t_retorno + t_resto;
  return t_retorno;
} //replace

function EhNumeroDec2(obj) {
  var iVirgulaPos;
  var codigo;
  codigo = event.keyCode;
  if (codigo == 44) {
    iVirgulaPos = obj.value.indexOf(",", 0);
    if (iVirgulaPos >= 0) {
      alert("Já existe um separador de casas decimais !");
      event.keyCode = 0;
      return false;
    } else {
      return true;
    }
  }
  if (codigo < 48 || codigo > 57) {
    alert("Esse campo só aceita números !");
    event.keyCode = 0;
    return false;
  }
}
function jsTrim(pStr) {
  var i;
  var strAux;
  var PosIni, PosFim;
  i = 0;
  while (i < pStr.length && pStr.charAt(i) == " ") {
    i++;
  }

  PosIni = i;

  i = pStr.length - 1;

  while (i >= 0 && pStr.charAt(i) == " ") {
    i--;
  }

  PosFim = i + 1;

  if (PosIni < PosFim) {
    strAux = pStr.substring(PosIni, PosFim);
  } else {
    strAux = "";
  }
  return strAux;
}

function obrigatorios(nomeForm, tipo) {
  var i = 0;
  while (i < nomeForm.length) {
    document.write(nomeForm.elements(i).value);
    if (jsTrim(nomeForm.elements(i).value) == "") {
      alert("Campo obrigatório está em branco!");
      nomeForm.elements(i).focus();
      return false;
    }
    i = i + 1;
  }
  return true;
}
function obrigatoriosElemento(objeto) {
  if (objeto.value == "" || objeto.value == "0" || objeto.value == 0) {
    alert("Campo obrigatório está em branco!");
    objeto.focus();
    return true;
  }
  return false;
}

function openRelatorio(url) {
  window.open(
    url,
    null,
    "remote,scrollbars=yes,resizable=no,toolbar=yes,dependent,width=652,height=350,top=20,left=100"
  );
}

function openWindow(url) {
  window.open(
    url,
    null,
    "SCROLLBARS=no, RESIZABLE=no, TOOLBAR=no, STATUS=no, MENUBAR=no, WIDTH=340, HEIGHT=405, TOP=" +
      String(window.screen.Height / 2 - 450) +
      ", LEFT=" +
      String(window.screen.Width / 2 - 200)
  );
}

function decimalComVirgula(objeto) {
  var i, codigo;
  codigo = event.keyCode;
  if (codigo == 44) {
    for (i = 0; i < objeto.value.length; i++) {
      a = objeto.value.substring(i, i + 1);
      if (a == ",") {
        event.keyCode = 0;
        break;
      }
    }
    if (objeto.value.length == 0) {
      event.keyCode = 0;
    }
  } else if (codigo < 48 || codigo > 57) {
    event.keyCode = 0;
    return false;
  }
}

function selecionarTodos(objImg, objCheck) {
  var imgSelTodos = "check2.gif";
  var imgNenhumSel = "check5.gif";
  var pChecked;
  var src, posImage;
  if (objCheck == null) {
    return;
  }

  src = objImg.src;
  //posImage = src.indexOf(imgSelTodos)
  posImage = src.indexOf("bt_check_on");
  if (posImage > 0) {
    src = src.substring(0, posImage) + "bt_check_off.jpg";
    pChecked = true;
  } else {
    posImage = src.indexOf("bt_check_off");
    src = src.substring(0, posImage) + "bt_check_on.jpg";
    pChecked = false;
  }
  objImg.src = src;
  if (objCheck.length == null) {
    objCheck.checked = pChecked;
  } else {
    for (var i = 0; i < objCheck.length; i++) {
      objCheck[i].checked = pChecked;
    }
  }
}

function verTodosMarcados(objCheck) {
  var countMarcados = 0;
  if (objCheck == null) {
    alert("Nenhum item na lista.");
    return false;
  }
  if (objCheck.length != null) {
    for (var i = 0; i < objCheck.length; i++) {
      if (objCheck[i].checked) {
        countMarcados = countMarcados + 1;
      }
    }
  }
  if (countMarcados > 1) {
    alert("Selecione apenas um item.");
    return false;
  }
  return true;
}

function verAlgunMarcado(objCheck) {
  var existe = false;
  if (objCheck == null) {
    alert("Nenhum item na lista.");
    return false;
  }
  if (objCheck.length == null) {
    existe = objCheck.checked;
  } else {
    for (var i = 0; i < objCheck.length; i++) {
      if (objCheck[i].checked) {
        existe = true;
        break;
      }
    }
  }
  if (!existe) {
    alert("É necessário selecionar um item.");
    return false;
  }
  return true;
}

function EhNumero() {
  var codigo;
  codigo = event.keyCode;
  if (
    codigo == 45 ||
    codigo == 46 ||
    codigo == 58 ||
    codigo == 13 ||
    codigo == 8
  ) {
    return true;
  }
  if (codigo < 48 || codigo > 57) {
    event.keyCode = 0;
    return false;
  }
}

function EhString() {
  var codigo;
  codigo = event.keyCode;
  if (
    codigo == 45 ||
    codigo == 46 ||
    codigo == 58 ||
    codigo == 13 ||
    codigo == 8
  ) {
    return false;
  }
  if (codigo < 48 || codigo > 57) {
    event.keyCode = 0;
    return true;
  }
}

function EhFuso() {
  var codigo;
  codigo = event.keyCode;
  if (codigo == 13 || codigo == 45) {
    return true;
  }
  if (codigo < 48 || codigo > 57) {
    alert("Esse campo só aceita números, e o sinal do fuso !");
    event.keyCode = 0;
    return false;
  }
}

function validaEmail(objeto) {
  var email = objeto.value;
  var s = new String(email);
  var retorno = true;
  if (email == "") return true;
  if (
    s.indexOf("{") >= 0 ||
    s.indexOf("}") >= 0 ||
    s.indexOf("(") >= 0 ||
    s.indexOf(")") >= 0 ||
    s.indexOf("<") >= 0 ||
    s.indexOf(">") >= 0 ||
    s.indexOf("[") >= 0 ||
    s.indexOf("]") >= 0 ||
    s.indexOf("|") >= 0 ||
    s.indexOf('"') >= 0 ||
    s.indexOf("/") >= 0
  )
    retorno = false;
  if (
    s.indexOf("&") >= 0 ||
    s.indexOf("*") >= 0 ||
    s.indexOf("$") >= 0 ||
    s.indexOf("%") >= 0 ||
    s.indexOf("?") >= 0 ||
    s.indexOf("!") >= 0 ||
    s.indexOf("^") >= 0 ||
    s.indexOf("~") >= 0 ||
    s.indexOf("`") >= 0 ||
    s.indexOf("'") >= 0
  )
    retorno = false;
  if (
    s.indexOf(",") >= 0 ||
    s.indexOf(";") >= 0 ||
    s.indexOf(":") >= 0 ||
    s.indexOf("=") >= 0 ||
    s.indexOf("#") >= 0
  )
    retorno = false;
  if (s.indexOf("@") < 0 || s.indexOf("@") != s.lastIndexOf("@"))
    retorno = false;
  if (s.lastIndexOf(".") < s.indexOf("@")) retorno = false;
  if (s.substr(0, 1) == "@") retorno = false;
  if (!retorno) {
    objeto.focus();
    objeto.select();
    alert("Email Incorreto!");
  }
  return retorno;
}

function FormataCPF(objeto) {
  var tecla, tamanho;
  tecla = event.keyCode;
  //ctrl, tab
  if (tecla != 8 && tecla != 16 && tecla != 9) {
    tamanho = objeto.value.length;
    if (tamanho == 3) {
      objeto.value = objeto.value + ".";
    } else if (tamanho == 7) {
      objeto.value = objeto.value + ".";
    } else if (tamanho == 11) {
      objeto.value = objeto.value + "-";
    }
  }
}

function LimpaFormatacaoCPF(objeto) {
  var wVrCPF;
  wVrCPF = objeto.value;
  wVrCPF = wVrCPF.replace(".", "");
  wVrCPF = wVrCPF.replace(".", "");
  wVrCPF = wVrCPF.replace("-", "");
  return wVrCPF;
}

function FormataCEP(objeto) {
  var tecla, tamanho;
  tecla = event.keyCode;
  if (tecla != 8) {
    tamanho = objeto.value.length;
    if (tamanho == 5) {
      objeto.value = objeto.value + "-";
    }
  }
}

function FormataFone(objeto) {
  var tecla, tamanho;
  tecla = event.keyCode;
  if (tecla != 8) {
    tamanho = objeto.value.length;
    if (tamanho == 4) {
      objeto.value = objeto.value + "-";
    }
  }
}

function LimpaFormatacaoCEP(objeto) {
  var novoCep;
  novoCep = objeto.value.replace("-", "");
  return novoCep;
}

function validaData(objeto) {
  var valor = objeto.value;
  var mValores = "312831303130313130313031";
  var retorno = false;
  var lastDate = 0;
  if (valor == "") return true;
  if (valor.length < 10) retorno = false;
  if (valor.substr(6, 4) < 1000) {
    alert("Data Inválida! O Formato deve ser DD/MM/AAAA");
    objeto.focus();
    objeto.select();
    return false;
  } else if (valor.substr(6, 4) < 1900) {
    alert("O sitema não trabalha com a data menor que 1900.");
    objeto.focus();
    objeto.select();
    return false;
  }
  dia = parseInt(valor.substring(0, 2), 10); // pega o dia
  mes = parseInt(valor.substring(3, 5), 10); // pega o mês
  ano = parseInt(valor.substring(6, 10), 10); // pega o ano
  if (mes == 2) {
    if (anobissexto(ano)) {
      lastDate = 29;
    } else {
      lastDate = 28;
    }
  } else {
    lastDate = mValores.substring((mes - 1) * 2, (mes - 1) * 2 + 2);
  }
  if (valor.length < 8) {
    retorno = false;
  } else if (valor.substring(2, 3) != "/") {
    retorno = false;
  } else if (valor.substring(5, 6) != "/") {
    retorno = false;
  } else if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    retorno = false;
  } else if (mes > 12 || mes <= 0) {
    retorno = false;
  } else if (dia > lastDate || dia <= 0) {
    retorno = false;
  } else if (valor.substring(6, 10) < 4) {
    retorno = false;
  } else {
    retorno = true;
  }
  if (!retorno) {
    alert("Data Inválida!");
    objeto.focus();
    objeto.select();
  }
  return retorno;
}

function FormataData(objeto) {
  var tecla, tamanho;
  tecla = event.keyCode;
  if (tecla != 8) {
    tamanho = objeto.value.length;
    if (tamanho == 2 || tamanho == 5) {
      objeto.value = objeto.value + "/";
    }
  }
}

function validaCompetencia(objeto) {
  var valor = objeto.value;
  var retorno = true;
  var lastDate = 0;
  if (valor.length < 7) retorno = false;
  if (valor.substr(3, 7) < 1000) {
    alert("Data Inválida! O Formato deve ser MM/AAAA");
    objeto.focus();
    objeto.select();
    return false;
  } else if (valor.substr(3, 7) < 1900) {
    alert("O sitema não trabalha com ano menor que 1900.");
    objeto.focus();
    objeto.select();
    return false;
  }
  mes = parseInt(valor.substring(0, 2), 10); // pega o mês
  ano = parseInt(valor.substring(3, 7), 10); // pega o ano
  if (mes > 12 || mes <= 0) {
    retorno = false;
  }
  if (valor.substring(2, 3) != "/") {
    retorno = false;
  }
  if (isNaN(mes) || isNaN(ano)) {
    retorno = false;
  }
  if (!retorno) {
    alert("Data Inválida!");
    objeto.focus();
    objeto.select();
  }
  if (valor == "") return true;
  return retorno;
}

function FormataCompetencia(objeto) {
  var tecla, tamanho;
  tecla = event.keyCode;
  if (tecla != 8) {
    tamanho = objeto.value.length;
    if (tamanho == 2) {
      objeto.value = objeto.value + "/";
    }
  }
}

function validaCPF(cpf) {
  var fach = 1;
  var pdig = cpf.substring(0, 1);
  var cdig;
  if (cpf == "") {
    return true;
  }
  if (cpf.length < 11) {
    return false;
  }
  for (i = 1; i < cpf.length; i++) {
    cdig = cpf.substring(i, i + 1);
    if (pdig == cdig) {
      fach = fach + 1;
    }
  }
  if (fach == cpf.length) {
    return false;
  }
  x = 0;
  soma = 0;
  dig1 = 0;
  dig2 = 0;
  texto = "";
  cpf1 = "";
  len = cpf.length;
  x = len - 1;
  for (var i = 0; i <= len - 3; i++) {
    y = cpf.substring(i, i + 1);
    soma = soma + y * x;
    x = x - 1;
    texto = texto + y;
  }
  dig1 = 11 - (soma % 11);
  if (dig1 == 10) dig1 = 0;
  if (dig1 == 11) dig1 = 0;
  cpf1 = cpf.substring(0, len - 2) + dig1;
  x = 11;
  soma = 0;
  for (var i = 0; i <= len - 2; i++) {
    soma = soma + cpf1.substring(i, i + 1) * x;
    x = x - 1;
  }
  dig2 = 11 - (soma % 11);
  if (dig2 == 10) dig2 = 0;
  if (dig2 == 11) dig2 = 0;
  if (dig1 + "" + dig2 == cpf.substring(len, len - 2)) {
    return true;
  } else {
    return false;
  }
}

function validaSenha(confirmacao, senha) {
  var senhaDigitada = confirmacao.value;
  var senhaComparada = senha.value;
  if (senhaDigitada.length < 4 && senhaDigitada != "") {
    alert("A senha deve ter no mínimo quatro caracteres");
    confirmacao.value = "";
    return false;
  } else if (
    senhaDigitada != "" &&
    senhaComparada != "" &&
    senhaDigitada != senhaComparada
  ) {
    alert("As duas senhas digitadas não conferem");
    confirmacao.value = "";
    confirmacao.focus();
    return false;
  } else return true;
}

function ValidaCNPJeCPF(pValue, sTipoValidacao) {
  var lTam, numeroCNPJ, digitoCNPJ, strValida;
  var i = 0;
  var novoValida = "";

  strValida = pValue.value;
  lTam = strValida.length;

  // Esse loop server para a conversão do ponto em virgula para perfeito funcionamento
  // no browser Netscape.
  while (i < lTam) {
    if (strValida.charAt(i) == ".") {
      novoValida = novoValida + ",";
    } else {
      novoValida = novoValida + strValida.charAt(i);
    }
    i = i + 1;
  }
  strValida = novoValida;

  //retira rodos os caracteres diferentes de mumero que serao
  //utilizados para a formatacao.
  strValida = strValida.replace("-", "");
  strValida = strValida.replace(",", "");
  strValida = strValida.replace("/", "");
  strValida = strValida.replace(",", "");

  lTam = strValida.length;

  if (lTam <= 11 && sTipoValidacao == "CPF") {
    if (validaCPF(strValida)) {
      pValue.value = colocaMascaraCPF(strValida);
    } else {
      alert("CPF inválido");
      return false;
    }
  } else if (sTipoValidacao == "CNPJ") {
    //captura o digito do cnpj
    if (strValida.length > 14) {
      alert("CNPJ inválido!");
      return false;
    } else {
      /*
				este trecho foi comentado e substituído pelo trecho acima pois
				ainda não está sendo considerado o CNPJ com 15 dígitos
				if (strValida.length==15)
				{
                numeroCNPJ = strValida.substring(1,strValida.length-2);

			    }*/
      numeroCNPJ = strValida.substring(-2, strValida.length - 2);
    }

    digitoCNPJ = strValida.substring(strValida.length - 2, strValida.length);

    if (validaCNPJ(numeroCNPJ, digitoCNPJ)) {
      if (lTam == 14) {
        strValida = strValida;
      }
      pValue.value = colocaMascaraCNPJ(strValida);
    } else {
      alert("CNPJ inválido");
      return false;
    }
  }
  return true;
}

function ajuda(arquivo) {
  window.open(
    "../../html/helps/" + arquivo,
    null,
    "scrollbars=yes,toolbar=no,left=160,top=110,width=450,height=415"
  );
}

var nCgc = new Array();

function valida_cgc(Form, nForm) {
  var Campos = eval("document." + nForm + ".vCgc.value");
  var Contador = 0;
  var x = 0;
  var i = Campos.indexOf(",");
  if (i == -1) {
    nCgc[Contador] = Campos.slice(0, Campos.length);
  } else {
    nCgc[Contador] = Campos.slice(0, i);
    Campos = Campos.slice(i + 1, Campos.length);
    for (; x < Campos.length; x++) {
      if (Campos.slice(x, x + 1) == ",") {
        Contador = Contador + 1;
        nCgc[Contador] = Campos.slice(0, x);
        Campos = Campos.slice(x + 1, Campos.length);
        x = 0;
      }
    }
    nCgc[nCgc.length] = Campos;
  }
  for (; x < nCgc.length; x++) {
    var Obj = eval("document." + nForm + "." + nCgc[x]);
    if (!verifica_cgc(Obj)) {
      Obj.focus();
      nCgc = new Array();
      return false;
    }
  }
  return true;
}
Testa_Tamanho_do_Numero = true;
Digitos_Verificadores_CGC = 2;
Digitos_CGC = 14;
function verifica_cgc(S) {
  var Original = Limpa_CGC(S);
  var Gerado = "";
  var Tamanho = Digitos_CGC;
  teste =
    !Testa_Tamanho_do_Numero ||
    (Testa_Tamanho_do_Numero && Original.length == Tamanho);
  if (teste) {
    Gerado = Original.substring(0, Original.length - Digitos_Verificadores_CGC);
    Gerado = Completa_CGC(Gerado);
    cgc_valido = Gerado == Original;
    if (!cgc_valido) {
      alert("O CNPJ (CGC) é inválido, favor corrigi-lo!");
      S.focus();
      return false;
    } else {
      return true;
    }
  } else {
    alert("A quantidade de números do cgc é inválida, favor corrigir.");
    S.focus();
    return false;
  }
}
function Limpa_CGC(S_aux2) {
  var SAux = "";
  S = S_aux2.value;
  var pos = 0;
  for (; pos < S.length; pos++)
    if (S.charAt(pos) >= "0" && S.charAt(pos) <= "9") {
      SAux = SAux + S.charAt(pos);
    }
  return SAux;
}

function Completa_CGC(S) {
  var SAux = S;
  var Quantos = Digitos_Verificadores_CGC;
  var c = 1;
  for (; c <= Quantos; c++) SAux = SAux + Digito_Verificador_CGC(SAux);
  return SAux;
}

function Digito_Verificador_CGC(S) {
  var soma = 0;
  var comprimento = S.length;
  var i = 1;
  for (; i <= comprimento; i++) {
    var fator = 2 + ((i - 1) % 8);
    soma = soma + parseInt(S.charAt(comprimento - i)) * fator;
  }
  return ((10 * soma) % 11) % 10;
}

function pag_funcao(url) {
  document.form1.action = url;
  document.form1.submit();
  return false;
}

function intervaloCorreto(objetoIni, objetoFim) {
  var retorno = true;
  var diaI, diaF, mesI, mesF, anoI, anoF, mensagemD;
  if (objetoIni.value != "" && objetoFim.value != "") {
    mensagemD = "Intervalo das Datas está incorreto!";
    diaI = objetoIni.value.substring(0, 2);
    mesI = objetoIni.value.substring(3, 5);
    anoI = objetoIni.value.substring(6, 10);
    diaF = objetoFim.value.substring(0, 2);
    mesF = objetoFim.value.substring(3, 5);
    anoF = objetoFim.value.substring(6, 10);
    if (anoI > anoF) {
      alert(mensagemD);
      retorno = false;
    } else if (anoI == anoF) {
      if (mesI > mesF) {
        alert(mensagemD);
        retorno = false;
      } else if (mesI == mesF) {
        if (diaI > diaF) {
          alert(mensagemD);
          retorno = false;
        }
      }
    }
  }
  if (!retorno) {
    objetoIni.focus();
  }
  return retorno;
}

function ValorValido(pObject, pIntPrecisao, pDecPrecisao) {
  var i, iVirgulaPos;
  var strValor;
  strValor = pObject.value;
  iVirgulaPos = 0;
  for (i = 0; i < strValor.length; i++) {
    if (strValor.charAt(i) == ",") {
      iVirgulaPos = i;
      break;
    }
  }
  if (iVirgulaPos == 0) {
    if (strValor.length > pIntPrecisao) {
      alert(
        "O campo só aceita até " + pIntPrecisao + " dígitos na parte inteira."
      );
      return false;
    }
  } else {
    if (strValor.substring(0, iVirgulaPos).length > pIntPrecisao) {
      alert(
        "O campo só aceita até " + pIntPrecisao + " dígitos na parte inteira."
      );
      return false;
    }
    iVirgulaPos++;
    if (strValor.length - iVirgulaPos > pDecPrecisao) {
      alert("O campo só aceita até " + pDecPrecisao + " casas decimais.");
      return false;
    }
  }
  return true;
}

function ValorValido(pObject, pIntPrecisao, pDecPrecisao) {
  var i, iVirgulaPos;
  var strValor;
  strValor = pObject.value;
  iVirgulaPos = 0;
  for (i = 0; i < strValor.length; i++) {
    if (strValor.charAt(i) == ",") {
      iVirgulaPos = i;
      break;
    }
  }
  if (iVirgulaPos == 0) {
    if (strValor.length > pIntPrecisao) {
      alert(
        "O campo só aceita até " + pIntPrecisao + " dígitos na parte inteira."
      );
      return false;
    }
  } else {
    if (strValor.substring(0, iVirgulaPos).length > pIntPrecisao) {
      alert(
        "O campo só aceita até " + pIntPrecisao + " dígitos na parte inteira."
      );
      return false;
    }
    iVirgulaPos++;
    if (strValor.length - iVirgulaPos > pDecPrecisao) {
      alert("O campo só aceita até " + pDecPrecisao + " casas decimais.");
      return false;
    }
  }
  return true;
}

function anobissexto(ano) {
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    return true;
  } else return false;
}

function validaCaracter(campo) {
  var valor = campo.value;
  valor = valor.toUpperCase();
  var dominio = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (c = 0; c < valor.length; c++) {
    mychar = valor.charAt(c);
    for (ch = 0; ch < dominio.length; ch++) {
      if (mychar == dominio.charAt(ch)) {
        var valido = true;
      }
    }
    if (valido != true) {
      alert("Não use acento, caracteres especiais ou espaço entre palavras!");
      campo.focus();
      campo.select();
      return false;
    } else {
      return true;
    }
  }
}

function validaEspaco(objeto) {
  var codigo;
  codigo = event.keyCode;
  if (codigo == 32) {
    alert("Caracter incorreto!");
    event.keyCode = 0;
  }
}

function ValidaCNPJ2(pValue) {
  var lTam, numeroCNPJ, digitoCNPJ, strValida;
  var i = 0;
  var novoValida = "";
  strValida = pValue.value;
  lTam = strValida.length;
  while (i < lTam) {
    if (strValida.charAt(i) == ".") {
      novoValida = novoValida + ",";
    } else {
      novoValida = novoValida + strValida.charAt(i);
    }
    i = i + 1;
  }
  strValida = novoValida;
  strValida = strValida.replace("-", "");
  strValida = strValida.replace(",", "");
  strValida = strValida.replace("/", "");
  strValida = strValida.replace(",", "");
  lTam = strValida.length;
  if (lTam <= 11) {
    alert("CNPJ inválido");
    return false;
  } else {
    if (strValida.length == 14) {
      numeroCNPJ = strValida.substring(-1, strValida.length - 2);
    } else {
      numeroCNPJ = strValida.substring(-2, strValida.length - 2);
    }
    digitoCNPJ = strValida.substring(strValida.length - 2, strValida.length);
    if (validaCNPJ(numeroCNPJ, digitoCNPJ)) {
      if (lTam < 14) {
        for (var i = lTam; i <= 14; i++) {
          strValida = "0" + strValida;
        }
      }
      pValue.value = colocaMascaraCNPJ(strValida);
    } else {
      alert("CNPJ inválido");
      return false;
    }
  }
  return true;
}

function msover(img, ref) {
  document.images[img].src = ref;
}

function msout(img, ref) {
  document.images[img].src = ref;
}

function checaBrowser() {
  return (
    (navigator.appName == "Netscape" &&
      parseFloat(navigator.appVersion) >= 3) ||
    (navigator.appName == "Microsoft Internet Explorer" &&
      parseFloat(navigator.appVersion) >= 4)
  );
}

var now = new Date();
var mName = now.getMonth() + 1;
var dName = now.getDay() + 1;
var dayNr = now.getDate();
var yearNr = now.getYear();
if (dName == 1) Day = "Domingo";
if (dName == 2) Day = "Segunda-feira";
if (dName == 3) Day = "Ter&ccedil;a-feira";
if (dName == 4) Day = "Quarta-feira";
if (dName == 5) Day = "Quinta-feira";
if (dName == 6) Day = "Sexta-feira";
if (dName == 7) Day = "S&aacute;bado";
if (mName == 1) Mes = "Janeiro";
if (mName == 2) Mes = "Fevereiro";
if (mName == 3) Mes = "Março";
if (mName == 4) Mes = "Abril";
if (mName == 5) Mes = "Maio";
if (mName == 6) Mes = "Junho";
if (mName == 7) Mes = "Julho";
if (mName == 8) Mes = "Agosto";
if (mName == 9) Mes = "Setembro";
if (mName == 10) Mes = "Outubro";
if (mName == 11) Mes = "Novembro";
if (mName == 12) Mes = "Dezembro";
if (yearNr < 2000) Year = 1900 + yearNr;
else Year = yearNr;
var todaysDate = " " + Day + ", " + dayNr + " de " + Mes + " de " + Year;
function MM_preloadImages() {
  var d = document;
  if (d.images) {
    if (!d.MM_p) d.MM_p = new Array();
    var i,
      j = d.MM_p.length,
      a = MM_preloadImages.arguments;
    for (i = 0; i < a.length; i++)
      if (a[i].indexOf("#") != 0) {
        d.MM_p[j] = new Image();
        d.MM_p[j++].src = a[i];
      }
  }
}
function MM_swapImgRestore() {
  var i,
    x,
    a = document.MM_sr;
  for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}
function MM_findObj(n, d) {
  var p, i, x;
  if (!d) d = document;
  if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) x = d.all[n];
  for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
  for (i = 0; !x && d.layers && i < d.layers.length; i++)
    x = MM_findObj(n, d.layers[i].document);
  return x;
}
function MM_swapImage() {
  var i,
    j = 0,
    x,
    a = MM_swapImage.arguments;
  document.MM_sr = new Array();
  for (i = 0; i < a.length - 2; i += 3)
    if ((x = MM_findObj(a[i])) != null) {
      document.MM_sr[j++] = x;
      if (!x.oSrc) x.oSrc = x.src;
      x.src = a[i + 2];
    }
}
function openWindow(url, name, width, height) {
  window.open(
    url,
    name,
    "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=" +
      width +
      ",height=" +
      height
  );
}
function emailCorreto(objeto) {
  var word = objeto.value;
  var retorno = true;
  var controle = 0;
  for (Count = 0; Count < word.length && controle != 2; Count++) {
    ch = word.substring(Count, Count + 1);
    if (ch == "@" && controle == 0) {
      controle = 1;
    } else if (ch == "@" && controle == 1) {
      retorno = false;
      controle = 2;
    }
  }
  if (!retorno) {
    alert("Email Incorreto!");
    objeto.focus();
  }
  return retorno;
}
function FormataNumero(nomeForm, numeroCampo, decimais, teclaPrecionada) {
  var tecla;
  tecla = teclaPrecionada.keyCode;
  if (tecla != 8) {
    if (nomeForm[numeroCampo].value.length == decimais) {
      nomeForm[numeroCampo].value = nomeForm[numeroCampo].value + ".";
    }
  }
}
function FormataNumero1(nomeForm, numeroCampo, decimais, teclaPrecionada) {
  var tecla;
  tecla = teclaPrecionada.keyCode;
  if (tecla != 8) {
    if (nomeForm[numeroCampo].value.length == 2) {
      nomeForm[numeroCampo].value = nomeForm[numeroCampo].value + ".";
    }
  }
}
function maxValor(NomeForm, numero, maximo, event) {
  if (NomeForm[numero].value.length == maximo && event.keyCode != 8) {
    alert("Valor Máximo Atingido");
    NomeForm[numero + 1].focus();
  }
}
function LimpaFormatacaoValor(form, nValor) {
  var novoValor;
  novoValor = form[nValor].value.replace(".", "");
  novoValor = novoValor.replace(".", "");
  return novoValor;
}
function validaCaracteres(objeto) {
  var texto = objeto.value;
  var s = new String(texto);
  var retorno = true;
  var i = 0;
  if (texto == "") return true;
  while (i < objeto.value.length) {
    objeto.value = objeto.value.replace("'", "");
    objeto.value = objeto.value.replace("´", "");
    objeto.value = objeto.value.replace("`", "");
    if (
      objeto.value.indexOf("'") < 0 &&
      objeto.value.indexOf("´") < 0 &&
      objeto.value.indexOf("`") < 0
    ) {
      i = objeto.value.length;
    }
    i = i + 1;
  }
  if (s.indexOf("ª") >= 0 || s.indexOf("º") >= 0 || s.indexOf("°") >= 0)
    retorno = false;
  if (
    s.indexOf("§") >= 0 ||
    s.indexOf("¹") >= 0 ||
    s.indexOf("²") >= 0 ||
    s.indexOf("³") >= 0
  )
    retorno = false;
  if (s.indexOf("£") >= 0 || s.indexOf("¢") >= 0 || s.indexOf("¬") >= 0)
    retorno = false;
  if (!retorno) {
    objeto.focus();
    objeto.select();
    alert("Não é permitido o uso da caracteres especiais!");
  }
  return retorno;
}
function validarlogin() {
  var d = document.formLogin;
  if (d.usuario.value == "") {
    window.alert("Digite seu login.");
    d.usuario.focus();
    return false;
  }
  if (d.senha.value == "") {
    window.alert("Digite sua senha.");
    d.senha.focus();
    return false;
  }
  d.submit();
  return true;
}
function EsqueceSenha() {
  var d = document.formLogin;
  if (d.usuario.value == "") {
    alert("É necessário informar o Login!");
    d.usuario.focus();
    return false;
  } else {
    d.action = "../Usuario/EsqueceuSenha.asp";
    d.submit();
  }
}
function NovaSenha() {
  var d = document.formLogin;
  if (d.usuario.value == "") {
    alert("É necessário informar o Login!");
    d.usuario.focus();
    return false;
  } else {
    d.action = "../Usuario/SolicitarSenha.asp";
    d.submit();
  }
}
function logar() {
  var tecla;
  tecla = event.keyCode;
  if (tecla == 13 && validarlogin()) {
    document.formLogin.submit();
  }
}
function openWindow(url, nome) {
  popupWin = window.open(
    url,
    nome,
    "remote,scrollbars=yes,dependent,top=50,left=170,width=430px,height=400px"
  );
}
function windowPopUp(url, iLargura, iAltura) {
  if (iLargura == 0) window.screen.width / 2;
  if (iAltura == 0) window.screen.height / 2;

  window.open(
    url,
    null,
    "SCROLLBARS=no, RESIZABLE=no, TOOLBAR=no, STATUS=no, MENUBAR=no, WIDTH=" +
      iLargura +
      ", HEIGHT=" +
      iAltura +
      ", TOP=10, LEFT=10"
  );
}

function validaCNPJ(Numero, Digito) {
  var CGC = Numero;
  var peso1 = "543298765432";
  var peso2 = "654329876543";
  var soma1 = 0;
  var soma2 = 0;
  var digito1 = 0;
  var digito2 = 0;
  var total = 0;
  var i = 0;
  total = Numero.length + Digito.length;
  if (CGC == 0) return false;
  if (Numero == "" && Digito == "") return true;
  if (total == 15) CGC = Numero.substr(1, 12);
  if (Numero.length < 12 || Digito.length < 2) return false;
  for (i = 1; i < 12 - Numero.length + 1; i++) {
    CGC = eval("'" + CGC + "'");
  }
  for (i = 1; i < CGC.length + 1; i++) {
    soma1 += CGC.substring(i, i - 1) * peso1.substring(i, i - 1);
  }
  soma1 %= 11;
  if (soma1 < 2) {
    digito1 = 0;
  } else {
    digito1 = 11 - soma1;
  }
  for (i = 1; i < CGC.length + 1; i++) {
    soma2 += CGC.substring(i, i - 1) * peso2.substring(i, i - 1);
  }
  soma2 += digito1 * 2;
  soma2 %= 11;
  if (soma2 < 2) {
    digito2 = 0;
  } else {
    digito2 = 11 - soma2;
  }
  if (eval("'" + digito1 + digito2 + "'") != Digito) {
    return false;
  } else {
    return true;
  }
}

// KeyDown JavaScript
function numeroInteiro(obj) {
  var iVirgulaPos;
  var codigo;
  codigo = event.keyCode;

  if (codigo < 48 || codigo > 57) {
    event.keyCode = 0;
    return false;
  }
}
function FormataCNPJ(objeto) {
  var tecla, tamanho;
  tecla = event.keyCode;
  if (tecla != 8) {
    tamanho = objeto.value.length;
    if (tamanho == 2) {
      objeto.value = objeto.value + ".";
    } else if (tamanho == 6) {
      objeto.value = objeto.value + ".";
    } else if (tamanho == 10) {
      objeto.value = objeto.value + "/";
    } else if (tamanho == 15) {
      objeto.value = objeto.value + "-";
    }
  }
}
function LimpaFormatacaoCNPJ(objeto) {
  var novoCnpj;
  novoCnpj = objeto.value.replace(".", "");
  novoCnpj = novoCnpj.replace(".", "");
  novoCnpj = novoCnpj.replace("-", "");
  novoCnpj = novoCnpj.replace("/", "");
  return novoCnpj;
}

function PreencheCNPJ(objeto) {
  var antigoCnpj, novoCnpj, sRetorno;

  if (objeto.value == "") return "";

  antigoCnpj = objeto.value;
  novoCnpj = objeto.value.replace(".", "");
  novoCnpj = novoCnpj.replace(".", "");
  novoCnpj = novoCnpj.replace("-", "");
  novoCnpj = novoCnpj.replace("/", "");
  if (novoCnpj.length < 15) {
    while (novoCnpj.length < 14) {
      novoCnpj = "0" + novoCnpj;
    }
    sRetorno =
      novoCnpj.substring(0, 3) +
      "." +
      novoCnpj.substring(3, 6) +
      "." +
      novoCnpj.substring(6, 9) +
      "/" +
      novoCnpj.substring(9, 13) +
      "-" +
      novoCnpj.substring(13, 15);
    return sRetorno;
  } else return antigoCnpj;
}
function colocaMascaraCNPJ(pValue) {
  var i, strTemp, tam;
  strTemp = "";
  tam = pValue.length;
  for (i = tam; i > 0; i--) {
    if (i == tam - 2) {
      strTemp = pValue.substring(i - 1, i) + "-" + strTemp;
    } else if (i == tam - 6) {
      strTemp = pValue.substring(i - 1, i) + "/" + strTemp;
    } else if (i == tam - 9) {
      strTemp = pValue.substring(i - 1, i) + "." + strTemp;
    } else if (i == tam - 12) {
      strTemp = pValue.substring(i - 1, i) + "." + strTemp;
    } else {
      strTemp = pValue.substring(i - 1, i) + strTemp;
    }
  }
  return strTemp;
}

function ComparaData(dtMenor, dtMaior) {
  //PS:a data menor esta mes/dia/ano igual a data do sistema!
  var DataMenor, DataMaior;

  var Parte1 = dtMenor.split("/");
  var Parte2 = dtMaior.split("/");

  if (Parte1[0].length == 1) {
    // MêS
    Parte1[0] = "0" + Parte1[0];
  }
  if (Parte1[1].length == 1) {
    // DIA
    Parte1[1] = "0" + Parte1[1];
  }
  if (Parte2[0].length == 1) {
    // DIA
    Parte2[0] = "0" + Parte2[0];
  }
  if (Parte2[1].length == 1) {
    // MêS
    Parte2[1] = "0" + Parte2[1];
  }
  DataMenor = Parte1[2] + Parte1[1] + Parte1[0];
  DataMaior = Parte2[2] + Parte2[1] + Parte2[0];

  if (DataMaior < DataMenor) {
    return false;
  }
  return true;
}

//Valida Cartão SUS Provisório | Por Paulo Guilherme, em 10/08/2006
function Valida_CNS_Prov(numero) {
  var soma, resto;
  soma =
    numero.substr(0, 1) * 15 +
    numero.substr(1, 1) * 14 +
    numero.substr(2, 1) * 13 +
    numero.substr(3, 1) * 12 +
    numero.substr(4, 1) * 11 +
    numero.substr(5, 1) * 10 +
    numero.substr(6, 1) * 9 +
    numero.substr(7, 1) * 8 +
    numero.substr(8, 1) * 7 +
    numero.substr(9, 1) * 6 +
    numero.substr(10, 1) * 5 +
    numero.substr(11, 1) * 4 +
    numero.substr(12, 1) * 3 +
    numero.substr(13, 1) * 2 +
    numero.substr(14, 1) * 1;

  resto = soma % 11;
  if (resto != 0) {
    return false;
  } else {
    return true;
  }
}

//Valida Cartão SUS | Por Paulo Guilherme, em 10/08/2006
function Valida_CNS(numero) {
  var soma, resto, pis, dv, resultado;
  pis = numero.substr(0, 11);

  soma =
    pis.substr(0, 1) * 15 +
    pis.substr(1, 1) * 14 +
    pis.substr(2, 1) * 13 +
    pis.substr(3, 1) * 12 +
    pis.substr(4, 1) * 11 +
    pis.substr(5, 1) * 10 +
    pis.substr(6, 1) * 9 +
    pis.substr(7, 1) * 8 +
    pis.substr(8, 1) * 7 +
    pis.substr(9, 1) * 6 +
    pis.substr(10, 1) * 5;

  resto = soma % 11;
  dv = 11 - resto;

  if (dv == 11) {
    dv = 0;
  }

  if (dv == 10) {
    soma =
      pis.substr(0, 1) * 15 +
      pis.substr(1, 1) * 14 +
      pis.substr(2, 1) * 13 +
      pis.substr(3, 1) * 12 +
      pis.substr(4, 1) * 11 +
      pis.substr(5, 1) * 10 +
      pis.substr(6, 1) * 9 +
      pis.substr(7, 1) * 8 +
      pis.substr(8, 1) * 7 +
      pis.substr(9, 1) * 6 +
      pis.substr(10, 1) * 5 +
      2;

    resto = soma % 11;
    dv = 11 - resto;
    resultado = pis + "001" + dv;
  } else {
    resultado = pis + "000" + dv;
  }
  if (numero != resultado) {
    return false;
  } else {
    return true;
  }
}
function FormataAPAC(objeto) {
  var tecla, tamanho;
  tecla = event.keyCode;
  if (tecla != 13) {
    tamanho = objeto.value.length;
    if (tamanho == 12) {
      objeto.value = objeto.value + "-";
    }
  }
}
//Valida Numero de APAC - Por Paulo Guilherme, em 26-02-2007
function Valida_APAC(numero) {
  var corpo, dv, corpo2, resto, dv2;
  corpo = numero.substr(0, numero.length - 2);
  dv = numero.substr(numero.length - 1, 1);
  corpo2 = corpo / 11;
  corpo2 = corpo2 + "";
  resto = corpo % 11;
  if (resto != 0) {
    corpo2 = corpo2.substr(0, corpo2.indexOf("."));
  }
  corpo2 = corpo2 * 11;
  dv2 = corpo - corpo2;
  if (dv2 == 10) {
    dv2 = 0;
  }
  if (dv == dv2) {
    return true;
  } else {
    return false;
  }
}

function verifica() {
  if (confirm("Você deseja gravar este laudo?")) {
    var datahoje = new Date();
    var datahojeano = datahoje.getFullYear();
    var datahojemes = datahoje.getMonth();
    document.getElementById("carregando").style.display = "block";
    document.getElementById("tbbotao").style.display = "none";
    //inicio verificação de data
    //critica se ta preenchido
    if (jsTrim(document.form.dData.value) == "") {
      alert("É necessario preencher o campo Data");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.dData.focus();
      return false;
    }
    //critica ano maior que atual
    if (document.form.dData.value.substr(6, 4) >= datahojeano + 1) {
      alert("Data inválida");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.dData.focus();
      return false;
    }
    //critica se ano anterior (nescessário no começo de cada ano
    if (document.form.dData.value.substr(6, 4) < datahojeano) {
      if (document.form.dData.value.substr(3, 2) <= 10) {
        alert("Laudo fora de validade!");
        document.getElementById("carregando").style.display = "none";
        document.getElementById("tbbotao").style.display = "block";
        document.form.dData.focus();
        return false;
      }

      if (document.form.dData.value.substr(6, 4) <= datahojeano - 2) {
        alert("Laudo fora de validade!");
        document.getElementById("carregando").style.display = "none";
        document.getElementById("tbbotao").style.display = "block";
        document.form.dData.focus();
        return false;
      }
    }
    //criticas se o ano for atual
    if (document.form.dData.value.substr(6, 4) == datahojeano) {
      //critica mes do ano atual maior
      if (document.form.dData.value.substr(3, 2) > datahojemes + 1) {
        alert("Data inválida!");
        document.getElementById("carregando").style.display = "none";
        document.getElementById("tbbotao").style.display = "block";
        document.form.dData.focus();
        return false;
      }
      //critica vaidade de 3 meses do laudo (mes atual + dois meses anteriores)
      if (document.form.dData.value.substr(3, 2) <= datahojemes - 2) {
        alert("Laudo fora de validade!");
        document.getElementById("carregando").style.display = "none";
        document.getElementById("tbbotao").style.display = "block";
        document.form.dData.focus();
        return false;
      }
    }
    //fim verificação de data
    if (jsTrim(document.form.Paciente.value) == "") {
      alert("É necessario preencher o campo Paciente");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.Paciente.focus();
      return false;
    }
    if (jsTrim(document.form.Unidade.value) == "") {
      alert("É necessario preencher o campo Unidade Solicitante");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.Unidade.focus();
      return false;
    }
    if (jsTrim(document.form.Med.value) == "") {
      alert("É necessario preencher o campo Médico Solicitante");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.Med.focus();
      return false;
    }
    if (jsTrim(document.form.Esp.value) == "") {
      alert("É necessario preencher o campo Especialidade Médica");
      document.getElementById("carregando").style.display = "none";
      document.form.Esp.focus();
      return false;
    }
    if (jsTrim(document.form.Cid1.value) == "") {
      alert("É necessario preencher o campo Cid principal");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.Cid1.focus();
      return false;
    }
    if (jsTrim(document.form.Pro1.value) == "") {
      alert("É necessario preencher o campo Procedimento Principal");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.Pro1.focus();
      return false;
    }
    if (document.form.DiagInicial.value == "") {
      alert("É necessario preencher o campo Diagnóstico Inicial!");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.DiagInicial.focus();
      return false;
    }
    if (document.form.vcTempoTratamento.value == "") {
      alert("Preencha o tempo de tratamento!");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.vcTempoTratamento.focus();
      return false;
    }
    if (document.form.exame.value == "") {
      alert("É necessario preencher o campo História Clínica / Exame Físico!");
      document.getElementById("carregando").style.display = "none";
      document.getElementById("tbbotao").style.display = "block";
      document.form.exame.focus();
      return false;
    }

    // verifica a unidade solicitante do formulário
    /*
   if (document.form.Complexidade.value == 2){
     if (confirm("Caso a execução do procedimento seja In-Loco, esta\nsolicitação pode ser aprovada automaticamente.\nA execução do procedimento será In Loco?\nClique OK para confirmar,\nou Cancelar caso não seja In Loco!")){
	   document.form.inloco.value = "sim";
	 }else{  
	   document.form.inloco.value = "nao";	 
	 }  
   } 
   */
    // verifica a unidade logada no sistema
    if (document.form.HComplexidade.value == 2) {
      if (
        confirm(
          "Caso a execução do procedimento seja In-Loco, esta\nsolicitação pode ser aprovada automaticamente.\nA execução do procedimento será In Loco?\nClique OK para confirmar,\nou Cancelar caso não seja In Loco!"
        )
      ) {
        document.form.inloco.value = "sim";
      } else {
        document.form.inloco.value = "nao";
      }
    }
    return true;
  } else {
    alert("Ação Cancelada");
    document.form.dData.focus();
    return false;
  }
}
