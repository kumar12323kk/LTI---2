// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function enableDarkMode() {
  body.style.backgroundColor = '#222';
  body.style.color = '#eee';
  darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
  body.style.backgroundColor = '';
  body.style.color = '';
  darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem('darkMode', 'disabled');
}

darkModeToggle.addEventListener('click', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// On page load, check dark mode state
if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Enquiry form WhatsApp submission
const enquiryForm = document.getElementById('enquiryForm');

enquiryForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = enquiryForm.name.value.trim();
  const phone = enquiryForm.phone.value.trim();
  const message = enquiryForm.message.value.trim();

  // Get all checked courses
  const courses = [];
  enquiryForm.querySelectorAll('input[name="course"]:checked').forEach((checkbox) => {
    courses.push(checkbox.value);
  });

  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return;
  }

  if (courses.length === 0) {
    alert('Please select at least one course.');
    return;
  }

  // Construct WhatsApp message
  let whatsappMessage = `Hello, I am *${name}*.\n`;
  whatsappMessage += `Phone: ${phone}\n`;
  whatsappMessage += `Interested in courses: ${courses.join(', ')}\n`;
  if (message) {
    whatsappMessage += `Message: ${message}\n`;
  }

  // Encode message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // WhatsApp number
  const whatsappNumber = '918973120153';

  // Open WhatsApp link
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
});