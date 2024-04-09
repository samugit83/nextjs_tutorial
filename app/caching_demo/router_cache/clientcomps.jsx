'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const ButtonComp = () => {
  const [browserWindowWidth, setBrowserWindowWidth] = useState("nodata");
  const router = useRouter();

  useEffect(() => {
    const checkSize = () => {
      if (typeof window !== 'undefined') {
        const currentWidth = window.innerWidth;
        setBrowserWindowWidth(currentWidth);
      }
    };

    checkSize();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        className="cache_data_button"
        type="button"
        onClick={() => router.refresh()}
      >
        Clear router cache (client)
      </button>
      <div style={{ marginTop: '20px' }}>
        window.innerWidth (if clear router cache should change):{' '}
        <span className={'cache_data_cont'}>
          {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}
        </span>
      </div>
      <div style={{ marginTop: '20px' }}>
        window.innerWidth from State (if clear router cache shouldn&apos;t change):{' '}
        <span className={'cache_data_cont'}>{browserWindowWidth}</span>
      </div>
    </div>
  );
};