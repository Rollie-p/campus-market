import type { Product } from "@/lib/products";

const coverStyles: Record<Product["cover"], string> = {
  book: "from-[#e2d9c5] to-[#b7a98d]",
  audio: "from-[#d6e0d8] to-[#a2b8a7]",
  desk: "from-[#e8dbc9] to-[#c8b197]",
  cycle: "from-[#d4dce5] to-[#a7b6c5]",
};

const coverIcons: Record<Product["cover"], string> = {
  book: "📚",
  audio: "🎧",
  desk: "💡",
  cycle: "🚲",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0">
      <a href="#goods" aria-label={`${product.title}，${product.price}元`} className={`relative flex aspect-[0.92] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${coverStyles[product.cover]} transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_30px_rgba(37,58,44,0.13)] sm:aspect-[1.04] sm:rounded-[1.4rem]`}>
        <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.55),transparent_45%)]" />
        <span aria-hidden="true" className="relative text-6xl drop-shadow-sm transition duration-300 group-hover:scale-105 sm:text-7xl">{coverIcons[product.cover]}</span>
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-[#5d6c60] backdrop-blur">{product.category}</span>
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/75 text-[#718074]" aria-label="收藏功能尚未实现">♡</span>
      </a>
      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2"><h3 className="truncate text-sm font-semibold text-[#26342a] sm:text-[15px]">{product.title}</h3><span className="shrink-0 text-sm font-bold text-[#315c41]">¥{product.price}</span></div>
        <p className="mt-1.5 truncate text-xs text-[#818b83]">{product.condition} · {product.location}</p>
        <p className="mt-3 flex items-center gap-1.5 text-[11px] text-[#939c94]"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e4eadf] text-[9px] text-[#55715c]">{product.seller.slice(0, 1)}</span>{product.seller}<span className="ml-auto">{product.postedAt}</span></p>
      </div>
    </article>
  );
}
