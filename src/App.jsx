import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Products from '@/pages/Products';
import AddProduct from '@/pages/AddProduct';
import { initialProducts, emptyForm } from '@/data/products';

export default function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('ariane-products');
    return saved ? JSON.parse(saved) : initialProducts;
  });
  const [activeSection, setActiveSection] = useState('Produits');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');
  const [toast, setToast] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('ariane-products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(''), 3000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function openCreateForm() {
    setEditingProduct(null);
    setForm(emptyForm);
    setFormError('');
    setShowForm(true);
  }

  function openEditForm(product) {
    setEditingProduct(product);
    setForm({ name: product.name, category: product.category, price: product.price, stock: product.stock, status: product.status, image: product.image, sku: product.sku, brand: product.brand, description: product.description, taxable: product.taxable });
    setFormError('');
    setShowForm(true);
  }

  function handleFormChange(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setFormError('Veuillez sélectionner une image valide.'); return; }
    const reader = new FileReader();
    reader.onload = () => handleFormChange('image', String(reader.result));
    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.category.trim() || form.price <= 0 || form.stock < 0) {
      setFormError('Renseignez le nom, la catégorie, un prix supérieur à 0 et un stock valide.');
      return;
    }
    if (editingProduct) {
      setProducts((current) => current.map((product) => product.id === editingProduct.id ? { ...product, ...form, image: form.image || product.image } : product));
      setToast('Produit mis à jour avec succès.');
    } else {
      const newProduct = { ...form, id: Date.now(), sales: 0, image: form.image || initialProducts[products.length % initialProducts.length].image };
      setProducts((current) => [newProduct, ...current]);
      setToast(form.status === 'Brouillon' ? 'Brouillon enregistré.' : 'Produit publié dans le catalogue.');
    }
    setShowForm(false);
  }

  function deleteProduct(product) {
    if (!window.confirm(`Supprimer « ${product.name} » ?`)) return;
    setProducts((current) => current.filter((item) => item.id !== product.id));
    setToast('Produit supprimé.');
  }

  function handleNavigate(label) {
    setActiveSection(label);
    setMobileMenuOpen(false);
    if (label !== 'Produits') setToast(`${label} sera disponible dans la prochaine version.`);
  }

  return (
    <div className="app-shell">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} mobileMenuOpen={mobileMenuOpen} onCloseMobile={() => setMobileMenuOpen(false)} onToast={setToast} />
      {mobileMenuOpen && <button className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} aria-label="Fermer le menu" />}
      <main className="main-content">
        <Header onOpenMobile={() => setMobileMenuOpen(true)} onToast={setToast} />
        {showForm ? (
          <AddProduct form={form} editingProduct={editingProduct} formError={formError} onChange={handleFormChange} onUpload={handleImageUpload} onCancel={() => setShowForm(false)} onSubmit={handleSubmit} />
        ) : (
          <Products products={products} onAdd={openCreateForm} onEdit={openEditForm} onDelete={deleteProduct} onToast={setToast} />
        )}
      </main>
      {toast && <div className="toast"><span className="toast-check">✓</span>{toast}<button onClick={() => setToast('')} aria-label="Fermer"><X size={15} /></button></div>}
    </div>
  );
}
