import { GlobeAltIcon } from '@heroicons/react/24/outline'; // 导入 Heroicons 中的 GlobeAltIcon 图标
import { lusitana } from '@/app/ui/fonts'; // 导入自定义字体 Lusitana

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* 使用自定义字体 Lusitana，设置为 flex 布局，水平排列，居中对齐，无行高，文本颜色为白色 */}
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      {/* 显示一个旋转 15 度的 GlobeAltIcon 图标，图标高度和宽度为 12 */}
      <p className="text-[44px]">Acme</p>
      {/* 显示文本 "Acme"，字体大小为 44 像素 */}
    </div>
  );
}