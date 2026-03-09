/**
 * LabAI Search Utility
 * Handles client-side filtering for tables and card lists.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Table Search (e.g., Patients, Doctors, Admin Dashboard)
  const tableSearchInput = document.getElementById('tableSearchInput');
  const dataTable = document.getElementById('dataTable');

  // 3. Combined Table Search & Severity Filter
  const severityFilter = document.getElementById('severityFilter');

  function filterTable() {
    if (!dataTable) return;
    
    const query = tableSearchInput ? tableSearchInput.value.toLowerCase() : '';
    const severity = severityFilter ? severityFilter.value.toLowerCase() : '';
    const rows = dataTable.querySelectorAll('tbody tr');

    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      // Assume status badge is in the 4th column (index 3) for the dashboard, 
      // but checking the whole row text is safer for a generic utility.
      const matchesQuery = text.includes(query);
      const matchesSeverity = severity === '' || text.includes(severity);
      
      row.style.display = (matchesQuery && matchesSeverity) ? '' : 'none';
    });
  }

  if (tableSearchInput) {
    tableSearchInput.addEventListener('input', filterTable);
  }

  if (severityFilter) {
    severityFilter.addEventListener('change', filterTable);
  }
});
