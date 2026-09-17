/* ============================================================
   ADMIN PAGE — JAVASCRIPT
   Nallor Vattam · Tiruppur City Municipal Corporation
   All data from MongoDB Atlas via Express API
   Tasks: Login/JWT · Member CRUD · Gallery · Excel export
============================================================ */
'use strict';

/* ── API base URL ─────────────────────────────────────────── */
/* When served by the Express server, relative URLs work fine.
   Change this only if the admin page is hosted on a different
   domain than the backend (e.g. Netlify + Render).           */
const API = window.NV_API_URL || '';   /* '' = same origin  */

/* ── JWT token storage ────────────────────────────────────── */
const TOKEN_KEY = 'nv_admin_token';
function getToken()       { return sessionStorage.getItem(TOKEN_KEY); }
function setToken(t)      { sessionStorage.setItem(TOKEN_KEY, t); }
function clearToken()     { sessionStorage.removeItem(TOKEN_KEY); }
function isLoggedIn()     { return !!getToken(); }
function authHeaders()    { return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getToken() }; }

/* ── State ────────────────────────────────────────────────── */
let filteredMembers = [];   /* tracks current filter result for export */
let pendingImages   = [];   /* staging area before gallery upload      */
let allMembers      = [];   /* full list from last API fetch           */

/* ============================================================
   UTILITIES
============================================================ */
const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function toast(msg, type = 'success') {
  const t   = $('toast');
  const ico = $('toastIcon');
  const mel = $('toastMsg');
  if (!t) return;
  t.className   = 'adm-toast' + (type === 'error' ? ' error' : '');
  ico.className = type === 'error' ? 'fas fa-times-circle' : 'fas fa-check-circle';
  mel.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

function fmtDate(iso) {
  if (!iso) return '—';
  try { return new Date(iso).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }); }
  catch { return iso; }
}

