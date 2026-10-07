// @ts-check

/**
 * প্রতিটি টপিকের ৪টি সাব-ফাইল সাজানোর হেল্পার ফাংশন
 */
function createTopic(label, topicPath) {
  return {
    type: 'category',
    label,
    collapsible: true,
    collapsed: true,
    items: [
      { type: 'doc', id: `${topicPath}/theory` },
      { type: 'doc', id: `${topicPath}/conceptual` },
      { type: 'doc', id: `${topicPath}/math-cq` },
      { type: 'doc', id: `${topicPath}/exam` },
    ],
  };
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // ==========================================
  // পদার্থবিজ্ঞান ১ম পত্র সাইডবার
  // ==========================================
  paper1Sidebar: [
    {
      type: 'category',
      label: 'অধ্যায় ১: ভৌতজগত ও পরিমাপ',
      items: [
        createTopic('ভৌতজগতের প্রকৃতি', 'paper-1/ch01-physical-world/nature-of-physics'),
        createTopic('পদার্থবিজ্ঞানের পরিসর ও অবদান', 'paper-1/ch01-physical-world/scope-and-contributions'),
        createTopic('ধারণা, সূত্র, নীতি ও তত্ত্ব', 'paper-1/ch01-physical-world/concepts-laws-theories'),
        createTopic('পদার্থবিজ্ঞান ও অন্যান্য জ্ঞানের জগত', 'paper-1/ch01-physical-world/physics-and-other-knowledge'),
        createTopic('স্থান, সময় ও ভর', 'paper-1/ch01-physical-world/space-time-mass'),
        createTopic('মৌলিক ও লব্ধ একক', 'paper-1/ch01-physical-world/base-and-derived-units'),
        createTopic('পরিমাপের মূলনীতি', 'paper-1/ch01-physical-world/principles-of-measurement'),
        createTopic('পর্যবেক্ষণ ও পরীক্ষণ', 'paper-1/ch01-physical-world/evolution-of-experiments'),
        createTopic('পরিমাপে ত্রুটি', 'paper-1/ch01-physical-world/measurement-errors'),
        createTopic('পরিমাপ্য রাশির শুদ্ধতরমান', 'paper-1/ch01-physical-world/accurate-measurement'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ২: ভেক্টর',
      items: [
        createTopic('ভেক্টর ও এর ধর্ম', 'paper-1/ch02-vectors/properties-of-vectors'),
        createTopic('ভেক্টর প্রকাশ', 'paper-1/ch02-vectors/vector-representation'),
        createTopic('বিশেষ ভেক্টর', 'paper-1/ch02-vectors/special-vectors'),
        createTopic('জ্যামিতিক যোজন নিয়ম', 'paper-1/ch02-vectors/geometric-vector-addition'),
        createTopic('লম্বাংশের সাহায্যে যোজন ও বিয়োজন', 'paper-1/ch02-vectors/component-addition-resolution'),
        createTopic('ত্রিমাত্রিক বিস্তারে বিভাজন', 'paper-1/ch02-vectors/3d-rectangular-resolution'),
        createTopic('স্কেলার ও ভেক্টর গুণন', 'paper-1/ch02-vectors/scalar-and-vector-products'),
        createTopic('পদার্থবিজ্ঞানে ক্যালকুলাস', 'paper-1/ch02-vectors/calculus-in-physics'),
        createTopic('ভেক্টর ক্যালকুলাস', 'paper-1/ch02-vectors/vector-calculus'),
        createTopic('ভেক্টর অপারেটরের ব্যবহার', 'paper-1/ch02-vectors/vector-operators'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৩: গতিবিদ্যা',
      collapsed: false,
      items: [
        createTopic('জড় কাঠামো', 'paper-1/ch03-dynamics/reference-frames'),
        createTopic('অন্তরীকরণ ও যোগজীকরণ', 'paper-1/ch03-dynamics/calculus-in-motion'),
        createTopic('অবস্থান ও বেগ-সময় লেখচিত্র', 'paper-1/ch03-dynamics/motion-graphs'),
        createTopic('প্রক্ষেপকের গতি (প্রাস)', 'paper-1/ch03-dynamics/projectile-motion'),
        createTopic('পড়ন্ত বস্তুর সূত্র', 'paper-1/ch03-dynamics/falling-bodies'),
        createTopic('সুষম বৃত্তীয়গতি', 'paper-1/ch03-dynamics/uniform-circular-motion'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৪: নিউটনিয়ান বলবিদ্যা',
      items: [
        createTopic('বলের স্বজ্ঞামূলক ধারণা', 'paper-1/ch04-newtonian-mechanics/concept-of-force'),
        createTopic('গতির দ্বিতীয় সূত্র', 'paper-1/ch04-newtonian-mechanics/newtons-second-law'),
        createTopic('গতি সূত্রগুলোর সম্পর্ক', 'paper-1/ch04-newtonian-mechanics/relation-between-laws'),
        createTopic('গতি সূত্রের ব্যবহার', 'paper-1/ch04-newtonian-mechanics/applications-of-laws'),
        createTopic('গতি সূত্রের সীমাবদ্ধতা', 'paper-1/ch04-newtonian-mechanics/limitations-of-laws'),
        createTopic('বল, ক্ষেত্র ও প্রাবল্য', 'paper-1/ch04-newtonian-mechanics/force-field-intensity'),
        createTopic('রৈখিক ভরবেগের নিত্যতা', 'paper-1/ch04-newtonian-mechanics/conservation-of-momentum'),
        createTopic('জড়তার ভ্রামক ও কৌণিক ভরবেগ', 'paper-1/ch04-newtonian-mechanics/moment-of-inertia'),
        createTopic('কৌণিক ভরবেগ রাশিমালা', 'paper-1/ch04-newtonian-mechanics/angular-momentum'),
        createTopic('টর্ক', 'paper-1/ch04-newtonian-mechanics/torque'),
        createTopic('টর্ক, ভ্রামক ও ত্বরণ', 'paper-1/ch04-newtonian-mechanics/torque-inertia-acceleration'),
        createTopic('কৌণিক ভরবেগের নিত্যতা', 'paper-1/ch04-newtonian-mechanics/conservation-of-angular-momentum'),
        createTopic('কেন্দ্রমুখী ও কেন্দ্রবিমুখী বল', 'paper-1/ch04-newtonian-mechanics/centripetal-centrifugal-force'),
        createTopic('সংঘর্ষ', 'paper-1/ch04-newtonian-mechanics/collisions'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৫: কাজ, শক্তি ও ক্ষমতা',
      items: [
        createTopic('কাজ ও শক্তির ধারণা', 'paper-1/ch05-work-energy-power/concept-of-work-energy'),
        createTopic('বল, সরণ এবং কাজ', 'paper-1/ch05-work-energy-power/force-displacement-work'),
        createTopic('স্থির ও পরিবর্তনশীল বল', 'paper-1/ch05-work-energy-power/constant-variable-force'),
        createTopic('স্থিতিস্থাপক ও অভিকর্ষ বল', 'paper-1/ch05-work-energy-power/elastic-gravitational-force'),
        createTopic('গতিশক্তি', 'paper-1/ch05-work-energy-power/kinetic-energy'),
        createTopic('স্থিতিশক্তি', 'paper-1/ch05-work-energy-power/potential-energy'),
        createTopic('শক্তির নিত্যতার নীতি', 'paper-1/ch05-work-energy-power/conservation-of-energy'),
        createTopic('ক্ষমতা, বল ও বেগ', 'paper-1/ch05-work-energy-power/power-force-velocity'),
        createTopic('সংরক্ষণশীল ও অসংরক্ষণশীল বল', 'paper-1/ch05-work-energy-power/conservative-forces'),
        createTopic('কর্মদক্ষতা', 'paper-1/ch05-work-energy-power/efficiency'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৬: মহাকর্ষ ও অভিকর্ষ',
      items: [
        createTopic('গ্যালিলিওর সূত্র', 'paper-1/ch06-gravitation/galileos-falling-bodies'),
        createTopic('কেপলারের সূত্র', 'paper-1/ch06-gravitation/keplers-laws'),
        createTopic('নিউটনের সূত্র হতে কেপলার', 'paper-1/ch06-gravitation/kepler-from-newton'),
        createTopic('মহাকর্ষীয় ধ্রুবক ও ত্বরণ', 'paper-1/ch06-gravitation/gravitational-constant-gravity'),
        createTopic('মহাকর্ষ সূত্রের ব্যবহার', 'paper-1/ch06-gravitation/applications-of-gravitation'),
        createTopic('অভিকর্ষীয় ত্বরণের পরিবর্তন', 'paper-1/ch06-gravitation/variation-of-g'),
        createTopic('অভিকর্ষ কেন্দ্র', 'paper-1/ch06-gravitation/center-of-gravity'),
        createTopic('মুক্তিবেগ', 'paper-1/ch06-gravitation/escape-velocity'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৭: পদার্থের গাঠনিক ধর্ম',
      items: [
        createTopic('আন্তঃআণবিক আকর্ষণ-বিকর্ষণ বল', 'paper-1/ch07-structural-properties/intermolecular-forces'),
        createTopic('পদার্থের বন্ধন', 'paper-1/ch07-structural-properties/matter-bonding'),
        createTopic('আন্তঃআণবিক বল ও স্থিতিস্থাপকতা', 'paper-1/ch07-structural-properties/intermolecular-elasticity'),
        createTopic('স্থিতিস্থাপকতা রাশিমালা', 'paper-1/ch07-structural-properties/elasticity-formulas'),
        createTopic('হুকের সূত্র ও পীড়ন-বিকৃতি', 'paper-1/ch07-structural-properties/hookes-law-stress-strain'),
        createTopic('স্থিতিস্থাপক গুণাঙ্ক', 'paper-1/ch07-structural-properties/modulus-of-elasticity'),
        createTopic('পয়সনের অনুপাত', 'paper-1/ch07-structural-properties/poissons-ratio'),
        createTopic('প্রবাহীর প্রবাহ', 'paper-1/ch07-structural-properties/fluid-flow'),
        createTopic('প্রান্তিক বেগ ও সান্দ্রতা', 'paper-1/ch07-structural-properties/terminal-velocity-viscosity'),
        createTopic('স্টোকস্ এর সূত্র', 'paper-1/ch07-structural-properties/stokes-law'),
        createTopic('পৃষ্ঠটান ও পৃষ্ঠশক্তি', 'paper-1/ch07-structural-properties/surface-tension-energy'),
        createTopic('পৃষ্ঠটানের ব্যবহার', 'paper-1/ch07-structural-properties/applications-of-surface-tension'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৮: পর্যাবৃত্তিক গতি',
      items: [
        createTopic('পর্যাবৃত্ত', 'paper-1/ch08-periodic-motion/periodic-motion-basics'),
        createTopic('পর্যাবৃত্ত গতি ও বলের বৈশিষ্ট্য', 'paper-1/ch08-periodic-motion/periodic-forces'),
        createTopic('সরল ছন্দিত গতি সংশ্লিষ্ট রাশি', 'paper-1/ch08-periodic-motion/shm-parameters'),
        createTopic('সরল দোলন গতির ব্যবকলনীয় সমীকরণ', 'paper-1/ch08-periodic-motion/shm-differential-equation'),
        createTopic('সরল দোলকের গতি', 'paper-1/ch08-periodic-motion/simple-pendulum'),
        createTopic('সরল দোলন ও বৃত্তাকার গতি', 'paper-1/ch08-periodic-motion/shm-and-circular-motion'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৯: তরঙ্গ',
      items: [
        createTopic('তরঙ্গের উৎপত্তি ও শক্তি', 'paper-1/ch09-waves/origin-of-waves-energy'),
        createTopic('তরঙ্গের প্রকারভেদ', 'paper-1/ch09-waves/wave-types'),
        createTopic('অগ্রগামী তরঙ্গ', 'paper-1/ch09-waves/progressive-wave'),
        createTopic('তরঙ্গের তীব্রতা', 'paper-1/ch09-waves/wave-intensity'),
        createTopic('উপরিবাতন নীতি', 'paper-1/ch09-waves/superposition-principle'),
        createTopic('স্থির তরঙ্গ', 'paper-1/ch09-waves/standing-wave'),
        createTopic('অনুনাদ', 'paper-1/ch09-waves/resonance'),
        createTopic('শব্দের তীব্রতা ও লেভেল', 'paper-1/ch09-waves/sound-intensity-level'),
        createTopic('বীট', 'paper-1/ch09-waves/beats'),
        createTopic('স্বরগ্রাম ও হারমোনিক্স', 'paper-1/ch09-waves/musical-scale-harmonics'),
        createTopic('সংগীতগুণ ও সোরগোল', 'paper-1/ch09-waves/musical-sound-noise'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ১০: আদর্শ গ্যাস ও গতিতত্ত্ব',
      items: [
        createTopic('আদর্শ গ্যাস', 'paper-1/ch10-ideal-gas/ideal-gas-basics'),
        createTopic('গ্যাসের মৌলিক স্বীকার্য ও গতিতত্ত্ব', 'paper-1/ch10-ideal-gas/kinetic-theory-postulates'),
        createTopic('শক্তির সমবিভাজন নীতি', 'paper-1/ch10-ideal-gas/equipartition-of-energy'),
        createTopic('জলীয় বাষ্প ও বায়ুর চাপ', 'paper-1/ch10-ideal-gas/water-vapor-air-pressure'),
        createTopic('শিশিরাঙ্ক ও আপেক্ষিক আর্দ্রতা', 'paper-1/ch10-ideal-gas/dew-point-humidity'),
      ],
    },
  ],

  // ==========================================
  // পদার্থবিজ্ঞান ২য় পত্র সাইডবার
  // ==========================================
  paper2Sidebar: [
    {
      type: 'category',
      label: 'অধ্যায় ১: তাপগতিবিদ্যা',
      items: [
        createTopic('তাপমাত্রা পরিমাপের নীতি', 'paper-2/ch01-thermodynamics/temperature-measurement'),
        createTopic('তাপগতিবিদ্যার প্রথম সূত্র', 'paper-2/ch01-thermodynamics/first-law-thermodynamics'),
        createTopic('তাপীয় সিস্টেম ও অভ্যন্তরীণ শক্তি', 'paper-2/ch01-thermodynamics/thermal-systems-internal-energy'),
        createTopic('তাপগতিবিদ্যার দ্বিতীয় সূত্র', 'paper-2/ch01-thermodynamics/second-law-thermodynamics'),
        createTopic('প্রত্যাবর্তী ও অপ্রত্যাবর্তী প্রক্রিয়া', 'paper-2/ch01-thermodynamics/reversible-irreversible-processes'),
        createTopic('কার্নো চক্র ও তাপীয় ইঞ্জিন', 'paper-2/ch01-thermodynamics/carnot-cycle-heat-engine'),
        createTopic('এন্ট্রপি ও বিশৃঙ্খলা', 'paper-2/ch01-thermodynamics/entropy-and-disorder'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ২: স্থির তড়িৎ',
      items: [
        createTopic('কুলম্ব সূত্র ও ক্ষেত্র তত্ত্ব', 'paper-2/ch02-static-electricity/coulombs-law-field-theory'),
        createTopic('বিন্দু চার্জের তড়িৎ রাশিমালা', 'paper-2/ch02-static-electricity/point-charge-potentials'),
        createTopic('সমবিভব তল', 'paper-2/ch02-static-electricity/equipotential-surface'),
        createTopic('তড়িৎ দ্বিমেরু', 'paper-2/ch02-static-electricity/electric-dipole'),
        createTopic('চার্জের কোয়ান্টায়ন ও সংরক্ষণশীলতা', 'paper-2/ch02-static-electricity/quantization-conservation'),
        createTopic('অপরিবাহী ও ডাইইলেক্ট্রিক', 'paper-2/ch02-static-electricity/dielectrics-insulators'),
        createTopic('ধারক ও ধারকত্ব', 'paper-2/ch02-static-electricity/capacitors-capacitance'),
        createTopic('কুলম্ব হতে গাউসের সূত্র', 'paper-2/ch02-static-electricity/gauss-from-coulomb'),
        createTopic('কুলম্ব সূত্রের সীমাবদ্ধতা', 'paper-2/ch02-static-electricity/coulombs-law-limitations'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৩: চল তড়িৎ',
      items: [
        createTopic('রোধের ওপর তাপমাত্রার প্রভাব', 'paper-2/ch03-current-electricity/temperature-effect-on-resistance'),
        createTopic('জুলের তাপীয় ক্রিয়ার সূত্র', 'paper-2/ch03-current-electricity/joules-heating-law'),
        createTopic('কোষের সংযোগ ও অভ্যন্তরীণ রোধ', 'paper-2/ch03-current-electricity/cell-combination-internal-resistance'),
        createTopic('কির্শফের সূত্র', 'paper-2/ch03-current-electricity/kirchhoffs-laws'),
        createTopic('শান্টের ব্যবহার', 'paper-2/ch03-current-electricity/shunt-applications'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৪: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব',
      items: [
        createTopic('ওয়েরস্টেডের পরীক্ষা ও চৌম্বক ক্ষেত্র', 'paper-2/ch04-magnetic-effects/oersted-experiment-field'),
        createTopic('বিয়ো-স্যাভার ও অ্যাম্পিয়ারের সূত্র', 'paper-2/ch04-magnetic-effects/biot-savart-ampere-law'),
        createTopic('চার্জ ও পরিবাহীর ওপর বল', 'paper-2/ch04-magnetic-effects/force-on-charge-conductor'),
        createTopic('হল প্রভাব', 'paper-2/ch04-magnetic-effects/hall-effect'),
        createTopic('চৌম্বক ক্ষেত্রে লুপে টর্ক', 'paper-2/ch04-magnetic-effects/torque-on-current-loop'),
        createTopic('ইলেকট্রন ঘূর্ণন ও স্পিন', 'paper-2/ch04-magnetic-effects/electron-spin-magnetic-field'),
        createTopic('পৃথিবীর চৌম্বকত্ব', 'paper-2/ch04-magnetic-effects/terrestrial-magnetism'),
        createTopic('চৌম্বকত্বের প্রকারভেদ ও ডোমেইন', 'paper-2/ch04-magnetic-effects/magnetism-types-domains'),
        createTopic('স্থায়ী চুম্বক ও হিস্টেরেসিস', 'paper-2/ch04-magnetic-effects/electromagnets-hysteresis'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৫: তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ',
      items: [
        createTopic('আবেশ ও শক্তি উৎপাদন', 'paper-2/ch05-emi-ac/induction-power-generation'),
        createTopic('আবিষ্ট তড়িচ্চালক বল ও ফ্যারাডের সূত্র', 'paper-2/ch05-emi-ac/induced-emf-faradays-law'),
        createTopic('লেঞ্জের সূত্র', 'paper-2/ch05-emi-ac/lenzs-law'),
        createTopic('স্বকীয় ও পারস্পরিক আবেশ', 'paper-2/ch05-emi-ac/self-mutual-inductance'),
        createTopic('দিক পরিবর্তী প্রবাহ সৃষ্টি', 'paper-2/ch05-emi-ac/alternating-current-generation'),
        createTopic('বর্গমূলীয় গড়মান ও শীর্ষমান', 'paper-2/ch05-emi-ac/rms-peak-values'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৬: জ্যামিতিক আলোকবিজ্ঞান',
      items: [
        createTopic('ফার্মাটের নীতি', 'paper-2/ch06-geometrical-optics/fermats-principle'),
        createTopic('লেন্স তৈরির সমীকরণ', 'paper-2/ch06-geometrical-optics/lens-maker-formula'),
        createTopic('অপটিক্যাল যন্ত্রসমূহ', 'paper-2/ch06-geometrical-optics/optical-instruments'),
        createTopic('প্রিজমে প্রতিসরণ ও বিচ্ছুরণ', 'paper-2/ch06-geometrical-optics/prism-refraction-dispersion'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৭: ভৌত আলোকবিজ্ঞান',
      items: [
        createTopic('তাড়িতচৌম্বকীয় তরঙ্গ ও স্পেক্ট্রাম', 'paper-2/ch07-wave-optics/em-waves-spectrum'),
        createTopic('তরঙ্গমুখ ও হাইগেনের নীতি', 'paper-2/ch07-wave-optics/wavefront-huygens-principle'),
        createTopic('আলোর ব্যতিচার', 'paper-2/ch07-wave-optics/interference-of-light'),
        createTopic('আলোর অপবর্তন', 'paper-2/ch07-wave-optics/diffraction-of-light'),
        createTopic('আলোর সমবর্তন', 'paper-2/ch07-wave-optics/polarization-of-light'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৮: আধুনিক পদার্থবিজ্ঞানের সূচনা',
      items: [
        createTopic('জড় ও অজড় কাঠামো', 'paper-2/ch08-modern-physics/inertial-non-inertial-frames'),
        createTopic('মাইকেলসন-মোরলে পরীক্ষা', 'paper-2/ch08-modern-physics/michelson-morley-experiment'),
        createTopic('আপেক্ষিকতা তত্ত্ব ও রূপান্তর', 'paper-2/ch08-modern-physics/theory-of-relativity'),
        createTopic('আপেক্ষিকতার ফলাফল', 'paper-2/ch08-modern-physics/consequences-of-relativity'),
        createTopic('ভর-শক্তি সম্পর্ক ও মৌলিক বল', 'paper-2/ch08-modern-physics/mass-energy-fundamental-forces'),
        createTopic('মহাকাশ ভ্রমণে আপেক্ষিকতা', 'paper-2/ch08-modern-physics/relativity-space-travel'),
        createTopic('প্লাঙ্কের কোয়ান্টাম তত্ত্ব', 'paper-2/ch08-modern-physics/plancks-quantum-theory'),
        createTopic('এক্স-রে ও ফটোইলেকট্রিক ক্রিয়া', 'paper-2/ch08-modern-physics/xray-photoelectric-effect'),
        createTopic('দ্য ব্রগলীর তরঙ্গ ও কম্পটন প্রভাব', 'paper-2/ch08-modern-physics/de-broglie-compton-effect'),
        createTopic('হাইজেনবার্গের অনিশ্চয়তা নীতি', 'paper-2/ch08-modern-physics/heisenberg-uncertainty'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ৯: পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান',
      items: [
        createTopic('পরমাণুর গঠন ও রাদারফোর্ড পরীক্ষা', 'paper-2/ch09-atomic-nuclear/atomic-structure-rutherford'),
        createTopic('রাদারফোর্ড মডেলের সীমাবদ্ধতা', 'paper-2/ch09-atomic-nuclear/rutherford-limitations'),
        createTopic('বোরের পরমাণু মডেল', 'paper-2/ch09-atomic-nuclear/bohr-atomic-model'),
        createTopic('নিউক্লিয়াসের গঠন', 'paper-2/ch09-atomic-nuclear/nuclear-structure'),
        createTopic('তেজস্ক্রিয়তা ও ক্ষয়', 'paper-2/ch09-atomic-nuclear/radioactivity-decay'),
        createTopic('ভরত্রুটি ও বন্ধন শক্তি', 'paper-2/ch09-atomic-nuclear/mass-defect-binding-energy'),
        createTopic('নিউক্লিয়ার বিক্রিয়া', 'paper-2/ch09-atomic-nuclear/nuclear-reactions'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ১০: সেমিকন্ডাক্টর ও ইলেক্ট্রনিক্স',
      items: [
        createTopic('ব্যান্ডের ভিত্তিতে শ্রেণিবিভাগ', 'paper-2/ch10-semiconductor/energy-band-classification'),
        createTopic('ইন্ট্রিনসিক ও এক্সট্রিনসিক সেমিকন্ডাক্টর', 'paper-2/ch10-semiconductor/intrinsic-extrinsic-semiconductors'),
        createTopic('জাংশন ডায়োড ও একমুখীকরণ', 'paper-2/ch10-semiconductor/junction-diode-rectification'),
        createTopic('জাংশন ট্রানজিস্টর', 'paper-2/ch10-semiconductor/junction-transistor'),
        createTopic('ট্রানজিস্টরের ব্যবহার', 'paper-2/ch10-semiconductor/transistor-applications'),
        createTopic('সংখ্যা পদ্ধতি', 'paper-2/ch10-semiconductor/number-systems'),
        createTopic('বাইনারি অপারেশন', 'paper-2/ch10-semiconductor/binary-operations'),
        createTopic('লজিক গেট', 'paper-2/ch10-semiconductor/logic-gates'),
      ],
    },
    {
      type: 'category',
      label: 'অধ্যায় ১১: জ্যোতির্বিজ্ঞান',
      items: [
        createTopic('মহাবিশ্ব সৃষ্টির রহস্য ও পরিণতি', 'paper-2/ch11-astronomy/universe-creation-fate'),
        createTopic('মহাবিশ্বের মূল বস্তু ও ঘটনা', 'paper-2/ch11-astronomy/universe-objects-events'),
        createTopic('মহাকাশ পর্যবেক্ষণ যন্ত্রসমূহ', 'paper-2/ch11-astronomy/astronomical-instruments'),
      ],
    },
  ],
};

export default sidebars;