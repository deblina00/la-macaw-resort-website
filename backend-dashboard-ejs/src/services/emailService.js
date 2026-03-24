const nodemailer = require("nodemailer");
const {
  // EMAIL_HOST,
  // EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
} = require("../config/env");

const formatDate = require("../utils/formatDate");

/* ---------------- TRANSPORTER ---------------- */

// const transporter = nodemailer.createTransport({
//   host: EMAIL_HOST,
//   port: EMAIL_PORT,
//   secure: false,
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

/* -------- VERIFY SMTP CONNECTION -------- */

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server is ready");
  }
});

const sendMail = async (subject, html) => {
  await transporter.sendMail({
    from: `"La Macaw Resort" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject,
    html,
  });
};

/* ---------------- GUEST TEMPLATE ---------------- */

const buildGuestTemplate = (data) => `
<div style="font-family:Arial;background:#f4f4f4;padding:30px">

<table width="600" align="center" style="background:#fff;border-radius:8px">

<tr>
<td style="background:#000;color:#fff;padding:20px;text-align:center">
<h2>${data.branch || "-"}, La Macaw Resort</h2>
<p>New Guest Enquiry</p>
</td>
</tr>

<tr>
<td style="padding:25px">

<h3>Guest Details</h3>

<p><b>Name:</b> ${data.name}</p>
<p><b>Email:</b> ${data.email}</p>
<p><b>Phone:</b> ${data.phone}</p>

<hr>

<h3>Stay Details</h3>

<p><b>Check-in:</b> ${formatDate(data.checkIn)}</p>
<p><b>Check-out:</b> ${formatDate(data.checkOut)}</p>
<p><b>Guests:</b> ${data.guests || "-"}</p>
<p><b>Rooms:</b> ${data.rooms || "-"}</p>
<p><b>Branch:</b> ${data.branch || "-"}</p>

</td>
</tr>

</table>
</div>
`;

/* ---------------- B2B TEMPLATE ---------------- */

const buildB2BTemplate = (data) => `
<div style="font-family:Arial;background:#f4f4f4;padding:30px">

<table width="600" align="center" style="background:#fff;border-radius:8px">

<tr>
<td style="background:#000;color:#fff;padding:20px;text-align:center">
<h2>La Macaw Resort</h2>
<p>New B2B Enquiry</p>
</td>
</tr>

<tr>
<td style="padding:25px">

<p><b>Agency Name:</b> ${data.agencyName}</p>
<p><b>Contact Person:</b> ${data.name}</p>
<p><b>Email:</b> ${data.email}</p>
<p><b>Phone:</b> ${data.phone}</p>

<hr>

<p><b>City:</b> ${data.city}</p>
<p><b>Pincode:</b> ${data.pincode}</p>
<p><b>Address:</b> ${data.address || "-"}</p>

<hr>

<p><b>Message:</b></p>
<p>${data.message || "-"}</p>

</td>
</tr>

</table>
</div>
`;

/* ---------------- EVENT TEMPLATE ---------------- */

const buildEventTemplate = (data) => `
<div style="font-family:Arial;background:#f4f4f4;padding:30px">

<table width="600" align="center" style="background:#fff;border-radius:8px">

<tr>
<td style="background:#000;color:#fff;padding:20px;text-align:center">
<h2>${data.branch || "-"}, La Macaw Resort</h2>
<p>New Event Enquiry</p>
</td>
</tr>

<tr>
<td style="padding:25px">

<p><b>Name:</b> ${data.name}</p>
<p><b>Email:</b> ${data.email}</p>
<p><b>Phone:</b> ${data.phone}</p>

<hr>

<h3>Stay Details</h3>

<p><b>Check-in:</b> ${formatDate(data.checkIn)}</p>
<p><b>Check-out:</b> ${formatDate(data.checkOut)}</p>
<p><b>Guests:</b> ${data.guests || "-"}</p>
<p><b>Rooms:</b> ${data.rooms || "-"}</p>
<p><b>Branch:</b> ${data.branch || "-"}</p>

<hr>

<p><b>Banquet:</b> ${data.banquet ? "Yes" : "No"}</p>
<p><b>Lawn:</b> ${data.lawn ? "Yes" : "No"}</p>

<hr>

<p><b>Message:</b></p>
<p>${data.message || "-"}</p>

</td>
</tr>

</table>
</div>
`;

/* ---------------- CAREER TEMPLATE ---------------- */

const buildCareerTemplate = (data) => `
<div style="font-family:Arial;background:#f4f4f4;padding:30px">

<table width="600" align="center" style="background:#fff;border-radius:8px">

<tr>
<td style="background:#000;color:#fff;padding:20px;text-align:center">
<h2>La Macaw Resort</h2>
<p>New Career Application</p>
</td>
</tr>

<tr>
<td style="padding:25px">

<p><b>Name:</b> ${data.name}</p>
<p><b>Email:</b> ${data.email}</p>
<p><b>Phone:</b> ${data.phone}</p>

<hr>

<p><b>Position:</b> ${data.position}</p>
<p><b>Location:</b> ${data.location}</p>

<hr>

<p><b>CV:</b> 
  ${
    data.cvUrl
      ? `<a href="${data.cvUrl}" target="_blank">View CV</a>`
      : "Not uploaded"
  }
</p>

<hr>

<p><b>Message:</b></p>
<p>${data.comments || "-"}</p>

</td>
</tr>

</table>
</div>
`;

/* ---------------- EXPORT EMAIL SENDERS ---------------- */

const sendGuestEnquiryEmail = async (data) => {
  await sendMail(
    `${data.branch || "-"}, New Guest Enquiry – La Macaw Resort`,
    buildGuestTemplate(data),
  );
};

const sendB2BEnquiryEmail = async (data) => {
  await sendMail("New B2B Enquiry – La Macaw Resort", buildB2BTemplate(data));
};

const sendEventEnquiryEmail = async (data) => {
  await sendMail(
    `${data.branch || "-"}, New Event Enquiry – La Macaw Resort`,
    buildEventTemplate(data),
  );
};

const sendCareerEmail = async (data) => {
  await transporter.sendMail({
    from: `"La Macaw Resort" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: `New Job Application – ${data.position}`,
    html: buildCareerTemplate(data),
    attachments: [],
  });
};

module.exports = {
  sendGuestEnquiryEmail,
  sendB2BEnquiryEmail,
  sendEventEnquiryEmail,
  sendCareerEmail,
};
