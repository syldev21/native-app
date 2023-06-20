import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem task={item} onDelete={onDelete} onToggleComplete={onToggleComplete} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;