function escHtml(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(s) {
  return String(s ?? '').replace(/'/g,"&#39;").replace(/"/g,'&quot;');
}

/* ── Generic API helper ── */
async function api(method, path, body) {
  const opts = {
    method,
    headers: authHeaders()
  };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res  = await fetch(API + path, opts);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

/* ── Public API helper (no token needed) ── */
async function publicApi(method, path, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res  = await fetch(API + path, opts);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

/* ============================================================
   LANGUAGE TOGGLE — Admin page EN / தமிழ்
   Shares localStorage key 'nv_lang' with the public site
============================================================ */
const ADM_TRANS = {
  en: {
    /* Login card */
    login_title:    'Admin Login',
    login_sub:      'Nallor Vattam · Tiruppur',
    login_badge:    'Admin Portal',
    label_user:     'Username',
    label_pass:     'Password',
    btn_login:      'Sign In',
    placeholder_user: 'admin',
    placeholder_pass: '••••••••',
    /* Topbar */
    topbar_overview: 'Overview',
    topbar_members:  'Member Management',
    topbar_gallery:  'Gallery',
    topbar_video:    'Background Video',
    topbar_export:   'Export Data',
    /* Sidebar */
    sidebar_name:   'Administrator',
    sidebar_role:   'Nallor Vattam',
    nav_overview:   'Overview',
    nav_members:    'Members',
    nav_gallery:    'Gallery',
    nav_video:      'Video',
    nav_export:     'Export',
    btn_logout:     'Logout',
    /* Page headers */
    ph_overview:    'Dashboard Overview',
    ph_overview_s:  'Welcome back, Administrator',
    ph_members:     'Member Management',
    ph_members_s:   'View, edit and delete registered members',
    ph_gallery:     'Gallery Management',
    ph_gallery_s:   'Add photos to the website gallery',
    ph_video:       'Background Video',
    ph_video_s:     'Upload a video — it will automatically play as the hero background',
    ph_export:      'Export Data',
    ph_export_s:    'Download member data as Excel spreadsheet',
    /* Toggle button */
    lang_label:     'தமிழ்',
    lang_flag:      '🇮🇳',
    lang_title:     'Switch to Tamil',
    /* Logo */
    logo_alt:       'Nallor Vattam',
    /* Logos to use: login card uses nallorvattam.png (white bg filtered),
                     sidebar uses nallorvattam1.png (light variant on dark bg) */
    login_logo:     'nallorvattam.png',
    sidebar_logo:   'nallorvattam1.png'
  },
  ta: {
    login_title:    'நிர்வாக உள்நுழைவு',
    login_sub:      'நல்லோர் வட்டம் · திருப்பூர்',
    login_badge:    'நிர்வாக போர்ட்டல்',
    label_user:     'பயனர் பெயர்',
    label_pass:     'கடவுச்சொல்',
    btn_login:      'உள்நுழைய',
    placeholder_user: 'admin',
    placeholder_pass: '••••••••',
    topbar_overview: 'மேலோட்டம்',
    topbar_members:  'உறுப்பினர் நிர்வாகம்',
    topbar_gallery:  'படத்தொகுப்பு',
    topbar_video:    'பின்னணி வீடியோ',
    topbar_export:   'தரவு ஏற்றுமதி',
    sidebar_name:   'நிர்வாகி',
    sidebar_role:   'நல்லோர் வட்டம்',
    nav_overview:   'மேலோட்டம்',
    nav_members:    'உறுப்பினர்கள்',
    nav_gallery:    'படங்கள்',
    nav_video:      'வீடியோ',
    nav_export:     'ஏற்றுமதி',
    btn_logout:     'வெளியேறு',
    ph_overview:    'டாஷ்போர்டு மேலோட்டம்',
    ph_overview_s:  'வரவேற்கிறோம், நிர்வாகி',
    ph_members:     'உறுப்பினர் நிர்வாகம்',
    ph_members_s:   'பதிவு செய்யப்பட்ட உறுப்பினர்களை பார்க்கவும், திருத்தவும், நீக்கவும்',
    ph_gallery:     'படத்தொகுப்பு நிர்வாகம்',
    ph_gallery_s:   'இணையதளத்தில் படங்களை சேர்க்கவும்',
    ph_video:       'பின்னணி வீடியோ',
    ph_video_s:     'வீடியோ பதிவேற்றவும் — முகப்பு பக்கத்தில் தானாக இயங்கும்',
    ph_export:      'தரவு ஏற்றுமதி',
    ph_export_s:    'உறுப்பினர் தரவை Excel ஆக பதிவிறக்கவும்',
    lang_label:     'EN',
    lang_flag:      '🌐',
    lang_title:     'Switch to English',
    logo_alt:       'நல்லோர் வட்டம்',
    login_logo:     'nallorvattam.png',
    sidebar_logo:   'nallorvattam1.png'
  }
};

/* Shared lang key with public site */
let adminLang = localStorage.getItem('nv_lang') || 'en';

function applyAdminLang(lang, animate) {
  adminLang = lang;
  localStorage.setItem('nv_lang', lang);
  document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';

  const run = () => {
    const t = ADM_TRANS[lang];

    /* ── Login card ── */
    const loginTitle = $('adminLoginTitle');
    const loginSub   = $('adminLoginSub');
    const loginBadge = $('adminLoginBadge');
    if (loginTitle) loginTitle.textContent = t.login_title;
    if (loginSub)   loginSub.textContent   = t.login_sub;
    if (loginBadge) loginBadge.innerHTML   = `<i class="fas fa-shield-alt"></i> ${t.login_badge}`;

    const userLabel = $('adminUserLabel');
    const passLabel = $('adminPassLabel');
    if (userLabel) userLabel.lastChild.textContent = ' ' + t.label_user;
    if (passLabel) passLabel.lastChild.textContent = ' ' + t.label_pass;

    const userInput = $('adminUser');
    const passInput = $('adminPass');
    if (userInput) userInput.placeholder = t.placeholder_user;
    if (passInput) passInput.placeholder = t.placeholder_pass;

    const loginBtn = $('loginBtn');
    if (loginBtn && !loginBtn.disabled) {
      loginBtn.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${t.btn_login}`;
    }

    /* ── Both lang toggle buttons ── */
    ['adminLangToggleLogin', 'adminLangToggle'].forEach(id => {
      const btn   = $(id);
      const flag  = id === 'adminLangToggleLogin' ? $('adminLangFlagLogin')  : $('adminLangFlag');
      const label = id === 'adminLangToggleLogin' ? $('adminLangLabelLogin') : $('adminLangLabel');
      if (btn)   btn.title      = t.lang_title;
      if (flag)  flag.textContent  = t.lang_flag;
      if (label) label.textContent = t.lang_label;
    });

    /* ── Logo swap ── */
    const loginLogo   = $('loginLogoImg');
    const sidebarLogo = $('sidebarLogoImg');
    if (loginLogo)   { loginLogo.src   = t.login_logo;   loginLogo.alt   = t.logo_alt; }
    if (sidebarLogo) { sidebarLogo.src = t.sidebar_logo; sidebarLogo.alt = t.logo_alt; }

    /* ── Sidebar ── */
    const sName = document.querySelector('.adm-sidebar-name');
    const sRole = document.querySelector('.adm-sidebar-role');
    if (sName) sName.textContent = t.sidebar_name;
    if (sRole) sRole.textContent = t.sidebar_role;

    $$('.adm-nav-link').forEach(link => {
      const tab  = link.getAttribute('data-tab');
      const span = link.querySelector('span');
      const key  = 'nav_' + tab;
      if (span && t[key]) span.textContent = t[key];
    });

    const logoutSpan = document.querySelector('.adm-logout-btn span');
    if (logoutSpan) logoutSpan.textContent = t.btn_logout;

    /* ── Topbar title (update the current active title) ── */
    const tt = $('topbarTitle');
    if (tt) {
      const tabTitles = {
        overview: t.topbar_overview,
        members:  t.topbar_members,
        gallery:  t.topbar_gallery,
        video:    t.topbar_video,
        export:   t.topbar_export
      };
      const activeTab = document.querySelector('.adm-nav-link.active')?.getAttribute('data-tab');
      if (activeTab && tabTitles[activeTab]) tt.textContent = tabTitles[activeTab];
    }

    /* ── Tab page headers ── */
    const headerMap = [
      ['tab-overview', 'ph_overview',  'ph_overview_s'],
      ['tab-members',  'ph_members',   'ph_members_s'],
      ['tab-gallery',  'ph_gallery',   'ph_gallery_s'],
      ['tab-video',    'ph_video',     'ph_video_s'],
      ['tab-export',   'ph_export',    'ph_export_s']
    ];
    headerMap.forEach(([tabId, h1Key, pKey]) => {
      const tab = $(tabId);
      if (!tab) return;
      const h1 = tab.querySelector('.adm-page-header h1');
      const p  = tab.querySelector('.adm-page-header p');
      if (h1) h1.textContent = t[h1Key];
      if (p)  p.textContent  = t[pKey];
    });
  };

  if (animate) {
    document.body.style.opacity = '0.6';
    document.body.style.transition = 'opacity .18s';
    setTimeout(() => {
      run();
      document.body.style.opacity = '1';
      setTimeout(() => { document.body.style.transition = ''; }, 200);
    }, 180);
  } else {
    run();
  }
}

/* Wire both toggle buttons */
$('adminLangToggleLogin')?.addEventListener('click', () => applyAdminLang(adminLang === 'en' ? 'ta' : 'en', true));
$('adminLangToggle')?.addEventListener('click',      () => applyAdminLang(adminLang === 'en' ? 'ta' : 'en', true));

/* Apply on load */
applyAdminLang(adminLang, false);

/* ============================================================
   CLOCK
============================================================ */
function updateClock() {
  const el = $('topbarTime');
  if (!el) return;
  el.textContent = new Date().toLocaleString('en-IN', {
    weekday:'short', day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'
  });
}
setInterval(updateClock, 1000);
updateClock();

/* ============================================================
   AUTH — Login / Logout
============================================================ */
function showDashboard() {
  $('loginScreen').style.display = 'none';
  $('dashboard').style.display   = 'flex';
  refreshAll();
}
function showLogin() {
  $('loginScreen').style.display = 'flex';
  $('dashboard').style.display   = 'none';
}

$('loginBtn')?.addEventListener('click', doLogin);
$('adminPass')?.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

async function doLogin() {
  const u   = ($('adminUser')?.value || '').trim();
  const p   = ($('adminPass')?.value || '').trim();
  const err = $('loginErr');
  if (!u || !p) { if (err) err.textContent = ADM_TRANS[adminLang].btn_login === 'உள்நுழைய' ? 'பயனர் பெயர் மற்றும் கடவுச்சொல் உள்ளிடவும்.' : 'Enter username and password.'; return; }

  const btn = $('loginBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>…'; }

  try {
    const data = await publicApi('POST', '/api/admin/login', { username: u, password: p });
    setToken(data.token);
    if (err) err.textContent = '';
    showDashboard();
  } catch (e) {
    if (err) err.textContent = e.message || 'Invalid credentials.';
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${ADM_TRANS[adminLang].btn_login}`;
    }
  }
}

$('logoutBtn')?.addEventListener('click', () => {
  clearToken();
  showLogin();
});

/* Toggle password visibility */
$('pwEye')?.addEventListener('click', () => {
  const inp = $('adminPass');
  const ico = $('pwEyeIcon');
  if (!inp) return;
  inp.type   = inp.type === 'password' ? 'text' : 'password';
  ico.className = inp.type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
});

/* ============================================================
   SIDEBAR / TAB NAVIGATION
============================================================ */
$('sidebarToggle')?.addEventListener('click', () => {
  $('sidebar')?.classList.toggle('open');
});

$$('.adm-nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tab = link.getAttribute('data-tab');
    $$('.adm-nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    $$('.adm-tab-body').forEach(t => t.classList.add('adm-hidden'));
    $('tab-' + tab)?.classList.remove('adm-hidden');
    const titles = {
      overview: ADM_TRANS[adminLang].topbar_overview,
      members:  ADM_TRANS[adminLang].topbar_members,
      gallery:  ADM_TRANS[adminLang].topbar_gallery,
      video:    ADM_TRANS[adminLang].topbar_video,
      export:   ADM_TRANS[adminLang].topbar_export
    };
    const tt = $('topbarTitle');
    if (tt) tt.textContent = titles[tab] || tab;
    if (window.innerWidth <= 768) $('sidebar')?.classList.remove('open');
    if (tab === 'members') loadAndRenderMembers();
    if (tab === 'gallery') { loadAndRenderGallery(); loadGalleryToggleState(); }
    if (tab === 'video')   loadAndRenderVideos();
    if (tab === 'export')  refreshExportMeta();
  });
});

/* ============================================================
   OVERVIEW TAB
============================================================ */
async function refreshOverview() {
  try {
    const data = await api('GET', '/api/members?limit=10');
    allMembers = data.members || [];

    /* Stats */
    const today = new Date().toDateString();
    $('statTotal').textContent    = data.total || 0;
    $('statToday').textContent    = allMembers.filter(m => new Date(m.registeredAt).toDateString() === today).length;
    $('statStudents').textContent = allMembers.filter(m => m.occupation === 'Student').length;

    /* Gallery count */
    const gData = await fetch(API + '/api/gallery').then(r => r.json()).catch(() => ({ photos:[] }));
    $('statPhotos').textContent = (gData.photos || []).length;

    /* Recent table */
    const body = $('recentBody');
    if (!body) return;
    if (allMembers.length === 0) {
      body.innerHTML = `<tr><td colspan="7" class="adm-empty">No members yet</td></tr>`;
      return;
    }
    body.innerHTML = allMembers.map(m => `
      <tr>
        <td><span class="adm-member-id">${escHtml(m.memberId)}</span></td>
        <td>${escHtml(m.name)}</td>
        <td>${escHtml(m.phone)}</td>
        <td>${escHtml(m.mandalamEn)}</td>
        <td>${escHtml(m.wardEn)}</td>
        <td>${escHtml(m.occupation)}</td>
        <td>${fmtDate(m.registeredAt)}</td>
      </tr>`).join('');
  } catch (err) {
    console.error('refreshOverview:', err);
  }
}

/* ============================================================
   MEMBERS TAB
============================================================ */
function renderMembersTable(members) {
  filteredMembers = members;
  const body = $('membersBody');
  const cnt  = $('memberCount');
  if (cnt) cnt.textContent = members.length;
  if (!body) return;
  if (members.length === 0) {
    body.innerHTML = `<tr><td colspan="12" class="adm-empty">No members match your search</td></tr>`;
    return;
  }
  body.innerHTML = members.map(m => `
    <tr>
      <td><span class="adm-member-id">${escHtml(m.memberId)}</span></td>
      <td>${escHtml(m.name)}</td>
      <td>${escHtml(m.age ?? '')}</td>
      <td>${escHtml(m.phone)}</td>
      <td>${escHtml(m.mandalamEn)}</td>
      <td>${escHtml(m.wardEn)}</td>
      <td>${escHtml(m.area)}</td>
      <td>${escHtml(m.pincode)}</td>
      <td>${escHtml(m.occupation)}</td>
      <td>${escHtml(m.qualification ?? '')}</td>
      <td>${fmtDate(m.registeredAt)}</td>
      <td style="white-space:nowrap">
        <button class="adm-action-btn adm-edit-btn"
                onclick="openEditModal('${escAttr(m.memberId)}')">
          <i class="fas fa-pen"></i> Edit
        </button>
        <button class="adm-action-btn adm-delete-btn"
                onclick="openDeleteModal('${escAttr(m.memberId)}','${escAttr(m.name)}')">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>`).join('');
}

async function loadAndRenderMembers() {
  const body = $('membersBody');
  if (body) body.innerHTML = `<tr><td colspan="12" class="adm-empty"><i class="fas fa-spinner fa-spin"></i> Loading…</td></tr>`;
  try {
    /* Build query from current filter values */
    const search   = ($('memberSearch')?.value  || '').trim();
    const mandalam = $('filterMandalam')?.value  || '';
    const occ      = $('filterOccupation')?.value || '';

    const params = new URLSearchParams({ limit: 1000 });
    if (search)   params.set('search',   search);
    if (mandalam) params.set('mandalam', mandalam);
    if (occ)      params.set('occupation', occ);

    const data = await api('GET', '/api/members?' + params.toString());
    allMembers = data.members || [];
    renderMembersTable(allMembers);
    refreshExportMeta();
  } catch (err) {
    console.error('loadAndRenderMembers:', err);
    if (body) body.innerHTML = `<tr><td colspan="12" class="adm-empty" style="color:#ef4444">Error loading members: ${escHtml(err.message)}</td></tr>`;
  }
}

/* Debounced filter */
let filterTimer;
function scheduleFilter() { clearTimeout(filterTimer); filterTimer = setTimeout(loadAndRenderMembers, 350); }

$('memberSearch')?.addEventListener('input',    scheduleFilter);
$('filterMandalam')?.addEventListener('change', loadAndRenderMembers);
$('filterOccupation')?.addEventListener('change', loadAndRenderMembers);
$('clearFilters')?.addEventListener('click', () => {
  if ($('memberSearch'))     $('memberSearch').value     = '';
  if ($('filterMandalam'))   $('filterMandalam').value   = '';
  if ($('filterOccupation')) $('filterOccupation').value = '';
  loadAndRenderMembers();
});

/* ── Edit Modal ── */
let editingId = null;
let editingMongoId = null;

window.openEditModal = async (memberId) => {
  try {
    const data = await api('GET', '/api/members/' + encodeURIComponent(memberId));
    const m = data.member;
    editingId = m.memberId;
    editingMongoId = m._id;
    $('editId').value            = m.memberId     || '';
    $('editName').value          = m.name         || '';
    $('editPhone').value         = m.phone        || '';
    $('editAge').value           = m.age          ?? '';
    $('editMandalam').value      = m.mandalamEn   || '';
    $('editWard').value          = m.wardEn       || '';
    $('editStreet').value        = m.street       || '';
    $('editArea').value          = m.area         || '';
    $('editPincode').value       = m.pincode      || '';
    $('editMobile').value        = m.mobile       || '';
    $('editOccupation').value    = m.occupation   || '';
    $('editQualification').value = m.qualification || '';
    $('editErr').textContent     = '';
    $('editModal').style.display = 'flex';
  } catch (err) {
    toast('Could not load member: ' + err.message, 'error');
  }
};

function closeEditModal() { $('editModal').style.display = 'none'; editingId = null; }
$('closeEditModal')?.addEventListener('click', closeEditModal);
$('cancelEditBtn')?.addEventListener('click',  closeEditModal);
$('editModal')?.addEventListener('click', e => { if (e.target === $('editModal')) closeEditModal(); });

$('saveEditBtn')?.addEventListener('click', async () => {
  if (!editingId) return;
  const name  = ($('editName')?.value  || '').trim();
  const phone = ($('editPhone')?.value || '').trim();
  if (!name)  { $('editErr').textContent = 'Name is required.';  return; }
  if (!phone) { $('editErr').textContent = 'Phone is required.'; return; }

  const btn = $('saveEditBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving…'; }

  try {
    await api('PUT', '/api/members/' + encodeURIComponent(editingId), {
      name,  phone,
      age:           $('editAge')?.value           || '',
      mandalamEn:    $('editMandalam')?.value       || '',
      wardEn:        $('editWard')?.value           || '',
      street:        $('editStreet')?.value         || '',
      area:          $('editArea')?.value           || '',
      pincode:       $('editPincode')?.value        || '',
      mobile:        $('editMobile')?.value         || '',
      occupation:    $('editOccupation')?.value     || '',
      qualification: $('editQualification')?.value  || ''
    });
    closeEditModal();
    await loadAndRenderMembers();
    await refreshOverview();
    toast('Member updated successfully');
  } catch (err) {
    $('editErr').textContent = err.message || 'Save failed.';
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-save"></i> Save Changes'; }
  }
});

/* ── Delete Modal ── */
let deleteId = null;

window.openDeleteModal = (memberId, name) => {
  deleteId = memberId;
  const dn = $('deleteName');
  if (dn) dn.textContent = name || 'this member';
  $('deleteModal').style.display = 'flex';
};

function closeDeleteModal() { $('deleteModal').style.display = 'none'; deleteId = null; }
$('closeDeleteModal')?.addEventListener('click', closeDeleteModal);
$('cancelDeleteBtn')?.addEventListener('click',  closeDeleteModal);
$('deleteModal')?.addEventListener('click', e => { if (e.target === $('deleteModal')) closeDeleteModal(); });

$('confirmDeleteBtn')?.addEventListener('click', async () => {
  if (!deleteId) return;
  const btn = $('confirmDeleteBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deleting…'; }
  try {
    await api('DELETE', '/api/members/' + encodeURIComponent(deleteId));
    closeDeleteModal();
    await loadAndRenderMembers();
    await refreshOverview();
    toast('Member deleted');
  } catch (err) {
    toast('Delete failed: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-trash-alt"></i> Delete'; }
  }
});

/* ============================================================
   GALLERY TAB
============================================================ */
async function loadAndRenderGallery() {
  const grid = $('adminGalleryGrid');
  const cnt  = $('galleryCount');
  if (grid) grid.innerHTML = '<p style="padding:20px;color:#9ca3af;text-align:center"><i class="fas fa-spinner fa-spin"></i> Loading…</p>';
  try {
    const data   = await fetch(API + '/api/gallery').then(r => r.json());
    const photos = data.photos || [];
    if (cnt) cnt.textContent = photos.length;
    $('statPhotos') && ($('statPhotos').textContent = photos.length);
    if (!grid) return;
    if (photos.length === 0) {
      grid.innerHTML = `<div class="adm-gallery-empty"><i class="fas fa-images"></i><p>No photos yet. Upload some above.</p></div>`;
      return;
    }
    grid.innerHTML = photos.map(p => `
      <div class="adm-gallery-photo">
        <img src="${escAttr(p.src)}" alt="${escHtml(p.name || 'Gallery photo')}" loading="lazy" />
        <div class="adm-gallery-photo-overlay">
          ${p.description ? `<div class="adm-gallery-photo-desc">${escHtml(p.description)}</div>` : ''}
          <button class="adm-gallery-del-btn" onclick="deleteGalleryPhoto('${escAttr(p._id)}')">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      </div>`).join('');
  } catch (err) {
    if (grid) grid.innerHTML = `<p style="padding:20px;color:#ef4444;text-align:center">Error: ${escHtml(err.message)}</p>`;
  }
}

window.deleteGalleryPhoto = async (photoId) => {
  if (!confirm('Remove this photo from the gallery?')) return;
  try {
    await api('DELETE', '/api/gallery/' + encodeURIComponent(photoId));
    await loadAndRenderGallery();
    toast('Photo removed');
  } catch (err) {
    toast('Could not remove photo: ' + err.message, 'error');
  }
};

/* ── Gallery visibility toggle ── */
let galleryEnabled = true;   /* local cache of current state */

async function loadGalleryToggleState() {
  try {
    const res  = await fetch(API + '/api/settings');
    const data = await res.json();
    galleryEnabled = !!data.galleryEnabled;
    renderGalleryToggle();
  } catch (err) {
    /* silently ignore — leave default state */
  }
}

function renderGalleryToggle() {
  const btn      = $('galleryToggleBtn');
  const btnIcon  = $('galleryToggleBtnIcon');
  const btnText  = $('galleryToggleBtnText');
  const card     = $('galleryToggleCard');
  const icon     = $('galleryToggleIcon');
  const word     = $('galleryStatusWord');

  if (!btn) return;

  if (galleryEnabled) {
    btn.className      = 'adm-toggle-btn adm-toggle-btn--on';
    btnIcon.className  = 'fas fa-eye-slash';
    btnText.textContent= 'Disable Gallery';
    if (icon) icon.className = 'fas fa-eye';
    if (word) { word.textContent = 'visible'; word.style.color = '#22c55e'; }
    if (card) card.classList.remove('adm-toggle-card--off');
  } else {
    btn.className      = 'adm-toggle-btn adm-toggle-btn--off';
    btnIcon.className  = 'fas fa-eye';
    btnText.textContent= 'Enable Gallery';
    if (icon) icon.className = 'fas fa-eye-slash';
    if (word) { word.textContent = 'hidden'; word.style.color = '#ef4444'; }
    if (card) card.classList.add('adm-toggle-card--off');
  }
}

window.toggleGalleryVisibility = async () => {
  const btn = $('galleryToggleBtn');
  if (btn) { btn.disabled = true; }
  try {
    const data = await api('PUT', '/api/settings/gallery/toggle');
    galleryEnabled = !!data.galleryEnabled;
    renderGalleryToggle();
    toast(galleryEnabled ? 'Gallery is now visible on the website' : 'Gallery is now hidden from the website');
  } catch (err) {
    toast('Failed to update gallery visibility: ' + err.message, 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
};

/* Upload zone */
const uploadZone = $('uploadZone');
const fileInput  = $('fileInput');

$('uploadPickBtn')?.addEventListener('click', () => fileInput?.click());
fileInput?.addEventListener('change', () => { handleFiles(Array.from(fileInput.files)); });

uploadZone?.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag-over'); });
uploadZone?.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
uploadZone?.addEventListener('drop', e => {
  e.preventDefault(); uploadZone.classList.remove('drag-over');
  handleFiles(Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')));
});

function handleFiles(files) {
  const MAX = 5 * 1024 * 1024;
  files.forEach(file => {
    if (file.size > MAX) { toast(`${file.name} is too large (max 5 MB)`, 'error'); return; }
    const reader = new FileReader();
    reader.onload = e => {
      pendingImages.push({ src: e.target.result, name: file.name, description: '' });
      renderUploadPreview();
    };
    reader.readAsDataURL(file);
  });
}

function renderUploadPreview() {
  const preview = $('uploadPreview');
  const actions = $('uploadActions');
  if (!preview) return;
  if (pendingImages.length === 0) {
    preview.innerHTML = '';
    if (actions) actions.style.display = 'none';
    return;
  }
  preview.innerHTML = pendingImages.map((img, i) => `
    <div class="adm-preview-item">
      <img src="${escAttr(img.src)}" alt="${escHtml(img.name)}" />
      <input type="text" class="adm-preview-caption"
             placeholder="Description (optional)"
             value="${escAttr(img.description || '')}"
             oninput="pendingImages[${i}].description=this.value" />
      <button class="adm-preview-remove" onclick="removePending(${i})">
        <i class="fas fa-times"></i>
      </button>
    </div>`).join('');
  if (actions) actions.style.display = 'flex';
}

window.removePending = (i) => { pendingImages.splice(i, 1); renderUploadPreview(); };

$('confirmUploadBtn')?.addEventListener('click', async () => {
  if (pendingImages.length === 0) return;
  const btn = $('confirmUploadBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading…'; }
  let uploaded = 0;
  for (const img of pendingImages) {
    try {
      await api('POST', '/api/gallery', { src: img.src, name: img.name, description: img.description || '' });
      uploaded++;
    } catch (err) {
      toast(`Failed to upload ${img.name}: ${err.message}`, 'error');
    }
  }
  pendingImages = [];
  renderUploadPreview();
  if (fileInput) fileInput.value = '';
  if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-check"></i> Add to Gallery'; }
  await loadAndRenderGallery();
  if (uploaded > 0) toast(`${uploaded} photo${uploaded > 1 ? 's' : ''} added to gallery`);
});

$('clearUploadBtn')?.addEventListener('click', () => {
  pendingImages = [];
  renderUploadPreview();
  if (fileInput) fileInput.value = '';
});

/* ============================================================
   VIDEO TAB
============================================================ */
let pendingVideo = null;   /* { src, name } staging area */

async function loadAndRenderVideos() {
  const grid = $('adminVideoGrid');
  const cnt  = $('videoCount');
  if (grid) grid.innerHTML = '<p style="padding:20px;color:#9ca3af;text-align:center"><i class="fas fa-spinner fa-spin"></i> Loading…</p>';
  try {
    const data   = await api('GET', '/api/video/all');
    const videos = data.videos || [];
    if (cnt) cnt.textContent = videos.length;
    if (!grid) return;
    if (videos.length === 0) {
      grid.innerHTML = `<div class="adm-gallery-empty"><i class="fas fa-film"></i><p>No videos yet. Upload one above.</p></div>`;
      return;
    }
    grid.innerHTML = videos.map(v => `
      <div class="adm-gallery-photo" style="position:relative;">
        <video src="${escAttr(v.src)}" muted preload="metadata"
               style="width:100%;height:160px;object-fit:cover;border-radius:8px;background:#000;display:block;"></video>
        ${v.active
          ? `<div style="position:absolute;top:8px;left:8px;background:#22c55e;color:#fff;font-size:.72rem;font-weight:700;padding:3px 9px;border-radius:20px;"><i class="fas fa-circle" style="font-size:.55rem;margin-right:4px;"></i>ACTIVE</div>`
          : `<div style="position:absolute;top:8px;left:8px;background:rgba(0,0,0,.5);color:#fff;font-size:.72rem;font-weight:600;padding:3px 9px;border-radius:20px;">Inactive</div>`
        }
        <div class="adm-gallery-photo-overlay" style="gap:8px;">
          ${!v.active
            ? `<button class="adm-btn-primary" style="font-size:.78rem;padding:5px 12px;"
                 onclick="setActiveVideo('${escAttr(v._id)}')">
                 <i class="fas fa-play"></i> Set Active
               </button>`
            : ''
          }
          <button class="adm-gallery-del-btn" onclick="deleteVideo('${escAttr(v._id)}')">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </div>
        <div style="padding:6px 4px 2px;font-size:.8rem;color:#d1d5db;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
          ${escHtml(v.name || 'Background Video')}
        </div>
      </div>`).join('');
  } catch (err) {
    if (grid) grid.innerHTML = `<p style="padding:20px;color:#ef4444;text-align:center">Error: ${escHtml(err.message)}</p>`;
  }
}

window.setActiveVideo = async (videoId) => {
  try {
    await api('PUT', '/api/video/' + encodeURIComponent(videoId));
    await loadAndRenderVideos();
    toast('Video set as active background');
  } catch (err) {
    toast('Could not set active: ' + err.message, 'error');
  }
};

window.deleteVideo = async (videoId) => {
  if (!confirm('Remove this video?')) return;
  try {
    await api('DELETE', '/api/video/' + encodeURIComponent(videoId));
    await loadAndRenderVideos();
    toast('Video removed');
  } catch (err) {
    toast('Could not remove video: ' + err.message, 'error');
  }
};

/* Video file picker */
const videoPickBtn   = $('videoPickBtn');
const videoFileInput = $('videoFileInput');
const videoUploadZone= $('videoUploadZone');

videoPickBtn?.addEventListener('click', () => videoFileInput?.click());

videoFileInput?.addEventListener('change', () => {
  const file = videoFileInput.files[0];
  if (file) handleVideoFile(file);
});

videoUploadZone?.addEventListener('dragover', e => { e.preventDefault(); videoUploadZone.classList.add('drag-over'); });
videoUploadZone?.addEventListener('dragleave', () => videoUploadZone.classList.remove('drag-over'));
videoUploadZone?.addEventListener('drop', e => {
  e.preventDefault(); videoUploadZone.classList.remove('drag-over');
  const file = Array.from(e.dataTransfer.files).find(f => f.type.startsWith('video/'));
  if (file) handleVideoFile(file);
  else toast('Please drop a video file (MP4 or WEBM)', 'error');
});

function handleVideoFile(file) {
  const MAX = 50 * 1024 * 1024;
  if (file.size > MAX) { toast('Video too large (max 50 MB)', 'error'); return; }

  const reader = new FileReader();
  reader.onload = e => {
    pendingVideo = { src: e.target.result, name: file.name };
    /* Show preview */
    const previewWrap = $('videoUploadPreview');
    const previewEl   = $('videoPreviewEl');
    const fileName    = $('videoFileName');
    const actions     = $('videoUploadActions');
    if (previewEl)  { previewEl.src = pendingVideo.src; previewEl.load(); }
    if (fileName)   fileName.textContent = file.name;
    if (previewWrap) previewWrap.style.display = 'block';
    if (actions)     actions.style.display = 'flex';
  };
  reader.readAsDataURL(file);
}

$('confirmVideoUploadBtn')?.addEventListener('click', async () => {
  if (!pendingVideo) return;
  const btn = $('confirmVideoUploadBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading…'; }
  try {
    await api('POST', '/api/video', { src: pendingVideo.src, name: pendingVideo.name });
    pendingVideo = null;
    /* Reset UI */
    const previewWrap = $('videoUploadPreview');
    const previewEl   = $('videoPreviewEl');
    const actions     = $('videoUploadActions');
    if (previewEl)   previewEl.src = '';
    if (previewWrap) previewWrap.style.display = 'none';
    if (actions)     actions.style.display = 'none';
    if (videoFileInput) videoFileInput.value = '';
    await loadAndRenderVideos();
    toast('Video uploaded and set as background');
  } catch (err) {
    toast('Upload failed: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-check"></i> Set as Background Video'; }
  }
});

$('clearVideoBtn')?.addEventListener('click', () => {
  pendingVideo = null;
  const previewWrap = $('videoUploadPreview');
  const previewEl   = $('videoPreviewEl');
  const actions     = $('videoUploadActions');
  if (previewEl)   previewEl.src = '';
  if (previewWrap) previewWrap.style.display = 'none';
  if (actions)     actions.style.display = 'none';
  if (videoFileInput) videoFileInput.value = '';
});

/* ============================================================
   EXCEL EXPORT — SheetJS
============================================================ */
function membersToRows(members) {
  return members.map((m, i) => ({
    'No.'         : i + 1,
    'Member ID'   : m.memberId      || '',
    'Name'        : m.name          || '',
    'Age'         : m.age           ?? '',
    'Phone'       : m.phone         || '',
    'Mobile'      : m.mobile        || '',
    'Mandalam'    : m.mandalamEn    || '',
    'Ward'        : m.wardEn        || '',
    'Street'      : m.street        || '',
    'Area'        : m.area          || '',
    'Pincode'     : m.pincode       || '',
    'Occupation'  : m.occupation    || '',
    'Qualification': m.qualification || '',
    'Job Type'    : m.jobtype       || '',
    'Registered'  : fmtDate(m.registeredAt)
  }));
}

function writeExcel(rows, sheetName, fileName) {
  if (!window.XLSX) { toast('Excel library not loaded', 'error'); return; }
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    {wch:5},{wch:12},{wch:22},{wch:6},{wch:14},{wch:14},
    {wch:24},{wch:16},{wch:22},{wch:20},{wch:10},
    {wch:18},{wch:20},{wch:20},{wch:14}
  ];
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, fileName);
}

async function exportSummary() {
  if (!window.XLSX) { toast('Excel library not loaded', 'error'); return; }
  const data = await api('GET', '/api/members?limit=5000').catch(() => ({ members:[] }));
  const members = data.members || [];
  const wb = XLSX.utils.book_new();
  const tally = (arr, key) => arr.reduce((acc, m) => { const k = m[key] || 'Unknown'; acc[k] = (acc[k]||0)+1; return acc; }, {});
  const toRows = (obj, label) => Object.entries(obj).sort((a,b)=>b[1]-a[1]).map(([k,v])=>({[label]:k,'Members':v}));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(toRows(tally(members,'mandalamEn'),'Mandalam')), 'By Mandalam');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(toRows(tally(members,'occupation'),'Occupation')), 'By Occupation');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(
    toRows(members.reduce((acc,m)=>{ const k=(m.mandalamEn||'?')+' › '+(m.wardEn||'?'); acc[k]=(acc[k]||0)+1; return acc; },{}), 'Mandalam › Ward')
  ), 'By Ward');
  XLSX.writeFile(wb, 'NallorVattam_Summary.xlsx');
}

