import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { formatPrice } from '@/data/products';
import StatusBadge from './StatusBadge';

export default function ProductGrid({ products, onEdit, onDelete }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <div className="card-image">
            <img src={product.image} alt={product.name} />
            <StatusBadge status={product.status} />
            <button className="card-menu" onClick={() => onEdit(product)} aria-label={`Modifier ${product.name}`}><MoreHorizontal size={18} /></button>
          </div>
          <div className="card-body">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <div className="card-price-row"><strong>{formatPrice(product.price)}</strong><span>{product.sales} ventes</span></div>
            <div className="card-stock"><span>Stock <b>{product.stock}</b></span><div className="stock-bar"><i style={{ width: `${Math.min(100, product.stock * 2)}%` }} /></div></div>
            <div className="card-actions"><button onClick={() => onEdit(product)}><Pencil size={14} /> Modifier</button><button onClick={() => onDelete(product)} aria-label={`Supprimer ${product.name}`}><Trash2 size={14} /></button></div>
          </div>
        </article>
      ))}
    </div>
  );
}
