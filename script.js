/* ============================================================
   NALLOR VATTAM – MAIN SCRIPT
   Language toggle: Tamil mode = 100% Tamil | English = 100% English
============================================================ */
'use strict';

/* ── Easing ── */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function countUp(el, target, duration) {
  if (!el) return;
  el.style.fontVariantNumeric = 'tabular-nums';
  const start = performance.now();
  const tick = (now) => {
    const p   = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * easeOutExpo(p)).toLocaleString('en-IN');
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString('en-IN');
  };
  requestAnimationFrame(tick);
}

/* ============================================================
   FULL TRANSLATION TABLE
   Every visible string on the page — both languages.
   No mixed content: en keys = pure English, ta keys = pure Tamil.
============================================================ */
const T = {
  en: {
    /* Loader */
    loader_title: 'Nallor Vattam',
    loader_sub:   'Nallor Vattam · Tiruppur',
    /* Navbar brand */
    brand_ta:  'Nallor Vattam',
    brand_en:  'Tiruppur, Tamil Nadu',
    /* Hero */
    hero_org_name:  'Nallor Vattam',
    hero_org_sub:   'நல்லோர் வட்டம் — Tiruppur',
    hero_location:  'Tiruppur, Tamil Nadu, India',
    hero_tagline:   'My Tiruppur is in my hands · Protect Tiruppur',
    hero_desc:      'Join the <strong>Clean Up in Tiruppur</strong> campaign — citizens clearing waste from streets, parks and public spaces, ward by ward, for a cleaner and healthier city.',
    hero_btn1:      'Join the Movement',
    hero_btn2:      'See Members',
    hero_btn3:      'Learn More',
    hero_protest:   'Active Cleanup Campaign — Tiruppur',
    /* Members section */
    circle_label:   'Members',
    live_suffix:    'members &amp; counting',
    impact_badge:   'Our Impact',
    impact_title:   'Together We Make',
    impact_title2:  'Tiruppur Cleaner',
    impact_sub:     'Every member counts. Every cleanup matters.',
    stat1: 'Waste Cleanups Done',
    stat2: 'Waste Collected',
    stat3: 'Protests Organised',
    stat4: 'Zones Covered',
    ticker_text:  ' members joined Nallor Vattam — ',
    ticker_cta:   'Be the next!',
    ticker_link:  'Register →',
    /* CTA */
    cta_title: 'Be Part of the Change',
    cta_desc:  'Tiruppur deserves clean streets. Our growing community is already taking action. Stand with us — register today and help us make every ward waste-free.',
    perk1: 'Cleanup drives',
    perk2: 'Protests',
    perk3: 'Member certificate',
    perk4: 'Event alerts',
    cta_btn:  'Register as a Member',
    cta_note: 'Free to join. Privacy respected.',
    /* About */
    about_img_badge:   'Tiruppur Cleanup',
    float_card_title:  'No More Illegal Dumping',
    float_card_sub:    'We protest & act',
    about_badge: 'About Us',
    about_title: 'Who Are We?',
    about_lead:  '<strong>Nallor Vattam</strong> is a grassroots community organisation in Tiruppur, Tamil Nadu, fighting for a waste-free city.',
    about_body:  'We are ordinary citizens — fed up with overflowing garbage, illegal dump yards, and zero accountability. So we took action. We organise <strong>mass cleanups</strong>, <strong>community protests</strong>, and <strong>awareness campaigns</strong> to force change in Tiruppur.',
    val1: 'Street & public space cleanups',
    val2: 'Protests against illegal dumping',
    val3: 'Demand accountability from authorities',
    val4: 'Waste segregation awareness',
    about_btn: 'Join the Movement',
    /* Mission */
    mission_badge: 'Our Mission',
    mission_title: 'What We Fight For',
    mission_sub:   'Two clear goals. One united community. Zero tolerance for waste.',
    m1_title: 'Waste Clearance',
    m1_body:  'We physically remove waste from streets, parks, water bodies and public spaces across every ward in Tiruppur. No area is too dirty for us.',
    m1l1: 'Street & roadside cleaning',
    m1l2: 'Drain & canal desilting',
    m1l3: 'Vacant plot cleanups',
    m1l4: 'Post-event waste collection',
    m1_cta: 'Volunteer Now',
    m2_title: 'Protest & Demand Change',
    m2_body:  'We raise our voice against corporations, factories and individuals who dump waste illegally. We demand proper infrastructure and strict enforcement from authorities.',
    m2l1: 'Peaceful street protests',
    m2l2: 'Petitions to authorities',
    m2l3: 'Expose illegal dump yards',
    m2l4: 'Social media campaigns',
    m2_cta: 'Stand With Us',
    pt_title: 'How We Work',
    pt1: 'Identify Waste Spots',
    pt2: 'Mobilise Members',
    pt3: 'Execute Cleanup',
    pt4: 'Protest & Report',
    pt5: 'Track & Follow Up',
    /* Gallery */
    gallery_badge: 'Gallery',
    gallery_title: 'Our Cleanup & Protest Moments',
    gallery_sub:   'Real action. Real change. By the people of Tiruppur.',
    /* Contact */
    contact_badge: 'Get In Touch',
    contact_title: 'Contact Us',
    c1_h: 'Location',
    c1_p: 'Tiruppur, Tamil Nadu<br/>India – 641 601',
    c2_h: 'Phone',
    c2_p: '+91 XXXXX XXXXX<br/>9 AM – 6 PM',
    c3_h: 'Email',
    c3_p: 'info@nallorvattam.org<br/>Reply within 24 hrs',
    c4_h: 'WhatsApp',
    c4_p: 'Join our cleanup group<br/>for updates & events',
    /* Footer */
    footer_brand:     'Nallor Vattam',
    footer_tagline:   'Nallor Vattam · Tiruppur, Tamil Nadu',
    footer_desc:      'Fighting for a clean, waste-free Tiruppur through community action, cleanups and peaceful protest.',
    footer_quick:     'Quick Links',
    fl1: 'Home',   fl2: 'Register', fl3: 'Members',
    fl4: 'About',  fl5: 'Mission',  fl6: 'Gallery',
    footer_focus: 'Our Focus',
    fo1: 'Waste Clearance',   fo2: 'Protest Campaigns',
    fo3: 'Illegal Dumping',   fo4: 'Awareness Drives',  fo5: 'Contact',
    footer_contact_h: 'Contact',
    fc1: 'Tiruppur, Tamil Nadu, India',
    fc2: '+91 XXXXX XXXXX',
    fc3: 'info@nallorvattam.org',
    footer_copy: '© 2024 Nallor Vattam · Tiruppur, Tamil Nadu. All rights reserved.',
    footer_made: 'Made with ❤ for a cleaner Tiruppur',
    /* Lang button label */
    lang_btn_label: 'தமிழ்',
    lang_btn_title: 'Switch to Tamil',
    /* Popup */
    ep_sub:  'Tiruppur\'s waste clearance movement — register free in 2 minutes.',
    ep_s1: 'Members', ep_s2: 'Cleanups', ep_s3: 'Protests',
    ep_btn:  'Register Now — It\'s Free',
    ep_skip: 'Maybe later',
    /* Hero btn3 / scroll */
    scroll_text: 'scroll',
    /* Gallery */
    g1:'Waste Cleanup', g2:'Community Cleanup', g3:'Protest March',
    g4:'Waste Collection', g5:'Awareness', g6:'Clean Tiruppur!',
    /* Brand */
    brand_name: 'Nallor Vattam',
    brand_sub:  'Tiruppur',
    /* CTA alt */
    cta_btn_alt: 'See Our Members',
    /* Why Join / Join Banner */
    why_badge:'Why Join Us', why_title:'Be Part of Something Real',
    why_sub:'Not a social media page — actual boots on the ground, cleaning Tiruppur ward by ward.',
    why1_h:'Real Community',
    why1_p:'Thousands of ordinary Tiruppur citizens working together — students, workers, homemakers — all united for one clean city.',
    why2_h:'Every Ward Covered',
    why2_p:'We operate in 24 zones across Tiruppur. From Selvapuram to Rayapuram — no area is too far for our volunteers.',
    why3_h:'We Raise Our Voice',
    why3_p:'Beyond cleaning — we petition, protest, and demand accountability from corporations and the municipality.',
    why4_h:'Official Membership',
    why4_p:'Receive your Nallor Vattam member certificate, get first access to events, and build a lasting network of change-makers.',
    jb_title:'Ready to Make Tiruppur Cleaner?',
    jb_desc:'Join thousands of citizens who are already taking action. Every cleanup starts with one person deciding to show up.',
    jb_btn:'Register from Top',
  },

  /* NOTE: why/jb keys have been moved inside T.en and T.ta above */
  ta: {
    /* Loader */
    loader_title: 'நல்லோர் வட்டம்',
    loader_sub:   'நல்லோர் வட்டம் · திருப்பூர்',
    /* Navbar brand */
    brand_ta: 'நல்லோர் வட்டம்',
    brand_en: 'திருப்பூர், தமிழ்நாடு',
    /* Hero */
    hero_org_name:  'நல்லோர் வட்டம்',
    hero_org_sub:   'Nallor Vattam — திருப்பூர்',
    hero_location:  'திருப்பூர், தமிழ்நாடு, இந்தியா',
    hero_tagline:   'என் திருப்பூர் என் கைகளில் · திருப்பூரைக் காப்போம்',
    hero_desc:      '<strong>திருப்பூர் சுத்தப்படுத்தல்</strong> இயக்கத்தில் சேரவும். தெருக்கள், பூங்காக்கள் மற்றும் பொது இடங்களில் கழிவை அகற்றி, சுத்தமான திருப்பூர் கட்டமைக்கிறோம்.',
    hero_btn1:      'இயக்கத்தில் சேரவும்',
    hero_btn2:      'உறுப்பினர்களைப் பாருங்கள்',
    hero_btn3:      'மேலும் அறிக',
    hero_protest:   'செயலில் உள்ள சுத்தப்படுத்தல் — திருப்பூர்',
    /* Members */
    circle_label:   'உறுப்பினர்',
    live_suffix:    'உறுப்பினர்கள் &amp; தொடர்கிறது',
    impact_badge:   'எங்கள் தாக்கம்',
    impact_title:   'ஒன்றாக',
    impact_title2:  'திருப்பூரை சுத்தமாக்குவோம்',
    impact_sub:     'ஒவ்வொரு உறுப்பினரும் முக்கியம். ஒவ்வொரு சுத்தப்படுத்தலும் முக்கியம்.',
    stat1: 'கழிவு அகற்றல்கள்',
    stat2: 'சேகரிக்கப்பட்ட கழிவு',
    stat3: 'போராட்டங்கள்',
    stat4: 'மண்டலங்கள்',
    ticker_text:  ' உறுப்பினர்கள் சேர்ந்தனர் — ',
    ticker_cta:   'நீங்களும் சேரவும்!',
    ticker_link:  'பதிவு செய்யவும் →',
    /* CTA */
    cta_title: 'மாற்றத்தின் ஒரு பகுதியாகுங்கள்',
    cta_desc:  'திருப்பூருக்கு சுத்தமான தெருக்கள் தேவை. எங்கள் வளரும் சமூகம் ஏற்கனவே நடவடிக்கை எடுக்கிறது. இன்றே பதிவு செய்யுங்கள்.',
    perk1: 'சுத்தப்படுத்தல் பணிகள்',
    perk2: 'போராட்டங்கள்',
    perk3: 'உறுப்பினர் சான்றிதழ்',
    perk4: 'நிகழ்வு அறிவிப்புகள்',
    cta_btn:  'உறுப்பினராக பதிவு செய்யவும்',
    cta_note: 'இலவசம். உங்கள் தனியுரிமை மதிக்கப்படும்.',
    /* About */
    about_img_badge:  'திருப்பூர் சுத்தம்',
    float_card_title: 'சட்டவிரோத கொட்டல் வேண்டாம்',
    float_card_sub:   'நாங்கள் போராடுகிறோம்',
    about_badge: 'எங்களைப் பற்றி',
    about_title: 'நாங்கள் யார்?',
    about_lead:  '<strong>நல்லோர் வட்டம்</strong> — திருப்பூரில் கழிவு இல்லாத நகரத்திற்காக போராடும் சமூக அமைப்பு.',
    about_body:  'நாங்கள் சாதாரண குடிமக்கள் —넘쳐 흐르는 குப்பை, சட்டவிரோத குப்பைத் தொட்டிகள், பொறுப்பற்ற நிர்வாகம் ஆகியவற்றால் சலித்தவர்கள். எனவே நாங்கள் <strong>சமூக சுத்தம்</strong>, <strong>போராட்டங்கள்</strong> மற்றும் <strong>விழிப்புணர்வு பிரச்சாரங்கள்</strong> மூலம் மாற்றத்தை நோக்கி செயல்படுகிறோம்.',
    val1: 'தெரு மற்றும் பொது இட சுத்தம்',
    val2: 'சட்டவிரோத கொட்டலுக்கு எதிர்ப்பு',
    val3: 'அதிகாரிகளிடம் பொறுப்பு கோருகிறோம்',
    val4: 'கழிவு பிரிக்கும் விழிப்புணர்வு',
    about_btn: 'இயக்கத்தில் சேரவும்',
    /* Mission */
    mission_badge: 'எங்கள் நோக்கம்',
    mission_title: 'நாம் எதற்காக போராடுகிறோம்',
    mission_sub:   'இரண்டு தெளிவான இலக்குகள். ஒன்றுபட்ட சமூகம். கழிவுகளுக்கு சகிப்பில்லை.',
    m1_title: 'கழிவு அகற்றல்',
    m1_body:  'திருப்பூரின் ஒவ்வொரு வார்டிலும் தெருக்கள், பூங்காக்கள், நீர்நிலைகள் மற்றும் பொது இடங்களில் இருந்து கழிவுகளை நேரில் அகற்றுகிறோம். எந்த இடமும் எங்களுக்கு அதிகமாக கிடையாது.',
    m1l1: 'தெரு மற்றும் சாலை ஓரம் சுத்தம்',
    m1l2: 'வடிகால் மற்றும் கால்வாய் சுத்தம்',
    m1l3: 'காலி மனை சுத்தம்',
    m1l4: 'நிகழ்வுக்கு பிறகு கழிவு சேகரிப்பு',
    m1_cta: 'தன்னார்வலராக சேரவும்',
    m2_title: 'போராட்டம் மற்றும் மாற்றம் கோரல்',
    m2_body:  'சட்டவிரோதமாக கழிவு கொட்டும் நிறுவனங்கள் மற்றும் தனிநபர்களுக்கு எதிராக குரல் எழுப்புகிறோம். சரியான உள்கட்டமைப்பு மற்றும் கடுமையான அமலாக்கத்தை அதிகாரிகளிடம் கோருகிறோம்.',
    m2l1: 'அமைதியான தெரு போராட்டங்கள்',
    m2l2: 'அதிகாரிகளுக்கு மனுக்கள்',
    m2l3: 'சட்டவிரோத குப்பை இடங்களை வெளிப்படுத்தல்',
    m2l4: 'சமூக ஊடக பிரச்சாரங்கள்',
    m2_cta: 'எங்களுடன் நில்லுங்கள்',
    pt_title: 'நாங்கள் எவ்வாறு செயல்படுகிறோம்',
    pt1: 'கழிவு இடங்கள் கண்டறிதல்',
    pt2: 'உறுப்பினர் திரட்டல்',
    pt3: 'சுத்தம் செய்தல்',
    pt4: 'போராட்டம் மற்றும் அறிக்கை',
    pt5: 'கண்காணிப்பு மற்றும் தொடர்நடவடிக்கை',
    /* Gallery */
    gallery_badge: 'படங்கள்',
    gallery_title: 'எங்கள் சுத்தம் மற்றும் போராட்ட தருணங்கள்',
    gallery_sub:   'உண்மையான செயல். உண்மையான மாற்றம். திருப்பூர் மக்களால்.',
    /* Contact */
    contact_badge: 'தொடர்பு கொள்ளுங்கள்',
    contact_title: 'எங்களை தொடர்பு கொள்ளவும்',
    c1_h: 'இருப்பிடம்',
    c1_p: 'திருப்பூர், தமிழ்நாடு<br/>இந்தியா – 641 601',
    c2_h: 'தொலைபேசி',
    c2_p: '+91 XXXXX XXXXX<br/>காலை 9 – மாலை 6',
    c3_h: 'மின்னஞ்சல்',
    c3_p: 'info@nallorvattam.org<br/>24 மணி நேரத்தில் பதில்',
    c4_h: 'வாட்ஸ்அப்',
    c4_p: 'சுத்தம் குழுவில் சேரவும்<br/>புதுப்பிப்புகளுக்கு',
    /* Footer */
    footer_brand:    'நல்லோர் வட்டம்',
    footer_tagline:  'நல்லோர் வட்டம் · திருப்பூர், தமிழ்நாடு',
    footer_desc:     'சமூக நடவடிக்கை, சுத்தப்படுத்தல் மற்றும் அமைதியான போராட்டம் மூலம் தூய்மையான திருப்பூருக்காக போராடுகிறோம்.',
    footer_quick:    'விரைவு இணைப்புகள்',
    fl1: 'முகப்பு',    fl2: 'பதிவு செய்யவும்', fl3: 'உறுப்பினர்கள்',
    fl4: 'பற்றி',      fl5: 'நோக்கம்',          fl6: 'படங்கள்',
    footer_focus: 'எங்கள் கவனம்',
    fo1: 'கழிவு அகற்றல்',        fo2: 'போராட்ட பிரச்சாரங்கள்',
    fo3: 'சட்டவிரோத கொட்டல்',   fo4: 'விழிப்புணர்வு பயணங்கள்', fo5: 'தொடர்பு',
    footer_contact_h: 'தொடர்பு',
    fc1: 'திருப்பூர், தமிழ்நாடு, இந்தியா',
    fc2: '+91 XXXXX XXXXX',
    fc3: 'info@nallorvattam.org',
    footer_copy: '© 2024 நல்லோர் வட்டம் · திருப்பூர், தமிழ்நாடு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    footer_made: 'தூய்மையான திருப்பூருக்காக ❤ உடன் உருவாக்கப்பட்டது',
    /* Lang button label */
    lang_btn_label: 'EN',
    lang_btn_title: 'Switch to English',
    /* Popup */
    ep_sub:  'திருப்பூரின் கழிவு அகற்றல் இயக்கம் — 2 நிமிடங்களில் இலவசமாக பதிவு செய்யுங்கள்.',
    ep_s1: 'உறுப்பினர்கள்', ep_s2: 'சுத்தங்கள்', ep_s3: 'போராட்டங்கள்',
    ep_btn:  'இப்போதே பதிவு செய்யவும் — இலவசம்',
    ep_skip: 'பிறகு பார்க்கலாம்',
    /* Hero / scroll */
    scroll_text: 'கீழே பாருங்கள்',
    /* Gallery */
    g1:'கழிவு சுத்தம்', g2:'சமூக சுத்தம்', g3:'போராட்ட அணிவகுப்பு',
    g4:'கழிவு சேகரிப்பு', g5:'விழிப்புணர்வு', g6:'சுத்தமான திருப்பூர்!',
    /* Brand */
    brand_name: 'நல்லோர் வட்டம்',
    brand_sub:  'திருப்பூர்',
    /* CTA alt */
    cta_btn_alt: 'எங்கள் உறுப்பினர்களைப் பாருங்கள்',
      why_badge:'ஏன் சேர வேண்டும்',why_title:'உண்மையான ஒன்றின் பகுதியாகுங்கள்',why_sub:'சமூக ஊடக பக்கம் மட்டுமல்ல — நேரில் திருப்பூரின் தெரு தெருவாக சுத்தம் செய்கிறோம்.',why1_h:'உண்மையான சமூகம்',why1_p:'1,248+ சாதாரண திருப்பூர் குடிமக்கள் — மாணவர்கள், தொழிலாளர்கள், இல்லத்தரசிகள் — ஒரே நகரத்திற்காக ஒன்றுபட்டவர்கள்.',why2_h:'ஒவ்வொரு வார்டும் உள்ளடக்கியது',why2_p:'திருப்பூரில் 24 மண்டலங்களில் செயல்படுகிறோம். செல்வப்புரம் முதல் ராயபுரம் வரை — எந்த இடமும் எங்களுக்கு தொலைவில்லை.',why3_h:'எங்கள் குரலை எழுப்புகிறோம்',why3_p:'சுத்தத்திற்கு அப்பால் — நிறுவனங்கள் மற்றும் நகராட்சியிடம் மனு அளிக்கிறோம், போராடுகிறோம்.',why4_h:'அதிகாரப்பூர்வ உறுப்பினர்',why4_p:'நல்லோர் வட்டம் உறுப்பினர் சான்றிதழ் பெறுங்கள், நிகழ்வுகளுக்கு முதல் அணுகல் பெறுங்கள்.',jb_title:'திருப்பூரை சுத்தமாக்க தயாரா?',jb_desc:'ஏற்கனவே நடவடிக்கை எடுத்துக்கொண்டிருக்கும் 1,248+ குடிமக்களுடன் சேரவும்.',jb_btn:'மேலே பதிவு செய்யவும்',
  }
};

