<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de Sesión - Foro Campus</title>
    <!-- Incluir la hoja de estilos -->
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
</head>

<body>
    <div class="background">
        <div class="stars"></div>
        <div class="clouds"></div>
    </div>
    <div class="login-container">
        <!-- Botón de cambio de tema -->
        <div class="switch-theme" id="themeSwitch">
            <img src="{{ asset('images/sun.png') }}" alt="Sun" id="themeIcon">
        </div>
        <h2>Iniciar Sesión</h2>
        <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" name="email" placeholder="Correo electrónico" required autocomplete="email">
        </div>
        <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" name="password" placeholder="Contraseña" required autocomplete="current-password">
        </div>
        <button class="btn">Iniciar Sesión</button>
        <a href="{{ route('password.request') }}" class="link">¿Olvidaste tu contraseña?</a>
        <a href="{{ route('register') }}" class="link">Registrarse</a>
    </div>

    <!-- Librerías de Iconos -->
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>

    <!-- Incluir el archivo JavaScript -->
    <script src="{{ asset('js/scripts.js') }}"></script>
</body>

</html>
