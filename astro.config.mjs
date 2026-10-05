import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://physicsverse.github.io',
  base: '/',
  integrations: [
    starlight({
      title: 'PhysicsVerse',
      description: 'The Pioneer Physics Solving Hub of Bangladesh — Complete HSC & Admission Solution',
      social: [],
      credits: false,
      customCss: [
        'katex/dist/katex.min.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'পদার্থবিজ্ঞান ১ম পত্র (Physics 1st Paper)',
          collapsed: false,
          items: [
            {
              label: 'অধ্যায় ১: ভৌতজগত ও পরিমাপ',
              collapsed: true,
              items: [
                { label: '১.১ ভৌতজগতের প্রকৃতি ও ক্রমবিকাশ', link: '/paper-1/chapter-01/nature-evolution/' },
                { label: '১.২ পদার্থবিজ্ঞানের পরিসর ও অবদান', link: '/paper-1/chapter-01/scope-excitement/' },
                { label: '১.৩ ধারণা, সূত্র, নীতি, স্বীকার্য ও তত্ত্ব', link: '/paper-1/chapter-01/concepts-laws-theories/' },
                { label: '১.৪ পদার্থবিজ্ঞান ও অন্যান্য জ্ঞানজগত', link: '/paper-1/chapter-01/interdisciplinary-connections/' },
                { label: '১.৫ স্থান, সময় ও ভরের ধারণা', link: '/paper-1/chapter-01/space-time-mass/' },
                { label: '১.৬ মৌলিক ও লব্ধ একক (SI Units)', link: '/paper-1/chapter-01/units-dimensions/' },
                { label: '১.৭ পরিমাপের মূলনীতি ও ইতিহাস', link: '/paper-1/chapter-01/measurement-principles-history/' },
                { label: '১.৮ পরিমাপে ত্রুটি ও প্রকারভেদ', link: '/paper-1/chapter-01/errors-in-measurement/' },
                { label: '১.৯ শুদ্ধতর মান ও তাৎপর্যপূর্ণ অঙ্ক', link: '/paper-1/chapter-01/precision-significant-figures/' },
                { label: '১.১০ ব্যবহারিক: স্ফেরোমিটার ও নিক্তি', link: '/paper-1/chapter-01/practical/' },
              ],
            },
            {
              label: 'অধ্যায় ২: ভেক্টর',
              collapsed: true,
              items: [
                { label: '২.১ ভেক্টর ও এর মৌলিক ধর্ম', link: '/paper-1/chapter-02/vector-properties/' },
                { label: '২.২ ভেক্টর রাশির প্রকাশ ও প্রতীক', link: '/paper-1/chapter-02/vector-representation/' },
                { label: '২.৩ বিশেষ ভেক্টরসমূহ (নাল, একক, সরণ)', link: '/paper-1/chapter-02/special-vectors/' },
                { label: '২.৪ জ্যামিতিক যোজন নিয়ম (সামান্তরিক সূত্র)', link: '/paper-1/chapter-02/parallelogram-law/' },
                { label: '২.৫ লম্বাংশ ও উপাংশে বিভাজন', link: '/paper-1/chapter-02/vector-resolution/' },
                { label: '২.৬ ত্রিমাত্রিক আয়তাকার স্থানাঙ্ক ব্যবস্থা', link: '/paper-1/chapter-02/3d-rectangular-system/' },
                { label: '২.৭ স্কেলার ও ভেক্টর গুণন', link: '/paper-1/chapter-02/dot-cross-products/' },
                { label: '২.৮ পদার্থবিজ্ঞানে ক্যালকুলাস', link: '/paper-1/chapter-02/calculus-foundations/' },
                { label: '২.৯ ভেক্টর ক্যালকুলাস (অন্তরীকরণ ও যোগজীকরণ)', link: '/paper-1/chapter-02/vector-calculus/' },
                { label: '২.১০ ভেক্টর অপারেটর (গ্র্যাডিয়েন্ট, ডাইভারজেন্স, কার্ল)', link: '/paper-1/chapter-02/vector-operators/' },
              ],
            },
            {
              label: 'অধ্যায় ৩: গতিবিদ্যা',
              collapsed: true,
              items: [
                { label: '৩.১ জড় কাঠামো ও আপেক্ষিক গতি', link: '/paper-1/chapter-03/reference-frames/' },
                { label: '৩.২ গতি বর্ণনায় ক্যালকুলাসের প্রয়োগ', link: '/paper-1/chapter-03/calculus-kinematics/' },
                { label: '৩.৩ অবস্থান-সময় ও বেগ-সময় লেখচিত্র', link: '/paper-1/chapter-03/motion-graphs/' },
                { label: '৩.৪ প্রক্ষেপক বা প্রাস (Projectile)', link: '/paper-1/chapter-03/projectile-motion/' },
                { label: '৩.৫ পড়ন্ত বস্তুর গ্যালিলিওর সূত্র', link: '/paper-1/chapter-03/falling-bodies/' },
                { label: '৩.৬ সুষম বৃত্তীয় গতি ও কৌণিক বেগ', link: '/paper-1/chapter-03/uniform-circular-motion/' },
              ],
            },
            {
              label: 'অধ্যায় ৪: নিউটনিয়ান বলবিদ্যা',
              collapsed: true,
              items: [
                { label: '৪.১ বলের স্বজ্ঞামূলক ধারণা ও প্রকৃতি', link: '/paper-1/chapter-04/intuitive-force/' },
                { label: '৪.২ নিউটনের গতির ২য় সূত্র ও ক্যালকুলাস', link: '/paper-1/chapter-04/newtons-second-law/' },
                { label: '৪.৩ গতিসূত্রের পারস্পরিক সম্পর্ক ও সীমাবদ্ধতা', link: '/paper-1/chapter-04/newtons-laws-relations/' },
                { label: '৪.৪ নিউটনের সূত্রের ব্যবহারিক প্রয়োগ', link: '/paper-1/chapter-04/applications-of-newton-laws/' },
                { label: '৪.৫ বল, ক্ষেত্র ও প্রাবল্যের ধারণা', link: '/paper-1/chapter-04/force-field-intensity/' },
                { label: '৪.৬ রৈখিক ভরবেগের নিত্যতা ও রকেট', link: '/paper-1/chapter-04/linear-momentum-rockets/' },
                { label: '৪.৭ জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ', link: '/paper-1/chapter-04/moment-of-inertia/' },
                { label: '৪.৮ কৌণিক গতিবিদ্যা (সরণ, বেগ, ত্বরণ)', link: '/paper-1/chapter-04/angular-kinematics/' },
                { label: '৪.৯ টর্ক ও ঘূর্ণন গতিশক্তি', link: '/paper-1/chapter-04/torque-rotational-energy/' },
                { label: '৪.১০ টর্ক ও জড়তার ভ্রামকের সম্পর্ক', link: '/paper-1/chapter-04/torque-inertia-relation/' },
                { label: '৪.১১ কৌণিক ভরবেগের সংরক্ষণশীলতা', link: '/paper-1/chapter-04/conservation-angular-momentum/' },
                { label: '৪.১২ কেন্দ্রমুখী বল ও রাস্তার ব্যাংকিং', link: '/paper-1/chapter-04/centripetal-force-banking/' },
                { label: '৪.১৩ একমাত্রিক স্থিতিস্থাপক ও অস্থিতিস্থাপক সংঘর্ষ', link: '/paper-1/chapter-04/collisions/' },
                { label: '৪.১৪ ব্যবহারিক: ফ্লাই হুইলের জড়তার ভ্রামক', link: '/paper-1/chapter-04/practical/' },
              ],
            },
            {
              label: 'অধ্যায় ৫: কাজ, শক্তি ও ক্ষমতা',
              collapsed: true,
              items: [
                { label: '৫.১ কাজ ও শক্তির সার্বজনীন ধারণা', link: '/paper-1/chapter-05/work-energy-basics/' },
                { label: '৫.২ পরিবর্তনশীল বল ও স্প্রিং সংক্রান্ত কাজ', link: '/paper-1/chapter-05/spring-variable-work/' },
                { label: '৫.৩ কাজ-শক্তি উপপাদ্য ও সংরক্ষণশীলতা নীতি', link: '/paper-1/chapter-05/work-energy-theorem/' },
                { label: '৫.৪ ক্ষমতা, পাম্প ও কর্মদক্ষতা', link: '/paper-1/chapter-05/power-pumps-efficiency/' },
              ],
            },
            {
              label: 'অধ্যায় ৬: মহাকর্ষ ও অভিকর্ষ',
              collapsed: true,
              items: [
                { label: '৬.১ কেপলারের সূত্র ও মহাকর্ষীয় বল', link: '/paper-1/chapter-06/keplers-laws/' },
                { label: '৬.২ অভিকর্ষজ ত্বরণ ($g$)-এর উচ্চতা ও গভীরতাভিত্তিক তারতম্য', link: '/paper-1/chapter-06/variation-of-g/' },
                { label: '৬.৩ মহাকর্ষীয় প্রাবল্য, বিভব ও মুক্তিবেগ', link: '/paper-1/chapter-06/potential-field-escape/' },
                { label: '৬.৪ কৃত্রিম উপগ্রহ ও ভূ-স্থির উপগ্রহের কক্ষীয় গতি', link: '/paper-1/chapter-06/satellites/' },
              ],
            },
            {
              label: 'অধ্যায় ৭: পদার্থের গাঠনিক ধর্ম',
              collapsed: true,
              items: [
                { label: '৭.১ স্থিতিস্থাপকতা, পীড়ন ও বিকৃতি', link: '/paper-1/chapter-07/elasticity-stress-strain/' },
                { label: '৭.২ স্থিতিস্থাপক গুণাঙ্কসমূহ (ইয়ং, আয়তন, দৃঢ়তা)', link: '/paper-1/chapter-07/elastic-moduli/' },
                { label: '৭.৩ সান্দ্রতা, স্টোকসের সূত্র ও প্রান্তিক বেগ', link: '/paper-1/chapter-07/viscosity-stokes-law/' },
                { label: '৭.৪ পৃষ্ঠটান, পৃষ্ঠশক্তি ও কৈশিকতা', link: '/paper-1/chapter-07/surface-tension-capillarity/' },
              ],
            },
            {
              label: 'অধ্যায় ৮: পর্যায়বৃত্ত গতি',
              collapsed: true,
              items: [
                { label: '৮.১ পর্যায়বৃত্ত গতি ও সরল ছন্দিত স্পন্দন', link: '/paper-1/chapter-08/periodic-shm-intro/' },
                { label: '৮.২ সরল ছন্দিত স্পন্দনের ব্যবকলনীয় সমীকরণ', link: '/paper-1/chapter-08/differential-equation-shm/' },
                { label: '৮.৩ সরণ, বেগ, ত্বরণ ও স্পন্দন শক্তি', link: '/paper-1/chapter-08/shm-energy-equations/' },
                { label: '৮.৪ সরল দোলক ও সেকেন্ড দোলক', link: '/paper-1/chapter-08/simple-pendulum/' },
                { label: '৮.৫ স্প্রিং-ভর সিস্টেম ও সংযুক্তি', link: '/paper-1/chapter-08/spring-mass-system/' },
              ],
            },
            {
              label: 'অধ্যায় ৯: তরঙ্গ',
              collapsed: true,
              items: [
                { label: '৯.১ তরঙ্গের প্রকৃতি ও অগ্রগামী তরঙ্গ সমীকরণ', link: '/paper-1/chapter-09/progressive-wave-equation/' },
                { label: '৯.২ স্থির তরঙ্গ ও টানা তারের আড় কম্পন', link: '/paper-1/chapter-09/standing-waves/' },
                { label: '৯.৩ সুরশলাকা, বীট ও তীব্রতা লেভেল (ডেসিবল)', link: '/paper-1/chapter-09/beats-sound-intensity/' },
                { label: '৯.৪ শব্দের ডপলার ক্রিয়া', link: '/paper-1/chapter-09/doppler-effect/' },
              ],
            },
            {
              label: 'অধ্যায় ১০: আদর্শ গ্যাস ও গতিতত্ত্ব',
              collapsed: true,
              items: [
                { label: '১০.১ গ্যাসের সূত্রাবলি ও আদর্শ গ্যাস সমীকরণ', link: '/paper-1/chapter-10/gas-laws-ideal-gas/' },
                { label: '১০.২ গ্যাসের গতিতত্ত্ব ও RMS বেগ', link: '/paper-1/chapter-10/kinetic-theory-rms/' },
                { label: '১০.৩ স্বাধীনতার মাত্রা ও শক্তির সমবিভাজন নীতি', link: '/paper-1/chapter-10/degrees-of-freedom-equipartition/' },
                { label: '১০.৪ বায়ুমণ্ডলীয় আর্দ্রতা, শিশিরাঙ্ক ও আপেক্ষিক আর্দ্রতা', link: '/paper-1/chapter-10/humidity-dew-point/' },
              ],
            },
          ],
        },
        {
          label: 'পদার্থবিজ্ঞান ২য় পত্র (Physics 2nd Paper)',
          collapsed: false,
          items: [
            {
              label: 'অধ্যায় ১: তাপগতিবিদ্যা',
              collapsed: true,
              items: [
                { label: '১.১ তাপমাত্রা পরিমাপের নীতি ও শূন্যতম সূত্র', link: '/paper-2/chapter-01/zeroth-law-thermometry/' },
                { label: '১.২ ১ম সূত্র ও অভ্যন্তরীণ শক্তি', link: '/paper-2/chapter-01/first-law-internal-energy/' },
                { label: '১.৩ সমোষ্ণ, রুদ্ধতাপীয় ও অন্যান্য তাপগতীয় প্রক্রিয়া', link: '/paper-2/chapter-01/thermodynamic-processes/' },
                { label: '১.৪ তাপগতিবিদ্যার ২য় সূত্র (ক্লসিয়াস ও কেলভিন-প্ল্যাঙ্ক)', link: '/paper-2/chapter-01/second-law-statements/' },
                { label: '১.৫ প্রত্যাবর্তী ও অপ্রত্যাবর্তী প্রক্রিয়া', link: '/paper-2/chapter-01/reversible-irreversible/' },
                { label: '১.৬ কার্নো চক্র, তাপ ইঞ্জিন ও রেফ্রিজারেটর', link: '/paper-2/chapter-01/carno-cycle-refrigerator/' },
                { label: '১.৭ এন্ট্রপি ও শক্তির রূপান্তর', link: '/paper-2/chapter-01/entropy-disorder/' },
              ],
            },
            {
              label: 'অধ্যায় ২: স্থির তড়িৎ',
              collapsed: true,
              items: [
                { label: '২.১ কুলম্বের সূত্র ও ক্ষেত্র তত্ত্ব', link: '/paper-2/chapter-02/coulombs-law-field/' },
                { label: '২.২ বিন্দু চার্জের প্রাবল্য ও তড়িৎ বিভব', link: '/paper-2/chapter-02/intensity-potential/' },
                { label: '২.৩ সমবিভব তল ও বৈশিষ্ট্য', link: '/paper-2/chapter-02/equipotential-surface/' },
                { label: '২.৪ তড়িৎ দ্বিমেরু ও দ্বিমেরু ভ্রামক', link: '/paper-2/chapter-02/electric-dipole/' },
                { label: '২.৫ চার্জের কোয়ান্টায়ন ও সংরক্ষণশীলতা', link: '/paper-2/chapter-02/charge-quantization/' },
                { label: '২.৬ অপরিবাহী ও ডাইইলেক্ট্রিক পোলারাইজেশন', link: '/paper-2/chapter-02/dielectrics-polarization/' },
                { label: '২.৭ ধারক, সমবায় ও সঞ্চিত শক্তি', link: '/paper-2/chapter-02/capacitors-energy/' },
                { label: '২.৮ গাউসের সূত্র ও কুলম্ব সূত্রের প্রতিপাদন', link: '/paper-2/chapter-02/gauss-law-derivation/' },
                { label: '২.৯ কুলম্ব সূত্রের সীমাবদ্ধতা', link: '/paper-2/chapter-02/coulombs-law-limitations/' },
              ],
            },
            {
              label: 'অধ্যায় ৩: চল তড়িৎ',
              collapsed: true,
              items: [
                { label: '৩.১ রোধের ওপর তাপমাত্রার প্রভাব ও উষ্ণতা সহগ', link: '/paper-2/chapter-03/resistance-temperature-coefficient/' },
                { label: '৩.২ জুলের তাপীয় ক্রিয়া ও সমীকরণ', link: '/paper-2/chapter-03/joules-heating-effect/' },
                { label: '৩.৩ কোষের সংযোগ ও অভ্যন্তরীণ রোধ', link: '/paper-2/chapter-03/cells-internal-resistance/' },
                { label: '৩.৪ কির্শফের সূত্র ও বর্তনী সমাধান', link: '/paper-2/chapter-03/kirchhoffs-laws-circuits/' },
                { label: '৩.৫ হুইটস্টোন ব্রিজ ও নীতি', link: '/paper-2/chapter-03/wheatstone-bridge/' },
                { label: '৩.৬ শান্ট ও গ্যালভানোমিটারের পাল্লা বৃদ্ধি', link: '/paper-2/chapter-03/shunt-range-extension/' },
                { label: '৩.৭ ব্যবহারিক: মিটার ব্রিজ ও পটেনশিওমিটার', link: '/paper-2/chapter-03/practical/' },
              ],
            },
            {
              label: 'অধ্যায় ৪: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব',
              collapsed: true,
              items: [
                { label: '৪.১ ওয়েরস্টেডের পরীক্ষা ও চৌম্বক ক্ষেত্র', link: '/paper-2/chapter-04/oersted-experiment/' },
                { label: '৪.২ বিয়ো-স্যাভার সূত্র ও অ্যাম্পিয়ারের সূত্র', link: '/paper-2/chapter-04/biot-savart-ampere/' },
                { label: '৪.৩ গতিশীল চার্জে লরেঞ্জ বল ও তারের ওপর বল', link: '/paper-2/chapter-04/lorentz-force/' },
                { label: '৪.৪ হল প্রভাব (Hall Effect)', link: '/paper-2/chapter-04/hall-effect/' },
                { label: '৪.৫ চৌম্বক ক্ষেত্রে প্রবাহী লুপে টর্ক', link: '/paper-2/chapter-04/torque-magnetic-loop/' },
                { label: '৪.৬ ইলেকট্রন স্পিন ও পারমাণবিক চৌম্বক মোমেন্ট', link: '/paper-2/chapter-04/electron-spin-moment/' },
                { label: '৪.৭ পৃথিবীর চৌম্বকত্ব ও ভূ-চৌম্বক উপাদান', link: '/paper-2/chapter-04/geomagnetism-elements/' },
                { label: '৪.৮ চৌম্বক পদার্থের শ্রেণিবিভাগ ও ডোমেইন তত্ত্ব', link: '/paper-2/chapter-04/magnetic-materials-domains/' },
                { label: '৪.৯ তড়িৎ চুম্বক, স্থায়ী চুম্বক ও হিস্টেরেসিস লুপ', link: '/paper-2/chapter-04/hysteresis-electromagnets/' },
              ],
            },
            {
              label: 'অধ্যায় ৫: তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ',
              collapsed: true,
              items: [
                { label: '৫.১ তাড়িতচৌম্বকীয় আবেশ ও ফ্যারাডের সূত্র', link: '/paper-2/chapter-05/electromagnetic-induction-faraday/' },
                { label: '৫.২ লেঞ্জের সূত্র ও শক্তির নিত্যতা', link: '/paper-2/chapter-05/lenzs-law-conservation/' },
                { label: '৫.৩ স্বকীয় আবেশ ও পারস্পরিক আবেশ গুণাঙ্ক', link: '/paper-2/chapter-05/self-mutual-inductance/' },
                { label: '৫.৪ এসি জেনারেটর ও দিক পরিবর্তী প্রবাহ', link: '/paper-2/chapter-05/ac-generator/' },
                { label: '৫.৫ এসি প্রবাহের RMS মান ও শীর্ষমান', link: '/paper-2/chapter-05/ac-rms-peak-values/' },
                { label: '৫.৬ ট্রান্সফরমার ও ক্ষমতা সঞ্চালন', link: '/paper-2/chapter-05/transformers-power-loss/' },
              ],
            },
            {
              label: 'অধ্যায় ৬: জ্যামিতিক আলোকবিজ্ঞান',
              collapsed: true,
              items: [
                { label: '৬.১ ফার্মাটের নীতি ও আলোর প্রতিফলন/প্রতিসরণ', link: '/paper-2/chapter-06/fermats-principle/' },
                { label: '৬.২ লেন্স প্রস্তুতকারকের সমীকরণ ও লেন্সের ক্ষমতা', link: '/paper-2/chapter-06/lens-makers-formula/' },
                { label: '৬.৩ প্রিজমে আলোর প্রতিসরণ ও ন্যূনতম বিচ্যুতি', link: '/paper-2/chapter-06/prism-minimum-deviation/' },
                { label: '৬.৪ অপটিক্যাল যন্ত্রসমূহ (মাইক্রোস্কোপ ও দূরবীক্ষণ)', link: '/paper-2/chapter-06/microscopes-telescopes/' },
                { label: '৬.৫ ব্যবহারিক: প্রতিসরাঙ্ক ও লেন্সের ফোকাস দূরত্ব', link: '/paper-2/chapter-06/practical/' },
              ],
            },
            {
              label: 'অধ্যায় ৭: ভৌত আলোকবিজ্ঞান',
              collapsed: true,
              items: [
                { label: '৭.১ তাড়িতচৌম্বকীয় তরঙ্গ ও স্পেকট্রাম', link: '/paper-2/chapter-07/em-spectrum/' },
                { label: '৭.২ তরঙ্গমুখ ও হাইগেনসের নীতি', link: '/paper-2/chapter-07/huygens-principle/' },
                { label: '৭.৩ আলোর ব্যতিচার ও ইয়ং-এর দ্বি-চির পরীক্ষা', link: '/paper-2/chapter-07/interference-youngs-experiment/' },
                { label: '৭.৪ একক চিরের ফ্রনহফার অপবর্তন ও গ্রেটিং', link: '/paper-2/chapter-07/diffraction-grating/' },
                { label: '৭.৫ সমবর্তন, ব্রুস্টারের সূত্র ও ম্যালাসের সূত্র', link: '/paper-2/chapter-07/polarization-brewster-malus/' },
              ],
            },
            {
              label: 'অধ্যায় ৮: আধুনিক পদার্থবিজ্ঞানের সূচনা',
              collapsed: true,
              items: [
                { label: '৮.১ জড় কাঠামো ও বিশেষ আপেক্ষিকতা তত্ত্ব', link: '/paper-2/chapter-08/special-relativity-postulates/' },
                { label: '৮.২ কাল দীর্ঘায়ন, দৈর্ঘ্য সংকোচন ও ভর বৃদ্ধি', link: '/paper-2/chapter-08/time-dilation-length-mass/' },
                { label: '৮.৩ ভর-শক্তি রূপান্তর সমীকরণ ($E = mc^2$)', link: '/paper-2/chapter-08/mass-energy-equivalence/' },
                { label: '৮.৪ আলোক তড়িৎ ক্রিয়া ও আইনস্টাইনের সমীকরণ', link: '/paper-2/chapter-08/photoelectric-effect/' },
                { label: '৮.৫ এক্স-রে, কম্পটন ক্রিয়া ও ডি-ব্রগলি তরঙ্গ', link: '/paper-2/chapter-08/xray-compton-debroglie/' },
              ],
            },
            {
              label: 'অধ্যায় ৯: পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান',
              collapsed: true,
              items: [
                { label: '৯.১ বোর পরমাণু মডেল ও হাইড্রোজেন বর্ণালী', link: '/paper-2/chapter-09/bohr-model-spectra/' },
                { label: '৯.২ তেজস্ক্রিয় ক্ষয় সূত্র, অর্ধায়ু ও গড় আয়ু', link: '/paper-2/chapter-09/radioactivity-decay/' },
                { label: '৯.৩ ভর ত্রুটি, বন্ধন শক্তি ও নিউক্লিয়ার বিক্রিয়া (ফিশন/ফিউশন)', link: '/paper-2/chapter-09/nuclear-binding-fission-fusion/' },
              ],
            },
            {
              label: 'অধ্যায় ১০: সেমিকন্ডাক্টর ও ইলেকট্রনিক্স',
              collapsed: true,
              items: [
                { label: '১০.১ শক্তি ব্যান্ড তত্ত্ব ও সেমিকন্ডাক্টরের প্রকারভেদ', link: '/paper-2/chapter-10/energy-bands-semiconductors/' },
                { label: '১০.২ p-n জংশন ডায়োড ও রেকটিফায়ার', link: '/paper-2/chapter-10/pn-junction-rectifiers/' },
                { label: '১০.৩ ট্রানজিস্টরের কার্যপ্রণালী ও অ্যামপ্লিফায়ার', link: '/paper-2/chapter-10/transistors-amplification/' },
                { label: '১০.৪ মৌলিক ও যৌগিক লজিক গেট', link: '/paper-2/chapter-10/logic-gates/' },
              ],
            },
            {
              label: 'অধ্যায় ১১: জ্যোতির্বিজ্ঞান',
              collapsed: true,
              items: [
                { label: '১১.১ মহাবিশ্বের উৎপত্তি ও বিগ ব্যাং তত্ত্ব', link: '/paper-2/chapter-11/big-bang-universe/' },
                { label: '১১.২ নক্ষত্রের জীবনচক্র, শ্বেত বামন ও ব্ল্যাকহোল', link: '/paper-2/chapter-11/stellar-evolution-black-holes/' },
                { label: '১১.৩ হাবলের সূত্র ও মহাবিশ্বের সম্প্রসারণ', link: '/paper-2/chapter-11/hubbles-law-expansion/' },
              ],
            },
          ],
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});