const theme = {
  main: 'mediumseagreen',
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  fontSizeBase: '1rem',
  inputLineHeight: '1.5',
  inputColor: '#495057',
  inputBg: '#fff',
  inputBorderWidth: '1px',
  inputBorderRadius: '.25rem',
  inputBoxShadow: 'inset 0 1px 1px rgba(0,0,0,0.075)',
  inputBorderColor: '#ced4da',
  inputTransition: 'borderColor .15s ease-in-out,boxShadow .15s ease-in-out',
  inputPlaceholderColor: '#6c757d',
  inputDisabledBg: '#e9ecef',
  inputFocusColor: '#495057',
  inputFocusBg: '#fff',
  inputFocusBorderColor: 'mediumseagreen',
  inputFocusBoxShadow: '0 0 0 0.2rem rgba(60, 179, 113, 0.25)',
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