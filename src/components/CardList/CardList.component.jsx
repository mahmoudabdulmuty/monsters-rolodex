import { Card } from '../Card/Card.component';
import './CardList.style.css';

const CardList = ({ monsters }) => {
	return (
		<div className="card-list">
			{monsters.map((monster) => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};
export default CardList;
