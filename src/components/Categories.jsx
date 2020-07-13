import React, { Component } from 'react';

class Categories extends Component {
  state = {
    activeItem: 3,
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index,
    });
  };

  render() {
    const { items, onClickItem } = this.props;
    return (
      <div>
        <div>
          <div className="categories">
            <ul>
              <li>Все</li>
              {items.map((name, index) => (
                <li
                  className={this.state.activeItem === index ? 'active' : ''}
                  onClick={() => this.onSelectItem(index)}
                  key={`${name}_${index}`}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// function Categories({ items, onClickItem }) {
//   return (
//     <div>
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default Categories;
