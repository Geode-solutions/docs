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


# class ObjectSet


# class ObjectSet


## Functions

### get_subset

```cpp
public const std::vector<Type> & get_subset(const uuid & subset_id)
```


### get_object

```cpp
public const Type & get_object(const ObjectId & object_id)
```


### get_all_object

```cpp
public vector get_all_object()
```


### nb_subsets

```cpp
public index_t nb_subsets()
```


### nb_objects_in_subset

```cpp
public index_t nb_objects_in_subset(const uuid & subset_id)
```


### nb_objects

```cpp
public index_t nb_objects()
```


### add_subset

```cpp
public void add_subset(const uuid & subset_id)
```


### add_subset

```cpp
public uuid add_subset()
```


### add_object

```cpp
public ObjectId add_object(Type && object, const uuid & subset_id)
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




# class ObjectSet


