import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import TodoListItem from './TodoListItem'

const TodoList = ({Todos, onRemove, onToggle}) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {Todos.map(Todo => (
                <TodoListItem 
                    key={Todo.id} 
                    {...Todo} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;