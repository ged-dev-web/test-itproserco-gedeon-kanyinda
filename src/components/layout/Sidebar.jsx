import {
  BarChart3, Boxes, ChevronDown, ChevronRight, CircleHelp, ClipboardList,
  FileText, LayoutDashboard, MoreHorizontal, Package, Settings, ShoppingBag,
  Store, Tag, TrendingUp, Truck, Users, X,
} from 'lucide-react';
import { menuItems } from '@/data/products';

const iconMap = {
  LayoutDashboard, Package, ClipboardList, Users, Tag, ShoppingBag, Boxes, Store, Truck, FileText,
};

export default function Sidebar({ activeSection, onNavigate, mobileMenuOpen, onCloseMobile, onToast }) {
  return (
    <>
      <aside className={`sidebar ${mobileMenuOpen ? 'sidebar--open' : ''}`}>
        <div className="brand">
          <span className="brand-mark"><ShoppingBag size={18} strokeWidth={2.6} /></span>
          <span>gedeon</span>
          <button className="icon-button sidebar-close" onClick={onCloseMobile} aria-label="Fermer le menu"><X size={18} /></button>
        </div>
        <div className="store-switcher">
          <span className="store-avatar">GED</span>
          <span><strong>Gedeon Store</strong><small>Boutique principale</small></span>
          <ChevronDown size={15} />
        </div>
        <nav className="side-nav" aria-label="Navigation principale">
          <p className="nav-label">Menu principal</p>
          {menuItems.map(({ label, icon, count }) => {
            const Icon = iconMap[icon];
            return (
              <button key={label} className={`nav-item ${activeSection === label ? 'nav-item--active' : ''}`} onClick={() => onNavigate(label)}>
                <Icon size={17} /><span>{label}</span>{count && <em>{count}</em>}
              </button>
            );
          })}
          <p className="nav-label nav-label--spaced">Configuration</p>
          <button className="nav-item" onClick={() => onNavigate('Paramètres')}><Settings size={17} /><span>Paramètres</span></button>
          <button className="nav-item" onClick={() => onNavigate('Rapports & analyses')}><BarChart3 size={17} /><span>Rapports & analyses</span></button>
          <button className="nav-item" onClick={() => onNavigate('Aide & support')}><CircleHelp size={17} /><span>Aide & support</span></button>
        </nav>
        <div className="sidebar-footer">
          <div className="upgrade-card">
            <div className="upgrade-icon"><TrendingUp size={16} /></div>
            <strong>Passez à Pro</strong>
            <p>Débloquez toutes les fonctionnalités.</p>
            <button onClick={() => onToast('Votre demande de passage à Pro a été prise en compte.')}>Découvrir l'offre <ChevronRight size={14} /></button>
          </div>
          <div className="user-card">
            <span className="user-avatar">GK</span>
            <span><strong>GEDEON KANYINDA.</strong><small>Administrateur</small></span>
            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>
    </>
  );
}
