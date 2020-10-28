import Mock from 'mockjs'

/**
 * 局部搜索的用户列表数据
 */
export const usersList = Mock.mock({
    'err_code':"0",
    'success_code':'200',
    'data|18':[{
        "id|+1":1,
		"username|1":['kitty','张三','王明','李玲','李四'],
        "age|15-40":18,
		"sex|1":["男","女"],
    }]
});
