function open_assistler() {
  var iframe = document.createElement('iframe');

iframe.id = 'assistler';
  iframe.src = 'https://odd-lake-2494.ploomberapp.io?id=1726065729463x528776691073941500';
  iframe.style.width = '400px';
  iframe.style.height = '500px';
  iframe.style.border = 'none';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '20px';
  iframe.style.right = '20px';
  iframe.style.zIndex = '1000';

  document.body.appendChild(iframe);
};
(function() {
var button = document.createElement('button');
button.innerHTML = 'Chat';
button.onclick = function()
{
    open_assistler();
}
document.body.appendChild(button);
})()