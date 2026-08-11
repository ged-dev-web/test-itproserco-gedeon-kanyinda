import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, CloudUpload, Grid2X2, List, Plus, Search } from 'lucide-react';
import { formatPrice } from '@/data/products';
import ProductToolbar from '@/components/products/ProductToolbar';
import ProductTable from '@/components/products/ProductTable';
import ProductGrid from '@/components/products/ProductGrid';
import StatCard from '@/components/products/StatCard';
import { AlertTriangle, Package, ShoppingBag, TrendingUp } from 'lucide-react';

export default function Products({ products, onAdd, onEdit, onDelete, onToast }) {
  const [viewMode, setViewMode] = useState('list');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tous');
  const [categoryFilter, setCategoryFilter] = useState('Toutes les catégories');
  const [sortBy, setSortBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const categories = useMemo(() => ['Toutes les catégories', ...new Set(products.map((product) => product.category))], [products]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();
    const result = products.filter((product) => {
      const matchesSearch = !normalizedSearch || `${product.name} ${product.category} ${product.sku}`.toLowerCase().includes(normalizedSearch);
      const matchesStatus = statusFilter === 'Tous' || product.status === statusFilter;
      const matchesCategory = categoryFilter === 'Toutes les catégories' || product.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });
    return [...result].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'stock-asc') return a.stock - b.stock;
      if (sortBy === 'stock-desc') return b.stock - a.stock;
      return b.id - a.id;
    });
  }, [categoryFilter, products, search, sortBy, statusFilter]);

  const stats = useMemo(() => ({
    revenue: products.reduce((total, product) => total + product.price * product.sales, 0),
    lowStock: products.filter((product) => product.stock > 0 && product.stock <= 8).length,
    active: products.filter((product) => product.status === 'Actif').length,
  }), [products]);

  const pageSize = viewMode === 'list' ? 5 : 6;
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const pagedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  function toggleProductSelection(id) {
    setSelectedProducts((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function resetFilters() {
    setSearch(''); setStatusFilter('Tous'); setCategoryFilter('Toutes les catégories'); setPage(1);
  }

  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> Catalogue <ChevronRight size={14} /> Gestion</div>
          <h1>Gestion des produits</h1>
          <p>Gérez votre catalogue, vos stocks et les performances de votre boutique.</p>
        </div>
        <div className="heading-actions">
          <button className="button button--secondary" onClick={() => onToast('Importez un fichier CSV pour ajouter plusieurs produits.')}><CloudUpload size={17} /> Importer</button>
          <button className="button button--primary" onClick={onAdd}><Plus size={18} /> Ajouter un produit</button>
        </div>
      </section>

      <section className="stats-grid" aria-label="Indicateurs clés">
        <StatCard label="Chiffre d'affaires" value={formatPrice(stats.revenue)} delta="18,4%" detail="vs mois précédent" icon={<TrendingUp />} tone="blue" chart="line" />
        <StatCard label="Commandes ce mois" value="328" delta="12,0%" detail="vs mois précédent" icon={<ShoppingBag />} tone="violet" chart="bars" />
        <StatCard label="Produits actifs" value={stats.active.toLocaleString('fr-FR')} delta="8,2%" detail="vs mois précédent" icon={<Package />} tone="green" chart="donut" />
        <StatCard label="Stock faible" value={String(stats.lowStock)} delta="À surveiller" detail="produits à réapprovisionner" icon={<AlertTriangle />} tone="orange" chart="warning" />
      </section>

      <section className="catalog-panel">
        <div className="panel-heading">
          <div><h2>Tous les produits <span>{filteredProducts.length}</span></h2><p>Dernière mise à jour il y a 2 minutes</p></div>
          <div className="view-toggle" role="group" aria-label="Choisir la vue">
            <button className={viewMode === 'list' ? 'is-selected' : ''} onClick={() => setViewMode('list')} aria-label="Vue liste"><List size={16} /> Liste</button>
            <button className={viewMode === 'grid' ? 'is-selected' : ''} onClick={() => setViewMode('grid')} aria-label="Vue grille"><Grid2X2 size={16} /> Grille</button>
          </div>
        </div>
        <ProductToolbar
          search={search} setSearch={(value) => { setSearch(value); setPage(1); }}
          statusFilter={statusFilter} setStatusFilter={(value) => { setStatusFilter(value); setPage(1); }}
          categoryFilter={categoryFilter} setCategoryFilter={(value) => { setCategoryFilter(value); setPage(1); }}
          categories={categories} sortBy={sortBy} setSortBy={setSortBy} onToast={onToast}
        />
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"><Search size={24} /></div>
            <h3>Aucun produit trouvé</h3>
            <p>Essayez une autre recherche ou réinitialisez les filtres.</p>
            <button className="button button--secondary" onClick={resetFilters}>Réinitialiser les filtres</button>
          </div>
        ) : viewMode === 'list' ? (
          <ProductTable products={pagedProducts} selectedProducts={selectedProducts} onSelect={toggleProductSelection} onEdit={onEdit} onDelete={onDelete} />
        ) : (
          <ProductGrid products={pagedProducts} onEdit={onEdit} onDelete={onDelete} />
        )}
        <div className="panel-footer">
          <span>{filteredProducts.length === 0 ? 'Aucun produit' : <>Affichage de <strong>{(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredProducts.length)}</strong> sur <strong>{filteredProducts.length}</strong> produits</>}</span>
          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))} aria-label="Page précédente"><ChevronLeft size={16} /></button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} className={page === number ? 'current' : ''} onClick={() => setPage(number)}>{number}</button>)}
            <button disabled={page === pageCount} onClick={() => setPage((current) => Math.min(pageCount, current + 1))} aria-label="Page suivante"><ChevronRight size={16} /></button>
          </div>
        </div>
      </section>
    </>
  );
}
