import React from 'react';

const Student = (props) => {
    // const onDeleteStudent = () => {
    //     props.deleteStudent();
    // }

    const { data, deleteStudent, editStudent } = props;
    const updatedNameInput = React.createRef();

    const onDeleteStudent = () => {
        deleteStudent();
    }

    const onEditStudent = () => {
        const editData = {
            id: data.id,
            name: data.name,
            editingStatus: !data.editingStatus
        };
        editStudent(data.id, editData);
    }

    const onConfirmEdit = () => {
        const editData = {
            id: data.id,
            name: updatedNameInput.current.value,
            editingStatus: false
        };
        editStudent(data.id, editData);
    }

    const onCancelEdit = () => {
        const editData = {id: data.id, name: data.name, editingStatus: false};
        editStudent(data.id, editData);
    }

    const editForm = (
        <div className="row">
            <div className="input-group mb-3">
                <input type="text" className="form-control col-6" name="updatedName" ref={updatedNameInput} id="updatedNameInput" aria-describedby="helpId" placeholder="" defaultValue={data.name}/>
                <button
                    onClick={onCancelEdit.bind()}
                    className="btn btn-outline-primary btn-sm ml-1 col-3"
                >Cancel</button>
                <button
                    onClick={onConfirmEdit.bind()}
                    className="btn btn-outline-primary btn-sm ml-1 col-3"
                >OK</button>
            </div>
        </div>
    )

    return (
        <div className="card">
            <div className="card-header text-center">
                <button type="button" className="btn btn-outline-success btn-sm mr-1" onClick={onEditStudent}>edit</button>
                <button type="button" className="btn btn-outline-danger btn-sm mr-1" onClick={onDeleteStudent}>delete</button>
            </div>
            <div className="card-body">
                <dl className="row">
                    <dt className="col-6">id: </dt>
                    <dd className="col-6">{props.data.id}</dd>
                    <dd className="col-6">name: </dd>
                    <dd className="col-6">{props.data.name}</dd>
                </dl>
                {
                    props.data.editingStatus ?
                    editForm :
                    null
                }
            </div>
            {/* <div className="card-footer text-muted">
                Footer
            </div> */}
        </div>
    )
}

export default Student;
