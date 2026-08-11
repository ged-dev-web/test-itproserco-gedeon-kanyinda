export const productImages = [
  'https://images.pexels.com/photos/34976481/pexels-photo-34976481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/27174542/pexels-photo-27174542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/34976482/pexels-photo-34976482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/4452374/pexels-photo-4452374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/26954376/pexels-photo-26954376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export const initialProducts = [
  { id: 1, name: 'Sneakers Urban Pro', category: 'Chaussures', price: 129, stock: 42, sales: 86, status: 'Actif', image: productImages[0], sku: 'URB-001', brand: 'Ariane', description: 'Une paire de sneakers pensée pour la ville.', taxable: true },
  { id: 2, name: 'Montre Classic Steel', category: 'Accessoires', price: 189, stock: 8, sales: 35, status: 'Actif', image: productImages[1], sku: 'STL-024', brand: 'Ariane', description: 'Montre acier au design intemporel.', taxable: true },
  { id: 3, name: 'Sac Élégance', category: 'Maroquinerie', price: 249, stock: 0, sales: 28, status: 'Rupture', image: productImages[2], sku: 'BAG-103', brand: 'Ariane', description: 'Un sac structuré pour les journées élégantes.', taxable: true },
  { id: 4, name: 'Casque Audio Wave', category: 'Électronique', price: 89, stock: 26, sales: 64, status: 'Actif', image: productImages[3], sku: 'WAV-441', brand: 'Ariane', description: 'Un son immersif et un confort longue durée.', taxable: true },
  { id: 5, name: 'Chemise Premium', category: 'Vêtements', price: 79, stock: 4, sales: 18, status: 'Actif', image: productImages[4], sku: 'SHR-554', brand: 'Ariane', description: 'Chemise en coton premium, coupe droite.', taxable: true },
  { id: 6, name: 'Parfum Royal', category: 'Beauté', price: 115, stock: 12, sales: 42, status: 'Brouillon', image: productImages[5], sku: 'ROY-885', brand: 'Ariane', description: 'Une signature olfactive lumineuse et boisée.', taxable: true },
];

export const emptyForm = {
  name: '', category: '', price: 0, stock: 0, status: 'Brouillon', image: '', sku: '', brand: 'Ariane', description: '', taxable: true,
};

export const menuItems = [
  { label: 'Tableau de bord', icon: 'LayoutDashboard' },
  { label: 'Produits', icon: 'Package', count: '1 240' },
  { label: 'Commandes', icon: 'ClipboardList' },
  { label: 'Clients', icon: 'Users' },
  { label: 'Catégories', icon: 'Tag' },
  { label: 'Promotions', icon: 'ShoppingBag' },
  { label: 'Stocks', icon: 'Boxes' },
  { label: 'Fournisseurs', icon: 'Store' },
  { label: 'Livraisons', icon: 'Truck' },
  { label: 'Avis clients', icon: 'FileText' },
];

export function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
}
