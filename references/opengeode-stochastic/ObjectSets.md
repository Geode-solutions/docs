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


# class ObjectSets


## Functions

### get_set

```cpp
public const ObjectSet<Type> & get_set(const uuid & set_id)
```


### get_object

```cpp
public const Type & get_object(const ObjectId & object_id)
```


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


### get_all_object

```cpp
public std::vector<ObjectId> get_all_object()
```


### ~ObjectSets

```cpp
public void ~ObjectSets<Type>()
```


### ObjectSets

```cpp
public void ObjectSets<Type>(ObjectSets<Type> && )
```


### operator=

```cpp
public ObjectSets<Type> & operator=(ObjectSets<Type> && )
```


### get_objects_in_set

```cpp
public std::vector<ObjectId> get_objects_in_set(const uuid & set_id)
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
public uuid add_set(std::string_view name)
```


### add_object

```cpp
public ObjectId add_object(Type && object, const uuid & set_id, bool fixed)
```


### update_free_object

```cpp
public void update_free_object(const ObjectId & object_id, Type && object)
```


### remove_free_object

```cpp
public void remove_free_object(const ObjectId & object_id)
```


### neighbors

```cpp
public std::vector<ObjectId> neighbors(const Type & object, const std::vector<uuid> & targeted_set_ids, double searching_distance, std::optional<ObjectId> exclude_id)
```


### string

```cpp
public std::string string()
```


### get_set_uuid

```cpp
public uuid get_set_uuid(std::string_view set_name)
```


### get_set_uuids

```cpp
public std::vector<uuid> get_set_uuids(const std::vector<std::string> & set_names)
```


### get_set_uuid_pairs

```cpp
public std::vector<std::pair<uuid, uuid>> get_set_uuid_pairs(const std::vector<std::pair<std::string, std::string>> & set_name_pairs)
```




