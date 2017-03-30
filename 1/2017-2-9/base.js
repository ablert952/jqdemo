var H5ComponentBase=function(name,neg)
{
  var neg=neg||{};
  var id=('h5_C'+Math.random()).replace('.','_');
  var component=$('<div id="'+id+'"></div>');
  return component;
}