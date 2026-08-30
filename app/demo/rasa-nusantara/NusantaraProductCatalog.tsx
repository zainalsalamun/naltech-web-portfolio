'use client';

import { useState } from 'react';
import {
  ShoppingBag,
  Flame,
  Sparkles,
  Package,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  Plus,
  Minus,
  Trash2,
  Truck,
  ShieldCheck,
  Tag,
  Star,
} from 'lucide-react';

interface ProductItem {
  id: string;
  category: 'camilan' | 'sambal' | 'lauk' | 'hampers';
  name: string;
  price: number;
  weightGrams: number;
  variants: string[];
  spicyLevel?: number; // 0 to 3
  shelfLife: string;
  image: string;
  badge?: string;
  desc: string;
}

const productDatabase: ProductItem[] = [
  {
    id: 'prod_singkong',
    category: 'camilan',
    name: 'Keripik Singkong Balado Renyah',
    price: 18000,
    weightGrams: 200,
    variants: ['Balado Pedas Manis', 'Original Gurih Daun Jeruk', 'Super Pedas Jerit'],
    shelfLife: '6 Bulan',
    image: '/food-local/product-chips.jpg',
    badge: 'Terlaris',
    desc: 'Irisan singkong tipis renyah berbalut bumbu balado cabai asli tanpa pewarna buatan.',
  },
  {
    id: 'prod_pisang',
    category: 'camilan',
    name: 'Keripik Pisang Cokelat Lumer',
    price: 22000,
    weightGrams: 180,
    variants: ['Cokelat Tebal Lumer', 'Keju Gurih Manis', 'Caramel Butter'],
    shelfLife: '6 Bulan',
    image: '/food-local/product-chips.jpg',
    desc: 'Keripik pisang kepok pilihan dengan taburan cokelat premium yang lumer di mulut.',
  },
  {
    id: 'prod_sambal_teri',
    category: 'sambal',
    name: 'Sambal Teri Pedas Nusantara',
    price: 35000,
    weightGrams: 150,
    variants: ['Pedas Mantap', 'Ekstra Pedas Nampol'],
    spicyLevel: 3,
    shelfLife: '8 Bulan (Vakum)',
    image: '/food-local/product-sambal.jpg',
    badge: 'Favorit Pembeli',
    desc: 'Perpaduan cabai rawit merah segar dan teri nasi gurih digoreng garing renyah.',
  },
  {
    id: 'prod_sambal_cumi',
    category: 'sambal',
    name: 'Sambal Bawang Cumi Asin Gurih',
    price: 38000,
    weightGrams: 150,
    variants: ['Cumi Asin Original', 'Cumi Petai Pedas'],
    spicyLevel: 2,
    shelfLife: '8 Bulan (Vakum)',
    image: '/food-local/product-sambal.jpg',
    desc: 'Potongan cumi asin kenyal berlimpah dalam baluran sambal bawang merah wangi.',
  },
  {
    id: 'prod_abon',
    category: 'lauk',
    name: 'Abon Sapi Gurih Rempah Warisan',
    price: 55000,
    weightGrams: 150,
    variants: ['Original Manis Gurih', 'Pedas Rempah'],
    shelfLife: '12 Bulan',
    image: '/food-local/product-rendang.jpg',
    desc: 'Serat daging sapi asli 100% dimasak dengan santan kelapa kental dan rempah tradisional.',
  },
  {
    id: 'prod_rendang',
    category: 'lauk',
    name: 'Rendang Sapi Suwir Kemasan Vakum',
    price: 75000,
    weightGrams: 250,
    variants: ['Rendang Suwir Kering', 'Rendang Potong Basah'],
    spicyLevel: 1,
    shelfLife: '10 Bulan',
    image: '/food-local/product-rendang.jpg',
    badge: 'Siap Saji',
    desc: 'Rendang khas Minang beraroma pekat, praktis tinggal dipanaskan 2 menit atau siap santap.',
  },
  {
    id: 'prod_paket_oleh',
    category: 'hampers',
    name: 'Paket Oleh-Oleh Nusantara 5 Rasa',
    price: 200000,
    weightGrams: 1000,
    variants: ['Kombinasi Camilan & Sambal', 'Serba Sambal & Lauk'],
    shelfLife: '6-8 Bulan',
    image: '/food-local/product-hampers.jpg',
    badge: 'Hemat Rp35.000',
    desc: 'Paket lengkap 5 produk favorit dalam box jinjing eksklusif, cocok untuk buah tangan keluarga.',
  },
  {
    id: 'prod_hampers_gift',
    category: 'hampers',
    name: 'Hampers Nusantara Premium Gift Box',
    price: 250000,
    weightGrams: 1200,
    variants: ['Hardbox Merah Bata + Pita', 'Hardbox Emas + Kartu Ucapan'],
    shelfLife: '6-8 Bulan',
    image: '/food-local/product-hampers.jpg',
    desc: 'Kemasan hadiah mewah berisi 6 aneka camilan, sambal toples, kartu ucapan custom, & tas belanja kain.',
  },
];

