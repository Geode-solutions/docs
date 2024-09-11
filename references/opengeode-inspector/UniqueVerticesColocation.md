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

# class UniqueVerticesColocation


# class UniqueVerticesColocation


# class UniqueVerticesColocation


 Class for inspecting the colocation of unique vertices in a Model (BRep or Section)



## Functions

### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<Model>(const UniqueVerticesColocation<Model> & )
```


### operator=

```cpp
public UniqueVerticesColocation<Model> & operator=(const UniqueVerticesColocation<Model> & )
```


### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<Model>(const Model & model)
```


### ~UniqueVerticesColocation

```cpp
public void ~UniqueVerticesColocation<Model>()
```


### model_has_unique_vertices_linked_to_different_points

```cpp
public bool model_has_unique_vertices_linked_to_different_points()
```


### model_has_colocated_unique_vertices

```cpp
public bool model_has_colocated_unique_vertices()
```


### inspect_unique_vertices

```cpp
public UniqueVerticesInspectionResult inspect_unique_vertices()
```




