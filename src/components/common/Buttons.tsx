import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonBaseProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

interface LinkProps extends ButtonBaseProps {
  to: string;
  onClick?: () => void;
  type?: never;
  disabled?: boolean;
}

interface ButtonProps extends ButtonBaseProps {
  to?: never;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

type Props = LinkProps | ButtonProps;

export const PrimaryButton: React.FC<Props> = ({
  children,
  icon,
  iconPosition = 'right',
  className = '',
  size = 'md',
  fullWidth = false,
  ...rest
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-lg',
    lg: 'px-7 py-3.5 text-base font-bold rounded-xl',
  }[size];

  const baseClasses = `inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-heading shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${sizeClasses} ${fullWidth ? 'w-full' : ''} ${className}`;

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={baseClasses} onClick={rest.onClick}>
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={rest.type || 'button'}
      onClick={rest.onClick}
      disabled={rest.disabled}
      className={`${baseClasses} ${rest.disabled ? 'opacity-60 cursor-not-allowed hover:bg-gold' : ''}`}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};

export const SecondaryButton: React.FC<Props & { variant?: 'outline' | 'navy' | 'light' | 'white-outline' }> = ({
  children,
  icon,
  iconPosition = 'right',
  className = '',
  size = 'md',
  fullWidth = false,
  variant = 'outline',
  ...rest
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-lg',
    lg: 'px-7 py-3.5 text-base font-bold rounded-xl',
  }[size];

  const variantClasses = {
    outline: 'border border-brand-border bg-white hover:bg-slate-50 text-navy hover:text-navy-secondary hover:border-slate-300',
    'white-outline': 'border border-white/40 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm',
    navy: 'bg-navy hover:bg-navy-secondary text-white shadow-sm',
    light: 'bg-gold-light/40 hover:bg-gold-light/70 text-navy border border-gold/30',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center gap-2 font-heading transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${variantClasses} ${sizeClasses} ${fullWidth ? 'w-full' : ''} ${className}`;

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={baseClasses} onClick={rest.onClick}>
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={rest.type || 'button'}
      onClick={rest.onClick}
      disabled={rest.disabled}
      className={`${baseClasses} ${rest.disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
