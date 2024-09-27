
import './Editor.css';
import { useState, useRef } from 'react';


const Editor = ({ onCreate }) => {

    const contentRef = useRef();
    const [content, setContent] = useState('');

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('')
    }


    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }


    return (
        <div className="Editor">
            <input ref={contentRef} value={content} placeholder="새로운 Todo..." onChange={onChangeContent} onKeyDown={onKeyDown} />
            <button onClick={onSubmit}>추가</button>
        </div>
    );

}

export default Editor;