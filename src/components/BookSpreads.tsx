import { useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  FileDown,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import {
  AUTHOR_INFO,
  CERTIFICATIONS,
  CHAPTER_SPREADS,
  EDUCATION_RECORD,
  IMPACT_LEDGER,
  ROLES_DATA,
  SKILL_CATEGORIES,
  type RoleEntry,
} from '../data/bookData';

interface SpreadShellProps {
  leftFolio: string;
  rightFolio: string;
  runningHeaderLeft: string;
  runningHeaderRight: string;
  leftPage: ReactNode;
  rightPage: ReactNode;
}

function SpreadShell({
  leftFolio,
  rightFolio,
  runningHeaderLeft,
  runningHeaderRight,
  leftPage,
  rightPage,
}: SpreadShellProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FBF9F5] border border-[#D6CEBE] rounded-lg shadow-[0_18px_45px_-20px_rgba(28,25,23,0.22)] overflow-hidden">
      {/* Verso (Left Page) */}
      <div className="book-spine-left p-7 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[540px] lg:min-h-[640px] border-b lg:border-b-0 lg:border-r border-[#DED8CE]">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-[#78716C] pb-4 mb-7 border-b border-[#E8E2D7]">
            <span>{runningHeaderLeft}</span>
            <span className="tabular-nums">{leftFolio}</span>
          </div>
          {leftPage}
        </div>
        <div className="pt-6 mt-8 border-t border-[#EFEAE1] flex items-center justify-between text-[11px] font-mono text-[#A8A29E]">
          <span>{AUTHOR_INFO.shortName}</span>
          <span className="tabular-nums">{leftFolio}</span>
        </div>
      </div>

      {/* Recto (Right Page) */}
      <div className="book-spine-right p-7 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[540px] lg:min-h-[640px]">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-[#78716C] pb-4 mb-7 border-b border-[#E8E2D7]">
            <span>{runningHeaderRight}</span>
            <span className="tabular-nums">{rightFolio}</span>
          </div>
          {rightPage}
        </div>
        <div className="pt-6 mt-8 border-t border-[#EFEAE1] flex items-center justify-between text-[11px] font-mono text-[#A8A29E]">
          <span>{AUTHOR_INFO.bookTitle}</span>
          <span className="tabular-nums">{rightFolio}</span>
        </div>
      </div>
    </div>
  );
}

function RoleChapterSection({ entry }: { entry: RoleEntry }) {
  return (
    <div className="space-y-4">
      <div className="pb-3 border-b border-[#E8E2D7]">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-[#1C1917] tracking-tight">
            {entry.company}
          </h3>
          <span className="font-mono text-xs text-[#9A3412] tabular-nums">
            {entry.period}
          </span>
        </div>
        <p className="mt-1 text-sm text-[#57534E] flex flex-wrap items-center gap-2">
          <span className="font-medium text-[#1C1917]">{entry.role}</span>
          <span aria-hidden="true">·</span>
          <span>{entry.location}</span>
        </p>
      </div>

      <ul className="space-y-2.5 text-[14.5px] leading-[1.7] text-[#292524]">
        {entry.highlights.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="font-mono text-[11px] text-[#78716C] mt-1.5 shrink-0 tabular-nums"
              aria-hidden="true"
            >
              §{i + 1}
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="pt-2 text-xs font-mono text-[#78716C] leading-relaxed">
        Stack: {entry.stackNote}
      </p>
    </div>
  );
}

interface BookCoverProps {
  onOpenBook: () => void;
  onJumpToContents: () => void;
}

export function BookCover({ onOpenBook, onJumpToContents }: BookCoverProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative rounded-r-xl rounded-l-sm bg-[#182235] text-[#F7F3EA] border border-[#2C3A52] shadow-[0_28px_60px_-18px_rgba(24,34,53,0.48)] overflow-hidden">
        {/* Clothbound spine seam on left */}
        <div
          className="absolute inset-y-0 left-0 w-7 sm:w-9 bg-gradient-to-r from-[#0F1624] via-[#1D2A42] to-[#141D2E] border-r border-[#31415E]"
          aria-hidden="true"
        />

        <div className="pl-12 pr-8 py-12 sm:pl-16 sm:pr-14 sm:py-16 min-h-[580px] sm:min-h-[640px] flex flex-col justify-between">
          {/* Top Edition Header */}
          <div className="flex items-center justify-between gap-4 border-b border-[#334463] pb-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9BDA8]">
              {AUTHOR_INFO.edition}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9BDA8]">
              Engineering Memoir
            </span>
          </div>

          {/* Center Book Title Block */}
          <div className="my-10 space-y-6">
            <div className="border-y border-[#3B4E70] py-8 sm:py-10 space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#D8C5A0]">
                An Interactive Curriculum Vitae
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] tracking-tight text-[#FAF6EE] [text-wrap:balance]">
                {AUTHOR_INFO.bookTitle}
              </h1>
              <p className="font-display italic text-lg sm:text-xl text-[#D4CCB9] max-w-md leading-snug">
                {AUTHOR_INFO.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-md italic">
              “{AUTHOR_INFO.dedication}”
            </p>
          </div>

          {/* Bottom Author & Open Controls */}
          <div className="space-y-6 pt-4 border-t border-[#334463]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#94A3B8]">
                Written &amp; Engineered By
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-[#FAF6EE]">
                {AUTHOR_INFO.fullName}
              </p>
              <p className="text-xs font-mono text-[#CBD5E1] mt-0.5">
                {AUTHOR_INFO.title} · {AUTHOR_INFO.location}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBook}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-mono font-medium bg-[#E8DFCE] text-[#182235] rounded-md hover:bg-white transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Open the Book</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onJumpToContents}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-mono text-[#E8DFCE] border border-[#3B4E70] rounded-md hover:border-[#E8DFCE] hover:bg-[#22304A] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Table of Contents</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BookSpreadRendererProps {
  spreadIndex: number;
  onSelectSpread: (index: number) => void;
}

export function BookSpreadRenderer({
  spreadIndex,
  onSelectSpread,
}: BookSpreadRendererProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [readerName, setReaderName] = useState('');
  const [readerEmail, setReaderEmail] = useState('');
  const [readerNote, setReaderNote] = useState('');
  const [noteSubmitted, setNoteSubmitted] = useState(false);
  const [noteError, setNoteError] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(AUTHOR_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${AUTHOR_INFO.email}`;
    }
  };

  const handleSubmitNote = (e: FormEvent) => {
    e.preventDefault();
    if (!readerName.trim() || !readerEmail.trim() || !readerNote.trim()) {
      setNoteError('Please enter your name, email, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(readerEmail.trim())) {
      setNoteError('Please provide a valid email address.');
      return;
    }
    setNoteError('');
    setNoteSubmitted(true);
  };

  if (spreadIndex === 0) {
    return (
      <BookCover
        onOpenBook={() => onSelectSpread(1)}
        onJumpToContents={() => onSelectSpread(1)}
      />
    );
  }

  // Spread 1: Title Page & Table of Contents
  if (spreadIndex === 1) {
    return (
      <SpreadShell
        leftFolio="p. i"
        rightFolio="p. ii"
        runningHeaderLeft="Title & Colophon"
        runningHeaderRight="Table of Contents"
        leftPage={
          <div className="space-y-8 py-4">
            <div className="space-y-3 border-b border-[#DED8CE] pb-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9A3412]">
                {AUTHOR_INFO.edition}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                {AUTHOR_INFO.bookTitle}
              </h2>
              <p className="font-display italic text-lg text-[#57534E]">
                {AUTHOR_INFO.subtitle}
              </p>
            </div>

            <div className="space-y-2 text-sm text-[#44403C]">
              <p className="font-semibold text-[#1C1917] text-base">
                {AUTHOR_INFO.fullName}
              </p>
              <p>{AUTHOR_INFO.title}</p>
              <p className="text-[#78716C]">{AUTHOR_INFO.location}</p>
            </div>

            <dl className="space-y-2.5 pt-4 border-t border-[#E8E2D7] text-xs font-mono">
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#78716C]">Electronic Mail</dt>
                <dd>
                  <a
                    href={`mailto:${AUTHOR_INFO.email}`}
                    className="text-[#1E3A8A] hover:underline"
                  >
                    {AUTHOR_INFO.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#78716C]">Telephone</dt>
                <dd className="text-[#1C1917] tabular-nums">{AUTHOR_INFO.phone}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#78716C]">GitHub Archive</dt>
                <dd>
                  <a
                    href={AUTHOR_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E3A8A] hover:underline"
                  >
                    {AUTHOR_INFO.githubHandle}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#78716C]">LinkedIn Profile</dt>
                <dd>
                  <a
                    href={AUTHOR_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E3A8A] hover:underline"
                  >
                    {AUTHOR_INFO.linkedinHandle}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="pt-2">
              <a
                href={AUTHOR_INFO.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#1E3A8A] hover:underline"
              >
                <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Read or Download Original PDF Curriculum Vitae</span>
              </a>
            </div>
          </div>
        }
        rightPage={
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                Contents
              </h2>
              <p className="mt-1 text-xs font-mono text-[#78716C]">
                Select any chapter below to turn directly to its spread.
              </p>
            </div>

            <nav aria-label="Book table of contents">
              <ul className="divide-y divide-[#EDE8DF]">
                {CHAPTER_SPREADS.slice(2).map((chapter) => (
                  <li key={chapter.id}>
                    <button
                      type="button"
                      onClick={() => onSelectSpread(chapter.spreadNumber)}
                      className="w-full text-left py-2.5 group flex items-baseline justify-between gap-3 cursor-pointer hover:bg-[#F3EFE6]/70 px-2 -mx-2 rounded transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#9A3412] shrink-0">
                            {chapter.label}
                          </span>
                          <span className="font-display text-lg font-semibold text-[#1C1917] group-hover:text-[#1E3A8A] transition-colors truncate">
                            {chapter.shortTitle}
                          </span>
                        </div>
                        <p className="text-xs text-[#78716C] truncate mt-0.5">
                          {chapter.tocSubtitle}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-[#78716C] group-hover:text-[#1E3A8A] shrink-0 tabular-nums">
                        {chapter.leftFolio}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        }
      />
    );
  }

  // Spread 2: Prologue & Impact Ledger
  if (spreadIndex === 2) {
    return (
      <SpreadShell
        leftFolio="p. 01"
        rightFolio="p. 02"
        runningHeaderLeft="Prologue"
        runningHeaderRight="The Engineer’s Craft"
        leftPage={
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
                Prologue
              </p>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                The Engineer’s Craft
              </h2>
            </div>

            <p className="text-[15.5px] leading-[1.82] text-[#292524] first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-[#1C1917]">
              {AUTHOR_INFO.summary}
            </p>

            <blockquote className="py-5 my-6 border-y border-[#D6CEBE] font-display italic text-xl sm:text-2xl leading-snug text-[#1C1917]">
              “Modern software is rarely built on a blank slate; true craft is upgrading the engine while the train stays reliably on schedule.”
            </blockquote>

            <p className="text-[15px] leading-[1.78] text-[#44403C]">
              Across fintech, AI platforms, eCommerce, and developer tooling in Lagos and New York, every chapter of this book documents real systems shipped under production constraints—from USSD banking serving offline users to LangChain RAG pipelines and 600,000-user annual recaps.
            </p>
          </div>
        }
        rightPage={
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#78716C]">
                Measured Record
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-[#1C1917]">
                Index of Outcomes
              </h3>
            </div>

            <div className="divide-y divide-[#E8E2D7] border-y border-[#E8E2D7]">
              {IMPACT_LEDGER.map((item) => (
                <div
                  key={item.figure}
                  className="py-4 grid grid-cols-12 gap-3 items-baseline"
                >
                  <span className="col-span-5 font-mono text-base sm:text-lg font-medium text-[#1E3A8A] tabular-nums">
                    {item.figure}
                  </span>
                  <span className="col-span-7 text-sm text-[#44403C] leading-snug">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-[#78716C] leading-relaxed">
              Note: All metrics in this volume are drawn directly from production records across Nosh NG, Guideli AI, Global Impact IT Company, Mkobo Bank, Cargle.co, Zeedas Inc, and Nasco Group.
            </p>
          </div>
        }
      />
    );
  }

  // Spread 3: Chapter I — Foundations & The Plant Floor
  if (spreadIndex === 3) {
    return (
      <SpreadShell
        leftFolio="p. 03"
        rightFolio="p. 04"
        runningHeaderLeft="Chapter I · 2017–2020"
        runningHeaderRight="Foundations & The Plant Floor"
        leftPage={
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
                Chapter I
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                Foundations &amp; The Plant Floor
              </h2>
            </div>

            <div className="p-4 border-y border-[#D6CEBE] bg-[#F5F1E8]/60 space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-display text-lg font-semibold text-[#1C1917]">
                  {EDUCATION_RECORD.degree}
                </p>
                <span className="font-mono text-xs text-[#78716C] tabular-nums">
                  {EDUCATION_RECORD.date}
                </span>
              </div>
              <p className="text-xs font-mono text-[#1E3A8A]">
                {EDUCATION_RECORD.institution}
              </p>
              <p className="text-xs text-[#57534E] leading-relaxed pt-1">
                {EDUCATION_RECORD.reflection}
              </p>
            </div>

            <RoleChapterSection entry={ROLES_DATA.nasco} />
          </div>
        }
        rightPage={
          <div className="space-y-8">
            <RoleChapterSection entry={ROLES_DATA.freelance} />

            <div className="pt-6 border-t border-[#E8E2D7] space-y-3">
              <h4 className="font-display italic text-xl text-[#1C1917]">
                From Industrial Floors to Production Code
              </h4>
              <p className="text-[14.5px] leading-[1.78] text-[#44403C]">
                Managing 30+ contract staff on a factory floor in Jos and cutting formula calculation times from 20 minutes to under a minute instilled a permanent habit: measure bottlenecks first, automate repetitive friction second, and keep people aligned around clear specifications.
              </p>
              <p className="text-[14.5px] leading-[1.78] text-[#44403C]">
                By late 2018, that same engineering discipline found its permanent home on the web—shipping ten client applications across PHP, WordPress, React, and Node.js before graduation.
              </p>
            </div>
          </div>
        }
      />
    );
  }

  // Spread 4: Chapter II — Global Impact IT Company
  if (spreadIndex === 4) {
    const role = ROLES_DATA.globalImpact;
    return (
      <SpreadShell
        leftFolio="p. 05"
        rightFolio="p. 06"
        runningHeaderLeft="Chapter II · 2020–2024"
        runningHeaderRight="Leadership & AI Commerce"
        leftPage={
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
                Chapter II
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                Leadership &amp; AI Commerce
              </h2>
            </div>

            <div className="pb-3 border-b border-[#E8E2D7]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                  {role.company}
                </h3>
                <span className="font-mono text-xs text-[#9A3412] tabular-nums">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-[#57534E]">
                <span className="font-medium text-[#1C1917]">{role.role}</span> · {role.location}
              </p>
            </div>

            <p className="text-[15px] leading-[1.8] text-[#292524] first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-[#1C1917]">
              Four transformative years leading an engineering squad of six—bridging traditional web ecosystems with modern Next.js architectures, Retrieval-Augmented Generation (RAG) agents, and disciplined Agile delivery.
            </p>

            <ul className="space-y-3 text-[14.5px] leading-[1.7] text-[#292524]">
              {role.highlights.slice(0, 3).map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[#78716C] mt-1.5 shrink-0 tabular-nums">
                    §{i + 1}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        }
        rightPage={
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-[#1C1917]">
              Scaling Operations &amp; Legacy Migrations
            </h3>

            <ul className="space-y-3 text-[14.5px] leading-[1.7] text-[#292524]">
              {role.highlights.slice(3).map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[#78716C] mt-1.5 shrink-0 tabular-nums">
                    §{i + 4}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <blockquote className="py-4 my-4 border-y border-[#D6CEBE] font-display italic text-lg leading-snug text-[#1C1917]">
              “Integrating Groq AI, Ollama, and LangChain directly with our product database cut average order placement time by over 80%.”
            </blockquote>

            <p className="text-xs font-mono text-[#78716C] leading-relaxed">
              Stack: {role.stackNote}
            </p>
          </div>
        }
      />
    );
  }

  // Spread 5: Chapter III — Cargle.co & Zeedas Inc
  if (spreadIndex === 5) {
    return (
      <SpreadShell
        leftFolio="p. 07"
        rightFolio="p. 08"
        runningHeaderLeft="Chapter III · 2021–2023"
        runningHeaderRight="Founder’s Crucible & Frontend Craft"
        leftPage={
          <div className="space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
                Chapter III
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                Founder’s Crucible
              </h2>
            </div>

            <RoleChapterSection entry={ROLES_DATA.cargle} />
          </div>
        }
        rightPage={
          <div className="space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#78716C]">
                Parallel Dispatch
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                Real-Time Frontend Craft
              </h2>
            </div>

            <RoleChapterSection entry={ROLES_DATA.zeedas} />
          </div>
        }
      />
    );
  }

  // Spread 6: Chapter IV — Mkobo Bank
  if (spreadIndex === 6) {
    const role = ROLES_DATA.mkobo;
    return (
      <SpreadShell
        leftFolio="p. 09"
        rightFolio="p. 10"
        runningHeaderLeft="Chapter IV · 2022–2023"
        runningHeaderRight="Banking at National Scale"
        leftPage={
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
                Chapter IV
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                Banking at National Scale
              </h2>
            </div>

            <div className="pb-3 border-b border-[#E8E2D7]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                  {role.company}
                </h3>
                <span className="font-mono text-xs text-[#9A3412] tabular-nums">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-[#57534E]">
                <span className="font-medium text-[#1C1917]">{role.role}</span> · {role.location}
              </p>
            </div>

            <p className="text-[15px] leading-[1.8] text-[#292524] first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-[#1C1917]">
              Financial software demands unwavering reliability across every network condition—from broadband browser sessions to rural feature phones operating without mobile data.
            </p>

            <ul className="space-y-3 text-[14.5px] leading-[1.7] text-[#292524]">
              {role.highlights.slice(0, 2).map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[#78716C] mt-1.5 shrink-0 tabular-nums">
                    §{i + 1}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        }
        rightPage={
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-[#1C1917]">
              Offline USSD &amp; Computer Vision KYC
            </h3>

            <ul className="space-y-3 text-[14.5px] leading-[1.7] text-[#292524]">
              {role.highlights.slice(2).map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[#78716C] mt-1.5 shrink-0 tabular-nums">
                    §{i + 3}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 border-y border-[#D6CEBE] bg-[#F5F1E8]/60 space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#1E3A8A]">
                Field Impact Summary
              </p>
              <p className="text-xs text-[#44403C] leading-relaxed">
                40,000 → 600,000 addressable EarlyPay clients via Remita · 50,000+ offline users reached over USSD · In-house OpenCV liveliness verification replacing paid third-party APIs.
              </p>
            </div>

            <p className="text-xs font-mono text-[#78716C] leading-relaxed">
              Stack: {role.stackNote}
            </p>
          </div>
        }
      />
    );
  }

  // Spread 7: Chapter V — Guideli AI & Nosh NG
  if (spreadIndex === 7) {
    return (
      <SpreadShell
        leftFolio="p. 11"
        rightFolio="p. 12"
        runningHeaderLeft="Chapter V · 2024–2025"
        runningHeaderRight="Cloud Architecture & High Scale"
        leftPage={
          <div className="space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
                Chapter V
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                Cloud Architecture
              </h2>
            </div>

            <RoleChapterSection entry={ROLES_DATA.guideli} />
          </div>
        }
        rightPage={
          <div className="space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#78716C]">
                Most Recent Chapter
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                High-Volume Security &amp; Scale
              </h2>
            </div>

            <RoleChapterSection entry={ROLES_DATA.nosh} />
          </div>
        }
      />
    );
  }

  // Spread 8: Appendix A — Technical Lexicon & Certifications
  if (spreadIndex === 8) {
    return (
      <SpreadShell
        leftFolio="p. 13"
        rightFolio="p. 14"
        runningHeaderLeft="Appendix A"
        runningHeaderRight="Lexicon & Credentials"
        leftPage={
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
                Appendix A
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
                The Craftsperson’s Lexicon
              </h2>
              <p className="mt-1 text-xs text-[#78716C]">
                Complete index of production languages, frameworks, and infrastructure.
              </p>
            </div>

            <div className="space-y-5 divide-y divide-[#E8E2D7]">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.roman} className="pt-4 first:pt-0">
                  <h3 className="font-display text-base font-semibold text-[#1C1917]">
                    <span className="font-mono text-xs text-[#9A3412] mr-2">
                      {category.roman}.
                    </span>
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.7] text-[#44403C]">
                    {category.skills.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
        rightPage={
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#78716C]">
                Verified Credentials
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-[#1C1917]">
                Certifications
              </h3>

              <div className="mt-4 divide-y divide-[#E8E2D7] border-y border-[#E8E2D7]">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="py-4 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-display text-lg font-semibold text-[#1C1917]">
                        {cert.title}
                      </p>
                      <p className="text-xs text-[#57534E] mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs text-[#1E3A8A] shrink-0 tabular-nums">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                Academic Record
              </h3>
              <div className="mt-3 pt-4 border-t border-[#E8E2D7] space-y-1.5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display text-lg font-semibold text-[#1C1917]">
                    {EDUCATION_RECORD.degree}
                  </p>
                  <span className="font-mono text-xs text-[#78716C] shrink-0 tabular-nums">
                    {EDUCATION_RECORD.date}
                  </span>
                </div>
                <p className="text-sm text-[#1E3A8A]">{EDUCATION_RECORD.institution}</p>
                <p className="text-xs text-[#57534E] leading-relaxed pt-1">
                  {EDUCATION_RECORD.reflection}
                </p>
              </div>
            </div>
          </div>
        }
      />
    );
  }

  // Spread 9: Epilogue & Margin Correspondence
  return (
    <SpreadShell
      leftFolio="p. 15"
      rightFolio="p. 16"
      runningHeaderLeft="Epilogue"
      runningHeaderRight="Write in the Margin"
      leftPage={
        <div className="space-y-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9A3412]">
              Epilogue
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-[#1C1917] leading-tight [text-wrap:balance]">
              The Next Chapter
            </h2>
          </div>

          <p className="text-[15px] leading-[1.8] text-[#292524] first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-[#1C1917]">
            Thank you for reading through the chapters of my engineering career. I am currently open to Senior &amp; Staff Software Engineering roles, technical leadership engagements, and ambitious AI or fintech product builds.
          </p>

          <div className="divide-y divide-[#E8E2D7] border-y border-[#E8E2D7] text-sm">
            <div className="py-3.5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-xs font-mono text-[#78716C] block">Email</span>
                <a
                  href={`mailto:${AUTHOR_INFO.email}`}
                  className="font-medium text-[#1C1917] hover:text-[#1E3A8A] truncate block"
                >
                  {AUTHOR_INFO.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-[#F3EFE6] text-[#1C1917] rounded hover:bg-[#E7E0D3] transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1E3A8A]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`tel:${AUTHOR_INFO.phone}`}
              className="py-3.5 flex items-center justify-between gap-3 hover:text-[#1E3A8A] transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-[#78716C] block">Phone</span>
                <span className="font-mono text-sm tabular-nums">{AUTHOR_INFO.phone}</span>
              </div>
              <Phone className="w-4 h-4 text-[#78716C]" aria-hidden="true" />
            </a>

            <a
              href={AUTHOR_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 flex items-center justify-between gap-3 group hover:text-[#1E3A8A] transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-[#78716C] block">GitHub</span>
                <span className="font-medium">{AUTHOR_INFO.githubHandle}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#78716C] group-hover:text-[#1E3A8A]" aria-hidden="true" />
            </a>

            <a
              href={AUTHOR_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 flex items-center justify-between gap-3 group hover:text-[#1E3A8A] transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-[#78716C] block">LinkedIn</span>
                <span className="font-medium">{AUTHOR_INFO.linkedinHandle}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#78716C] group-hover:text-[#1E3A8A]" aria-hidden="true" />
            </a>
          </div>
        </div>
      }
      rightPage={
        <div className="space-y-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#78716C]">
              Correspondence
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-[#1C1917]">
              Write in the Margin
            </h3>
            <p className="mt-1 text-xs text-[#57534E]">
              Send a direct note regarding a role, architecture consultation, or collaboration.
            </p>
          </div>

          {noteSubmitted ? (
            <div className="p-6 border border-[#D6CEBE] bg-[#F5F1E8]/70 rounded-md space-y-4 text-center">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-[#1C1917]">
                  Note Ready to Send
                </h4>
                <p className="mt-1 text-xs text-[#57534E] leading-relaxed">
                  Thank you, {readerName}. Click below to send this letter directly through your email application.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                <a
                  href={`mailto:${AUTHOR_INFO.email}?subject=${encodeURIComponent(
                    `Reader Note from ${readerName}`
                  )}&body=${encodeURIComponent(
                    `${readerNote}\n\n— ${readerName} (${readerEmail})`
                  )}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#FBF9F5] bg-[#1E3A8A] rounded hover:bg-[#172554] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open Email Client</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setReaderName('');
                    setReaderEmail('');
                    setReaderNote('');
                    setNoteSubmitted(false);
                  }}
                  className="px-3.5 py-2 text-xs font-mono text-[#44403C] border border-[#D6CEBE] rounded hover:bg-[#EFEAE1] transition-colors cursor-pointer"
                >
                  Write Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitNote} className="space-y-4" noValidate>
              <div>
                <label htmlFor="reader-name" className="block text-xs font-mono text-[#57534E] mb-1">
                  Your Name
                </label>
                <input
                  id="reader-name"
                  type="text"
                  value={readerName}
                  onChange={(e) => setReaderName(e.target.value)}
                  placeholder="Hiring Lead / Founder"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D6CEBE] rounded text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="reader-email" className="block text-xs font-mono text-[#57534E] mb-1">
                  Email Address
                </label>
                <input
                  id="reader-email"
                  type="email"
                  value={readerEmail}
                  onChange={(e) => setReaderEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D6CEBE] rounded text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="reader-note" className="block text-xs font-mono text-[#57534E] mb-1">
                  Message
                </label>
                <textarea
                  id="reader-note"
                  rows={4}
                  value={readerNote}
                  onChange={(e) => setReaderNote(e.target.value)}
                  placeholder="Share a note about your team, role, or engineering challenge..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D6CEBE] rounded text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#1E3A8A] focus:outline-none resize-y"
                />
              </div>

              {noteError && (
                <p role="alert" className="text-xs font-mono text-[#9A3412]">
                  {noteError}
                </p>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-[#FBF9F5] bg-[#1C1917] rounded hover:bg-[#1E3A8A] transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Prepare Reader Note</span>
              </button>
            </form>
          )}
        </div>
      }
    />
  );
}
