import { calculateVennRegions } from '../utils/vennLogic';

interface VennDiagramProps {
  words: [string, string, string];
}

export default function VennDiagram({ words }: VennDiagramProps) {
  // 入力が全て空の場合は表示しない
  const hasInput = words.some((word) => word.length > 0);

  if (!hasInput) {
    return null;
  }

  // ベン図の各領域の文字を計算
  const regions = calculateVennRegions(words[0], words[1], words[2]);

  // 円の設定
  const circles = [
    { cx: 250, cy: 150, r: 120, fill: '#4285F4', label: '1', labelX: 250, labelY: 60 },
    { cx: 180, cy: 260, r: 120, fill: '#FBBC04', label: '2', labelX: 100, labelY: 300 },
    { cx: 320, cy: 260, r: 120, fill: '#EA4335', label: '3', labelX: 400, labelY: 300 },
  ];

  // 各領域の文字表示位置
  const textPositions = {
    only1: { x: 250, y: 80 },
    only2: { x: 120, y: 300 },
    only3: { x: 380, y: 300 },
    intersect12: { x: 210, y: 200 },
    intersect13: { x: 290, y: 200 },
    intersect23: { x: 250, y: 290 },
    intersectAll: { x: 250, y: 210 },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>ベン図</h2>
      <svg
        viewBox="0 0 500 400"
        style={{
          width: '100%',
          maxWidth: '500px',
          height: 'auto',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        {/* 円を描画 */}
        {circles.map((circle, index) => (
          <circle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill={circle.fill}
            fillOpacity="0.3"
            stroke={circle.fill}
            strokeWidth="2"
          />
        ))}

        {/* 円のラベル */}
        {circles.map((circle, index) => (
          <text
            key={`label-${index}`}
            x={circle.labelX}
            y={circle.labelY}
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="#333"
          >
            {circle.label}
          </text>
        ))}

        {/* 各領域の文字を表示 */}
        <text
          x={textPositions.only1.x}
          y={textPositions.only1.y}
          textAnchor="middle"
          fontSize="24"
          fill="#FFF"
          fontWeight="bold"
        >
          {regions.only1}
        </text>
        <text
          x={textPositions.only2.x}
          y={textPositions.only2.y}
          textAnchor="middle"
          fontSize="24"
          fill="#FFF"
          fontWeight="bold"
        >
          {regions.only2}
        </text>
        <text
          x={textPositions.only3.x}
          y={textPositions.only3.y}
          textAnchor="middle"
          fontSize="24"
          fill="#FFF"
          fontWeight="bold"
        >
          {regions.only3}
        </text>
        <text
          x={textPositions.intersect12.x}
          y={textPositions.intersect12.y}
          textAnchor="middle"
          fontSize="24"
          fill="#FFF"
          fontWeight="bold"
        >
          {regions.intersect12}
        </text>
        <text
          x={textPositions.intersect13.x}
          y={textPositions.intersect13.y}
          textAnchor="middle"
          fontSize="24"
          fill="#FFF"
          fontWeight="bold"
        >
          {regions.intersect13}
        </text>
        <text
          x={textPositions.intersect23.x}
          y={textPositions.intersect23.y}
          textAnchor="middle"
          fontSize="24"
          fill="#FFF"
          fontWeight="bold"
        >
          {regions.intersect23}
        </text>
        <text
          x={textPositions.intersectAll.x}
          y={textPositions.intersectAll.y}
          textAnchor="middle"
          fontSize="24"
          fill="#FFF"
          fontWeight="bold"
        >
          {regions.intersectAll}
        </text>
      </svg>
    </div>
  );
}
