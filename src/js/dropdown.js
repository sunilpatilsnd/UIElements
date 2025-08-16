function toggleDropdown(btn, dropdown) {
  btn.addEventListener("click", () => {
    const menuOpen = menu.classList.contains("hide");
    console.log(menuOpen ? "Dropdown is Open" : "Dropdown is Closed");
    dropdown.classList.toggle("hide");
  });
}

export { toggleDropdown };
