import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  className?: string;
}

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/shop', label: 'Чат' },
  { href: '/rules', label: 'Правила' },
  { href: '/shop', label: 'Магазин' },
  { href: '/gameevents', label: 'Ивенты' },
  { href: '/clans', label: 'Кланы' },
  { href: '/rules', label: 'Рейтинг' },
  { href: '/gameevents', label: 'Задания' },
  { href: '/clans', label: 'Личный кабинет' },
];

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('fixed top-0 left-0 w-full bg-white z-99 border-b', className)}>
      <div className='flex items-center justify-between py-4 px-10'>
        <Link href="/">
          <div className="flex items-center gap-2">
            <div>
              <h1 className="text-xl uppercase font-black underline decoration-lime-500">Arkand</h1>
              <p className="text-sm text-gray-400 leading-3">игровой сервер, The Isle Evrima - Gateway</p>
            </div>
          </div>
        </Link>
        <div className="font-semibold text-gray-900">Поиск</div>
        <nav>
          <div className="flex gap-8">
            {navItems.map(({ href, label }) => (
              <div key={href}>
                <Link href={href}>
                  <p className='font-semibold text-gray-900'>{label}</p>
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

