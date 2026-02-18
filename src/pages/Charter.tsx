
import { useState, useEffect } from 'react'
import CHARTER_EN from '../docs/charter-english.pdf'
import CHARTER_SW from '../docs/charter-swahili.pdf'

const Charter = () => {
  const [language, setLanguage] = useState<'en' | 'sw'>('en')
  const [isMobile, setIsMobile] = useState(false)

  const pdfFile =
    language === 'en'
      ? CHARTER_EN
      : CHARTER_SW

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 pt-28 md:pt-8 pb-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black-800">
            Service Charter
          </h1>
          <p className="text-gray-600 mt-2">
            View our official service charter in your preferred language.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setLanguage('en')}
            className={`px-5 py-2 rounded-md font-medium transition ${
              language === 'en'
                ? 'bg-primary-900 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            English
          </button>

          <button
            onClick={() => setLanguage('sw')}
            className={`px-5 py-2 rounded-md font-medium transition ${
            //   language === 'sw'
            //     ? 'bg-primary-900 text-white'
            //     : 'bg-gray-200 text-gray-700'

            language === 'sw'
                ? 'bg-claret-900 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Kiswahili
          </button>
        </div>

        {/* Desktop View */}
        {!isMobile && (
          <div className="bg-white shadow-lg rounded-xl border overflow-hidden">
            <iframe
              src={pdfFile}
              className="w-full h-[85vh]"
              title="Service Charter"
            />
          </div>
        )}

        {/* Mobile View */}
        {isMobile && (
          <div className="bg-white shadow-lg rounded-xl border p-8 text-left">
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              {language === 'en'
                ? 'English Service Charter'
                : 'Hati ya Huduma (Kiswahili)'}
            </h2>

            <p className="text-gray-600 mb-6">
              Tap below to view the official charter document.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href={pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-900 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition"
              >
                View Charter
              </a>

              <a
                href={pdfFile}
                download
                className="border border-primary-900 text-primary-900 px-6 py-3 rounded-md hover:bg-primary-50 transition"
              >
                Download
              </a>
            </div>
          </div>
        )}

        {/* Future Audio */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">
            Audio Version (Coming Soon)
          </h3>

          {/*
          {language === 'en' && (
            <audio controls className="w-full">
              <source src="/audio/charter-en.mp3" type="audio/mpeg" />
            </audio>
          )}

          {language === 'sw' && (
            <audio controls className="w-full">
              <source src="/audio/charter-sw.mp3" type="audio/mpeg" />
            </audio>
          )}
          */}

          <p className="text-gray-500 text-sm">
            Audio versions will be added for improved accessibility.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Charter
