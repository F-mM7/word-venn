/**
 * ベン図の各領域に表示する文字列
 */
export interface VennRegions {
  only1: string; // 円1のみ
  only2: string; // 円2のみ
  only3: string; // 円3のみ
  intersect12: string; // 円1と円2の重複
  intersect13: string; // 円1と円3の重複
  intersect23: string; // 円2と円3の重複
  intersectAll: string; // 3円の重複
}
