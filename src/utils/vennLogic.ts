import type { VennRegions } from './types';

/**
 * 3つの単語から各ベン図領域に表示する文字を計算
 */
export function calculateVennRegions(
  word1: string,
  word2: string,
  word3: string
): VennRegions {
  // 各単語を文字配列に分解
  const chars1 = [...word1];
  const chars2 = [...word2];
  const chars3 = [...word3];

  // 各文字の出現回数をカウント
  const count1 = countChars(chars1);
  const count2 = countChars(chars2);
  const count3 = countChars(chars3);

  // 各文字について、どの領域に何個配置するかを計算
  const regions: VennRegions = {
    only1: '',
    only2: '',
    only3: '',
    intersect12: '',
    intersect13: '',
    intersect23: '',
    intersectAll: '',
  };

  // 全ての文字を集める
  const allChars = new Set([
    ...count1.keys(),
    ...count2.keys(),
    ...count3.keys(),
  ]);

  for (const char of allChars) {
    const c1 = count1.get(char) || 0;
    const c2 = count2.get(char) || 0;
    const c3 = count3.get(char) || 0;

    // 3つ全てに含まれる分
    const intersectAllCount = Math.min(c1, c2, c3);
    regions.intersectAll += char.repeat(intersectAllCount);

    // 残りの個数
    let remaining1 = c1 - intersectAllCount;
    let remaining2 = c2 - intersectAllCount;
    let remaining3 = c3 - intersectAllCount;

    // 1と2の共通（3を除く）
    const intersect12Count = Math.min(remaining1, remaining2);
    regions.intersect12 += char.repeat(intersect12Count);
    remaining1 -= intersect12Count;
    remaining2 -= intersect12Count;

    // 1と3の共通（2を除く）
    const intersect13Count = Math.min(remaining1, remaining3);
    regions.intersect13 += char.repeat(intersect13Count);
    remaining1 -= intersect13Count;
    remaining3 -= intersect13Count;

    // 2と3の共通（1を除く）
    const intersect23Count = Math.min(remaining2, remaining3);
    regions.intersect23 += char.repeat(intersect23Count);
    remaining2 -= intersect23Count;
    remaining3 -= intersect23Count;

    // 各円のみに含まれる分
    regions.only1 += char.repeat(remaining1);
    regions.only2 += char.repeat(remaining2);
    regions.only3 += char.repeat(remaining3);
  }

  return regions;
}

/**
 * 文字の出現回数をカウント
 */
function countChars(chars: string[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const char of chars) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
}
