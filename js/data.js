import { getRandomInt, getRandomElement, getUniqueValue } from "./util.js";

const POSTS_DATA = {
  commentMaxLength: 140,
  comments: [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
  ],
  countAvatar: 6,
  countComments: {
    max: 10,
    min: 0
  },
  countLikes: {
    max: 200,
    min: 15
  },
  countPosts: 25,
  countRandomPosts: 10,
  names: ["Никита", "Арина", "Артемий", "Ольга", "Виктор", "Елизавета", "Даниил", "Анастасия", "Роман", "Евгений", "Наталья",
  "Ярослав", "Надежда", "Александр", "Лолита", "Дмитрий", "Вера"],
};

let posts;
const arrayIds = [];  // массив идентификаторов комментарий

// генерация комментариев
const createComment = () => {
  const comments = [];
  let commentId;
  for (var i = 0; i < getRandomInt(POSTS_DATA.countComments.min, POSTS_DATA.countComments.max); i++) {
    commentId = getUniqueValue(arrayIds, 1, 999);
    arrayIds.push(commentId);

    let messages = new Array(2)                                         // объявляем массив
      .fill(null)                                                       // присваиваем null всум элементам
      .map(() => getRandomElement(POSTS_DATA.comments))                 // заполняем случайными значениями
      .filter((_, index) => index ? getRandomInt(0, 1) : 1)             // оставляем первый элемент (чтоб не был пустым), остальные выводим рандомно
      .reduce((result, item) => {                                       // удаляем дубликаты
        return result.includes(item) ? result : [...result, item];
      }, [])
      .join(" ");                                                       // склеиваем в строку

    comments.push({
      id: commentId,
      avatar: `img/avatar-${getRandomInt(1, POSTS_DATA.countAvatar)}.svg`,
      message: messages.substr(0, POSTS_DATA.commentMaxLength),
      name: getRandomElement(POSTS_DATA.names),
    });
  }

  return comments;
};

// генерация постов
const createPosts = () => {
  posts = new Array(POSTS_DATA.countPosts)
    .fill(null)
    .map((item, index) => {
      return {
        id: index + 1,
        url: `photos/${index + 1}.jpg`,
        description: `Описание #${index + 1}`,
        likes: getRandomInt(15, 200),
        comments: createComment(),
      };
    });
};

export { POSTS_DATA, createPosts, posts };
