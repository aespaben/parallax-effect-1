stop_scroll = false;

window.addEventListener('mousewheel', () => {
  stop_scroll = true;
});

page_scroll = () => {
  if(!stop_scroll)
  { 
    window.scrollBy(0, 5);
    scroll_delay = setTimeout(page_scroll, 10);
  }
}

setTimeout(page_scroll, 3000);