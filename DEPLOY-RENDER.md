# Hướng dẫn Deploy Portfolio lên Render

Code đã được push lên GitHub: https://github.com/TakiyaYoru/ThayBeoxVmas

---

## ⚠️ Quan trọng: Chọn **Static Site**, KHÔNG phải Web Service

Portfolio là site tĩnh (HTML/CSS/JS), **không** dùng Node.js. Nếu tạo Web Service với `yarn`/`yarn start` sẽ bị lỗi.

---

## Bước 1: Đăng nhập Render

1. Truy cập [render.com](https://render.com)
2. Đăng nhập bằng **GitHub** (Sign in with GitHub)
3. Cho phép Render truy cập tài khoản GitHub của bạn

## Bước 2: Tạo Static Site mới

1. Trên Dashboard, bấm **New +** → chọn **Static Site** (không chọn Web Service)
2. Kết nối repository:
   - Nếu chưa kết nối: bấm **Connect account** để kết nối GitHub
   - Chọn repo **TakiyaYoru/ThayBeoxVmas**
   - Bấm **Connect**

## Bước 3: Cấu hình Deploy

| Trường | Giá trị |
|--------|---------|
| **Name** | `thaybeou40-portfolio` (hoặc tên bạn muốn) |
| **Branch** | `main` |
| **Root Directory** | *(để trống)* |
| **Build Command** | *(để trống)* — site tĩnh không cần build |
| **Publish Directory** | `.` hoặc để trống |

> **Lưu ý:** Vì repo root chính là thư mục portfolio (index.html ở root), không cần chỉnh Root Directory hay Publish Directory.

## Bước 4: Deploy

1. Bấm **Create Static Site**
2. Render sẽ tự động deploy lần đầu
3. Đợi 1–2 phút, khi status chuyển **Live** là xong

## Bước 5: Truy cập website

- URL mặc định: `https://thaybeou40-portfolio.onrender.com` (hoặc tên bạn đặt)

---

## Bước 6: Gắn domain thaybeou40.online

Sau khi deploy xong:

1. Vào **Dashboard** → chọn service **thaybeou40-portfolio**
2. Vào **Settings** → kéo xuống **Custom Domains**
3. Bấm **Add Custom Domain**
4. Nhập `thaybeou40.online` và `www.thaybeou40.online`
5. Render sẽ hiển thị hướng dẫn DNS — thường là:
   - **Root domain (@):** CNAME `thaybeou40.online` → `thaybeou40-portfolio.onrender.com` (hoặc IP mà Render cung cấp)
   - **www:** CNAME `www` → `thaybeou40-portfolio.onrender.com`

### Cập nhật DNS tại nhà cung cấp domain

Domain của bạn dùng nameserver: `ns1.dns-parking.com`, `ns2.dns-parking.com`

**Xóa** các record cũ (A record `2.57.91.91`, CNAME www → thaybeou40.online) và **thêm** theo hướng dẫn Render:

| Loại | Tên | Nội dung |
|------|-----|----------|
| CNAME | www | `thaybeou40-portfolio.onrender.com` *(hoặc giá trị Render hiển thị)* |
| CNAME | @ | `thaybeou40-portfolio.onrender.com` *(nếu nhà cung cấp hỗ trợ CNAME cho root)* |

> **Lưu ý:** Một số nhà cung cấp không cho CNAME ở root (@). Khi đó Render sẽ cung cấp **A record** (IP) để bạn trỏ @ đến IP đó. Làm đúng theo hướng dẫn trong màn hình Custom Domain của Render.

---

## Cập nhật website sau này

```bash
cd "/Volumes/TakiyaDrive/WORK/03_ORGS/THẦY BEO U40/VMAS/tbd-portfolio"
git add -A
git commit -m "Mô tả thay đổi"
git push
```

Render sẽ tự động deploy lại khi push lên branch `main`.

---

## Lưu ý

- **Free tier:** Site có thể "sleep" sau ~15 phút không có truy cập; lần truy cập đầu tiên sau đó có thể chậm 30–60 giây
- **DNS propagation:** Sau khi sửa DNS, có thể mất 5 phút – 48 giờ để cập nhật toàn cầu
