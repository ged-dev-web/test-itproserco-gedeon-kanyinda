import { Pencil, Trash2 } from 'lucide-react';
import { formatPrice } from '@/data/products';
import StatusBadge from './StatusBadge';

export default function ProductTable({ products, selectedProducts, onSelect, onEdit, onDelete }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th className="checkbox-cell"><input type="checkbox" checked={products.length > 0 && products.every((product) => selectedProducts.includes(product.id))} onChange={() => products.forEach((product) => onSelect(product.id))} aria-label="Sélectionner tout" /></th>
            <th>Produit</th><th>SKU</th><th>Catégorie</th><th>Prix</th><th>Stock</th><th>Ventes</th><th>Statut</th><th />
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="checkbox-cell"><input type="checkbox" checked={selectedProducts.includes(product.id)} onChange={() => onSelect(product.id)} aria-label={`Sélectionner ${product.name}`} /></td>
              <td><div className="product-cell"><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.brand}</small></span></div></td>
              <td className="muted-cell">{product.sku}</td>
              <td>{product.category}</td>
              <td><strong>{formatPrice(product.price)}</strong></td>
              <td><div className={`stock-value ${product.stock <= 8 ? 'stock-value--low' : ''}`}><span>{product.stock}</span><div className="stock-bar"><i style={{ width: `${Math.min(100, product.stock * 2)}%` }} /></div></div></td>
              <td><span className="sales-value">{product.sales}<small> unités</small></span></td>
              <td><StatusBadge status={product.status} /></td>
              <td><div className="row-actions"><button onClick={() => onEdit(product)} aria-label={`Modifier ${product.name}`}><Pencil size={15} /></button><button onClick={() => onDelete(product)} aria-label={`Supprimer ${product.name}`}><Trash2 size={15} /></button></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
