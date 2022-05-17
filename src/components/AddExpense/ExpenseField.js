import { format } from 'date-fns';
import React from 'react';
import { useForm } from "react-hook-form";

const ExpenseField = ({selected}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const date= format(selected, 'PP');
    const newDate= date.toString()

    const onSubmit= (data)=>{
        console.log(data);
    }

    return (
        <div className='shadow-2xl px-12 my-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-5 grid grid-cols-1 md:gird-cols-3 lg:grid-cols-7 gap-4 justify-items-center'>
            <input {...register("sl")} type="text" placeholder="SL" value='01' class="input input-bordered w-full max-w-xs" />
        <input {...register("date")} type="text" disabled value={newDate} class="input input-bordered w-full max-w-xs" />
            <input {...register("expense")} type="text" placeholder="Expense Name" class="input input-bordered w-full max-w-xs" />
            <input {...register("category")} type="text" placeholder="Category" class="input input-bordered w-full max-w-xs" />
            <input {...register("subcategory")} type="text" placeholder="Sub Category" class="input input-bordered w-full max-w-xs" />
            <input {...register("amount")} type="text" placeholder="Amount" class="input input-bordered w-full max-w-xs" />
            <input type='submit' value='Add Expense' className='btn btn-primary'/>
            </form>
        </div>
    );
};

export default ExpenseField;