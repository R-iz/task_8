// Custom JavaScript for Wanderlust Chronicles Travel Blog

// Import Bootstrap
const bootstrap = window.bootstrap

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  initializeTravelBlog()
})

// Initialize travel blog functionality
function initializeTravelBlog() {
  setupNavbarScrollEffect()
  setupSmoothScrolling()
  setupHeroAnimations()
  setupLoadMoreButton()
  setupNewsletterSubscription()
  setupGalleryModal()
  setupCardAnimations()
  setupScrollAnimations()
  setupDestinationTags() // Add this line
  setupSearchFunctionality() // Add this line
}

// Navbar scroll effect with transparency
function setupNavbarScrollEffect() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")

      // Handle home link specially
      if (targetId === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        return
      }

      const target = document.querySelector(targetId)
      if (target) {
        const headerOffset = 80
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Hero section animations
function setupHeroAnimations() {
  const heroElements = document.querySelectorAll(".hero-text > *")

  // Animate hero elements on load with staggered delay
  heroElements.forEach((element, index) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"

    setTimeout(() => {
      element.style.transition = "all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)"
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }, index * 200)
  })
}

// Load More Adventures functionality
function setupLoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn")

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      handleLoadMoreAdventures(this)
    })
  }
}

// Handle Load More Adventures
function handleLoadMoreAdventures(btn) {
  const originalText = btn.innerHTML

  // Show loading state
  btn.innerHTML =
    '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Loading more adventures...'
  btn.disabled = true
  btn.classList.add("loading")

  // Simulate loading new adventures
  setTimeout(() => {
    // Reset button state
    btn.innerHTML = originalText
    btn.disabled = false
    btn.classList.remove("loading")

    // Show success notification
    showNotification("New adventures loaded! Keep exploring!", "success")

    // Add some visual feedback
    const adventuresGrid = document.querySelector(".adventures-grid .row")
    adventuresGrid.style.transform = "scale(0.98)"
    setTimeout(() => {
      adventuresGrid.style.transition = "transform 0.3s ease"
      adventuresGrid.style.transform = "scale(1)"
    }, 100)
  }, 2000)
}

// Newsletter subscription functionality
function setupNewsletterSubscription() {
  const subscribeBtn = document.getElementById("subscribeBtn")
  const emailInput = document.getElementById("emailInput")

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", function () {
      handleNewsletterSubscription(emailInput, this)
    })

    emailInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleNewsletterSubscription(emailInput, subscribeBtn)
      }
    })
  }
}

// Handle newsletter subscription
function handleNewsletterSubscription(emailInput, btn) {
  const email = emailInput.value.trim()

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address to join our adventure community!", "error")
    emailInput.focus()
    return
  }

  const originalText = btn.innerHTML

  // Show loading state
  btn.innerHTML =
    '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Joining...'
  btn.disabled = true

  // Simulate subscription
  setTimeout(() => {
    btn.innerHTML = originalText
    btn.disabled = false
    emailInput.value = ""

    showNotification("Welcome to the adventure! Check your email for exclusive travel stories.", "success")

    // Add celebration effect
    createConfetti()
  }, 1500)
}

// Gallery modal functionality
function setupGalleryModal() {
  const galleryItems = document.querySelectorAll(".gallery-item")

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img")
      const caption = this.querySelector(".gallery-caption")
      const title = caption ? caption.querySelector("h5").textContent : ""
      const location = caption ? caption.querySelector("p").textContent : ""

      openImageModal(img.src, img.alt, title, location)
    })
  })
}

// Open image in modal
function openImageModal(src, alt, title, location) {
  // Create modal HTML
  const modalHTML = `
    <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark border-0">
          <div class="modal-header border-0">
            <h5 class="modal-title text-white">${title}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <img src="${src}" alt="${alt}" class="img-fluid">
          </div>
          <div class="modal-footer border-0 justify-content-between">
            <span class="text-white">${location}</span>
            <div>
              <button class="btn btn-sm btn-outline-light me-2">
                <i class="bi bi-heart"></i> Like
              </button>
              <button class="btn btn-sm btn-outline-light">
                <i class="bi bi-share"></i> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  // Remove existing modal if any
  const existingModal = document.getElementById("imageModal")
  if (existingModal) {
    existingModal.remove()
  }

  // Add modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML)

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("imageModal"))
  modal.show()

  // Remove modal from DOM when hidden
  document.getElementById("imageModal").addEventListener("hidden.bs.modal", function () {
    this.remove()
  })
}

// Card hover animations
function setupCardAnimations() {
  const cards = document.querySelectorAll(".adventure-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Show notification
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `alert alert-${type === "success" ? "success" : "danger"} alert-dismissible fade show notification`
  notification.innerHTML = `
    <div class="d-flex align-items-center">
      <i class="bi bi-${type === "success" ? "check-circle" : "exclamation-triangle"} me-2 fs-4"></i>
      <div>${message}</div>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `

  document.body.appendChild(notification)

  // Animate notification
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
    notification.style.opacity = "1"
  }, 10)

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    notification.style.opacity = "0"

    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove()
      }
    }, 300)
  }, 5000)
}

// Create confetti effect
function createConfetti() {
  const colors = ["#6366f1", "#10b981", "#3b82f6", "#f43f5e", "#8b5cf6"]

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div")
      confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
      `

      document.body.appendChild(confetti)

      setTimeout(() => {
        confetti.remove()
      }, 3000)
    }, i * 50)
  }
}

