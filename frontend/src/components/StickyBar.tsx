import { ArrowRight, X } from 'lucide-react';

interface StickyBarProps {
  show: boolean;
  onOpenModal: () => void;
  onClose: () => void;
}

export function StickyBar({ show, onOpenModal, onClose }: StickyBarProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl z-50 transition-transform duration-500 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-1">
            <div className="text-center sm:text-left">
              <div className="font-semibold text-lg mb-1">Ready to detect contaminants instantly?</div>
              <div className="text-emerald-100 text-sm">Join organizations revolutionizing environmental testing</div>
            </div>
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Request Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 flex-shrink-0"
            aria-label="Close sticky bar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
