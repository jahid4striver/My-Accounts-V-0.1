import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ExpenseField from './ExpenseField';

const AddExpense = () => {
    const [selected, setSelected]= useState(new Date());
    return (
        <div>
            <h1 className='text-3xl text-center text-green-600 my-8'>Add a New Expense</h1>
            <div className='flex justify-center items-center flex-col'>
            <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            />
            <p>Today Is {format(selected, 'PP')}</p>
            </div>
            <ExpenseField selected={selected}></ExpenseField>
        </div>
    );
};

export default AddExpense;