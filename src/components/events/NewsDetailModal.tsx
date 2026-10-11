import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import type { NewsItem } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && news) {
        onClose();
      }
    };

    if (news) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [news, onClose]);

  if (!news) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-md"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close circular details"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-navy/70 text-white hover:bg-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="w-5 h-5" />
        </button>

        {news.image && (
          <div className="relative aspect-[16/8] w-full bg-slate-900 overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-navy text-gold-light text-xs font-bold uppercase tracking-wider">
              {news.category}
            </span>
            <span className="text-xs text-brand-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {news.formattedDate}
            </span>
          </div>

          <h3 id="news-modal-title" className="font-heading font-extrabold text-xl sm:text-2xl text-navy">
            {news.title}
          </h3>

          <div className="text-brand-muted text-sm sm:text-base leading-relaxed space-y-3 border-t border-slate-100 pt-3">
            <p className="font-medium text-slate-700">{news.summary}</p>
            <p>{news.content}</p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-brand-border flex items-center justify-between">
          <span className="text-xs text-slate-400">Sample School Circular</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-navy hover:bg-navy-secondary text-white text-xs font-bold"
          >
            Close Announcement
          </button>
        </div>
      </div>
    </div>
  );
};
