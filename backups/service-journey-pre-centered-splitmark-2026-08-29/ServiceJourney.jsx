import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DaovosWordmark } from '../brand';
import './service-journey.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create('journeyPrecision', '0.16, 1, 0.3, 1');
CustomEase.create('journeyMechanical', '0.25, 0, 0, 1');
CustomEase.create('journeySettle', '0.65, 0, 0.35, 1');

const SERVICES = [
  {
    number: '01',
    title: ['CUSTOM', 'WEBSITES'],
    kicker: 'DIGITAL HOMES / DISTINCT BY DESIGN',
    copy: 'A complete digital home shaped around the brand, its audience, and the way it needs to grow.',
    detail: 'BUSINESS · PORTFOLIO · BRAND',
    Illustration: WebFieldIllustration
  },
  {
    number: '02',
    title: ['LANDING', 'EXPERIENCES'],
    kicker: 'ONE MESSAGE / ONE DECISIVE ROUTE',
    copy: 'Focused launch environments that turn attention into one clear, measurable action.',
    detail: 'CAMPAIGN · PRODUCT · CONVERSION',
    Illustration: FocusBeamIllustration
  },
  {
    number: '03',
    title: ['COMMERCE', 'SYSTEMS'],
    kicker: 'DISCOVERY / DECISION / PURCHASE',
    copy: 'Storefront systems where catalogue, product detail, and checkout move as one continuous experience.',
    detail: 'CATALOGUE · CHECKOUT · RETENTION',
    Illustration: CommerceIllustration
  },
  {
    number: '04',
    title: ['INTERFACE', 'SYSTEMS'],
    kicker: 'COMPLEXITY / ORGANIZED FOR USE',
    copy: 'Responsive interfaces that turn dense content and behavior into a product people understand.',
    detail: 'UI / UX · DESIGN SYSTEMS · PRODUCTS',
    Illustration: InterfaceIllustration
  },
  {
    number: '05',
    title: ['CARE +', 'OPTIMIZATION'],
    kicker: 'LIVE SYSTEMS / KEPT IN MOTION',
    copy: 'Long-term technical care that keeps the experience fast, current, and dependable after launch.',
    detail: 'MAINTENANCE · MOBILE · ITERATION',
    Illustration: ContinuityIllustration
  }
];

function WebFieldIllustration() {
  return <ServiceImage src="/images/service-journey/custom-websites.jpg" alt="A monumental architectural facade organized as a precise digital home" />;
}

function FocusBeamIllustration() {
  return <ServiceImage src="/images/service-journey/landing-experiences.jpg" alt="A single white spotlight cutting through a dark stage" />;
}

function CommerceIllustration() {
  return <ServiceImage src="/images/service-journey/commerce-systems.jpg" alt="A carefully structured retail environment with products arranged in sequence" />;
}

function InterfaceIllustration() {
  return <ServiceImage src="/images/service-journey/interface-systems.jpg" alt="An abstract digital surface suggesting a responsive interface" />;
}

function ContinuityIllustration() {
  return <ServiceImage src="/images/service-journey/care-optimization.jpg" alt="Server infrastructure kept organized and operational" />;
}

function ServiceImage({ src, alt }) {
  return (
    <div className="service-journey__media">
      <div className="service-journey__media-drift">
        <img className="service-journey__media-image" src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
      <span className="service-journey__media-tone" aria-hidden="true" />
    </div>
  );
}

