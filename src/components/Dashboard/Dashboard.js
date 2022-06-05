import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet />

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-68 text-base-content mt-px bg-red-200">
                    <div class="collapse">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title flex justify-between">
                           <img className='h-6' src="https://www.svgrepo.com/show/93814/information.svg" alt="" />Add Informations +
                        </div>
                        <div class="collapse-content">
                            <li><Link to='/dashboard/addcategories'><img src='https://www.svgrepo.com/show/356425/category.svg' alt="" /> Add Categories</Link></li>
                            <li><Link to='/dashboard/addsubcategories'><img src='https://www.svgrepo.com/show/356425/category.svg' alt="" />Add Sub-Categories</Link></li>
                            <li><Link to='/dashboard/addbank'><img className='h-6' src="https://www.svgrepo.com/show/71268/bank.svg" alt="" /> Add Bank Name</Link></li>
                            <li><Link to='/dashboard/addaccounts'><img className='h-6' src="https://www.svgrepo.com/show/4765/bank-sign.svg" alt="" /> Add Bank Accounts</Link></li>
                        </div>
                    </div>
                    <li><Link to='/dashboard/addexpense'><img className='h-10' src="https://www.svgrepo.com/show/374662/expense-report.svg" alt="" /> Add Expenses</Link></li>
                    <li><Link to='/dashboard/addcheque'><img className='h-8' src="https://www.svgrepo.com/show/86220/check.svg" alt="" /> Add Cheques</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;