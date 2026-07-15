// ======================================
// UMAR BREND — SUPABASE SOZLAMALARI
// ======================================
//
// 1. https://supabase.com da bepul account oching
// 2. Yangi loyiha (project) yarating
// 3. Project Settings > API bo'limidan quyidagilarni oling:
//    - Project URL
//    - anon public key
// 4. Pastdagi ikkita qatorni o'zingizniki bilan almashtiring
//
// ⚠️ Bu ikkalasi ham "public" kalitlar — brauzerda ochiq turadi,
// shu sabab jadvallarga to'g'ridan-to'g'ri yozish ruxsatini
// faqat shu loyihaga xos, cheklangan tarzda bering (pastdagi
// SQL sozlamalarga qarang).

const SUPABASE_URL = "https://zttozkipyvcsvjzmqorw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_pfRZqArpmvBmAqwlHFYpeg_ZsQfZKRK";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);