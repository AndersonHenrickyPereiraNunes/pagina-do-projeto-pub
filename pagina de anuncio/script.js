const input = document.querySelector('input[type="text"]');
const placeholder = input.placeholder;

input.addEventListener('focus', () => {
  input.style.paddingTop = '0';
  input.placeholder = ''; // Remove o placeholder visualmente
  // Adicione uma classe CSS para estilizar o texto sem placeholder
});

input.addEventListener('blur', () => {
  input.style.paddingTop = '10px'; // Restaura o padding
  input.placeholder = placeholder; // Restaura o placeholder
});
