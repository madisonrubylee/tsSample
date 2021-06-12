{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    // Partial 유틸리티 타입은 기존의 타입 중 부분적인 것만 허용하고 싶을 때 이용 할 수 있다 
    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>):ToDo {
        return {...todo, ...fieldsToUpdate};
    }

    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };

        // 기존의 데이터를 유지하면서 priority만 변경된것 
    const updated = updateTodo(todo, {priority: 'low' });
    console.log(updated);
}