import AcmeLogo from '@/app/ui/acme-logo'; // 导入 AcmeLogo 组件
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // 导入 Heroicons 中的 ArrowRightIcon 图标
import Link from 'next/link'; // 导入 Next.js 的 Link 组件
import { lusitana } from '@/app/ui/fonts'; // 导入自定义字体 Lusitana
import Image from 'next/image'; // 导入 Next.js 的 Image 组件

import styles from '@/app/ui/home.module.css'; // 导入自定义 CSS 模块

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 添加顶部蓝色区域 */}
      <div className="bg-blue-500 w-full h-20 md:h-55" />
        {/* 显示 AcmeLogo 组件 */}
        <AcmeLogo />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* 包含欢迎信息和登录链接的容器 */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* 添加一个三角形 */}
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          {/* 欢迎信息 */}
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          {/* 登录链接 */}
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* 包含英雄图像的容器 */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
       {/* 在这里添加英雄图像 */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
        </div>
      </div>
    </main>
  );
}