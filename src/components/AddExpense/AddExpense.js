import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ExpenseField from './ExpenseField';

const AddExpense = () => {
    const [date, setDate]= useState(new Date());
    return (
        <div>
            <h1 className='text-3xl text-center text-green-600 my-8'>Add a New Expense</h1>
            <div className='flex justify-center items-center flex-col'>
            <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            />
            <p>Today Is {format(date, 'PP')}</p>
            </div>
            <ExpenseField date={date}></ExpenseField>
        </div>
    );
};

export default AddExpense;