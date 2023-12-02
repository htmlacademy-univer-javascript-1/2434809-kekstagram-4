import { randomiseNumber } from './util.js';

const COUNT = 25;

const NAMES = [
  'Ваня',
  'Артём',
  'Анна',
  'Саша',
  'Владислав'
];

const Like = {
  MIN: 15,
  MAX: 200
};

const Comment = {
  MIN: 1,
  MAX: 10
};

const addComment = () => ({
  id: 135,
  avatar: `img/avatar${randomiseNumber(1, 6)}.svg`,
  message: 'Всё отлично!',
  name: NAMES[randomiseNumber(0, NAMES.length - 1)]
});

const createComments = () => {
  const commentsList = Array.from({length: randomiseNumber(Comment.MIN, Comment.MAX)}, addComment);
  return commentsList;
};

let id = 0;

const addPhoto = () => {
  id++;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'В целом всё неплохо. Но не всё.',
    likes: randomiseNumber(Like.MIN, Like.MAX),
    comments: createComments()
  };
};

const photos = () => Array.from({length: COUNT}, addPhoto);
export {photos};
