var x=1;
var bookN=0;
var list=["https://resources.pearsonactivelearn.com/r00/r0066/r006623/r00662374/current/OPS/images/Pure_Maths_1-","https://resources.pearsonactivelearn.com/r00/r0068/r006800/r00680025/current/OPS/images/692597-","https://resources.pearsonactivelearn.com/r00/r0067/r006740/r00674039/current/OPS/images/stats_and_mech_1_combined-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703733/current/OPS/images/New_SM2-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703734/current/OPS/images/CP1-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703741/current/OPS/images/combinepdf-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703738/current/OPS/images/pdfjoiner_(4)-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703742/current/OPS/images/Futher-Pure-2-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703737/current/OPS/images/FS1-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703739/current/OPS/images/Further_Statistics-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703736/current/OPS/images/FM1-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703740/current/OPS/images/FurtherMechanics2-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703735/current/OPS/images/DM1-","https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703743/current/OPS/images/Decision_2_Updated-"];
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function update(){
  x2=x+1
  if (parseInt(x)<10){
      x='00'+ String(x);
  }
  else if (parseInt(x)<100){
    x='0'+ String(x);
  }
  if (parseInt(x2)<10){
    x2='00'+ String(x2);
  }
  else if (parseInt(x2)<100){
    x2='0'+ String(x2);
  }
  var str1=list[bookN];
  //var str1="https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703735/current/OPS/images/DM1-";
  //var str2=String(x);
  var str3=".jpg";
  var str4=str1+x+str3;
  var str5=str1+x2+str3;
  console.log(x);
  console.log(x2);
  document.getElementById("myImage").src=str4;
  document.getElementById("myImage2").src=str5;
  var element = document.getElementById("info");
  element.innerHTML ="ActualPageNumber:"+String(parseInt(x));
}
function forward(){
  x=parseInt(x)+2;
  update();
}
function backward(){
  x=parseInt(x)-2;
  update();
}
function gotopage(){
  x=prompt("Input page number");
  update();
}
function LoadBook(){
  bookN=prompt("Input Book Number (Can be found by clicking i)")-1;
  x=1
  update();
}
function info(){
  alert("1. Pure Maths 1\n2. Pure Maths 2\n3. Stats and Mech 1 \n4. Stats and Mech 2\n5. FM Core 1\n6. FM Core 2\n7. FM FP1\n8. FM FP2\n9. FM FS1\n10. FM FS2\n11. FM FM1\n12. FM FM2\n13. FM D1\n14. FM D2")
}
