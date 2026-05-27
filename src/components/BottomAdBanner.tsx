'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function BottomAdBanner() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile === null) {
    return <div style={{ display: 'flex', justifyContent: 'center', margin: '24px auto', minHeight: '50px' }}></div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '24px auto', width: '100%', minHeight: isMobile ? '50px' : '90px' }}>
      {isMobile ? (
        <div id="container-33ace23177049a74fd1997dff69b0cea" style={{ width: '320px', height: '50px', overflow: 'hidden' }}>
          <Script
            id="atOptions-320x50"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.atOptions = {
                  'key' : '33ace23177049a74fd1997dff69b0cea',
                  'format' : 'iframe',
                  'height' : 50,
                  'width' : 320,
                  'params' : {}
                };
              `,
            }}
          />
          <Script
            src="https://www.highperformanceformat.com/33ace23177049a74fd1997dff69b0cea/invoke.js"
            strategy="afterInteractive"
          />
        </div>
      ) : (
        <div id="container-6b172465d341ef069e5386013c0d9f75" style={{ width: '728px', height: '90px', overflow: 'hidden' }}>
          <Script
            id="atOptions-728x90"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.atOptions = {
                  'key' : '6b172465d341ef069e5386013c0d9f75',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              `,
            }}
          />
          <Script
            src="https://www.highperformanceformat.com/6b172465d341ef069e5386013c0d9f75/invoke.js"
            strategy="afterInteractive"
          />
        </div>
      )}
    </div>
  );
}
