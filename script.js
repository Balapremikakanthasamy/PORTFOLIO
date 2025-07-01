// blinking animation for cards
document.querySelectorAll('.card').forEach(card => {
  ['click', 'touchstart'].forEach(evt => {
    card.addEventListener(evt, () => {
      card.classList.add('blink');
      setTimeout(() => card.classList.remove('blink'), 600);
    });
  });
});

// ---- Certificate PDF Viewer Logic ----
const certPDFs = [
  'assets/AWS certificate.pdf',
  'assets/Microsoft Azure AI Certificate.pdf',
  'assets/Microsoft AI Certificate.pdf'
];

let currentPDF = 0;

function showCert(index) {
  document.getElementById('certFrame').src = certPDFs[index];
}

function nextCert() {
  currentPDF = (currentPDF + 1) % certPDFs.length;
  showCert(currentPDF);
}

function prevCert() {
  currentPDF = (currentPDF - 1 + certPDFs.length) % certPDFs.length;
  showCert(currentPDF);
}

document.addEventListener('DOMContentLoaded', () => {
  showCert(currentPDF);
});
