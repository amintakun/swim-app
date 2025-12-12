export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">🏊 آموزش شنا</h1>
            <nav className="space-x-6 space-x-reverse">
              <a href="#home" className="hover:text-blue-600">خانه</a>
              <a href="#book" className="hover:text-blue-600">رزرو</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <section id="home" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">بهترین کلاس شنا</h2>
          <p className="text-xl text-gray-600 mb-8">مربیان مجرب • رزرو آنلاین</p>
        </section>

        <section id="book" className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">📅 رزرو کلاس</h3>
          <div className="space-y-4">
            <select className="w-full p-4 border rounded-lg">
              <option>انتخاب مربی</option>
              <option>علی احمدی</option>
              <option>سارا محمدی</option>
            </select>
            <select className="w-full p-4 border rounded-lg">
              <option>انتخاب استخر</option>
              <option>استخر آزادی</option>
            </select>
            <input type="date" className="w-full p-4 border rounded-lg" />
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold">
              ثبت رزرو
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16 text-center">
        <p>© ۱۴۰۴ آموزش شنا</p>
      </footer>
    </div>
  )
}
