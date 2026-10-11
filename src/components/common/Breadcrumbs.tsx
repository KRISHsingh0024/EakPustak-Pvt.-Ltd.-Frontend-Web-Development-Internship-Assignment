import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  variant = 'light',
  className = '',
}) => {
  const isDark = variant === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center text-xs sm:text-sm font-medium ${className}`}
    >
      <ol className="inline-flex items-center space-x-1.5 sm:space-x-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors ${
              isDark ? 'text-slate-300 hover:text-gold' : 'text-slate-500 hover:text-navy'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight
                className={`w-3.5 h-3.5 mx-1 flex-shrink-0 ${
                  isDark ? 'text-slate-400' : 'text-slate-400'
                }`}
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className={`transition-colors ${
                    isDark ? 'text-slate-300 hover:text-gold' : 'text-slate-500 hover:text-navy'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-semibold ${
                    isDark ? 'text-gold-light' : 'text-navy'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
