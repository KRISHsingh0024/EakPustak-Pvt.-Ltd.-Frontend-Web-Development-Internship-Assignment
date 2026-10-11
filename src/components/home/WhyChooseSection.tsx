import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Building2, Heart, Compass, Shield, ArrowRight } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const cards = [
    {
      title: "Academic Excellence",
      icon: BookOpen,
      desc: "Encouraging curiosity, strong subject foundations, critical thinking, and a lifelong love of learning.",
      linkText: "Explore curriculum",
      href: "/academics",
    },
    {
      title: "Modern Learning Spaces",
      icon: Building2,
      desc: "Welcoming classrooms, practical learning facilities, and spaces that encourage exploration and collaboration.",
      linkText: "Tour campus facilities",
      href: "/facilities",
    },
    {
      title: "Safe & Supportive Environment",
      icon: Heart,
      desc: "Creating an inclusive school community where students feel supported, respected, and encouraged to grow.",
      linkText: "Student care & support",
      href: "/about",
    },
    {
      title: "Beyond the Classroom",
      icon: Compass,
      desc: "Helping students explore sports, creative arts, clubs, and activities that develop confidence and teamwork.",
      linkText: "Discover student activities",
      href: "/events",
    },
    {
      title: "Values & Character",
      icon: Shield,
      desc: "Encouraging honesty, empathy, responsibility, and respect in everyday learning and interactions.",
      linkText: "Our core values",
      href: "/about",
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-12 sm:py-16 lg:py-20 relative border-b border-[#E3E8ED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[650px] mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEEEB] text-[#7D5700] text-xs font-semibold tracking-wider uppercase">
            <span>The EAK Difference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#10243A] tracking-tight font-bold font-heading">
            More Than a School. A Place to Thrive.
          </h2>
          <p className="text-sm sm:text-base text-[#44474D] leading-relaxed">
            We provide an inspiring learning environment where students discover their talents, build intellectual curiosity, and develop lifelong confidence.
          </p>
        </div>

        {/* Feature Grid: 3 Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between group border border-slate-200/80 hover:border-slate-300"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#FAF9F6] border border-slate-200/70 text-[#7D5700] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#FFC96A]/20">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#10243A] tracking-tight mb-2.5 group-hover:text-[#7D5700] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#44474D] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center">
                  <Link
                    to={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7D5700] hover:text-[#5F4100] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row of 2 Cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.slice(3, 5).map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between group border border-slate-200/80 hover:border-slate-300"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#FAF9F6] border border-slate-200/70 text-[#7D5700] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#FFC96A]/20">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#10243A] tracking-tight mb-2.5 group-hover:text-[#7D5700] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#44474D] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center">
                  <Link
                    to={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7D5700] hover:text-[#5F4100] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
