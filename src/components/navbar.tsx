import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e9ebe6] bg-[#f8f8f5]/90 backdrop-blur-xl">
      <nav aria-label="主导航" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="拾集首页">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#236b4e] text-lg text-white">拾</span>
          <span><span className="block text-base font-bold tracking-tight">拾集</span><span className="block text-[9px] tracking-[0.14em] text-[#8b958d]">CAMPUS FINDS</span></span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-[#68746b] md:flex">
          <Link href="/#goods" className="transition hover:text-[#236b4e]">逛一逛</Link>
          <Link href="/#categories" className="transition hover:text-[#236b4e]">分类</Link>
          <Link href="/#about" className="transition hover:text-[#236b4e]">关于拾集</Link>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" disabled title="登录功能尚未实现" className="hidden cursor-not-allowed rounded-xl px-4 py-2 text-sm text-[#68746b] opacity-60 sm:block">登录</button>
          <button type="button" disabled title="发布功能尚未实现" className="cursor-not-allowed rounded-xl bg-[#236b4e] px-4 py-2.5 text-sm font-semibold text-white opacity-70">＋ <span className="hidden sm:inline">发布闲置</span><span className="sm:hidden">发布</span></button>
        </div>
      </nav>
    </header>
  );
}
