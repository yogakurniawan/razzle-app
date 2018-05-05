const theme = {
  main: 'mediumseagreen',
  white: '#fff',
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  fontSizeBase: '1rem',
  inputColor: '#495057',
  inputBorderRadius: '.25rem',
  inputBorderColor: '#ced4da',
  inputPlaceholderColor: '#6c757d',
  inputDisabledBg: '#e9ecef',
  inputFocusColor: '#495057',
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
};

export default theme;