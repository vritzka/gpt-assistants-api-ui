(function() {

  var initiated = false;
  
    function getScriptTag() {
      var scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1]; // Last script is the one that loaded this JS file
    }
  
    var scriptTag = getScriptTag();
    
    var assistantId = scriptTag.getAttribute('data-assistant-id');
    var width = scriptTag.getAttribute('data-width') || '300px';
    var height = scriptTag.getAttribute('data-height') || '400px';
    var icon = scriptTag.getAttribute('data-icon') || '💬';
    var position = scriptTag.getAttribute('data-position') || 'bottom-right';
    var backgroundColor = scriptTag.getAttribute('data-background-color') || '#007bff';
  
    var positionStyles = {
      'bottom-right': {
        bottom: '20px',
        right: '20px'
      },
      'bottom-left': {
        bottom: '20px',
        left: '20px'
      },
      'top-right': {
        top: '20px',
        right: '20px'
      },
      'top-left': {
        top: '20px',
        left: '20px'
      }
    };
    var chosenPosition = positionStyles[position] || positionStyles['bottom-right'];
  
    // Create the chat icon
    var chatIcon = document.createElement('div');
    chatIcon.id = 'chat-icon';
    chatIcon.style.position = 'fixed';
    chatIcon.style.width = '60px';
    chatIcon.style.height = '60px';
    chatIcon.style.backgroundColor = backgroundColor;
    chatIcon.style.borderRadius = '50%';
    chatIcon.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    chatIcon.style.cursor = 'pointer';
    chatIcon.style.display = 'flex';
    chatIcon.style.justifyContent = 'center';
    chatIcon.style.alignItems = 'center';
    chatIcon.style.color = 'white';
    chatIcon.style.fontSize = '30px';
    chatIcon.style.zIndex = '1000';
    chatIcon.innerHTML = icon;
  
    // Apply the selected position for the icon
    Object.assign(chatIcon.style, chosenPosition);
    document.body.appendChild(chatIcon);
    
    // Create the chatbot iframe (initially hidden)
    var chatIframe = document.createElement('iframe');
    chatIframe.id = 'chatbot-iframe';
    chatIframe.src = 'https://odd-lake-2494.ploomberapp.io/?id='+assistantId;
    chatIframe.style.position = 'fixed';
    chatIframe.style.width = width;
    chatIframe.style.height = height;
    chatIframe.style.border = 'none';
    chatIframe.style.zIndex = '1000';
    chatIframe.style.display = 'none'; // Initially hidden
  
    function open_assistler() {
      if(initiated) {
        return true;
      }
      initiated = true;
      // Apply the selected position for the iframe (aligns with the icon)
      Object.assign(chatIframe.style, chosenPosition);
      document.body.appendChild(chatIframe);
    };
  
    // Toggle chatbot visibility when the icon is clicked
    chatIcon.addEventListener('click', function() {
      open_assistler()
      if (chatIframe.style.display === 'none') {
        chatIframe.style.display = 'block'; // Show chat window
      } else {
        chatIframe.style.display = 'none'; // Hide chat window
      }
    });
  
  })();  