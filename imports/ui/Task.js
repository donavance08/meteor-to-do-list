import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
	return (
		<li>
			<input
				type='checkbox'
				checked={!!task.isChecked}
				readOnly
				onClick={() => onCheckboxClick(task)}
			/>

			<span>{task.text}</span>

			<button onClick={() => onDeleteClick(task)}>&times;</button>
		</li>
	);
};
