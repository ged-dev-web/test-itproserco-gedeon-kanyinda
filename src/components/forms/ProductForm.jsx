import { AlertTriangle, ChevronLeft, ChevronRight, CloudUpload, HelpCircle, ImagePlus } from 'lucide-react';

function Field({ label, required, children }) {
  return (
    <label className="field">
      <span>{label} {required && <b>*</b>}</span>
      {children}
    </label>
  );
}

export default function ProductForm({ form, editingProduct, formError, onChange, onUpload, onCancel, onSubmit }) {
  return (
    <section className="form-page">
      <div className="form-heading">
        <div>
          <button className="back-link" onClick={onCancel}><ChevronLeft size={16} /> Retour aux produits</button>
          <div className="eyebrow"><span className="eyebrow-dot" /> Catalogue <ChevronRight size={14} /> Nouveau produit</div>
          <h1>{editingProduct ? 'Modifier le produit' : 'Ajouter un produit'}</h1>
          <p>Renseignez les informations nécessaires pour publier un nouveau produit.</p>
        </div>
        <div className="heading-actions">
          <button className="button button--secondary" onClick={onCancel}>Annuler</button>
          <button className="button button--primary" onClick={() => document.getElementById('product-form')?.requestSubmit()}>
            <CloudUpload size={17} /> {form.status === 'Brouillon' ? 'Enregistrer le brouillon' : 'Publier le produit'}
          </button>
        </div>
      </div>
      <form id="product-form" className="product-form" onSubmit={onSubmit}>
        <div className="form-main">
          <div className="form-card">
            <div className="form-card-heading">
              <div><h2>Informations générales</h2><p>Présentez votre produit à vos clients.</p></div>
              <span className="required-label">* Champs obligatoires</span>
            </div>
            <div className="field-grid">
              <Field label="Nom du produit" required><input value={form.name} onChange={(event) => onChange('name', event.target.value)} placeholder="Ex. Sneakers Urban Pro" /></Field>
              <Field label="Catégorie" required>
                <select value={form.category} onChange={(event) => onChange('category', event.target.value)}>
                  <option value="">Sélectionner une catégorie</option>
                  <option>Chaussures</option><option>Accessoires</option><option>Maroquinerie</option>
                  <option>Électronique</option><option>Vêtements</option><option>Beauté</option>
                </select>
              </Field>
              <Field label="Marque"><input value={form.brand} onChange={(event) => onChange('brand', event.target.value)} placeholder="Ex. Ariane" /></Field>
              <Field label="SKU"><input value={form.sku} onChange={(event) => onChange('sku', event.target.value)} placeholder="Ex. URB-001" /></Field>
            </div>
            <Field label="Description"><textarea rows={5} value={form.description} onChange={(event) => onChange('description', event.target.value)} placeholder="Décrivez les caractéristiques de votre produit..." /></Field>
          </div>
          <div className="form-card">
            <div className="form-card-heading"><div><h2>Médias</h2><p>Ajoutez une image principale pour votre produit.</p></div></div>
            <label className={`upload-zone ${form.image ? 'upload-zone--filled' : ''}`}>
              <input type="file" accept="image/*" onChange={onUpload} />
              {form.image ? <img src={form.image} alt="Aperçu du produit" /> : (
                <>
                  <span className="upload-icon"><ImagePlus size={22} /></span>
                  <strong>Glissez-déposez votre image ici</strong>
                  <span>ou <u>parcourez vos fichiers</u> · PNG, JPG jusqu'à 5 MB</span>
                </>
              )}
            </label>
          </div>
          <div className="form-card">
            <div className="form-card-heading"><div><h2>Prix et tarification</h2><p>Définissez le prix de vente et les taxes applicables.</p></div></div>
            <div className="field-grid field-grid--three">
              <Field label="Prix de vente" required>
                <div className="input-with-suffix"><input type="number" min="0" step="1" value={form.price || ''} onChange={(event) => onChange('price', Number(event.target.value))} placeholder="0" /><span>€</span></div>
              </Field>
              <Field label="Prix promotionnel"><div className="input-with-suffix"><input type="number" min="0" step="1" placeholder="0" /><span>€</span></div></Field>
              <Field label="Coût d'achat"><div className="input-with-suffix"><input type="number" min="0" step="1" placeholder="0" /><span>€</span></div></Field>
            </div>
            <label className="switch-field">
              <input type="checkbox" checked={form.taxable} onChange={(event) => onChange('taxable', event.target.checked)} />
              <span className="toggle" />
              <span><strong>Produit taxable</strong><small>Appliquer la TVA à ce produit</small></span>
            </label>
          </div>
        </div>
        <aside className="form-side">
          <div className="form-card">
            <div className="form-card-heading"><div><h2>Organisation</h2><p>Gérez la visibilité de votre produit.</p></div></div>
            <Field label="Statut">
              <select value={form.status} onChange={(event) => onChange('status', event.target.value)}>
                <option>Actif</option><option>Brouillon</option><option>Rupture</option>
              </select>
            </Field>
            <Field label="Type de produit"><select><option>Produit physique</option><option>Service</option><option>Numérique</option></select></Field>
            <Field label="Collection"><select><option>Aucune collection</option><option>Nouveautés</option><option>Meilleures ventes</option></select></Field>
          </div>
          <div className="form-card">
            <div className="form-card-heading"><div><h2>Inventaire</h2><p>Suivez les quantités disponibles.</p></div></div>
            <Field label="Quantité en stock" required><input type="number" min="0" value={form.stock} onChange={(event) => onChange('stock', Number(event.target.value))} /></Field>
            <Field label="Seuil d'alerte"><input type="number" min="0" defaultValue="8" /></Field>
            <label className="switch-field">
              <input type="checkbox" defaultChecked /><span className="toggle" />
              <span><strong>Suivre le stock</strong><small>Recevoir une alerte de réapprovisionnement</small></span>
            </label>
          </div>
          <div className="form-card help-card">
            <div className="help-icon"><HelpCircle size={18} /></div>
            <div><strong>Besoin d'aide ?</strong><p>Consultez notre guide pour optimiser vos fiches produits.</p><button type="button">Lire le guide <ChevronRight size={14} /></button></div>
          </div>
        </aside>
      </form>
      {formError && <div className="form-error"><AlertTriangle size={17} />{formError}</div>}
    </section>
  );
}
