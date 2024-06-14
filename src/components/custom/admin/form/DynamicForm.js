import React, {useState} from 'react';
import DescriptionList from "../dl/DescriptionList";
import {TranslateKeys} from "../dl/TranslateKeys"; // 수정: React에서 useState 임포트


const DynamicForm = ({fields, context, rowSizes}) => {
    const translatedFields = TranslateKeys(fields.reduce((acc, field) => {
        acc[field.name] = field.term;
        return acc;
    }, {}), context);

    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [form, setForm] = useState(initialFormState);

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', form);
    };

    const items = fields.map(field => ({
        term: translatedFields[field.name] || field.term,
        description: field.type === 'select' ? (
            <select
                className="form-control"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required={field.required}
            >
                {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>{option.label}</option>
                ))}
            </select>
        ) : field.type === 'radio' ? (
            field.options.map((option, idx) => (
                <div key={idx} className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={field.name}
                        value={option.value}
                        checked={form[field.name] === option.value}
                        onChange={handleChange}
                        required={field.required}
                    />
                    <label className="form-check-label">
                        {option.label}
                    </label>
                </div>
            ))
        ) : field.type === 'checkbox' ? (
            <input
                className="form-check-input"
                type="checkbox"
                name={field.name}
                checked={form[field.name]}
                onChange={handleChange}
                required={field.required}
            />
        ) : (
            <input
                className="form-control"
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required={field.required}
            />
        )
    }));

    return (
        <form onSubmit={handleSubmit}>
            <DescriptionList items={items} rowSizes={rowSizes} dtWidth={150}/>
            <button type="submit" className="btn btn-primary">제출</button>
        </form>
    );
};

export default DynamicForm;
