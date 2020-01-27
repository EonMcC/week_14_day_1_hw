import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
    render() {
        const filmNode = this.props.data.map(film => {
            return (
                <Film url={film.url} key={film.id}>{film.name}</Film>
            )
        })

        return (
            <div className="film-list">
            {filmNode}
        </div>
        )
    }

}

export default FilmList;