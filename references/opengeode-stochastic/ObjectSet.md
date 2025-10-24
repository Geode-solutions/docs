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
public void ObjectSet<Type>()
```


### ObjectSet

```cpp
public void ObjectSet<Type>(ObjectSet<Type> && )
```


### operator=

```cpp
public ObjectSet<Type> & operator=(ObjectSet<Type> && )
```


### set_name

```cpp
public void set_name(basic_string_view name)
```


### get_object

```cpp
public const Type & get_object(index_t index)
```


### add_object

```cpp
public index_t add_object(Type && object)
```


### update_object

```cpp
public void update_object(index_t index, Type && object)
```


### remove_object

```cpp
public void remove_object(index_t index)
```


### size

```cpp
public index_t size()
```


### empty

```cpp
public bool empty()
```


### string

```cpp
public basic_string string()
```




# class ObjectSet


```cpp
Inherits from Identifier
```



