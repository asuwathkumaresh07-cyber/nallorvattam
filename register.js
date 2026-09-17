/* ============================================================
   REGISTER PAGE — JAVASCRIPT
   Tiruppur City Municipal Corporation · 4 Mandalams · 60 Wards
   Full EN/TA bilingual · Dependent dropdowns · Live preview
============================================================ */
'use strict';

/* ── Corp data ── */
const CORP_DATA = {
  mandalams: [
    { id:1, en:'Mandalam 1 – 15 Velampalayam', ta:'மண்டலம் 1 – 15 வேலம்பாளையம்',
      wards:[
        {no:1,en:'Ward 1',ta:'வார்டு 1'},{no:9,en:'Ward 9',ta:'வார்டு 9'},
        {no:10,en:'Ward 10',ta:'வார்டு 10'},{no:11,en:'Ward 11',ta:'வார்டு 11'},
        {no:12,en:'Ward 12',ta:'வார்டு 12'},{no:13,en:'Ward 13',ta:'வார்டு 13'},
        {no:14,en:'Ward 14',ta:'வார்டு 14'},{no:15,en:'Ward 15',ta:'வார்டு 15'},
        {no:21,en:'Ward 21',ta:'வார்டு 21'},{no:22,en:'Ward 22',ta:'வார்டு 22'},
        {no:23,en:'Ward 23',ta:'வார்டு 23'},{no:24,en:'Ward 24',ta:'வார்டு 24'},
        {no:25,en:'Ward 25',ta:'வார்டு 25'},{no:26,en:'Ward 26',ta:'வார்டு 26'},
        {no:27,en:'Ward 27',ta:'வார்டு 27'}
      ]
    },
    { id:2, en:'Mandalam 2 – Thottipalayam', ta:'மண்டலம் 2 – தொட்டிபாளையம்',
      wards:[
        {no:2,en:'Ward 2',ta:'வார்டு 2'},{no:3,en:'Ward 3',ta:'வார்டு 3'},
        {no:4,en:'Ward 4',ta:'வார்டு 4'},{no:5,en:'Ward 5',ta:'வார்டு 5'},
        {no:6,en:'Ward 6',ta:'வார்டு 6'},{no:7,en:'Ward 7',ta:'வார்டு 7'},
        {no:8,en:'Ward 8',ta:'வார்டு 8'},{no:16,en:'Ward 16',ta:'வார்டு 16'},
        {no:17,en:'Ward 17',ta:'வார்டு 17'},{no:18,en:'Ward 18',ta:'வார்டு 18'},
        {no:19,en:'Ward 19',ta:'வார்டு 19'},{no:20,en:'Ward 20',ta:'வார்டு 20'},
        {no:30,en:'Ward 30',ta:'வார்டு 30'},{no:31,en:'Ward 31',ta:'வார்டு 31'},
        {no:32,en:'Ward 32',ta:'வார்டு 32'}
      ]
    },
    { id:3, en:'Mandalam 3 – Nallur', ta:'மண்டலம் 3 – நல்லூர்',
      wards:[
        {no:33,en:'Ward 33',ta:'வார்டு 33'},{no:34,en:'Ward 34',ta:'வார்டு 34'},
        {no:35,en:'Ward 35',ta:'வார்டு 35'},{no:44,en:'Ward 44',ta:'வார்டு 44'},
        {no:45,en:'Ward 45',ta:'வார்டு 45'},{no:46,en:'Ward 46',ta:'வார்டு 46'},
        {no:47,en:'Ward 47',ta:'வார்டு 47'},{no:48,en:'Ward 48',ta:'வார்டு 48'},
        {no:49,en:'Ward 49',ta:'வார்டு 49'},{no:50,en:'Ward 50',ta:'வார்டு 50'},
        {no:51,en:'Ward 51',ta:'வார்டு 51'},{no:56,en:'Ward 56',ta:'வார்டு 56'},
        {no:58,en:'Ward 58',ta:'வார்டு 58'},{no:59,en:'Ward 59',ta:'வார்டு 59'},
        {no:60,en:'Ward 60',ta:'வார்டு 60'}
      ]
    },
    { id:4, en:'Mandalam 4 – Andipalayam', ta:'மண்டலம் 4 – ஆண்டிபாளையம்',
      wards:[
        {no:28,en:'Ward 28',ta:'வார்டு 28'},{no:29,en:'Ward 29',ta:'வார்டு 29'},
        {no:36,en:'Ward 36',ta:'வார்டு 36'},{no:37,en:'Ward 37',ta:'வார்டு 37'},
        {no:38,en:'Ward 38',ta:'வார்டு 38'},{no:39,en:'Ward 39',ta:'வார்டு 39'},
        {no:40,en:'Ward 40',ta:'வார்டு 40'},{no:41,en:'Ward 41',ta:'வார்டு 41'},
        {no:42,en:'Ward 42',ta:'வார்டு 42'},{no:43,en:'Ward 43',ta:'வார்டு 43'},
        {no:52,en:'Ward 52',ta:'வார்டு 52'},{no:53,en:'Ward 53',ta:'வார்டு 53'},
        {no:54,en:'Ward 54',ta:'வார்டு 54'},{no:55,en:'Ward 55',ta:'வார்டு 55'},
        {no:57,en:'Ward 57',ta:'வார்டு 57'}
      ]
    }
  ]
};

