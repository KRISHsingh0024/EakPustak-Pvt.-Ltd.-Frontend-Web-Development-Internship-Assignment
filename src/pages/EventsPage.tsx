import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PrimaryButton, SecondaryButton } from '../components/common/Buttons';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { NewsDetailModal } from '../components/events/NewsDetailModal';
import { NEWS_DATA } from '../data/news';
import { EVENTS_DATA } from '../data/events';
import type { NewsItem, EventItem } from '../types';

export const EventsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'News & Events | EAK International School';
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeModalNews, setActiveModalNews] = useState<NewsItem | null>(null);

  const categories = ['All', 'Notice', 'Academic', 'Campus News', 'Circular'];

  // Top featured news item
  const featuredNews = NEWS_DATA.find((item: NewsItem) => item.featured) || NEWS_DATA[0];

  // Filtered news items
  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((item: NewsItem) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const displayedNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="space-y-0">
      {/* 1. Page Hero */}
      <PageHero
        title="News, Notices & School Events"
        subtitle="Stay informed about the activities, announcements, and important updates in our school community."
        breadcrumbItems={[{ label: 'News & Events' }]}
        badge="Community Dispatch"
        backgroundImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Featured Announcement Banner */}
      {featuredNews && (
        <section className="py-10 bg-brand-bg border-b border-brand-border">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-brand-border shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full bg-slate-900">
                <ImageWithFallback
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-navy-dark text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Announcement
                </span>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-navy text-gold-light">
                    {featuredNews.category}
                  </span>
                  <span className="text-xs text-brand-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {featuredNews.formattedDate}
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                  {featuredNews.title}
                </h2>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  {featuredNews.summary}
                </p>

                <div className="pt-2">
                  <PrimaryButton
                    size="md"
                    onClick={() => setActiveModalNews(featuredNews)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Read Full Notice
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Filter Bar & Search Controls */}
      <section className="bg-white border-b border-brand-border py-6 sticky top-[69px] sm:top-[77px] z-30 shadow-xs">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(6);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      isActive
                        ? 'bg-navy text-gold shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                    aria-pressed={isActive}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search circulars & notices..."
                className="w-full pl-10 pr-9 py-2 rounded-xl border border-brand-border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                aria-label="Search announcements"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy p-0.5 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Filtered News & Notices Grid */}
      <section className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading font-bold text-xl text-navy">
              Announcements & Circulars
            </h3>
            <span className="text-xs text-brand-muted">
              Showing <strong>{displayedNews.length}</strong> of <strong>{filteredNews.length}</strong> notices
            </span>
          </div>

          {filteredNews.length === 0 ? (
            <div className="bg-white rounded-2xl border border-brand-border p-12 text-center max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-navy">
                No announcements match your search
              </h4>
              <p className="text-sm text-brand-muted mt-2">
                Try searching with another keyword or resetting the category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-5 px-4 py-2 rounded-lg bg-navy text-white text-xs font-semibold hover:bg-navy-secondary transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedNews.map((item: NewsItem) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveModalNews(item)}
                    className="bg-white rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      {item.image && (
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-50" />
                          <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white uppercase tracking-wider bg-navy/80 px-2.5 py-0.5 rounded">
                            {item.category}
                          </span>
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-brand-muted mb-2">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.formattedDate}</span>
                        </div>

                        <h4 className="font-heading font-bold text-lg text-navy group-hover:text-gold-dark transition-colors mb-2 leading-snug">
                          {item.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-navy group-hover:text-gold-dark">
                      <span>Read Announcement</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <SecondaryButton
                    onClick={handleLoadMore}
                    icon={<ChevronDown className="w-4 h-4" />}
                  >
                    Load More Notices ({filteredNews.length - visibleCount} remaining)
                  </SecondaryButton>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 5. Upcoming School Events Grid */}
      <section className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Calendar Highlights"
            title="Upcoming School Events"
            description="Participate in our athletic championships, parent consultations, and cultural showcases."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS_DATA.map((evt: EventItem) => (
              <div
                key={evt.id}
                className="p-6 rounded-2xl border border-brand-border bg-brand-bg shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-navy text-white flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="font-heading font-extrabold text-2xl text-gold leading-none">
                        {evt.day}
                      </span>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-slate-300 mt-0.5">
                        {evt.month}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-gold-dark bg-gold-light/40 px-2.5 py-1 rounded-full border border-gold/40">
                      {evt.category}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-navy mb-2">
                    {evt.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                    {evt.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action */}
      <section className="py-16 sm:py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect With Our School Community
          </h2>
          <p className="mt-4 text-base text-slate-200 leading-relaxed">
            Interested in participating in school events or exploring student admissions?
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <PrimaryButton to="/admissions" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Admissions
            </PrimaryButton>
            <SecondaryButton to="/contact" variant="white-outline">
              Contact Us
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* News Detail Interactive Modal */}
      <NewsDetailModal
        news={activeModalNews}
        onClose={() => setActiveModalNews(null)}
      />
    </div>
  );
};
