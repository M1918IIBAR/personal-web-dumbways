const blogs = [];

function addBlog(event) {
  event.preventDefault();

  const inputBlogTitle = document.getElementById("input-blog-title").value;
  const inputBlogContent = document.getElementById("input-blog-content").value;
  const inputStartDate = new Date(
    document.getElementById("input-start-date").value
  );
  const inputEndDate = new Date(
    document.getElementById("input-end-date").value
  );
  const inputBlogImage = document.getElementById("input-blog-image").files[0];

  // Check technologies
  const technologies = [
    document.getElementById("html").checked ? "html" : null,
    document.getElementById("css").checked ? "css" : null,
    document.getElementById("javascript").checked ? "javascript" : null,
    document.getElementById("react").checked ? "react" : null,
  ].filter(Boolean); // This removes any null values

  if (!inputBlogTitle || !inputBlogContent || !inputBlogImage) {
    alert("Please fill in all fields and select an image.");
    return;
  }

  if (inputEndDate < inputStartDate) {
    alert("End date must be after start date.");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    const imageBase64 = reader.result; // Base64 encoded image

    const blog = {
      title: inputBlogTitle,
      content: inputBlogContent,
      duration: calculateDuration(inputStartDate, inputEndDate),
      createdAt: new Date(),
      image: imageBase64,
      technologies: technologies, // Store selected technologies
    };

    blogs.unshift(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs)); // Save blogs to localStorage

    renderBlog();

    // Clear input fields
    document.getElementById("input-blog-title").value = "";
    document.getElementById("input-blog-content").value = "";
    document.getElementById("input-start-date").value = "";
    document.getElementById("input-end-date").value = "";
    document.getElementById("input-blog-image").value = "";

    // Uncheck all technologies
    document.getElementById("html").checked = false;
    document.getElementById("css").checked = false;
    document.getElementById("javascript").checked = false;
    document.getElementById("react").checked = false;
  };

  // Read the image file as Base64
  reader.readAsDataURL(inputBlogImage);
}

function calculateDuration(startDate, endDate) {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth(); // getMonth() returns 0 for January, 11 for December
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  // Calculate the difference in months
  let months = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (months < 0) {
    months = 0; // Handle case where the end date is before the start date
  }

  return `${months} months`; // Return the duration in months
}

function renderBlog() {
  const savedBlogs = JSON.parse(localStorage.getItem("blogs"));

  if (savedBlogs) {
    blogs.length = 0; // Clear the current blog array
    blogs.push(...savedBlogs); // Load saved blogs
  }

  let html = ``;

  for (let index = 0; index < blogs.length; index++) {
    const blog = blogs[index];
    const technologies = blog.technologies || []; // Ensure technologies is defined

    html += `<div class="blog-list-item">
          <div class="blog-image">
              <img src="${blog.image}" alt="" />
          </div>
          <div class="blog-content">
              <h1>
                  <a href="blog-detail${index}.html" target="_blank">${blog.title}</a>
              </h1>
              <p><strong>Duration:</strong> ${blog.duration}</p>
              <p>${blog.content}</p>
              <div class="technologies-used">`;

    // Display logos for selected technologies
    if (technologies.includes("html")) {
      html += `<img src="assets/icon/css.png" alt="HTML" class="tech-logo" />`;
    }
    if (technologies.includes("css")) {
      html += `<img src="assets/icon/css.png" alt="CSS" class="tech-logo" />`;
    }
    if (technologies.includes("javascript")) {
      html += `<img src="assets/icon/js.png" alt="JavaScript" class="tech-logo" />`;
    }
    if (technologies.includes("react")) {
      html += `<img src="assets/icon/react.js.png" class="tech-logo" />`;
    }

    html += `</div> <!-- Close technologies-used div -->
          </div>
            <div class="button-group">
              <button class="edit">Edit</button>
              <button class="delete" onclick="deleteBlog(${index})">Delete</button>
            </div>
      </div>`;
  }

  document.getElementById("contents").innerHTML = html;
}

function getFullTime(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const tanggal = date.getDate();
  const bulan = months[date.getMonth()];
  const tahun = date.getFullYear();

  let jam = date.getHours() + 7;
  let menit = date.getMinutes();

  if (jam < 10) {
    jam = "0" + jam;
  }

  if (menit < 10) {
    menit = "0" + menit;
  }

  return `${tanggal} ${bulan} ${tahun} ${jam}:${menit} WIB`;
}

function deleteBlog(index) {
  blogs.splice(index, 1);

  // Update localStorage after deletion
  localStorage.setItem("blogs", JSON.stringify(blogs));

  renderBlog();
}

document.addEventListener("DOMContentLoaded", function () {
  renderBlog(); // Load the blogs when the page is loaded
});
