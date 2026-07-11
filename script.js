// Наш обновленный массив альбомов Hachette
const booksData = [
  {
    id: 1,
    title: 'Princesses Tome 2',
    publisher: 'Hachette',
    description: 'New edition of Princesses',
    progress: '0/100',
    image: 'images/Princesses-2.jpg',
    status: 'new', // Варианты: 'new', 'in-progress', 'done'
    statusText: 'New 🎉',
  },
  {
    id: 2,
    title: 'Les Grands Classiques',
    publisher: 'Hachette',
    description: 'Collection of iconic characters',
    progress: '24/100',
    image: 'images/Tome11.jpg',
    status: 'in-progress',
    statusText: 'In progress ⏳',
  },
  {
    id: 3,
    title: 'Famille',
    publisher: 'Hachette',
    description: 'Ohana means Family',
    progress: '100/100',
    image: 'images/Famille.jpeg',
    status: 'done',
    statusText: 'Done ✅',
  },
  {
    id: 4,
    title: 'Love Stories',
    publisher: 'Hachette',
    description: 'Happily Ever After!',
    progress: '100/100',
    image: 'images/lovestories.jpeg',
    status: 'done',
    statusText: 'Done ✅',
  },
  {
    id: 5,
    title: 'Girl Power',
    publisher: 'Hachette',
    description: 'Girls run the world',
    progress: '0/100',
    image: 'images/girlpower.jpg',
    status: 'new', // Варианты: 'new', 'in-progress', 'done'
    statusText: 'New 🎉',
  },
  {
    id: 6,
    title: 'Princesses',
    publisher: 'Hachette',
    description: 'First ever collection of princesses',
    progress: '55/100',
    image: 'images/princesses.jpg',
    status: 'in-progress', // Варианты: 'new', 'in-progress', 'done'
    statusText: 'In progress ⏳',
  },
  {
    id: 7,
    title: 'Méchants',
    publisher: 'Hachette',
    description: 'The greatest evil characters',
    progress: '18/100',
    image: 'images/mechants.jpg',
    status: 'in-progress', // Варианты: 'new', 'in-progress', 'done'
    statusText: 'In progress ⏳',
  },
  {
    id: 8,
    title: 'Héros & Méchants',
    publisher: 'Hachette',
    description: 'Evil vs Hero',
    progress: '100/100',
    image: 'images/heros_mechants.jpeg',
    status: 'done',
    statusText: 'Done ✅',
  },
  {
    id: 9,
    title: 'Barbie',
    publisher: 'Hachette',
    description: 'Barbies life',
    progress: '0/100',
    image: 'images/barbie.jpg',
    status: 'new',
    statusText: 'New 🎉',
  },
];

// наш контейнер
const cardsGrid = document.getElementById('cards-grid');

// Динамическая функция для подстановки класса кнопки на основе статуса
function getButtonClass(status) {
  if (status === 'new') return 'status-btn-new';
  if (status === 'done') return 'status-btn-done';
  return 'status-btn'; // по умолчанию для 'in-progress'
}

// Отрисовка карточек
function renderBooks(books) {
  const html = books.map((book) => {
    const btnClass = getButtonClass(book.status);

    return `
      <div class="card">
        <div class="card-image">
          <span class="page-number">${book.progress}</span>
          <img src="${book.image}" alt="${book.title}" class="card-img"/>
        </div>
        <div class="card-content">
          <span class="badge">${book.publisher}</span>
          <h3 class="character-name">${book.title}</h3>
          <p class="book-volume">${book.description}</p>
          <button class="${btnClass}">${book.statusText}</button>
        </div>
      </div>
    `;
  }).join('');

  cardsGrid.innerHTML = html;
}

// Запуск
renderBooks(booksData);

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (event) => {
  const searchQuery = event.target.value.toLowerCase().trim();

  const filteredBooks = booksData.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(searchQuery);
    const descriptionMatch = book.description.toLowerCase().includes(searchQuery);

    return titleMatch || descriptionMatch;
  });
  renderBooks(filteredBooks);
});