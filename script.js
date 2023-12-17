// Adicione este script no final do seu arquivo ou dentro da tag <script> no final do body
document.addEventListener('DOMContentLoaded', function () {
    // Exiba o botão de rolagem quando o usuário rolar para baixo
    window.addEventListener('scroll', function () {
        var scrollToTopBtn = document.getElementById('scrollToTopBtn');

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});

// Função para rolar suavemente até o topo da página
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
}
