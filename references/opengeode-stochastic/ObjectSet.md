<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class ObjectSet


```cpp
Inherits from Identifier
```



# class ObjectSet


```cpp
Inherits from Identifier
```



# class ObjectSet


```cpp
Inherits from Identifier
```



## Functions

### ObjectSet

```cpp
public void ObjectSet<Type>(const ObjectSet<Type> & )
```


### operator=

```cpp
public ObjectSet<Type> & operator=(const ObjectSet<Type> & )
```


### set_name

```cpp
public void set_name(std::string_view name)
```


### ObjectSet

```cpp
public void ObjectSet<Type>()
```


### ~ObjectSet

```cpp
public void ~ObjectSet<Type>()
```


### ObjectSet

```cpp
public void ObjectSet<Type>(ObjectSet<Type> && )
```


### operator=

```cpp
public ObjectSet<Type> & operator=(ObjectSet<Type> && )
```


### get_fixed_object

```cpp
public const Type & get_fixed_object(index_t index)
```


### get_free_object

```cpp
public const Type & get_free_object(index_t index)
```


### add_fixed_object

```cpp
public index_t add_fixed_object(Type && object)
```


### add_free_object

```cpp
public index_t add_free_object(Type && object)
```


### update_free_object

```cpp
public void update_free_object(index_t index, Type && object)
```


### remove_free_object

```cpp
public void remove_free_object(index_t index)
```


### nb_objects

```cpp
public index_t nb_objects()
```


### nb_fixed_objects

```cpp
public index_t nb_fixed_objects()
```


### nb_free_objects

```cpp
public index_t nb_free_objects()
```


### empty

```cpp
public bool empty()
```


### string

```cpp
public std::string string()
```




# class ObjectSet


```cpp
Inherits from Identifier
```



