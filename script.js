function createelement(tagname,attrname1,attrvalue1, attrname2, attrvalue2, attrname3, attrvalue3){
  var element = document.createElement(tagname);
  element.setAttribute(attrname1,attrvalue1);
  element.setAttribute(attrname2,attrvalue2);
  element.setAttribute(attrname3,attrvalue3);
  return element;
}

function createbutton(tagname,attrname1,attrvalue1,content,attrname2, attrvalue2, attrname3, attrvalue3){
  var element = document.createElement(tagname);
  element.innerHTML = content;
  element.setAttribute(attrname1,attrvalue1);
  element.setAttribute(attrname2,attrvalue2);
  element.setAttribute(attrname3,attrvalue3);
  element.addEventListener("click",function(){display(content)});
  
  return element;
}

function createbutton1(tagname,attrname1,attrvalue1,content,attrname2, attrvalue2, attrname3, attrvalue3){
  var element = document.createElement(tagname);
  element.innerHTML = content;
  element.setAttribute(attrname1,attrvalue1);
  element.setAttribute(attrname2,attrvalue2);
  element.setAttribute(attrname3,attrvalue3);
  
  return element;
}


function display(res){
  document.getElementById("int-box").value+=res;
}

function allclear(){
  document.getElementById("int-box").value="";
}

function del(){
  var op = document.getElementById("int-box").value;
  document.getElementById("int-box").value = op.slice(0,-1);
}
function equal(){
  var equal = document.getElementById("int-box").value;
  var output = eval(equal);
  document.getElementById("int-box").value = output;
}


var con = createelement("div","class","con container");
var row = createelement("div","class","row");
var col = createelement("div","class","col col-sm-12"); 
var cal = createelement("div","class","cal")
var int = createelement("input","type","text","id","int-box","placeholder","0");
var title = createelement("h1","class","title");
title.innerHTML = "Calculator using DOM"


var button1 = createbutton1("button","id","but-1","AC","onclick","allclear()");
var button2 = createbutton1("button","class","but-2","DEL","onclick","del()");
var button3 = createbutton("button","class","but-3","%");
var button4 = createbutton("button","class","but-4","/");
var button5 = createbutton("button","class","but-5","7");
var button6 = createbutton("button","class","but-6","8");
var button7 = createbutton("button","class","but-7","9");
var button8 = createbutton("button","class","but-8","*");
var button9 = createbutton("button","class","but-9","4");
var button10 = createbutton("button","class","but-10","5");
var button11 = createbutton("button","class","but-11","6");
var button12 = createbutton("button","class","but-12","-");
var button13 = createbutton("button","class","but-13","1");
var button14 = createbutton("button","class","but-14","2");
var button15 = createbutton("button","class","but-15","3");
var button16 = createbutton("button","class","but-16","+");
var button17 = createbutton("button","class","but-17",".");
var button18 = createbutton("button","class","but-18","0");
var button19 = createbutton1("button","class","but-19","=","onclick","equal()");



document.body.append(title);


con.append(row);
row.append(col);
col.append(cal);
cal.append(int);
cal.append(button1);
cal.append(button2);
cal.append(button3);
cal.append(button4);
cal.append(button5);
cal.append(button6);
cal.append(button7);
cal.append(button8);
cal.append(button9);
cal.append(button10);
cal.append(button11);
cal.append(button12);
cal.append(button13);
cal.append(button14);
cal.append(button15);
cal.append(button16);
cal.append(button17);
cal.append(button18);
cal.append(button19);

document.body.append(con);



