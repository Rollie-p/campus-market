# 拾集 · 校园二手交易网站

校园二手交易网站的第一版前端骨架，使用 Next.js App Router、TypeScript 和 Tailwind CSS。当前首页和商品卡片使用静态样例数据，只用于展示页面结构；登录、发布、收藏、搜索查询和交易流程尚未接入。

## 本地运行

需要 Node.js 20.9 或更新版本，以及 npm。

```bash
npm install
npm run dev
```

浏览器打开 <http://localhost:3000>。

## 可用命令

```bash
npm run lint       # ESLint 代码检查
npm run typecheck  # TypeScript 类型检查
npm run build      # 生产构建
npm run start      # 启动生产服务器（先运行 build）
```

## 目录

- `src/app/`：页面、全局布局和全局样式。
- `src/components/`：导航栏、商品卡片等可复用界面组件。
- `src/lib/`：共享类型与当前的静态商品样例数据。
- 静态资源目录可在需要放置公开图片或图标时创建；用户上传图片不应直接存放在项目目录中。
- `docs/`：项目需求和架构文档存放位置。

## 当前项目文档状态

初始化时仓库中没有 `docs/requirements.md` 或 `docs/architecture.md`，所以本次无法从当前项目读取它们。请将已确认的需求和架构文档放入 `docs/`，再继续实现业务。

## 环境变量与密钥

当前骨架不需要 API Key 或其他密钥。未来新增本地配置时使用 `.env.local`，不要提交真实密钥；`.gitignore` 已忽略 `.env` 文件。
