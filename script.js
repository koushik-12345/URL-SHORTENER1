// Function to generate a random short code
function generateShortCode() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shortCode = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      shortCode += chars[randomIndex];
    }
    return shortCode;
  }
  
  // Handle form submission
  const urlForm = document.getElementById("url-form");
  const urlInput = document.getElementById("url-input");
  const shortUrlContainer = document.getElementById("short-url-container");
  const shortUrl = document.getElementById("short-url");
  
  urlForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const longUrl = urlInput.value.trim();
    
    // Generate short URL code
    const shortCode = generateShortCode();
    const shortUrlValue = window.location.origin + "/" + shortCode;
  
    // Display shortened URL
    shortUrl.textContent = shortUrlValue;
    shortUrl.href = shortUrlValue;
    shortUrlContainer.style.display = "block";
    
    // Clear input
    urlInput.value = "";
  });
  