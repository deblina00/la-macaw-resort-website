// const axios = require("axios");

// const {
//   WHATSAPP_TOKEN,
//   WHATSAPP_PHONE_ID,
//   WHATSAPP_TO,
// } = require("../config/env");

// const formatDate = require("../utils/formatDate");

// const GRAPH_URL = `https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_ID}/messages`;

// /* ---------------- BUILD MESSAGE ---------------- */

// const buildWhatsAppMessage = (data) => {
//   if (data.enquiryType === "b2b") {
//     return `*La Macaw Resort – B2B Enquiry*

// Agency: ${data.agencyName}
// Name: ${data.name}

// Phone: ${data.phone}
// Email: ${data.email}

// City: ${data.city}
// Pincode: ${data.pincode}

// Message:
// ${data.message || "-"}`;
//   }

//   if (data.enquiryType === "event") {
//     return `*${data.branch || "-"}, La Macaw Resort – Event Enquiry*

// Name: ${data.name}
// Phone: ${data.phone}
// Email: ${data.email}

// Check-in: ${formatDate(data.checkIn)}
// Check-out: ${formatDate(data.checkOut)}

// Guests: ${data.guests || "-"}
// Rooms: ${data.rooms || "-"}

// Banquet: ${data.banquet ? "Yes" : "No"}
// Lawn: ${data.lawn ? "Yes" : "No"}

// Message:
// ${data.message || "-"}`;
//   }

//   return `*${data.branch || "-"}, La Macaw Resort – Guest Enquiry*

// Name: ${data.name}
// Phone: ${data.phone}
// Email: ${data.email}

// Check-in: ${formatDate(data.checkIn)}
// Check-out: ${formatDate(data.checkOut)}

// Guests: ${data.guests || "-"}
// Rooms: ${data.rooms || "-"}`;
// };

// /* ---------------- ADMIN NOTIFICATION ---------------- */

// const sendWhatsAppNotification = async (data) => {
//   const message = buildWhatsAppMessage(data);

//   await axios.post(
//     GRAPH_URL,
//     {
//       messaging_product: "whatsapp",
//       to: WHATSAPP_TO,
//       type: "text",
//       text: { body: message },
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${WHATSAPP_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     },
//   );
// };

// /* ---------------- CUSTOMER AUTO REPLY ---------------- */

// const sendCustomerReply = async (data) => {
//   await axios.post(
//     GRAPH_URL,
//     {
//       messaging_product: "whatsapp",
//       to: data.phone,
//       type: "template",
//       template: {
//         name: "enquiry_confirmation",
//         language: { code: "en" },
//         components: [
//           {
//             type: "body",
//             parameters: [
//               { type: "text", text: data.name },
//               { type: "text", text: data.branch || "our resort" },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${WHATSAPP_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     },
//   );
// };

// module.exports = {
//   sendWhatsAppNotification,
//   sendCustomerReply,
// };

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

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

module.exports = {
  generateWhatsAppLink,
};
