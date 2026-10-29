let cart = JSON.parse(localStorage.getItem('dreamyCart')) || [];

function updateCartCount() {
  const count = cart.reduce((t, i) => t + i.qty, 0);
  const el = document.querySelector('.cart-count');
  if (el) el.textContent = count;
}
updateCartCount();

// Size button select
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('size-btn')) {
    const group = e.target.parentElement;
    group.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    e.target.classList.add('selected');
  }
});

// Add to cart
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart-btn')) {
    const card = e.target.closest('.product-card');
    const name = card.querySelector('h3').textContent;
    const price = parseFloat(card.querySelector('.price').textContent.replace('R',''));
    const selectedSize = card.querySelector('.size-btn.selected');

    if (!selectedSize) {
      alert('Please pick a size first! 💖');
      return;
    }

    const size = selectedSize.dataset.size;
    const existing = cart.find(i => i.name === name && i.size === size);
    
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, size, qty: 1 });
    }

    localStorage.setItem('dreamyCart', JSON.stringify(cart));
    updateCartCount();
    
    e.target.textContent = 'Added! ✓';
    setTimeout(() => e.target.textContent = 'Add to Cart', 1000);
  }
});