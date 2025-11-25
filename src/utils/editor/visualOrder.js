/**
 * 虛擬順序計算工具
 *
 * 用於拖動預覽時計算組件的虛擬渲染順序
 * 不修改實際数据,仅用於視覺預覽
 */

/**
 * 計算拖動預覽時的虛擬順序
 * @param {Array} children - 原始子組件数組
 * @param {Object} previewSwap - 預覽交換信息
 * @returns {Array} 虛擬排序的組件数組
 */
export function getVisualOrder(children, previewSwap) {
  if (!previewSwap || !children || children.length === 0) {
    return children;
  }

  const { draggedIndex, targetIndex } = previewSwap;

  // 驗證索引有效性
  if (
    draggedIndex === undefined ||
    targetIndex === undefined ||
    draggedIndex < 0 ||
    targetIndex < 0 ||
    draggedIndex >= children.length ||
    targetIndex >= children.length
  ) {
    return children;
  }

  // 創建副本避免修改原数組
  const result = [...children];

  // 交換位置 (視覺上)
  [result[draggedIndex], result[targetIndex]] =
    [result[targetIndex], result[draggedIndex]];

  return result;
}

/**
 * 查找組件的父節點和索引
 * @param {Object} tree - 組件樹
 * @param {string} targetId - 目标組件 ID
 * @returns {Object|null} { parentId, index, parent }
 */
export function findParentAndIndex(tree, targetId) {
  if (!tree || !tree.children) return null;

  const index = tree.children.findIndex((c) => c.id === targetId);
  if (index !== -1) {
    return {
      parentId: tree.id,
      index,
      parent: tree
    };
  }

  // 遞歸搜索子樹
  for (const child of tree.children) {
    const result = findParentAndIndex(child, targetId);
    if (result) return result;
  }

  return null;
}

/**
 * 检查兩個組件是否為同級
 * @param {Object} tree - 組件樹
 * @param {string} id1 - 第一個組件 ID
 * @param {string} id2 - 第二個組件 ID
 * @returns {boolean} 是否為同級組件
 */
export function areSiblings(tree, id1, id2) {
  const info1 = findParentAndIndex(tree, id1);
  const info2 = findParentAndIndex(tree, id2);

  if (!info1 || !info2) return false;

  return info1.parentId === info2.parentId;
}

/**
 * 計算預覽交換信息
 * @param {Object} tree - 組件樹
 * @param {string} draggedId - 被拖動組件 ID
 * @param {string} targetId - 目标組件 ID
 * @returns {Object|null} 預覽交換信息或 null
 */
export function calculatePreviewSwap(tree, draggedId, targetId) {
  if (!tree || !draggedId || !targetId || draggedId === targetId) {
    return null;
  }

  const fromInfo = findParentAndIndex(tree, draggedId);
  const toInfo = findParentAndIndex(tree, targetId);

  // 必須是同級組件
  if (!fromInfo || !toInfo) {
    return null;
  }

  if (fromInfo.parentId !== toInfo.parentId) {
    return null;
  }

  return {
    draggedId,
    targetId,
    draggedIndex: fromInfo.index,
    targetIndex: toInfo.index,
    parentId: fromInfo.parentId
  };
}
