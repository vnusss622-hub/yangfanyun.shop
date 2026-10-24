# 扬帆云（YFCloud）官网落地页

本项目为 `yfcloud.org` 官方落地页的 1:1 完整镜像与本地化实现，支持完全脱离外链资源的纯静态部署。

---

## 目录结构

```text
.
├── index.html                  # 首页（产品特性、价格套餐、用户评价、FAQ等）
├── web/                        # 用户中心 / 线路分流页面
│   ├── index.html              # 倒计时多线路选择与自动跳转页
│   ├── main/index.html         # 主线路静态跳转兜底页
│   └── backup/index.html       # 备用线路静态跳转兜底页
├── pages/                      # 次级内容页面
│   ├── about.html              # 关于我们
│   ├── contact.html            # 联系我们
│   ├── privacy.html            # 隐私政策
│   └── terms.html              # 服务条款
├── assets/                     # 静态资源包
│   ├── css/                    # Bootstrap 5、Bootstrap Icons、自定义样式
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap-icons.min.css
│   │   ├── style.css
│   │   ├── pages.css
│   │   └── fonts/              # Bootstrap Icons 离线字体文件 (.woff, .woff2)
│   ├── js/                     # JS 依赖包与交互脚本
│   │   ├── bootstrap.bundle.min.js
│   │   └── main.js
│   └── images/                 # 图标、Logo（含暗黑模式）、特性插图
│       ├── favicon.png
│       ├── logo.png
│       ├── logo-dark.png
│       ├── menu-dark.svg
│       ├── yfcloud_og.png
│       └── feature-1.png ~ feature-6.png
└── nginx.conf.example          # Nginx 生产环境配置示例（含 302 线路代理与缓存规则）
```

---

## 核心特性

1. **100% 完整复刻**：
   - 导航栏（响应式吸顶、移动端侧滑抽屉菜单 Offcanvas）
   - Hero 视觉区与核心 Slogan
   - 6 大产品特性卡片
   - 3 大价格套餐对比卡片（VIP1 / VIP2 推荐 / VIP3）
   - 真实用户反馈口碑墙
   - 常见疑问双栏折叠手风琴（FAQ Accordion）
   - 暗黑模式自动适配（跟随系统 `prefers-color-scheme: dark` 智能切换 Logo、导航与卡片背景）
   - 页脚动态版权年份与条款页面
2. **零外部网络依赖**：
   - 移除外部 CDN 依赖，Bootstrap、字体图标、样式表及图片全部本地化存储，保证极速秒开与离线可用。
   - 移除 Cloudflare 静态保护脚本，解密并保留真实客服邮箱 `support@yfcloud.org`。
3. **线路分流系统 (`/web`)**：
   - 内置智能倒计时 3 秒自动进入主线路；
   - 支持多线路自由切换（主线路、备用线路）；
   - 同时支持 Nginx 302 服务端跳转与纯前端纯静态文件跳转。

---

## 本地预览

可通过任何静态 Web 服务器直接启动，例如 Node.js：

```bash
# 启动本地开发服务
npx serve .
```

或使用 Python（如已安装）：

```bash
python -m http.server 8080
```

打开浏览器访问 `http://localhost:8080` 即可查看。

---

## 自定义修改说明

1. **修改注册/跳转链接**：
   - 当前已配置为：`https://tiziy01.ladderaff.com/#/?code=ycC1d2kC`。
   - 首页所有“登录”、“注册”、“立即使用”以及套餐“购买”按钮均已直接绑定该目标地址。
   - 若后续需要更换，全局搜索替换即可。
2. **修改网站名称或品牌**：
   - 搜索 `扬帆云` / `YFCloud` 全局替换即可。
3. **修改套餐价格与配置**：
   - 编辑 [index.html](file:///c:/Users/user/Desktop/yangfanyun.shop/index.html) 中的 `#pricing` 区块。
