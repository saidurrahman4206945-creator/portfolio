// Tab Switching Functionality
function switchTab(tabName) {
  // Hide all view sections
  const sections = document.querySelectorAll('.view-section');
  sections.forEach(sec => sec.classList.add('hidden'));

  // Show selected view section
  const targetSection = document.getElementById(`view-${tabName}`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }

  // Update Sidebar Nav style
  const sidebarNavs = document.querySelectorAll('.nav-item');
  sidebarNavs.forEach(btn => {
    btn.classList.remove('tab-active');
  });
  const activeSideBtn = document.getElementById(`nav-side-${tabName}`);
  if (activeSideBtn) {
    activeSideBtn.classList.add('tab-active');
  }

  // Update Top Nav style
  const topNavs = document.querySelectorAll('.top-nav');
  topNavs.forEach(btn => {
    btn.classList.remove('nav-active');
  });
  const activeTopBtn = document.getElementById(`top-nav-${tabName}`);
  if (activeTopBtn) {
    activeTopBtn.classList.add('nav-active');
  }

  // Scroll top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Set initial active tab
document.addEventListener('DOMContentLoaded', () => {
  switchTab('home');
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('fixed');
    sidebar.classList.toggle('inset-0');
    sidebar.classList.toggle('z-50');
    sidebar.classList.toggle('bg-slate-950/95');
    sidebar.classList.toggle('p-6');
  });
}

// Toast Notification helper
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = document.getElementById('toastIcon');

  toastMsg.textContent = message;
  if (isError) {
    toast.classList.remove('bg-blue-600');
    toast.classList.add('bg-rose-600');
    toastIcon.className = 'fa-solid fa-circle-exclamation text-lg';
  } else {
    toast.classList.remove('bg-rose-600');
    toast.classList.add('bg-blue-600');
    toastIcon.className = 'fa-solid fa-circle-check text-lg';
  }

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 4000);
}

// CV Download Trigger
function downloadCV() {
  showToast("Downloading Saidur Rahman's CV...");
  // Simulate file download trigger
  const link = document.createElement('a');
  link.href = '#';
  link.setAttribute('download', 'Saidur_Rahman_CV.pdf');
  document.body.appendChild(link);
  setTimeout(() => {
    showToast("CV download started!");
  }, 1000);
}

// Contact Form Handler with Google Sheet / Email Submission Integration
function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;
  const subject = document.getElementById('formSubject').value;
  const message = document.getElementById('formMessage').value;

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-xs"></i> SENDING...`;

  // Google Sheet Webhook or direct Mailto Integration simulation
  setTimeout(() => {
    showToast(`Thank you, ${name}! Your message has been sent to Saidur.`);
    document.getElementById('contactForm').reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = `SEND MESSAGE <i class="fa-solid fa-paper-plane text-xs"></i>`;
  }, 1200);
}