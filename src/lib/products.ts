export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  condition: string;
  location: string;
  seller: string;
  postedAt: string;
  cover: "book" | "audio" | "desk" | "cycle";
};

export const categories = [
  { name: "教材书籍", icon: "▤" },
  { name: "数码影音", icon: "⌁" },
  { name: "宿舍生活", icon: "⌂" },
  { name: "运动出行", icon: "↗" },
  { name: "穿搭配饰", icon: "◇" },
  { name: "其他好物", icon: "＋" },
];

// 静态样例只用于搭建首页布局，后续会替换为服务端商品数据。
export const products: Product[] = [
  { id: "sample-1", title: "高数同济版上下册", price: 28, category: "教材书籍", condition: "九成新", location: "东区宿舍", seller: "小周同学", postedAt: "10 分钟前", cover: "book" },
  { id: "sample-2", title: "蓝牙头戴式耳机", price: 89, category: "数码影音", condition: "几乎全新", location: "图书馆附近", seller: "阿屿", postedAt: "32 分钟前", cover: "audio" },
  { id: "sample-3", title: "暖光宿舍台灯", price: 35, category: "宿舍生活", condition: "九成新", location: "南区宿舍", seller: "Mia", postedAt: "1 小时前", cover: "desk" },
  { id: "sample-4", title: "轻便通勤自行车", price: 260, category: "运动出行", condition: "正常使用痕迹", location: "西门", seller: "陈同学", postedAt: "2 小时前", cover: "cycle" },
];
