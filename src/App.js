import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./action";

function App() {

    const todos = useSelector(state => state.todos)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadTodos())
    }, [])

  return (
   <div>
       <div>Список:</div>
       {loading ? 'Идеть загрузка...' : (
           todos.map(item => {
               return (
                   <div>
                       {item.title}
                   </div>
               )
           }))}
   </div>
  );
}

export default App;
