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
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2 sm:gap-4 flex-1">
            <div className="text-center sm:text-left w-full">
              <div className="font-semibold text-sm sm:text-lg mb-0.5 sm:mb-1">Ready to detect contaminants instantly?</div>
              <div className="text-emerald-100 text-xs sm:text-sm hidden sm:block">Join organizations revolutionizing environmental testing</div>
            </div>
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
            >
              Request Demo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 flex-shrink-0 self-start sm:self-center -mt-1 sm:mt-0"
            aria-label="Close sticky bar"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
