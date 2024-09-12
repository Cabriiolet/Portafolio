document.addEventListener('DOMContentLoaded', () => {
    const skillsHeader = document.getElementById('skillsHeader');
    const skillsContent = document.getElementById('skillsContent');

    skillsHeader.addEventListener('click', () => {
        if (skillsContent.classList.contains('hidden')) {
            skillsContent.classList.remove('hidden');
        } else {
            skillsContent.classList.add('hidden');
        }
    });
});

