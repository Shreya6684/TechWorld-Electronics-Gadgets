const products = [
  { id: 'phone-1', name: 'iPhone 16 Pro', brand: 'Apple', category: 'Phones', price: 999, rating: 4.9, tag: 'Just landed', color: 'Graphite', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85', description: 'A beautifully capable everyday camera, a brilliant display, and all-day battery life in a refined titanium design.', specs: [['Display', '6.3-inch Super Retina XDR'], ['Storage', '256 GB'], ['Battery', 'Up to 27 hours video'], ['Finish', 'Natural Titanium']] },
  { id: 'phone-2', name: 'Pixel 9 Pro', brand: 'Google', category: 'Phones', price: 899, rating: 4.8, tag: 'Staff favourite', color: 'Porcelain', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85', description: 'A thoughtfully designed phone with a bright display, helpful everyday AI, and a camera that makes every shot count.', specs: [['Display', '6.3-inch Super Actua'], ['Storage', '256 GB'], ['Battery', 'All-day, 24+ hours'], ['Finish', 'Porcelain']] },
  { id: 'computer-1', name: 'MacBook Air 13″', brand: 'Apple', category: 'Computers', price: 1099, rating: 4.9, tag: 'Everyday essential', color: 'Midnight', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85', description: 'Power that travels light. A fanless, beautifully quiet laptop for creative work, study, and everything in between.', specs: [['Display', '13.6-inch Liquid Retina'], ['Memory', '16 GB unified memory'], ['Storage', '512 GB SSD'], ['Battery', 'Up to 18 hours']] },
  { id: 'audio-1', name: 'Studio Wireless Headphones', brand: 'Sony', category: 'Audio', price: 349, rating: 4.7, tag: 'A little escape', color: 'Soft black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85', description: 'Sink into detailed, balanced sound with adaptive noise cancelling and a soft fit made for long listening sessions.', specs: [['Type', 'Over-ear wireless'], ['Battery', 'Up to 30 hours'], ['Connection', 'Bluetooth 5.3'], ['Includes', 'Travel case + USB-C']] },
  { id: 'watch-1', name: 'Apple Watch Series 10', brand: 'Apple', category: 'Wearables', price: 399, rating: 4.8, tag: 'Feel good, move more', color: 'Rose gold', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', description: 'A helpful companion for your day, with meaningful health insights, motivating activity tracking, and a thinner profile.', specs: [['Display', 'Always-On Retina'], ['Water resistant', 'Up to 50 metres'], ['Battery', 'Up to 18 hours'], ['Connectivity', 'GPS + cellular']] },
  { id: 'audio-2', name: 'QuietComfort Earbuds', brand: 'Bose', category: 'Audio', price: 179, rating: 4.6, tag: 'Pocket-sized calm', color: 'Stone', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85', description: 'Small, comfortable earbuds with rich sound and adjustable noise cancellation for a calmer commute or a clearer call.', specs: [['Type', 'True wireless earbuds'], ['Battery', 'Up to 8.5 hours'], ['Water resistant', 'IPX4'], ['Includes', 'Three fit sizes']] },
  { id: 'computer-2', name: 'Surface Laptop 7', brand: 'Microsoft', category: 'Computers', price: 999, rating: 4.6, tag: 'Work, meet flow', color: 'Sapphire', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85', description: 'A polished, responsive laptop that brings your ideas to life with a vibrant touchscreen and a comfortable keyboard.', specs: [['Display', '13.8-inch PixelSense'], ['Memory', '16 GB RAM'], ['Storage', '512 GB SSD'], ['Battery', 'Up to 20 hours']] },
  { id: 'accessory-1', name: 'Everyday Power Bank', brand: 'Anker', category: 'Accessories', price: 59, rating: 4.5, tag: 'Never run on empty', color: 'Cloud white', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85', description: 'A pocket-friendly power boost with fast USB-C charging, ready to keep your phone going through a longer day.', specs: [['Capacity', '10,000 mAh'], ['Output', '30W USB-C'], ['Ports', '1 USB-C + 1 USB-A'], ['Includes', 'USB-C cable']] },
  { id: 'phone-3', name: 'Galaxy S25', brand: 'Samsung', category: 'Phones', price: 799, rating: 4.7, tag: 'A smart choice', color: 'Navy', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85', description: 'A vivid, comfortable-to-hold phone with a versatile camera system and thoughtful tools that make busy days simpler.', specs: [['Display', '6.2-inch Dynamic AMOLED'], ['Storage', '256 GB'], ['Battery', '4,000 mAh'], ['Finish', 'Navy']] },
  { id: 'accessory-2', name: 'MagSafe Charging Stand', brand: 'Belkin', category: 'Accessories', price: 79, rating: 4.4, tag: 'Desk-side favourite', color: 'Silver', image: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?auto=format&fit=crop&w=900&q=85', description: 'A tidy, adjustable charging stand that keeps your phone at a glance and your desk a little less tangled.', specs: [['Charging', 'Up to 15W wireless'], ['Compatibility', 'MagSafe devices'], ['Angle', 'Adjustable portrait + landscape'], ['Finish', 'Silver']] },
  { id: 'watch-2', name: 'Galaxy Watch7', brand: 'Samsung', category: 'Wearables', price: 299, rating: 4.5, tag: 'Your daily rhythm', color: 'Cream', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=85', description: 'A clear look at your movement, sleep, and everyday health, wrapped in a light and comfortable watch.', specs: [['Display', '1.5-inch Super AMOLED'], ['Water resistant', '5 ATM + IP68'], ['Battery', 'Up to 40 hours'], ['Connectivity', 'Bluetooth + GPS']] },
  { id: 'computer-3', name: 'iPad Air 11″', brand: 'Apple', category: 'Computers', price: 599, rating: 4.8, tag: 'Room for ideas', color: 'Blue', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85', description: 'A wonderfully versatile tablet for sketching, streaming, and getting things done, wherever the day takes you.', specs: [['Display', '11-inch Liquid Retina'], ['Storage', '128 GB'], ['Camera', '12 MP wide'], ['Compatibility', 'Apple Pencil Pro']] }
];

const app = document.querySelector('#app');
const USD_TO_INR = 83;
const FREE_DELIVERY_THRESHOLD = 100;
const DELIVERY_FEE = 8;
const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value * USD_TO_INR);
const load = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
let cart = load('techworld-cart', []);
let orders = load('techworld-orders', []);
let wishlist = load('techworld-wishlist', []);
let addresses = load('techworld-addresses', []);
let activeCategory = 'All';
let maxPrice = 1500;
let activeBrands = [];
let ratingOnly = false;
let sortMode = 'featured';
let detailQuantity = 1;
let toastTimer;

function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function notify(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
function updateCartCount() {
  document.querySelector('#cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}
function productCard(product) {
  const saved = wishlist.includes(product.id);
  return `<article class="product-card">
    <a class="product-image" href="#product/${product.id}" aria-label="View ${product.name}"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-tag">${product.tag}</span></a>
    <button class="wishlist-button ${saved ? 'saved' : ''}" data-wish="${product.id}" aria-label="${saved ? 'Remove from' : 'Add to'} wishlist">${saved ? '♥' : '♡'}</button>
    <div class="product-info"><p class="product-brand">${product.brand} · ${product.category}</p><h3><a href="#product/${product.id}">${product.name}</a></h3>
    <div class="product-meta"><span class="product-price">${money(product.price)}</span><span class="product-rating">★ ${product.rating}</span></div>
    <button class="quick-add" data-add="${product.id}">Add to bag +</button></div>
  </article>`;
}
function sectionHeading(kicker, title, linkText, linkHref) {
  return `<div class="section-heading"><div><p class="eyebrow">${kicker}</p><h2>${title}</h2></div><a class="text-link" href="${linkHref}">${linkText} ↗</a></div>`;
}
function renderHome() {
  const featured = [products[0], products[2], products[3], products[4]];
  app.innerHTML = `<section class="home-hero"><div class="hero-copy"><p class="eyebrow">A little something for your everyday</p><h1>Good things<br>are <em>wired</em> in.</h1><p>Useful tech, lovely design, and the little upgrades that make an ordinary day feel a bit more you.</p><a class="button" href="#shop">Find your next favourite <span>↗</span></a></div><div class="hero-visual"><img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1500&q=90" alt="A thoughtful collection of modern everyday electronics"><div class="hero-stamp">GOOD<br>TECH<br>GOOD MOOD</div><div class="hero-note"><strong>Made for real life</strong>Thoughtfully chosen, always.</div></div></section>
    <div class="trust-row"><div class="trust-item"><span class="trust-icon">↗</span>Free delivery over ${money(FREE_DELIVERY_THRESHOLD)}</div><div class="trust-item"><span class="trust-icon">♡</span>30 days to change your mind</div><div class="trust-item"><span class="trust-icon">✳</span>Only the good stuff</div><div class="trust-item"><span class="trust-icon">☻</span>Real humans, here to help</div></div>
    <section class="section">${sectionHeading('A good place to start', 'What are you in the mood for?', 'See everything', '#shop')}<div class="category-tiles">${[
      ['01', 'Phones', 'phone-1'], ['02', 'Computers', 'computer-1'], ['03', 'Audio', 'audio-1'], ['04', 'Wearables', 'watch-1']
    ].map(([index, category, id]) => `<a class="category-tile" href="#shop?category=${category}"><span class="tile-index">${index} / 04</span><img class="tile-image" src="${products.find(p => p.id === id).image}" alt="" loading="lazy"><h3>${category}</h3><span class="tile-arrow">↗</span></a>`).join('')}</div></section>
    <section class="section" style="padding-top:0">${sectionHeading('Good picks, right now', 'A few things we love', 'Shop all things', '#shop')}<div class="product-grid">${featured.map(productCard).join('')}</div></section>
    <section class="deal-band"><div><p class="eyebrow">A small thank-you</p><h2>Your first order, a little sweeter.</h2><p>Take 10% off your first order over ${money(FREE_DELIVERY_THRESHOLD)}. Use code <strong>HELLO10</strong> at checkout.</p></div><div class="deal-circle"><strong>10% off</strong><span>your first order</span></div></section>
    <section class="section">${sectionHeading('Good to know', 'A little more about us', 'Our story', '#about')}<p style="max-width:620px;color:var(--muted);line-height:1.8">We believe the best tech is the kind that just fits. So we hand-pick useful, well-made things that earn their place in your everyday, then make the whole shopping bit feel human.</p></section>`;
}
function renderShop() {
  const query = new URLSearchParams(location.hash.split('?')[1] || '').get('q')?.toLowerCase() || '';
  const matching = products.filter(product => (activeCategory === 'All' || product.category === activeCategory) && (!query || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query)));
  const brands = [...new Set(matching.map(product => product.brand))].sort();
  let visible = matching.filter(product => product.price <= maxPrice && (!activeBrands.length || activeBrands.includes(product.brand)) && (!ratingOnly || product.rating >= 4.5));
  if (sortMode === 'price-low') visible.sort((a, b) => a.price - b.price);
  if (sortMode === 'price-high') visible.sort((a, b) => b.price - a.price);
  if (sortMode === 'rating') visible.sort((a, b) => b.rating - a.rating);
  app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">The good stuff, all in one place</p><h1>${query ? `Results for “${escapeHtml(query)}”` : activeCategory === 'All' ? 'Shop all things' : activeCategory}</h1><p>Useful, lovely, and ready for real life.</p></div></div>
    <div class="catalog-layout"><aside class="filters" aria-label="Filter products"><div class="filter-group"><h3>Category</h3><div class="filter-options">${['All', 'Phones', 'Computers', 'Audio', 'Wearables', 'Accessories'].map(category => `<label><input type="radio" name="category" value="${category}" ${activeCategory === category ? 'checked' : ''}> ${category}</label>`).join('')}</div></div>
    <div class="filter-group"><h3>Brand</h3><div class="filter-options">${brands.map(brand => `<label><input type="checkbox" name="brand" value="${brand}" ${activeBrands.includes(brand) ? 'checked' : ''}> ${brand}</label>`).join('')}</div></div>
    <div class="filter-group"><h3>Price, up to <span id="price-current">${money(maxPrice)}</span></h3><input class="filter-price" id="price-filter" type="range" min="50" max="1500" step="50" value="${maxPrice}" aria-label="Maximum price"><div class="price-labels"><span>${money(50)}</span><span>${money(1500)}</span></div></div>
    <div class="filter-group"><h3>Good reviews</h3><div class="filter-options"><label><input type="checkbox" id="rating-filter" ${ratingOnly ? 'checked' : ''}> 4.5 stars & up</label></div></div></aside>
    <div><div class="catalog-toolbar"><span id="result-count">${visible.length} thoughtful finds</span><label>Sort <select id="sort-products"><option value="featured">Featured</option><option value="price-low" ${sortMode === 'price-low' ? 'selected' : ''}>Price: low to high</option><option value="price-high" ${sortMode === 'price-high' ? 'selected' : ''}>Price: high to low</option><option value="rating" ${sortMode === 'rating' ? 'selected' : ''}>Top rated</option></select></label></div>
    <div class="product-grid catalog-grid">${visible.length ? visible.map(productCard).join('') : `<div class="empty-state" style="grid-column:1/-1"><h2>Nothing in this little corner yet.</h2><p>Try another category or a different search.</p><a class="button button-outline" href="#shop">See all things</a></div>`}</div></div></div></div>`;
  document.querySelectorAll('input[name="category"]').forEach(input => input.addEventListener('change', () => { activeCategory = input.value; activeBrands = []; renderShop(); }));
  document.querySelectorAll('input[name="brand"]').forEach(input => input.addEventListener('change', () => { activeBrands = [...document.querySelectorAll('input[name="brand"]:checked')].map(brand => brand.value); renderShop(); }));
  document.querySelector('#price-filter').addEventListener('input', event => { maxPrice = Number(event.target.value); document.querySelector('#price-current').textContent = money(maxPrice); const filtered = matching.filter(product => product.price <= maxPrice && (!activeBrands.length || activeBrands.includes(product.brand)) && (!ratingOnly || product.rating >= 4.5)); if (sortMode === 'price-low') filtered.sort((a, b) => a.price - b.price); if (sortMode === 'price-high') filtered.sort((a, b) => b.price - a.price); if (sortMode === 'rating') filtered.sort((a, b) => b.rating - a.rating); const grid = document.querySelector('.catalog-grid'); grid.innerHTML = filtered.length ? filtered.map(productCard).join('') : `<div class="empty-state" style="grid-column:1/-1"><h2>No finds at that price.</h2><p>Try nudging the slider up a little.</p></div>`; document.querySelector('#result-count').textContent = `${filtered.length} thoughtful finds`; bindWishlistButtons(); });
  document.querySelector('#sort-products').addEventListener('change', event => { sortMode = event.target.value; renderShop(); });
  document.querySelector('#rating-filter').addEventListener('change', event => { ratingOnly = event.target.checked; renderShop(); });
}
function renderProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return renderNotFound();
  detailQuantity = 1;
  app.innerHTML = `<div class="page-wrap"><p class="eyebrow"><a href="#shop">All things</a> / ${product.category}</p><div class="product-detail"><div class="detail-image"><img src="${product.image}" alt="${product.name}"></div><div class="detail-copy"><p class="eyebrow">${product.brand} · ${product.color}</p><h1>${product.name}</h1><span class="detail-rating">★ ${product.rating} <span style="color:var(--muted)">· Thoughtfully reviewed</span></span><div class="detail-price">${money(product.price)}</div><p>${product.description}</p><div class="stock">● In stock, ready to make your day</div><div class="detail-actions"><div class="quantity-control"><button data-detail-qty="-1" aria-label="Decrease quantity">−</button><span id="detail-quantity">1</span><button data-detail-qty="1" aria-label="Increase quantity">+</button></div><button class="button" data-add="${product.id}" id="detail-add">Add to bag <span>↗</span></button><button class="wishlist-button ${wishlist.includes(product.id) ? 'saved' : ''}" data-wish="${product.id}" aria-label="Save to wishlist">${wishlist.includes(product.id) ? '♥' : '♡'}</button></div><div class="spec-list">${product.specs.map(([key, value]) => `<div class="spec-row"><span>${key}</span><strong>${value}</strong></div>`).join('')}</div></div></div></div>`;
}
function subtotal() { return cart.reduce((sum, item) => sum + (products.find(p => p.id === item.id)?.price || 0) * item.quantity, 0); }
function summaryBox() {
  const total = subtotal();
  return `<aside class="summary-box"><h2>A little summary</h2><div class="summary-line"><span>Subtotal</span><strong>${money(total)}</strong></div><div class="summary-line muted"><span>Delivery</span><span>${total >= FREE_DELIVERY_THRESHOLD ? 'On us' : total ? money(DELIVERY_FEE) : money(0)}</span></div>${total > 0 && total < FREE_DELIVERY_THRESHOLD ? `<p class="summary-note">Add ${money(FREE_DELIVERY_THRESHOLD - total)} more for complimentary delivery.</p>` : ''}<div class="summary-line summary-total"><span>Total</span><strong>${money(total + (total > 0 && total < FREE_DELIVERY_THRESHOLD ? DELIVERY_FEE : 0))}</strong></div><a class="button" href="${total ? '#checkout' : '#shop'}">${total ? 'On to checkout' : 'Find something lovely'} <span>↗</span></a><p class="summary-note">Easy returns within 30 days.</p></aside>`;
}
function renderCart() {
  if (!cart.length) { app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">Your little corner</p><h1>Your bag</h1></div></div><div class="empty-state"><h2>Nothing in here just yet.</h2><p>There's plenty of good stuff to find.</p><a class="button" href="#shop">Have a little look <span>↗</span></a></div></div>`; return; }
  app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">Your little corner</p><h1>Your bag <span style="color:var(--muted);font-size:20px">(${cart.reduce((sum, item) => sum + item.quantity, 0)})</span></h1></div><a class="text-link" href="#shop">Keep looking ↗</a></div><div class="cart-layout"><div>${cart.map(item => { const product = products.find(p => p.id === item.id); return `<article class="cart-item"><a href="#product/${product.id}"><img src="${product.image}" alt="${product.name}"></a><div><h3><a href="#product/${product.id}">${product.name}</a></h3><p>${product.color} · ${money(product.price)}</p><div class="quantity-control"><button data-quantity="${product.id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-quantity="${product.id}" data-delta="1" aria-label="Increase quantity">+</button></div><button class="remove-item" data-remove="${product.id}">Remove</button></div><span class="cart-item-price">${money(product.price * item.quantity)}</span></article>`; }).join('')}</div>${summaryBox()}</div></div>`;
}
function renderCheckout() {
  if (!cart.length) return renderCart();
  app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">Almost yours</p><h1>Let's get it to you.</h1></div></div><div class="checkout-layout"><form class="checkout-form" id="checkout-form"><section class="form-panel"><h2>Where should we send it?</h2><div class="form-grid"><div class="field"><label for="first-name">First name</label><input id="first-name" name="firstName" autocomplete="given-name" required></div><div class="field"><label for="last-name">Last name</label><input id="last-name" name="lastName" autocomplete="family-name" required></div><div class="field field-full"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field field-full"><label for="address">Street address</label><input id="address" name="address" autocomplete="street-address" required></div><div class="field"><label for="city">City</label><input id="city" name="city" autocomplete="address-level2" required></div><div class="field"><label for="zip">Postal code</label><input id="zip" name="zip" autocomplete="postal-code" required></div><div class="field field-full"><label for="country">Country</label><select id="country" name="country" autocomplete="country-name" required><option value="">Choose a country</option><option>United States</option><option>India</option><option>United Kingdom</option><option>Canada</option><option>Australia</option></select></div></div></section><section class="form-panel" style="margin-top:16px"><h2>How would you like to pay?</h2><div class="payment-options"><label class="payment-option"><input type="radio" name="payment" value="card" checked> Credit or debit card <span style="margin-left:auto;color:var(--muted)">VISA · MC</span></label><label class="payment-option"><input type="radio" name="payment" value="wallet"> PayPal</label><label class="payment-option"><input type="radio" name="payment" value="delivery"> Pay on delivery</label></div><p style="margin:0;color:var(--muted);font-size:10px">Demo checkout: no payment details are collected.</p></section><button class="button" type="submit">Place my order <span>↗</span></button></form>${summaryBox()}</div></div>`;
  document.querySelector('#checkout-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const address = { name: `${data.get('firstName')} ${data.get('lastName')}`, street: data.get('address'), city: data.get('city'), postalCode: data.get('zip'), country: data.get('country') };
    if (!addresses.some(saved => saved.street === address.street && saved.postalCode === address.postalCode)) addresses.unshift(address);
    save('techworld-addresses', addresses);
    const order = { number: `TW-${Date.now().toString().slice(-7)}`, name: address.name, date: new Date().toLocaleDateString(), total: subtotal() + (subtotal() > 0 && subtotal() < FREE_DELIVERY_THRESHOLD ? DELIVERY_FEE : 0), items: cart.map(item => ({ ...item })) };
    orders.unshift(order); save('techworld-orders', orders); cart = []; save('techworld-cart', cart); updateCartCount();
    app.innerHTML = `<div class="page-wrap"><div class="success-state"><div class="success-mark">✓</div><p class="eyebrow">That's the good stuff</p><h2>Order placed. Lovely choice.</h2><p>Your order <strong>${order.number}</strong> is on its way to being ready.</p><p style="margin-bottom:22px">A confirmation would be sent to ${escapeHtml(data.get('email'))} in a real shop.</p><a class="button" href="#shop">Back to browsing <span>↗</span></a></div></div>`;
  });
}
function renderAccount() {
  const user = load('techworld-user', null);
  if (!user) { app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">Your own little corner</p><h1>Welcome back.</h1><p>Sign in, or make yourself at home.</p></div></div><div class="account-layout"><nav class="account-menu"><a class="active" href="#account">Sign in</a><a href="#register">Create account</a></nav><form class="form-panel" id="login-form"><h2>Good to see you again</h2><div class="form-grid"><div class="field field-full"><label for="login-email">Email address</label><input id="login-email" type="email" name="email" autocomplete="email" required></div><div class="field field-full"><label for="login-password">Password</label><input id="login-password" type="password" name="password" autocomplete="current-password" required minlength="4"></div></div><button class="button" style="margin-top:18px">Sign in <span>↗</span></button><p style="font-size:10px;color:var(--muted)">A demo account is created right here. No backend required.</p></form></div></div>`;
    document.querySelector('#login-form').addEventListener('submit', event => { event.preventDefault(); const email = new FormData(event.currentTarget).get('email'); save('techworld-user', { email, name: email.split('@')[0] }); renderAccount(); notify('You are signed in. Welcome back!'); });
    return;
  }
  app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">Your own little corner</p><h1>Hello, ${escapeHtml(user.name)}.</h1><p>All your good things, together.</p></div><button class="button button-outline button-small" id="sign-out">Sign out</button></div><div class="account-layout"><nav class="account-menu"><a class="active" href="#account">Your details</a><a href="#account?view=orders">Order history</a><a href="#account?view=wishlist">Saved things (${wishlist.length})</a><a href="#account?view=addresses">Addresses</a></nav><section class="account-panel" id="account-panel">${accountPanel(user)}</section></div></div>`;
  document.querySelector('#sign-out').addEventListener('click', () => { localStorage.removeItem('techworld-user'); renderAccount(); notify('You have signed out. See you soon!'); });
  document.querySelectorAll('.account-menu a').forEach(link => link.addEventListener('click', event => { event.preventDefault(); document.querySelectorAll('.account-menu a').forEach(item => item.classList.remove('active')); link.classList.add('active'); const view = new URLSearchParams(link.href.split('?')[1] || '').get('view') || 'profile'; document.querySelector('#account-panel').innerHTML = accountPanel(user, view); bindWishlistButtons(); }));
  if (new URLSearchParams(location.hash.split('?')[1] || '').get('view')) { const view = new URLSearchParams(location.hash.split('?')[1]).get('view'); const link = [...document.querySelectorAll('.account-menu a')].find(item => item.href.includes(`view=${view}`)); if (link) link.click(); }
}
function accountPanel(user, view = 'profile') {
  if (view === 'orders') return `<h2>Your orders</h2>${orders.length ? orders.map(order => `<div class="order-row"><span><strong>${order.number}</strong><br><span style="color:var(--muted)">${order.date} · ${order.items.reduce((n, item) => n + item.quantity, 0)} items</span></span><strong>${money(order.total)}</strong></div>`).join('') : '<p style="color:var(--muted);font-size:12px">No orders just yet. Your first one could be a good one.</p>'}`;
  if (view === 'wishlist') { const saved = products.filter(product => wishlist.includes(product.id)); return `<h2>Your saved things</h2>${saved.length ? `<div class="product-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">${saved.map(productCard).join('')}</div>` : '<p style="color:var(--muted);font-size:12px">Tap the little heart on anything you like, and it will be waiting here.</p>'}`; }
  if (view === 'addresses') return `<h2>Saved addresses</h2>${addresses.length ? addresses.map(address => `<div class="order-row"><span><strong>${escapeHtml(address.name)}</strong><br>${escapeHtml(address.street)}<br>${escapeHtml(address.city)}, ${escapeHtml(address.postalCode)}<br>${escapeHtml(address.country)}</span></div>`).join('') : '<p style="color:var(--muted);font-size:12px">No saved addresses yet. Your address will be ready to save after your first order.</p>'}`;
  return `<h2>Your details</h2><div class="order-row"><span>Name</span><strong>${escapeHtml(user.name)}</strong></div><div class="order-row"><span>Email</span><strong>${escapeHtml(user.email)}</strong></div><p style="margin-top:22px;color:var(--muted);font-size:11px">Your details stay in this browser, just for this demo.</p>`;
}
function renderRegister() {
  app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">Make yourself at home</p><h1>Let's make it yours.</h1></div></div><div style="max-width:590px" class="form-panel"><form id="register-form"><div class="form-grid"><div class="field field-full"><label for="register-name">Your name</label><input id="register-name" name="name" autocomplete="name" required></div><div class="field field-full"><label for="register-email">Email address</label><input id="register-email" type="email" name="email" autocomplete="email" required></div><div class="field field-full"><label for="register-password">Choose a password</label><input id="register-password" type="password" name="password" autocomplete="new-password" required minlength="4"></div></div><button class="button" style="margin-top:18px">Create my account <span>↗</span></button><p style="font-size:10px;color:var(--muted)">This demo stores a simple account in your browser only.</p></form></div></div>`;
  document.querySelector('#register-form').addEventListener('submit', event => { event.preventDefault(); const data = new FormData(event.currentTarget); save('techworld-user', { name: data.get('name'), email: data.get('email') }); location.hash = '#account'; notify('Account ready. Welcome to TechWorld!'); });
}
function renderAbout() {
  app.innerHTML = `<section class="about-hero"><p class="eyebrow">A small shop with a big soft spot for good design</p><h1>Tech should feel like <em>you.</em></h1><p>Useful, thoughtful, a little delightful. That's what we think good technology can be.</p></section><section class="about-content"><h2>Less scrolling.<br>More choosing well.</h2><p>TechWorld started with a simple thought: shopping for electronics shouldn't feel like decoding a spec sheet. We gather useful, well-made tech in one friendly place, so the things you bring home are things you actually love using.<br><br>From the pocket-sized to the desk-sized, every pick is here because it does something a little better. No noise. No endless options. Just good things, chosen with care.</p></section><section class="trust-row"><div class="trust-item"><span class="trust-icon">✳</span>Thoughtful by design</div><div class="trust-item"><span class="trust-icon">♡</span>Picked by real people</div><div class="trust-item"><span class="trust-icon">↻</span>Easy 30-day returns</div><div class="trust-item"><span class="trust-icon">☻</span>Here when you need us</div></section>`;
}
function renderContact() {
  app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">Real humans, right here</p><h1>Say hello.</h1><p>Questions, thoughts, or just want to tell us what you think? We're listening.</p></div></div><div class="contact-layout"><section class="contact-info"><h2>We're all ears.</h2><p>Our little team is around Monday to Friday, 9 to 5. We try to get back to everyone within one working day.</p><div class="contact-detail"><span>EMAIL</span><strong>hello@techworld.example</strong></div><div class="contact-detail"><span>PHONE</span><strong>+1 (800) 555-0146</strong></div><div class="contact-detail"><span>OUR LITTLE HQ</span><strong>San Francisco, CA<br>United States</strong></div></section><form class="form-panel" id="contact-form"><h2>Drop us a note</h2><div class="form-grid"><div class="field"><label for="contact-name">Your name</label><input id="contact-name" name="name" required></div><div class="field"><label for="contact-email">Email address</label><input id="contact-email" type="email" name="email" required></div><div class="field field-full"><label for="contact-subject">What's it about?</label><select id="contact-subject" name="subject"><option>Just saying hello</option><option>Something about an order</option><option>A product question</option><option>Something else</option></select></div><div class="field field-full"><label for="contact-message">Your message</label><textarea id="contact-message" name="message" required></textarea></div></div><button class="button" style="margin-top:17px">Send your note <span>↗</span></button></form></div></div>`;
  document.querySelector('#contact-form').addEventListener('submit', event => { event.preventDefault(); app.innerHTML = `<div class="page-wrap"><div class="success-state"><div class="success-mark">✓</div><h2>Your note is with us.</h2><p>Thanks for reaching out. We'll be in touch within one working day.</p><a class="button" href="#home">Back to TechWorld <span>↗</span></a></div></div>`; });
}
function renderNotFound() { app.innerHTML = `<div class="page-wrap"><div class="empty-state"><h2>We couldn't find that one.</h2><p>It may have wandered off. Let's get you back to the good stuff.</p><a class="button" href="#shop">Shop all things <span>↗</span></a></div></div>`; }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function bindWishlistButtons() {
  document.querySelectorAll('[data-wish]').forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.wish;
    wishlist = wishlist.includes(id) ? wishlist.filter(item => item !== id) : [...wishlist, id];
    save('techworld-wishlist', wishlist);
    const isSaved = wishlist.includes(id);
    button.classList.toggle('saved', isSaved);
    button.textContent = isSaved ? '♥' : '♡';
    button.setAttribute('aria-label', `${isSaved ? 'Remove from' : 'Add to'} wishlist`);
    if (location.hash.includes('view=wishlist')) renderAccount();
    else notify(isSaved ? 'Saved for later. Good choice.' : 'Removed from your saved things.');
  }));
}
function render() {
  const route = location.hash.slice(1) || 'home';
  const [path, query] = route.split('?');
  if (path === 'shop') { const category = new URLSearchParams(query || '').get('category'); if (category) activeCategory = category; renderShop(); }
  else if (path.startsWith('product/')) renderProduct(path.split('/')[1]);
  else if (path === 'cart') renderCart();
  else if (path === 'checkout') renderCheckout();
  else if (path === 'account') renderAccount();
  else if (path === 'register') renderRegister();
  else if (path === 'about') renderAbout();
  else if (path === 'contact') renderContact();
  else if (path === 'home') renderHome();
  else renderNotFound();
  document.querySelectorAll('.category-nav a').forEach(link => link.classList.toggle('active', route.startsWith(link.getAttribute('href').slice(1))));
  document.querySelector('#category-nav').classList.remove('open');
  document.querySelector('#menu-toggle').setAttribute('aria-expanded', 'false');
  document.querySelector('#menu-toggle').setAttribute('aria-label', 'Open navigation');
  updateCartCount();
  bindWishlistButtons();
}
document.addEventListener('click', event => {
  const add = event.target.closest('[data-add]');
  if (add) {
    const id = add.dataset.add;
    const quantity = add.id === 'detail-add' ? detailQuantity : 1;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += quantity; else cart.push({ id, quantity });
    save('techworld-cart', cart); updateCartCount(); notify(`${products.find(product => product.id === id).name} added to your bag.`);
  }
  const quantityButton = event.target.closest('[data-quantity]');
  if (quantityButton) {
    const item = cart.find(entry => entry.id === quantityButton.dataset.quantity);
    item.quantity += Number(quantityButton.dataset.delta);
    if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== item.id);
    save('techworld-cart', cart); renderCart(); updateCartCount();
  }
  const remove = event.target.closest('[data-remove]');
  if (remove) { cart = cart.filter(item => item.id !== remove.dataset.remove); save('techworld-cart', cart); renderCart(); updateCartCount(); }
  const detailQty = event.target.closest('[data-detail-qty]');
  if (detailQty) { detailQuantity = Math.max(1, detailQuantity + Number(detailQty.dataset.detailQty)); document.querySelector('#detail-quantity').textContent = detailQuantity; }
});
document.querySelector('#search-form').addEventListener('submit', event => { event.preventDefault(); const query = document.querySelector('#site-search').value.trim(); if (query) { activeCategory = 'All'; location.hash = `#shop?q=${encodeURIComponent(query)}`; } });
document.querySelector('#menu-toggle').addEventListener('click', event => { const nav = document.querySelector('#category-nav'); const open = nav.classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', String(open)); event.currentTarget.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
document.querySelector('#newsletter-form').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.innerHTML = '<span style="padding:10px 0;color:var(--lime);font-size:11px">You are on the list. Nice to have you.</span>'; });
window.addEventListener('hashchange', render);
render();