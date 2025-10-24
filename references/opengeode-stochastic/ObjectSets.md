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

# class ObjectSets


# class ObjectSets


# class ObjectSets


## Functions

### ObjectSets

```cpp
public void ObjectSets<Type>(const ObjectSets<Type> & )
```


### operator=

```cpp
public ObjectSets<Type> & operator=(const ObjectSets<Type> & )
```


### ObjectSets

```cpp
public void ObjectSets<Type>()
```


### ObjectSets

```cpp
public void ObjectSets<Type>(ObjectSets<Type> && )
```


### operator=

```cpp
public ObjectSets<Type> & operator=(ObjectSets<Type> && )
```


### get_set

```cpp
public const ObjectSet<Type> & get_set(const uuid & set_id)
```


### get_object

```cpp
public const Type & get_object(const ObjectId & object_id)
```


### get_all_object

```cpp
public vector get_all_object()
```


### nb_sets

```cpp
public index_t nb_sets()
```


### nb_objects_in_set

```cpp
public index_t nb_objects_in_set(const uuid & set_id)
```


### nb_objects

```cpp
public index_t nb_objects()
```


### add_set

```cpp
public uuid add_set(basic_string_view name)
```


### add_object

```cpp
public ObjectId add_object(Type && object, const uuid & set_id)
```


### update_object

```cpp
public void update_object(const ObjectId & object_id, Type && object)
```


### remove_object

```cpp
public void remove_object(const ObjectId & object_id)
```


### neighbors

```cpp
public vector neighbors(const ObjectId & object_id, double searching_distance)
```


### neighbors

```cpp
public vector neighbors(const Type & object, double searching_distance)
```


### string

```cpp
public basic_string string()
```




# class ObjectSets


