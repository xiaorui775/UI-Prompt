/**
 * 數據轉換工具函數
 *
 * 提供組件數據的轉換和處理功能
 */

/**
 * 展平組件數據中的變體
 *
 * 將包含 variants 的組件數據展平為單層變體數組,便於統一渲染
 *
 * @param {Array} components - 組件數據數組
 * @returns {Array} 展平後的變體數組
 *
 * @example
 * const components = [
 *   {
 *     id: 'breadcrumbs',
 *     title: '麵包屑',
 *     variants: [{ name: '基礎', ... }, { name: '帶圖標', ... }]
 *   },
 *   {
 *     id: 'tabs',
 *     title: 'Tabs',
 *     demoHTML: '...'
 *   }
 * ];
 *
 * const flattened = flattenVariants(components);
 * // 結果: [
 * //   { name: '基礎', _componentTitle: '麵包屑', _variantIndex: 0, ... },
 * //   { name: '帶圖標', _componentTitle: '麵包屑', _variantIndex: 1, ... },
 * //   { id: 'tabs', name: 'Tabs', _componentTitle: 'Tabs', _variantIndex: 0, ... }
 * // ]
 */
export function flattenVariants(components) {
  if (!Array.isArray(components)) {
    console.warn('flattenVariants: Expected array, got', typeof components);
    return [];
  }

  return components.flatMap((component) => {
    if (component.variants && Array.isArray(component.variants) && component.variants.length > 0) {
      // 有變體: 返回所有變體,並附加組件信息
      return component.variants.map((variant, idx) => ({
        ...variant,
        _componentTitle: component.title,
        _componentId: component.id,
        _variantIndex: idx
      }));
    } else {
      // 無變體: 將主體數據作為單一變體
      return [{
        id: component.id,
        name: component.title,
        description: component.description,
        demoHTML: component.demoHTML,
        customStyles: component.customStyles,
        demoBoxClass: component.demoBoxClass,
        demoBoxStyle: component.demoBoxStyle,
        colorScheme: component.colorScheme,
        previews: component.previews,
        _componentTitle: component.title,
        _componentId: component.id,
        _variantIndex: 0
      }];
    }
  });
}

/**
 * 生成變體的唯一鍵
 *
 * @param {Object} variant - 變體對象
 * @param {number} fallbackIndex - 備用索引
 * @returns {string} 唯一鍵
 */
export function getVariantKey(variant, fallbackIndex = 0) {
  if (variant._componentId && variant._variantIndex !== undefined) {
    return `${variant._componentId}-${variant._variantIndex}`;
  }
  if (variant._componentTitle && variant._variantIndex !== undefined) {
    return `${variant._componentTitle}-${variant._variantIndex}`;
  }
  return `variant-${fallbackIndex}`;
}
