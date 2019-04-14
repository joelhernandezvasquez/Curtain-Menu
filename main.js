function slideDown()
{
  const curtainMenuContainer= document.querySelector(".curtain-menu");
  curtainMenuContainer.classList.add("slide-curtain-menu-down");

}

function closeCurtainMenu()
{
    const curtainMenuContainer= document.querySelector(".curtain-menu");
    curtainMenuContainer.classList.remove("slide-curtain-menu-down");
}