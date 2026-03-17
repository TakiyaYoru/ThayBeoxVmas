# Hướng dẫn Deploy Portfolio lên Render

Code đã được push lên GitHub: https://github.com/TakiyaYoru/ThayBeoxVmas

## Bước 1: Đăng nhập Render

1. Truy cập [render.com](https://render.com)
2. Đăng nhập bằng **GitHub** (Sign in with GitHub)
3. Cho phép Render truy cập tài khoản GitHub của bạn

## Bước 2: Tạo Static Site mới

1. Trên Dashboard, bấm **New +** → chọn **Static Site**
2. Kết nối repository:
   - Nếu chưa kết nối: bấm **Connect account** để kết nối GitHub
   - Chọn repo **TakiyaYoru/ThayBeoxVmas**
   - Bấm **Connect**

## Bước 3: Cấu hình Deploy

| Trường | Giá trị |
|--------|---------|
| **Name** | `thaybeou40-portfolio` (hoặc tên bạn muốn) |
| **Branch** | `main` |
| **Root Directory** | *(để trống)* — code đã ở root của repo |
| **Build Command** | *(để trống)* — site tĩnh không cần build |
| **Publish Directory** | `.` hoặc để trống |

> **Lưu ý:** Vì repo root chính là thư mục portfolio (index.html ở root), không cần chỉnh Root Directory hay Publish Directory.

## Bước 4: Deploy

1. Bấm **Create Static Site**
2. Render sẽ tự động deploy lần đầu
3. Đợi 1–2 phút, khi status chuyển **Live** là xong

## Bước 5: Truy cập website

- URL mặc định: `https://thaybeou40-portfolio.onrender.com` (hoặc tên bạn đặt)
- Có thể đổi tên trong **Settings** → **Custom Domain** nếu muốn dùng domain riêng

---

## Cập nhật website sau này

Mỗi khi bạn push code mới lên GitHub:

```bash
cd "/Volumes/TakiyaDrive/WORK/03_ORGS/THẦY BEO U40/VMAS/tbd-portfolio"
git add -A
git commit -m "Mô tả thay đổi"
git push
```

Render sẽ tự động deploy lại (auto-deploy khi push lên branch `main`).

---

## Lưu ý

- **Free tier:** Site có thể "sleep" sau ~15 phút không có truy cập; lần truy cập đầu tiên sau đó có thể chậm 30–60 giây
- **Custom domain:** Vào Settings → Custom Domain để thêm domain riêng (miễn phí)