export const ServiceJourney = () => {
  const rootRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const stage = root.querySelector('.service-journey__stage');
    const track = root.querySelector('.service-journey__track');
    const panels = gsap.utils.toArray('.service-journey__panel', root);
    const artFrames = gsap.utils.toArray('.service-journey__art-frame', root);
    const mediaDrifts = gsap.utils.toArray('.service-journey__media-drift', root);
    const mediaImages = gsap.utils.toArray('.service-journey__media-image', root);
    const progress = root.querySelector('.service-journey__progress-fill');
    const chrome = gsap.utils.toArray('.service-journey__chrome', root);
    const finale = root.querySelector('.service-journey__finale');
    const finaleContent = root.querySelector('.service-journey__finale-content');
    const finaleHalves = gsap.utils.toArray('.service-journey__finale-half', root);
    const finaleWordmarks = gsap.utils.toArray('.service-journey__finale-wordmark-clip', root);
    const finaleLines = gsap.utils.toArray('.service-journey__finale-line > span', root);
    const finaleSeam = root.querySelector('.service-journey__finale-seam');
    const finaleAction = root.querySelector('.service-journey__finale-action');

    const mm = gsap.matchMedia();

    mm.add({
      desktop: '(min-width: 1180px) and (prefers-reduced-motion: no-preference)',
      tablet: '(min-width: 760px) and (max-width: 1179px) and (prefers-reduced-motion: no-preference)',
      mobile: '(max-width: 759px) and (prefers-reduced-motion: no-preference)',
      reduce: '(prefers-reduced-motion: reduce)'
    }, (context) => {
      const { desktop, tablet, mobile, reduce } = context.conditions;

      if (reduce) {
        gsap.set([stage, track, panels, artFrames, mediaDrifts, mediaImages, finale, finaleContent, finaleHalves, finaleWordmarks, finaleLines, finaleSeam, finaleAction, chrome], { clearProps: 'all' });
        return undefined;
      }

      const scrollScreens = desktop ? 7.5 : tablet ? 6.6 : 6;
      const panelDepth = mobile ? -120 : -240;
      const departedDepth = mobile ? 90 : 180;

      gsap.set(track, { x: 0, yPercent: 0, z: 0, force3D: true });
      gsap.set(panels, {
        z: panelDepth,
        scale: mobile ? 0.96 : 0.92,
        opacity: 0.28,
        transformOrigin: '50% 50%',
        force3D: true
      });
      gsap.set(panels[0], { z: 0, scale: 1, opacity: 1 });
      gsap.set(artFrames, { transformOrigin: '50% 50%', force3D: true });
      gsap.set(mediaDrifts, { scale: 1.08, transformOrigin: '50% 50%', force3D: true });
      gsap.set(mediaImages, { scale: 1.12, transformOrigin: '50% 50%', force3D: true });
      gsap.set(artFrames[0], { scale: 1, rotation: 0, rotationX: 0, rotationY: 0, xPercent: 0, yPercent: 0, z: 0 });
      gsap.set(artFrames[1], {
        scaleX: mobile ? 0.68 : 0.22,
        xPercent: mobile ? 6 : 18,
        transformOrigin: 'right center'
      });
      gsap.set(artFrames[2], {
        rotationY: mobile ? 0 : -16,
        z: mobile ? -50 : -140,
        scale: mobile ? 0.95 : 0.88
      });
      gsap.set(artFrames[3], {
        scaleY: mobile ? 0.52 : 0.18,
        yPercent: mobile ? 8 : 16,
        transformOrigin: 'center bottom'
      });
      gsap.set(artFrames[4], {
        scale: mobile ? 0.8 : 0.62,
        rotation: mobile ? 8 : 18
      });
      gsap.set(finale, { yPercent: 105, z: -220, scale: 0.96, autoAlpha: 0, force3D: true });
      gsap.set(finaleContent, { autoAlpha: 1 });
      gsap.set(finaleHalves[0], mobile ? { yPercent: -100 } : { xPercent: -100 });
      gsap.set(finaleHalves[1], mobile ? { yPercent: 100 } : { xPercent: 100 });
      gsap.set(finaleWordmarks, {
        autoAlpha: 0,
        scaleX: 0.06,
        transformOrigin: 'center',
        force3D: true
      });
      gsap.set(finaleLines, { yPercent: 112 });
      gsap.set(finaleSeam, mobile
        ? { scaleX: 0, scaleY: 1, transformOrigin: 'left center' }
        : { scaleX: 1, scaleY: 0, transformOrigin: 'center top' });
      gsap.set(finaleAction, { autoAlpha: 0, y: 26 });
      gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });

      const ambient = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
      ambient.to(mediaDrifts, {
        xPercent: (index) => [-2.8, 3.2, -2.4, 2.6, -3][index],
        yPercent: (index) => [2.2, -2.4, 2.8, -2, 2.4][index],
        duration: 12,
        ease: 'sine.inOut',
        force3D: true
      }, 0);

      const timeline = gsap.timeline({ defaults: { ease: 'journeySettle' } });

      timeline
        .addLabel('world')
        .fromTo(mediaImages[0], { scale: 1.34, xPercent: -5 }, { scale: 1.12, xPercent: 0, duration: 1.24, ease: 'journeyPrecision' }, 'world')
        .to({}, { duration: 0.58 });

      const chapterAnimations = [
        null,
        (label) => timeline
          .fromTo(mediaImages[1], { scale: 1.4, xPercent: 6 }, { scale: 1.12, xPercent: 0, duration: 1.08, ease: 'journeyPrecision' }, `${label}+=0.16`),
        (label) => timeline
          .fromTo(mediaImages[2], { scale: 1.34, yPercent: -7 }, { scale: 1.12, yPercent: 0, duration: 1.08, ease: 'journeyMechanical' }, `${label}+=0.18`),
        (label) => timeline
          .fromTo(mediaImages[3], { scale: 1.3, xPercent: -8 }, { scale: 1.12, xPercent: 0, duration: 1.04, ease: 'journeyPrecision' }, `${label}+=0.18`),
        (label) => timeline
          .fromTo(mediaImages[4], { scale: 1.42, xPercent: 7 }, { scale: 1.12, xPercent: 0, duration: 1.1, ease: 'journeyPrecision' }, `${label}+=0.16`)
      ];

      const handoffAnimations = [
        (label) => timeline
          .to(artFrames[0], { scaleY: 0.08, xPercent: -8, duration: 0.72, ease: 'journeyMechanical' }, label)
          .to(artFrames[1], { scaleX: 1, xPercent: 0, duration: 1.02, ease: 'journeyPrecision' }, `${label}+=0.08`),
        (label) => timeline
          .to(artFrames[1], { yPercent: -16, rotation: -2, scale: 0.92, duration: 0.82, ease: 'journeyMechanical' }, label)
          .to(artFrames[2], { rotationY: 0, z: 0, scale: 1, duration: 1.06, ease: 'journeyPrecision' }, `${label}+=0.1`),
        (label) => timeline
          .to(artFrames[2], { scaleY: 0.1, yPercent: 10, duration: 0.78, ease: 'journeyMechanical' }, label)
          .to(artFrames[3], { scaleY: 1, yPercent: 0, duration: 1.04, ease: 'journeyPrecision' }, `${label}+=0.1`),
        (label) => timeline
          .to(artFrames[3], { rotationY: mobile ? 0 : 12, xPercent: -10, scale: 0.94, duration: 0.86, ease: 'journeySettle' }, label)
          .to(artFrames[4], { scale: 1, rotation: 0, duration: 1.08, ease: 'journeyPrecision' }, `${label}+=0.08`)
      ];

      for (let index = 1; index < panels.length; index += 1) {
        const label = `chapter-${index + 1}`;
        timeline
          .addLabel(label)
          .to(track, {
            x: () => -index * window.innerWidth,
            duration: 1.18,
            ease: 'none',
            force3D: true
          }, label)
          .to(panels[index - 1], {
            z: departedDepth,
            scale: mobile ? 1.015 : 1.05,
            opacity: 0.16,
            duration: 0.92,
            ease: 'journeyMechanical',
            force3D: true
          }, label)
          .to(panels[index], {
            z: 0,
            scale: 1,
            opacity: 1,
            duration: 1.08,
            ease: 'journeyPrecision',
            force3D: true
          }, `${label}+=0.12`);

        handoffAnimations[index - 1]?.(label);
        chapterAnimations[index]?.(label);
        timeline.to({}, { duration: 0.62 });
      }

      timeline
        .addLabel('vertical-resolution')
        .set(finale, { autoAlpha: 1 }, 'vertical-resolution')
        .to(track, {
          yPercent: -100,
          z: departedDepth,
          scale: 1.035,
          duration: 1.18,
          ease: 'journeyMechanical',
          force3D: true
        }, 'vertical-resolution')
        .to(chrome, {
          autoAlpha: 0,
          y: -20,
          duration: 0.38,
          ease: 'power2.in'
        }, 'vertical-resolution')
        .to(finale, {
          yPercent: 0,
          z: 0,
          scale: 1,
          duration: 1.18,
          ease: 'journeyPrecision',
          force3D: true
        }, 'vertical-resolution+=0.08')
        .to(finaleHalves, {
          xPercent: 0,
          yPercent: 0,
          duration: 1.02,
          ease: 'journeyMechanical',
          force3D: true
        }, 'vertical-resolution+=0.16')
        .to(finaleSeam, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.78,
          ease: 'journeyPrecision'
        }, 'vertical-resolution+=0.58')
        .to(finaleWordmarks, {
          autoAlpha: 1,
          scaleX: 1,
          duration: 0.92,
          ease: 'journeyPrecision',
          force3D: true
        }, 'vertical-resolution+=0.56')
        .to(finaleLines, {
          yPercent: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: 'journeyPrecision'
        }, 'vertical-resolution+=0.76')
        .to(finaleAction, {
          autoAlpha: 1,
          y: 0,
          duration: 0.66,
          ease: 'journeyPrecision'
        }, 'vertical-resolution+=1')
        .to({}, { duration: 1.18 });

      const duration = timeline.duration();
      timeline.to(progress, { scaleX: 1, duration, ease: 'none' }, 0);

      const trigger = ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: () => `+=${Math.round(window.innerHeight * scrollScreens)}`,
        animation: timeline,
        pin: stage,
        pinSpacing: true,
        scrub: 0.72,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onEnter: () => ambient.play(),
        onEnterBack: () => ambient.play(),
        onLeave: () => ambient.pause(),
        onLeaveBack: () => ambient.pause()
      });

      return () => {
        trigger.kill();
        ambient.kill();
      };
    });

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      mm.revert();
    };
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className="service-journey" aria-label="What DAOVOS makes">
      <div className="service-journey__stage">
        <header className="service-journey__header service-journey__chrome">
          <span>02 // WHAT WE MAKE</span>
          <span>VERTICAL INPUT / HORIZONTAL PASSAGE</span>
        </header>

        <div className="service-journey__track">
          {SERVICES.map(({ number, title, kicker, copy, detail, Illustration }) => (
            <article className={`service-journey__panel service-journey__panel--${number}`} key={number}>
              <div className="service-journey__copy">
                <p className="service-journey__kicker">{number} / {kicker}</p>
                <h2><span>{title[0]}</span><span>{title[1]}</span></h2>
                <p className="service-journey__statement">{copy}</p>
                <p className="service-journey__detail">{detail}</p>
              </div>
              <figure className="service-journey__art-frame">
                <Illustration />
              </figure>
            </article>
          ))}
        </div>

        <div className="service-journey__progress service-journey__chrome" aria-hidden="true">
          <span>WHAT WE MAKE</span>
          <i><b className="service-journey__progress-fill" /></i>
          <span>05 CHAPTERS</span>
        </div>

        <section className="service-journey__finale" aria-label="Start a project with DAOVOS">
          <div className="service-journey__finale-content">
            <div className="service-journey__finale-half service-journey__finale-half--dark">
              <header>
                <span>03 // PROJECT INPUT</span>
                <span>YOU / THE IDEA</span>
              </header>
              <div className="service-journey__finale-copy service-journey__finale-copy--idea">
                <p>THE STARTING POINT</p>
                <h2>
                  <span className="service-journey__finale-line"><span>YOU BRING</span></span>
                  <span className="service-journey__finale-line"><span>THE IDEA.</span></span>
                </h2>
                <p className="service-journey__finale-note">Ambition, context, and a reason to make something unmistakably yours.</p>
              </div>
              <footer>IDEA / AMBITION / CONTEXT</footer>
            </div>

            <div className="service-journey__finale-half service-journey__finale-half--light">
              <header>
                <span>DAOVOS / PROJECT OUTPUT</span>
                <span>INTAKE / OPEN</span>
              </header>
              <div className="service-journey__finale-copy service-journey__finale-copy--build">
                <p>THE BUILT RESPONSE</p>
                <h2>
                  <span className="service-journey__finale-line"><span>WE BUILD</span></span>
                  <span className="service-journey__finale-line"><span>THE EXPERIENCE.</span></span>
                </h2>
                <div className="service-journey__finale-action">
                  <p>From first interface to long-term care, DAOVOS turns the idea into a clear, durable digital experience.</p>
                  <a href="mailto:hello@daovos.com"><span>START A PROJECT</span><span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <footer>DESIGN / DEVELOPMENT / CARE</footer>
            </div>

            <div className="service-journey__finale-wordmark" aria-hidden="true">
              <div className="service-journey__finale-wordmark-clip">
                <DaovosWordmark width={1024} color="currentColor" />
              </div>
            </div>

            <i className="service-journey__finale-seam" aria-hidden="true" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServiceJourney;
