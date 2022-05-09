import './ToDoStyles.css';

function TodoTask() {
	
	return (
		<div className="cardTask">
			<div>
                <p>Fazer lição</p>
            </div>

            <div className="line2" >
            <span className="btn-excluir">X</span>
            </div>
		</div>
	);
}

export default TodoTask;