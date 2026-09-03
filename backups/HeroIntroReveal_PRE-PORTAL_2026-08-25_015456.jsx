import React, { useState, useEffect } from 'react';

/**
 * DAOVOS Hero Opening Preloader & 6-Block Modular Matrix Aperture Reveal
 * - Pure, minimal solid Jet Black (#000000) canvas
 * - 6-Plate Architectural Modular Matrix (Plates unlock & part in 6 directions)
 * - Canonical 2D SVG 6-Module Emblem sequential drawing
 * - Authoritative bespoke DAOVOS SVG Wordmark vector reveal
 * - Full-page masked laser light sweep
 */
export const HeroIntroReveal = ({ onComplete }) => {
  const [phase, setPhase] = useState('active'); // 'active' | 'revealing' | 'done'

  useEffect(() => {
    // 1. Trigger 6-plate modular matrix reveal after 2D logo assembly & full-screen light sweep finish
    const timer1 = setTimeout(() => {
      setPhase('revealing');
      if (onComplete) onComplete();
    }, 1550);

    // 2. Unmount from DOM after all 6 plates fully clear the screen
    const timer2 = setTimeout(() => {
      setPhase('done');
    }, 2650);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  const isRevealing = phase === 'revealing';

  const plateBaseStyle = {
    backgroundColor: '#000000'
  };

  return (
    <div
      className="hero-intro-reveal-wrapper"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: isRevealing ? 'none' : 'auto',
        overflow: 'hidden',
        backgroundColor: 'transparent'
      }}
    >
      {/* ============================================================ */}
      {/* 6-PLATE ARCHITECTURAL MODULAR MATRIX VAULT PLATES             */}
      {/* ============================================================ */}

      {/* Plate 1: Center Top (Slides Straight UP) */}
      <div
        style={{
          ...plateBaseStyle,
          position: 'absolute',
          top: 0,
          left: '34vw',
          width: '32vw',
          height: '50.5vh',
          transform: isRevealing ? 'translateY(-105%)' : 'translateY(0%)',
          transition: 'transform 0.95s cubic-bezier(0.86, 0, 0.07, 1) 0.04s',
          zIndex: 11
        }}
      />

      {/* Plate 2: Upper Left (Slides UP-LEFT) */}
      <div
        style={{
          ...plateBaseStyle,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '34.5vw',
          height: '50.5vh',
          transform: isRevealing ? 'translate(-105%, -15%)' : 'translate(0%, 0%)',
          transition: 'transform 0.95s cubic-bezier(0.86, 0, 0.07, 1) 0.10s',
          zIndex: 10
        }}
      />

      {/* Plate 3: Upper Right (Slides UP-RIGHT) */}
      <div
        style={{
          ...plateBaseStyle,
          position: 'absolute',
          top: 0,
          right: 0,
          width: '34.5vw',
          height: '50.5vh',
          transform: isRevealing ? 'translate(105%, -15%)' : 'translate(0%, 0%)',
          transition: 'transform 0.95s cubic-bezier(0.86, 0, 0.07, 1) 0.16s',
          zIndex: 10
        }}
      />

      {/* Plate 4: Lower Left (Slides DOWN-LEFT) */}
      <div
        style={{
          ...plateBaseStyle,
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '34.5vw',
          height: '50.5vh',
          transform: isRevealing ? 'translate(-105%, 15%)' : 'translate(0%, 0%)',
          transition: 'transform 0.95s cubic-bezier(0.86, 0, 0.07, 1) 0.14s',
          zIndex: 10
        }}
      />

      {/* Plate 5: Center Bottom (Slides Straight DOWN) */}
      <div
        style={{
          ...plateBaseStyle,
          position: 'absolute',
          bottom: 0,
          left: '34vw',
          width: '32vw',
          height: '50.5vh',
          transform: isRevealing ? 'translateY(105%)' : 'translateY(0%)',
          transition: 'transform 0.95s cubic-bezier(0.86, 0, 0.07, 1) 0.06s',
          zIndex: 11
        }}
      />

      {/* Plate 6: Lower Right (Slides DOWN-RIGHT) */}
      <div
        style={{
          ...plateBaseStyle,
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '34.5vw',
          height: '50.5vh',
          transform: isRevealing ? 'translate(105%, 15%)' : 'translate(0%, 0%)',
          transition: 'transform 0.95s cubic-bezier(0.86, 0, 0.07, 1) 0.20s',
          zIndex: 10
        }}
      />

      {/* Full-Page Architectural Light Sweep (Masked strictly to preloader) */}
      <div
        className="anim-fullscreen-sweep"
        style={{
          opacity: isRevealing ? 0 : 1,
          transition: 'opacity 0.2s ease'
        }}
      />

      {/* Center 2D SVG Logo Assembly Core */}
      <div
        className="intro-center-core"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: isRevealing
            ? 'translate(-50%, -50%) scale(1.18)'
            : 'translate(-50%, -50%) scale(1.0)',
          opacity: isRevealing ? 0 : 1,
          transition: 'all 0.85s cubic-bezier(0.86, 0, 0.07, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
          pointerEvents: 'none'
        }}
      >
        {/* 2D Animated SVG 6-Module Emblem */}
        <div style={{ position: 'relative', width: '110px', height: '110px' }}>
          <svg
            viewBox="0 0 512 512"
            width="110"
            height="110"
            style={{ overflow: 'visible' }}
          >
            <g transform="translate(256, 256) scale(1.1) translate(-511.5, -408)">
              {/* Module 1: Center Top */}
              <rect
                className="anim-mod-1"
                x="478.50"
                y="240.80"
                width="66.30"
                height="162.70"
                fill="#EDE6DF"
                stroke="#EDE6DF"
                strokeWidth="1.5"
              />

              {/* Module 2: Left Top */}
              <rect
                className="anim-mod-2"
                x="380.50"
                y="322.50"
                width="63.80"
                height="81.00"
                fill="#EDE6DF"
                stroke="#EDE6DF"
                strokeWidth="1.5"
              />

              {/* Module 3: Right Top */}
              <rect
                className="anim-mod-3"
                x="578.70"
                y="322.50"
                width="63.80"
                height="81.00"
                fill="#EDE6DF"
                stroke="#EDE6DF"
                strokeWidth="1.5"
              />

              {/* Module 4: Left Bottom */}
              <rect
                className="anim-mod-4"
                x="380.50"
                y="419.20"
                width="63.80"
                height="77.90"
                fill="#EDE6DF"
                stroke="#EDE6DF"
                strokeWidth="1.5"
              />

              {/* Module 5: Center Bottom */}
              <rect
                className="anim-mod-5"
                x="478.50"
                y="419.20"
                width="66.30"
                height="156.00"
                fill="#EDE6DF"
                stroke="#EDE6DF"
                strokeWidth="1.5"
              />

              {/* Module 6: Right Bottom */}
              <rect
                className="anim-mod-6"
                x="578.70"
                y="419.20"
                width="63.80"
                height="77.90"
                fill="#EDE6DF"
                stroke="#EDE6DF"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        {/* Authoritative Bespoke DAOVOS SVG Wordmark Animation */}
        <div style={{ marginTop: '18px', overflow: 'visible' }}>
          <svg
            className="anim-wordmark-svg"
            viewBox="0 0 1024 341"
            width="170"
            height="56"
            fill="#EDE6DF"
            style={{ overflow: 'visible', display: 'block' }}
          >
            {/* Letter D */}
            <path
              className="anim-letter-d"
              d="M 66.00 221.55 C 65.55 220.77, 65.65 221.12, 65.59 220.00 C 65.35 215.02, 65.56 209.99, 65.57 205.00 C 65.60 196.00, 65.63 187.00, 65.58 178.00 C 65.55 173.67, 65.54 169.33, 65.57 165.00 C 65.59 162.81, 65.19 160.16, 66.00 158.11 C 67.27 157.49, 84.28 157.39, 85.24 158.00 C 85.43 158.33, 85.69 158.63, 85.79 159.00 C 86.13 160.14, 85.87 161.81, 85.90 163.00 C 85.98 167.34, 85.85 171.67, 85.80 176.00 C 85.72 182.33, 85.96 188.67, 85.89 195.00 C 85.88 196.21, 85.44 200.17, 86.00 201.07 C 86.33 201.32, 86.61 201.68, 87.00 201.82 C 87.95 202.18, 90.86 201.81, 92.00 201.81 C 97.33 201.81, 102.67 201.91, 108.00 201.87 C 113.66 201.82, 119.34 201.80, 125.00 201.82 C 129.73 201.84, 134.30 202.09, 139.00 201.29 C 141.82 200.80, 144.34 199.57, 147.00 198.62 C 151.83 196.88, 156.14 193.65, 159.75 190.00 C 167.40 182.23, 171.37 174.11, 171.40 163.00 C 171.46 145.82, 159.34 131.89, 143.00 127.83 C 137.59 126.48, 131.52 127.16, 126.00 127.12 C 113.66 127.03, 101.33 127.27, 89.00 127.12 C 84.96 127.08, 76.45 127.84, 73.00 126.69 C 72.14 125.67, 65.23 108.94, 65.29 108.00 C 65.32 107.64, 65.57 107.33, 65.71 107.00 C 66.81 106.46, 71.50 106.78, 73.00 106.76 C 85.33 106.58, 97.67 106.90, 110.00 106.77 C 115.67 106.71, 121.33 106.77, 127.00 106.75 C 137.89 106.72, 145.50 106.38, 155.98 110.00 C 161.38 111.86, 166.48 114.77, 171.00 118.24 C 192.58 134.80, 197.30 162.44, 187.10 187.00 C 186.23 189.10, 184.85 191.08, 183.67 193.00 C 177.85 202.43, 168.88 210.31, 159.00 215.25 C 144.87 222.31, 133.37 221.73, 118.00 221.78 C 108.67 221.81, 99.33 221.82, 90.00 221.78 C 84.67 221.76, 79.33 221.80, 74.00 221.80 C 71.36 221.80, 68.60 222.05, 66.00 221.55 Z"
            />
            {/* Letter A */}
            <path
              className="anim-letter-a"
              d="M 340.00 221.41 L 317.85 221.00 L 271.00 142.77 L 220.47 221.00 L 198.43 221.00 L 273.00 104.47 Z"
            />
            {/* Letter O1 */}
            <path
              className="anim-letter-o1"
              d="M 416.00 106.76 C 416.67 107.67, 416.65 124.54, 416.00 125.48 C 413.43 126.22, 410.62 126.33, 408.00 126.95 C 400.50 128.75, 393.77 132.87, 388.00 137.92 C 385.78 139.87, 383.79 142.51, 382.24 145.00 C 381.03 146.95, 379.57 148.87, 378.69 151.00 C 372.52 165.85, 375.63 181.45, 387.00 192.75 C 389.20 194.93, 392.26 197.76, 395.00 199.20 C 399.85 201.76, 404.67 203.53, 410.00 204.93 C 411.99 205.45, 414.07 205.21, 416.00 205.92 C 416.56 206.64, 416.69 220.53, 416.37 222.00 C 416.31 222.29, 416.12 222.53, 416.00 222.80 C 414.15 223.53, 411.93 223.01, 410.00 222.81 C 403.43 222.10, 397.02 220.49, 391.00 217.80 C 363.07 205.29, 348.48 176.66, 358.87 147.00 C 360.37 142.71, 362.73 138.80, 365.18 135.00 C 368.83 129.37, 373.48 124.05, 379.00 120.19 C 380.04 119.46, 380.93 118.50, 382.00 117.81 C 387.56 114.24, 392.60 111.34, 399.00 109.46 C 403.20 108.22, 411.84 105.75, 416.00 106.76 Z M 427.00 222.73 L 426.84 206.00 C 427.40 205.22, 429.13 205.31, 430.00 205.15 C 433.75 204.45, 437.45 203.47, 441.00 202.07 C 443.92 200.92, 446.40 199.30, 449.00 197.57 C 465.24 186.74, 471.97 168.29, 463.83 150.00 C 458.87 138.85, 448.03 129.46, 436.00 126.81 C 433.01 126.15, 430.01 125.93, 427.00 125.45 C 426.39 124.55, 426.36 107.73, 427.00 106.72 C 431.73 105.21, 442.21 107.81, 447.00 109.45 C 474.62 118.89, 491.61 147.11, 486.21 176.00 C 485.15 181.65, 482.80 186.95, 480.16 192.00 C 479.22 193.79, 477.90 195.30, 476.83 197.00 C 471.55 205.40, 461.07 213.63, 452.00 217.51 C 445.71 220.19, 438.86 222.27, 432.00 222.79 C 430.31 222.92, 428.62 223.33, 427.00 222.73 Z"
            />
            {/* Letter V */}
            <path
              className="anim-letter-v"
              d="M 577.00 226.02 L 556.73 195.00 L 505.81 107.00 L 529.00 107.26 L 579.00 191.44 L 633.00 107.74 L 657.00 106.98 L 601.08 193.00 Z"
            />
            {/* Letter O2 */}
            <path
              className="anim-letter-o2"
              d="M 730.00 106.78 C 730.60 107.55, 730.58 124.53, 730.00 125.34 C 727.80 126.15, 725.29 126.27, 723.00 126.78 C 718.03 127.87, 713.40 130.26, 709.00 132.70 C 703.94 135.50, 699.53 140.28, 696.31 145.00 C 693.98 148.40, 691.89 152.03, 690.69 156.00 C 686.05 171.39, 693.18 188.21, 706.00 197.32 C 710.43 200.47, 715.71 202.96, 721.00 204.25 C 723.84 204.94, 727.27 204.84, 729.91 206.00 C 730.58 206.71, 730.55 221.40, 730.00 222.59 C 725.65 224.65, 709.62 219.87, 705.00 217.79 C 655.96 195.75, 658.80 134.25, 706.00 112.00 C 707.63 111.23, 709.32 110.79, 711.00 110.17 C 715.07 108.66, 726.00 105.76, 730.00 106.78 Z M 741.00 222.77 C 740.38 221.40, 740.27 206.84, 741.00 205.82 C 743.51 204.95, 746.40 204.76, 749.00 204.15 C 754.40 202.89, 759.47 200.50, 764.00 197.37 C 778.69 187.22, 785.21 170.19, 779.40 153.00 C 778.17 149.38, 775.97 146.07, 773.78 143.00 C 770.98 139.07, 767.17 135.20, 763.00 132.70 C 758.91 130.23, 754.68 128.04, 750.00 126.90 C 747.09 126.18, 743.78 126.41, 741.00 125.30 C 740.49 124.53, 740.45 107.60, 741.00 106.76 C 742.60 106.17, 744.31 106.40, 746.00 106.50 C 753.31 106.96, 760.44 108.82, 767.00 112.06 C 777.26 117.13, 786.91 124.99, 792.75 135.00 C 794.28 137.62, 796.06 140.14, 797.15 143.00 C 807.29 169.59, 799.46 197.42, 775.00 212.55 C 770.15 215.55, 766.57 217.80, 761.00 219.50 C 756.05 221.01, 745.92 224.04, 741.00 222.77 Z"
            />
            {/* Letter S */}
            <path
              className="anim-letter-s"
              d="M 833.70 221.00 L 844.00 203.54 C 846.63 203.19, 849.35 203.36, 852.00 203.38 C 856.00 203.41, 860.00 203.41, 864.00 203.41 C 878.33 203.38, 892.67 203.28, 907.00 203.37 C 912.22 203.40, 917.96 204.06, 922.89 202.00 C 925.76 200.80, 927.96 198.59, 929.58 196.00 C 934.67 187.86, 929.93 179.13, 921.63 176.00 C 917.99 174.63, 911.03 175.41, 907.00 175.39 C 897.00 175.35, 887.00 175.42, 877.00 175.38 C 872.04 175.36, 866.95 175.74, 862.00 175.27 C 849.21 174.04, 837.59 166.93, 832.24 155.00 C 828.44 146.55, 828.45 137.29, 832.00 128.78 C 836.64 117.67, 847.15 109.47, 859.00 107.51 C 865.86 106.37, 873.08 106.81, 880.00 106.92 C 888.00 107.04, 896.00 106.88, 904.00 106.92 C 912.33 106.95, 920.67 106.87, 929.00 106.87 C 932.92 106.87, 937.12 106.52, 941.00 107.05 C 941.11 107.37, 941.33 107.67, 941.33 108.00 C 941.33 108.10, 931.70 125.33, 931.00 126.10 C 928.44 127.25, 919.30 126.60, 916.00 126.60 C 900.67 126.60, 885.33 126.65, 870.00 126.60 C 866.20 126.59, 862.64 126.46, 859.00 127.68 C 857.91 128.05, 856.95 128.75, 856.00 129.37 C 846.74 135.41, 846.88 149.06, 857.00 154.23 C 862.11 156.85, 870.32 156.16, 876.00 156.07 C 883.99 155.94, 892.00 156.13, 900.00 156.10 C 904.00 156.08, 908.00 156.10, 912.00 156.08 C 919.52 156.05, 927.59 155.89, 934.25 160.00 C 944.18 166.13, 951.49 175.88, 951.47 188.00 C 951.45 204.11, 939.05 218.80, 923.00 221.30 C 919.02 221.92, 915.01 221.80, 911.00 221.81 C 905.00 221.81, 899.00 221.77, 893.00 221.73 C 881.00 221.65, 869.00 221.84, 857.00 221.79 C 851.67 221.77, 846.33 221.87, 841.00 221.83 C 839.08 221.81, 836.89 222.08, 835.00 221.76 C 833.96 221.58, 834.13 221.63, 833.70 221.00 Z"
            />
          </svg>
        </div>
      </div>

      <style>{`
        /* Staggered Hardware-Accelerated Module Animations */
        .anim-mod-1 {
          transform-origin: 511.5px 322px;
          animation: modSlideDown 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.10s forwards;
          opacity: 0;
        }
        .anim-mod-2 {
          transform-origin: 412px 363px;
          animation: modSlideRight 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.20s forwards;
          opacity: 0;
        }
        .anim-mod-3 {
          transform-origin: 610px 363px;
          animation: modSlideLeft 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.30s forwards;
          opacity: 0;
        }
        .anim-mod-4 {
          transform-origin: 412px 458px;
          animation: modSlideRight 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.40s forwards;
          opacity: 0;
        }
        .anim-mod-5 {
          transform-origin: 511.5px 497px;
          animation: modSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.50s forwards;
          opacity: 0;
        }
        .anim-mod-6 {
          transform-origin: 610px 458px;
          animation: modSlideLeft 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.60s forwards;
          opacity: 0;
        }

        /* SVG Wordmark Staggered Letter Animations */
        .anim-wordmark-svg {
          animation: wordmarkFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s forwards;
          opacity: 0;
          transform: translateY(12px);
        }
        .anim-letter-d {
          animation: letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.60s forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        .anim-letter-a {
          animation: letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        .anim-letter-o1 {
          animation: letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.70s forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        .anim-letter-v {
          animation: letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.75s forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        .anim-letter-o2 {
          animation: letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.80s forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        .anim-letter-s {
          animation: letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.85s forwards;
          opacity: 0;
          transform: translateY(8px);
        }

        /* Fullscreen Light Sweep across 100vw */
        .anim-fullscreen-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50vw;
          left: -60vw;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(237, 230, 223, 0.03) 20%,
            rgba(237, 230, 223, 0.18) 50%,
            rgba(237, 230, 223, 0.03) 80%,
            transparent 100%
          );
          transform: skewX(-22deg);
          animation: fullSweep 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.85s forwards;
          pointer-events: none;
          z-index: 15;
        }

        @keyframes modSlideDown {
          0% { transform: translateY(-40px) scaleY(0); opacity: 0; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes modSlideUp {
          0% { transform: translateY(40px) scaleY(0); opacity: 0; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes modSlideRight {
          0% { transform: translateX(-40px) scaleX(0); opacity: 0; }
          100% { transform: translateX(0) scaleX(1); opacity: 1; }
        }
        @keyframes modSlideLeft {
          0% { transform: translateX(40px) scaleX(0); opacity: 0; }
          100% { transform: translateX(0) scaleX(1); opacity: 1; }
        }
        @keyframes wordmarkFadeIn {
          0% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes letterReveal {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fullSweep {
          0% { transform: translateX(0) skewX(-22deg); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateX(240vw) skewX(-22deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeroIntroReveal;