// Add confetti animation to CSS
const style = document.createElement("style")
style.textContent = `
  @keyframes confettiFall {
    to {
      transform: translateY(100vh) rotate(${Math.random() * 360}deg);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Intersection Observer for animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated")
      }
    })
  }, observerOptions)

  // Add animation classes
  const style = document.createElement("style")
  style.textContent = `
    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    
    .fade-up.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    .fade-in {
      opacity: 0;
      transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    
    .fade-in.animated {
      opacity: 1;
    }
  `
  document.head.appendChild(style)

  // Observe elements for animation
  document.querySelectorAll(".section-header, .adventure-card, .featured-content, .gallery-item").forEach((el) => {
    el.classList.add("fade-up")
    observer.observe(el)
  })
}

// Setup destination tags functionality
function setupDestinationTags() {
  // Wait for DOM to be fully loaded
  setTimeout(() => {
    const destinationTags = document.querySelectorAll(".destination-tag")

    console.log("Found destination tags:", destinationTags.length) // Debug log

    destinationTags.forEach((tag, index) => {
      tag.addEventListener("click", function (e) {
        e.preventDefault()
        const destination = this.textContent.trim()
        console.log("Clicked destination:", destination) // Debug log

        // Add visual feedback
        this.style.transform = "scale(0.95)"
        setTimeout(() => {
          this.style.transform = ""
        }, 150)

        // Scroll to destinations section
        const destinationsSection = document.getElementById("destinations")
        if (destinationsSection) {
          destinationsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }

        // Show notification
        showNotification(`Showing adventures in ${destination}!`, "success")

        // Filter adventures
        setTimeout(() => {
          searchAdventures(destination)
        }, 500)
      })

      // Add hover effect
      tag.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px)"
      })

      tag.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    })
  }, 100)
}

// Setup search functionality
function setupSearchFunctionality() {
  const searchInput = document.querySelector('.search-container input[type="text"]')
  const searchBtn = document.querySelector(".search-container .btn")

  if (searchInput && searchBtn) {
    // Search button click
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const query = searchInput.value.trim()
      if (query) {
        performSearch(query)
      } else {
        showNotification("Please enter a destination to search!", "error")
        searchInput.focus()
      }
    })

    // Enter key press
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        const query = searchInput.value.trim()
        if (query) {
          performSearch(query)
        } else {
          showNotification("Please enter a destination to search!", "error")
        }
      }
    })

    // Add search suggestions on focus
    searchInput.addEventListener("focus", () => {
      showSearchSuggestions()
    })

    // Clear search functionality
    searchInput.addEventListener("input", (e) => {
      if (e.target.value.trim() === "") {
        resetSearch()
      }
    })
  }
}

// Perform search with visual feedback
function performSearch(query) {
  const searchBtn = document.querySelector(".search-container .btn")
  const originalBtnText = searchBtn.innerHTML

  // Show loading state
  searchBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Searching...'
  searchBtn.disabled = true

  // Scroll to destinations section
  const destinationsSection = document.getElementById("destinations")
  if (destinationsSection) {
    destinationsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  // Simulate search delay for better UX
  setTimeout(() => {
    searchAdventures(query)

    // Reset button
    searchBtn.innerHTML = originalBtnText
    searchBtn.disabled = false
  }, 800)
}

// Show search suggestions
function showSearchSuggestions() {
  const suggestions = [
    "Iceland",
    "Japan",
    "Thailand",
    "Peru",
    "Morocco",
    "Nepal",
    "Kenya",
    "Norway",
    "Bali",
    "Patagonia",
  ]
  const searchInput = document.querySelector('.search-container input[type="text"]')

  if (!searchInput.value.trim()) {
    searchInput.placeholder = `Try: ${suggestions[Math.floor(Math.random() * suggestions.length)]}`
  }
}

// Reset search to show all adventures
function resetSearch() {
  const cards = document.querySelectorAll(".adventure-card")
  cards.forEach((card) => {
    card.style.display = "block"
    card.style.opacity = "1"
    card.style.transform = "scale(1)"
  })
}

// Adventure sharing functionality
function shareAdventure(title, url) {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url,
    })
  } else {
    // Fallback to copying URL
    navigator.clipboard.writeText(url).then(() => {
      showNotification("Adventure link copied to clipboard!", "success")
    })
  }
}

// Enhanced search functionality for adventures
function searchAdventures(query) {
  const cards = document.querySelectorAll(".adventure-card")
  const searchTerm = query.toLowerCase()
  let foundMatches = 0
  const matchedCards = []

  // First, hide all cards with animation
  cards.forEach((card) => {
    card.style.transition = "all 0.3s ease"
    card.style.opacity = "0.3"
    card.style.transform = "scale(0.95)"
  })

  setTimeout(() => {
    cards.forEach((card, index) => {
      const title = card.querySelector(".card-title").textContent.toLowerCase()
      const description = card.querySelector(".card-text").textContent.toLowerCase()
      const location = card.querySelector(".card-location").textContent.toLowerCase()
      const tags = Array.from(card.querySelectorAll(".tag")).map((tag) => tag.textContent.toLowerCase())
      const date = card.querySelector(".date").textContent.toLowerCase()

      const matches =
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        location.includes(searchTerm) ||
        tags.some((tag) => tag.includes(searchTerm)) ||
        date.includes(searchTerm)

      if (matches) {
        card.style.display = "block"
        setTimeout(() => {
          card.style.opacity = "1"
          card.style.transform = "scale(1)"
          card.style.boxShadow = "0 10px 30px rgba(99, 102, 241, 0.2)"
        }, index * 100)
        foundMatches++
        matchedCards.push(card)
      } else {
        card.style.display = "none"
        card.style.opacity = "0"
        card.style.transform = "scale(0.8)"
      }
    })

    // Show results message
    setTimeout(() => {
      if (foundMatches === 0) {
        showNotification(
          `No adventures found for "${query}". Try searching for destinations like Iceland, Japan, or Thailand!`,
          "error",
        )
        // Show all cards again if no matches
        setTimeout(() => {
          resetSearch()
        }, 2000)
      } else {
        showNotification(
          `Found ${foundMatches} adventure${foundMatches > 1 ? "s" : ""} matching "${query}"!`,
          "success",
        )

        // Add a "Clear Search" button
        addClearSearchButton()
      }
    }, 500)
  }, 300)
}

// Add clear search button
function addClearSearchButton() {
  const existingBtn = document.getElementById("clearSearchBtn")
  if (existingBtn) return

  const destinationsSection = document.querySelector("#destinations .container")
  const clearBtn = document.createElement("div")
  clearBtn.id = "clearSearchBtn"
  clearBtn.className = "text-center mt-3 mb-4"
  clearBtn.innerHTML = `
    <button class="btn btn-outline-secondary" onclick="clearSearch()">
      <i class="bi bi-x-circle me-2"></i>Clear Search & Show All Adventures
    </button>
  `

  const sectionHeader = destinationsSection.querySelector(".section-header")
  sectionHeader.insertAdjacentElement("afterend", clearBtn)
}

// Clear search function
function clearSearch() {
  const searchInput = document.querySelector('.search-container input[type="text"]')
  const clearBtn = document.getElementById("clearSearchBtn")

  if (searchInput) {
    searchInput.value = ""
    searchInput.placeholder = "Search destinations..."
  }

  if (clearBtn) {
    clearBtn.remove()
  }

  resetSearch()
  showNotification("Showing all adventures!", "success")
}

// Update active navigation state based on scroll position
function updateActiveNavigation() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const sectionHeight = section.clientHeight

    if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
      current = section.getAttribute("id")
    }
  })

  // Never set home as active
  if (current === "home") {
    current = ""
  }

  navLinks.forEach((link) => {
    link.classList.remove("active")
    // Skip home link - never make it active
    if (link.getAttribute("href") === "#home") {
      return
    }
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

// Add scroll listener for active navigation
window.addEventListener("scroll", updateActiveNavigation)

// Export functions for global use
window.TravelBlog = {
  shareAdventure,
  searchAdventures,
  openImageModal,
  showNotification,
}
