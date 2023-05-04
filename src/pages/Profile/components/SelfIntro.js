import React, {useState} from 'react';
import './SelfIntro.scss';


function EditableText() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('自我介紹');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setText('Initial text.');
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="dashboard_below">
      {isEditing ? (
        <div style={{width: '90%', height: '80%'}}>
          <div className="dashboard_below_button">
            <button onClick={handleSave}>儲存</button>
            <button onClick={handleCancel}>取消</button>
          </div>
          <input
            className="dashboard_below_text"
            type="text"
            value={text}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div style={{width: '90%', height: '100%'}}>
          <div className="dashboard_below_button">
            <button onClick={handleEdit}>編輯</button>
          </div>
          <div
            className="dashboard_below_text"
            style={{wordWrap: 'break-word'}}
          >
            {text}
          </div>
        </div>
      )}
    </div>
  );
}

export default EditableText;
