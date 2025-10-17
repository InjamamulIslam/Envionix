import { useState, useEffect } from 'react';

export default function DeviceShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const src = '/assets/device.jpg'; // place your high-res image at public/assets/device.jpg for best results

  // close on escape key when modal is open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', onKey);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', onKey);
      }
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
  <div className="max-w-[440px] md:max-w-[560px] w-full">
        <button
          aria-label="Open device image"
          onClick={() => setIsOpen(true)}
          className="w-full rounded-2xl overflow-hidden shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-200"
        >
            {!imgError ? (
            // attempt to load a file at /assets/device.jpg (you can put the provided image in public/assets/device.jpg)
            <img
              src={src}
              alt="Portable environmental test device with solar panel and LCD display"
              className="w-full h-auto object-cover bg-gray-100 rounded-lg"
              onError={() => setImgError(true)}
            />
          ) : (
            // fallback inline illustration so build/dev doesn't break if the asset is missing
            <div className="w-full h-56 md:h-72 lg:h-80 bg-gray-50 flex items-center justify-center rounded-lg">
              <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="10" y="10" width="200" height="120" rx="12" fill="#0f172a" />
                <rect x="30" y="20" width="160" height="60" rx="6" fill="#0ea5a4" />
                <rect x="34" y="86" width="60" height="12" rx="3" fill="#94a3b8" />
                <rect x="104" y="86" width="80" height="40" rx="6" fill="#0f172a" />
                <circle cx="40" cy="100" r="5" fill="#f59e0b" />
              </svg>
            </div>
          )}
        </button>

        <p className="sr-only">Click to open larger image of the device.</p>

        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            onClick={() => setIsOpen(false)}
          >
                <div className="relative max-w-[70vw] md:max-w-2xl w-full max-h-[70vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                  {!imgError ? (
                    <img
                      src={src}
                      alt="Device (large)"
                      className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-2xl"
                    />
                  ) : (
                    <div className="w-full bg-white p-6 rounded-lg shadow-2xl">
                      <p className="text-center text-gray-700">Device image not found. Add your image to <code>public/assets/device.jpg</code>.</p>
                    </div>
                  )}

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
          </div>
        )}
      </div>
    </div>
  );
}

