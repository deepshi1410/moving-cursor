const root = document.querySelector('html');

// creating a cursor element
const cursor = document.createElement('div');

// adding a class to cursor element
cursor.classList.add('cursor');
root.appendChild(cursor)

//  cfeating a following cursor
const cursorFollower = document.createElement('div');
cursorFollower.classList.add('cursor', 'cursor_follower');
root.appendChild(cursorFollower);

root.addEventListener('mousemove', (e) => {
  setPositionOfCursor(cursorFollower, e)
  setPositionOfCursor(cursor, e)
})

function setPositionOfCursor(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}