/* ── Nav link labels (data-en / data-ta) ── */
const NAV_LABELS = {
  en: { home:'Home', register:'Register', members:'Members', about:'About', mission:'Mission', gallery:'Gallery', contact:'Contact', join:'Join Us' },
      why_badge:'Why Join Us',why_title:'Be Part of Something Real',why_sub:'Not a social media page — actual boots on the ground, cleaning Tiruppur ward by ward.',why1_h:'Real Community',why1_p:'1,248+ ordinary Tiruppur citizens working together — students, workers, homemakers — all united for one clean city.',why2_h:'Every Ward Covered',why2_p:'We operate in 24 zones across Tiruppur. From Selvapuram to Rayapuram — no area is too far for our volunteers.',why3_h:'We Raise Our Voice',why3_p:'Beyond cleaning — we petition, protest, and demand accountability from corporations and the municipality.',why4_h:'Official Membership',why4_p:'Receive your Nallor Vattam member certificate, get first access to events, and build a lasting network of change-makers.',jb_title:'Ready to Make Tiruppur Cleaner?',jb_desc:'Join 1,248+ citizens who are already taking action. Every cleanup starts with one person deciding to show up.',jb_btn:'Register from Top',
  ta: { home:'முகப்பு', register:'பதிவு', members:'உறுப்பினர்', about:'பற்றி', mission:'நோக்கம்', gallery:'படங்கள்', contact:'தொடர்பு', join:'சேரவும்' },
};

