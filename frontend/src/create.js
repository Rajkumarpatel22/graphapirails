export default function Create(){
	return (
      <div>
        <div className="taskContainer">
          <input
            className="newTask"
            type="text"
            placeholder="Input a New Task and Press Enter"
            maxLength="75"
          />
        </div>
        <div className="wrapItems">
          <ul className="listItems"></ul>
        </div>
      </div>
    );

}