function updateBars(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing bars

    const containerWidth = container.offsetWidth;
    const barWidth = 5; // Width of each bar as per your CSS
    const margin = 5; // Margin on each side

    // Calculate the number of bars that fit in the container width
    const barCount = Math.floor(containerWidth / (barWidth + 2 * margin));

    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'header';
        container.appendChild(bar);
    }
}

// Run on load and resize for both header and footer
window.addEventListener('load', () => {
    updateBars('header_grid');
    updateBars('footer_grid');
});

window.addEventListener('resize', () => {
    updateBars('header_grid');
    updateBars('footer_grid');
});
