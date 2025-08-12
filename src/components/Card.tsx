import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  href?: string;
  featured?: boolean;
  className?: string;
}

export default function Card({ title, children, href, featured = false, className = '' }: CardProps) {
  const Comp = href ? 'a' : 'div';
  
  const cardClasses = [
    'card',
    'card-hover',
    'card-primary',
    featured && 'card-featured',
    href && 'no-underline text-foreground block',
    className
  ].filter(Boolean).join(' ');

  return (
    <Comp className={cardClasses} href={href}>
      <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </Comp>
  );
}
