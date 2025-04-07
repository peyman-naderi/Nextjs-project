// pages/404.tsx
import Link from "next/link"

export default function Custom404() {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gradient-to-br from-blue-100 to-red-100 px-6">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <svg
            className="mx-auto w-28 h-28 text-indigo-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.995-1.857L21 17V7c0-1.054-.816-1.918-1.857-1.995L19 5H5c-1.054 0-1.918.816-1.995 1.857L3 7v10c0 1.054.816 1.918 1.857 1.995L5 19z"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-xl font-medium text-gray-700 mb-2">صفحه پیدا نشد</h2>
        <p className="text-gray-500 mb-6">
          همچین صفحه‌ای توی سایت ما وجود نداره یا شاید حذف شده باشه.
        </p>
        <Link href="/">
          <button className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-200">
            برگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    </div>
  )
}
