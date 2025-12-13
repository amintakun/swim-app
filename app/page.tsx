"use client"

import { useState } from "react"

const sliderImages = [
  "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
  "https://images.pexels.com/photos/261050/pexels-photo-261050.jpeg",
  "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg",
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Header */}
      <header className="bg-sky-900 text-sky-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sky-900 text-xl">
              🏊‍♂️
            </span>
            <div className="leading-tight">
              <p className="font-bold text-sm">آکادمی حرفه‌ای شنا</p>
              <p className="text-[11px] text-sky-200">کلاس‌های خصوصی و گروهی</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-5 text-xs">
            <a href="#programs" className="hover:text-cyan-300">برنامه‌ها</a>
            <a href="#book" className="hover:text-cyan-300">رزرو کلاس</a>
          </nav>
        </div>
      </header>

      {/* Hero با اسلایدر */}
      <section className="bg-sky-900 text-sky-50">
        <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              یادگیری شنا در استخرهای استاندارد
            </h1>
            <p className="text-sm sm:text-base text-sky-100 mb-6">
              کلاس‌های اصولی شنا برای کودکان و بزرگسالان، با مربیان مجرب و برنامه‌ریزی منعطف.
            </p>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold text-sky-900 shadow-md hover:bg-cyan-300"
            >
              رزرو اولین جلسه
            </a>
          </div>

          {/* اسلایدر عکس‌ها */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-sky-800 bg-sky-900/70">
            <div
              className="relative h-48 sm:h-56 w-full bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${sliderImages[current]})` }}
            >
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-sky-900/70 text-sky-50 text-xs px-2 py-1"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-sky-900/70 text-sky-50 text-xs px-2 py-1"
              >
                ›
              </button>

              <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1">
                {sliderImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 w-3 rounded-full ${
                      index === current ? "bg-cyan-400" : "bg-sky-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* انواع کلاس‌ها */}
      <section id="programs" className="bg-sky-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-extrabold text-sky-900 mb-3">
            ثبت‌نام ترم جدید کلاس‌های شنا
          </h2>
          <p className="text-center text-sm text-slate-600 mb-8">
            کلاس‌های متنوع برای همه؛ از آموزش رایگان تا دوره‌های تخصصی غواصی
          </p>

          <div className="bg-white rounded-3xl shadow-sm border border-sky-100 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  آموزش شنای رایگان
                </p>
                <p className="text-xs text-slate-600">
                  برگزاری کلاس‌های شنا معرفی در مجموعه شما
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  شنای آقایان
                </p>
                <p className="text-xs text-slate-600">
                  کلاس‌های عمومی و خصوصی آقایان در سانس‌های متنوع
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  شنای خصوصی
                </p>
                <p className="text-xs text-slate-600">
                  کلاس ۱ به ۱ با مربی اختصاصی در استخر انتخابی شما
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  شنای بانوان
                </p>
                <p className="text-xs text-slate-600">
                  ویژه بانوان، با مربیان خانم و سانس‌های امن و اختصاصی
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  شنای کودکان
                </p>
                <p className="text-xs text-slate-600">
                  آموزش شنا از پایه به صورت بازی‌محور برای ۴ تا ۱۲ سال
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  آموزش غواصی
                </p>
                <p className="text-xs text-slate-600">
                  دوره‌های مقدماتی تا پیشرفته، مناسب علاقه‌مندان جدی
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  آموزش سازمان‌ها
                </p>
                <p className="text-xs text-slate-600">
                  پکیج‌های ویژه برای شرکت‌ها و سازمان‌ها، به همراه گزارش پیشرفت
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-sm font-bold text-sky-900 mb-1">
                  شنای مدارس
                </p>
                <p className="text-xs text-slate-600">
                  همکاری با مدارس برای برگزاری کلاس شنا در طول سال تحصیلی
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-bold text-sky-900 hover:bg-cyan-400"
              >
                ثبت‌نام در کلاس‌های منتخب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* فرم رزرو */}
      <section id="book" className="bg-white py-12 border-t border-sky-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-2xl font-extrabold text-sky-900 mb-2">
            رزرو سریع کلاس شنا
          </h2>
          <p className="text-center text-sm text-slate-600 mb-8">
            مربی، استخر و تاریخ را انتخاب کنید؛ بقیه هماهنگی‌ها با ماست.
          </p>
          <div className="bg-sky-50 rounded-3xl shadow-sm p-6 space-y-4">
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
            <button className="w-full rounded-2xl bg-cyan-400 text-sky-900 text-sm font-bold py-3 hover:bg-cyan-300">
              ثبت درخواست رزرو
            </button>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-sky-900 text-sky-100 py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© ۱۴۰۴ آکادمی حرفه‌ای شنا • تمامی حقوق محفوظ است.</p>
          <a
            href="https://t.me/YOUR_CHANNEL"
            className="text-cyan-300 hover:text-cyan-200"
          >
            ارتباط در تلگرام
          </a>
        </div>
      </footer>
    </div>
  )
}
