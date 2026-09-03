import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DaovosWordmark } from '../brand';
import {
  BklitRadarArt,
  BklitSankeyArt,
  BklitScatterArt,
  BklitSunburstArt,
  FffuelPerspectiveArt,
  FffuelVortexArt
} from './ServiceAtlasArt';
import './service-journey.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);
CustomEase.create('atlasPrecision', '0.16, 1, 0.3, 1');
CustomEase.create('atlasMechanical', '0.25, 0, 0, 1');

const COLUMNS = Array.from({ length: 23 }, (_, index) => index);

export const ServiceJourney = () => {
  const rootRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const stage = root.querySelector('.service-journey__stage');
    const canvas = root.querySelector('.service-atlas');
    const motionModules = gsap.utils.toArray('.service-atlas__motion', root);
    const parallaxModules = gsap.utils.toArray('.service-atlas__parallax', root);
    const flowLinks = gsap.utils.toArray('.service-art__flow-link', root);
    const pulses = gsap.utils.toArray('.service-art__pulse', root);
    const drifts = gsap.utils.toArray('.service-art__drift', root);
    const vortexRings = gsap.utils.toArray('.service-art__vortex-ring', root);
    const orbits = gsap.utils.toArray('.service-art__orbit', root);
    const finale = root.querySelector('.service-journey__finale');
    const finaleHalves = gsap.utils.toArray('.service-journey__finale-half', root);
    const finaleWordmark = root.querySelector('.service-journey__finale-wordmark-clip');
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
      const { desktop, mobile, reduce } = context.conditions;

      if (reduce) {
        gsap.set([stage, canvas, motionModules, parallaxModules, flowLinks, pulses, drifts, vortexRings, orbits, finale, finaleHalves, finaleWordmark, finaleLines, finaleSeam, finaleAction], { clearProps: 'all' });
        return undefined;
      }

      gsap.set(canvas, { x: 0, force3D: true });
      gsap.set(flowLinks, { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set([pulses, drifts, vortexRings, orbits], { transformOrigin: '50% 50%' });

      const ambient = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
      ambient
        .to(vortexRings, {
          rotation: (index) => index % 2 ? -14 : 14,
          duration: 11,
          stagger: { each: 0.025, from: 'edges' },
          ease: 'sine.inOut'
        }, 0)
        .to(drifts, {
          xPercent: (index) => index % 2 ? -4 : 4,
          yPercent: (index) => index % 2 ? 3 : -3,
          duration: 7.5,
          stagger: 0.22,
          ease: 'sine.inOut'
        }, 0)
        .to(pulses, {
          scale: (index) => index % 3 === 0 ? 1.045 : 0.985,
          duration: 5.5,
          stagger: { each: 0.035, from: 'center' },
          ease: 'sine.inOut'
        }, 0)
        .to(orbits, { rotation: 8, duration: 12, ease: 'sine.inOut' }, 0)
        .to(flowLinks, {
          strokeDashoffset: 0,
          duration: 6.5,
          stagger: 0.12,
          ease: 'atlasMechanical'
        }, 0);

      const horizontal = gsap.to(canvas, {
        x: () => -(canvas.scrollWidth - window.innerWidth),
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          id: 'service-atlas-horizontal',
          trigger: stage,
          start: 'top top',
          end: () => `+=${Math.round((canvas.scrollWidth - window.innerWidth) * (desktop ? 1.02 : mobile ? 1.2 : 1.1))}`,
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
        }
      });

      motionModules.forEach((module, index) => {
        gsap.fromTo(module, {
          yPercent: index % 2 ? 12 : -10,
          autoAlpha: 0.28
        }, {
          yPercent: 0,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: module,
            containerAnimation: horizontal,
            start: 'left 94%',
            end: 'left 58%',
            scrub: 0.5
          }
        });
      });

      parallaxModules.forEach((module, index) => {
        gsap.fromTo(module, { xPercent: index % 2 ? -5 : 5 }, {
          xPercent: index % 2 ? 6 : -6,
          ease: 'none',
          scrollTrigger: {
            trigger: module,
            containerAnimation: horizontal,
            start: 'left right',
            end: 'right left',
            scrub: true
          }
        });
      });

      gsap.set(finaleHalves[0], mobile ? { yPercent: -100 } : { xPercent: -100 });
      gsap.set(finaleHalves[1], mobile ? { yPercent: 100 } : { xPercent: 100 });
      gsap.set(finaleWordmark, { autoAlpha: 0, scaleX: 0.05, transformOrigin: 'center' });
      gsap.set(finaleLines, { yPercent: 112 });
      gsap.set(finaleSeam, mobile
        ? { scaleX: 0, transformOrigin: 'left center' }
        : { scaleY: 0, transformOrigin: 'center top' });
      gsap.set(finaleAction, { autoAlpha: 0, y: 22 });

      const finaleTimeline = gsap.timeline({
        defaults: { ease: 'atlasPrecision' },
        scrollTrigger: {
          id: 'service-atlas-finale',
          trigger: finale,
          start: 'top bottom',
          end: 'top top',
          scrub: 0.72,
          invalidateOnRefresh: true,
          refreshPriority: 2
        }
      });

      finaleTimeline
        .to(finaleHalves, { xPercent: 0, yPercent: 0, duration: 1, ease: 'atlasMechanical' }, 0)
        .to(finaleSeam, { scaleX: 1, scaleY: 1, duration: 0.7 }, 0.34)
        .to(finaleWordmark, { autoAlpha: 1, scaleX: 1, duration: 0.9 }, 0.32)
        .to(finaleLines, { yPercent: 0, duration: 0.72, stagger: 0.08 }, 0.5)
        .to(finaleAction, { autoAlpha: 1, y: 0, duration: 0.62 }, 0.72);

      return () => ambient.kill();
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
        <header className="service-journey__header">
          <span>02 // WHAT WE MAKE</span><span>ONE CONTINUOUS SERVICE FIELD</span>
        </header>

        <div className="service-atlas">
          {COLUMNS.map((column) => <i className="service-atlas__column" style={{ gridColumn: column + 1, gridRow: '1 / -1' }} key={column} />)}

          <div className="service-atlas__vertical service-atlas__vertical--brand">DAOVOS</div>
          <article className="service-atlas__module service-atlas__intro service-atlas__motion">
            <p>01 / DIGITAL HOMES</p><h2>CUSTOM<br />WEBSITES</h2>
            <span>A complete digital home shaped around the brand, its audience, and the way it needs to grow.</span>
          </article>
          <figure className="service-atlas__module service-atlas__radial-module service-atlas__motion service-atlas__parallax"><BklitRadarArt /><figcaption>AUDIENCE / STRUCTURE / GROWTH</figcaption></figure>
          <div className="service-atlas__vertical service-atlas__vertical--distinct">DISTINCT BY DESIGN / NEVER FROM A TEMPLATE</div>

          <article className="service-atlas__module service-atlas__landing service-atlas__motion">
            <p>02 / ONE DECISIVE ROUTE</p><h2>GET<br /><em>FOCUSED</em></h2><span>One message. One audience. One measurable action.</span>
          </article>
          <div className="service-atlas__module service-atlas__number service-atlas__number--001 service-atlas__motion">001</div>
          <figure className="service-atlas__module service-atlas__target-module service-atlas__motion service-atlas__parallax"><FffuelPerspectiveArt /><figcaption>ATTENTION → ACTION</figcaption></figure>

          <blockquote className="service-atlas__module service-atlas__quote service-atlas__motion">“Every element keeps the eye moving toward one clear decision.”</blockquote>
          <div className="service-atlas__module service-atlas__browser-module service-atlas__motion"><BklitScatterArt /><span>CAMPAIGN SIGNAL / RESPONSE</span></div>
          <div className="service-atlas__vertical service-atlas__vertical--route">LANDING EXPERIENCES / ONE ROUTE</div>

          <article className="service-atlas__module service-atlas__commerce-copy service-atlas__motion">
            <p>03 / DISCOVERY TO PURCHASE</p><h2>COMMERCE<br />SYSTEMS</h2><span>Catalogue, product detail, and checkout read as one continuous experience.</span>
          </article>
          <div className="service-atlas__module service-atlas__number service-atlas__number--002 service-atlas__motion">002</div>
          <figure className="service-atlas__module service-atlas__commerce-module service-atlas__motion service-atlas__parallax"><BklitSankeyArt /><figcaption>DISCOVER → DECIDE → PURCHASE</figcaption></figure>
          <div className="service-atlas__vertical service-atlas__vertical--commerce">DISCOVER / DECIDE / PURCHASE / RETURN</div>

          <article className="service-atlas__module service-atlas__interface-copy service-atlas__motion">
            <p>04 / ORGANIZED FOR USE</p><h2>MAKE<br /><em>COMPLEXITY</em><br />CLEAR</h2><span>Responsive interfaces turn dense content and behavior into a product people understand.</span>
          </article>
          <figure className="service-atlas__module service-atlas__interface-module service-atlas__motion service-atlas__parallax"><BklitSunburstArt /><figcaption>CONTENT / HIERARCHY / RESPONSE</figcaption></figure>
          <div className="service-atlas__module service-atlas__number service-atlas__number--003 service-atlas__motion">003</div>
          <div className="service-atlas__vertical service-atlas__vertical--interface">INTERFACE SYSTEMS / CLEAR AT EVERY SCALE</div>

          <article className="service-atlas__module service-atlas__care-copy service-atlas__motion">
            <p>05 / THE SYSTEM STAYS LIVE</p><h2>CARE +<br />OPTIMIZATION</h2><span>Long-term technical care keeps the experience fast, current, and dependable after launch.</span>
          </article>
          <figure className="service-atlas__module service-atlas__continuity-module service-atlas__motion service-atlas__parallax"><FffuelVortexArt /><figcaption>LIVE / CURRENT / DEPENDABLE</figcaption></figure>
          <div className="service-atlas__vertical service-atlas__vertical--care">BUILD / LAUNCH / LEARN / IMPROVE</div>

          <article className="service-atlas__module service-atlas__closing service-atlas__motion">
            <p>THE DAOVOS SYSTEM</p><h2>Design.<br />Build.<br /><em>Keep moving.</em></h2>
            <span>Five capabilities. One connected digital experience.</span>
          </article>
        </div>

      </div>

      <Finale />
    </section>
  );
};

