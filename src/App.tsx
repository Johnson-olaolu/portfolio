import { useState } from 'react';
import { BookHeader } from './components/BookHeader';
import { BookWorkspace } from './components/BookWorkspace';

export default function App() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [viewMode, setViewMode] = useState<'book' | 'manuscript'>('book');

  const handleSelectSpread = (nextIndex: number) => {
    setDirection(nextIndex >= currentSpread ? 'next' : 'prev');
    setCurrentSpread(nextIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EBE6DF] text-[#1C1917]">
      <BookHeader
        currentSpread={currentSpread}
        viewMode={viewMode}
        onSelectSpread={handleSelectSpread}
        onEnsureBookMode={() => setViewMode('book')}
      />

      <BookWorkspace
        currentSpread={currentSpread}
        direction={direction}
        viewMode={viewMode}
        onSelectSpread={handleSelectSpread}
        onChangeViewMode={setViewMode}
      />
    </div>
  );
}
