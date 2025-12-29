import { useEffect, useMemo, useState } from 'react';
import { Copy, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useToast } from '../../hooks/useToast';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { Toast } from '../ui/Toast';
import { LoadingDots } from '../ui/LoadingDots';

/**
 * PromptDrawer - 顯示 AI Prompt 的抽屜組件
 *
 * @param {boolean} isOpen - 是否開啟抽屜
 * @param {function} onClose - 關閉抽屜的回調
 * @param {string} title - 抽屜標題
 * @param {string} content - 主要 prompt 內容（向後兼容，當 stylePrompt/customPrompt 未提供時使用）
 * @param {string} stylePrompt - Style Prompt 內容（風格描述）
 * @param {string} customPrompt - Custom Prompt 內容（可自定義 Prompt）
 * @param {boolean} isGenerating - 是否正在生成 prompt
 */
export function PromptDrawer({
  isOpen,
  onClose,
  title,
  content,
  stylePrompt = '',
  customPrompt = '',
  isGenerating = false
}) {
  const { t } = useLanguage();
  const { showToast, hideToast, toastState } = useToast();
  const { copy: copyToClipboard } = useCopyToClipboard({
    onSuccess: () => showToast(),
    onError: (err) => {
      console.error('Copy failed:', err);
      showToast({ translationKey: 'toast.error' });
    }
  });

  // 判斷有哪些 prompt 可用
  const hasStylePrompt = !!stylePrompt && stylePrompt.trim().length > 0;
  const hasCustomPrompt = !!customPrompt && customPrompt.trim().length > 0;
  const hasBothPrompts = hasStylePrompt && hasCustomPrompt;

  // 追蹤當前選中的 prompt 類型：'style' | 'custom'
  // 默認優先顯示 customPrompt（與原本邏輯一致）
  const [activePromptType, setActivePromptType] = useState('custom');

  // 當抽屜關閉後重新打開時，重置為默認類型
  useEffect(() => {
    if (isOpen) {
      // 如果只有一種 prompt，自動切換到那種
      if (hasCustomPrompt && !hasStylePrompt) {
        setActivePromptType('custom');
      } else if (hasStylePrompt && !hasCustomPrompt) {
        setActivePromptType('style');
      } else {
        // 兩者都有時，默認顯示 custom
        setActivePromptType('custom');
      }
    }
  }, [isOpen, hasStylePrompt, hasCustomPrompt]);

  // 計算當前顯示的 prompt 內容
  const displayContent = useMemo(() => {
    // 如果提供了 stylePrompt 或 customPrompt，使用它們
    if (hasStylePrompt || hasCustomPrompt) {
      return activePromptType === 'style' ? stylePrompt : customPrompt;
    }
    // 否則使用傳統的 content prop（向後兼容）
    return content;
  }, [activePromptType, stylePrompt, customPrompt, hasStylePrompt, hasCustomPrompt, content]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // 動態統計 Prompt 長度（字数与字元数）
  const { wordCount, charCount } = useMemo(() => {
    if (!displayContent || typeof displayContent !== 'string') {
      return { wordCount: 0, charCount: 0 };
    }
    const trimmed = displayContent.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
    return {
      wordCount: words,
      charCount: trimmed.length,
    };
  }, [displayContent]);

  const handleCopy = async () => {
    if (isGenerating) return;
    await copyToClipboard(displayContent);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[84]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 w-[min(38rem,100%)] h-full bg-white dark:bg-gray-900 shadow-2xl z-[85] transform transition-transform duration-300 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h4 className="font-semibold text-black dark:text-white">{title}</h4>
          <div className="flex gap-1">
            <button
              onClick={handleCopy}
              disabled={isGenerating || !displayContent}
              title={t('buttons.copy')}
              className="p-1.5 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
            >
              <Copy size={16} />
            </button>
            <button
              onClick={onClose}
              title={t('buttons.close')}
              className="p-1.5 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Stats row with optional prompt type toggle */}
        <div className="px-4 pt-2 pb-0 flex items-center justify-between">
          {/* Prompt Type Toggle - 僅當兩種 prompt 都可用時顯示 */}
          {hasBothPrompts ? (
            <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-0.5 bg-gray-50 dark:bg-gray-800/50">
              <button
                onClick={() => setActivePromptType('custom')}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all duration-200 ${
                  activePromptType === 'custom'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {t('prompt.customPrompt')}
              </button>
              <button
                onClick={() => setActivePromptType('style')}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all duration-200 ${
                  activePromptType === 'style'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {t('prompt.stylePrompt')}
              </button>
            </div>
          ) : (
            <div />
          )}

          {/* Word/char count */}
          <div className="text-[11px] text-gray-500 dark:text-gray-400">
            {t('prompt.lengthLabel', {
              words: wordCount,
              chars: charCount,
            })}
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col min-h-0">
          {isGenerating ? (
            <div className="w-full flex-1 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 border border-gray-300 dark:border-gray-700 rounded">
              <LoadingDots size="medium" />
              <p className="text-sm mt-3">{t('prompt.generating')}</p>
            </div>
          ) : displayContent ? (
            <textarea
              value={displayContent}
              readOnly
              className="w-full flex-1 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded p-3 leading-6 font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          ) : (
            <div className="w-full flex-1 flex items-center justify-center text-gray-400 dark:text-gray-500 border border-gray-300 dark:border-gray-700 rounded">
              <div className="text-center">
                <p className="text-lg mb-2">🎨</p>
                <p className="text-sm">{t('prompt.notDefined')}</p>
                <p className="text-xs mt-2 text-gray-300 dark:text-gray-600">{t('prompt.notDefinedHint')}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast 通知 */}
      <Toast
        show={toastState.show}
        onClose={hideToast}
        message={toastState.message}
        translationKey={toastState.translationKey}
        duration={toastState.duration}
      />
    </>
  );
}
