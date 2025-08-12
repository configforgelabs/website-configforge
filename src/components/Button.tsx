import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  href, 
  onClick, 
  className = '',
  disabled = false 
}: ButtonProps) {
  const Comp = href ? 'a' : 'button';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };
  
  const buttonClasses = [
    'btn',
    'no-underline hover:no-underline',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  ].filter(Boolean).join(' ');

  return (
    <Comp 
      className={buttonClasses} 
      href={href}
      onClick={onClick}
      disabled={disabled}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </Comp>
  );
}
