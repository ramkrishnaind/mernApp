import { Typography } from '@material-ui/core';
import React from 'react'
import FormHeader from '../../../../common/form-header'
import BreadCrumbs from '../../../../common/bread-crumbs'
import UserTableData from '../index'
//import {useDispatch} from 'react-redux';
//import GlobalStyles from '../../../components/global-styles/index'
// import Styles from './index.module.scss'

const AddUsers = () => {
    return (
        <div>
            <FormHeader />
            <BreadCrumbs heading1={"User Role"} heading2={"User Role List"}/>
            <UserTableData/>
            
        </div>
    )
}

export default AddUsers;
