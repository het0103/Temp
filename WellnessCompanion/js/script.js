// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- AI Chat Modal Logic ---
    const modal = document.getElementById("aiChatModal");
    const btn = document.getElementById("openChatBtn");
    const span = document.getElementsByClassName("close-btn")[0];

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "flex";
        }
    }
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // --- Admin Dashboard: Wellness Trend Chart ---
    const wellnessTrendCtx = document.getElementById('wellnessTrendChart');
    if (wellnessTrendCtx) {
        new Chart(wellnessTrendCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'This Week'],
                datasets: [{
                    label: 'Average Student Mood Score (out of 5)',
                    data: [3.2, 3.4, 3.1, 3.5, 3.8],
                    borderColor: 'rgba(58, 123, 213, 1)',
                    backgroundColor: 'rgba(58, 123, 213, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    }

    // --- Admin Dashboard: Stress Pie Chart ---
    const stressPieCtx = document.getElementById('stressPieChart');
    if (stressPieCtx) {
        new Chart(stressPieCtx, {
            type: 'pie',
            data: {
                labels: ['Academics', 'Social Life', 'Family', 'Personal Health', 'Future Anxiety'],
                datasets: [{
                    label: 'Top Stress Factors',
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        '#3a7bd5',
                        '#3aafa9',
                        '#f7b733',
                        '#e84c3d',
                        '#9b59b6'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    }
    
    // --- Detailed Feedback: Emotion Trend Chart ---
    const emotionTrendCtx = document.getElementById('emotionTrendChart');
    if (emotionTrendCtx) {
        new Chart(emotionTrendCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Your Emotional Score This Week',
                    data: [4, 5, 3, 4, 5, 2, 3], // Dummy data
                    borderColor: '#3aafa9',
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

});