function Finale() {
  return (
    <section className="service-journey__finale" aria-label="Start a project with DAOVOS">
      <div className="service-journey__finale-content">
        <div className="service-journey__finale-half service-journey__finale-half--dark">
          <header><span>03 // PROJECT INPUT</span><span>YOU / THE IDEA</span></header>
          <div className="service-journey__finale-copy">
            <p>THE STARTING POINT</p><h2><span className="service-journey__finale-line"><span>YOU BRING</span></span><span className="service-journey__finale-line"><span>THE IDEA.</span></span></h2>
            <p className="service-journey__finale-note">Ambition, context, and a reason to make something unmistakably yours.</p>
          </div>
          <footer>IDEA / AMBITION / CONTEXT</footer>
        </div>
        <div className="service-journey__finale-half service-journey__finale-half--light">
          <header><span>DAOVOS / PROJECT OUTPUT</span><span>INTAKE / OPEN</span></header>
          <div className="service-journey__finale-copy service-journey__finale-copy--build">
            <p>THE BUILT RESPONSE</p><h2><span className="service-journey__finale-line"><span>WE BUILD</span></span><span className="service-journey__finale-line"><span>THE EXPERIENCE.</span></span></h2>
            <div className="service-journey__finale-action"><p>From first interface to long-term care, DAOVOS turns the idea into a clear, durable digital experience.</p><a href="mailto:hello@daovos.com"><span>START A PROJECT</span><span aria-hidden="true">↗</span></a></div>
          </div>
          <footer>DESIGN / DEVELOPMENT / CARE</footer>
        </div>
        <div className="service-journey__finale-wordmark" aria-hidden="true"><div className="service-journey__finale-wordmark-clip"><DaovosWordmark width={1024} color="currentColor" className="service-journey__finale-splitmark" /></div></div>
        <i className="service-journey__finale-seam" aria-hidden="true" />
      </div>
    </section>
  );
}

export default ServiceJourney;
