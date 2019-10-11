function sub() {
  let nstr = document.getElementById("inp").value;
  const nlen = document.getElementById("inp3").value;
  let nind = document.getElementById("inp2").value;
  nstr = String(nstr);
  nind = Number(nind);
  nind = nind - 1;
  
  const result = nstr.substr(nind, nlen);

  document.getElementById("result").innerHTML = result;

};