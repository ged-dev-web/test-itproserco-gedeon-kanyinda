import ProductForm from '@/components/forms/ProductForm';

export default function AddProduct({ form, editingProduct, formError, onChange, onUpload, onCancel, onSubmit }) {
  return <ProductForm form={form} editingProduct={editingProduct} formError={formError} onChange={onChange} onUpload={onUpload} onCancel={onCancel} onSubmit={onSubmit} />;
}
