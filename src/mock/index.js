import Mock from 'mockjs'
import {usersList} from './data/usersList.js'

Mock.mock('api/userslist','get',usersList);