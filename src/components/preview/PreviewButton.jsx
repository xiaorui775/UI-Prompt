import { useLanguage } from '../../hooks/useLanguage';

export function PreviewButton({ onClick }) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onClick}
      className="px-6 py-2 text-sm font-normal tracking-wide border border-black bg-transparent text-black hover:bg-black hover:text-white transition-colors duration-200 rounded-sm cursor-pointer inline-block text-center"
    >
      {t('buttons.preview')}
    </button>
  );
}
