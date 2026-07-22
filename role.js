'use strict';
const ROLE_KEY = 'edutrack_role';
const USER_KEY = 'edutrack_user';

const roleConfig = {
  administrator: {
    label:    'Administrator',
    class:    'admin-theme',
    color:    '#DC2626',
    initials: 'AT',
    dashboardUrl: 'admin-dashboard.html',
    navItems: [
      { icon:'&#8962;', label:'Home',        url:'index.html'           },
      { icon:'&#9636;', label:'Dashboard',   url:'admin-dashboard.html' },
      { icon:'&#9632;', label:'Students',    url:'students.html', badge:'10' },
      { icon:'&#9632;', label:'Teachers',    url:'admin-dashboard.html' },
      { icon:'&#9632;', label:'Reports',     url:'report.html'          },
      { icon:'&#9632;', label:'Settings',    url:'profile-manage.html'  },
    ]
  },
  teacher: {
    label:    'Teacher',
    class:    'teacher-theme',
    color:    '#D97706',
    initials: 'TH',
    dashboardUrl: 'teacher-dashboard.html',
    navItems: [
      { icon:'&#8962;', label:'Home',         url:'index.html'            },
      { icon:'&#9636;', label:'Dashboard',    url:'teacher-dashboard.html'},
      { icon:'&#9632;', label:'My Students',  url:'students.html'         },
      { icon:'&#9632;', label:'Assignments',  url:'teacher-dashboard.html'},
      { icon:'&#9632;', label:'Reports',      url:'report.html'           },
    ]
  },
  student: {
    label:    'Student',
    class:    'student-theme',
    color:    '#2563EB',
    initials: 'ST',
    dashboardUrl: 'student-dashboard.html',
    navItems: [
      { icon:'&#8962;', label:'Home',        url:'index.html'            },
      { icon:'&#9636;', label:'Dashboard',   url:'student-dashboard.html'},
      { icon:'&#9632;', label:'My Profile',  url:'profile.html'          },
      { icon:'&#9632;', label:'My Report',   url:'report.html'           },
      { icon:'&#9632;', label:'Contact',     url:'contact.html'          },
    ]
  }
};

function getRole() {
  return localStorage.getItem(ROLE_KEY) || 'student';
}

function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY) || '{"name":"Usman Tariq","email":"usman@edutrack.edu.pk"}');
}

function applyRoleNav() {
  const role   = getRole();
  const config = roleConfig[role] || roleConfig.student;
  const user   = getUser();

  // Apply sidebar theme class
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.remove('admin-theme','teacher-theme','student-theme');
    sidebar.classList.add(config.class);
  }

  // Update user card
  const nameEl = document.querySelector('.user-info-name');
  const roleEl = document.querySelector('.user-info-role');
  const avatEl = document.querySelector('.sidebar .user-avatar');
  if (nameEl) nameEl.textContent = user.name || 'User';
  if (roleEl) roleEl.textContent = config.label;
  if (avatEl) {
    avatEl.textContent   = (user.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
    avatEl.style.background = config.color;
  }

  // Render role-specific nav
  const nav = document.querySelector('.sidebar-nav');
  if (nav) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    nav.innerHTML = `<div class="nav-label">Menu</div>` +
      config.navItems.map(item => `
        <a class="nav-link ${currentPage === item.url ? 'active' : ''}"
           href="${item.url}"
           aria-label="${item.label}">
          <span class="nav-link-icon">${item.icon}</span>
          ${item.label}
          ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
          <span class="nav-tooltip">${item.label}</span>
        </a>
      `).join('') +
      `<div class="nav-label">Info</div>
       <a class="nav-link" href="about.html"><span class="nav-link-icon">&#9632;</span> About<span class="nav-tooltip">About</span></a>
       <a class="nav-link ${currentPage==='profile-manage.html'?'active':''}" href="profile-manage.html"><span class="nav-link-icon">&#9632;</span> Profile<span class="nav-tooltip">Profile</span></a>`;
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', applyRoleNav);