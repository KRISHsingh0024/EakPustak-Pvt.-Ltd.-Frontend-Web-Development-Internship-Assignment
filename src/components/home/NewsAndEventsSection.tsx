import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Bell, Clock, MapPin, X } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { NEWS_DATA } from '../../data/news';
import { EVENTS_DATA } from '../../data/events';
import type { NewsItem } from '../../types';

export const NewsAndEventsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Take top 3 news items and top 3 events
  const latestNews = NEWS_DATA.slice(0, 3);
  const upcomingEvents = EVENTS_DATA.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-brand-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Happenings"
          title="Latest News & Upcoming Events"
          description="Stay informed with vital administrative circulars, student achievements, and calendar highlights across our community."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Latest News & Notices (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold-light/40 flex items-center justify-center text-gold-dark">
                    <Bell className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy">
                    Latest News & Notices
                  </h3>
                </div>
                <Link
                  to="/events"
                  className="text-xs font-bold text-navy hover:text-gold-dark transition-colors inline-flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {latestNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedNews(item)}
                    className="p-5 rounded-xl border border-brand-border bg-slate-50/60 hover:bg-white hover:shadow-card hover:border-gold/40 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-navy text-gold-light">
                          {item.category}
                        </span>
                        <span className="text-xs text-brand-muted flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {item.formattedDate}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-navy group-hover:text-navy-secondary transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 flex items-center text-xs font-semibold text-gold-dark group-hover:translate-x-1 transition-transform">
                      <span>Read announcement details →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Upcoming Events (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold-light/40 flex items-center justify-center text-gold-dark">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy">
                    Upcoming Events
                  </h3>
                </div>
                <Link
                  to="/events"
                  className="text-xs font-bold text-navy hover:text-gold-dark transition-colors inline-flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 sm:p-5 rounded-xl border border-brand-border bg-slate-50/60 hover:bg-white hover:shadow-card hover:border-gold/40 transition-all duration-200 flex items-start gap-4 sm:gap-5 group"
                  >
                    {/* Calendar Date Block */}
                    <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-navy text-white flex flex-col items-center justify-center text-center shadow-sm group-hover:bg-navy-secondary transition-colors">
                      <span className="font-heading font-extrabold text-xl sm:text-2xl text-gold leading-none">
                        {evt.day}
                      </span>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-slate-300 mt-0.5">
                        {evt.month}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-semibold text-gold-dark bg-gold-light/40 px-2 py-0.5 rounded">
                          {evt.category}
                        </span>
                        <span className="text-xs text-brand-muted flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span className="line-clamp-1">{evt.location}</span>
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-navy group-hover:text-navy-secondary transition-colors mb-1">
                        {evt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                        {evt.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-navy">
            <button
              onClick={() => setSelectedNews(null)}
              aria-label="Close announcement detail"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded bg-navy text-gold-light text-xs font-bold uppercase tracking-wider">
                {selectedNews.category}
              </span>
              <span className="text-xs text-brand-muted">
                {selectedNews.formattedDate}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-navy">
              {selectedNews.title}
            </h3>

            <div className="text-sm text-brand-muted leading-relaxed space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
              <p>{selectedNews.content}</p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400">Sample School Circular</span>
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-lg bg-navy hover:bg-navy-secondary text-white text-xs font-semibold"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
