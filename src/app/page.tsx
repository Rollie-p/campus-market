import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.08fr_0.92fr] md:items-center md:px-8 md:pb-24 md:pt-16">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce3d9] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#52665a]">
            <span className="h-2 w-2 rounded-full bg-[#70a781]" />
            给校园闲置一个新去处
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.12] tracking-[-0.055em] text-[#17211c] md:text-7xl">
            好物继续，<br />
            <span className="text-[#397a59]">故事接力。</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#6f7a72] md:text-lg">
            课本、耳机、宿舍小物……让用得上的东西，遇见下一个需要它的人。
          </p>
          <form action="#goods" className="mt-8 flex max-w-xl rounded-2xl border border-[#e3e7df] bg-white p-2 shadow-[0_12px_40px_rgba(37,58,44,0.07)]">
            <label className="sr-only" htmlFor="home-search">搜索校园好物</label>
            <span aria-hidden="true" className="flex w-12 items-center justify-center text-xl text-[#879188]">⌕</span>
            <input id="home-search" name="q" disabled placeholder="搜索功能将在后续开发中接入" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#a2aaa3] disabled:cursor-not-allowed" />
            <button type="submit" disabled title="搜索功能尚未实现" className="cursor-not-allowed rounded-xl bg-[#236b4e] px-5 py-3 text-sm font-semibold text-white opacity-70">找好物</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#818b83]">
            <span>大家在搜</span>
            <a className="rounded-full bg-[#eef1eb] px-3 py-1.5 hover:bg-[#e4e9df]" href="#goods">考研教材</a>
            <a className="rounded-full bg-[#eef1eb] px-3 py-1.5 hover:bg-[#e4e9df]" href="#goods">台灯</a>
            <a className="rounded-full bg-[#eef1eb] px-3 py-1.5 hover:bg-[#e4e9df]" href="#goods">自行车</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-2 top-2 h-40 w-40 rounded-full bg-[#e8efce] blur-3xl md:-right-4 md:top-0" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e4eadf] p-5 md:rounded-[2.5rem] md:p-7">
            <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-white/50" />
            <div className="absolute -right-1 -top-6 h-40 w-40 rounded-full border border-white/50" />
            <div className="relative flex items-center justify-between text-xs font-medium text-[#52665a]">
              <span>本周校园发现</span><span>01 / 03</span>
            </div>
            <div className="relative mt-5 flex min-h-[260px] items-end overflow-hidden rounded-[1.5rem] bg-[#cbd7c4] p-6 md:min-h-[330px] md:rounded-[1.8rem]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_38%,rgba(255,255,255,0.65),transparent_40%),linear-gradient(145deg,#d8e1d2,#b9cbb6)]" />
              <div className="absolute left-[28%] top-[14%] flex h-40 w-40 rotate-[-8deg] items-center justify-center rounded-[2rem] border border-white/70 bg-[#f2eee1] shadow-[0_24px_50px_rgba(44,67,48,0.18)] md:left-[30%] md:top-[12%] md:h-52 md:w-52">
                <span className="text-7xl md:text-8xl" aria-hidden="true">📷</span>
                <span className="absolute bottom-5 rounded-full bg-white/80 px-3 py-1 text-[10px] tracking-[0.2em] text-[#506252]">FILM CLUB</span>
              </div>
              <div className="relative flex w-full items-end justify-between text-[#25382b]">
                <div><p className="text-xs text-[#617365]">一台刚刚好的</p><p className="mt-1 text-2xl font-semibold tracking-tight">复古胶片机</p></div>
                <span className="rounded-full bg-[#d8f36a] px-3 py-2 text-xs font-semibold">¥ 280</span>
              </div>
            </div>
            <div className="relative mt-4 flex items-center justify-between text-xs text-[#627267]">
              <span>来自 · 林同学的闲置</span><span>轻轻接力 ↗</span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#e8ece6] bg-white px-4 py-3 shadow-lg md:-left-8">
            <p className="text-[10px] text-[#89928a]">让好物多一次被需要</p>
            <p className="mt-1 text-sm font-semibold text-[#315c41]">循环，从校园开始 ♻</p>
          </div>
        </div>
      </section>

      <section id="categories" className="border-y border-[#e9ebe6] bg-white/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div><p className="text-sm font-semibold">按类别逛逛</p><p className="mt-1 text-xs text-[#879188]">从校园日常里，找到刚好需要的</p></div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => <a key={category.name} href="#goods" className="rounded-full border border-[#e5e9e2] bg-white px-4 py-2 text-xs text-[#59675c] transition hover:border-[#b9cbb6] hover:text-[#236b4e]">{category.icon} <span className="ml-1">{category.name}</span></a>)}
          </div>
        </div>
      </section>

      <section id="goods" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="mb-7 flex items-end justify-between">
          <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#77917e]">JUST LISTED</p><h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">刚刚上架</h2><p className="mt-2 text-sm text-[#7d877e]">校园里的新鲜闲置，来看看有没有你的下一件</p></div>
          <a href="#goods" className="hidden rounded-full border border-[#e4e8e1] px-4 py-2 text-xs text-[#59675c] transition hover:bg-white md:block">浏览全部 <span aria-hidden="true">↗</span></a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <p className="mt-5 text-center text-xs text-[#9aa29a]">页面展示为初始化样例内容，尚未连接商品数据库。</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="flex flex-col gap-5 rounded-[2rem] bg-[#e8eddf] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
          <div><p className="text-xs font-medium tracking-[0.16em] text-[#6e866f]">PASS IT ON</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">闲置的好物，值得下一段故事。</h2><p className="mt-2 text-sm text-[#718074]">发布功能将在后续开发阶段接入。</p></div>
          <a href="#goods" className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#236b4e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#174b38]">看看校园好物 <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <footer id="about" className="border-t border-[#e7e9e4] px-5 py-6 text-center text-xs text-[#929b93]">拾集 · 让校园闲置继续发光</footer>
    </main>
  );
}
