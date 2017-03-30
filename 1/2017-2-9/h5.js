var Con=function(cng){
  var cng=cng||{};
  var conmment=document.createElement('div');
  conmment.id='page';
  if(cng.text)
  {
    conmment.innerHTML=cng.text
  }
  return conmment;
}