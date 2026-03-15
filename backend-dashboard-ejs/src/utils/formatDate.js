const formatDate = (date) => {
  if (!date) return "-";

  const d = new Date(date);

  if (isNaN(d)) return "-";

  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

module.exports = formatDate;