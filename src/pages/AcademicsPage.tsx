import React, { useEffect } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Atom,
  Palette,
  Code,
  Trophy,
  Compass,
  HelpCircle,
  Briefcase,
  Users,
  Monitor,
  UserCheck,
  Brain,
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PrimaryButton, SecondaryButton } from '../components/common/Buttons';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import {
  ACADEMIC_PROGRAMS,
  CURRICULUM_CATEGORIES,
  TEACHING_METHODOLOGIES,
  CO_CURRICULAR_ACTIVITIES,
  ACADEMIC_ACHIEVEMENTS,
} from '../data/academics';
import type { AcademicProgram, AchievementItem } from '../types';

export const AcademicsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academics | EAK International School';
  }, []);

  const getMethodIcon = (iconName: string) => {
    switch (iconName) {
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-gold" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-gold" />;
      case 'Users':
        return <Users className="w-5 h-5 text-gold" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-gold" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-gold" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-gold" />;
      default:
        return <BookOpen className="w-5 h-5 text-gold" />;
    }
  };

  const getCurriculumIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6 text-gold-dark" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-gold-dark" />;
      case 'Code':
        return <Code className="w-6 h-6 text-gold-dark" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-gold-dark" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-gold-dark" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-gold-dark" />;
      default:
        return <BookOpen className="w-6 h-6 text-gold-dark" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Page Hero */}
      <PageHero
        title="Learning for Every Stage of the Journey"
        subtitle="Explore the academic pathways, learning methods, and opportunities that support student development."
        breadcrumbItems={[{ label: 'Academics' }]}
        badge="Holistic Pedagogy"
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Quick Jump Sub-Navigation */}
      <nav aria-label="Academics Page Sections" className="bg-white border-b border-brand-border sticky top-[69px] sm:top-[77px] z-30 shadow-xs">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto py-3 text-xs sm:text-sm font-heading font-semibold text-slate-600 no-scrollbar">
            <a href="#structure" className="hover:text-gold-dark whitespace-nowrap transition-colors">Academic Structure</a>
            <a href="#curriculum" className="hover:text-gold-dark whitespace-nowrap transition-colors">Curriculum Framework</a>
            <a href="#methodology" className="hover:text-gold-dark whitespace-nowrap transition-colors">Teaching Methodology</a>
            <a href="#cocurricular" className="hover:text-gold-dark whitespace-nowrap transition-colors">Co-curricular Programs</a>
            <a href="#achievements" className="hover:text-gold-dark whitespace-nowrap transition-colors">Recognition</a>
          </div>
        </div>
      </nav>

      {/* 2. Academic Structure (4 Substantial Programs) */}
      <section id="structure" className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Developmental Continuum"
            title="Our Academic Structure"
            description="A cohesive, sequential journey designed to nurture curiosity into conceptual mastery and self-directed scholarly pursuit."
            align="center"
          />

          <div className="space-y-12">
            {ACADEMIC_PROGRAMS.map((prog: AcademicProgram, index: number) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={prog.id}
                  id={prog.id}
                  className="bg-white rounded-2xl border border-brand-border shadow-card overflow-hidden p-6 sm:p-8 lg:p-10"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Left Column (or Right on Alternate): Content */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-navy text-gold-light text-xs font-bold uppercase tracking-wider">
                          {prog.grades}
                        </span>
                        <span className="text-xs font-semibold text-brand-muted">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                        {prog.title}
                      </h3>

                      <p className="font-semibold text-sm text-gold-dark">
                        {prog.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2.5">
                          Key Learning Focus Areas:
                        </h4>
                        <ul className="space-y-2">
                          {prog.focusPoints.map((point: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {prog.curriculumHighlights && (
                        <div className="pt-3 flex flex-wrap gap-2">
                          {prog.curriculumHighlights.map((hl: string, idx: number) => (
                            <span
                              key={idx}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-navy-secondary border border-slate-200"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Column: High Quality Photography */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated border border-brand-border">
                        <ImageWithFallback
                          src={prog.image}
                          alt={`${prog.title} students engaged in learning at EAK`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-40" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-xs text-white bg-navy/80 backdrop-blur-sm px-3 py-1 rounded-md font-semibold">
                            {prog.title} Cohort
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Curriculum Framework */}
      <section id="curriculum" className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Scope"
            title="Balanced Curriculum Framework"
            description="Our proposed academic framework emphasizes interdisciplinary depth, combining rigorous foundational sciences with humanities, digital creation, and wellness."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRICULUM_CATEGORIES.map((cat, idx: number) => (
              <div
                key={idx}
                className="bg-brand-bg rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-light/40 border border-gold/40 flex items-center justify-center mb-5">
                    {getCurriculumIcon(cat.icon)}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Modules:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.topics.map((top: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-navy border border-slate-200"
                      >
                        {top}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-brand-muted">
              * Fictional proposed balanced academic framework for EAK International School.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Teaching Methodology */}
      <section id="methodology" className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Interactive Classroom Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-brand-border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                  alt="Faculty member conducting collaborative seminar at EAK"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-light bg-navy/80 px-2.5 py-1 rounded">
                    Pedagogy in Action
                  </span>
                  <h4 className="font-heading font-bold text-xl mt-2">
                    Inquiry Over Rote Memorization
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">
                    Every concept is explored through real-world questions and hands-on laboratory proofs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 6 Methodologies Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
                  Instructional Philosophy
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mt-2">
                  How We Teach & Inspire
                </h2>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  Our progressive instructional model shifts the student from passive listener to active intellectual investigator.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TEACHING_METHODOLOGIES.map((meth, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-brand-border shadow-card hover:border-gold/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-3 shadow-xs">
                      {getMethodIcon(meth.icon)}
                    </div>
                    <h3 className="font-heading font-bold text-sm text-navy mb-1.5">
                      {meth.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {meth.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Co-curricular Programs Photographic Grid */}
      <section id="cocurricular" className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beyond The Classroom"
            title="Co-Curricular & Creative Pursuits"
            description="Nurturing versatile leaders requires rich avenues for athletic competition, musical expression, and civic action."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CO_CURRICULAR_ACTIVITIES.map((act, idx: number) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white uppercase tracking-wider bg-navy/80 px-2 py-0.5 rounded">
                    {act.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-navy mb-2">
                      {act.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Academic Recognition Highlights */}
      <section id="achievements" className="py-16 sm:py-20 bg-navy text-white text-center">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Growth & Recognition"
            title={
              <span>
                Celebrating Student <span className="text-gold">Accomplishments</span>
              </span>
            }
            description="Our students consistently demonstrate high intellectual caliber and collaborative spirit across regional and national forums."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMIC_ACHIEVEMENTS.map((ach: AchievementItem) => (
              <div
                key={ach.id}
                className="bg-navy-dark/80 rounded-2xl p-6 border border-navy-secondary text-center"
              >
                <span className="font-heading font-extrabold text-4xl text-gold block">
                  {ach.metric}
                </span>
                <span className="font-heading font-bold text-base text-white mt-1 block">
                  {ach.title}
                </span>
                <span className="text-xs text-slate-300 block mt-2">
                  {ach.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Academic CTA Banner */}
      <section className="py-16 sm:py-20 bg-brand-bg text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40 mb-3 inline-block">
            Start Your Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Find the Right Learning Path for Your Child
          </h2>
          <p className="mt-4 text-base text-brand-muted leading-relaxed">
            Our admissions counselors are ready to discuss your child's interests and guide you through our grade-appropriate programs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <PrimaryButton to="/admissions" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Admissions Process
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Contact Admissions
            </SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
};