$('exportAllBtn')?.addEventListener('click', async () => {
  const btn = $('exportAllBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exporting…'; }
  try {
    const data = await api('GET', '/api/members?limit=5000');
    const members = data.members || [];
    if (members.length === 0) { toast('No members to export', 'error'); return; }
    writeExcel(membersToRows(members), 'All Members', 'NallorVattam_Members.xlsx');
    toast(`Exported ${members.length} members`);
  } catch (err) {
    toast('Export failed: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-file-excel"></i> Download All Members'; }
  }
});

$('exportMembersBtn')?.addEventListener('click', () => {
  if (filteredMembers.length === 0) { toast('No members to export', 'error'); return; }
  writeExcel(membersToRows(filteredMembers), 'Members', 'NallorVattam_Members.xlsx');
  toast(`Exported ${filteredMembers.length} members`);
});

$('exportFilteredBtn')?.addEventListener('click', () => {
  if (filteredMembers.length === 0) { toast('No filtered members', 'error'); return; }
  writeExcel(membersToRows(filteredMembers), 'Filtered', 'NallorVattam_Filtered.xlsx');
  toast(`Exported ${filteredMembers.length} members`);
});

$('exportSummaryBtn')?.addEventListener('click', async () => {
  const btn = $('exportSummaryBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exporting…'; }
  try { await exportSummary(); toast('Summary exported'); }
  catch (err) { toast('Export failed: ' + err.message, 'error'); }
  finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-file-excel"></i> Download Summary'; }
  }
});

async function refreshExportMeta() {
  try {
    const data = await api('GET', '/api/members?limit=1&skip=0');
    const m1 = $('exportMeta1'); const m2 = $('exportMeta2');
    if (m1) m1.textContent = `${data.total || 0} records`;
    if (m2) m2.textContent = `${filteredMembers.length || data.total || 0} records`;
  } catch {}
}

/* ============================================================
   REFRESH ALL
============================================================ */
async function refreshAll() {
  await refreshOverview();
  await loadAndRenderMembers();
  await loadAndRenderGallery();
  await loadAndRenderVideos();
  await loadGalleryToggleState();
  refreshExportMeta();
}

/* ============================================================
   INIT
============================================================ */
if (isLoggedIn()) {
  showDashboard();
} else {
  showLogin();
}
