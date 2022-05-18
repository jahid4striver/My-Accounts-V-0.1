import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ExpenseTable from './ExpenseTable';

const ExpenseField = ({ date }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [expenses, setExpenses] = useState([])
    const [today, setToday]= useState('');
    
    

    const formatedDate= format(date, 'PP');
    
    useEffect(() => {
        fetch('http://localhost:5000/dailyledger')
            .then(res => res.json())
            .then(data => {
            setExpenses(data)
                })
    }, [expenses, setExpenses])



    const onSubmit = (data) => {
        fetch('http://localhost:5000/dailyledger', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToday(formatedDate)
                reset();

            })
    }

    return (
        <div className='shadow-2xl px-12 my-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-5 grid grid-cols-1 md:gird-cols-3 lg:grid-cols-7 gap-4 justify-items-center'>
                <input {...register("sl")} type="text" placeholder="SL" class="input input-bordered w-full max-w-xs" />
                <input {...register("date")} type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                <input {...register("expense")} type="text" placeholder="Expense Name" class="input input-bordered w-full max-w-xs" />
                <input {...register("category")} type="text" placeholder="Category" class="input input-bordered w-full max-w-xs" />
                <input {...register("subcategory")} type="text" placeholder="Sub Category" class="input input-bordered w-full max-w-xs" />
                <input {...register("amount")} type="text" placeholder="Amount" class="input input-bordered w-full max-w-xs" />
                <input type='submit' value='Add Expense' className='btn btn-primary' />
            </form>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Date</th>
                                <th>Expense Name</th>
                                <th>Category</th>
                                <th>Sub Category</th>
                                <th>Amount</th>
                                <th>User</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                expenses.map(expense => <tr>
                                    <td>{expense.sl}</td>
                                    <td>{expense.date}</td>
                                    <td>{expense.expense}</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.subcategory}</td>
                                    <td>{expense.amount}</td>
                                    <td>User</td>
                                    <td><button className='btn btn-primary'>Edit</button></td>
                                    <td><button className='btn btn-danger'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ExpenseField;