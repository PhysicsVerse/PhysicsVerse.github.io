const fs = require('fs');
const path = require('path');

const curriculum = {
  // ১ম পত্র
  'paper-1/ch01-physical-world': [
    'nature-of-physics', 'scope-and-contributions', 'concepts-laws-theories',
    'physics-and-other-knowledge', 'space-time-mass', 'base-and-derived-units',
    'principles-of-measurement', 'evolution-of-experiments', 'measurement-errors',
    'accurate-measurement'
  ],
  'paper-1/ch02-vectors': [
    'properties-of-vectors', 'vector-representation', 'special-vectors',
    'geometric-vector-addition', 'component-addition-resolution', '3d-rectangular-resolution',
    'scalar-and-vector-products', 'calculus-in-physics', 'vector-calculus', 'vector-operators'
  ],
  'paper-1/ch03-dynamics': [
    'reference-frames', 'calculus-in-motion', 'motion-graphs',
    'projectile-motion', 'falling-bodies', 'uniform-circular-motion'
  ],
  'paper-1/ch04-newtonian-mechanics': [
    'concept-of-force', 'newtons-second-law', 'relation-between-laws',
    'applications-of-laws', 'limitations-of-laws', 'force-field-intensity',
    'conservation-of-momentum', 'moment-of-inertia', 'angular-momentum',
    'torque', 'torque-inertia-acceleration', 'conservation-of-angular-momentum',
    'centripetal-centrifugal-force', 'collisions'
  ],
  'paper-1/ch05-work-energy-power': [
    'concept-of-work-energy', 'force-displacement-work', 'constant-variable-force',
    'elastic-gravitational-force', 'kinetic-energy', 'potential-energy',
    'conservation-of-energy', 'power-force-velocity', 'conservative-forces', 'efficiency'
  ],
  'paper-1/ch06-gravitation': [
    'galileos-falling-bodies', 'keplers-laws', 'kepler-from-newton',
    'gravitational-constant-gravity', 'applications-of-gravitation', 'variation-of-g',
    'center-of-gravity', 'escape-velocity'
  ],
  'paper-1/ch07-structural-properties': [
    'intermolecular-forces', 'matter-bonding', 'intermolecular-elasticity',
    'elasticity-formulas', 'hookes-law-stress-strain', 'modulus-of-elasticity',
    'poissons-ratio', 'fluid-flow', 'terminal-velocity-viscosity', 'stokes-law',
    'surface-tension-energy', 'applications-of-surface-tension'
  ],
  'paper-1/ch08-periodic-motion': [
    'periodic-motion-basics', 'periodic-forces', 'shm-parameters',
    'shm-differential-equation', 'simple-pendulum', 'shm-and-circular-motion'
  ],
  'paper-1/ch09-waves': [
    'origin-of-waves-energy', 'wave-types', 'progressive-wave', 'wave-intensity',
    'superposition-principle', 'standing-wave', 'resonance', 'sound-intensity-level',
    'beats', 'musical-scale-harmonics', 'musical-sound-noise'
  ],
  'paper-1/ch10-ideal-gas': [
    'ideal-gas-basics', 'kinetic-theory-postulates', 'equipartition-of-energy',
    'water-vapor-air-pressure', 'dew-point-humidity'
  ],

  // ২য় পত্র
  'paper-2/ch01-thermodynamics': [
    'temperature-measurement', 'first-law-thermodynamics', 'thermal-systems-internal-energy',
    'second-law-thermodynamics', 'reversible-irreversible-processes', 'carnot-cycle-heat-engine',
    'entropy-and-disorder'
  ],
  'paper-2/ch02-static-electricity': [
    'coulombs-law-field-theory', 'point-charge-potentials', 'equipotential-surface',
    'electric-dipole', 'quantization-conservation', 'dielectrics-insulators',
    'capacitors-capacitance', 'gauss-from-coulomb', 'coulombs-law-limitations'
  ],
  'paper-2/ch03-current-electricity': [
    'temperature-effect-on-resistance', 'joules-heating-law',
    'cell-combination-internal-resistance', 'kirchhoffs-laws', 'shunt-applications'
  ],
  'paper-2/ch04-magnetic-effects': [
    'oersted-experiment-field', 'biot-savart-ampere-law', 'force-on-charge-conductor',
    'hall-effect', 'torque-on-current-loop', 'electron-spin-magnetic-field',
    'terrestrial-magnetism', 'magnetism-types-domains', 'electromagnets-hysteresis'
  ],
  'paper-2/ch05-emi-ac': [
    'induction-power-generation', 'induced-emf-faradays-law', 'lenzs-law',
    'self-mutual-inductance', 'alternating-current-generation', 'rms-peak-values'
  ],
  'paper-2/ch06-geometrical-optics': [
    'fermats-principle', 'lens-maker-formula', 'optical-instruments',
    'prism-refraction-dispersion'
  ],
  'paper-2/ch07-wave-optics': [
    'em-waves-spectrum', 'wavefront-huygens-principle', 'interference-of-light',
    'diffraction-of-light', 'polarization-of-light'
  ],
  'paper-2/ch08-modern-physics': [
    'inertial-non-inertial-frames', 'michelson-morley-experiment', 'theory-of-relativity',
    'consequences-of-relativity', 'mass-energy-fundamental-forces', 'relativity-space-travel',
    'plancks-quantum-theory', 'xray-photoelectric-effect', 'de-broglie-compton-effect',
    'heisenberg-uncertainty'
  ],
  'paper-2/ch09-atomic-nuclear': [
    'atomic-structure-rutherford', 'rutherford-limitations', 'bohr-atomic-model',
    'nuclear-structure', 'radioactivity-decay', 'mass-defect-binding-energy',
    'nuclear-reactions'
  ],
  'paper-2/ch10-semiconductor': [
    'energy-band-classification', 'intrinsic-extrinsic-semiconductors',
    'junction-diode-rectification', 'junction-transistor', 'transistor-applications',
    'number-systems', 'binary-operations', 'logic-gates'
  ],
  'paper-2/ch11-astronomy': [
    'universe-creation-fate', 'universe-objects-events', 'astronomical-instruments'
  ]
};

const subFiles = [
  { file: 'theory.md', id: 'theory', title: 'থিওরি ও কনসেপ্ট' },
  { file: 'conceptual.md', id: 'conceptual', title: 'জ্ঞান ও অনুধাবন' },
  { file: 'math-cq.md', id: 'math-cq', title: 'গাণিতিক সমস্যা ও CQ' },
  { file: 'exam.md', id: 'exam', title: 'অবজেক্টিভ ও লাইভ এক্সাম' }
];

let createdCount = 0;

for (const [chapter, topics] of Object.entries(curriculum)) {
  for (const topic of topics) {
    const targetDir = path.join(__dirname, 'docs', chapter, topic);
    fs.mkdirSync(targetDir, { recursive: true });

    for (const item of subFiles) {
      const filePath = path.join(targetDir, item.file);
      const content = `---\nid: ${item.id}\ntitle: ${item.title}\n---\n\n# ${item.title}\n\nকনটেন্ট শীঘ্রই আপলোড করা হবে।\n`;
      fs.writeFileSync(filePath, content, 'utf8');
      createdCount++;
    }
  }
}

console.log(`\x1b[32mPhysicsVerse এর মোট ${createdCount} টি ফাইল সফলভাবে তৈরি হয়েছে!\x1b[0m`);