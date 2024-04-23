document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Harap isi semua kolom!');
      return;
    }
    alert('Thank You for Contacting:\nNama: ' + name + '\nEmail: ' + email + '\nPesan: ' + message);
  });
  
function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      const tags = item.getAttribute('data-tags');
      if (category === 'all' || tags.includes(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

function reloadPage() {
 location.reload();
}
  
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reloadPage);
  
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-filter');
      filterPortfolio(category);
    });
  });
  