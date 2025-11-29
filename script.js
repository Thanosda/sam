const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");

generateBtn.addEventListener("click", () => {
  const text = qrText.value.trim();
  if (!text) {
    alert("Please enter text or URL");
    return;
  }

  // Encode text for URL
  const encoded = encodeURIComponent(text);

  // Create QR code URL using QuickChart
  const url = `https://quickchart.io/qr?text=${encoded}&size=200`;

  // Set image src and download link
  qrImage.src = url;
  downloadBtn.href = url;

  // Show download button
  downloadBtn.classList.remove('hidden');
});

// Allow Enter key to generate QR code
qrText.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateBtn.click();
  }
});
