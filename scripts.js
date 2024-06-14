// Step 1: Create Website
const websiteInfo = {
    "websiteTitle": "Renew Books",
    "orderColorSchema": "solid",
    "header": {
      "title": "Renew Books"
    },
    "footer": {
      "description": "Find or sell used books with ease. Bargain for the best prices and check book conditions effortlessly."
    },
    "colors": {
      "mainColor": "dark_orange",
      "secondColor": "orange"
    }
  };
  
  // Step 2: Create Main Page
  const mainPageInfo = {
    "pageOrder": 1,
    "page": {
      "pageName": "Home",
      "pageType": "mainPage",
      "pageUrl": "/"
    },
    "websiteId": "dd6d8db3-7f19-4235-b2cb-2873186d7a4e"
  };
  
  // Step 3: Add Blocks to Main Page
  // Each block can be created similarly
  
  // Hero Block
  const heroBlock = {
    "title": "Welcome to Renew Books",
    "subtitle": "Buy and Sell Used Books Easily",
    "button1": "Get Started",
    "button1Link": "/",
    "imagePrompt": "books"
  };
  
  // Features Block
  const featuresBlock = {
    "imagePrompt": "bookstore",
    "title": "Features",
    "points": [
      {
        "title": "Find Sellers",
        "description": "Locate sellers with books they no longer need."
      },
      {
        "title": "Find Buyers",
        "description": "Connect with buyers looking for used books."
      },
      {
        "title": "Bargain for Prices",
        "description": "Negotiate the best prices for used books."
      },
      {
        "title": "Check Book Conditions",
        "description": "Ensure book quality by checking random pages."
      }
    ]
  };
  
  // FAQ Block
  const faqBlock = {
    "title": "Frequently Asked Questions",
    "points": [
      {
        "title": "How do I list a book for sale?",
        "description": "Register on our platform and use the 'Sell' feature to list your book with details."
      },
      {
        "title": "How do I find a book to buy?",
        "description": "Use the search feature to find books and contact the seller directly."
      },
      {
        "title": "Can I negotiate the price?",
        "description": "Yes, you can bargain with the seller to reach a mutually agreed price."
      },
      {
        "title": "How do I check the condition of the book?",
        "description": "You can ask the seller for random page numbers to verify the condition."
      },
      {
        "title": "Is there a return policy?",
        "description": "Returns depend on the agreement between the buyer and seller."
      },
      {
        "title": "How do I contact customer support?",
        "description": "You can reach us at renewbook@gmail.com or call us at 9899898977."
      }
    ]
  };
  
  // Blog Block
  const blogBlock = {
    "items": [
      {
        "name": "Tips for Selling Books Online",
        "description": "Learn the best practices for listing and selling your used books on our platform.",
        "imagePrompt": "online selling"
      },
      {
        "name": "Finding Rare Books",
        "description": "Discover how to find rare and valuable books through our platform.",
        "imagePrompt": "rare books"
      },
      {
        "name": "Negotiating Prices",
        "description": "Get tips on how to effectively negotiate book prices with sellers.",
        "imagePrompt": "negotiation"
      },
      {
        "name": "Ensuring Book Quality",
        "description": "Learn how to verify the quality of used books before purchasing.",
        "imagePrompt": "book quality"
      }
    ]
  };
  
  // Contacts Block
  const contactsBlock = {
    "contactsInfos": [
      {
        "type": "email",
        "text": "renewbook@gmail.com"
      },
      {
        "type": "tel",
        "text": "9899898977"
      }
    ]
  };
  
  // Step 4: Create "Buy & Sell" Page
  const buySellPageInfo = {
    "pageOrder": 2,
    "page": {
      "pageName": "Buy & Sell",
      "pageType": "subPage",
      "pageUrl": "/buy-sell"
    },
    "websiteId": "dd6d8db3-7f19-4235-b2cb-2873186d7a4e"
  };
  
  // Step 5: Add Blocks to "Buy & Sell" Page
  // Features Block for "Buy & Sell" Page
  const featuresBlockBuySell = {
    "imagePrompt": "transaction",
    "title": "How It Works",
    "points": [
      {
        "title": "List Your Book",
        "description": "Provide details about the book you want to sell."
      },
      {
        "title": "Find a Buyer",
        "description": "Connect with buyers interested in your book."
      },
      {
        "title": "Negotiate Price",
        "description": "Bargain with buyers to reach a fair price."
      },
      {
        "title": "Verify Condition",
        "description": "Ensure the book's quality by checking random pages."
      },
      {
        "title": "Complete Transaction",
        "description": "Finalize the sale and arrange for delivery."
      }
    ]
  };
  
  // Form Block for "Buy & Sell" Page
  const formBlock = {
    "formFields": [
      {
        "label": "Book Title",
        "type": "text",
        "required": true
      },
      {
        "label": "Author",
        "type": "text",
        "required": true
      },
      {
        "label": "Price",
        "type": "number",
        "required": true
      },
      {
        "label": "Condition",
        "type": "text",
        "required": true
      },
      {
        "label": "Seller Contact",
        "type": "email",
        "required": true
      },
      {
        "label": "Additional Notes",
        "type": "textarea",
        "required": false
      },
      {
        "label": "Submit",
        "type": "submit",
        "required": true
      }
    ]
  };
  
  // Rendering the website
  document.getElementById('headerTitle').innerText = websiteInfo.header.title;
  document.getElementById('footerDescription').innerText = websiteInfo.footer.description;
  
 // Function to render blocks for the main page
