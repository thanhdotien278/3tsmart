import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
const path = (relative) => fileURLToPath(new URL(relative, import.meta.url));

const photo = await sharp(path('../src/assets/photos/hero-living.jpg')).resize(420, 520, { fit: 'cover' }).png().toBuffer();
const logo = await sharp(path('../src/assets/brand/logo.png')).resize({ width: 240 }).png().toBuffer();
const background = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f2f6f6"/>
  <rect x="0" y="0" width="12" height="630" fill="#0cc6fa"/>
  <rect x="720" y="38" width="450" height="552" rx="16" fill="#e2e8f0"/>
</svg>`);
const copy = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <g font-family="DejaVu Sans, sans-serif">
    <text x="68" y="254" font-size="54" font-weight="700" fill="#07111f">Một ngôi nhà</text>
    <text x="68" y="324" font-size="54" font-weight="700" fill="#0275a8">thông minh.</text>
    <text x="68" y="384" font-size="27" fill="#475569">Thiết bị &amp; giải pháp đúng nhu cầu.</text>
    <rect x="68" y="436" width="595" height="70" rx="10" fill="#ff8a1f"/>
    <text x="92" y="480" font-size="27" font-weight="700" fill="#07111f">Tìm thiết bị. Trao đổi phương án.</text>
    <text x="68" y="570" font-size="24" fill="#1a3350">3tsmart.org · 0985 834 566</text>
    <rect x="930" y="530" width="206" height="42" rx="8" fill="#ffffff" opacity=".94"/>
    <text x="952" y="558" font-size="21" fill="#475569">Ảnh minh họa</text>
  </g>
</svg>`);
await sharp(background).composite([
  { input: photo, left: 735, top: 54 }, { input: logo, left: 68, top: 46 }, { input: copy },
]).jpeg({ quality: 90 }).toFile(path('../public/og-image.jpg'));
