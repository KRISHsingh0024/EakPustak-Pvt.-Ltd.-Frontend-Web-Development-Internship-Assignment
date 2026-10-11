import React, { useEffect } from 'react';
import { ArrowRight, Eye, Target, HeartHandshake } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PrimaryButton, SecondaryButton } from '../components/common/Buttons';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { PrincipalMessageSection } from '../components/home/PrincipalMessageSection';
import { CORE_VALUES } from '../data/school';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About EAK International School';
  }, []);

  const campusPhotos = [
    {
      title: "Campus Central Atrium",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      category: "Architecture"
    },
    {
      title: "Interactive Smart Classrooms",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
      category: "Learning"
    },
    {
      title: "Two-Story Media Center & Library",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      category: "Research"
    },
    {
      title: "Advanced STEM Laboratories",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      category: "Sciences"
    },
    {
      title: "FIFA-Standard Athletics Complex",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      category: "Athletics"
    },
    {
      title: "Performing Arts Auditorium",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      category: "Arts"
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Page Hero */}
      <PageHero
        title="About EAK International School"
        subtitle="A learning community built around curiosity, character, and opportunity."
        breadcrumbItems={[{ label: 'About Us' }]}
        badge="Our Heritage & Philosophy"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Quick Jump Sub-Navigation */}
      <nav aria-label="About Page Sections" className="bg-white border-b border-brand-border sticky top-[69px] sm:top-[77px] z-30 shadow-xs">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto py-3 text-xs sm:text-sm font-heading font-semibold text-slate-600 no-scrollbar">
            <a href="#story" className="hover:text-gold-dark whitespace-nowrap transition-colors">Our Story</a>
            <a href="#vision" className="hover:text-gold-dark whitespace-nowrap transition-colors">Vision, Mission & Values</a>
            <a href="#principal" className="hover:text-gold-dark whitespace-nowrap transition-colors">Principal's Message</a>
            <a href="#campus" className="hover:text-gold-dark whitespace-nowrap transition-colors">Our Campus</a>
            <a href="#milestones" className="hover:text-gold-dark whitespace-nowrap transition-colors">Milestones</a>
          </div>
        </div>
      </nav>

      {/* 2. Our Story */}
      <section id="story" className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
                Founding Journey
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                An Educational Vision Dedicated to the Whole Child
              </h2>
              <div className="text-brand-muted text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Established in 2001, EAK International School began with a clear aspiration: to craft a learning sanctuary that harmonizes timeless moral character with contemporary academic rigor. Over two decades later, that seed of purpose has blossomed into a vibrant K–12 institution.
                </p>
                <p>
                  We recognize that true intelligence is not merely the retention of facts, but the capability to ask meaningful questions, collaborate across diverse viewpoints, and confront complex global challenges with calm empathy.
                </p>
                <p>
                  Our campus is purposefully designed as a home away from home, where each child is celebrated for their individuality, mentored by passionate faculty, and empowered to discover their authentic calling.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <PrimaryButton to="/admissions" icon={<ArrowRight className="w-4 h-4" />}>
                  Join Our Community
                </PrimaryButton>
              </div>
            </div>

            {/* Story Photograph */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-brand-border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                  alt="EAK International School Modern Campus Exterior"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Values */}
      <section id="vision" className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our North Star"
            title="Vision, Mission & Guiding Values"
            description="The foundational principles that illuminate every lesson, interaction, and institutional milestone."
            align="center"
          />

          {/* 3 Core Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-6 shadow-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-navy mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  To help learners grow into thoughtful, confident, and capable individuals who contribute purposefully to an interconnected, compassionate world.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">Aspiration for Tomorrow</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-navy mb-3">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  To provide a supportive, stimulating environment that encourages deep knowledge, fearless creativity, natural curiosity, and active social responsibility.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">Our Daily Commitment</span>
              </div>
            </div>

            {/* Core Values Summary */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-6 shadow-sm">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-navy mb-3">
                  Core Values
                </h3>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  Integrity, Respect, Curiosity, Empathy, Excellence, and Collaboration form the immutable bedrock of our pedagogical culture.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">Ethical Compass</span>
              </div>
            </div>
          </div>

          {/* Detailed 6 Core Values Grid */}
          <div className="pt-6">
            <h4 className="font-heading font-bold text-lg text-center text-navy mb-6">
              Our 6 Pillars of Character Development
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CORE_VALUES.map((val) => (
                <div
                  key={val.title}
                  className="bg-white p-4 rounded-xl border border-brand-border shadow-xs text-center flex flex-col items-center hover:border-gold/50 transition-colors"
                >
                  <span className="font-heading font-bold text-sm text-navy mb-1">{val.title}</span>
                  <span className="text-[11px] text-brand-muted leading-tight">{val.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full Principal's Message Section */}
      <div id="principal">
        <PrincipalMessageSection isFull={true} />
      </div>

      {/* 5. Campus Overview Photographic Grid */}
      <section id="campus" className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Environment"
            title="Our Dynamic Campus Environment"
            description="Purpose-built infrastructure designed to foster collaboration, creative discovery, and student wellbeing."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-brand-border shadow-card hover:shadow-card-hover transition-all"
              >
                <ImageWithFallback
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold text-navy-dark inline-block mb-1">
                    {photo.category}
                  </span>
                  <h4 className="font-heading font-bold text-base text-white">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <SecondaryButton to="/facilities" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Facilities Catalog
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* 6. Key Statistics & Milestones */}
      <section id="milestones" className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Milestones"
            title="Educational Vision by the Numbers"
            description="Illustrative progress indicators reflecting our dedication to educational excellence."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card text-center">
              <span className="font-heading font-extrabold text-4xl text-navy block">25+</span>
              <span className="font-heading font-bold text-sm text-navy-secondary mt-1 block">Years of Educational Vision</span>
              <p className="text-xs text-brand-muted mt-2">Guiding generations with passion and purpose.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card text-center">
              <span className="font-heading font-extrabold text-4xl text-navy block">4</span>
              <span className="font-heading font-bold text-sm text-navy-secondary mt-1 block">Progressive Stages</span>
              <p className="text-xs text-brand-muted mt-2">Primary through Senior Secondary streams.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card text-center">
              <span className="font-heading font-extrabold text-4xl text-navy block">30+</span>
              <span className="font-heading font-bold text-sm text-navy-secondary mt-1 block">Co-Curricular Clubs</span>
              <p className="text-xs text-brand-muted mt-2">Athletics, robotics, arts, and debate.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card text-center">
              <span className="font-heading font-extrabold text-4xl text-navy block">100%</span>
              <span className="font-heading font-bold text-sm text-navy-secondary mt-1 block">Student Well-being Focus</span>
              <p className="text-xs text-brand-muted mt-2">Holistic pastoral care and individual advising.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call to Action Banner */}
      <section className="py-16 sm:py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-navy-secondary text-gold-light border border-gold/40 mb-4 inline-block">
            Take the Next Step
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            Discover the EAK Learning Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
            We invite you to tour our classrooms, explore our laboratory spaces, and speak with our leadership team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/academics" icon={<ArrowRight className="w-4 h-4" />}>
              View Academic Pathways
            </PrimaryButton>
            <SecondaryButton to="/admissions" variant="white-outline">
              Explore Admissions
            </SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
};
