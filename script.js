document.getElementById('ergoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const sittingHours = parseInt(document.getElementById('sittingHours').value);
  const breakFreq = document.getElementById('breakFrequency').value;
  const screenLevel = document.getElementById('screenLevel').value;

  let score = 100;

  // Deductions based on risk factors
  if (sittingHours > 6) score -= 20;
  if (sittingHours > 9) score -= 15;

  if (breakFreq === 'moderate') score -= 15;
  if (breakFreq === 'poor') score -= 30;

  if (screenLevel === 'no') score -= 20;

  // Render score & advice
  const scoreDisplay = document.getElementById('scoreDisplay');
  const recText = document.getElementById('recommendationText');
  const form = document.getElementById('ergoForm');
  const resultCard = document.getElementById('resultCard');

  scoreDisplay.textContent = `${score} / 100`;

  if (score >= 80) {
    recText.innerHTML = "<strong>Great habits!</strong> Your workstation arrangement and break frequency lower your risk of occupational neck and back strain.";
  } else if (score >= 50) {
    recText.innerHTML = "<strong>Moderate Ergonomic Risk:</strong> Consider raising your display screen to eye level and setting a timer for quick 2-minute posture stretches every hour.";
  } else {
    recText.innerHTML = "<strong>High Musculoskeletal Risk:</strong> Prolonged sitting combined with low movement puts heavy stress on your spine. Implement frequent micro-breaks, adjust screen height, and incorporate targeted spinal mobility exercises.";
  }

  form.classList.add('hidden');
  resultCard.classList.remove('hidden');
});

document.getElementById('resetBtn').addEventListener('click', function() {
  document.getElementById('resultCard').classList.add('hidden');
  document.getElementById('ergoForm').classList.remove('hidden');
});