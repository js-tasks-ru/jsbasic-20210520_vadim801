/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.render ();
  }
  render() {

    if (!this.elem) {

      const items = this.data.map (item => {
        return `<tr>
                  <td>${item.name}</td>
                  <td>${item.age}</td>
                  <td>${item.salary}</td>
                  <td>${item.city}</td>
                  <td><button>X</button></td>
                </tr>`;
      }).join('');

      this.elem = document.createElement('TABLE');
      this.elem.insertAdjacentHTML('beforeend',
        `<thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
        ${items}
        </tbody>`
      );

      this.elem.addEventListener('click', this.onClickItem.bind(this));
    }
  }

  onClickItem(event) {
    if (event.target.tagName !== 'BUTTON') {
      return
    }
    console.log(event.target);
    event.target.closest('tr').remove();

  }
}
