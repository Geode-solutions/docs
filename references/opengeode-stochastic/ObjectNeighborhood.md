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

# class ObjectNeighborhood


## Functions

### ObjectNeighborhood

```cpp
public void ObjectNeighborhood<dimension>()
```


### ~ObjectNeighborhood

```cpp
public void ~ObjectNeighborhood<dimension>()
```


### add

```cpp
public void add(const BoundingBox<dimension> & box, const ObjectId & id)
```


### update

```cpp
public void update(const BoundingBox<dimension> & old_box, const BoundingBox<dimension> & new_box, const ObjectId & id)
```


### update

```cpp
public void update(const BoundingBox<dimension> & box, const ObjectId & old_id, const ObjectId & new_id)
```


### remove

```cpp
public void remove(const BoundingBox<dimension> & box, const ObjectId & id)
```


### get_all_neighbor_ids

```cpp
public vector get_all_neighbor_ids(const BoundingBox<dimension> & box, optional exclude_self_id)
```




# class ObjectNeighborhood


# class ObjectNeighborhood


