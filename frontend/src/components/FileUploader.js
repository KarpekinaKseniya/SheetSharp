import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './drop-file-input.css';
import {ImageConfig} from "../config/ImageConfig";
import { MdDeleteForever } from "react-icons/md";

const FileUploader = props => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        const fileType = newFile.type.split("/")[1];
        console.log(newFile)
        if (newFile) {
            newFile["SIZE_MB"] = Math.round(newFile.size / 1024 / 1024 * 100) / 100;
            if (fileList.length !== 0) {
                alert("You can work only with 1 file");
            } else if (fileType !== "vnd.ms-excel" &&
                fileType !== "vnd.openxmlformats-officedocument.spreadsheetml.sheet" && fileType !== "csv") {
                alert("Incorrent file type");
            } else if (newFile["SIZE_MB"] > 10) {
                alert("Size more 10MB");
            } else {
                const updatedList = [...fileList, newFile];
                setFileList(updatedList);
                props.onFileChange(updatedList);
            }
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <div className="box">
            <h2 className="header">
                React drop files input
            </h2>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={"/drag_and_drop.png"}
                         alt="" />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} />
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] ||
                                    ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.SIZE_MB}MB</p>
                                    </div>
                                    <span className="drop-file-preview__item__del"
                                          onClick={() => fileRemove(item)}>
                                        <MdDeleteForever className="drop-file-preview__icon__del"/>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    );
}

FileUploader.propTypes = {
    onFileChange: PropTypes.func
}

export default FileUploader;