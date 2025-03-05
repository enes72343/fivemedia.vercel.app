// Menü Toggle Fonksiyonu
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

menuToggle.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});
// Tüm soruları seç
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Tıklanan sorunun üstündeki .faq-item'ı bul
        const faqItem = question.parentElement;
        
        // Açık olan diğer soruları kapat
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Tıklanan soruyu aç/kapat
        faqItem.classList.toggle('active');
    });
});
// Tüm hizmet sorularını seç
const serviceQuestions = document.querySelectorAll('.service-question');

serviceQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Tıklanan hizmetin üstündeki .service-item'ı bul
        const serviceItem = question.parentElement;
        
        // Açık olan diğer hizmetleri kapat
        document.querySelectorAll('.service-item').forEach(item => {
            if (item !== serviceItem) {
                item.classList.remove('active');
            }
        });

        // Tıklanan hizmeti aç/kapat
        serviceItem.classList.toggle('active');
    });
});
// Tüm destek sorularını seç
const supportQuestions = document.querySelectorAll('.support-question');

supportQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Tıklanan destek seçeneğinin üstündeki .support-item'ı bul
        const supportItem = question.parentElement;
        
        // Açık olan diğer destek seçeneklerini kapat
        document.querySelectorAll('.support-item').forEach(item => {
            if (item !== supportItem) {
                item.classList.remove('active');
            }
        });

        // Tıklanan destek seçeneğini aç/kapat
        supportItem.classList.toggle('active');
    });
});