function renderMainPageBlocks() {
    // Render Hero Block
    const heroContent = `
      <section id="hero">
        <div class="container">
          <h2>${heroBlock.title}</h2>
          <p>${heroBlock.subtitle}</p>
          <a href="${heroBlock.button1Link}" class="btn">${heroBlock.button1}</a>
          <img src="images/${heroBlock.imagePrompt}.jpg" alt="${heroBlock.imagePrompt}">
        </div>
      </section>
    `;
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', heroContent);
  
    // Render Features Block
    const featuresContent = `
      <section id="features">
        <div class="container">
          <h2>${featuresBlock.title}</h2>
          <div class="points">
            ${featuresBlock.points.map(point => `
              <div class="point">
                <h3>${point.title}</h3>
                <p>${point.description}</p>
              </div>
            `).join('')}
          </div>
          <img src="images/${featuresBlock.imagePrompt}.jpg" alt="${featuresBlock.imagePrompt}">
        </div>
      </section>
    `;
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', featuresContent);
  
    // Render FAQ Block
    const faqContent = `
      <section id="faq">
        <div class="container">
          <h2>${faqBlock.title}</h2>
          <div class="points">
            ${faqBlock.points.map(point => `
              <div class="point">
                <h3>${point.title}</h3>
                <p>${point.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', faqContent);
  
    // Render Blog Block
    const blogContent = `
      <section id="blog">
        <div class="container">
          <h2>Blog</h2>
          <div class="blog-items">
            ${blogBlock.items.map(item => `
              <div class="blog-item">
                <img src="images/${item.imagePrompt}.jpg" alt="${item.imagePrompt}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', blogContent);
  
    // Render Contacts Block
    const contactsContent = `
      <section id="contacts">
        <div class="container">
          <h2>Contacts</h2>
          <ul class="contact-info">
            ${contactsBlock.contactsInfos.map(info => `
              <li><strong>${info.type}:</strong> ${info.text}</li>
            `).join('')}
          </ul>
        </div>
      </section>
    `;
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', contactsContent);
  }
  
  // Call the function to render main page blocks
  renderMainPageBlocks();
// Function to render blocks for the "Buy & Sell" page
function renderBuySellPageBlocks() {
    // Render Features Block for "Buy & Sell" Page
    const featuresContent = `
      <section id="features-buy-sell">
        <div class="container">
          <h2>${featuresBlockBuySell.title}</h2>
          <div class="points">
            ${featuresBlockBuySell.points.map(point => `
              <div class="point">
                <h3>${point.title}</h3>
                <p>${point.description}</p>
              </div>
            `).join('')}
          </div>
          <img src="images/${featuresBlockBuySell.imagePrompt}.jpg" alt="${featuresBlockBuySell.imagePrompt}">
        </div>
      </section>
    `;
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', featuresContent);
  
    // Render Form Block for "Buy & Sell" Page
    const formContent = `
      <section id="form-buy-sell">
        <div class="container">
          <h2>Submit Your Book</h2>
          <form>
            ${formBlock.formFields.map(field => `
              ${field.type !== 'submit' ? `
                <div class="form-group">
                  <label>${field.label}</label>
                  ${field.type === 'textarea' ? `
                    <textarea rows="4"></textarea>
                  ` : `
                    <input type="${field.type}" ${field.required ? 'required' : ''}>
                  `}
                </div>
              ` : `
                <button type="submit">${field.label}</button>
              `}
            `).join('')}
          </form>
        </div>
      </section>
    `;
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', formContent);
  }
  
  // Call the function to render "Buy & Sell" page blocks
  renderBuySellPageBlocks();
// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    // You can add code here to handle form submission, such as sending data to a server or displaying a success message
    alert('Form submitted successfully!');
  }
  
  // Add event listener for form submission
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
      