/* ── Translations ── */
const TRANS = {
  en:{
    brand_name:'Nallor Vattam', brand_sub:'Tiruppur',
    reg_badge:'Member Registration', reg_title_pre:'Join',
    reg_sub:'Stand with us for a <strong>waste-free Tiruppur.</strong> Fill in your details — takes less than 2 minutes.',
    addr_section_title:'Address Details',
    corp_name:'Tiruppur Corp', corp_full_label:'Tiruppur City Municipal Corporation',
    corp_sub_label:'60 Wards · 4 Mandalams', corp_verified:'Official',
    label_name:'Full Name', label_phone:'Phone Number', label_age:'Age',
    label_mandalam:'Mandalam', label_ward:'Ward',
    label_street:'Street', label_area:'Area / Locality',
    label_pincode:'Pincode', label_mobile:'Mobile',
    placeholder_name:'Your full name',
    placeholder_phone:'10-digit Phone Number',
    placeholder_age:'e.g. 25',
    placeholder_mandalam:'Select Mandalam', placeholder_ward:'Select Ward',
    placeholder_street:'e.g. Gandhi Street',
    placeholder_area:'e.g. Chettipalayam', placeholder_pincode:'6-digit Pincode',
    placeholder_mobile:'10-digit Mobile',
    addr_preview_label:'Address Preview', optional:'(Optional)',
    err_name:'Full name is required.',
    err_phone:'Phone number is required.', err_phone_inv:'Enter a valid 10-digit Indian mobile.',
    err_age:'Please enter your age.', err_age_inv:'Please enter a valid age between 5 and 100.',
    err_mandalam:'Please select a Mandalam.', err_ward:'Please select a Ward.',
    err_area:'Please enter your Area / Locality.',
    err_pincode:'Please enter a valid 6-digit Pincode.',
    err_mobile:'Please enter a valid 10-digit Mobile Number.',
    err_terms:'You must agree to continue.',
    step1_label:'Your Details', step2_label:'Review', step3_label:'Done!',
    form_title1:'Personal Details', form_sub1:'Fields marked * are required.',
    form_title2:'Review Your Details', form_sub2:'Everything correct? Submit when ready.',
    btn_continue:'Continue to Review', btn_edit:'Edit',
    btn_submit:'Submit Registration', btn_share:'Share',
    btn_cert:'Download Certificate', btn_home:'Back to Home',
    submitting:'Submitting...',
    terms_text:'I agree to actively participate in cleanup drives and events organised by Nallor Vattam.',
    privacy:'Your data is private and secure.',
    cl_name:'Name', cl_phone:'Phone', cl_age:'Age',
    cl_mandalam:'Mandalam', cl_ward:'Ward',
    cl_street:'Street', cl_area:'Area', cl_pincode:'Pincode',
    cl_addr:'ADDRESS',
    success_title:'Welcome to Nallor Vattam! 🌿',
    label_occupation:'Occupation', placeholder_occupation:'Select Occupation',
    label_qualification:'Qualification', placeholder_qualification:'Select Qualification',
    label_jobtype:'Job Type / Role', placeholder_jobtype:'e.g. Software Engineer, Shop Owner',
    err_occupation:'Please select your occupation.',
    err_qualification:'Please select your qualification.',
    cl_occupation:'Occupation', cl_qualification:'Qualification', cl_jobtype:'Job Type',
    city_name:'Tiruppur', door_prefix:'Door No. ',
    lang_btn_label:'தமிழ்', lang_btn_title:'Switch to Tamil'
  },
  ta:{
    brand_name:'நல்லோர் வட்டம்', brand_sub:'திருப்பூர்',
    reg_badge:'உறுப்பினர் பதிவு', reg_title_pre:'சேரவும்',
    reg_sub:'<strong>கழிவு இல்லாத திருப்பூருக்காக</strong> எங்களுடன் நில்லுங்கள். விவரங்களை பதிவு செய்யுங்கள்.',
    addr_section_title:'முகவரி விவரங்கள்',
    corp_name:'திருப்பூர் மாநகராட்சி', corp_full_label:'திருப்பூர் மாநகராட்சி',
    corp_sub_label:'60 வார்டுகள் · 4 மண்டலங்கள்', corp_verified:'அதிகாரப்பூர்வம்',
    label_name:'முழு பெயர்', label_phone:'தொலைபேசி எண்', label_age:'வயது',
    label_mandalam:'மண்டலம்', label_ward:'வார்டு',
    label_street:'தெரு', label_area:'பகுதி / இடம்',
    label_pincode:'அஞ்சல் குறியீடு', label_mobile:'கைபேசி எண்',
    placeholder_name:'உங்கள் முழு பெயர்',
    placeholder_phone:'10 இலக்க தொலைபேசி எண்',
    placeholder_age:'எ.கா. 25',
    placeholder_mandalam:'மண்டலத்தைத் தேர்வு செய்யவும்', placeholder_ward:'வார்டைத் தேர்வு செய்யவும்',
    placeholder_street:'தெருவின் பெயரை உள்ளிடவும்',
    placeholder_area:'பகுதி அல்லது இடத்தின் பெயரை உள்ளிடவும்',
    placeholder_pincode:'6 இலக்க அஞ்சல் குறியீடு', placeholder_mobile:'10 இலக்க கைபேசி எண்',
    addr_preview_label:'முகவரி முன்னோட்டம்', optional:'(விருப்பமானது)',
    err_name:'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.',
    err_phone:'தொலைபேசி எண் தேவை.', err_phone_inv:'சரியான 10 இலக்க இந்திய கைபேசி எண்ணை உள்ளிடவும்.',
    err_age:'தயவுசெய்து உங்கள் வயதை உள்ளிடவும்.', err_age_inv:'5 முதல் 100 வரை சரியான வயதை உள்ளிடவும்.',
    err_mandalam:'தயவுசெய்து மண்டலத்தைத் தேர்வு செய்யவும்.',
    err_ward:'தயவுசெய்து வார்டைத் தேர்வு செய்யவும்.',
    err_area:'தயவுசெய்து பகுதியின் பெயரை உள்ளிடவும்.',
    err_pincode:'சரியான 6 இலக்க அஞ்சல் குறியீட்டை உள்ளிடவும்.',
    err_mobile:'சரியான 10 இலக்க கைபேசி எண்ணை உள்ளிடவும்.',
    err_terms:'தொடர ஒப்புக்கொள்ள வேண்டும்.',
    step1_label:'உங்கள் விவரங்கள்', step2_label:'மதிப்பாய்வு', step3_label:'முடிந்தது!',
    form_title1:'தனிப்பட்ட விவரங்கள்', form_sub1:'* குறிக்கப்பட்ட புலங்கள் கட்டாயம்.',
    form_title2:'விவரங்களை மதிப்பாய்வு செய்யவும்', form_sub2:'எல்லாம் சரியா? சமர்ப்பிக்கவும்.',
    btn_continue:'மதிப்பாய்விற்கு தொடரவும்', btn_edit:'திருத்தவும்',
    btn_submit:'பதிவை சமர்ப்பிக்கவும்', btn_share:'பகிரவும்',
    btn_cert:'சான்றிதழ் பதிவிறக்கம்', btn_home:'முகப்பு பக்கம்',
    submitting:'சமர்ப்பிக்கிறது...',
    terms_text:'நல்லோர் வட்டம் ஏற்பாடு செய்யும் சுத்தப்படுத்தல் பணிகள் மற்றும் நிகழ்வுகளில் பங்கேற்க ஒப்புக்கொள்கிறேன்.',
    privacy:'உங்கள் தரவு தனிப்பட்டது மற்றும் பாதுகாப்பானது.',
    cl_name:'பெயர்', cl_phone:'தொலைபேசி', cl_age:'வயது',
    cl_mandalam:'மண்டலம்', cl_ward:'வார்டு',
    cl_street:'தெரு', cl_area:'பகுதி', cl_pincode:'அஞ்சல் குறியீடு',
    cl_addr:'முகவரி',
    success_title:'நல்லோர் வட்டத்திற்கு வரவேற்கிறோம்! 🌿',
    label_occupation:'தொழில்', placeholder_occupation:'தொழிலைத் தேர்வு செய்யவும்',
    label_qualification:'கல்வித் தகுதி', placeholder_qualification:'கல்வித் தகுதியைத் தேர்வு செய்யவும்',
    label_jobtype:'பணி வகை / பதவி', placeholder_jobtype:'எ.கா. மென்பொருள் பொறியியலாளர்',
    err_occupation:'தயவுசெய்து உங்கள் தொழிலைத் தேர்வு செய்யவும்.',
    err_qualification:'தயவுசெய்து கல்வித் தகுதியைத் தேர்வு செய்யவும்.',
    cl_occupation:'தொழில்', cl_qualification:'கல்வித் தகுதி', cl_jobtype:'பணி வகை',
    city_name:'திருப்பூர்', door_prefix:'வீட்டு எண் ',
    lang_btn_label:'EN', lang_btn_title:'Switch to English'
  }
};

