function getTestimonialData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onerror = () => {
      reject("Network Error");
    };

    xhr.onload = () => {
      resolve(JSON.parse(xhr.response));
    };

    xhr.send();
  });
}

async function showRating(star) {
  const testimonials = await getTestimonialData(
    "https://api.npoint.io/87f91b21bf44cb584853"
  );

  let testimonialsHTML = "";

  const filteredTestimonials = testimonials.filter((testimonial) => {
    return star === testimonial.rating;
  });

  filteredTestimonials.forEach((testimonial) => {
    testimonialsHTML += `
      <div class="col">
        <div class="card testimonial-card h-100 shadow">
          <img src="${testimonial.image}" class="card-img-top" alt="Testimonial image" />
          <div class="card-body d-flex flex-column">
            <p class="card-text flex-grow-1"><em>"${testimonial.comment}"</em></p>
            <p class="card-text text-end fw-bold mb-1">- ${testimonial.author}</p>
            <p class="card-text text-end fw-bold">
              ${testimonial.rating}
              <i class="fa-sharp fa-solid fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("testimonial-deck").innerHTML = testimonialsHTML;
}

async function showAllRatings() {
  const testimonials = await getTestimonialData(
    "https://api.npoint.io/87f91b21bf44cb584853"
  );

  let testimonialsHTML = "";

  testimonials.forEach((testimonial) => {
    testimonialsHTML += `
      <div class="col">
        <div class="card testimonial-card h-100 shadow">
          <img src="${testimonial.image}" class="card-img-top" alt="Testimonial image" />
          <div class="card-body d-flex flex-column">
            <p class="card-text flex-grow-1"><em>"${testimonial.comment}"</em></p>
            <p class="card-text text-end fw-bold mb-1">- ${testimonial.author}</p>
            <p class="card-text text-end fw-bold">
              ${testimonial.rating}
              <i class="fa-sharp fa-solid fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("testimonial-deck").innerHTML = testimonialsHTML;
}

showAllRatings();
