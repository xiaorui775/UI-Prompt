import React, { useState } from 'react';
import { MessageBox } from '../../components/ui/MessageBox';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * LayoutMessageBoxPage
 * - A cleared layout page with a single trigger button to open MessageBox
 * - Uses i18n for all text
 */
export function LayoutMessageBoxPage() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="min-h-[60vh] flex items-center justify-center p-6 bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-2xl md:text-3xl font-light text-gray-900">
          {t('pages.layoutMessageBox.title')}
        </h1>
        <p className="text-gray-600">
          {t('pages.layoutMessageBox.description')}
        </p>

        <div>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
          >
            {t('pages.layoutMessageBox.openButton')}
          </button>
        </div>

        <MessageBox
          open={open}
          onOpenChange={setOpen}
          variant="info"
          title={t('ui.messageBox.defaultTitle')}
          description={t('ui.messageBox.defaultDescription')}
          confirmText={t('buttons.confirm')}
          cancelText={t('buttons.cancel')}
          showCancel
          onConfirm={() => {
            // no-op demo confirm
          }}
        />
      </div>
    </section>
  );
}
