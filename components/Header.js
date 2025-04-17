// components/Header.js
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex space-x-6 text-lg font-semibold border-b border-gray-700">
      <Link href="/pivots" className="hover:text-yellow-400">📊 Pivots</Link>
      <Link href="/matchups" className="hover:text-yellow-400">📋 Matchups</Link>
      <Link href="/login" className="hover:text-yellow-400">🔐 Login</Link>
    </header>
  );
}
