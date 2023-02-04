import React from 'react';
function MyControlledForm2()
{
    const [height,setHeight] = React.useState("");
    const [width,setWidth] = React.useState("");
    const [result,setResult] = React.useState("");
    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(height);
        console.log(width);
        var area = parseInt(height) * parseInt(width);
        setResult(area);
    }
    return (
        <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3>form using Controlled Component approach (functional Component)</h3>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={onSubmitForm}>
                                    <div className='mb-3'>
                                        <label htmlFor='height' className='form-label'>Height</label>
                                        <input type='number' id='height'  className='form-control' value={height} 
                                        onChange={(e) => setHeight(e.target.value)} required />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='width' className='form-label'>Width</label>
                                        <input type='number' id='width'  className='form-control' value={width} 
                                        onChange={(e) => setWidth(e.target.value)} required />
                                    </div>
                                    <button  className='btn btn-danger'>Calculate area</button>&nbsp;
                                    <button type='reset' className='btn btn-warning'>clear all</button>
                                    <h1>{result}</h1>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default MyControlledForm2;