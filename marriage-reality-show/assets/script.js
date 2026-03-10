
document.addEventListener("DOMContentLoaded", function () {

  const faqs = [
    {
      q: "How do I participate or submit a question?",
      a: "Users can submit questions, personal experiences, or stories through the Feedback Form on the show page. Selected questions are addressed during episodes."
    },
    {
      q: "Can I share my marriage story or challenges?",
      a: "Yes, the show encourages stories from all stages of marriage, including pre-marriage, happy marriages, struggling marriages, divorce, or remarriage."
    },
    {
      q: "Can I send in video or image evidence?",
      a: "Yes. Short video clips or images can be uploaded via the submission form to illustrate your experience."
    },
    {
      q: "Will my story be shared publicly?",
      a: "Selected stories may be discussed on the show. Personal identifiers can be anonymized for privacy."
    },
    {
      q: "Can I watch past episodes or highlights?",
      a: "Yes, full episodes, highlights, and clips are available in the Watch Episodes & Highlights section."
    }
  ];
  const list = document.getElementById('faqListWrap');

  faqs.forEach((faq, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item border border-white/10 rounded-lg overflow-hidden';

    item.innerHTML = `
      <button class="faq-trigger w-full flex justify-between items-center p-4 text-left text-white font-semibold">
        <span>${faq.q}</span>
        <span class="transition-transform duration-300 faq-icon">+</span>
      </button>
      <div class="faq-answer-wrap overflow-hidden transition-all duration-300 max-h-0">
        <div class="p-4 text-white/70 text-sm">${faq.a}</div>
      </div>
    `;

    const trigger = item.querySelector('.faq-trigger');
    const panel   = item.querySelector('.faq-answer-wrap');
    const icon    = item.querySelector('.faq-icon');

    trigger.addEventListener('click', () => {

      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-answer-wrap').style.maxHeight = null;
        el.querySelector('.faq-icon').textContent = '+';
      });

      // Open clicked
      if (!isOpen) {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + "px";
        icon.textContent = '−';
      }
    });

    list.appendChild(item);
  });

});