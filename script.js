// Qui puoi aggiungere altri effetti o interazioni in futuro

// Per esempio, potresti aggiungere un'animazione al passaggio del mouse sulle immagini (già gestita da CSS)
document.querySelectorAll('.prodotto img').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transition = 'transform 0.3s ease'; // Assicura un effetto fluido
    });
  });
  