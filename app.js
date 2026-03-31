function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + tabName).classList.add('active');
  event.target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleAction(item) {
  const check = item.querySelector('.action-check');
  check.classList.toggle('checked');
  item.classList.toggle('done');
}
