const createComment = (comment) => {
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');

  const userAvatar = document.createElement('img');
  userAvatar.classList.add('social__picture');
  userAvatar.src = comment.avatar;
  userAvatar.alt = comment.name;
  userAvatar.width = 35;
  userAvatar.height = 35;
  commentItem.appendChild(userAvatar);

  const userName = document.createElement('p');
  userName.classList.add('social__text');
  userName.textContent = comment.message;
  commentItem.appendChild(userName);

  return commentItem;
};

export { createComment };