/* ── helpers outside DOMContentLoaded so they're always available ── */
const getLang = () => localStorage.getItem('nv_lang') || 'en';
const setLang = (l) => localStorage.setItem('nv_lang', l);

function easeOutExpo(t){ return t===1?1:1-Math.pow(2,-10*t); }
function countUp(el,target,dur){
  if(!el)return;
  const s=performance.now();
  const tick=(now)=>{
    const p=Math.min((now-s)/dur,1);
    el.textContent=Math.round(target*easeOutExpo(p)).toLocaleString('en-IN');
    if(p<1)requestAnimationFrame(tick); else el.textContent=target.toLocaleString('en-IN');
  };
  requestAnimationFrame(tick);
}

/* ============================================================
   DOM READY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 0. APPLY SAVED THEME IMMEDIATELY (prevents flash) ── */
  (function(){
    const saved = localStorage.getItem('nv_theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', saved);
  })();

  /* ── Loader ── */
  const loader=document.getElementById('loader');
  const loaderBar=document.getElementById('loaderBar');
  const loaderPct=document.getElementById('loaderPercent');
  document.body.style.overflow='hidden';
  let pct=0;
  const lt=setInterval(()=>{
    pct=Math.min(pct+3.5+Math.random()*2,100);
    if(loaderBar)loaderBar.style.width=pct+'%';
    if(loaderPct)loaderPct.textContent=Math.floor(pct)+'%';
    if(pct>=100){
      clearInterval(lt);
      if(loaderBar)loaderBar.style.width='100%';
      if(loaderPct)loaderPct.textContent='100%';
      setTimeout(()=>{
        if(loader)loader.classList.add('hidden');
        document.body.style.overflow='';
        countUp(document.getElementById('rc-members'),1248,1800);
      },380);
    }
  },28);

  /* ── Navbar scroll ── */
  const navbar=document.getElementById('navbar');
  const backToTop=document.getElementById('backToTop');
  const navLogoImg=document.getElementById('navLogoImg');
  const swapLogo=(sc)=>{ if(navLogoImg) navLogoImg.src=sc?'nallorvattam1.png':'nallorvattam.png'; };
  window.addEventListener('scroll',()=>{
    const sc=window.scrollY>60;
    if(navbar)navbar.classList.toggle('scrolled',sc);
    if(backToTop)backToTop.classList.toggle('visible',window.scrollY>400);
    swapLogo(sc);
  },{passive:true});
  /* trigger once on load to set correct initial state */
  const initSc=window.scrollY>60;
  if(navbar)navbar.classList.toggle('scrolled',initSc);
  swapLogo(initSc);

  /* ── Mobile nav ── */
  const hamburger=document.getElementById('hamburger');
  const navLinks=document.getElementById('navLinks');
  if(hamburger&&navLinks){
    hamburger.addEventListener('click',()=>{
      const open=navLinks.classList.toggle('open');
      hamburger.classList.toggle('active',open);
    });
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      navLinks.classList.remove('open'); hamburger.classList.remove('active');
    }));
  }

  /* ══════════════════════════════════════════════════════════
     ALL HELPER FUNCTIONS — defined as const BEFORE any call
  ══════════════════════════════════════════════════════════ */

  /* ── err helpers ── */
  const showErr=(id,msg)=>{
    const e=document.getElementById('err-'+id); if(e)e.textContent=msg;
    const f=document.getElementById(id); if(f)f.classList.add('rg-err-field');
  };
  const clearErr=(id)=>{
    const e=document.getElementById('err-'+id); if(e)e.textContent='';
    const f=document.getElementById(id); if(f)f.classList.remove('rg-err-field');
  };

  /* ── dropdowns ── */
  const populateMandalams=()=>{
    const sel=document.getElementById('fmandalam'); if(!sel)return;
    const cur=sel.value;
    while(sel.options.length>1)sel.remove(1);
    const lang=getLang();
    CORP_DATA.mandalams.forEach(m=>{
      const o=document.createElement('option');
      o.value=m.id; o.textContent=lang==='ta'?m.ta:m.en;
      sel.appendChild(o);
    });
    if(cur)sel.value=cur;
  };

  const populateWards=(mid)=>{
    const sel=document.getElementById('fward'); if(!sel)return;
    while(sel.options.length>1)sel.remove(1);
    sel.disabled=true;
    if(!mid)return;
    const lang=getLang();
    const m=CORP_DATA.mandalams.find(x=>x.id==mid); if(!m)return;
    m.wards.forEach(w=>{
      const o=document.createElement('option');
      o.value=w.no; o.textContent=lang==='ta'?w.ta:w.en;
      sel.appendChild(o);
    });
    sel.disabled=false;
  };

  /* ── live preview ── */
  const updatePreview=()=>{
    const prev=document.getElementById('addrPreview');
    const txt=document.getElementById('addrPreviewText');
    if(!prev||!txt)return;
    const ms=document.getElementById('fmandalam');
    const ws=document.getElementById('fward');
    if(!ms?.value||!ws?.value){prev.style.display='none';return;}
    const lang=getLang(); const isTA=lang==='ta'; const tr=TRANS[lang];
    const mo=CORP_DATA.mandalams.find(x=>x.id==ms.value);
    const wo=mo?.wards.find(x=>x.no==ws.value);
    const street=(document.getElementById('fstreet')?.value||'').trim();
    const area=(document.getElementById('farea')?.value||'').trim();
    const pin=(document.getElementById('fpincode')?.value||'').trim();
    const parts=[
      mo?(isTA?mo.ta:mo.en):null,
      wo?(isTA?wo.ta:wo.en):null,
      street||null, area||null,
      pin?tr.city_name+' – '+pin:tr.city_name
    ].filter(Boolean);
    txt.textContent=parts.join(', ');
    prev.style.display='block';
  };

  /* ── applyLang ── */
  const langToggle=document.getElementById('langToggle');
  const langLabel=document.getElementById('langLabel');
  let currentLang=getLang();

  const applyLang=(lang,animate)=>{
    currentLang=lang;
    setLang(lang);
    document.documentElement.lang=lang==='ta'?'ta':'en';

    const run=()=>{
      const tr=TRANS[lang];
      /* data-i18n */
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k=el.getAttribute('data-i18n');
        if(tr[k]!==undefined)el.innerHTML=tr[k];
      });
      /* data-en / data-ta */
      document.querySelectorAll('[data-en][data-ta]').forEach(el=>{
        el.textContent=lang==='ta'?el.getAttribute('data-ta'):el.getAttribute('data-en');
      });
      /* placeholders */
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const k=el.getAttribute('data-i18n-placeholder');
        if(tr[k]!==undefined)el.placeholder=tr[k];
      });
      /* select option placeholders */
      document.querySelectorAll('[data-i18n-option]').forEach(el=>{
        const k=el.getAttribute('data-i18n-option');
        if(tr[k]!==undefined)el.textContent=tr[k];
      });
      /* lang toggle */
      if(langLabel)langLabel.textContent=tr.lang_btn_label;
      if(langToggle)langToggle.title=tr.lang_btn_title;
      /* flag */
      const langFlag=document.getElementById('langFlag');
      if(langFlag)langFlag.textContent=lang==='en'?'🇮🇳':'🌐';
      /* step labels */
      const sl=[['#sind1>span','step1_label'],['#sind2>span','step2_label'],['#sind3>span','step3_label']];
      sl.forEach(([sel,key])=>{ const el=document.querySelector(sel); if(el)el.textContent=tr[key]; });
      /* re-render ward dropdown labels if a ward is already selected */
      const savM=document.getElementById('fmandalam')?.value;
      const savW=document.getElementById('fward')?.value;
      if(savM){
        populateMandalams();
        document.getElementById('fmandalam').value=savM;
        populateWards(savM);
        if(savW&&document.getElementById('fward')){ document.getElementById('fward').value=savW; }
      }
      updatePreview();
    };

    if(animate){
      document.body.classList.add('lang-switching');
      setTimeout(()=>{ run(); document.body.classList.remove('lang-switching'); },180);
    } else { run(); }
  };

  /* ── INIT: populate dropdowns first (guarantees options exist),
     then apply language for all text translations ── */
  populateMandalams();
  applyLang(currentLang, false);

  if(langToggle){
    langToggle.addEventListener('click',()=>applyLang(currentLang==='ta'?'en':'ta',true));
  }

  /* ── THEME TOGGLE (light / dark) ── */
  const THEME_KEY_RG   = 'nv_theme';
  const themeToggleRg  = document.getElementById('themeToggle');

  function applyThemeRg(theme, animate) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY_RG, theme);
    if (themeToggleRg) {
      themeToggleRg.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      themeToggleRg.setAttribute('aria-label', themeToggleRg.title);
    }
    /* Logo swap — dark mode always shows white logo */
    const navLogo = document.getElementById('navLogoImg');
    if (navLogo) {
      navLogo.src = (theme === 'dark' || window.scrollY <= 60)
        ? 'nallorvattam.png'
        : 'nallorvattam1.png';
    }
    if (animate) {
      document.body.style.opacity = '0.85';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        document.body.style.opacity = '';
        document.body.style.transition = 'opacity .2s ease';
        setTimeout(() => { document.body.style.transition = ''; }, 220);
      }));
    }
  }

  const savedThemeRg = localStorage.getItem(THEME_KEY_RG) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyThemeRg(savedThemeRg, false);

  if (themeToggleRg) {
    themeToggleRg.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      applyThemeRg(cur === 'dark' ? 'light' : 'dark', true);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(THEME_KEY_RG)) applyThemeRg(e.matches ? 'dark' : 'light', true);
  });

  /* ── Occupation show/hide logic ── */
  const qualField = document.getElementById('qualificationField');
  const jobField  = document.getElementById('jobTypeField');
  const occSel    = document.getElementById('foccupation');

  const STUDENT_OCCS  = ['Student'];
  const JOBTYPE_OCCS  = ['Business','Government Employee','Private Employee','Teacher','Healthcare','Other'];

  const updateOccFields = () => {
    const val = occSel ? occSel.value : '';
    if(qualField) qualField.style.display = STUDENT_OCCS.includes(val)  ? 'flex' : 'none';
    if(jobField)  jobField.style.display  = JOBTYPE_OCCS.includes(val)  ? 'flex' : 'none';
    // Clear errors when hiding
    if(!STUDENT_OCCS.includes(val)) clearErr('fqualification');
    if(!JOBTYPE_OCCS.includes(val))  clearErr('fjobtype');
  };

  if(occSel) occSel.addEventListener('change', ()=>{ clearErr('foccupation'); updateOccFields(); });
  updateOccFields(); // run on load

  /* ── Dropdown events ── */
  const mSel=document.getElementById('fmandalam');
  if(mSel) mSel.addEventListener('change',()=>{
    populateWards(mSel.value);
    const ws=document.getElementById('fward'); if(ws)ws.value='';
    clearErr('fmandalam'); updatePreview();
  });

  const wSel=document.getElementById('fward');
  if(wSel) wSel.addEventListener('change',()=>{ clearErr('fward'); updatePreview(); });

  /* ── Live preview on input ── */
  ['fstreet','farea','fpincode'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('input',()=>{ clearErr(id); updatePreview(); });
  });

  /* clear personal field errors */
  ['fname','fphone','fage'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('input',()=>clearErr(id));
  });

  /* ── Validation ── */
  const validate=()=>{
    let ok=true;
    const tr=TRANS[getLang()];

    const fn=document.getElementById('fname');
    if(!fn?.value.trim()){showErr('fname',tr.err_name);ok=false;}else clearErr('fname');

    const fp=document.getElementById('fphone');
    const ph=(fp?.value||'').trim().replace(/[\s\-]/g,'');
    const phDigits = ph.replace(/^\+?91/, '');   /* bare 10-digit */
    if(!ph){showErr('fphone',tr.err_phone);ok=false;}
    else if(!/^[6-9]\d{9}$/.test(phDigits)){showErr('fphone',tr.err_phone_inv);ok=false;}
    else clearErr('fphone');

    const fa=document.getElementById('fage');
    const ageVal=parseInt(fa?.value||'',10);
    if(!fa?.value){showErr('fage',tr.err_age);ok=false;}
    else if(isNaN(ageVal)||ageVal<5||ageVal>100){showErr('fage',tr.err_age_inv);ok=false;}
    else clearErr('fage');

    const me=document.getElementById('fmandalam');
    if(!me?.value){showErr('fmandalam',tr.err_mandalam);ok=false;}else clearErr('fmandalam');

    const we=document.getElementById('fward');
    if(!we?.value){showErr('fward',tr.err_ward);ok=false;}else clearErr('fward');

    /* street is optional — just clear any stale error */
    clearErr('fstreet');

    const ae=document.getElementById('farea');
    if(!ae?.value.trim()){showErr('farea',tr.err_area);ok=false;}else clearErr('farea');

    const pe=document.getElementById('fpincode');
    if(!pe?.value.trim()||!/^\d{6}$/.test(pe.value.trim())){showErr('fpincode',tr.err_pincode);ok=false;}
    else clearErr('fpincode');

    const ft=document.getElementById('fterms');
    const te=document.getElementById('err-fterms');
    if(!ft?.checked){if(te)te.textContent=tr.err_terms;ok=false;}
    else{if(te)te.textContent='';}

    return ok;
  };

  /* ── Step transitions ── */
  const goToStep=(n)=>{
    ['step1','step2','step3'].forEach(id=>document.getElementById(id)?.classList.add('rg-hidden'));
    ['sind1','sind2','sind3'].forEach(id=>document.getElementById(id)?.classList.remove('rg-step-active','rg-step-done'));
    const sl1=document.getElementById('sline1');
    const sl2=document.getElementById('sline2');
    if(n===1){
      document.getElementById('step1')?.classList.remove('rg-hidden');
      document.getElementById('sind1')?.classList.add('rg-step-active');
      sl1?.classList.remove('done'); sl2?.classList.remove('done');
    } else if(n===2){
      document.getElementById('step2')?.classList.remove('rg-hidden');
      document.getElementById('sind1')?.classList.add('rg-step-done');
      document.getElementById('sind2')?.classList.add('rg-step-active');
      sl1?.classList.add('done'); sl2?.classList.remove('done');
    } else if(n===3){
      document.getElementById('step3')?.classList.remove('rg-hidden');
      document.getElementById('sind1')?.classList.add('rg-step-done');
      document.getElementById('sind2')?.classList.add('rg-step-done');
      document.getElementById('sind3')?.classList.add('rg-step-active','rg-step-done');
      sl1?.classList.add('done'); sl2?.classList.add('done');
    }
    window.scrollTo({top:0,behavior:'smooth'});
  };

  /* ── Next button ── */
  let _certURL='';
  document.getElementById('nextBtn')?.addEventListener('click',()=>{
    if(!validate())return;
    const lang=getLang(); const isTA=lang==='ta'; const tr=TRANS[lang];
    const ms=document.getElementById('fmandalam');
    const ws=document.getElementById('fward');
    const mo=CORP_DATA.mandalams.find(x=>x.id==ms?.value);
    const wo=mo?.wards.find(x=>x.no==ws?.value);
    const rows=[
      {l:tr.cl_name,   v:document.getElementById('fname')?.value.trim()||'—'},
      {l:tr.cl_phone,  v:document.getElementById('fphone')?.value.trim()||'—'},
      {l:tr.cl_age,    v:document.getElementById('fage')?.value||'—'},
      {l:tr.cl_occupation, v:document.getElementById('foccupation')?.value||'—'},
      {l:tr.cl_qualification, v:(STUDENT_OCCS.includes(document.getElementById('foccupation')?.value||'')
          ? (document.getElementById('fqualification')?.value||'—') : null)},
      {l:tr.cl_jobtype, v:(JOBTYPE_OCCS.includes(document.getElementById('foccupation')?.value||'')
          ? (document.getElementById('fjobtype')?.value.trim()||'—') : null)},
      {l:'__DIV__',    v:tr.cl_addr},
      {l:tr.cl_mandalam, v:mo?(isTA?mo.ta:mo.en):'—'},
      {l:tr.cl_ward,   v:wo?(isTA?wo.ta:wo.en):'—'},
      {l:tr.cl_street, v:document.getElementById('fstreet')?.value.trim()||null},
      {l:tr.cl_area,   v:document.getElementById('farea')?.value.trim()||'—'},
      {l:tr.cl_pincode,v:document.getElementById('fpincode')?.value.trim()||'—'},
    ];
    const c=document.getElementById('confirmRows');
    if(c)c.innerHTML=rows.filter(r=>r.v!==null).map(r=>
      r.l==='__DIV__'
        ?`<div class="rg-cd-divider"><span class="rg-cd-addr-head">${r.v}</span></div>`
        :`<div class="rg-cd-row"><span class="rg-cd-label">${r.l}</span><span class="rg-cd-value">${r.v}</span></div>`
    ).join('');
    goToStep(2);
  });

  /* ── Edit button ── */
  document.getElementById('editBtn')?.addEventListener('click',()=>goToStep(1));

  /* ── Submit — POST to MongoDB Atlas via /api/members ── */
  document.getElementById('submitBtn')?.addEventListener('click', async () => {
    const sb = document.getElementById('submitBtn'); if (!sb) return;
    sb.disabled = true;
    const lang = getLang(); const tr = TRANS[lang]; const isTA = lang === 'ta';
    sb.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + tr.submitting;

    const ms = document.getElementById('fmandalam');
    const ws = document.getElementById('fward');
    const mo = CORP_DATA.mandalams.find(x => x.id == ms?.value);
    const wo = mo?.wards.find(x => x.no == ws?.value);
    const name  = document.getElementById('fname')?.value.trim()  || '';
    const phone = document.getElementById('fphone')?.value.trim() || '';
    /* Normalise to bare 10-digit number for the mobile field (strips +91 / spaces) */
    const mobile = phone.replace(/[\s\-]/g,'').replace(/^\+?91/, '');

    const payload = {
      name,
      phone,
      age:           document.getElementById('fage')?.value        || '',
      occupation:    document.getElementById('foccupation')?.value  || '',
      qualification: document.getElementById('fqualification')?.value || '',
      jobtype:       document.getElementById('fjobtype')?.value.trim() || '',
      corpEn:        'Tiruppur City Municipal Corporation',
      corpTa:        'திருப்பூர் மாநகராட்சி',
      mandalamEn:    mo ? mo.en : '',
      mandalamTa:    mo ? mo.ta : '',
      wardEn:        wo ? wo.en : '',
      wardTa:        wo ? wo.ta : '',
      street:        document.getElementById('fstreet')?.value.trim()  || '',
      area:          document.getElementById('farea')?.value.trim()    || '',
      pincode:       document.getElementById('fpincode')?.value.trim() || '',
      mobile,
      lang
    };

    try {
      const res  = await fetch('/api/members', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload)
      });
      const data = await res.json();

      if (!res.ok) {
        /* Show server error back on the form */
        sb.disabled = false;
        sb.innerHTML = '<i class="fas fa-paper-plane"></i> ' + tr.btn_submit;
        const te = document.getElementById('err-fterms');
        const msg = data.error || (isTA ? 'சர்வர் பிழை. மீண்டும் முயற்சிக்கவும்.' : 'Server error. Please try again.');
        if (te) {
          te.textContent = msg;
          te.style.cssText = 'display:block;color:#ef4444;font-size:.85rem;margin-top:8px;';
        }
        return;
      }

      /* ── Success ── */
      const mid  = data.memberId;
      const mnum = data.memberNum;

      const sucMsg = document.getElementById('sucMsg');
      if (sucMsg) sucMsg.innerHTML =
        `${isTA ? 'நன்றி!' : 'Thank you!'} <strong>${name}</strong> — ` +
        `${isTA ? 'உங்கள் பதிவு உறுதிப்படுத்தப்பட்டது.' : 'your registration is confirmed.'}<br/>` +
        `${isTA ? 'விரைவில் தொடர்பு கொள்கிறோம்' : "We'll reach you on"} <strong>${phone}</strong>${isTA ? '' : ' soon.'}.`;

      const sucIdText = document.getElementById('sucIdText');
      if (sucIdText) sucIdText.textContent =
        `${isTA ? 'உறுப்பினர் அடையாள எண்' : 'Member ID'}: ${mid}`;

      const sucNumText = document.getElementById('sucNumText');
      if (sucNumText) sucNumText.textContent =
        `${isTA ? 'நீங்கள் நல்லோர் வட்டத்தின்' : 'You are member'} #${mnum} ${isTA ? 'வது உறுப்பினர்!' : 'of Nallor Vattam!'}`;

      /* Build certificate URL with data returned from server */
      const p = new URLSearchParams({
        name, memberId: mid, memberNum: mnum,
        corpEn: 'Tiruppur City Municipal Corporation',
        corpTa: 'திருப்பூர் மாநகராட்சி',
        mandalamEn: mo ? mo.en : '', mandalamTa: mo ? mo.ta : '',
        wardEn: wo ? wo.en : '',     wardTa: wo ? wo.ta : '',
        age:    payload.age,
        street: payload.street,  area:    payload.area,
        pincode:payload.pincode, mobile:  payload.mobile,
        occupation: payload.occupation, qualification: payload.qualification,
        jobtype: payload.jobtype,
        date: new Date().toLocaleDateString('en-IN'), lang
      });
      _certURL = 'certificate.html?' + p.toString();

      const dc = document.getElementById('downloadCertBtn');
      if (dc) dc.onclick = () => { window.location.href = _certURL; };

      goToStep(3);

    } catch (err) {
      /* Network error — fall back gracefully */
      console.error('Registration API error:', err);
      sb.disabled = false;
      sb.innerHTML = '<i class="fas fa-paper-plane"></i> ' + tr.btn_submit;
      const te = document.getElementById('err-fterms');
      if (te) te.textContent = isTA
        ? 'நெட்வொர்க் பிழை. இணைப்பை சரிபார்க்கவும்.'
        : 'Network error. Check your connection and try again.';
    }
  });

  /* ── Share ── */
  document.getElementById('shareBtn')?.addEventListener('click',()=>{
    const lang=getLang(); const tr=TRANS[lang];
    const text=lang==='ta'
      ?'நான் நல்லோர் வட்டத்தில் சேர்ந்தேன்! '+location.origin+'/register.html'
      :'I just joined Nallor Vattam – Tiruppur! '+location.origin+'/register.html';
    if(navigator.share){navigator.share({title:'நல்லோர் வட்டம்',text,url:location.href}).catch(()=>{});}
    else{
      navigator.clipboard.writeText(text).then(()=>{
        const sh=document.getElementById('shareBtn');
        if(sh){sh.innerHTML='<i class="fas fa-check"></i> '+(lang==='ta'?'நகலெடுக்கப்பட்டது!':'Copied!');
          setTimeout(()=>{ sh.innerHTML='<i class="fas fa-share-alt"></i> '+tr.btn_share; },2500);}
      });
    }
  });

}); /* end DOMContentLoaded */
