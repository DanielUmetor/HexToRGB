function convertToRGB() {
    let hex = document.getElementById('hex').value;
    let rgb = hexToRgb(hex);
  
    if (rgb) {
      const { r, g, b } = rgb;
      document.getElementById('rgbValue').innerText = `RGB: (${r}, ${g}, ${b})`;
    } else {
      document.getElementById('rgbValue').innerText = 'Invalid hex value!';
    }
  }
  
  function hexToRgb(hex) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
  
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    }
    return null;
  }
  