/* ============================================================
   DOM READY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 0. APPLY SAVED THEME IMMEDIATELY (prevents flash) ── */
  (function() {
    const saved = localStorage.getItem('nv_theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', saved);
  })();

  /* ── 1. LOADER ── */
  const loader    = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  const loaderPct = document.getElementById('loaderPercent');
  document.body.style.overflow = 'hidden';
  let pct = 0;
  const lt = setInterval(() => {
    pct = Math.min(pct + 3.2 + Math.random() * 2.5, 100);
    if (loaderBar) loaderBar.style.width = pct + '%';
    if (loaderPct) loaderPct.textContent = Math.floor(pct) + '%';
    if (pct >= 100) {
      clearInterval(lt);
      if (loaderBar) loaderBar.style.width = '100%';
      if (loaderPct) loaderPct.textContent = '100%';
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        spawnHeroParticles();
      }, 380);
    }
  }, 28);

  /* ── 2. SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });

  ['.about-visual','.about-text','.mission-card','.gallery-item',
   '.contact-card','.cta-inner','.process-timeline','.section-header',
   '.live-ticker','.footer-brand-col','.footer-links-col','.footer-contact-col',
   '.why-card','.jb-inner']
  .forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4 * 0.09) + 's';
      revealObs.observe(el);
    });
  });

  /* ── 3. NAVBAR ── */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors= document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');

  const navLogoImg = document.getElementById('navLogoImg');
  function onScroll() {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
    /* Swap navbar logo: white on dark bg, natural on white bg */
    if (navLogoImg) {
      navLogoImg.src = scrolled ? 'nallorvattam1.png' : 'nallorvattam.png';
    }
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { navLinks.classList.remove('open'); hamburger.classList.remove('active'); });
  });
  if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── 4. SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - 78, behavior: 'smooth' });
    });
  });

  /* ── 5. HERO VIDEO — fetch active video from API, fall back to placeholder ── */
  const heroVideo = document.getElementById('heroVideo');

  async function loadHeroVideo() {
    if (!heroVideo) return;
    try {
      const res  = await fetch('/api/video');
      const data = await res.json();
      if (data.video && data.video.src) {
        /* Remove any existing sources */
        heroVideo.innerHTML = '';
        /* Detect type: base64 data URLs include mime type, external URLs need mp4 hint */
        const src = data.video.src;
        const mime = src.startsWith('data:video/') ? src.split(';')[0].slice(5) : 'video/mp4';
        const source = document.createElement('source');
        source.src  = src;
        source.type = mime;
        heroVideo.appendChild(source);
        heroVideo.load();
        heroVideo.play().catch(() => {/* autoplay policy — muted so it should work */});
      }
      /* If no video in DB, leave the element empty — hero-overlay hides it gracefully */
    } catch (e) {
      /* Silently ignore — hero-overlay still shows on empty video */
    }
  }

  loadHeroVideo();

  function spawnHeroParticles() {
    const c = document.getElementById('heroParticles');
    if (!c) return;
    const n = window.innerWidth < 480 ? 8 : 18;
    for (let i = 0; i < n; i++) {
      const el = document.createElement('div');
      el.className = 'hero-particle';
      const sz = 4 + Math.random() * 12;
      el.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;bottom:-20px;animation-duration:${8+Math.random()*10}s;animation-delay:${Math.random()*8}s;opacity:${0.1+Math.random()*0.2};`;
      c.appendChild(el);
    }
  }

  /* ── 6. MEMBER COUNTER — fetch real count from Atlas ── */
  const circleArc = document.getElementById('circleArc');
  if (circleArc) {
    const svg  = circleArc.closest('svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `<linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stop-color="#22C55E"/>
      <stop offset="100%" stop-color="#86efac"/>
    </linearGradient>`;
    svg.prepend(defs);
    circleArc.setAttribute('stroke', 'url(#cGrad)');
  }

  /* Fetch real member total from public /count endpoint — no auth needed */
  let TOTAL = 0;
  let totalFetched = false;

  const fetchTotal = fetch('/api/members/count')
    .then(r => r.json())
    .then(d => {
      TOTAL = d.total || 0;
      totalFetched = true;
      /* Update hero chip count immediately with real API total */
      countUp(document.getElementById('heroMemberChip'), TOTAL, 1800);
    })
    .catch(() => { TOTAL = 0; totalFetched = true; });

  function runCounters() {
    if (circleArc) setTimeout(() => { circleArc.style.strokeDashoffset = 553 * (1 - TOTAL / 1500); }, 150);
    countUp(document.getElementById('bigMemberCount'), TOTAL, 2400);
    countUp(document.getElementById('live-count'),     TOTAL, 2200);
    countUp(document.getElementById('liveCountBadge'), TOTAL, 2200);
    countUp(document.getElementById('heroMemberChip'), TOTAL, 2000);
  }

  let triggered = false;
  const membersObs = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting || triggered) return;
    triggered = true;
    membersObs.disconnect();
    /* Wait for fetch to complete before animating */
    fetchTotal.finally(() => runCounters());
  }, { threshold: 0.15 });
  const ms = document.getElementById('members');
  if (ms) membersObs.observe(ms);

  /* ── 7. PROCESS TIMELINE ── */
  const ptObs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    ptObs.disconnect();
    document.querySelectorAll('.pt-step-icon').forEach((icon, i) => {
      setTimeout(() => icon.classList.add('lit'), i * 220);
    });
  }, { threshold: 0.35 });
  const pt = document.querySelector('.process-timeline');
  if (pt) ptObs.observe(pt);

  /* ── 8. GALLERY — fetch from API ── */
  async function loadPublicGallery() {
    const grid    = document.getElementById('galleryGrid');
    const loading = document.getElementById('galleryLoading');
    const section = document.getElementById('gallery');
    const navLink = document.querySelector('.nav-link[href="#gallery"]');
    if (!grid) return;
    try {
      /* First check if gallery is enabled */
      const settingsRes  = await fetch('/api/settings');
      const settingsData = await settingsRes.json();

      if (!settingsData.galleryEnabled) {
        /* Hide the entire section and nav link */
        if (section) section.style.display = 'none';
        if (navLink) navLink.closest('li') && (navLink.closest('li').style.display = 'none');
        if (loading) loading.remove();
        return;
      }

      /* Gallery is enabled — make sure section is visible */
      if (section) section.style.display = '';
      if (navLink) navLink.closest('li') && (navLink.closest('li').style.display = '');

      const res  = await fetch('/api/gallery');
      const data = await res.json();
      const photos = (data.photos || []);

      /* Remove spinner */
      if (loading) loading.remove();

      if (photos.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:#9ca3af;">
          <i class="fas fa-images" style="font-size:2.5rem;display:block;margin-bottom:12px;"></i>
          <span>No photos yet — check back soon!</span>
        </div>`;
        return;
      }

      grid.innerHTML = photos.map((p, i) => `
        <div class="gallery-item reveal" style="--gi:${i + 1}">
          <img src="${escGallery(p.src)}" alt="${escGallery(p.description || p.name || 'Gallery photo')}" loading="lazy" />
          <div class="gallery-overlay">
            <i class="fas fa-image"></i>
            <span>${escGallery(p.description || p.name || 'Gallery photo')}</span>
          </div>
        </div>`).join('');

      /* Re-observe newly injected items for scroll reveal */
      grid.querySelectorAll('.gallery-item').forEach((el, i) => {
        el.style.transitionDelay = (i % 4 * 0.09) + 's';
        revealObs.observe(el);
      });

    } catch (e) {
      if (loading) loading.innerHTML = '<span style="color:#9ca3af">Could not load gallery.</span>';
    }
  }

  function escGallery(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  loadPublicGallery();

  /* ── 9. LANG TOGGLE ── */
  let lang = localStorage.getItem('nv_lang') || 'en';
  const langToggle = document.getElementById('langToggle');
  const langLabel  = document.getElementById('langLabel');

  function applyLang(newLang, animate) {
    lang = newLang;
    localStorage.setItem('nv_lang', lang);
    document.documentElement.lang = lang;

    const run = () => {
      const t = T[lang];

      /* 1. All [data-i18n] elements */
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
      });

      /* 2. Nav links via data-en / data-ta */
      document.querySelectorAll('[data-en][data-ta]').forEach(el => {
        el.textContent = lang === 'ta' ? el.getAttribute('data-ta') : el.getAttribute('data-en');
      });

      /* 3. Toggle button itself */
      if (langLabel)  langLabel.textContent = t.lang_btn_label;
      if (langToggle) langToggle.title = t.lang_btn_title;
      /* flag: show 🇮🇳 when switching to Tamil (en mode), show EN flag when switching to English (ta mode) */
      const langFlag = document.getElementById('langFlag');
      if (langFlag) langFlag.textContent = lang === 'en' ? '🇮🇳' : '🌐';

      /* 4. Hero title styling:
            English → show English-styled subtitle (.ht-en visible, smaller)
            Tamil   → show Tamil-styled main line (.ht-tamil styling) */
      const htTamil = document.querySelector('.ht-tamil');
      const htEn    = document.querySelector('.ht-en');
      if (htTamil && htEn) {
        if (lang === 'ta') {
          htTamil.style.cssText = '';     /* Tamil: big gradient text */
          htEn.style.opacity    = '0.75'; /* subtitle still visible in Tamil script */
        } else {
          htTamil.style.cssText = '';
          htEn.style.opacity    = '0.65';
        }
      }

      /* 5. page title */
      document.title = lang === 'ta'
        ? 'நல்லோர் வட்டம் | திருப்பூர்'
        : 'Nallor Vattam | Tiruppur';
    };

    if (animate) {
      document.body.classList.add('lang-switching');
      setTimeout(() => { run(); document.body.classList.remove('lang-switching'); }, 180);
    } else {
      run();
    }
  }

  /* Apply on page load (no animation) */
  applyLang(lang, false);

  /* Toggle click */
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(lang === 'en' ? 'ta' : 'en', true);
    });
  }

  /* ── 10. THEME TOGGLE (light / dark) ── */
  const THEME_KEY   = 'nv_theme';
  const themeToggle = document.getElementById('themeToggle');

  function applyTheme(theme, animate) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    /* Update toggle button tooltip */
    if (themeToggle) {
      themeToggle.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    /* Logo swap — dark mode keeps white logo always visible,
       light mode uses the coloured logo when scrolled          */
    const navLogo = document.getElementById('navLogoImg');
    if (navLogo) {
      const scrolled = window.scrollY > 60;
      if (theme === 'dark') {
        /* In dark mode navbar bg is always dark → always show white logo */
        navLogo.src = 'nallorvattam.png';
      } else {
        /* Light mode: white logo on hero (transparent), coloured when scrolled */
        navLogo.src = scrolled ? 'nallorvattam1.png' : 'nallorvattam.png';
      }
    }

    /* Smooth flash transition on theme switch */
    if (animate) {
      document.documentElement.style.transition = 'none';
      document.body.style.opacity = '0.85';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.style.opacity = '';
          document.body.style.transition = 'opacity .2s ease';
          setTimeout(() => { document.body.style.transition = ''; }, 220);
        });
      });
    }
  }

  /* On scroll in dark mode, keep white logo */
  const _origOnScroll = onScroll;
  function onScrollWithTheme() {
    _origOnScroll();
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const navLogo = document.getElementById('navLogoImg');
    if (currentTheme === 'dark' && navLogo) {
      navLogo.src = 'nallorvattam.png';   /* always white in dark mode */
    }
  }
  window.removeEventListener('scroll', onScroll);
  window.addEventListener('scroll', onScrollWithTheme, { passive: true });

  /* Apply saved theme on load */
  const savedTheme = localStorage.getItem(THEME_KEY) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme, false);

  /* Wire toggle button */
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark', true);
    });
  }

  /* Sync with OS preference changes */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light', true);
    }
  });

}); // end DOMContentLoaded
