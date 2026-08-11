import { Search, SlidersHorizontal } from 'lucide-react';

export default function ProductToolbar({ search, setSearch, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, categories, sortBy, setSortBy, onToast }) {
  return (
    <div className="toolbar">
      <label className="catalog-search">
        <Search size={17} />
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Rechercher un produit, une catégorie..." />
        <kbd>⌘ K</kbd>
      </label>
      <div className="filters">
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filtrer par statut">
          <option>Tous</option><option>Actif</option><option>Brouillon</option><option>Rupture</option>
        </select>
        <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} aria-label="Filtrer par catégorie">
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Trier les produits">
          <option value="recent">Plus récents</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
          <option value="stock-asc">Stock croissant</option>
          <option value="stock-desc">Stock décroissant</option>
        </select>
        <button className="filter-button" onClick={() => onToast('Les filtres avancés sont prêts à être configurés.')}><SlidersHorizontal size={16} /> Filtres</button>
      </div>
    </div>
  );
}
