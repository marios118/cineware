window.onload = function() {
    if (window.location.hostname !== 'cineware.xyz') {
      document.body.innerHTML = '<h1>Access Denied</h1><p>This website can only be accessed on cineware.xyz.</p>';
    }
  };
  