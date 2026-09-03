import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DaovosWordmark } from '../brand';
import {
  CareVisual,
  CommerceVisual,
  FocusVisual,
  HomeVisual,
  InterfaceVisual,
  SignalInterlude
} from './ServiceAtlasVisuals';
import './service-journey.css';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);
CustomEase.create('atlasPrecision', '0.16, 1, 0.3, 1');
CustomEase.create('atlasMechanical', '0.25, 0, 0, 1');
CustomEase.create('atlasWipeX', '0.76, 0, 0.24, 1');
CustomEase.create('atlasWipeY', '0.62, 0, 0.16, 1');

const COLUMNS = Array.from({ length: 23 }, (_, index) => index);

export const ServiceJourney = () => {
  const rootRef = useRef(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const stage = root.querySelector('.service-journey__stage');
    const canvas = root.querySelector('.service-atlas');
    const visualBoxes = gsap.utils.toArray('.service-visual__artbox', root);
    const shutters = gsap.utils.toArray('.service-visual__shutter', root);
    const atlasHeaderText = gsap.utils.toArray('.service-journey__header > span', root);
    const atlasWipeTargets = gsap.utils.toArray([
      '.service-atlas article > p:first-child',
      '.service-atlas__headline-line',
      '.service-atlas article > span',
      '.service-atlas__vertical',
      '.service-atlas__number',
      '.service-atlas__quote',
      '.service-visual__frame',
      '.service-visual__artbox:not(.service-visual__artbox--signal)',
      '.service-visual__block',
      '.service-visual__signal-index',
      '.service-visual__title > span',
      '.service-visual__caption'
    ].join(', '), root);
    const rayGroups = gsap.utils.toArray('.service-visual__ray-group', root);
    const orbitGroups = gsap.utils.toArray('.service-visual__orbit-group', root);
    const sweepLines = gsap.utils.toArray('.service-visual__sweep', root);
    const bands = gsap.utils.toArray('.service-visual__bar', root);
    const vortexRings = gsap.utils.toArray('.service-visual__vortex-ring', root);
    const discs = gsap.utils.toArray('.service-visual__disc', root);
    const finale = root.querySelector('.service-journey__finale');
    const finaleHalves = gsap.utils.toArray('.service-journey__finale-half', root);
    const finaleWordmark = root.querySelector('.service-journey__finale-wordmark-clip');
    const finaleLines = gsap.utils.toArray('.service-journey__finale-line > span', root);
    const finaleDarkLines = gsap.utils.toArray('.service-journey__finale-half--dark .service-journey__finale-line > span', root);
    const finaleLightLines = gsap.utils.toArray('.service-journey__finale-half--light .service-journey__finale-line > span', root);
    const finaleHeaderText = gsap.utils.toArray('.service-journey__finale-half header > span', root);
    const finaleEyebrows = gsap.utils.toArray('.service-journey__finale-copy > p:first-child', root);
    const finaleNotes = gsap.utils.toArray('.service-journey__finale-note', root);
    const finaleFooters = gsap.utils.toArray('.service-journey__finale-half footer', root);
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
        gsap.set([stage, canvas, visualBoxes, shutters, atlasHeaderText, atlasWipeTargets, rayGroups, orbitGroups, sweepLines, bands, vortexRings, discs, finale, finaleHalves, finaleWordmark, finaleLines, finaleHeaderText, finaleEyebrows, finaleNotes, finaleFooters, finaleSeam, finaleAction], { clearProps: 'all' });
        return undefined;
      }

      gsap.set(canvas, { x: 0, force3D: true });
      gsap.set(shutters, { scaleY: 0, transformOrigin: 'center bottom' });
      gsap.set(sweepLines, { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set([rayGroups, orbitGroups, vortexRings, discs, visualBoxes], { transformOrigin: '50% 50%' });

      const ambient = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
      ambient
        .to(vortexRings, {
          rotation: (index, ring) => ring.dataset.direction === 'reverse' ? -18 : 18,
          duration: 12,
          stagger: { each: 0.03, from: 'edges' },
          ease: 'sine.inOut'
        }, 0)
        .to(rayGroups, { rotation: 7, duration: 11, ease: 'sine.inOut' }, 0)
        .to(orbitGroups, { rotation: -9, scale: 1.035, duration: 10, ease: 'sine.inOut' }, 0)
        .to(bands, {
          xPercent: (index) => index % 2 ? -7 : 7,
          duration: 6.5,
          stagger: { each: 0.06, from: 'center' },
          ease: 'sine.inOut'
        }, 0)
        .to(discs, {
          scale: (index) => index % 2 ? 0.94 : 1.06,
          duration: 5.2,
          stagger: { each: 0.08, from: 'random' },
          ease: 'sine.inOut'
        }, 0)
        .to(sweepLines, {
          strokeDashoffset: 0,
          duration: 7,
          stagger: 0.09,
          ease: 'atlasMechanical'
        }, 0);

      const wipeProperties = [
        '--atlas-wipe-right',
        '--atlas-wipe-left',
        '--atlas-wipe-bottom',
        '--atlas-wipe-top'
      ];
      const wipeReset = {
        '--atlas-wipe-top': '0%',
        '--atlas-wipe-right': '0%',
        '--atlas-wipe-bottom': '0%',
        '--atlas-wipe-left': '0%'
      };
      const allWipes = [...atlasHeaderText, ...atlasWipeTargets];
      const revealedWipes = new Set();
      const wipeIndexes = new Map(allWipes.map((item, index) => [item, index]));
      const wipeTriggers = new Map();
      const atlasColumns = gsap.utils.toArray('.service-atlas__column', canvas);

      allWipes.forEach((item, index) => {
        const direction = index % wipeProperties.length;
        item.classList.add('service-atlas__wipe-target');
        gsap.set(item, {
          ...wipeReset,
          [wipeProperties[direction]]: '100%',
          willChange: 'clip-path'
        });
      });

      const playWipe = (item, index) => {
        if (revealedWipes.has(item)) return;
        revealedWipes.add(item);
        const direction = index % wipeProperties.length;
        const axisEase = direction < 2 ? 'atlasWipeX' : 'atlasWipeY';

        gsap.to(item, {
          [wipeProperties[direction]]: '0%',
          duration: 1.35,
          ease: axisEase,
          delay: (index % 3) * 0.045,
          overwrite: 'auto',
          onComplete: () => {
            item.classList.remove('service-atlas__wipe-target');
            wipeProperties.forEach((property) => item.style.removeProperty(property));
            item.style.removeProperty('will-change');
          }
        });
      };

      const addWipeTrigger = (trigger, item) => {
        if (!trigger) return;
        const group = wipeTriggers.get(trigger) || [];
        group.push(item);
        wipeTriggers.set(trigger, group);
      };

      atlasHeaderText.forEach((item) => addWipeTrigger(root.querySelector('.service-journey__header'), item));
      atlasWipeTargets.forEach((item) => {
        if (item.matches('.service-atlas__vertical')) {
          const columnIndex = Number.parseInt(window.getComputedStyle(item).gridColumnStart, 10) - 1;
          addWipeTrigger(atlasColumns[columnIndex], item);
          return;
        }
        addWipeTrigger(item.closest('.service-atlas__module') || item.parentElement, item);
      });

      const completedTriggers = new Set();
      const checkWipeVisibility = () => {
        if (root.classList.contains('service-journey--motion-pending')) return;

        const stageRect = stage.getBoundingClientRect();
        if (stageRect.bottom <= 0 || stageRect.top >= window.innerHeight) return;

        wipeTriggers.forEach((items, trigger) => {
          if (completedTriggers.has(trigger)) return;
          const rect = trigger.getBoundingClientRect();
          const isVisible = rect.right > 0
            && rect.left < window.innerWidth
            && rect.bottom > 0
            && rect.top < window.innerHeight;
          if (!isVisible) return;

          completedTriggers.add(trigger);
          items.forEach((item) => {
            const index = wipeIndexes.get(item);
            if (index !== undefined) playWipe(item, index);
          });
        });
      };

      let wipeFrame = 0;
      const runWipeVisibilityLoop = () => {
        checkWipeVisibility();
        if (completedTriggers.size < wipeTriggers.size) {
          wipeFrame = window.requestAnimationFrame(runWipeVisibilityLoop);
        }
      };

      wipeFrame = window.requestAnimationFrame(runWipeVisibilityLoop);

      gsap.set(finale, { autoAlpha: 0 });
      gsap.set(finaleHalves[0], { clipPath: 'inset(0 0 0 100%)' });
      gsap.set(finaleHalves[1], { clipPath: 'inset(0 100% 0 0)' });
      gsap.set(finaleWordmark, { autoAlpha: 0, scaleX: 0.05, transformOrigin: 'center' });
      gsap.set(finaleDarkLines, { yPercent: 112 });
      gsap.set(finaleLightLines, { xPercent: 112 });
      gsap.set(finaleHeaderText, {
        xPercent: (index) => index % 2 ? 70 : -70,
        autoAlpha: 0
      });
      gsap.set(finaleEyebrows, { scaleX: 0, transformOrigin: 'left center', autoAlpha: 0.35 });
      gsap.set(finaleNotes, { yPercent: 70, autoAlpha: 0 });
      gsap.set(finaleFooters, { xPercent: (index) => index ? 24 : -24, autoAlpha: 0 });
      gsap.set(finaleSeam, mobile
        ? { scaleX: 0, transformOrigin: 'left center' }
        : { scaleY: 0, transformOrigin: 'center top' });
      gsap.set(finaleAction, { autoAlpha: 0, y: 22 });

      const atlasTravelUnits = desktop ? 8 : mobile ? 9 : 8.5;
      const closingHoldUnits = mobile ? 1.1 : 1.35;
      const journeyTimeline = gsap.timeline({
        defaults: { ease: 'atlasPrecision' },
        scrollTrigger: {
          id: 'service-atlas-horizontal-finale',
          trigger: stage,
          start: 'top top',
          end: () => {
            const atlasDistance = canvas.scrollWidth - window.innerWidth;
            const travelFactor = desktop ? 1.02 : mobile ? 1.2 : 1.1;
            const holdDistance = window.innerWidth * (mobile ? 1.1 : 0.9);
            const wipeDistance = window.innerWidth * (mobile ? 2.2 : 1.8);
            return `+=${Math.round(atlasDistance * travelFactor + holdDistance + wipeDistance)}`;
          },
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

      journeyTimeline
        .to(canvas, {
          x: () => -(canvas.scrollWidth - window.innerWidth),
          duration: atlasTravelUnits,
          ease: 'none',
          force3D: true
        }, 0)
        .addLabel('closingFrameHold', atlasTravelUnits)
        .addLabel('finaleWipe', atlasTravelUnits + closingHoldUnits)
        .set(finale, { autoAlpha: 1 }, 'finaleWipe')
        .to(finaleHalves[0], {
          clipPath: 'inset(0 0 0 0%)',
          duration: 1.18,
          ease: 'atlasWipeX'
        }, 'finaleWipe')
        .to(finaleHalves[1], {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.18,
          ease: 'atlasWipeX'
        }, 'finaleWipe+=0.08')
        .to(finaleSeam, { scaleX: 1, scaleY: 1, duration: 0.68 }, 'finaleWipe+=0.34')
        .to(finaleWordmark, { autoAlpha: 1, scaleX: 1, duration: 0.92 }, 'finaleWipe+=0.42')
        .to(finaleHeaderText, { xPercent: 0, autoAlpha: 1, duration: 0.56, stagger: 0.035 }, 'finaleWipe+=0.58')
        .to(finaleEyebrows, { scaleX: 1, autoAlpha: 1, duration: 0.5, stagger: 0.1 }, 'finaleWipe+=0.64')
        .to(finaleDarkLines, { yPercent: 0, duration: 0.74, stagger: 0.08 }, 'finaleWipe+=0.72')
        .to(finaleLightLines, { xPercent: 0, duration: 0.74, stagger: 0.08 }, 'finaleWipe+=0.76')
        .to(finaleNotes, { yPercent: 0, autoAlpha: 0.72, duration: 0.58 }, 'finaleWipe+=0.92')
        .to(finaleFooters, { xPercent: 0, autoAlpha: 0.54, duration: 0.52, stagger: 0.08 }, 'finaleWipe+=0.98')
        .to(finaleAction, { autoAlpha: 1, y: 0, duration: 0.64 }, 'finaleWipe+=1.02')
        .to(finale, { autoAlpha: 1, duration: 0.85, ease: 'none' }, 'finaleWipe+=1.3');

      return () => {
        ambient.kill();
        window.cancelAnimationFrame(wipeFrame);
        allWipes.forEach((item) => {
          item.classList.remove('service-atlas__wipe-target');
          wipeProperties.forEach((property) => item.style.removeProperty(property));
          item.style.removeProperty('will-change');
        });
      };
    });

    let cancelled = false;
    let revealFrame = 0;
    const commitTextMotion = () => {
      if (cancelled) return;
      ScrollTrigger.refresh();
      revealFrame = window.requestAnimationFrame(() => {
        if (!cancelled) root.classList.remove('service-journey--motion-pending');
      });
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(commitTextMotion);
    } else {
      commitTextMotion();
    }

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(revealFrame);
      mm.revert();
    };
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className="service-journey service-journey--motion-pending" aria-label="What DAOVOS makes">
      <div className="service-journey__stage">
        <header className="service-journey__header" aria-hidden="true" />

        <div className="service-atlas">
          {COLUMNS.map((column) => <i className="service-atlas__column" style={{ gridColumn: column + 1, gridRow: '1 / -1' }} key={column} />)}

          <div className="service-atlas__vertical service-atlas__vertical--brand">DAOVOS</div>
          <article className="service-atlas__module service-atlas__intro service-atlas__motion">
            <h2><span className="service-atlas__headline-line">CUSTOM</span><span className="service-atlas__headline-line">WEBSITES</span></h2>
            <span>A complete digital home shaped around the brand, its audience, and the way it needs to grow.</span>
          </article>
          <figure className="service-atlas__module service-atlas__radial-module service-atlas__motion service-atlas__parallax"><HomeVisual /></figure>
          <div className="service-atlas__vertical service-atlas__vertical--distinct">DISTINCT BY DESIGN / NEVER FROM A TEMPLATE</div>

          <article className="service-atlas__module service-atlas__landing service-atlas__motion">
            <h2><span className="service-atlas__headline-line">GET</span><span className="service-atlas__headline-line"><em>FOCUSED</em></span></h2><span>One message. One audience. One measurable action.</span>
          </article>
          <div className="service-atlas__module service-atlas__number service-atlas__number--001 service-atlas__motion">001</div>
          <figure className="service-atlas__module service-atlas__target-module service-atlas__motion service-atlas__parallax"><FocusVisual /></figure>

          <blockquote className="service-atlas__module service-atlas__quote service-atlas__motion">“Every element keeps the eye moving toward one clear decision.”</blockquote>
          <div className="service-atlas__module service-atlas__browser-module service-atlas__motion service-atlas__parallax"><SignalInterlude /></div>
          <div className="service-atlas__vertical service-atlas__vertical--route">LANDING EXPERIENCES / ONE ROUTE</div>

          <article className="service-atlas__module service-atlas__commerce-copy service-atlas__motion">
            <h2><span className="service-atlas__headline-line">COMMERCE</span><span className="service-atlas__headline-line">SYSTEMS</span></h2><span>Catalogue, product detail, and checkout read as one continuous experience.</span>
          </article>
          <div className="service-atlas__module service-atlas__number service-atlas__number--002 service-atlas__motion">002</div>
          <figure className="service-atlas__module service-atlas__commerce-module service-atlas__motion service-atlas__parallax"><CommerceVisual /></figure>
          <div className="service-atlas__vertical service-atlas__vertical--commerce">DISCOVER / DECIDE / PURCHASE / RETURN</div>

          <article className="service-atlas__module service-atlas__interface-copy service-atlas__motion">
            <h2><span className="service-atlas__headline-line">MAKE</span><span className="service-atlas__headline-line"><em>COMPLEXITY</em></span><span className="service-atlas__headline-line">CLEAR</span></h2><span>Responsive interfaces turn dense content and behavior into a product people understand.</span>
          </article>
          <figure className="service-atlas__module service-atlas__interface-module service-atlas__motion service-atlas__parallax"><InterfaceVisual /></figure>
          <div className="service-atlas__module service-atlas__number service-atlas__number--003 service-atlas__motion">003</div>
          <div className="service-atlas__vertical service-atlas__vertical--interface">INTERFACE SYSTEMS / CLEAR AT EVERY SCALE</div>

          <article className="service-atlas__module service-atlas__care-copy service-atlas__motion">
            <h2><span className="service-atlas__headline-line">CARE +</span><span className="service-atlas__headline-line">OPTIMIZATION</span></h2><span>Long-term technical care keeps the experience fast, current, and dependable after launch.</span>
          </article>
          <figure className="service-atlas__module service-atlas__continuity-module service-atlas__motion service-atlas__parallax"><CareVisual /></figure>
          <div className="service-atlas__vertical service-atlas__vertical--care">BUILD / LAUNCH / LEARN / IMPROVE</div>

          <article className="service-atlas__module service-atlas__closing service-atlas__motion">
            <h2><span className="service-atlas__headline-line">Design.</span><span className="service-atlas__headline-line">Build.</span><span className="service-atlas__headline-line"><em>Keep moving.</em></span></h2>
            <span>Five capabilities. One connected digital experience.</span>
          </article>
        </div>

        <Finale />
      </div>
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
