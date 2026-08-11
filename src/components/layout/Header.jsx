import { Bell, ChevronRight, Menu, Search } from 'lucide-react';

export default function Header({ onOpenMobile, onToast }) {
  return (
    <header className="topbar">
      <button className="icon-button menu-trigger" onClick={onOpenMobile} aria-label="Ouvrir le menu"><Menu size={22} /></button>
      <div className="breadcrumb"><span>Accueil</span><ChevronRight size={14} /><strong>Produits</strong></div>
      <div className="topbar-actions">
        <label className="global-search">
          <Search size={17} />
          <input placeholder="Rechercher..." aria-label="Recherche globale" />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification-button" onClick={() => onToast('Vous êtes à jour.')} aria-label="Notifications"><Bell size={19} /><span /></button>
        <span className="topbar-avatar">GK</span>
      </div>
    </header>
  );
}