interface CartItem {
  id: string;
  productId: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  weightGrams: number;
}

export default function NusantaraProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVariants, setSelectedVariants] = useState<{ [productId: string]: string }>({
    prod_singkong: 'Balado Pedas Manis',
    prod_pisang: 'Cokelat Tebal Lumer',
    prod_sambal_teri: 'Pedas Mantap',
    prod_sambal_cumi: 'Cumi Asin Original',
    prod_abon: 'Original Manis Gurih',
    prod_rendang: 'Rendang Suwir Kering',
    prod_paket_oleh: 'Kombinasi Camilan & Sambal',
    prod_hampers_gift: 'Hardbox Merah Bata + Pita',
  });
  const [itemQuantities, setItemQuantities] = useState<{ [productId: string]: number }>({});
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart_1',
      productId: 'prod_singkong',
      name: 'Keripik Singkong Balado Renyah',
      variant: 'Balado Pedas Manis',
      price: 18000,
      qty: 2,
      weightGrams: 200,
    },
    {
      id: 'cart_2',
      productId: 'prod_sambal_teri',
      name: 'Sambal Teri Pedas Nusantara',
      variant: 'Pedas Mantap',
      price: 35000,
      qty: 1,
      weightGrams: 150,
    },
  ]);

  // Customer info for checkout
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerAddress, setCustomerAddress] = useState<string>('Jl. Kemang Raya No. 12, Jakarta Selatan');
  const [selectedCourier, setSelectedCourier] = useState<string>('J&T Express / SiCepat (Reguler)');

  const filteredProducts = activeCategory === 'all'
    ? productDatabase
    : productDatabase.filter((p) => p.category === activeCategory);

  const handleVariantChange = (productId: string, variant: string) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variant }));
  };

  const handleQtyChange = (productId: string, delta: number) => {
    const current = itemQuantities[productId] || 1;
    const next = Math.max(1, current + delta);
    setItemQuantities((prev) => ({ ...prev, [productId]: next }));
  };

  const addToCart = (product: ProductItem) => {
    const variant = selectedVariants[product.id] || product.variants[0];
    const qty = itemQuantities[product.id] || 1;
    const cartItemId = `${product.id}_${variant}`;

    const existingIndex = cart.findIndex((c) => c.id === cartItemId);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].qty += qty;
      setCart(updated);
    } else {
      setCart([
        ...cart,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          variant,
          price: product.price,
          qty,
          weightGrams: product.weightGrams,
        },
      ]);
    }
  };

  const updateCartQty = (cartItemId: string, delta: number) => {
    const updated = cart
      .map((item) => {
        if (item.id === cartItemId) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      })
      .filter(Boolean) as CartItem[];
    setCart(updated);
  };

  const removeCartItem = (cartItemId: string) => {
    setCart(cart.filter((item) => item.id !== cartItemId));
  };

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const totalCartPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCartWeightKg = (cart.reduce((sum, item) => sum + item.weightGrams * item.qty, 0) / 1000).toFixed(2);
  const totalCartItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const generateWhatsAppOrderUrl = () => {
    const orderCode = `RNS-${Math.floor(1000 + Math.random() * 9000)}`;
    const itemsList = cart
      .map((item, idx) => `${idx + 1}. ${item.name} (${item.variant}) x ${item.qty} pcs = ${formatRupiah(item.price * item.qty)}`)
      .join('\n');
    const name = customerName.trim() || 'Pelanggan Rasa Nusantara';

    const message = `Halo Rasa Nusantara! Saya ingin memesan produk kuliner lokal:
- No. Pesanan: #${orderCode}
- Nama Pemesan: ${name}
- No. WhatsApp: ${customerPhone || '-'}
- Alamat Kirim: ${customerAddress}
- Pilihan Ekspedisi: ${selectedCourier}

Daftar Belanja:
${itemsList || '- (Belum ada produk dipilih)'}

Total Barang: ${totalCartItemsCount} pcs
Estimasi Berat Total: ${totalCartWeightKg} kg
Subtotal Produk: ${formatRupiah(totalCartPrice)}

Mohon info total ongkos kirim dan nomor rekening pembayaran ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="rns-catalog-container">
      {/* Category Tabs */}
      <div className="rns-category-tabs">
        <button
          type="button"
          className={`rns-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          <span>Semua Produk</span>
        </button>
        <button
          type="button"
          className={`rns-tab-btn ${activeCategory === 'camilan' ? 'active' : ''}`}
          onClick={() => setActiveCategory('camilan')}
        >
          <span>Camilan Gurih &amp; Manis</span>
        </button>
        <button
          type="button"
          className={`rns-tab-btn ${activeCategory === 'sambal' ? 'active' : ''}`}
          onClick={() => setActiveCategory('sambal')}
        >
          <Flame size={14} className="rns-icon-terracotta" />
          <span>Aneka Sambal Kemasan</span>
        </button>
        <button
          type="button"
          className={`rns-tab-btn ${activeCategory === 'lauk' ? 'active' : ''}`}
          onClick={() => setActiveCategory('lauk')}
        >
          <span>Lauk Siap Saji (Rendang &amp; Abon)</span>
        </button>
        <button
          type="button"
          className={`rns-tab-btn ${activeCategory === 'hampers' ? 'active' : ''}`}
          onClick={() => setActiveCategory('hampers')}
        >
          <Sparkles size={14} className="rns-icon-amber" />
          <span>Paket Oleh-Oleh &amp; Hampers</span>
        </button>
      </div>

      <div className="rns-catalog-layout">
        {/* Products Grid */}
        <div className="rns-products-grid">
          {filteredProducts.map((product) => {
            const currentQty = itemQuantities[product.id] || 1;
            const currentVariant = selectedVariants[product.id] || product.variants[0];

            return (
              <div key={product.id} className="rns-product-card">
                <div className="rns-card-media">
                  <img src={product.image} alt={product.name} />
                  {product.badge && <span className="rns-badge-promo">{product.badge}</span>}
                  <span className="rns-badge-weight">{product.weightGrams} gram</span>
                </div>

                <div className="rns-card-content">
                  <div className="rns-card-meta">
                    <span className="rns-shelf-life">Masa Simpan: {product.shelfLife}</span>
                    {product.spicyLevel !== undefined && (
                      <div className="rns-spicy-meter" title={`Tingkat Pedas: ${product.spicyLevel}/3`}>
                        {Array.from({ length: 3 }).map((_, i) => (
                          <Flame
                            key={i}
                            size={12}
                            className={i < (product.spicyLevel || 0) ? 'rns-flame-active' : 'rns-flame-inactive'}
                          />
                        ))}
                        <small>Pedas Lvl {product.spicyLevel}</small>
                      </div>
                    )}
                  </div>

                  <h4>{product.name}</h4>
                  <p className="rns-product-desc">{product.desc}</p>

                  <div className="rns-price-row">
                    <strong>{formatRupiah(product.price)}</strong>
                    <span className="rns-stock-status">
                      <CheckCircle2 size={12} className="rns-icon-green" /> Stok Tersedia
                    </span>
                  </div>

                  {/* Variant Selector */}
                  <div className="rns-variant-select-box">
                    <label>Pilih Varian Rasa:</label>
                    <select
                      value={currentVariant}
                      onChange={(e) => handleVariantChange(product.id, e.target.value)}
                      className="rns-select-input"
                    >
                      {product.variants.map((v, idx) => (
                        <option key={idx} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity and Add to Cart */}
                  <div className="rns-card-actions">
                    <div className="rns-qty-control">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="rns-qty-btn"
                        aria-label="Kurangi kuantiti"
                      >
                        <Minus size={13} />
                      </button>
                      <span>{currentQty}</span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="rns-qty-btn"
                        aria-label="Tambah kuantiti"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="rns-btn-add-cart"
                    >
                      <ShoppingBag size={14} />
                      <span>+ Keranjang</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Shopping Cart Tray & Fast Checkout */}
        <aside className="rns-cart-aside">
          <div className="rns-cart-panel">
            <div className="rns-cart-header">
              <div className="rns-cart-title">
                <ShoppingBag size={18} className="rns-icon-terracotta" />
                <h3>Keranjang Belanja</h3>
              </div>
              <span className="rns-cart-count-badge">{totalCartItemsCount} Item</span>
            </div>

            {cart.length === 0 ? (
              <div className="rns-cart-empty">
                <Package size={32} className="rns-icon-muted" />
                <p>Keranjang Anda masih kosong. Silakan pilih makanan lokal favorit Anda di atas.</p>
              </div>
            ) : (
              <div className="rns-cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="rns-cart-item-row">
                    <div className="rns-cart-item-info">
                      <strong>{item.name}</strong>
                      <small>Varian: {item.variant}</small>
                      <span className="rns-item-price-calc">
                        {item.qty} x {formatRupiah(item.price)} = <b>{formatRupiah(item.price * item.qty)}</b>
                      </span>
                    </div>

                    <div className="rns-cart-item-actions">
                      <div className="rns-qty-control mini">
                        <button
                          type="button"
                          onClick={() => updateCartQty(item.id, -1)}
                          className="rns-qty-btn mini"
                          aria-label="Kurangi"
                        >
                          <Minus size={11} />
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => updateCartQty(item.id, 1)}
                          className="rns-qty-btn mini"
                          aria-label="Tambah"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeCartItem(item.id)}
                        className="rns-btn-remove-item"
                        title="Hapus dari keranjang"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="rns-cart-checkout-box">
                <div className="rns-cart-totals">
                  <div className="rns-total-row">
                    <span>Estimasi Berat Pengiriman:</span>
                    <strong>{totalCartWeightKg} kg</strong>
                  </div>
                  <div className="rns-total-row subtotal">
                    <span>Subtotal Produk:</span>
                    <strong>{formatRupiah(totalCartPrice)}</strong>
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="rns-checkout-form">
                  <label className="rns-form-label">Data Pengiriman Pesanan:</label>

                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nama Lengkap Penerima"
                    className="rns-checkout-input"
                  />

                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Nomor WhatsApp Penerima"
                    className="rns-checkout-input"
                  />

                  <textarea
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Alamat Lengkap (Jalan, Kota, Kode Pos)"
                    rows={2}
                    className="rns-checkout-textarea"
                  />

                  <select
                    value={selectedCourier}
                    onChange={(e) => setSelectedCourier(e.target.value)}
                    className="rns-checkout-input"
                  >
                    <option value="J&T Express / SiCepat (Reguler 2-3 Hari)">J&amp;T Express / SiCepat (Reguler)</option>
                    <option value="Paxel Same Day / Next Day (Khusus Makanan)">Paxel (Next Day Khusus Makanan)</option>
                    <option value="JNE YES (Yakin Esok Sampai)">JNE YES (1 Hari Sampai)</option>
                    <option value="Kargo / Pembelian Jumlah Banyak">Kargo Truk (Grosir / Hemat)</option>
                  </select>
                </div>

                <div className="rns-cart-guarantees">
                  <div className="rns-guarantee-item">
                    <ShieldCheck size={13} className="rns-icon-green" />
                    <span>Garansi ganti baru jika kemasan bocor di jalan</span>
                  </div>
                  <div className="rns-guarantee-item">
                    <Truck size={13} className="rns-icon-amber" />
                    <span>Pengemasan bubble wrap tebal anti-remuk</span>
                  </div>
                </div>

                <a
                  href={generateWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="rns-btn-order-wa"
                >
                  <MessageCircle size={17} />
                  <span>Pesan Sekarang via WhatsApp</span>
                  <ArrowUpRight size={17} />
                </a>
                <small className="rns-checkout-note">
                  Admin akan memverifikasi stok dan menghitung ongkos kirim resmi via chat.
                </small>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
