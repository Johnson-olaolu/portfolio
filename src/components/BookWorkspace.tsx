import { useEffect } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileDown,
  Printer,
  ScrollText,
} from 'lucide-react';
import { AUTHOR_INFO, CHAPTER_SPREADS } from '../data/bookData';
import { BookSpreadRenderer } from './BookSpreads';

interface BookWorkspaceProps {
  currentSpread: number;
  direction: 'next' | 'prev';
  viewMode: 'book' | 'manuscript';
  onSelectSpread: (index: number) => void;
  onChangeViewMode: (mode: 'book' | 'manuscript') => void;
}

export function BookWorkspace({
  currentSpread,
  direction,
  viewMode,
  onSelectSpread,
  onChangeViewMode,
}: BookWorkspaceProps) {
  const totalSpreads = CHAPTER_SPREADS.length;
  const currentChapter = CHAPTER_SPREADS[currentSpread];
  const progressPct = Math.round((currentSpread / (totalSpreads - 1)) * 100);

  useEffect(() => {
    if (viewMode !== 'book') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT')
      ) {
        return;
      }
      if (e.key === 'ArrowRight' && currentSpread < totalSpreads - 1) {
        onSelectSpread(currentSpread + 1);
      } else if (e.key === 'ArrowLeft' && currentSpread > 0) {
        onSelectSpread(currentSpread - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSpread, totalSpreads, viewMode, onSelectSpread]);

  return (
    <main className="flex-1 py-6 sm:py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Reading Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#D6CEBE] print:hidden">
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="chapter-select" className="sr-only">
              Jump to chapter
            </label>
            <div className="relative inline-flex items-center max-w-full">
              <select
                id="chapter-select"
                value={currentSpread}
                onChange={(e) => {
                  onChangeViewMode('book');
                  onSelectSpread(Number(e.target.value));
                }}
                className="appearance-none w-full max-w-[15rem] sm:max-w-xs truncate pl-3 pr-8 py-1.5 text-xs font-mono leading-5 bg-[#FBF9F5] border border-[#D6CEBE] rounded-md text-[#1C1917] hover:border-[#B9AE99] focus:border-[#1E3A8A] focus:outline-none cursor-pointer transition-colors"
              >
                {CHAPTER_SPREADS.map((spread) => (
                  <option key={spread.id} value={spread.spreadNumber}>
                    {spread.label} — {spread.shortTitle}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2.5 w-3.5 h-3.5 text-[#57534E]"
                aria-hidden="true"
              />
            </div>

            {viewMode === 'book' && (
              <span className="font-mono text-xs text-[#57534E] tabular-nums">
                Spread {currentSpread + 1} of {totalSpreads}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Mode Switcher: Interactive Book vs Continuous Manuscript */}
            <div
              role="group"
              aria-label="Reading view mode"
              className="inline-flex items-center gap-1 p-1 bg-[#E2DDD4] rounded-md"
            >
              <button
                type="button"
                onClick={() => onChangeViewMode('book')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  viewMode === 'book'
                    ? 'bg-[#FBF9F5] text-[#1C1917] shadow-sm'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Book Spread</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeViewMode('manuscript')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  viewMode === 'manuscript'
                    ? 'bg-[#FBF9F5] text-[#1C1917] shadow-sm'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                <ScrollText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Full Manuscript</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#44403C] bg-[#FBF9F5] border border-[#D6CEBE] rounded-md hover:border-[#1C1917] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Reading Depth Progress Line */}
        {viewMode === 'book' && (
          <div className="h-[2px] w-full bg-[#DED8CE] overflow-hidden rounded-full print:hidden">
            <div
              className="h-full bg-[#1E3A8A] transition-all duration-200 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        )}

        {/* Active Book Spread OR Continuous Manuscript */}
        {viewMode === 'book' ? (
          <div className="space-y-6">
            <div
              key={`${currentChapter.id}-${direction}`}
              className={direction === 'next' ? 'animate-page-next' : 'animate-page-prev'}
            >
              <BookSpreadRenderer
                spreadIndex={currentSpread}
                onSelectSpread={onSelectSpread}
              />
            </div>

            {/* Bottom Page-Turning Controls */}
            <div className="flex items-center justify-between gap-4 pt-2 print:hidden">
              <button
                type="button"
                disabled={currentSpread === 0}
                onClick={() => onSelectSpread(currentSpread - 1)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded-md border border-[#D6CEBE] bg-[#FBF9F5] text-[#1C1917] hover:border-[#1C1917] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span>
                  {currentSpread > 0
                    ? `Prev: ${CHAPTER_SPREADS[currentSpread - 1].label}`
                    : 'Front Cover'}
                </span>
              </button>

              <p className="hidden sm:block font-mono text-[11px] text-[#78716C]">
                Use ← / → arrow keys to turn pages
              </p>

              <button
                type="button"
                disabled={currentSpread === totalSpreads - 1}
                onClick={() => onSelectSpread(currentSpread + 1)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded-md bg-[#1C1917] text-[#FBF9F5] hover:bg-[#1E3A8A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {currentSpread < totalSpreads - 1
                    ? `Next: ${CHAPTER_SPREADS[currentSpread + 1].label}`
                    : 'End of Volume'}
                </span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {CHAPTER_SPREADS.slice(1).map((spread) => (
              <div key={spread.id}>
                <BookSpreadRenderer
                  spreadIndex={spread.spreadNumber}
                  onSelectSpread={(idx) => {
                    onChangeViewMode('book');
                    onSelectSpread(idx);
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quiet Archival Footer */}
      <footer className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#D6CEBE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#78716C] print:hidden">
        <span>
          {AUTHOR_INFO.bookTitle} · {AUTHOR_INFO.fullName}
        </span>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={AUTHOR_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C1917] transition-colors"
          >
            GitHub
          </a>
          <a
            href={AUTHOR_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C1917] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={AUTHOR_INFO.cvPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#1E3A8A] hover:underline"
          >
            <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
            <span>PDF CV</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
