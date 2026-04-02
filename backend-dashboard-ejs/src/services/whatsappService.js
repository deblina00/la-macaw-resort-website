const formatDate = require("../utils/formatDate");

const { WHATSAPP_NUMBER } = require("../config/env");

const buildWhatsAppMessage = (data) => {
  if (data.enquiryType === "event") {
    return `*${data.branch || "-"}, La Macaw Resort – Event Enquiry*

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Check-in: ${formatDate(data.checkIn)}
Check-out: ${formatDate(data.checkOut)}

Guests: ${data.guests || "-"}
Rooms: ${data.rooms || "-"}

Banquet: ${data.banquet ? "Yes" : "No"}
Lawn: ${data.lawn ? "Yes" : "No"}

Message:
${data.message || "-"}`;
  }

  return `*${data.branch || "-"}, La Macaw Resort – Guest Enquiry*

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Check-in: ${formatDate(data.checkIn)}
Check-out: ${formatDate(data.checkOut)}

Guests: ${data.guests || "-"}
Rooms: ${data.rooms || "-"}`;
};

const generateWhatsAppLink = (data) => {
  const message = buildWhatsAppMessage(data);

  const encoded = encodeURIComponent(message);

  // return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

  const number = WHATSAPP_NUMBER.replace("+", "");

  return `https://wa.me/${number}?text=${encoded}`;
};

module.exports = {
  generateWhatsAppLink,
};
