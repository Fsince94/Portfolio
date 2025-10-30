document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.sidebar ul li');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            navItems.forEach(i => i.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');

            // Hide all views
            views.forEach(view => {
                view.style.display = 'none';
            });

            // Show the corresponding view
            const viewId = item.getAttribute('data-view');
            const view = document.getElementById(viewId);
            if (view) {
                view.style.display = 'block';
            }
        });
    });
});