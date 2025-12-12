export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-sky-950/80 backdrop-blur-md border-b border-sky-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white text-xl">
              🏊‍♂️
            </span>
            <div className="leading-tight text-white">
              <p className="font-bold text-sm">آکادمی حرفه‌ای شنا</p>
              <p className="text-[11px] text-sky-200">کلاس‌های خصوصی و گروهی</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-sky-100">
            <a href="#programs" className="hover:text-white">برنامه‌ها</a>
            <a href="#pools" className="hover:text-white">استخرها</a>
            <a href="#book" className="px-4 py-1.5 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-400">
              رزرو کلاس
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* پس‌زمینه شبیه استخر */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900" />
          <div className="absolute inset-x-0 top-20 h-64 bg-[radial-gradient(circle_at_20%_20%,#38bdf8_0,#0f172a_55%),radial-gradient(circle_at_80%_0%,#22c55e_0,#0f172a_60%)] opacity-60" />
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/261050/pexels-photo-261050.jpeg')] bg-cover bg-center mix-blend-soft-light opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* متن کوتاه */}
          <div className="md:w-1/2 text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/60 bg-sky-900/60 px-3 py-1 text-xs text-sky-100 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              ثبت‌نام دوره زمستان ۱۴۰۴ باز است
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              از ترس آب تا  
              <span className="text-emerald-400"> شنای حرفه‌ای</span>
            </h1>
            <p className="text-sm sm:text-base text-sky-100/90 mb-6 max-w-md">
              کلاس‌های اصولی شنا برای کودکان و بزرگسالان، در استخرهای استاندارد و زیر نظر مربیان مجرب.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-bold text-sky-950 shadow-lg hover:bg-emerald-400"
              >
                رزرو اولین جلسه
              </a>
              <span className="text-[11px] text-sky-100/80">
                بدون پیش‌پرداخت • امکان لغو تا ۲۴ ساعت قبل از کلاس
              </span>
            </div>
          </div>

          {/* کارت استخر و زمان‌بندی */}
          <div className="md:w-1/2 w-full">
            <div className="rounded-3xl bg-sky-900/70 border border-sky-700/70 shadow-2xl p-5 space-y-4 backdrop-blur">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-sky-300">نزدیک‌ترین کلاس امروز</p>
                  <p className="text-lg font-semibold text-white">کلاس تکنیک کرال سینه</p>
                </div>
                <span className="rounded-full bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1">
                  سطح مبتدی
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-sky-100">
                <div className="rounded-2xl bg-sky-800/80 p-3 space-y-1">
                  <p className="text-[11px] text-sky-300">استخر</p>
                  <p className="font-semibold">استخر آزادی</p>
                  <p className="text-[11px] text-sky-300">آب گرم • عمق متغیر</p>
                </div>
                <div className="rounded-2xl bg-sky-800/80 p-3 space-y-1">
                  <p className="text-[11px] text-sky-300">زمان</p>
                  <p className="font-semibold">امشب، ساعت ۱۹:۳۰</p>
                  <p className="text-[11px] text-sky-300">ظرفیت باقیمانده: ۳ نفر</p>
                </div>
              </div>
              <button className="w-full rounded-2xl bg-emerald-500 text-sky-950 text-sm font-bold py-3 hover:bg-emerald-400">
                رزرو این کلاس
              </button>
              <p className="text-[11px] text-sky-300 text-center">
                یا از پایین صفحه کلاس و مربی دلخواه خود را انتخاب کنید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* برنامه‌ها */}
      <section id="programs" className="bg-sky-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-extrabold text-sky-950 mb-8">
            برای چه گروهی کلاس می‌خواهید؟
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white shadow-md p-5 border border-sky-100">
              <p className="text-3xl mb-2">🧒</p>
              <h3 className="font-bold mb-1">کودکان ۴ تا ۱۲ سال</h3>
              <p className="text-sm text-slate-600 mb-3">
                آموزش پایه‌ای و بازی‌محور برای ازبین‌بردن ترس از آب و یادگیری اصول تنفس.
              </p>
              <p className="text-xs text-emerald-600 font-semibold">محبوب‌ترین دوره</p>
            </div>
            <div className="rounded-2xl bg-white shadow-md p-5 border border-sky-100">
              <p className="text-3xl mb-2">👨‍💼</p>
              <h3 className="font-bold mb-1">بزرگسالان</h3>
              <p className="text-sm text-slate-600 mb-3">
                از صفر تا تکنیک‌های حرفه‌ای، مخصوص شاغلین با زمان‌بندی منعطف عصر و آخر هفته.
              </p>
              <p className="text-xs text-slate-500">کلاس‌های خصوصی و نیمه‌خصوصی</p>
            </div>
            <div className="rounded-2xl bg-white shadow-md p-5 border border-sky-100">
              <p className="text-3xl mb-2">🤿</p>
              <h3 className="font-bold mb-1">غواصی و تکنیک پیشرفته</h3>
              <p className="text-sm text-slate-600 mb-3">
                برای کسانی که شنا بلدن و می‌خوان وارد دنیای غواصی و استقامت در آب بشن.
              </p>
              <p className="text-xs text-slate-500">ظرفیت محدود در هر دوره</p>
            </div>
          </div>
        </div>
      </section>

      {/* فرم رزرو ساده */}
      <section id="book" className="bg-white py-14 border-t border-sky-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-2xl font-extrabold text-sky-950 mb-2">
            رزرو سریع کلاس شنا
          </h2>
          <p className="text-center text-sm text-slate-600 mb-8">
            فقط مربی، استخر و زمان را انتخاب کنید؛ بقیه هماهنگی‌ها با ما.
          </p>
          <div className="bg-sky-50 rounded-3xl shadow-md p-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <select className="w-full p-3 rounded-2xl border border-sky-200 text-sm">
                <option>انتخاب مربی</option>
                <option>علی احمدی (کرال سینه)</option>
                <option>سارا محمدی (بانوان و کودکان)</option>
                <option>محمد رضایی (غواصی)</option>
              </select>
              <select className="w-full p-3 rounded-2xl border border-sky-200 text-sm">
                <option>انتخاب استخر</option>
                <option>استخر آزادی</option>
                <option>استخر انقلاب</option>
                <option>استخر مجموعه البرز</option>
              </select>
              <input
                type="date"
                className="w-full p-3 rounded-2xl border border-sky-200 text-sm"
              />
            </div>
            <button className="w-full rounded-2xl bg-sky-950 text-sky-50 text-sm font-bold py-3 hover:bg-sky-800">
              ثبت درخواست رزرو
            </button>
            <p className="text-[11px] text-slate-500 text-center">
              پس از ثبت، هماهنگی نهایی و ارسال لوکیشن استخر از طریق واتساپ/تلگرام انجام می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-sky-950 text-sky-100 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© ۱۴۰۴ آکادمی حرفه‌ای شنا • تمامی حقوق محفوظ است.</p>
          <a
            href="https://t.me/YOUR_CHANNEL"
            className="text-sky-300 hover:text-emerald-300"
          >
            ارتباط مستقیم در تلگرام
          </a>
        </div>
      </footer>
    </div>
  )
}
