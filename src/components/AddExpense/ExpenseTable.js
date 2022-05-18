import React from 'react';



const ExpenseTable = ({expense, setUpdateExp}) => {

    return (
        <tr className='hover'>
            <td>{expense.sl}</td>
            <td>{expense.date}</td>
            <td>{expense.expense}</td>
            <td>{expense.category}</td>
            <td>{expense.subcategory}</td>
            <td>{expense.amount}</td>
            <td>User</td>
            <td><label for="update-modal" onClick={()=>setUpdateExp(expense)} className='btn btn-primary'>Edit</label></td>
            <td><button className='btn btn-warning'>Delete</button></td>
        </tr>
    );
};

export default ExpenseTable;