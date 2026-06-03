export const generateWhatsAppLink = (phone: string, message: string) => {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

export const generateMailtoLink = (email: string, subject?: string) => {
  return `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
};
