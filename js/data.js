import { randomiseNumber } from './util.js';

const COUNT = 25;

const NAMES = [
  'Ваня',
  'Артём',
  'Анна',
  'Саша',
  'Владислав'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const Like = {
  MIN: 15,
  MAX: 200
};

const Comment = {
  MIN: 1,
  MAX: 20
};

const addComment = () => ({
  id: 135,
  avatar: `img/avatar-${randomiseNumber(1, 6)}.svg`,
  message: COMMENTS[randomiseNumber(0, COMMENTS.length - 1)],
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
