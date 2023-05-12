window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const top = window.pageYOffset || document.documentElement.scrollTop;

  if (top > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Get the profile image element
const profileImage = document.querySelector(".profile-image img");

// Change the profile image on hover
profileImage.addEventListener("mouseover", () => {
  profileImage.src =
    "https://via.placeholder.com/150/FFA500/FFFFFF?text=New+Profile+Image";
});

profileImage.addEventListener("mouseout", () => {
  profileImage.src = "https://via.placeholder.com/150";
});

// Get the "Lihat Selengkapnya" link
const viewMoreLink = document.querySelector(".profile-content a");

// Show more transaction history on click
viewMoreLink.addEventListener("click", (event) => {
  event.preventDefault();
  const transactionTable = document.querySelector("table");
  transactionTable.innerHTML += `
    <tr>
      <td>01-03-2022</td>
      <td>Plastik</td>
      <td>8</td>
      <td>40</td>
    </tr>
    <tr>
      <td>01-04-2022</td>
      <td>Kaca</td>
      <td>3</td>
      <td>15</td>
    </tr>
  `;
});

// Get the "Pengaturan Profil" link
const profileSettingsLink = document.querySelector(
  ".profile-footer a:last-child"
);

// Show a modal for profile settings on click
profileSettingsLink.addEventListener("click", (event) => {
  event.preventDefault();
  const modal = document.createElement("div");
  modal.innerHTML = `
    <div class="modal">
      <h2>Pengaturan Profil</h2>
      <form>
        <label for="nama">Nama</label>
        <input type="text" id="nama" name="nama" value="Nama Pengguna">
        <label for="biodata">Biodata</label>
        <textarea id="biodata" name="biodata">Biodata Pengguna</textarea>
        <label for="alamat">Alamat</label>
        <input type="text" id="alamat" name="alamat" value="Jalan Jendral Sudirman No. 123, Jakarta">
        <label for="nomor-hp">Nomor HP</label>
        <input type="tel" id="nomor-hp" name="nomor-hp" value="08123456789">
        <label for="rekening-bank">Rekening Bank</label>
        <input type="text" id="rekening-bank" name="rekening-bank" value="BCA 123456789">
        <button type="submit">Simpan</button>
        <button type="button" class="close-button">Tutup</button>
      </form>
    </div>
  `;
  modal.classList.add("modal-container");
  document.body.appendChild(modal);

  // Close the modal on "Tutup" button click
  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    modal.remove();
  });
});
