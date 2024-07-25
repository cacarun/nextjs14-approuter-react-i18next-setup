'use client';

import { useChangeLanguage } from '@/hook'

export default function LanguageChanger() {
  const { currentLocale, handleChange } = useChangeLanguage();

  return (
    <select title='select lang' 
      onChange={(e) => handleChange(e.target.value)} 
      value={currentLocale}
      style={{ height: '40px' }}>
      <option value="en">English</option>
      <option value="zh">Chinese</option>
      <option value="fr">French</option>
    </select>
  );
}