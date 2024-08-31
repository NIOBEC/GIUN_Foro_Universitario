document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const themeIcon = document.getElementById('themeIcon');
    const stars = document.querySelector('.stars');
    const clouds = document.querySelector('.clouds');
    const btn = document.querySelector('.btn');
    const loginContainer = document.querySelector('.login-container');
    const switchTheme = document.querySelector('.switch-theme');
    let isDarkMode = false;

    themeSwitch.addEventListener('click', () => {
        if (!isDarkMode) {
            document.body.style.background = '#0a1120';
            loginContainer.style.background = '#4e5452'; /* Lila más oscuro fondo inicio sesion */
            stars.style.opacity = 1;
            clouds.style.opacity = 0;

document.querySelectorAll('.link, h2').forEach(el => el.style.color = '#ddd');
document.querySelectorAll('input').forEach(el => el.style.color = '#ddd');
btn.style.background = '#4a1d8d'; /* Lila más oscuro botón en modo oscuro */
btn.style.color = '#fff'; /* Letras blancas */
themeIcon.src = "{{ asset('images/sun.png') }}"; // Icono del sol (modo oscuro)
switchTheme.classList.add('dark-mode');
isDarkMode = true;
} else {
document.body.style.background = '#fff9e5'; /* Amarillo claro fondo claro */
loginContainer.style.background = 'rgba(255, 255, 255, 0.9)';
stars.style.opacity = 0;
clouds.style.opacity = 1;
document.querySelectorAll('.link, h2').forEach(el => el.style.color = '#ffeb3b'); /* Amarillo claro */
document.querySelectorAll('input').forEach(el => el.style.color = '#333');
btn.style.background = '#fbc02d'; /* Amarillo intenso para el botón */
btn.style.color = '#333'; /* Texto oscuro */
themeIcon.src = "{{ asset('images/moon.png') }}"; // Icono de la luna (modo claro)
switchTheme.classList.remove('dark-mode');
isDarkMode = false;
}
});

// Inicializar el modo claro por defecto
clouds.style.opacity = 1;
});
