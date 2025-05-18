
document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const whatsapp = form.whatsapp.value.trim();

  const contactCount = [email, phone, whatsapp].filter(Boolean).length;

  if (contactCount < 2) {
    alert("Please provide at least two contact details.");
    return;
  }

  const pack = form.pack.value;
  const prices = { 1: 5000, 5: 23000, 10: 45000 };

  alert(`Proceeding to payment for ${pack} ticket(s). Total: ₦${prices[pack]}`);
});
