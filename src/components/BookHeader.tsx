import { useState } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { AUTHOR_INFO } from '../data/bookData';

interface BookHeaderProps {
  currentSpread: number;
  viewMode: 'book' | 'manuscript';
  onSelectSpread: (spreadIndex: number) => void;
  onEnsureBookMode: () => void;
}

export function BookHeader({
  currentSpread,
  viewMode,
  onSelectSpread,
  onEnsureBookMode,
}: BookHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavJump = (spreadIndex: number) => {
    onEnsureBookMode();
    onSelectSpread(spreadIndex);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Cover', spread: 0, active: viewMode === 'book' && currentSpread === 0 },
    { label: 'Contents', spread: 1, active: viewMode === 'book' && currentSpread === 1 },
    {
      label: 'Chapters',
      spread: 2,
      active: viewMode === 'book' && currentSpread >= 2 && currentSpread <= 8,
    },
    { label: 'Epilogue', spread: 9, active: viewMode === 'book' && currentSpread === 9 },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#DED8CE] print:hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleNavJump(0)}
          className="font-display text-xl font-semibold tracking-tight text-[#1C1917] hover:text-[#1E3A8A] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
        >
          My Life Is a Book
        </button>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="Book navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534E]"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavJump(item.spread)}
              className={`relative py-1 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                item.active
                  ? 'text-[#1C1917] after:w-full'
                  : 'hover:text-[#1C1917] after:w-0 hover:after:w-full'
              } after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#1E3A8A] after:transition-all after:duration-150`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={AUTHOR_INFO.cvPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#FBF9F5] bg-[#1C1917] rounded-md hover:bg-[#1E3A8A] transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Original CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#44403C] hover:text-[#1C1917] hover:bg-[#EFEAE1] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DED8CE] bg-[#FBF9F5] px-5 py-4">
          <nav aria-label="Mobile book navigation" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavJump(item.spread)}
                className={`text-left py-2.5 text-base font-medium border-b border-[#EFEAE1] last:border-none cursor-pointer ${
                  item.active ? 'text-[#1E3A8A]' : 'text-[#44403C]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={AUTHOR_INFO.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-mono font-medium text-[#FBF9F5] bg-[#1C1917] rounded-md hover:bg-[#1E3A8A] transition-colors"
            >
              <FileDown className="w-4 h-4" aria-hidden="true" />
              <span>Original CV (PDF)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
