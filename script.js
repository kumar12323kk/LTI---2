document.addEventListener('DOMContentLoaded', function () {
  // Enroll Now button scrolls to the enquiry section
  const enrollBtn = document.getElementById('enrollBtn');
  const enquirySection = document.getElementById('enquiry');

  if (enrollBtn && enquirySection) {
    enrollBtn.addEventListener('click', () => {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // WhatsApp form submission handler
  const enquiryForm = document.getElementById('enquiryForm');

  enquiryForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = enquiryForm.name.value.trim();
    const phone = enquiryForm.phone.value.trim();
    const message = enquiryForm.message.value.trim();

    const courses = [];
    enquiryForm.querySelectorAll('input[name="course"]:checked').forEach((checkbox) => {
      courses.push(checkbox.value);
    });

    if (!name || !phone || courses.length === 0) {
      alert('Please fill all required fields and select at least one course.');
      return;
    }

    let whatsappMessage = `Hello, I am *${name}*.\nPhone: ${phone}\nInterested in courses: ${courses.join(', ')}`;
    if (message) whatsappMessage += `\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/918973120153?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  });
});
